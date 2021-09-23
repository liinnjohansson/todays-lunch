import { createContext, FC, useState, useEffect } from 'react';
import { BistroData, bistros } from '../data/bistroData';
import uuid from 'react-native-uuid';

//***************************************
// Mock data will be read when application is startad from data.ts

//***************************************

interface ContextValue {
	storedBistros: BistroData[];
	addBistro: (bistro: BistroData) => void;
	removeBistro: (bistro: BistroData) => void;
	editBistro: (bistro: BistroData) => void;
}

export const BistroContext = createContext<ContextValue>({
	storedBistros: [],
	addBistro: () => {},
	removeBistro: () => {},
	editBistro: () => {}
});

// TODO: Kod för localstorage, behövs det i denna app ?
// const BistroProvider: FC = (props) => {
// 	const [ storedBistros, setStoredBistros ] = useState<BistroData[]>(() => {
// 		const localData = localStorage.getItem('storedBistros');
// 		return localData ? JSON.parse(localData) : bistros;
// 	});

const BistroProvider: FC = (props) => {
	const [ storedBistros, setStoredBistros ] = useState<BistroData[]>(bistros);

	useEffect(() => {
		localStorage.setItem('storedBistros', JSON.stringify(storedBistros))
	}, [storedBistros])

	// Check if product exist with given id, else it will be added
	const addBistro = (bistro: BistroData) => {
		if (storedBistros.some((storedBistros) => storedBistros.id === bistro.id)) {
			editBistro(bistro);
		} else {
			// autogenerated string id added
			const newBistro: BistroData = { ...bistro, id: uuid.v4().toString()};
			// const newBistro: BistroData = { ...bistro, id: "test id" };
			setStoredBistros([ ...storedBistros, newBistro ]);
		}
	};

	// Delete all products with same id, (think: trash can icon for one product)
	const removeBistro = (bistro: BistroData) => {
		const updatedListStoredBistros = storedBistros.filter((item) => item.id !== bistro.id);
		setStoredBistros(updatedListStoredBistros);
	};

	// Save edited product by first make a copy, then manipulate it
	const editBistro = (bistro: BistroData) => {
		const index = storedBistros.findIndex((item) => item.id === bistro.id);
		if (index !== -1) {
      //copy storedBistros list
			const updatedList = [ ...storedBistros ];
			//Replace old product in copyed list
			updatedList.splice(index, 1, bistro);
			setStoredBistros(updatedList);
		}
	};

	return (
		<BistroContext.Provider
			value={{
				storedBistros: storedBistros,
				addBistro,
				removeBistro,
				editBistro
			}}
		>
			{props.children}
		</BistroContext.Provider>
	);
};

export default BistroProvider;

