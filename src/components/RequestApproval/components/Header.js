import React from "react";
//components
import Divider from "../../Common/Divider";
//images
import logo from "../../../images/logo.png";

const Header = () => {
  return (
    <header className="review-container__header">
      <img src={logo} alt="Airbase" width="96px" height="24px" />
      <Divider className="review-container__header__divider" />
      <div className="review-container__header__description">
        <div className="review-container__header__description__left">
          <span className="review-container__header__description__left__icon">
            <i className="fas fa-lock fa-orange"></i>
          </span>
          <span className="review-container__header__description__left__message">
            Security Message
          </span>
        </div>
        <div className="review-container__header__description__right">
          <p className="review-container__header__description__right__description">
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec
            id elit non mi porta gravida at eget metus.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
