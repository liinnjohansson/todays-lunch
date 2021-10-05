import React, {
  createContext,
  FC,
  useState,
  useEffect,
  useReducer,
} from "react";
import { BistroData, bistros } from "../data/bistroData";
import bistroReducer, { BistroAction } from "../reducers/bistroReducer";

//***************************************
// Mock data will be read when application is started from data.ts

//***************************************

interface ContextValue {
  storedBistros: BistroData[];
  likedBistros: BistroData[];
  dispatch: React.Dispatch<BistroAction>;
  toggleLikedBistros: (bistro: BistroData) => void;
  addLikedBistro: (bistro: BistroData) => void;
  removeLikedBistro: (bistro: BistroData) => void;
}

export const BistroContext = createContext<ContextValue>({
  storedBistros: [],
  likedBistros: [],
  dispatch: () => {},
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
  // TODO: Ersätt raden över med useReducer....
  const [likedBistros, setLikedBistros] = useState<BistroData[]>([]);

  // TODO: Kod för local storage..??
  // useEffect(() => {
  // 	localStorage.setItem('storedBistros', JSON.stringify(storedBistros))
  // }, [storedBistros])

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
        likedBistros: likedBistros,
        toggleLikedBistros,
        addLikedBistro,
        removeLikedBistro,
      }}
    >
      {children}
    </BistroContext.Provider>
  );
};

export default BistroProvider;
