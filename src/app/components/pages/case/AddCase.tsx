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
  fetchBankOfficerByBranchId,
  fetchDistrictForDropdown,
  fetchForumDropdown,
  fetchJudgeDropdown,
  fetchProductDropdown,
  fetchStageDropdown,
  fetchTalukaByDistrictId,
} from "../../../reducers/mastersReducers/mastersAction";
import { editCaseDetails, getCaseById, postCaseDetails } from "../../../reducers/caseReducers/caseAction";
import { useLocation, useParams } from "react-router-dom";
import { convert } from "../../../helpers/helperFunction";

export interface props {
  getProductList: Function;
  getForumList: Function;
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
  productList: any;
  judgeList: any;
  branchList: any;
  getBranchList: Function;
  loading: boolean;
  addCase: Function;
  caseDetailById: any;
  getCaseById: Function;
  editCase: Function;
  getTalukaList: Function;
  talukaList: any;
}

const AddCase: React.FC<props> = ({
  forumList,
  districtList,
  getBankList,
  getDistrictList,
  getBankOfficerList,
  getForumList,
  getProductList,
  getStageList,
  getJudgeList,
  stageList,
  bankOfficerList,
  bankList,
  productList,
  judgeList,
  branchList,
  getBranchList,
  addCase,
  loading,
  getCaseById,
  caseDetailById,
  editCase,
  getTalukaList,
  talukaList,
}) => {
  const location = useLocation();
  const params = useParams();
  const [startDate, setStartDate] = useState(new Date());

  const onSubmit = (values: any, resetForm: any) => {
    resetForm();
    params.id ? editCase(values) : addCase(values, () => {});
  };

  // const style = {
  //   // multiselectContainer: {},
  //   searchBox: {
  //     marginTop: 0,
  //     padding: "7.5px",
  //     fontSize: "14.3px",
  //   },
  //   inputField: {},
  //   chips: {
  //     marginBottom: 0,
  //   },
  //   optionContainer: {},
  //   option: {
  //     hover: {
  //       color: "blue",
  //       backgroundColor: "white",
  //     },
  //   },
  //   groupHeading: {},
  // };

  useEffect(() => {
    params.id && getCaseById(params.id);
    getDistrictList();
    getForumList();
    getProductList();
    getStageList();
    getBankList();
  }, [getDistrictList, getForumList, getProductList, getStageList, getBankList, location.pathname, getCaseById, params.id]);

  useEffect(() => {
    if (params.id && caseDetailById?.data) {
      getJudgeList(caseDetailById?.data?.filing?.forumId);
      getBranchList(caseDetailById?.data?.caseBankOfficers[0].bankId);
      getBankOfficerList(caseDetailById?.data?.caseBankOfficers[0].bankBranchId);
    }
  }, [caseDetailById, params.id, getJudgeList, getBranchList, getBankOfficerList]);
  const stepper = ["Account Details", "Property Details", "Court Details"];

  const initialValues = {
    remarks: "",
    caseTypeId: "",
    filed: false,
    cnrNo: "",
    bankId: "",
    npaAmount: "",
    npaDate: "",
    "13(4)": "",
    "13(2)": "",
    filingDate: "",
    caseNo: "",
    caseProducts: [
      {
        accountNo: "",
        productId: "",
      },
    ],
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
    borrowers: [
      {
        name: "",
      },
    ],
    filing: {
      judgeId: "",
      stageId: "",
      nextDate: "",
    },
    forumId: "",
    caseBankOfficers: [],
    bankOfficer: {
      bankId: "",
      branchId: "",
    },
    districtId: "",
    talukaId: "",
  };

  return (
    <Formik
      initialValues={params.id ? caseDetailById?.data : initialValues}
      onSubmit={async (values: any, { resetForm }) => onSubmit(values, resetForm)}
      enableReinitialize={true}
    >
      {({ setFieldValue, isSubmitting, resetForm, values, touched, errors }) => (
        // console.log(values),
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
                          <div className="row mb-6">
                            <div className="col-lg-6">
                              <label htmlFor={"bankId"} className="col-form-label fw-bold fs-6 required">
                                Bank
                              </label>
                              <div className="">
                                <Field
                                  as="select"
                                  name={"bankId"}
                                  className={clsx("form-control bg-transparent form-select")}
                                  // onChange={(e: any) => console.log(e.target.value)}
                                >
                                  <option value={""} disabled>
                                    Select Bank
                                  </option>
                                  {!bankList?.data?.length && <option>{NO_RECORDS_FOUND}</option>}
                                  {bankList?.data?.map((list: any, i: any) => (
                                    <option key={i} value={list.id}>
                                      {list.name}
                                    </option>
                                  ))}
                                </Field>
                              </div>
                            </div>

                            {/* {bankOfficerList?.data && ( */}
                            <div className="col-lg-6">
                              <label htmlFor={`caseBankOfficers.${0}.bankOfficerId`} className=" col-form-label fw-bold fs-6 required">
                                Bank Officer
                              </label>

                              <div className="">
                                <Field
                                  as="select"
                                  name={"caseBankOfficers"}
                                  className={clsx("form-control bg-transparent form-select")}
                                  // onChange={(e: any) => console.log(e.target.value)}
                                >
                                  <option value={""} disabled>
                                    Select Bank Officer
                                  </option>
                                  {!bankOfficerList?.data?.length && <option>{NO_RECORDS_FOUND}</option>}
                                  {bankOfficerList?.data?.map((list: any, i: any) => (
                                    <option key={i} value={list.id}>
                                      {list.name}
                                    </option>
                                  ))}
                                </Field>
                                {/* <Multiselect
                                    options={bankOfficerList?.data}
                                    onSelect={(selectedList: any) => {
                                      setFieldValue(
                                        `caseBankOfficers`,
                                        selectedList.map((x: any, i: any) => {
                                          return { caseId: i, bankOfficerId: x.id, name: x.name };
                                        })
                                      );
                                    }}
                                    onRemove={(selectedList: any) => {
                                      setFieldValue(
                                        `caseBankOfficers`,
                                        selectedList.map((x: any, i: any) => {
                                          return { caseId: i, bankOfficerId: x.id };
                                        })
                                      );
                                    }}
                                    displayValue="name"
                                    showCheckbox={true}
                                    emptyRecordMsg={NO_RECORDS_FOUND}
                                    closeIcon={"cancel"}
                                    placeholder={"Select Bank Officer"}
                                    loading={false}
                                    style={style}
                                    showArrow={true}
                                    customArrow={""}
                                    avoidHighlightFirstOption={true}
                                    hidePlaceholder={true}
                                    selectedValues={params.id && values.caseBankOfficers}
                                  /> */}
                              </div>
                            </div>
                            {/* // )} */}
                          </div>

                          <div className="">
                            <FieldArray
                              name={`borrowers`}
                              render={({ insert, remove, push }) => (
                                <div>
                                  {values?.borrowers?.map((detail: any, index: any) => (
                                    <div className="border p-4 mt-7 position-relative" key={index}>
                                      <div className="row" key={index}>
                                        <label htmlFor={`borrowers.${index}.name`} className="col-lg-4 col-form-label fw-bold fs-6 required">
                                          Borrower
                                        </label>
                                        <div className="col-lg-8">
                                          <Field
                                            placeholder={`Borrower`}
                                            type="text"
                                            name={`borrowers.${index}.name`}
                                            autoComplete="off"
                                            className={clsx("form-control bg-transparent")}
                                          />
                                        </div>
                                      </div>

                                      {index !== 0 && (
                                        <button
                                          type="button"
                                          className=" btn btn-sm btn-primary rounded-circle p-3 position-absolute"
                                          onClick={() => remove(index)}
                                        >
                                          <i className="fa fa-minus p-0 d-flex"></i>
                                        </button>
                                      )}
                                    </div>
                                  ))}

                                  <div className="d-flex justify-content-end mt-2">
                                    <button
                                      type="button"
                                      className="btn btn-light btn-sm btn-active-light-primary"
                                      onClick={() =>
                                        push({
                                          location: "",
                                          owener: "",
                                          description: "",
                                          caseId: 1,
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
                          </div>

                          <div className="border  p-4 mt-7 ">
                            <FieldArray
                              name={`caseProducts`}
                              render={({ insert, remove, push }) => (
                                <div>
                                  {values?.caseProducts?.map((detail: any, index: any) => (
                                    <div className="row mb-6" key={index}>
                                      <div className="col-lg-5">
                                        <label htmlFor={`caseProducts.${index}.accountNo`} className=" col-form-label fw-bold fs-6 required">
                                          Account Number
                                        </label>
                                        <div className="">
                                          <Field
                                            placeholder={`Account Number`}
                                            type="text"
                                            name={`caseProducts.${index}.accountNo`}
                                            autoComplete="off"
                                            className={clsx("form-control bg-transparent")}
                                          />
                                        </div>
                                      </div>

                                      <div className="col-lg-6">
                                        <label htmlFor={`caseProducts.${index}.productId`} className="col-form-label fw-bold fs-6 required">
                                          Product
                                        </label>
                                        <div className="">
                                          <Field
                                            as="select"
                                            name={`caseProducts.${index}.productId`}
                                            className={clsx("form-control bg-transparent form-select")}
                                          >
                                            <option value={""} disabled>
                                              Select Product
                                            </option>
                                            {!productList?.data?.length && <option>{NO_RECORDS_FOUND}</option>}
                                            {productList?.data?.map((list: any, i: any) => (
                                              <option key={i} value={list.id}>
                                                {list.name}
                                              </option>
                                            ))}
                                          </Field>
                                        </div>
                                      </div>

                                      {index !== 0 && (
                                        <div className="p-3 col-lg-1">
                                          <span
                                            className="btn btn-icon btn-sm btn-color-gray-400 btn-active-icon-danger me-2"
                                            onClick={() => remove(index)}
                                          >
                                            <KTSVG path="/media/icons/duotune/general/gen027.svg" className="svg-icon-2" />
                                          </span>
                                        </div>
                                      )}
                                    </div>
                                  ))}

                                  <div className="d-flex justify-content-end mt-2">
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

                          <div className="row mb-6 mt-6">
                            <label htmlFor={`npaAmount`} className="col-lg-4 col-form-label fw-bold fs-6 required">
                              NPA Amount
                            </label>
                            <div className="col-lg-8">
                              <Field
                                placeholder={`NPA Amount`}
                                type="text"
                                name={`npaAmount`}
                                autoComplete="off"
                                className={clsx("form-control bg-transparent")}
                              />
                            </div>
                          </div>
                          <div className="row mb-6">
                            <label htmlFor={`npaDate`} className="col-lg-4 col-form-label fw-bold fs-6 required">
                              NPA Date
                            </label>

                            <div className="col-lg-8">
                              <Field
                                type="date"
                                name={`npaDate`}
                                autoComplete="off"
                                className={clsx("form-control bg-transparent")}
                                value={convert(values?.npaDate) || ""}
                              />
                            </div>
                          </div>
                          <div className="row mb-6">
                            <label htmlFor={`13(2)`} className="col-lg-4 col-form-label fw-bold fs-6 required">
                              13 (2)
                            </label>
                            <div className="col-lg-8">
                              <Field
                                type="date"
                                name={`13(2)`}
                                autoComplete="off"
                                className={clsx("form-control bg-transparent")}
                                value={convert(values?.["13(2)"]) || ""}
                              />
                            </div>
                          </div>
                          <div className="row mb-6">
                            <label htmlFor={`13(4)`} className="col-lg-4 col-form-label fw-bold fs-6 required">
                              13 (4)
                            </label>
                            <div className="col-lg-8">
                              <Field
                                type="date"
                                name={`13(4)`}
                                autoComplete="off"
                                className={clsx("form-control bg-transparent")}
                                value={convert(values?.["13(4)"]) || ""}
                              />
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
                                <div className="p-4 mt-7 border position-relative" key={index}>
                                  <div className="row mb-6">
                                    <label className="col-lg-4 col-form-label fw-bold fs-6 required" htmlFor={`properties.${index}.districtId`}>
                                      District Name
                                    </label>
                                    <div className="col-lg-8">
                                      <Field
                                        as="select"
                                        name={`properties.${index}.districtId`}
                                        className={clsx("form-control bg-transparent form-select")}
                                        onChange={(e: any) => {
                                          getTalukaList(e.target.value);
                                          setFieldValue(`properties.${index}.districtId`, e.target.value);
                                          setFieldValue(`properties.${index}.talukaId`, "");
                                        }}
                                      >
                                        <option value="" disabled>
                                          Select District
                                        </option>
                                        {!districtList?.data && "Loading..."}
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
                                  <div className="row mb-6">
                                    <label className="col-lg-4 col-form-label fw-bold fs-6 required" htmlFor={`properties.${index}.talukaId`}>
                                      Taluka Name
                                    </label>
                                    <div className="col-lg-8">
                                      <Field
                                        as="select"
                                        name={`properties.${index}.talukaId`}
                                        className={clsx("form-control bg-transparent form-select")}
                                        onChange={(e: any) => setFieldValue(`properties.${index}.talukaId`, e.target.value)}
                                      >
                                        <option value="" disabled>
                                          Select Taluka
                                        </option>
                                        {/* {!talukaList?.data && "Loading..."} */}
                                        {talukaList?.data?.map((list: any, i: any) => {
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
                                  <div className="row mb-6">
                                    <label htmlFor={`properties.${index}.location`} className="col-lg-4 col-form-label fw-bold fs-6 required">
                                      Location
                                    </label>
                                    <div className="col-lg-8">
                                      <Field
                                        placeholder={`Location`}
                                        type="text"
                                        name={`properties.${index}.location`}
                                        autoComplete="off"
                                        className={clsx("form-control bg-transparent")}
                                      />
                                    </div>
                                  </div>
                                  <div className="row mb-6">
                                    <label htmlFor={`properties.${index}.owner`} className="col-lg-4 col-form-label fw-bold fs-6 required">
                                      Owner
                                    </label>
                                    <div className="col-lg-8">
                                      <Field
                                        placeholder={`Owner`}
                                        type="text"
                                        name={`properties.${index}.owner`}
                                        autoComplete="off"
                                        className={clsx("form-control bg-transparent")}
                                      />
                                    </div>
                                  </div>
                                  <div className="row mb-6">
                                    <label htmlFor={`properties.${index}.description`} className="col-lg-4 col-form-label fw-bold fs-6 required">
                                      Description
                                    </label>
                                    <div className="col-lg-8">
                                      <Field
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
                                      className=" btn btn-sm btn-primary rounded-circle p-3 position-absolute"
                                      style={{ top: "-15px", right: "-21px" }}
                                      onClick={() => remove(index)}
                                    >
                                      <i className="fa fa-minus p-0 d-flex"></i>
                                    </button>
                                  )}{" "}
                                </div>
                              ))}
                              <div className="d-flex justify-content-end mt-2">
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
                          <div className="row mb-6">
                            <label htmlFor={``} className="col-lg-4 col-form-label fw-bold fs-6 required">
                              Filed
                            </label>
                            <div className="col-lg-8 d-flex align-items-center">
                              <div className="form-check form-check-solid form-switch form-check-custom fv-row">
                                <Field className="form-check-input w-45px h-30px" type="checkbox" name="filed" />
                                <label className="form-check-label"></label>
                              </div>
                            </div>
                          </div>

                          {values.filed && (
                            <>
                              <div className="row mb-6">
                                <label htmlFor={`caseNo`} className="col-lg-4 col-form-label fw-bold fs-6 required">
                                  Case Number
                                </label>
                                <div className="col-lg-8">
                                  <Field
                                    placeholder={`Case Number`}
                                    type="text"
                                    name={`caseNo`}
                                    autoComplete="off"
                                    className={clsx("form-control bg-transparent")}
                                  />
                                </div>
                              </div>
                              <div className="row mb-6">
                                <label htmlFor={`caseNo`} className="col-lg-4 col-form-label fw-bold fs-6 required">
                                  Year
                                </label>
                                <div className="col-lg-8">
                                  <DatePicker
                                    selected={startDate}
                                    className="form-control bg-transparent"
                                    onChange={(date: any) => setStartDate(date)}
                                    showYearPicker
                                    dateFormat="yyyy"
                                  />
                                </div>
                              </div>
                              <div className="row mb-6">
                                <label htmlFor={`cnrNo`} className="col-lg-4 col-form-label fw-bold fs-6 required">
                                  CNR Number
                                </label>
                                <div className="col-lg-8">
                                  <Field
                                    placeholder={`CNR Number`}
                                    type="text"
                                    name={`cnrNo`}
                                    autoComplete="off"
                                    className={clsx("form-control bg-transparent")}
                                  />
                                </div>
                              </div>
                              <div className="row mb-6">
                                <label className="col-lg-4 col-form-label fw-bold fs-6 required" htmlFor={`districtId`}>
                                  District Name
                                </label>
                                <div className="col-lg-8">
                                  <Field
                                    as="select"
                                    name={`districtId`}
                                    className={clsx("form-control bg-transparent form-select")}
                                    onChange={(e: any) => {
                                      getTalukaList(e.target.value);
                                      setFieldValue(`districtId`, e.target.value);
                                      setFieldValue(`talukaId`, "");
                                    }}
                                  >
                                    <option value="" disabled>
                                      Select District
                                    </option>
                                    {!districtList?.data && "Loading..."}
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
                              <div className="row mb-6">
                                <label className="col-lg-4 col-form-label fw-bold fs-6 required" htmlFor={`talukaId`}>
                                  Taluka Name
                                </label>
                                <div className="col-lg-8">
                                  <Field
                                    as="select"
                                    name={`talukaId`}
                                    className={clsx("form-control bg-transparent form-select")}
                                    onChange={(e: any) => setFieldValue(`talukaId`, e.target.value)}
                                  >
                                    <option value="" disabled>
                                      Select Taluka
                                    </option>
                                    {/* {!talukaList?.data && "Loading..."} */}
                                    {talukaList?.data?.map((list: any, i: any) => {
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
                              <div className="row mb-6">
                                <label className="col-lg-4 col-form-label fw-bold fs-6 required">Forum</label>
                                <div className="col-lg-8">
                                  <Field
                                    placeholder={`Forum`}
                                    type={"text"}
                                    name={"forum"}
                                    className={clsx(
                                      "form-control bg-transparent",
                                      {
                                        "is-invalid": touched.forum && errors.forum,
                                      },
                                      {
                                        "is-valid": touched.forum && !errors.forum,
                                      }
                                    )}
                                  />
                                  {touched.forum && errors.forum && (
                                    <div className="fv-plugins-message-container">
                                      <div className="fv-help-block">
                                        <span role="alert">{`${errors.name}`}</span>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>

                              <div className="row mb-6">
                                <label htmlFor={`filingDate`} className="col-lg-4 col-form-label fw-bold fs-6 required">
                                  Filling Date
                                </label>
                                <div className="col-lg-8">
                                  <Field
                                    type="date"
                                    name={`filingDate`}
                                    autoComplete="off"
                                    className={clsx("form-control bg-transparent")}
                                    value={convert(values?.filingDate) || ""}
                                  />
                                </div>
                              </div>
                              <div className="row mb-6">
                                <label htmlFor={`filing.nextDate`} className="col-lg-4 col-form-label fw-bold fs-6 required">
                                  Next Date
                                </label>
                                <div className="col-lg-8">
                                  <Field
                                    type="date"
                                    name={`filing.nextDate`}
                                    autoComplete="off"
                                    className={clsx("form-control bg-transparent")}
                                    value={convert(values?.filing.nextDate) || ""}
                                  />
                                </div>
                              </div>
                              <div className="row mb-6">
                                <label htmlFor={`filing.stageId`} className="col-lg-4 col-form-label fw-bold fs-6 required">
                                  Stage
                                </label>
                                <div className="col-lg-8">
                                  <Field as="select" name={`filing.stageId`} className={clsx("form-control bg-transparent form-select")}>
                                    <option value={""} disabled>
                                      Select Stage
                                    </option>
                                    {!stageList?.data?.length && <option>{NO_RECORDS_FOUND}</option>}
                                    {stageList?.data?.map((list: any, i: any) => (
                                      <option key={i} value={list.id}>
                                        {list.name}
                                      </option>
                                    ))}
                                  </Field>
                                </div>
                              </div>
                              <div className="row mb-6">
                                <label className="col-lg-4 col-form-label fw-bold fs-6 required">Remarks</label>
                                <div className="col-lg-8">
                                  <Field placeholder={`Remarks`} type={"text"} name={"remarks"} className={clsx("form-control bg-transparent")} />
                                </div>
                              </div>
                            </>
                          )}
                          {/* <div className="row mb-6">
                            <label htmlFor={`forumId`} className="col-lg-4 col-form-label fw-bold fs-6 required">
                              Forum
                            </label>
                            <div className="col-lg-8">
                              <Field
                                as="select"
                                name={`forumId`}
                                className={clsx("form-control bg-transparent form-select")}
                                onChange={(e: any) => {
                                  getJudgeList(e.target.value);
                                  setFieldValue(`forumId`, e.target.value);
                                  setFieldValue(`filing.judgeId`, "");
                                }}
                              >
                                <option value={""} disabled>
                                  Select Forum
                                </option>
                                {!forumList?.data?.length && <option>{NO_RECORDS_FOUND}</option>}
                                {forumList?.data?.map((list: any, i: any) => (
                                  <option key={i} value={list.id}>
                                    {list.name}
                                  </option>
                                ))}
                              </Field>
                            </div>
                          </div> */}
                          {/* {judgeList?.data && (
                            <div className="row mb-6">
                              <label htmlFor={`filing.judgeId`} className="col-lg-4 col-form-label fw-bold fs-6 required">
                                Judge
                              </label>
                              <div className="col-lg-8">
                                <Field
                                  as="select"
                                  name={`filing.judgeId`}
                                  className={clsx("form-control bg-transparent form-select")}
                                  // onChange={(e: any) => setFieldValue("filing.judgeId", e.target.value)}
                                >
                                  <option value={""} disabled>
                                    Select Judge
                                  </option>
                                  {!judgeList?.data?.length && <option>{NO_RECORDS_FOUND}</option>}
                                  {judgeList?.data?.map((list: any, i: any) => {
                                    return (
                                      <option key={i} value={list.id}>
                                        {list.name}
                                      </option>
                                    );
                                  })}
                                </Field>
                              </div>
                            </div>
                          )} */}
                        </>
                      )}
                      {/* {step === "Bank Officer Details" && (
                        <>
                          <div className="row mb-6">
                            <label
                              htmlFor={params.id ? `caseBankOfficers.${0}.bankId` : "bankOfficer.bankId"}
                              className="col-lg-4 col-form-label fw-bold fs-6 required"
                            >
                              Bank
                            </label>
                            <div className="col-lg-8">
                              <Field
                                as="select"
                                name={params.id ? `caseBankOfficers.${0}.bankId` : "bankOfficer.bankId"}
                                className={clsx("form-control bg-transparent form-select")}
                                onChange={(e: any) => {
                                  getBranchList(e.target.value);
                                  setFieldValue(params.id ? `caseBankOfficers.${0}.bankId` : "bankOfficer.bankId", e.target.value);
                                  setFieldValue(params.id ? `caseBankOfficers.${0}.bankBranchId` : "bankOfficer.branchId", "");
                                  // setFieldValue(`caseBankOfficers`, { caseId: "", bankOfficerId: "" });
                                }}
                              >
                                <option value={""} disabled>
                                  Select Bank
                                </option>
                                {!bankList?.data?.length && <option>{NO_RECORDS_FOUND}</option>}
                                {bankList?.data?.map((list: any, i: any) => (
                                  <option key={i} value={list.id}>
                                    {list.name}
                                  </option>
                                ))}
                              </Field>
                            </div>
                          </div>

                          {branchList?.data && (
                            <div className="row mb-6">
                              <label
                                htmlFor={params.id ? `caseBankOfficers.${0}.bankBranchId` : "bankOfficer.branchId"}
                                className="col-lg-4 col-form-label fw-bold fs-6 required"
                              >
                                Bank Branch
                              </label>
                              <div className="col-lg-8">
                                <Field
                                  as="select"
                                  name={params.id ? `caseBankOfficers.${0}.bankBranchId` : "bankOfficer.branchId"}
                                  className={clsx("form-control bg-transparent form-select")}
                                  onChange={(e: any) => {
                                    getBankOfficerList(e.target.value);
                                    setFieldValue(`bankOfficer.branchId`, e.target.value);
                                  }}
                                >
                                  <option value={""} disabled>
                                    Select Bank Branch
                                  </option>
                                  {!branchList?.data?.length && <option>{NO_RECORDS_FOUND}</option>}
                                  {branchList?.data?.map((list: any, i: any) => (
                                    <option key={i} value={list.id}>
                                      {list.name}
                                    </option>
                                  ))}
                                </Field>
                              </div>
                            </div>
                          )}

                          {bankOfficerList?.data && (
                            <div className="row mb-6">
                              <label htmlFor={`caseBankOfficers.${0}.bankOfficerId`} className="col-lg-4 col-form-label fw-bold fs-6 required">
                                Bank Officer
                              </label>

                              <div className="col-lg-8">
                                <Multiselect
                                  options={bankOfficerList?.data}
                                  onSelect={(selectedList: any) => {
                                    setFieldValue(
                                      `caseBankOfficers`,
                                      selectedList.map((x: any, i: any) => {
                                        return { caseId: i, bankOfficerId: x.id, name: x.name };
                                      })
                                    );
                                  }}
                                  onRemove={(selectedList: any) => {
                                    setFieldValue(
                                      `caseBankOfficers`,
                                      selectedList.map((x: any, i: any) => {
                                        return { caseId: i, bankOfficerId: x.id };
                                      })
                                    );
                                  }}
                                  displayValue="name"
                                  showCheckbox={true}
                                  emptyRecordMsg={NO_RECORDS_FOUND}
                                  closeIcon={"cancel"}
                                  placeholder={"Select Bank Officer"}
                                  loading={false}
                                  style={style}
                                  showArrow={true}
                                  customArrow={""}
                                  avoidHighlightFirstOption={true}
                                  hidePlaceholder={true}
                                  selectedValues={params.id && values.caseBankOfficers}
                                />
                              </div>
                            </div>
                          )}
                        </>
                      )} */}
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
      )}
    </Formik>
  );
};

const mapStateToProps = (state: any) => {
  return {
    // Dropdown data
    forumList: state.getForumForDropdownReducer.forumList,
    stageList: state.getStageForDropdownReducer.stageList,
    bankOfficerList: state.getBankOfficerForDropdownReducer.bankOfficer,
    districtList: state.getDistrictForDropdownReducer.districtList,
    bankList: state.getBankForDropdownReducer.bankList,
    productList: state.getProductForDropdownReducer.productList,
    judgeList: state.getJudgeForDropdownReducer.judgeList,
    branchList: state.getBankBranchByBankIdReducer.branchList,
    talukaList: state.getTalukaByDistrictIdReducer.talukaList,

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
    getForumList: () => dispatch(fetchForumDropdown()),
    getStageList: () => dispatch(fetchStageDropdown()),
    getJudgeList: (id: any) => dispatch(fetchJudgeDropdown(id)),
    getBankOfficerList: (id: any) => dispatch(fetchBankOfficerByBranchId(id)),
    getBranchList: (id: any) => dispatch(fetchBankBranchByBankId(id)),
    getDistrictList: () => dispatch(fetchDistrictForDropdown()),
    getBankList: () => dispatch(fetchBankForDropdown()),
    getProductList: () => dispatch(fetchProductDropdown()),
    getTalukaList: (id: any) => dispatch(fetchTalukaByDistrictId(id)),

    getCaseById: (id: any) => dispatch(getCaseById(id)),

    // Add Case
    addCase: (details: any, callback: Function) => dispatch(postCaseDetails(details, callback)),
    // Edit Case
    editCase: (details: any) => dispatch(editCaseDetails(details)),
    // Edit default fields
  };
};
const connectComponent = connect(mapStateToProps, mapDispatchToProps)(AddCase);
export default connectComponent;
