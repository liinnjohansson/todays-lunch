import React, {
  createContext,
  FC,
  useState,
  useReducer,
  useContext,
} from "react";
import { BistroData, bistros } from "../data/bistroData";
import bistroReducer, { BistroAction } from "../reducers/bistroReducer";

//***************************************
// Mock data will be read when application is started from bistroData.ts

//***************************************
export type Weekday =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday";

export interface WeekInfo {
  weekday: Weekday;
  weekNumber: number;
}

interface ContextValue {
  storedBistros: BistroData[];
  openBistros: BistroData[];
  likedBistros: BistroData[];
  dispatch: React.Dispatch<BistroAction>;
  updateStateOpenBistros: (data: WeekInfo) => void;
  toggleLikedBistros: (bistro: BistroData) => void;
  addLikedBistro: (bistro: BistroData) => void;
  removeLikedBistro: (bistro: BistroData) => void;
}

export const BistroContext = createContext<ContextValue>({
  storedBistros: [],
  openBistros: [],
  likedBistros: [],
  dispatch: () => [],
  updateStateOpenBistros: () => {},
  toggleLikedBistros: () => {},
  addLikedBistro: () => {},
  removeLikedBistro: () => {},
});

const BistroProvider: FC = ({ children }) => {
  const [storedBistros, dispatch] = useReducer(bistroReducer, bistros);
  const [openBistros, setOpenBistros] = useState<BistroData[]>([]);
  const [likedBistros, setLikedBistros] = useState<BistroData[]>([]);

  const updateStateOpenBistros = (data: WeekInfo) => {
    const returnList: BistroData[] = [];
    storedBistros.forEach((bistro) => {
      const lunchOfTheWeekOffer = bistro.lunchOfTheWeekOffer?.find(
        (lunch) => lunch.weekNumber == data.weekNumber
      );
      if (lunchOfTheWeekOffer) {
        lunchOfTheWeekOffer[data.weekday] && returnList.push(bistro);
      } else {
        bistro.lunchOfTheWeekDefault[data.weekday] && returnList.push(bistro);
      }
    });
    setOpenBistros(returnList);
  };

  const toggleLikedBistros = (bistro: BistroData) => {
    if (likedBistros.includes(bistro)) {
      removeLikedBistro(bistro);
    } else {
      addLikedBistro(bistro);
    }
  };

  const addLikedBistro = (bistro: BistroData) => {
    setLikedBistros([...likedBistros, bistro]);
  };

  const removeLikedBistro = (bistro: BistroData) => {
    const updatedLikedBistrosList = likedBistros.filter(
      (item) => item.id !== bistro.id
    );
    setLikedBistros(updatedLikedBistrosList);
  };

  return (
    <BistroContext.Provider
      value={{
        dispatch,
        storedBistros: storedBistros,
        openBistros: openBistros,
        likedBistros: likedBistros,
        updateStateOpenBistros,
        toggleLikedBistros,
        addLikedBistro,
        removeLikedBistro,
      }}
    >
      {children}
    </BistroContext.Provider>
  );
};

export const useBistro = () => useContext(BistroContext);
export default BistroProvider;
