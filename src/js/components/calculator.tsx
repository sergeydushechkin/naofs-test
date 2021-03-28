import * as React from "react";
import {CarCalculator} from "../types";
import {formatFromMonth, formatPrice, formatDummy} from "../utils";
import Slider from "./slider";

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
          <div className="field__indicator indicator">
            <div className="indicator__description">Цена {name}:</div>
            <div className="indicator__values">
              <div className="indicator__value">{formatPrice(price.min)} <span className="indicator__currency">&#8381;</span></div>
            </div>
          </div>
          <Slider min={price.min} max={price.max} selected={price.min} measure={`\u20bd`} cbFormat={formatPrice} />
          <div className="field__slider slider">
            <div className="slider__axis">
              <div className="slider__cursor"><span className="visually-hidden">Control</span></div>
            </div>
            <div className="slider__labels">
              <div className="slider__min">{formatPrice(price.min)} &#8381;</div>
              <div className="slider__max">{formatPrice(price.max)} &#8381;</div>
            </div>
          </div>
        </li>
        <li className="fields__field field">
          <div className="field__indicator indicator">
            <div className="indicator__description">Первоначальный взнос</div>
            <div className="indicator__values">
              <div className="indicator__value">{formatPrice(price.min / 100 * contribution.min)} <span className="indicator__currency">&#8381;</span></div>
              <div className="indicator__percent">{contribution.min}%</div>
            </div>
          </div>
          <div className="field__slider slider">
            <div className="slider__axis">
              <div className="slider__cursor"><span className="visually-hidden">Control</span></div>
            </div>
            <div className="slider__labels">
              <div className="slider__min">{contribution.min}%</div>
              <div className="slider__max">{contribution.max}%</div>
            </div>
          </div>
        </li>
        <li className="fields__field field">
          <div className="field__indicator indicator">
            <div className="indicator__description">Срок лизинга</div>
            <div className="indicator__values">
              <div className="indicator__value">{formatFromMonth(leasing.selected)}</div>
            </div>
          </div>
          <div className="field__slider slider">
            <div className="slider__axis">
              <div className="slider__cursor"><span className="visually-hidden">Control</span></div>
            </div>
            <div className="slider__labels">
              <div className="slider__min">{formatFromMonth(leasing.min)}</div>
              <div className="slider__max">{formatFromMonth(leasing.max)}</div>
            </div>
          </div>
        </li>
      </ul>
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
      <div className="calculator__annotation">Расчет носит предварительный характер</div>
    </div>
  );
};

export default Calculator;
