import React from "react";
import DisplayDate from "../../Common/DisplayDate";
//components
const InfoCard = ({ data }) => {
  return (
    <div className="info-card">
      <div className="info-card__details">
        <div className="info-card__details__type mr-8">
          <i className="fas fa-circle fa-default"></i>
        </div>
        <div className="info-card__details__image mr-8">
          {data?.approver?.profile_picture && (
            <img
              src={data?.approver?.profile_picture}
              width="24px"
              height="24px"
              alt={data?.approver?.first_name}
            />
          )}
        </div>
        <div className="info-card__details__info">
          <h3 className="info-card__details__info__header">
            {data?.approver?.first_name} {data?.approver?.last_name}
            <span className="info-card__details__info__header__caption">
              {" "}
              ({data?.approver?.email})
            </span>
          </h3>
          <p className="info-card__details__info__description">
            {data?.status === "accepted" ? "Approved" : "Last notified"}{" "}
            <DisplayDate
              value={
                data?.status === "accepted"
                  ? data?.last_updated_date
                  : data?.last_notified_time
              }
            />
          </p>
        </div>
      </div>
      <div className="info-card__icon">
        <i
          className={`${
            data?.status === "accepted"
              ? "fas fa-check-circle fa-green"
              : "far fa-circle fa-white"
          }`}
        ></i>
      </div>
    </div>
  );
};

export default InfoCard;
