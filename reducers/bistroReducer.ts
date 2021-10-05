import { BistroData } from "../data/bistroData";
import uuid from "react-native-uuid";

interface AddBistroAction {
  type: "add-bistro";
  payload: BistroData;
}
interface EditBistroAction {
  type: "edit-bistro";
  payload: BistroData;
}
interface RemoveBistroAction {
  type: "remove-bistro";
  payload: BistroData;
}
interface SortBistrosByDayAction {
  type: "sort-bistros-by-day";
  payload: {
    weekday: "monday" | "tuesday" | "wednesday" | "thursday" | "friday";
    weekNumber: number;
 };
}

export type BistroAction = AddBistroAction | EditBistroAction | RemoveBistroAction | SortBistrosByDayAction;

function bistroReducer(state: BistroData[], action: BistroAction) {

  switch (action.type) {
      case "add-bistro": {
          const nextBistro = [...state];
          const bistro = action.payload;
      
          const index = state.findIndex((item) => item.id === bistro.id);
          if (index === -1) {
            const newBistro: BistroData = { ...bistro, id: uuid.v4().toString() }
            return nextBistro.push(newBistro);
          } else {
            return editBistro(state, bistro, index);
          }
      }
      case "edit-bistro": {
        const bistro = action.payload;
        return editBistro(state, bistro);
      }
      case "remove-bistro": {
        const nextBistro = [...state];
        const bistro = action.payload;
        nextBistro.filter((item) => item.id !== bistro.id)
        return nextBistro;
      }
      case "sort-bistros-by-day": {
        const nextBistro = [...state];
        const weekday = action.payload.weekday;
        const weekNumber = action.payload.weekNumber;

        // räkna ut vilken datat som ska hämtas
        // skicka tillbaka i smart format till komponenter
        // * ex. skapa nytt interface för objekt ?

        return nextBistro;
      }
      default: {
          exhaustiveCheck(action);
          return state;
      }
  }
}

export default bistroReducer;

function editBistro(state: BistroData[],bistro: BistroData, index?: number) {
  const nextBistro = [...state];
  if (!index) index = state.findIndex((item) => item.id === bistro.id);
  if (index) nextBistro.splice(index, 1, bistro);
  return nextBistro;
}


function exhaustiveCheck(param: never) {}