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

  const [priceSelected, setPriceSelected] = React.useState(price.selected);
  const [contributionSelected, setContributionSelected] = React.useState(contribution.selected);
  const [leasingSelected, setLeasingSelected] = React.useState(leasing.selected);

  return (
    <div className="car__calculator calculator">
      <ul className="calculator__fields fields">
        <li className="fields__field field">
          <Indicator
            title={`Цена ${name}:`}
            value={formatPrice(Math.round(priceSelected))}
            currency={`\u20bd`}
            percent={``}
          />
          <Slider
            min={price.min}
            max={price.max}
            selected={priceSelected}
            measure={`\u20bd`}
            cbFormat={formatPrice}
            cbSetValue={setPriceSelected}
          />
        </li>
        <li className="fields__field field">
          <Indicator
            title={`Первоначальный взнос`}
            value={formatPrice(Math.round(priceSelected / 100 * contributionSelected))}
            currency={`\u20bd`}
            percent={`${Math.round(contributionSelected)}`}
          />
          <Slider
            min={contribution.min}
            max={contribution.max}
            selected={contributionSelected}
            measure={`%`}
            cbFormat={formatDummy}
            cbSetValue={setContributionSelected}
          />
        </li>
        <li className="fields__field field">
          <Indicator
            title={`Срок лизинга`}
            value={formatFromMonth(Math.round(leasingSelected))}
            currency={``}
            percent={``}
          />
          <Slider
            min={leasing.min}
            max={leasing.max}
            selected={leasingSelected}
            measure={``}
            cbFormat={formatFromMonth}
            cbSetValue={setLeasingSelected}
          />
        </li>
      </ul>
      <Results payment={payment} economy={economy} />
      <div className="calculator__annotation">Расчет носит предварительный характер</div>
    </div>
  );
};

export default Calculator;
