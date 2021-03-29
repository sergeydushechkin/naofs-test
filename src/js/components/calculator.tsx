import * as React from "react";
import {CarCalculator} from "../types";
import {formatFromMonth, formatPrice, formatDummy} from "../utils";

import Slider from "./slider";
import Results from "./results";
import Indicator from "./indicator";

interface Props {
  name: string;
  calculator: CarCalculator;
}

export const Calculator:React.FunctionComponent<Props> = (props: Props) => {
  const {name, calculator} = props;
  const {price, contribution, leasing, economy, payment} = calculator;

  return (
    <div className="car__calculator calculator">
      <ul className="calculator__fields fields">
        <li className="fields__field field">
          <Indicator title={`Цена ${name}:`} value={formatPrice(price.selected)} currency={`\u20bd`} percent={``}/>
          <Slider min={price.min} max={price.max} selected={price.selected} measure={`\u20bd`} cbFormat={formatPrice} />
        </li>
        <li className="fields__field field">
          <Indicator title={`Первоначальный взнос`} value={formatPrice(price.min / 100 * contribution.min)} currency={`\u20bd`} percent={`${contribution.min}`}/>
          <Slider min={contribution.min} max={contribution.max} selected={contribution.selected} measure={`%`} cbFormat={formatDummy} />
        </li>
        <li className="fields__field field">
          <Indicator title={`Срок лизинга`} value={formatFromMonth(leasing.selected)} currency={``} percent={``}/>
          <Slider min={leasing.min} max={leasing.max} selected={leasing.selected} measure={``} cbFormat={formatFromMonth} />
        </li>
      </ul>
      <Results payment={payment} economy={economy} />
      <div className="calculator__annotation">Расчет носит предварительный характер</div>
    </div>
  );
};

export default Calculator;
