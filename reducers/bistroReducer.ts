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
// interface GetOpenBistrosAction {
//   type: "get-open-bistros";
//   payload: {
//     weekday: "monday" | "tuesday" | "wednesday" | "thursday" | "friday";
//     weekNumber: number;
//  };
// }

export type BistroAction = AddBistroAction | EditBistroAction | RemoveBistroAction;

function bistroReducer(state: BistroData[], action: BistroAction) : BistroData[] {

  switch (action.type) {
      case "add-bistro": {
          const nextBistro = [...state];
          const bistro = action.payload;
      
          const index = state.findIndex((item) => item.id === bistro.id);
          if (index === -1) {
            const newBistro: BistroData = { ...bistro, id: uuid.v4().toString() }
            nextBistro.push(newBistro);
            return nextBistro;
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
      // case "get-open-bistros": {
      //   const nextBistro = [...state];
      //   const returnList: BistroData[] = [];
      //   const weekday = action.payload.weekday;
      //   const weekNumber = action.payload.weekNumber;

      //   nextBistro.forEach(bistro => {
      //     const lunchOfTheWeekOffer = bistro.lunchOfTheWeekOffer?.find(
      //       (lunch) => lunch.weekNumber == weekNumber
      //     );
      //     if (lunchOfTheWeekOffer) {
      //       lunchOfTheWeekOffer[weekday]? returnList.push(bistro) : {};
      //     } else {
      //       bistro.lunchOfTheWeekDefault[weekday]? returnList.push(bistro) : {};
      //     }
      //   });
      //   return returnList;
      // }
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