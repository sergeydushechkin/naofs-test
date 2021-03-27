import * as React from "react";
import {useSelector} from "react-redux";

import {getCarsData} from "../reducer/selectors";

import Banner from "./banner";

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
          <div className="car__calculator calculator">
            <ul className="calculator__fields fields">
              <li className="fields__field field">
                <div className="field__indicator indicator">
                  <div className="indicator__description">Цена Hyundai Solaris:</div>
                  <div className="indicator__values">
                    <div className="indicator__value">500 000 <span className="indicator__currency">&#8381;</span></div>
                  </div>
                </div>
                <div className="field__slider slider">
                  <div className="slider__axis">
                    <div className="slider__cursor"><span className="visually-hidden">Control</span></div>
                  </div>
                  <div className="slider__labels">
                    <div className="slider__min">500 000 &#8381;</div>
                    <div className="slider__max">1 500 000 &#8381;</div>
                  </div>
                </div>
              </li>
              <li className="fields__field field">
                <div className="field__indicator indicator">
                  <div className="indicator__description">Первоначальный взнос</div>
                  <div className="indicator__values">
                    <div className="indicator__value">50 000 <span className="indicator__currency">&#8381;</span></div>
                    <div className="indicator__percent">10%</div>
                  </div>
                </div>
                <div className="field__slider slider">
                  <div className="slider__axis">
                    <div className="slider__cursor"><span className="visually-hidden">Control</span></div>
                  </div>
                  <div className="slider__labels">
                    <div className="slider__min">10 %</div>
                    <div className="slider__max">49%</div>
                  </div>
                </div>
              </li>
              <li className="fields__field field">
                <div className="field__indicator indicator">
                  <div className="indicator__description">Срок лизинга</div>
                  <div className="indicator__values">
                    <div className="indicator__value">3 года</div>
                  </div>
                </div>
                <div className="field__slider slider">
                  <div className="slider__axis">
                    <div className="slider__cursor"><span className="visually-hidden">Control</span></div>
                  </div>
                  <div className="slider__labels">
                    <div className="slider__min">1 мес</div>
                    <div className="slider__max">4 года</div>
                  </div>
                </div>
              </li>
            </ul>
            <div className="calculator__results results">
              <div className="results__main">
                <div className="results__text">
                  <div className="results__description">Налоговая экономия на юр.лиц до</div>
                  <div className="results__price">
                    224 126 <span className="results__currency">&#8381;</span>
                  </div>
                </div>
                <div className="results__button results__button--closed"><span className="visually-hidden">Open</span></div>
              </div>
              <div className="results__details">
                <div className="results__description">Ежемесячный платеж от</div>
                <div className="results__text">
                  <div className="results__price results__price--month">
                    34 150 <span className="results__currency results__currency--month">&#8381;</span>
                    <span className="results__day">или 999 &#8381; в день</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="calculator__annotation">Расчет носит предварительный характер</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CarPage;
