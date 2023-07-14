import React, { useEffect, useState } from "react";
import { Field } from "formik";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import clsx from "clsx";

import DynamicFormOne from "./DynamicForms/DynamicFormOne";
import DynamicFormTwo from "./DynamicForms/DynamicFormTwo";
import { NO_RECORDS_FOUND } from "../../../helpers/globalConstant";
import {
  fetchAllClientsForDropdown,
  fetchAllOppositeAdvocatesForDropdown,
  fetchClientsForDropdown,
  fetchClientsOfficerByClientIdForDropdown,
} from "../../../reducers/mastersReducers/mastersAction";

interface Props {
  caseTypeList: any;
  getClientListForDropdown: any;
  clientList: any;
  getCLientOfficerByClientIdList: any;
  clientOfficerByClientList: any;
  ourAdvocateList: any;
  getOppositeAdvocateList: any;
  values: any;
  setFieldValue: any;
  caseTypeListLoading: any;
  errors: any;
  touched: any;
}
const Step1 = ({
  caseTypeList,
  clientList,
  getCLientOfficerByClientIdList,
  clientOfficerByClientList,
  ourAdvocateList,
  getOppositeAdvocateList,
  getClientListForDropdown,
  values,
  setFieldValue,
  caseTypeListLoading,
  errors,
  touched,
}: Props) => {
  const params = useParams();
  const [startDate, setStartDate] = useState(new Date());
  const [clientOfficer, setClientOfficer] = useState<any>();
  const [currentClientId, setCurrentClientId] = useState("");
  const [showClientOfficer, setShowClientOfficer] = useState(false);
  const [foundItem, setFoundItem] = useState({
    applicant_Caption:
      !caseTypeListLoading && caseTypeList[0]?.applicant_Caption,
    opponent_Caption: !caseTypeListLoading && caseTypeList[0]?.opponent_Caption,
  });

  // useEffect(() => {
  //   if (typeof values.isClientSide === "boolean") {
  //     if (values.isClientSide) {
  //       foundItem.applicant_Caption
  //         ? setFieldValue("isClientSide", foundItem.applicant_Caption)
  //         : console.error("not getting applicant caption value.");
  //     } else if (foundItem?.opponent_Caption) {
  //       foundItem?.opponent_Caption
  //         ? setFieldValue("isClientSide", foundItem.opponent_Caption)
  //         : console.error("not getting opponent caption value.");
  //     }
  //   } else {
  //     setFieldValue("isClientSide", values.isClientSide);
  //   }
  // }, [values.isClientSide, foundItem]);

  useEffect(() => {
    if (params.id && caseTypeList && caseTypeList.length > 0) {
      setFoundItem(
        caseTypeList?.find((item: any) => {
          return Number(item.id) === Number(values.caseTypeId);
        })
      );
    }
  }, [caseTypeList, values]);

  useEffect(() => {
    getOppositeAdvocateList();
    getClientListForDropdown();
  }, []);

  useEffect(() => {
    // if (
    //   clientOfficerByClientList &&
    //   currentClientId &&
    //   currentClientId.length > 0
    // ) {
    //   setClientOfficer({
    //     ...clientOfficer,
    //     [currentClientId]: clientOfficerByClientList,
    //   });
    // }
  }, [clientOfficerByClientList]);

  // const setRadioState = (value: any) => {
  //   return caseTypeList.find((item: any) => {
  //     return Number(item.id) === Number(value);
  //   });
  // };

  const changeCaseTypeFoundstate = (value: any) => {
    if (caseTypeList) {
      console.log("onchnahe select");
      const findItem = caseTypeList.find((item: any) => {
        return Number(item.id) === Number(value);
      });
      findItem && setFoundItem(findItem);
    }
  };

  console.log(typeof values.isClientSide, "values12234");
  console.log(values.isClientSide, foundItem, "values12234");

  return (
    <div>
      <div className="row mb-lg-6 mt-2">
        <div className="col-lg-6">
          <label
            htmlFor="caseTypeId"
            className="col-form-label fw-bold fs-6 required"
          >
            Case Type
          </label>
          <div className="">
            <Field
              as="select"
              name="caseTypeId"
              className={clsx("form-control bg-transparent form-select")}
              onChange={(e: any) => {
                setFieldValue("caseTypeId", parseInt(e.target.value));
                changeCaseTypeFoundstate(e.target.value);
                setFieldValue(
                  "isClientSide",
                  // setRadioState(e.target.value).applicant_Caption
                  true
                );
              }}
            >
              <option value={""} disabled>
                Select Case
              </option>
              {!caseTypeList?.length && <option>{NO_RECORDS_FOUND}</option>}
              {caseTypeList.length > 0 &&
                caseTypeList?.map((list: any, i: any) => (
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
            {errors.caseTypeId && touched.caseTypeId && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">
                  <span role="alert">{`${errors.caseTypeId}`}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="col-lg-6">
          <label
            htmlFor="caseNo"
            className=" col-form-label fw-bold fs-6 required"
          >
            Case Number
          </label>

          <Field
            placeholder="Case Number"
            type="text"
            name="caseNo"
            autoComplete="off"
            className={clsx("form-control bg-transparent")}
          />
          {errors.caseNo && touched.caseNo && (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">
                <span role="alert">{`${errors.caseNo}`}</span>
              </div>
            </div>
          )}
        </div>
        <div className="row mb-lg-6 mt-2">
          <div className="col-lg-6">
            <label
              htmlFor="year"
              className=" col-form-label fw-bold fs-6 required"
            >
              Year
            </label>
            <DatePicker
              selected={startDate}
              className="form-control bg-transparent"
              onChange={(date: any, e: any) => {
                setStartDate(date);
                setFieldValue("year", date.getFullYear());
              }}
              showYearPicker
              dateFormat="yyyy"
            />
            {errors.year && touched.year && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">
                  <span role="alert">{`${errors.year}`}</span>
                </div>
              </div>
            )}
          </div>
          <div className="col-lg-6">
            <label
              htmlFor="leadAdvocate"
              className=" col-form-label fw-bold fs-6 required"
            >
              Lead Advocate
            </label>
            <div className="">
              <Field
                as="select"
                name="leadAdvocateId"
                className={clsx("form-control bg-transparent form-select")}
                onChange={(e: any) => {
                  setFieldValue("leadAdvocateId", parseInt(e.target.value));
                }}
              >
                <option value={""} disabled>
                  Select Lead Advocate
                </option>
                {ourAdvocateList && ourAdvocateList.length > 0 ? (
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
                  ))
                ) : (
                  <option>{NO_RECORDS_FOUND}</option>
                )}
              </Field>
              {errors.leadAdvocateId && touched.leadAdvocateId && (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">
                    <span role="alert">{`${errors.leadAdvocateId}`}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {values.caseTypeId && (
        <>
          <div className="row mb-lg-6">
            <div
              id="my-radio-group"
              className="col-form-label fw-bold fs-6 required"
            >
              Our Side
            </div>
            <div role="group" aria-labelledby="my-radio-group">
              <label className="fs-6">
                <Field
                  type="radio"
                  name="isClientSide"
                  // value={foundItem?.applicant_Caption}
                  value={true}
                  onChange={() => setFieldValue("isClientSide", Boolean(true))}
                />
                <span className="mx-2">{foundItem?.applicant_Caption}</span>
              </label>
              <label className="fs-6">
                <Field
                  type="radio"
                  name="isClientSide"
                  // value={foundItem?.opponent_Caption}
                  value={false}
                  onChange={() => setFieldValue("isClientSide", Boolean(false))}
                />
                <span className="mx-2">{foundItem?.opponent_Caption}</span>
              </label>
            </div>
          </div>
          <div className="row mb-lg-6">
            <label
              htmlFor="clientId"
              className="col-form-label fw-bold fs-6 required"
            >
              {foundItem?.applicant_Caption}
            </label>

            {/* {values.isClientSide === `${foundItem?.applicant_Caption}` ? ( */}
            {values.isClientSide ? (
              <DynamicFormOne
                values={values}
                foundItem={foundItem}
                showClientOfficer={showClientOfficer}
                setShowClientOfficer={setShowClientOfficer}
                setFieldValue={setFieldValue}
                getCLientOfficerByClientIdList={getCLientOfficerByClientIdList}
                setCurrentClientId={setCurrentClientId}
                clientList={clientList}
                ourAdvocateList={ourAdvocateList}
                clientOfficer={clientOfficer}
                touched={touched}
                errors={errors}
                setClientOfficer={setClientOfficer}
              />
            ) : (
              <DynamicFormTwo
                values={values}
                foundItem={foundItem}
                showClientOfficer={showClientOfficer}
                setShowClientOfficer={setShowClientOfficer}
                setFieldValue={setFieldValue}
                getCLientOfficerByClientIdList={getCLientOfficerByClientIdList}
                setCurrentClientId={setCurrentClientId}
                clientList={clientList}
                ourAdvocateList={ourAdvocateList}
                clientOfficer={clientOfficer}
                touched={touched}
                errors={errors}
                setClientOfficer={setClientOfficer}
              />
            )}
          </div>
        </>
      )}
      <div className="row mb-lg-6">
        <label className="col-form-label fw-bold fs-6 required">
          Case Title
        </label>
        <div className="">
          <Field
            placeholder="Case Title"
            type="text"
            name="caseTitle"
            autoComplete="off"
            className={clsx("form-control bg-transparent")}
          />
          {errors.caseTitle && touched.caseTitle && (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">
                <span role="alert">{`${errors.caseTitle}`}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state: any) => {
  return {
    caseTypeListLoading: state.getCaseTypeForDropdownReducer.loading,
    caseTypeList: state.getCaseTypeForDropdownReducer.caseTypeList,

    clientList: state.getAllClientsForDropdownReducer.clientList,

    ourAdvocateList: state.getAllOurAdvocatesForDropdownReducer.ourAdvocateList,
    oppositeAdvocateList:
      state.getAllOppositeAdvocatesForDropdownReducer.oppositeAdvocateList,

    clientOfficerByClientList:
      state.getClientOfficerByClientForDropdownReducer.clientOfficerList,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    getClientList: () => dispatch(fetchClientsForDropdown()),
    getCLientOfficerByClientIdList: (id: any, index?: any, callback?: any) =>
      dispatch(fetchClientsOfficerByClientIdForDropdown(id, index, callback)),
    getClientListForDropdown: () => dispatch(fetchAllClientsForDropdown()),
    getOppositeAdvocateList: () =>
      dispatch(fetchAllOppositeAdvocatesForDropdown()),
  };
};
const connectComponent = connect(mapStateToProps, mapDispatchToProps)(Step1);
export default connectComponent;
