import React, { useEffect, useState } from "react";
//components
import ButtonContainer from "./components/ButtonContainer";
import ServiceDetails from "./components/ServiceDetails";
import ServiceHeader from "./components/ServiceHeader";
import InfoCard from "./components/InfoCard";
import Header from "./components/Header";
import Divider from "../Common/Divider";
//data
import dataObject from "../../data";

const RequestApproval = () => {
  const [state, setState] = useState({
    id: 0,
    cost: 0,
    annualCost: 0,
    frequency: 0,
    expenseAccount: "",
    service: {},
    requester: {},
    approvedList: [],
    pendingList: [],
    description: "",
  });

  useEffect(() => {
    setState({
      ...state,
      id: dataObject?.id,
      approvedList: dataObject?.approvers?.filter(
        (obj) => obj.status === "accepted"
      ),
      pendingList: dataObject?.approvers?.filter(
        (obj) => obj.status === "created"
      ),
      description: dataObject?.description,
      service: dataObject?.service,
      requester: dataObject?.requested_by,
      frequency: dataObject?.renewal_frequency_in_months,
      cost: dataObject?.cost,
      annualCost: 12 * dataObject?.cost,
      expenseAccount: dataObject?.expense_account,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleApprove = () => console.log("Approved!!");
  const handleDeny = () => console.log("Denyed!!!");

  const {
    id,
    service,
    requester,
    approvedList,
    pendingList,
    description,
    cost,
    annualCost,
    frequency,
    expenseAccount,
  } = state;
  return (
    <div className="review-container">
      <Header />
      <div className="review-container__card">
        <ServiceHeader service={service} id={id} />
        <div className="review-container__card__content">
          <div className="review-container__card__content__left">
            <ServiceDetails
              frequency={frequency}
              cost={cost}
              annualCost={annualCost}
              expenseAccount={expenseAccount}
              requester={requester}
              description={description}
              service={service}
            />
            <ButtonContainer
              handleApprove={handleApprove}
              handleDeny={handleDeny}
            />
          </div>
          <div className="review-container__card__content__right">
            <div className="review-container__card__content__right__approved-list">
              <h4 className="review-container__card__content__right__approved-list__header-title">
                Approved
              </h4>
              {approvedList.map((obj, index) => (
                <InfoCard data={obj} key={`${index}-${obj.status}`} />
              ))}
            </div>
            <Divider className="review-container__card__content__right__divider" />
            <div className="review-container__card__content__right__pending-list">
              <h4 className="review-container__card__content__right__pending-list__header-title">
                Pending
              </h4>
              {pendingList.map((obj, index) => (
                <InfoCard data={obj} key={`${index}-${obj.status}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestApproval;
