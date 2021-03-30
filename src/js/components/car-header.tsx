import * as React from "react";
import {useSelector} from "react-redux";

import {getHeaderData} from "../reducer/selectors";

export const CarHeader:React.FunctionComponent = () => {
  const headerData = useSelector(getHeaderData);
  const {region, phone} = headerData;

  const [closed, setClosed] = React.useState(false);

  return (
    <header className="car-header">
      <div className="car-header__contacts contacts">
        <div className="contacts__city">{region}</div>
        <div className="contacts__tel">{phone}</div>
      </div>
      {!closed
        ?
        <div className="car-header__logo logo">
          <div className="logo__container">
            <img className="logo__image" src="./img/logo.svg" alt="AzurDRIVE" width="179" height="20" />
          </div>
          <div onClick={() => setClosed(true)} className="logo__button"><span className="visually-hidden">Close</span></div>
        </div>
        :
        ``
      }
    </header>
  );
};

export default CarHeader;
