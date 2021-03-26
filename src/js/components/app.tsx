import * as React from "react";
import {useDispatch} from "react-redux";

import {Operation} from "../reducer/reducer";

import CarHeader from "./car-header";
import CarPage from "./car-page";

export const App:React.FunctionComponent = () => {

  const dispatch = useDispatch();
  dispatch(Operation.loadData());

  return (
    <React.Fragment>
      <CarHeader />
      <CarPage car={`solaris`}/>
    </React.Fragment>
  );
};

export default App;
