import React from "react";

const ServiceHeader = ({ service, id }) => {
  return (
    <div className="review-container__card__header">
      {service?.logo && (
        <div className="review-container__card__header__logo">
          <img
            src={service?.logo}
            alt={service?.name}
            width="30px"
            height="30px"
          />
        </div>
      )}
      <h1 className="review-container__card__header__description">
        Request for {service?.name} (#{id})
      </h1>
    </div>
  );
};

export default ServiceHeader;
