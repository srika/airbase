import React, { Fragment } from "react";

const ServiceDetails = ({
  frequency,
  cost,
  annualCost,
  expenseAccount,
  requester,
  description,
  service
}) => {
  return (
    <Fragment>
      <div className="review-container__card__content__left__details-container">
        <div className="review-container__card__content__left__details-container__data">
          <h4 className="review-container__card__content__left__details-container__data__label">
            Requested by
          </h4>
          <h4 className="review-container__card__content__left__details-container__data__value">
            {requester?.profile_picture && (
              <div className="avatar">
                <img
                  src={requester?.profile_picture}
                  width="24px"
                  height="24px"
                  alt={requester?.first_name}
                />
              </div>
            )}
            <span className="title">
              {requester?.first_name} {requester?.last_name}
            </span>
          </h4>
        </div>
        <div className="review-container__card__content__left__details-container__data">
          <h4 className="review-container__card__content__left__details-container__data__label">
            Cost
          </h4>
          <h4 className="review-container__card__content__left__details-container__data__value">
            ${cost}
          </h4>
        </div>
        {frequency > 0 && (
          <div className="review-container__card__content__left__details-container__nested-data">
            <div className="review-container__card__content__left__details-container__nested-data__data">
              <h4 className="review-container__card__content__left__details-container__nested-data__data__label">
                Renewal Frequency
              </h4>
              <h4 className="review-container__card__content__left__details-container__nested-data__data__value">
                {`${frequency} month${frequency > 1 ? "s" : ""}`}
              </h4>
            </div>
            <div className="review-container__card__content__left__details-container__nested-data__data">
              <h4 className="review-container__card__content__left__details-container__nested-data__data__label">
                Annual Cost
              </h4>
              <h4 className="review-container__card__content__left__details-container__nested-data__data__value">
                ${annualCost}
              </h4>
            </div>
          </div>
        )}
        <div className="review-container__card__content__left__details-container__data">
          <h4 className="review-container__card__content__left__details-container__data__label">
            Expense Account
          </h4>
          <h4 className="review-container__card__content__left__details-container__data__value">
            {expenseAccount}
          </h4>
        </div>
        <div className="review-container__card__content__left__details-container__data">
          <h4 className="review-container__card__content__left__details-container__data__label">
            File
          </h4>
          <h4 className="review-container__card__content__left__details-container__data__value">
            <div className="avatar">
              <i className="far fa-file-excel fa-green"></i>
            </div>
            <span className="title">Abc.xls</span>
          </h4>
        </div>
        <div className="review-container__card__content__left__details-container__description">
          <h4 className="review-container__card__content__left__details-container__description__label">
            Description
          </h4>
          <h4 className="review-container__card__content__left__details-container__description__value">
            {description}
          </h4>
        </div>
      </div>
      {frequency > 0 && (
        <div className="review-container__card__content__left__info-container">
          <p className="review-container__card__content__left__info-container__content">
            <span className="review-container__card__content__left__info-container__content__alert-info">
              Your company is already paying for {service?.name} on a recurring
              basis.
            </span>
            <span className="review-container__card__content__left__info-container__content__alert-description">
              (1 instance owned by {requester?.first_name}{" "}
              {requester?.last_name}).
            </span>
          </p>
        </div>
      )}
    </Fragment>
  );
};

export default ServiceDetails;
