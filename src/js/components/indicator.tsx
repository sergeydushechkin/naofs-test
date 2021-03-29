import * as React from "react";

interface Props {
  title: string;
  value: string;
  currency: string;
  percent: string;
}

export const Indicator:React.FunctionComponent<Props> = (props: Props) => {
  const {title, value, currency, percent} = props;

  return (
    <div className="field__indicator indicator">
      <div className="indicator__description">{title}</div>
      <div className="indicator__values">
        <div className="indicator__value">{value} <span className="indicator__currency">{currency}</span></div>
        {percent ? <div className="indicator__percent">{percent}%</div> : ``}
      </div>
    </div>
  );
};

export default Indicator;
