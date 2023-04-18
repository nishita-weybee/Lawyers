import clsx from "clsx";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { Field, FieldArray, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { KTSVG } from "../../../../_metronic/helpers";
import { BACK, NEXT, NO_RECORDS_FOUND } from "../../../helpers/globalConstant";
import {
  fetchBankBranchByBankId,
  fetchBankForDropdown,
  fetchBankOfficerByBank,
  fetchCaseCategoryForDropdown,
  fetchCaseTypeByCaseCat,
  fetchDistrictForDropdown,
  fetchJudgeByTaluka,
  fetchStageDropdown,
} from "../../../reducers/mastersReducers/mastersAction";
import { editCaseDetails, getCaseById, postCaseDetails } from "../../../reducers/caseReducers/caseAction";
import { useLocation, useParams } from "react-router-dom";
import { convert } from "../../../helpers/helperFunction";
import { useWindowSize } from "../../../helpers/useWindowSize";

export interface props {
  getStageList: Function;
  getJudgeList: Function;
  getBankOfficerList: Function;
  getDistrictList: Function;
  getBankList: Function;
  forumList: any;
  stageList: any;
  bankOfficerList: any;
  districtList: any;
  bankList: any;
  judgeList: any;
  branchList: any;
  getBranchList: Function;
  loading: boolean;
  addCase: Function;
  caseDetailById: any;
  getCaseById: Function;
  editCase: Function;
  caseCatList: any;
  getCaseCatList: Function;
  getCaseTypeList: Function;
  caseTypeList: any;
}

const AddCase: React.FC<props> = ({
  forumList,
  districtList,
  getBankList,
  getDistrictList,
  getBankOfficerList,
  getStageList,
  getJudgeList,
  stageList,
  bankOfficerList,
  bankList,
  judgeList,
  branchList,
  getBranchList,
  addCase,
  loading,
  getCaseById,
  caseDetailById,
  editCase,
  caseCatList,
  getCaseCatList,
  getCaseTypeList,
  caseTypeList,
}) => {
  const location = useLocation();
  const params = useParams();
  const [startDate, setStartDate] = useState(new Date());
  const { isMobile, windowSize } = useWindowSize();

  const onSubmit = (values: any, resetForm: any) => {
    resetForm();
    params.id
      ? editCase(values)
      : addCase(
          {
            ...values,
            caseTypeId: values.caseTypeId === "" ? null : values.caseTypeId,
            filing: {
              ...values.filing,
              judgeId: values.filing.judgeId === "" ? null : values.filing.judgeId,
              stageId: values.filing.stageId === "" ? null : values.filing.stageId,
            },
          },
          () => {}
        );
  };

  useEffect(() => {
    params.id && getCaseById(params.id);
    getDistrictList();
    getStageList();
    getBankList();
    getCaseCatList();
  }, [getDistrictList, getStageList, getBankList, location.pathname, getCaseById, getCaseCatList, params.id]);

  useEffect(() => {
    if (params.id && caseDetailById?.data) {
      getBankOfficerList(caseDetailById?.data?.bankId);
      if (caseDetailById?.data?.isFilled) {
        getCaseTypeList(caseDetailById?.data?.caseCategoryId);
        getJudgeList(caseDetailById?.data?.filing.judgeId);
      }
    }
  }, [caseDetailById, params, getJudgeList, getBankOfficerList, getCaseTypeList]);
  const stepper = ["Account Details", "Property Details", "Court Details"];

  const initialValues = {
    bankId: "",
    bankOfficerId: "",
    borrowers: [
      {
        name: "",
      },
    ],
    caseProducts: [
      {
        accountNo: "",
        bankId: "",
        productId: "",
      },
    ],
    npaAmount: "",
    npaDate: "",
    "13(4)": "",
    "13(2)": "",
    properties: [
      {
        caseId: 0,
        description: "",
        location: "",
        owner: "",
        districtId: "",
        talukaId: "",
      },
    ],
    // statusId: 1,
    // disposalModeId: "",
    // disposalDate: "",
    caseNo: null,
    year: 0,
    caseTypeId: "",
    caseCategoryId: "",
    cnrNo: null,
    forum: null,
    filingDate: null,
    filing: {
      caseId: null,
      judgeId: "",
      judge: {
        districtId: "",
        talukaId: "",
      },
      stageId: "",
      date: null,
    },
    remarks: null,
    isFilled: false,
  };

  return (
    <Formik
      initialValues={
        params.id
          ? {
              ...caseDetailById?.data,
              caseTypeId: caseDetailById?.data?.caseTypeId === null ? "" : caseDetailById?.data?.caseTypeId,
              caseCategoryId: caseDetailById?.data?.caseCategoryId === null ? "" : caseDetailById?.data?.caseCategoryId,
              filing: {
                ...caseDetailById?.data?.filing,
                stageId: caseDetailById?.data?.filing.stageId === null ? "" : caseDetailById?.data?.filing.stageId,
                judgeId: caseDetailById?.data?.filing.judgeId === null ? "" : caseDetailById?.data?.filing.judgeId,
                judge: {
                  ...caseDetailById?.data?.filing.judge,
                  districtId: caseDetailById?.data?.filing?.judge?.districtId === null ? "" : caseDetailById?.data?.filing?.judge?.districtId,
                  talukaId: caseDetailById?.data?.filing?.judge?.talukaId === null ? "" : caseDetailById?.data?.filing?.judge?.talukaId,
                },
              },
            }
          : initialValues
      }
      onSubmit={async (values: any, { resetForm }) => onSubmit(values, resetForm)}
      enableReinitialize={true}
    >
      {({ setFieldValue, isSubmitting, resetForm, values, touched, errors }) => (
        console.log(values),
        (
          <Form className="form">
            <div className="accordion " id="kt_accordion_1">
              {stepper?.map((step: any, i: any) => {
                return (
                  <div className="accordion-item shadow-sm card mb-5 mb-xl-10" key={i}>
                    <h2 className="accordion-header" id={`kt_accordion_1_header_${i}`}>
                      <button
                        className="accordion-button fs-4 fw-bold collapsed card-header border-0 align-items-center collapsible"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#kt_accordion_1_body_${i}`}
                        aria-expanded="false"
                        aria-controls={`kt_accordion_1_body_${i}`}
                      >
                        <div className="btn bg-light-primary rounded-circle fs-3 me-4 text-primary">{i + 1} </div> {step}
                      </button>
                    </h2>
                    <div
                      id={`kt_accordion_1_body_${i}`}
                      className={`accordion-collapse collapse ${params.id && "show"}`}
                      aria-labelledby={`kt_accordion_1_header_${i}`}
                      data-bs-parent="#kt_accordion_1"
                    >
                      <div className="accordion-body card-body border-top p-9">
                        {step === "Account Details" && (
                          <>
                            <div className="row mb-lg-6">
                              <div className="col-lg-6">
                                <label htmlFor={"bankId"} className="col-form-label fw-bold fs-6 required">
                                  Bank
                                </label>
                                <div className="">
                                  <Field
                                    as="select"
                                    name={"bankId"}
                                    className={clsx("form-control bg-transparent form-select")}
                                    onChange={(e: any) => {
                                      setFieldValue("bankId", e.target.value);
                                      setFieldValue(`bankOfficerId`, "");
                                      getBankOfficerList(e.target.value);
                                    }}
                                  >
                                    <option value={""} disabled>
                                      Select Bank
                                    </option>
                                    {!bankList?.data?.length && <option>{NO_RECORDS_FOUND}</option>}
                                    {bankList?.data?.map((list: any, i: any) => (
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
                                </div>
                              </div>

                              <div className="col-lg-6">
                                <label htmlFor={`bankOfficerId`} className=" col-form-label fw-bold fs-6 required">
                                  Bank Officer
                                </label>

                                <Field
                                  as="select"
                                  name={"bankOfficerId"}
                                  className={clsx("form-control bg-transparent form-select")}
                                  disabled={bankOfficerList?.data ? false : true}
                                >
                                  <option value={""} disabled>
                                    Select Bank Officer
                                  </option>
                                  {!bankOfficerList?.data?.length && <option>{NO_RECORDS_FOUND}</option>}
                                  {bankOfficerList?.data?.map((list: any, i: any) => (
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
                              </div>
                            </div>

                            <FieldArray
                              name={`borrowers`}
                              render={({ insert, remove, push }) => (
                                <div className="border p-4 mt-6">
                                  <label className=" col-form-label fw-bold fs-6 required">Borrower</label>
                                  <div className="row justify-content-start">
                                    {values?.borrowers?.map((detail: any, index: any) => (
                                      <div className="mb-2 col-lg-4 row flex-nowrap align-items-center" key={index}>
                                        <div className="col-11 pe-0" key={index}>
                                          <div className="">
                                            <Field
                                              placeholder={`Borrower`}
                                              type="text"
                                              name={`borrowers.${index}.name`}
                                              autoComplete="off"
                                              className={clsx("form-control bg-transparent")}
                                            />
                                          </div>
                                        </div>

                                        {/* {index !== 0 && ( */}
                                        <button
                                          type="button"
                                          className="col-1 btn btn-icon btn-sm btn-color-gray-400 btn-active-icon-danger"
                                          onClick={() => remove(index)}
                                        >
                                          {/* <KTSVG path="/media/icons/duotune/general/gen027.svg" className="svg-icon-2" /> */}
                                          <KTSVG path="/media/icons/duotune/general/gen040.svg" className="svg-icon-muted svg-icon-2hx" />
                                        </button>
                                      </div>
                                    ))}
                                  </div>

                                  <div className="d-flex justify-content-start mt-2">
                                    <button
                                      type="button"
                                      className="btn btn-light btn-sm btn-active-light-primary"
                                      onClick={() =>
                                        push({
                                          name: "",
                                        })
                                      }
                                    >
                                      <KTSVG path="/media/icons/duotune/arrows/arr075.svg" className="svg-icon-2" />
                                      Add
                                    </button>
                                  </div>
                                </div>
                              )}
                            />

                            <div className={`${!isMobile ? "border" : ''}p-4 mt-6`}>
                              <FieldArray
                                name={`caseProducts`}
                                render={({ insert, remove, push }) => (
                                  <div className="row mb-lg-6">
                                    {/* <label className="col-lg-3 col-form-label fw-bold fs-6 required">Account Number</label>
                                    <label className="col-lg-4 col-form-label fw-bold fs-6 required">Bank</label>
                                     <label className="col-lg-4 col-form-label fw-bold fs-6 required">Product</label> */}
                                    {values?.caseProducts?.map((detail: any, index: any) => (
                                      <div
                                        className={`row mb-4 ${index === 0 ? "align-items-end" : "align-items-center"} ${
                                          isMobile && "border position-relative p-4"
                                        } `}
                                        key={index}
                                      >
                                        <div className="col-lg-3">
                                          {isMobile ? (
                                            <label className=" col-form-label fw-bold fs-6 required">Account Number</label>
                                          ) : index === 0 ? (
                                            <label className=" col-form-label fw-bold fs-6 required">Account Number</label>
                                          ) : null}
                                          <Field
                                            placeholder={`Account Number`}
                                            type="text"
                                            name={`caseProducts.${index}.accountNo`}
                                            autoComplete="off"
                                            className={clsx("form-control bg-transparent")}
                                          />
                                        </div>
                                        <div className="col-lg-4">
                                          {isMobile ? (
                                            <label className=" col-form-label fw-bold fs-6 required">Bank</label>
                                          ) : index === 0 ? (
                                            <label className=" col-form-label fw-bold fs-6 required">Bank</label>
                                          ) : null}
                                          <Field
                                            as="select"
                                            name={`caseProducts.${index}.bankId`}
                                            className={clsx("form-control bg-transparent form-select")}
                                            onChange={(e: any) => {
                                              setFieldValue(`caseProducts.${index}.bankId`, e.target.value);
                                              setFieldValue(`caseProducts.${index}.productId`, "");
                                            }}
                                          >
                                            <option value={""} disabled>
                                              Select Bank
                                            </option>
                                            {!bankList?.data?.length && <option>{NO_RECORDS_FOUND}</option>}
                                            {bankList?.data?.map((list: any, i: any) => (
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
                                        </div>
                                        <div className="col-lg-4">
                                          {isMobile ? (
                                            <label className=" col-form-label fw-bold fs-6 required">Product</label>
                                          ) : index === 0 ? (
                                            <label className=" col-form-label fw-bold fs-6 required">Product</label>
                                          ) : null}
                                          <Field
                                            as="select"
                                            name={`caseProducts.${index}.productId`}
                                            className={clsx("form-control bg-transparent form-select")}
                                            disabled={values.caseProducts[index].bankId ? false : true}
                                          >
                                            <option value={""} disabled>
                                              Select Product
                                            </option>

                                            {values.caseProducts[index].bankId &&
                                              bankList?.data?.map((x: any, i: any) => {
                                                if (x.id === Number(values.caseProducts[index].bankId)) {
                                                  if (!x.products.length) {
                                                    return <option>{NO_RECORDS_FOUND}</option>;
                                                  } else {
                                                    return x.products.map((pro: any, i: any) => {
                                                      return (
                                                        <>
                                                          {!params.id && pro.isActive === true && (
                                                            <option key={i} value={pro.id}>
                                                              {pro.name}
                                                            </option>
                                                          )}
                                                          {params.id && (
                                                            <option key={i} value={pro.id}>
                                                              {pro.name}
                                                            </option>
                                                          )}
                                                        </>
                                                      );
                                                    });
                                                  }
                                                }
                                              })}
                                          </Field>
                                        </div>

                                        {/* {index !== 0 && ( */}

                                        <button
                                          className={`col-lg-1 btn btn-icon btn-sm btn-color-gray-400 btn-active-icon-danger ${
                                            isMobile && "position-absolute"
                                          }`}
                                          onClick={() => remove(index)}
                                          style={isMobile ? { top: "-16px", right: " -16px" } : undefined}
                                        >
                                          {/* <KTSVG path="/media/icons/duotune/general/gen027.svg" className="svg-icon-2" /> */}
                                          <KTSVG path="/media/icons/duotune/general/gen040.svg" className="svg-icon-muted svg-icon-2hx" />
                                        </button>

                                        {/* )} */}
                                      </div>
                                    ))}

                                    <div className="d-flex justify-content-start mt-2">
                                      <button
                                        type="button"
                                        className="btn btn-light btn-sm btn-active-light-primary"
                                        onClick={() => push({ productId: "", accountNo: "" })}
                                      >
                                        <KTSVG path="/media/icons/duotune/arrows/arr075.svg" className="svg-icon-2" />
                                        Add
                                      </button>
                                    </div>
                                  </div>
                                )}
                              />
                            </div>

                            <div className="row mb-lg-6  mt-6">
                              <div className=" col-lg-6">
                                <label htmlFor={`npaAmount`} className="col-form-label fw-bold fs-6 required">
                                  NPA Amount
                                </label>
                                <div className="">
                                  <Field
                                    placeholder={`NPA Amount`}
                                    type="text"
                                    name={`npaAmount`}
                                    autoComplete="off"
                                    className={clsx("form-control bg-transparent")}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <label htmlFor={`npaDate`} className=" col-form-label fw-bold fs-6 required">
                                  NPA Date
                                </label>

                                <div className="">
                                  <Field
                                    type="date"
                                    name={`npaDate`}
                                    autoComplete="off"
                                    className={clsx("form-control bg-transparent")}
                                    value={convert(values?.npaDate) || ""}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row mb-lg-6">
                              <div className="col-lg-6">
                                <label htmlFor={`13(2)`} className=" col-form-label fw-bold fs-6 required">
                                  13 (2)
                                </label>
                                <div className="">
                                  <Field
                                    type="date"
                                    name={`13(2)`}
                                    autoComplete="off"
                                    className={clsx("form-control bg-transparent")}
                                    value={convert(values?.["13(2)"]) || ""}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <label htmlFor={`13(4)`} className=" col-form-label fw-bold fs-6 required">
                                  13 (4)
                                </label>
                                <div className="">
                                  <Field
                                    type="date"
                                    name={`13(4)`}
                                    autoComplete="off"
                                    className={clsx("form-control bg-transparent")}
                                    value={convert(values?.["13(4)"]) || ""}
                                  />
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                        {step === "Property Details" && (
                          <FieldArray
                            name={`properties`}
                            render={({ insert, remove, push }) => (
                              <>
                                {values?.properties?.map((details: any, index: any) => (
                                  <div className="p-4 border position-relative mb-4" key={index}>
                                    <div className="row">
                                      <div className="col-lg-6">
                                        <label className=" col-form-label fw-bold fs-6 required pb-1" htmlFor={`properties.${index}.districtId`}>
                                          District Name
                                        </label>
                                        <div className="">
                                          <Field
                                            as="select"
                                            name={`properties.${index}.districtId`}
                                            className={clsx("form-control bg-transparent form-select")}
                                            onChange={(e: any) => {
                                              setFieldValue(`properties.${index}.districtId`, e.target.value);
                                              setFieldValue(`properties.${index}.talukaId`, "");
                                            }}
                                          >
                                            <option value="" disabled>
                                              Select District
                                            </option>
                                            {!districtList?.data?.length && <option>{NO_RECORDS_FOUND}</option>}
                                            {districtList?.data?.map((list: any, i: any) => {
                                              return (
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
                                              );
                                            })}
                                          </Field>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <label className=" col-form-label fw-bold fs-6 required pb-1" htmlFor={`properties.${index}.talukaId`}>
                                          Taluka Name
                                        </label>
                                        <div className="">
                                          <Field
                                            as="select"
                                            name={`properties.${index}.talukaId`}
                                            className={clsx("form-control bg-transparent form-select")}
                                            onChange={(e: any) => {
                                              setFieldValue(`properties.${index}.talukaId`, e.target.value);
                                            }}
                                          >
                                            <option value="" disabled>
                                              Select Taluka
                                            </option>

                                            {values.properties[index].districtId &&
                                              districtList?.data?.map((x: any, i: any) => {
                                                if (x.id === Number(values.properties[index].districtId)) {
                                                  if (!x.taluka?.length) {
                                                    return <option>{NO_RECORDS_FOUND}</option>;
                                                  } else {
                                                    return x.taluka.map((tal: any, i: any) => {
                                                      return (
                                                        <>
                                                          {!params.id && tal.isActive === true && (
                                                            <option key={i} value={tal.id}>
                                                              {tal.name}
                                                            </option>
                                                          )}
                                                          {params.id && (
                                                            <option key={i} value={tal.id}>
                                                              {tal.name}
                                                            </option>
                                                          )}
                                                        </>
                                                      );
                                                    });
                                                  }
                                                }
                                              })}
                                          </Field>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-lg-6">
                                        <label htmlFor={`properties.${index}.location`} className="col-form-label fw-bold fs-6 required pb-1">
                                          Location
                                        </label>
                                        <div className="">
                                          <Field
                                            placeholder={`Location`}
                                            type="text"
                                            name={`properties.${index}.location`}
                                            autoComplete="off"
                                            className={clsx("form-control bg-transparent")}
                                          />
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <label htmlFor={`properties.${index}.owner`} className="col-form-label fw-bold fs-6 required pb-1">
                                          Owner
                                        </label>
                                        <div className="">
                                          <Field
                                            placeholder={`Owner`}
                                            type="text"
                                            name={`properties.${index}.owner`}
                                            autoComplete="off"
                                            className={clsx("form-control bg-transparent")}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <label
                                        htmlFor={`properties.${index}.description`}
                                        className="col-lg-4 col-form-label fw-bold fs-6 required pb-1"
                                      >
                                        Description
                                      </label>
                                      <div className="">
                                        <Field
                                          as="textarea"
                                          placeholder={`Description`}
                                          type="text"
                                          name={`properties.${index}.description`}
                                          autoComplete="off"
                                          className={clsx("form-control bg-transparent")}
                                        />
                                      </div>
                                    </div>
                                    {index !== 0 && (
                                      <button
                                        type="button"
                                        className=" btn btn-icon btn-sm  btn-color-gray-400 btn-active-icon-danger p-3 position-absolute"
                                        style={{ top: "-15px", right: "-21px" }}
                                        onClick={() => remove(index)}
                                      >
                                        {/* <i className="fa fa-minus p-0 d-flex"></i> */}
                                        <KTSVG path="/media/icons/duotune/general/gen040.svg" className="svg-icon-muted svg-icon-2hx" />
                                      </button>
                                    )}{" "}
                                  </div>
                                ))}
                                <div className="d-flex justify-content-start mt-2">
                                  <button
                                    type="button"
                                    className="btn btn-light btn-sm btn-active-light-primary"
                                    onClick={() => {
                                      return push({
                                        location: "",
                                        owener: "",
                                        description: "",
                                        caseId: 1,
                                        districtId: "",
                                        talukaId: "",
                                      });
                                    }}
                                  >
                                    <KTSVG path="/media/icons/duotune/arrows/arr075.svg" className="svg-icon-2" />
                                    Add
                                  </button>
                                </div>
                              </>
                            )}
                          />
                        )}
                        {step === "Court Details" && (
                          <>
                            <div className="d-flex mb-lg-6">
                              <label htmlFor={`isFilled`} className="col-form-label fw-bold fs-6 required me-4">
                                Filed
                              </label>
                              <div className="d-flex align-items-center">
                                <div className="form-check form-check-solid form-switch form-switch-sm form-check-custom fv-row">
                                  <Field className="form-check-input" type="checkbox" name="isFilled" />
                                  <label className="form-check-label"></label>
                                </div>
                              </div>
                            </div>

                            {values?.isFilled && (
                              <>
                                <div className="row mb-lg-6">
                                  <div className="col-lg-6">
                                    <label htmlFor={"caseCategoryId"} className="col-form-label fw-bold fs-6 required">
                                      Case Category
                                    </label>
                                    <div className="">
                                      <Field
                                        as="select"
                                        name={"caseCategoryId"}
                                        className={clsx("form-control bg-transparent form-select")}
                                        onChange={(e: any) => {
                                          setFieldValue("caseCategoryId", e.target.value);
                                          setFieldValue(`caseTypeId`, "");
                                          getCaseTypeList(e.target.value);
                                        }}
                                      >
                                        <option value={""} disabled>
                                          Select Case Category
                                        </option>
                                        {!caseCatList?.data?.length && <option>{NO_RECORDS_FOUND}</option>}
                                        {caseCatList?.data?.map((list: any, i: any) => (
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
                                    </div>
                                  </div>

                                  <div className="col-lg-6">
                                    <label htmlFor={`caseTypeId`} className=" col-form-label fw-bold fs-6 required">
                                      Case Type
                                    </label>

                                    <Field
                                      as="select"
                                      name={"caseTypeId"}
                                      className={clsx("form-control bg-transparent form-select")}
                                      disabled={caseTypeList?.data ? false : true}
                                    >
                                      <option value={""} disabled>
                                        Select Case Type
                                      </option>
                                      {!caseTypeList?.data?.length && <option>{NO_RECORDS_FOUND}</option>}
                                      {caseTypeList?.data?.map((list: any, i: any) => (
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
                                  </div>
                                </div>
                                <div className="row mb-lg-6">
                                  <div className="col-lg-4">
                                    <label htmlFor={`caseNo`} className=" col-form-label fw-bold fs-6 required">
                                      Case Number
                                    </label>
                                    <div className="">
                                      <Field
                                        placeholder={`Case Number`}
                                        type="text"
                                        name={`caseNo`}
                                        autoComplete="off"
                                        className={clsx("form-control bg-transparent")}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-4">
                                    <label htmlFor={`year`} className=" col-form-label fw-bold fs-6 required">
                                      Year
                                    </label>
                                    <div className="">
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
                                    </div>
                                  </div>
                                  <div className="col-lg-4">
                                    <label htmlFor={`cnrNo`} className=" col-form-label fw-bold fs-6 required">
                                      CNR Number
                                    </label>
                                    <div className="">
                                      <Field
                                        placeholder={`CNR Number`}
                                        type="text"
                                        name={`cnrNo`}
                                        autoComplete="off"
                                        className={clsx("form-control bg-transparent")}
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="row mb-lg-6">
                                  <div className="col-lg-4">
                                    <label className=" col-form-label fw-bold fs-6 required" htmlFor={`filing.judge.districtId`}>
                                      District Name
                                    </label>
                                    <div className="">
                                      <Field
                                        as="select"
                                        name={`filing.judge.districtId`}
                                        className={clsx("form-control bg-transparent form-select")}
                                        onChange={(e: any) => {
                                          setFieldValue(`filing.judge.districtId`, e.target.value);
                                          setFieldValue(`filing.judge.talukaId`, "");
                                        }}
                                      >
                                        <option value="" disabled>
                                          Select District
                                        </option>
                                        {!districtList?.data?.length && <option>{NO_RECORDS_FOUND}</option>}
                                        {districtList?.data?.map((list: any, i: any) => {
                                          return (
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
                                          );
                                        })}
                                      </Field>
                                    </div>
                                  </div>
                                  <div className="col-lg-4">
                                    <label className=" col-form-label fw-bold fs-6 required" htmlFor={`filing.judge.talukaId`}>
                                      Taluka Name
                                    </label>
                                    <div className="">
                                      <Field
                                        as="select"
                                        name={`filing.judge.talukaId`}
                                        className={clsx("form-control bg-transparent form-select")}
                                        onChange={(e: any) => {
                                          setFieldValue(`filing.judge.talukaId`, e.target.value);
                                          setFieldValue(`filing.judgeId`, "");
                                          getJudgeList(e.target.value);
                                        }}
                                        disabled={values?.filing?.judge?.districtId ? false : true}
                                      >
                                        <option value="" disabled>
                                          Select Taluka
                                        </option>
                                        {values?.filing?.judge?.districtId &&
                                          districtList?.data?.map((x: any, i: any) => {
                                            if (x.id === Number(values.filing.judge.districtId)) {
                                              if (!x.taluka.length) {
                                                return <option> {NO_RECORDS_FOUND}</option>;
                                              } else {
                                                return x.taluka.map((tal: any, i: any) => {
                                                  return (
                                                    <>
                                                      {!params.id && tal.isActive === true && (
                                                        <option key={i} value={tal.id}>
                                                          {tal.name}
                                                        </option>
                                                      )}
                                                      {params.id && (
                                                        <option key={i} value={tal.id}>
                                                          {tal.name}
                                                        </option>
                                                      )}
                                                    </>
                                                  );
                                                });
                                              }
                                            }
                                          })}
                                      </Field>
                                    </div>
                                  </div>
                                  <div className="col-lg-4">
                                    <label className=" col-form-label fw-bold fs-6 required">Judge</label>
                                    <div className="">
                                      <Field
                                        as="select"
                                        type={"text"}
                                        name={"filing.judgeId"}
                                        className={clsx("form-control bg-transparent form-select")}
                                        disabled={judgeList?.data ? false : true}
                                      >
                                        <option value="" disabled>
                                          Select Judge
                                        </option>
                                        {!judgeList?.data?.length && <option>{NO_RECORDS_FOUND}</option>}
                                        {judgeList?.data?.map((list: any, i: any) => {
                                          return (
                                            <>
                                              {!params.id && list.isActive === true && (
                                                <option key={i} value={list.id}>
                                                  {list.name}, {list.forum}
                                                </option>
                                              )}
                                              {params.id && (
                                                <option key={i} value={list.id}>
                                                  {list.name}, {list.forum}
                                                </option>
                                              )}
                                            </>
                                          );
                                        })}
                                      </Field>
                                    </div>
                                  </div>
                                </div>

                                <div className="row mb-lg-6">
                                  <div className="col-lg-6">
                                    <label htmlFor={`filingDate`} className=" col-form-label fw-bold fs-6 required">
                                      Filling Date
                                    </label>
                                    <div className="">
                                      <Field
                                        type="date"
                                        name={`filingDate`}
                                        autoComplete="off"
                                        className={clsx("form-control bg-transparent")}
                                        value={values?.filing.date ? convert(values?.filingDate) : ""}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <label htmlFor={`filing.date`} className=" col-form-label fw-bold fs-6 required">
                                      Next Date
                                    </label>
                                    <div className="">
                                      <Field
                                        type="date"
                                        name={`filing.date`}
                                        autoComplete="off"
                                        className={clsx("form-control bg-transparent")}
                                        value={values?.filing.date ? convert(values?.filing.date) : ""}
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="row mb-lg-6">
                                  <div className="col-lg-6">
                                    <label htmlFor={`filing.stageId`} className=" col-form-label fw-bold fs-6 required">
                                      Stage
                                    </label>
                                    <div className="">
                                      <Field as="select" name={`filing.stageId`} className={clsx("form-control bg-transparent form-select")}>
                                        <option value={""} disabled>
                                          Select Stage
                                        </option>
                                        {!stageList?.data?.length && <option>{NO_RECORDS_FOUND}</option>}
                                        {stageList?.data?.map(
                                          (list: any, i: any) => (
                                            console.log(values.filing.stageId === null),
                                            (
                                              <option key={i} value={list.id}>
                                                {list.name}
                                              </option>
                                            )
                                          )
                                        )}
                                      </Field>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <label className=" col-form-label fw-bold fs-6 required">Remarks</label>
                                    <div className="">
                                      <Field placeholder={`Remarks`} type={"text"} name={"remarks"} className={clsx("form-control bg-transparent")} />
                                    </div>
                                  </div>
                                </div>
                              </>
                            )}
                          </>
                        )}
                      </div>

                      <div className="card-footer d-flex justify-content-end py-6 px-9">
                        {i !== 0 && (
                          <button
                            type="button"
                            data-bs-target={`#kt_accordion_1_body_${i - 1}`}
                            data-bs-toggle="collapse"
                            className="btn btn-light btn-active-light-primary d-flex align-items-center me-4"
                          >
                            {BACK}
                          </button>
                        )}
                        <button
                          type={i === stepper.length - 1 ? "submit" : "button"}
                          data-bs-target={`#kt_accordion_1_body_${i + 1}`}
                          data-bs-toggle="collapse"
                          className="btn btn-primary d-flex align-items-center"
                        >
                          {i === stepper.length - 1 ? "Save Changes" : NEXT}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Form>
        )
      )}
    </Formik>
  );
};

const mapStateToProps = (state: any) => {
  return {
    // Dropdown data
    forumList: state.getForumForDropdownReducer.forumList,
    stageList: state.getStageForDropdownReducer.stageList,
    bankOfficerList: state.getBankOfficerByBankReducer.bankOfficer,
    districtList: state.getDistrictForDropdownReducer.districtList,
    bankList: state.getBankForDropdownReducer.bankList,

    judgeList: state.getJudgeByTalukaReducer.judgeList,
    branchList: state.getBankBranchByBankIdReducer.branchList,

    caseCatList: state.getCaseCatForDropdownReducer.caseCatList,
    caseTypeList: state.getCaseTypeByCaseCatReducer.caseType,
    caseDetailById: state.getCaseByIdCaseReducer.caseDetails,

    // Add Case
    res: state.addCaseReducer.res,
    loading: state.addCaseReducer.loading,
    error: state.addCaseReducer.loading,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    // Dropdown data
    getStageList: () => dispatch(fetchStageDropdown()),
    getBankOfficerList: (id: any) => dispatch(fetchBankOfficerByBank(id)),
    getBranchList: (id: any) => dispatch(fetchBankBranchByBankId(id)),
    getDistrictList: () => dispatch(fetchDistrictForDropdown()),
    getBankList: () => dispatch(fetchBankForDropdown()),
    getJudgeList: (id: any) => dispatch(fetchJudgeByTaluka(id)),
    getCaseCatList: () => dispatch(fetchCaseCategoryForDropdown()),
    getCaseTypeList: (id: any) => dispatch(fetchCaseTypeByCaseCat(id)),

    getCaseById: (id: any) => dispatch(getCaseById(id)),

    // Add Case
    addCase: (details: any, callback: Function) => dispatch(postCaseDetails(details, callback)),
    // Edit Case
    editCase: (details: any) => dispatch(editCaseDetails(details)),
  };
};
const connectComponent = connect(mapStateToProps, mapDispatchToProps)(AddCase);
export default connectComponent;
