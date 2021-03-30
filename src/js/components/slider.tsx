import * as React from "react";

interface Props {
  min: number;
  max: number;
  selected: number;
  measure: string;
  cbFormat: (number) => string;
  cbSetValue: (number) => void
}

export const Slider:React.FunctionComponent<Props> = (props: Props) => {
  const {min, max, selected, measure, cbFormat, cbSetValue} = props;

  const position = 100 * (selected - min) / (max - min);

  const axisRef = React.useRef(null);
  const cursorRef = React.useRef(null);

  const mouseDownHandle = (downEvt) => {
    downEvt.persist();
    let startX = downEvt.clientX;

    const MouseMoveHandler = (moveEvt) => {
      const shiftX = startX - moveEvt.clientX;
      startX = moveEvt.clientX;
      const offsetX = cursorRef.current.offsetLeft - shiftX;

      const percentX = (offsetX / axisRef.current.offsetWidth) * 100;

      if (percentX >= 0 && percentX <= 100) {
        cbSetValue((max - min) / 100 * percentX + min);
      }
    };

    const MouseUpHandler = () => {
      document.removeEventListener(`mouseup`, MouseUpHandler);
      document.removeEventListener(`mousemove`, MouseMoveHandler);
    };

    document.addEventListener(`mouseup`, MouseUpHandler);
    document.addEventListener(`mousemove`, MouseMoveHandler);
  };

  return (
    <div className="field__slider slider">
      <div ref={axisRef} className="slider__axis">
        <div ref={cursorRef} onMouseDown={mouseDownHandle} className="slider__cursor" style={{left: `${position}%`}}><span className="visually-hidden">Control</span></div>
      </div>
      <div className="slider__labels">
        <div className="slider__min">{cbFormat(min)}{measure}</div>
        <div className="slider__max">{cbFormat(max)}{measure}</div>
      </div>
    </div>
  );
};

export default Slider;
