import * as React from "react";
import {useSelector} from "react-redux";

import {getCarsData} from "../reducer/selectors";

import Banner from "./banner";
import Calculator from "./calculator";

interface Props {
  car: string;
}

export const CarPage:React.FunctionComponent<Props> = (props: Props) => {
  const {car} = props;
  const headerData = useSelector(getCarsData);
  const {name, banner, calculator} = headerData[car];

  return (
    <main className="car-page">
      <section className="car-page__car-list car-list">
        <h1 className="visually-hidden">Test car</h1>
        <div className="car-list__car car">
          <Banner banner={banner}/>
          <Calculator name={name} calculator={calculator} />
        </div>
      </section>
    </main>
  );
};

export default CarPage;
