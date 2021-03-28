import * as React from "react";

interface Props {
  min: number;
  max: number;
  selected: number;
  measure: string;
  cbFormat: (number) => string;
}

export const Slider:React.FunctionComponent<Props> = (props: Props) => {
  const {min, max, selected, measure, cbFormat} = props;
  console.log(`${(min / max) * selected}%`);
  const position = {left: `${min / max * selected}%`};

  return (
    <div className="field__slider slider">
      <div className="slider__axis">
        <div className="slider__cursor" style={position}><span className="visually-hidden">Control</span></div>
      </div>
      <div className="slider__labels">
        <div className="slider__min">{cbFormat(min)}{measure}</div>
        <div className="slider__max">{cbFormat(max)}{measure}</div>
      </div>
    </div>
  );
};

export default Slider;
