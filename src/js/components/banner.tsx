import * as React from "react";
import {Banner} from "./types";

interface Props {
  banner: Banner;
}

export const CarHeader:React.FunctionComponent<Props> = (props: Props) => {
  const {banner} = props;
  const {brand, model, type, image} = banner;

  return (
    <div className="car__banner banner">
      <div className="banner__description">
        <p className="banner__brand">{brand}</p>
        <p className="banner__model">{model}</p>
        <p className="banner__type">{type}</p>
      </div>
      <div className="banner__image-container">
        <img className="banner__image" src={image} alt="Hyundai solaris" width="335" height="169" />
      </div>
    </div>
  );
};

export default CarHeader;
