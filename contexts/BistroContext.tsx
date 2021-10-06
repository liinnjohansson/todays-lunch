import React, {
  createContext,
  FC,
  useState,
  useEffect,
  useReducer,
  useContext,
} from "react";
import { BistroData, bistros } from "../data/bistroData";
import bistroReducer, { BistroAction } from "../reducers/bistroReducer";

//***************************************
// Mock data will be read when application is started from data.ts

//***************************************
export interface OpenBistro {
  weekday: "monday" | "tuesday" | "wednesday" | "thursday" | "friday";
  weekNumber: number;
}

interface ContextValue {
  storedBistros: BistroData[];
  openBistros: BistroData[];
  likedBistros: BistroData[];
  dispatch: React.Dispatch<BistroAction>;
  updateStateOpenBistros: (data: OpenBistro) => void;
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

// TODO: Kod för localstorage, behövs det i denna app ?
// const BistroProvider: FC = (props) => {
// 	const [ storedBistros, setStoredBistros ] = useState<BistroData[]>(() => {
// 		const localData = localStorage.getItem('storedBistros');
// 		return localData ? JSON.parse(localData) : bistros;
// 	});

const BistroProvider: FC = ({ children }) => {
  const [storedBistros, dispatch] = useReducer(bistroReducer, bistros);
  const [openBistros, setOpenBistros] = useState<BistroData[]>([]);
  const [likedBistros, setLikedBistros] = useState<BistroData[]>([]);

  // TODO: Kod för local storage..??
  // useEffect(() => {
  // 	localStorage.setItem('storedBistros', JSON.stringify(storedBistros))
  // }, [storedBistros])

  const updateStateOpenBistros = (data: OpenBistro) => {
    const returnList: BistroData[] = [];

    storedBistros.forEach((bistro) => {
      const lunchOfTheWeekOffer = bistro.lunchOfTheWeekOffer?.find(
        (lunch) => lunch.weekNumber == data.weekNumber
      );
      if (lunchOfTheWeekOffer) {
        lunchOfTheWeekOffer[data.weekday] ? returnList.push(bistro) : {};
      } else {
        bistro.lunchOfTheWeekDefault[data.weekday]
          ? returnList.push(bistro)
          : {};
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
