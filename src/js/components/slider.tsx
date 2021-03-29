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

  const cursorRef = React.useRef(null);

  const percent = Math.ceil(100 * (selected - min) / (max - min));
  const offset = percent > 5 ? 10 : 0;
  const position = {left: `calc(${percent}% - ${offset}px)`};

  const mouseDownHandle = (downEvt) => {
    downEvt.persist();
    let startX = downEvt.clientX;
    console.log(cursorRef);
    console.log(downEvt);

    const MouseUpHandler = (upEvt) => {
      console.log(`upEvt: ${upEvt}`);

      document.removeEventListener(`mouseup`, MouseUpHandler);
      document.removeEventListener(`mousemove`, MouseMoveHandler);
    };

    const MouseMoveHandler = (moveEvt) => {
      console.log(`moveEvt: ${moveEvt}`);

      const shiftX = startX - moveEvt.clientX;
      startX = moveEvt.clientX;
      const offsetX = cursorRef.current.offsetLeft - shiftX;

      cursorRef.current.innerText = `${startX} ${shiftX} ${offsetX}`;

      cursorRef.current.style.left = `${100}%`;
    };

    console.log(`donwEvt: ${downEvt}`);

    document.addEventListener(`mouseup`, MouseUpHandler);
    document.addEventListener(`mousemove`, MouseMoveHandler);
  };

  return (
    <div className="field__slider slider">
      <div className="slider__axis">
        <div ref={cursorRef} onMouseDown={mouseDownHandle} className="slider__cursor" style={position}><span className="visually-hidden">Control</span></div>
      </div>
      <div className="slider__labels">
        <div className="slider__min">{cbFormat(min)}{measure}</div>
        <div className="slider__max">{cbFormat(max)}{measure}</div>
      </div>
    </div>
  );
};

export default Slider;
