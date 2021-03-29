import * as React from "react";

import {formatPrice} from "../utils";

interface Props {
  economy: number;
  payment: {
    month: number;
    day: number;
  }
}

export const Results:React.FunctionComponent<Props> = (props: Props) => {
  const {economy, payment} = props;

  return (
    <div className="calculator__results results">
      <div className="results__main">
        <div className="results__text">
          <div className="results__description">Налоговая экономия на юр.лиц до</div>
          <div className="results__price">
            {formatPrice(economy)} <span className="results__currency">&#8381;</span>
          </div>
        </div>
        <div className="results__button results__button--closed"><span className="visually-hidden">Open</span></div>
      </div>
      <div className="results__details">
        <div className="results__description">Ежемесячный платеж от</div>
        <div className="results__text">
          <div className="results__price results__price--month">
            {formatPrice(payment.month)} <span className="results__currency results__currency--month">&#8381;</span>
            <span className="results__day">или {formatPrice(payment.day)} &#8381; в день</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
