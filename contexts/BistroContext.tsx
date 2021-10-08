import * as SecureStore from "expo-secure-store";
import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useReducer,
  useState,
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
  likedBistros: string[];
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
  const [likedBistros, setLikedBistros] = useState<string[]>([]);
  const [key, setKey] = useState<string>("likedBistros");

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
    if (likedBistros.includes(bistro.id)) {
      removeLikedBistro(bistro);
    } else {
      addLikedBistro(bistro);
    }
  };

  const addLikedBistro = (bistro: BistroData) => {
    const copy = [...likedBistros];
    const likedBistrosToSave = [...copy, bistro.id];
    setLikedBistros(likedBistrosToSave);
    SecureStore.setItemAsync(key, likedBistrosToSave.toString());
  };

  const removeLikedBistro = (bistro: BistroData) => {
    SecureStore.deleteItemAsync(key);
    const updatedLikedBistrosList = likedBistros.filter(
      (item) => item !== bistro.id
    );
    setLikedBistros(updatedLikedBistrosList);
    SecureStore.setItemAsync(
      key,
      updatedLikedBistrosList.toString()
    );
  };

  useEffect(() => {
    const getLikedBistrosFromStorage = async () => {
      let result = await SecureStore.getItemAsync(key);
      if (result) {
        setLikedBistros(result.split(","));
      }
    };
    getLikedBistrosFromStorage();
  }, []);

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
