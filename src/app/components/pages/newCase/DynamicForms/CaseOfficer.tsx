import React, { useEffect } from "react";
import { Field, FieldArray } from "formik";
import { connect } from "react-redux";
import { useWindowSize } from "../../../../helpers/useWindowSize";
import { useParams } from "react-router-dom";
import clsx from "clsx";
import { NO_RECORDS_FOUND } from "../../../../helpers/globalConstant";
import { KTSVG } from "../../../../../_metronic/helpers";

// interface Props {
//   showClientOfficer: any;
//   setShowClientOfficer: any;
//   getCLientOfficerByClientIdList: any;
//   setCurrentClientId: any;
//   clientList: any;
//   clientOfficer: any;
//   touched: any;
//   setFieldValue: amy;
// }

const CaseOfficer = (Props: any) => {
  const {
    showClientOfficer,
    setShowClientOfficer,
    getCLientOfficerByClientIdList,
    setCurrentClientId,
    clientList,
    clientOfficer,
    touched,
    setFieldValue,
    index,
    errors,
    ourAdvocateList,
    values,
    foundItem,
    detail,
    insert,
    remove,
    push,
    setClientOfficer,
  } = Props.Props;
  const { isMobile, windowSize } = useWindowSize();

  const params = useParams();

  console.log("find index", index, clientOfficer);
  const getClientOfficerDataFromClientId = (index: any, data: any) => {
    setShowClientOfficer(true);
    setClientOfficer((clientOfficer: any) => {
      return { ...clientOfficer, [`case_Clients.${index}.clientId`]: data };
    });
  };

  console.log("test index", clientOfficer);

  useEffect(() => {
    if (
      detail &&
      detail.clientId &&
      getCLientOfficerByClientIdList &&
      setCurrentClientId
    ) {
      const clientId = detail.clientId;
      clientId &&
        getCLientOfficerByClientIdList(
          clientId,
          index,
          getClientOfficerDataFromClientId
        );
    }
  }, [detail]);

  const handleClientChange = (e: any) => {
    setFieldValue(`case_Clients.${index}.clientId`, parseInt(e.target.value));
  };

  return (
    <div
      className={`row mb-4 
  ${isMobile && "border position-relative p-4"} `}
      key={index}
    >
      <>
        <div
          className={
            showClientOfficer
              ? "col-lg-2 field-with-error-height"
              : "col-lg-3 field-with-error-height"
          }
        >
          <Field
            as="select"
            name={`case_Clients.${index}.clientId`}
            className={clsx("form-control bg-transparent form-select")}
            onChange={handleClientChange}
          >
            <option value={""} disabled>
              Select Client
            </option>
            {/* {!clientList?.length && (
          <option>{NO_RECORDS_FOUND}</option>
        )} */}
            {clientList?.length > 0 &&
              clientList.map((list: any, i: any) => (
                <>
                  {!params.id && list.isActive === true && (
                    <option key={i} value={list.id}>
                      {list.name}
                    </option>
                  )}
                  {params.id && (
                    <option key={i} value={list.id}>
                      {list.name}
                    </option>
                  )}
                </>
              ))}
          </Field>
          {touched?.case_Clients?.[index]?.clientId &&
            errors?.case_Clients?.[index]?.clientId && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">
                  <span role="alert">{`${errors.case_Clients[index].clientId}`}</span>
                </div>
              </div>
            )}
        </div>
        {detail.clientId && (
          <div className="col-lg-2 field-with-error-height">
            <Field
              as="select"
              name={`case_Clients.${index}.clientOfficerId`}
              className={clsx("form-control bg-transparent form-select")}
              onChange={(e: any) => {
                setFieldValue(
                  `case_Clients.${index}.clientOfficerId`,
                  parseInt(e.target.value)
                );
              }}
            >
              <option value={""} disabled>
                Select Client Officer
              </option>
              {clientOfficer &&
                clientOfficer[`case_Clients.${index}.clientId`]?.length ===
                  0 && <option>{NO_RECORDS_FOUND}</option>}
              {clientOfficer &&
                clientOfficer[`case_Clients.${index}.clientId`]?.length > 0 &&
                clientOfficer[`case_Clients.${index}.clientId`].map(
                  (list: any, i: any) => (
                    <>
                      {!params.id && list.isActive === true && (
                        <option key={i} value={list.id}>
                          {list.name}
                        </option>
                      )}
                      {params.id && (
                        <option key={i} value={list.id}>
                          {list.name}
                        </option>
                      )}
                    </>
                  )
                )}
            </Field>
            {touched?.case_Clients?.[index]?.clientOfficerId &&
              errors?.case_Clients?.[index]?.clientOfficerId && (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">
                    <span role="alert">{`${errors.case_Clients[index].clientOfficerId}`}</span>
                  </div>
                </div>
              )}
          </div>
        )}
      </>

      <div className="col-lg-3 field-with-error-height">
        <Field
          placeholder="Party Name"
          type="text"
          name={`case_Clients.${index}.partyName`}
          autoComplete="off"
          className={clsx("form-control bg-transparent")}
        />
        {touched?.case_Clients?.[index]?.partyName &&
          errors?.case_Clients?.[index]?.partyName && (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">
                <span role="alert">{`${errors.case_Clients[index].partyName}`}</span>
              </div>
            </div>
          )}
      </div>
      <div className="col-lg-2 field-with-error-height">
        <Field
          placeholder="Party Number"
          type="text"
          name={`case_Clients.${index}.partyNo`}
          autoComplete="off"
          className={clsx("form-control bg-transparent")}
        />
        {touched?.case_Clients?.[index]?.partyNo &&
          errors?.case_Clients?.[index]?.partyNo && (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">
                <span role="alert">{`${errors.case_Clients[index].partyNo}`}</span>
              </div>
            </div>
          )}
      </div>
      <div
        className={
          values?.isClientSide === `${foundItem?.applicant_Caption}`
            ? "col-lg-2 field-with-error-height"
            : "col-lg-2 field-with-error-height"
        }
      >
        <Field
          as="select"
          name={`case_Clients.${index}.ourAdvocateId`}
          className={clsx("form-control bg-transparent form-select")}
          onChange={(e: any) => {
            setFieldValue(
              `case_Clients.${index}.ourAdvocateId`,
              parseInt(e.target.value)
            );
          }}
        >
          <option value={""} disabled>
            Select Advocate
          </option>
          {ourAdvocateList?.length === 0 && <option>{NO_RECORDS_FOUND}</option>}
          {ourAdvocateList?.length > 0 &&
            ourAdvocateList?.map((list: any, i: any) => (
              <>
                {!params.id && list.isActive === true && (
                  <option key={i} value={list.id}>
                    {list.name}
                  </option>
                )}
                {params.id && (
                  <option key={i} value={list.id}>
                    {list.name}
                  </option>
                )}
              </>
            ))}
        </Field>
        {touched?.case_Clients?.[index]?.ourAdvocateId &&
          errors?.case_Clients?.[index]?.ourAdvocateId && (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">
                <span role="alert">{`${errors.case_Clients[index].ourAdvocateId}`}</span>
              </div>
            </div>
          )}
      </div>

      <button
        className={`col-lg-1 btn btn-icon btn-sm btn-color-gray-400 btn-active-icon-danger ${
          isMobile && "position-absolute"
        }`}
        onClick={() => remove(index)}
        style={
          isMobile
            ? {
                top: "-16px",
                right: " -16px",
              }
            : undefined
        }
      >
        <KTSVG
          path="/media/icons/duotune/general/gen040.svg"
          className="svg-icon-muted svg-icon-2hx"
        />
      </button>
    </div>
  );
};

export default CaseOfficer;
