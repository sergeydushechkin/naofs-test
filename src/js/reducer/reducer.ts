import {Header, Data, CarsKeyData} from "../types";
import {Dispatch} from "redux";

interface Action {
  type: string;
  payload: Header | CarsKeyData;
}

interface State {
  header: Header;
  cars: CarsKeyData;
}

const initialState:State = {
  header: null,
  cars: {},
};

const ActionType = {
  LOAD_CARS: `LOAD_CARS`,
  LOAD_HEADER: `LOAD_HEADER`,
};

const ActionCreator = {
  loadHeader: (data: Header):Action => ({
    type: ActionType.LOAD_CARS,
    payload: data,
  }),
  loadCars: (data: CarsKeyData):Action => ({
    type: ActionType.LOAD_HEADER,
    payload: data,
  }),
};

const Operation = {
  loadData: () => (dispatch: Dispatch, getState: State, api: {getData: () => Data}): void => {
    const appData = api.getData();
    dispatch(ActionCreator.loadCars(appData.cars));
    dispatch(ActionCreator.loadHeader(appData.header));
  },
};

const reducer = (state = initialState, action: Action):State => {
  switch (action.type) {
    case ActionType.LOAD_CARS:
      return Object.assign({}, state, {cars: action.payload});
      break;
    case ActionType.LOAD_HEADER:
      return Object.assign({}, state, {header: action.payload});
      break;
  }

  return state;
};

export {reducer, ActionCreator, Operation, ActionType, State};
