import {CarsKeyData, Header} from "../types";
import {State} from "./reducer";

const getCarsData = (state: State):CarsKeyData => {
  return state.cars;
};

const getHeaderData = (state: State):Header => {
  return state.header;
};

export {getCarsData, getHeaderData};
