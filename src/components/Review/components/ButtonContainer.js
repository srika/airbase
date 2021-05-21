import React from "react";
//components
import Button from "../../Common/Button";

const ButtonContainer = ({ handleApprove, handleDeny }) => {
  return (
    <div className="review-container__card__content__left__actions-container">
      <Button
        className="success mr-8"
        onClick={handleApprove}
        buttonLabel="Approve"
      />
      <Button className="danger" onClick={handleDeny} buttonLabel="Deny" />
    </div>
  );
};

export default ButtonContainer;
