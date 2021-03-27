import * as React from "react";
import {CarBanner} from "../types";

interface Props {
  banner: CarBanner;
}

export const Banner:React.FunctionComponent<Props> = (props: Props) => {
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

export default Banner;
