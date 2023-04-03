import clsx from "clsx";
import { Field, FieldArray, Form, Formik } from "formik";
import Multiselect from "multiselect-react-dropdown";
import React, { useEffect } from "react";
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
} from "../../../reducers/mastersReducers/mastersAction";

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
}) => {
  const onSubmit = (values: any, resetForm: any) => {
    console.log(values.temp, "submit");
    resetForm();
  };
  const onSelect = (selectedList: any, selectedItem: any) => {
    // console.log(selectedList, selectedItem, "select");
  };
  const onRemove = (selectedList: any, removedItem: any) => {
    // console.log(selectedList, removedItem, "remove");
  };

  const style = {
    // multiselectContainer: {},
    searchBox: {
      marginTop: 0,
      padding: "7.5px",
      fontSize: "14.3px",
    },
    inputField: {
      // To change input field position or margin
    },
    chips: {
      // To change css chips(Selected options)

      marginBottom: 0,
    },
    optionContainer: {
      // To change css for option container
    },
    option: {
      hover: {
        color: "blue",
        backgroundColor: "white",
      },
    },
    groupHeading: {
      // To chanage group heading style
    },
  };

  useEffect(() => {
    getDistrictList();
    getForumList();
    getProductList();
    getStageList();
    getBankList();
  }, [getDistrictList, getForumList, getProductList, getStageList, getBankList]);

  useEffect(() => {}, []);

  const initialValues = [
    {
      key: "Account Details",
      value: [
        { bank: "" },
        { bankId: "" },
        { district: "" },
        { districtId: "" },
        { npa: "" },
        { npaDate: "" },
        { date132: "" },
        { date134: "" },
        { bowDetail: [{ productId: "", accountNumber: "" }] },
        { borrower: [{ borrower: "" }] },
      ],
    },
    { key: "Property Details", value: [{ proDetails: [{ location: "", owner: "", description: "" }] }] },
    { key: "Court Details", value: [{ cnrNumber: "" }, { forumId: "" }, { judgeId: "" }, { stageId: "" }, { date: "" }, { fillingDate: "" }] },
    { key: "Bank Officer Details", value: [{ bankId: "" }, { bankBranchId: "" }, { bankOfficerId: "" }] },
  ];



  return (
    <Formik initialValues={{ temp: initialValues }} onSubmit={async (values: any, { resetForm }) => onSubmit(values, resetForm)}>
      {({ setFieldValue, isSubmitting, resetForm, values, touched, errors }) => (
        <Form className="form">
          <div className="accordion " id="kt_accordion_1">
            {values.temp.map((step: any, i: any) => {
              return (
                <div className="accordion-item shadow-sm card mb-5 mb-xl-10" key={i}>
                  <h2 className="accordion-header" id={`kt_accordion_1_header_${i}`}>
                    <button
                      className="accordion-button fs-4 fw-bold collapsed card-header border-0 align-items-center"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#kt_accordion_1_body_${i}`}
                      aria-expanded="false"
                      aria-controls={`kt_accordion_1_body_${i}`}
                    >
                      <div className="btn bg-light-primary rounded-circle fs-3 me-4 text-primary">{i + 1} </div> {`${step.key}`}
                    </button>
                  </h2>
                  <div
                    id={`kt_accordion_1_body_${i}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`kt_accordion_1_header_${i}`}
                    data-bs-parent="#kt_accordion_1"
                  >
                    <div className="accordion-body card-body border-top p-9">
                      {step.key === "Account Details" && (
                        <>
                          <div className="row mb-6">
                            <label htmlFor={`temp.${i}.value.${1}.bankId`} className="col-lg-4 col-form-label fw-bold fs-6 required">
                              Bank
                            </label>
                            <div className="col-lg-8">
                              <Field as="select" name={`temp.${i}.value.${1}.bankId`} className={clsx("form-control bg-transparent form-select")}>
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
                          <div className="row mb-6">
                            <label htmlFor={`temp.${i}.value.${3}.districtId`} className="col-lg-4 col-form-label fw-bold fs-6 required">
                              District
                            </label>
                            <div className="col-lg-8">
                              <Field as="select" name={`temp.${i}.value.${3}.districtId`} className={clsx("form-control bg-transparent form-select")}>
                                <option value={""} disabled>
                                  Select District
                                </option>
                                {!districtList?.data?.length && <option>{NO_RECORDS_FOUND}</option>}
                                {districtList?.data?.map((list: any, i: any) => (
                                  <option key={i} value={list.id}>
                                    {list.name}
                                  </option>
                                ))}
                              </Field>
                            </div>
                          </div>

                          <div className="">
                            <FieldArray
                              name={`temp.${i}.value.${9}.borrower`}
                              render={({ insert, remove, push }) => (
                                <div>
                                  {step?.value[9]?.borrower?.map((detail: any, index: any) => (
                                    <div className="border p-4 mt-7 position-relative" key={index}>
                                      <div className="row mb-6" key={index}>
                                        <label
                                          htmlFor={`temp.${i}.value.${9}.borrower.${index}.borrower`}
                                          className="col-lg-4 col-form-label fw-bold fs-6 required"
                                        >
                                          Borrower
                                        </label>
                                        <div className="col-lg-8">
                                          <Field
                                            placeholder={`Borrower`}
                                            type="text"
                                            name={`temp.${i}.value.${9}.borrower.${index}.borrower`}
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
                                          style={{ top: "-15px", right: "-21px" }}
                                        >
                                          <i className="fa fa-minus p-0 d-flex"></i>
                                        </button>
                                      )}
                                    </div>
                                  ))}

                                  <div className="d-flex justify-content-end mt-2">
                                    <button type="button" className="btn btn-light btn-sm btn-active-light-primary" onClick={() => push({})}>
                                      <KTSVG path="/media/icons/duotune/arrows/arr075.svg" className="svg-icon-2" />
                                      Add
                                    </button>
                                  </div>
                                </div>
                              )}
                            />
                          </div>

                          <div className="">
                            <FieldArray
                              name={`temp.${i}.value.${8}.bowDetail`}
                              render={({ insert, remove, push }) => (
                                <div>
                                  {step?.value[8]?.bowDetail?.map((detail: any, index: any) => (
                                    <div className="border p-4 mt-7 position-relative" key={index}>
                                      {/* <div className="row mb-6" key={index}>
                                        <label
                                          htmlFor={`temp.${i}.value.${8}.bowDetail.${index}.borrower`}
                                          className="col-lg-4 col-form-label fw-bold fs-6 required"
                                        >
                                          Borrower
                                        </label>
                                        <div className="col-lg-8">
                                          <Field
                                            placeholder={`Borrower`}
                                            type="text"
                                            name={`temp.${i}.value.${8}.bowDetail.${index}.borrower`}
                                            autoComplete="off"
                                            className={clsx("form-control bg-transparent")}
                                          />
                                        </div>
                                      </div> */}
                                      <div className="row mb-6">
                                        <label
                                          htmlFor={`temp.${i}.value.${8}.bowDetail.${index}.accountNumber`}
                                          className="col-lg-4 col-form-label fw-bold fs-6 required"
                                        >
                                          Account Number
                                        </label>
                                        <div className="col-lg-8">
                                          <Field
                                            placeholder={`Account Number`}
                                            type="text"
                                            name={`temp.${i}.value.${8}.bowDetail.${index}.accountNumber`}
                                            autoComplete="off"
                                            className={clsx("form-control bg-transparent")}
                                          />
                                        </div>
                                      </div>

                                      <div className="row">
                                        <label
                                          htmlFor={`temp.${i}.value.${8}.bowDetail.${index}.productId`}
                                          className="col-lg-4 col-form-label fw-bold fs-6 required"
                                        >
                                          Product
                                        </label>
                                        <div className="col-lg-8">
                                          <Field
                                            as="select"
                                            name={`temp.${i}.value.${8}.bowDetail.${index}.productId`}
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
                                        <button
                                          type="button"
                                          className=" btn btn-sm btn-primary rounded-circle p-3 position-absolute"
                                          onClick={() => remove(index)}
                                          style={{ top: "-15px", right: "-21px" }}
                                        >
                                          <i className="fa fa-minus p-0 d-flex"></i>
                                        </button>
                                      )}
                                    </div>
                                  ))}

                                  <div className="d-flex justify-content-end mt-2">
                                    <button type="button" className="btn btn-light btn-sm btn-active-light-primary" onClick={() => push({})}>
                                      <KTSVG path="/media/icons/duotune/arrows/arr075.svg" className="svg-icon-2" />
                                      Add
                                    </button>
                                  </div>
                                </div>
                              )}
                            />
                          </div>

                          <div className="row mb-6 mt-6">
                            <label htmlFor={`temp.${i}.value.${4}.npa`} className="col-lg-4 col-form-label fw-bold fs-6 required">
                              NPA Amount
                            </label>
                            <div className="col-lg-8">
                              <Field
                                placeholder={`NPA Amount`}
                                type="text"
                                name={`temp.${i}.value.${4}.npa`}
                                autoComplete="off"
                                className={clsx("form-control bg-transparent")}
                              />
                            </div>
                          </div>
                          <div className="row mb-6">
                            <label htmlFor={`temp.${i}.value.${5}.npaDate`} className="col-lg-4 col-form-label fw-bold fs-6 required">
                              NPA Date
                            </label>
                            <div className="col-lg-8">
                              <Field
                                type="date"
                                name={`temp.${i}.value.${5}.npaDate`}
                                autoComplete="off"
                                className={clsx("form-control bg-transparent")}
                              />
                            </div>
                          </div>
                          <div className="row mb-6">
                            <label htmlFor={`temp.${i}.value.${6}.date132`} className="col-lg-4 col-form-label fw-bold fs-6 required">
                              13 (2)
                            </label>
                            <div className="col-lg-8">
                              <Field
                                type="date"
                                name={`temp.${i}.value.${6}.date132`}
                                autoComplete="off"
                                className={clsx("form-control bg-transparent")}
                              />
                            </div>
                          </div>
                          <div className="row mb-6">
                            <label htmlFor={`temp.${i}.value.${7}.date134`} className="col-lg-4 col-form-label fw-bold fs-6 required">
                              13 (4)
                            </label>
                            <div className="col-lg-8">
                              <Field
                                type="date"
                                name={`temp.${i}.value.${7}.date134`}
                                autoComplete="off"
                                className={clsx("form-control bg-transparent")}
                              />
                            </div>
                          </div>
                        </>
                      )}
                      {step.key === "Property Details" && (
                        <FieldArray
                          name={`temp.${i}.value.${0}.proDetails`}
                          render={({ insert, remove, push }) => (
                            <>
                              {step.value[0].proDetails.map((details: any, index: any) => (
                                <div className="p-4 mt-7 border position-relative" key={index}>
                                  <div className="row mb-6">
                                    <label
                                      htmlFor={`temp.${i}.value.${0}.proDetails.${index}.location`}
                                      className="col-lg-4 col-form-label fw-bold fs-6 required"
                                    >
                                      Location
                                    </label>
                                    <div className="col-lg-8">
                                      <Field
                                        placeholder={`Location`}
                                        type="text"
                                        name={`temp.${i}.value.${0}.proDetails.${index}.location`}
                                        autoComplete="off"
                                        className={clsx("form-control bg-transparent")}
                                      />
                                    </div>
                                  </div>
                                  <div className="row mb-6">
                                    <label
                                      htmlFor={`temp.${i}.value.${0}.proDetails.${index}.owner`}
                                      className="col-lg-4 col-form-label fw-bold fs-6 required"
                                    >
                                      Owner
                                    </label>
                                    <div className="col-lg-8">
                                      <Field
                                        placeholder={`Owner`}
                                        type="text"
                                        name={`temp.${i}.value.${0}.proDetails.${index}.owner`}
                                        autoComplete="off"
                                        className={clsx("form-control bg-transparent")}
                                      />
                                    </div>
                                  </div>
                                  <div className="row mb-6">
                                    <label
                                      htmlFor={`temp.${i}.value.${0}.proDetails.${index}.description`}
                                      className="col-lg-4 col-form-label fw-bold fs-6 required"
                                    >
                                      Description
                                    </label>
                                    <div className="col-lg-8">
                                      <Field
                                        placeholder={`Description`}
                                        type="text"
                                        name={`temp.${i}.value.${0}.proDetails.${index}.description`}
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
                                      owner: "",
                                      description: "",
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
                      {step.key === "Court Details" && (
                        <>
                          <div className="row mb-6">
                            <label htmlFor={`temp.${i}.value.${0}.cnrNumber`} className="col-lg-4 col-form-label fw-bold fs-6 required">
                              CNR Number
                            </label>
                            <div className="col-lg-8">
                              <Field
                                placeholder={`CNR Number`}
                                type="text"
                                name={`temp.${i}.value.${0}.cnrNumber`}
                                autoComplete="off"
                                className={clsx("form-control bg-transparent")}
                              />
                            </div>
                          </div>
                          <div className="row mb-6">
                            <label htmlFor={`temp.${i}.value.${1}.forumId`} className="col-lg-4 col-form-label fw-bold fs-6 required">
                              Forum
                            </label>
                            <div className="col-lg-8">
                              <Field
                                as="select"
                                name={`temp.${i}.value.${1}.forumId`}
                                className={clsx("form-control bg-transparent form-select")}
                                onChange={(e: any) => {
                                  getJudgeList(e.target.value);
                                  setFieldValue(`temp.${i}.value.${1}.forumId`, e.target.value);
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
                          </div>
                          {judgeList?.data && (
                            <div className="row mb-6">
                              <label htmlFor={`temp.${i}.value.${2}.judgeId`} className="col-lg-4 col-form-label fw-bold fs-6 required">
                                Judge
                              </label>
                              <div className="col-lg-8">
                                <Field as="select" name={`temp.${i}.value.${2}.judgeId`} className={clsx("form-control bg-transparent form-select")}>
                                  <option value={""} disabled>
                                    Select Judge
                                  </option>
                                  {!judgeList.data.length && <option>{NO_RECORDS_FOUND}</option>}
                                  {judgeList.data.map((list: any, i: any) => {
                                    return <option value={list.id}>{list.name}</option>;
                                  })}
                                </Field>
                              </div>
                            </div>
                          )}
                          <div className="row mb-6">
                            <label htmlFor={`temp.${i}.value.${3}.stageId`} className="col-lg-4 col-form-label fw-bold fs-6 required">
                              Stage
                            </label>
                            <div className="col-lg-8">
                              <Field as="select" name={`temp.${i}.value.${3}.stageId`} className={clsx("form-control bg-transparent form-select")}>
                                <option value={""} disabled>
                                  Select Stage
                                </option>
                                {stageList?.data?.map((list: any, i: any) => (
                                  <option key={i} value={list.id}>
                                    {list.name}
                                  </option>
                                ))}
                              </Field>
                            </div>
                          </div>
                          <div className="row mb-6">
                            <label htmlFor={`temp.${i}.value.${4}.date`} className="col-lg-4 col-form-label fw-bold fs-6 required">
                              Date
                            </label>
                            <div className="col-lg-8">
                              <Field
                                type="date"
                                name={`temp.${i}.value.${4}.date`}
                                autoComplete="off"
                                className={clsx("form-control bg-transparent")}
                              />
                            </div>
                          </div>
                          <div className="row mb-6">
                            <label htmlFor={`temp.${i}.value.${5}.fillingDate`} className="col-lg-4 col-form-label fw-bold fs-6 required">
                              Filling Date
                            </label>
                            <div className="col-lg-8">
                              <Field
                                type="date"
                                name={`temp.${i}.value.${5}.fillingDate`}
                                autoComplete="off"
                                className={clsx("form-control bg-transparent")}
                              />
                            </div>
                          </div>
                        </>
                      )}
                      {step.key === "Bank Officer Details" && (
                        <>
                          <div className="row mb-6">
                            <label htmlFor={`temp.${i}.value.${0}.bankId`} className="col-lg-4 col-form-label fw-bold fs-6 required">
                              Bank
                            </label>
                            <div className="col-lg-8">
                              <Field
                                as="select"
                                name={`temp.${i}.value.${0}.bankId`}
                                className={clsx("form-control bg-transparent form-select")}
                                onChange={(e: any) => {
                                  getBranchList(e.target.value);
                                  setFieldValue(`temp.${i}.value.${0}.bankId`, e.target.value);
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
                              <label htmlFor={`temp.${i}.value.${1}.bankBranchId`} className="col-lg-4 col-form-label fw-bold fs-6 required">
                                Bank Branch
                              </label>
                              <div className="col-lg-8">
                                <Field
                                  as="select"
                                  name={`temp.${i}.value.${1}.bankBranchId`}
                                  className={clsx("form-control bg-transparent form-select")}
                                  onChange={(e: any) => {
                                    getBankOfficerList(e.target.value);
                                    setFieldValue(`temp.${i}.value.${1}.bankBranchId`, e.target.value);
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
                              <label htmlFor={`temp.${i}.value${2}.bankOfficerId`} className="col-lg-4 col-form-label fw-bold fs-6 required">
                                Bank Officer
                              </label>
                              <div className="col-lg-8">
                                <Multiselect
                                  options={bankOfficerList?.data}
                                  onSelect={onSelect}
                                  onRemove={onRemove}
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
                                />
                              </div>
                            </div>
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
                        type={i === values.temp.length - 1 ? "submit" : "button"}
                        data-bs-target={`#kt_accordion_1_body_${i + 1}`}
                        data-bs-toggle="collapse"
                        className="btn btn-primary d-flex align-items-center"
                      >
                        {i === values.temp.length - 1 ? "Save Changes" : NEXT}
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
  console.log(state);

  return {
    forumList: state.getForumForDropdownReducer.forumList,
    stageList: state.getStageForDropdownReducer.stageList,
    bankOfficerList: state.getBankOfficerForDropdownReducer.bankOfficer,
    districtList: state.getDistrictForDropdownReducer.districtList,
    bankList: state.getBankForDropdownReducer.bankList,
    productList: state.getProductForDropdownReducer.productList,
    judgeList: state.getJudgeForDropdownReducer.judgeList,
    branchList: state.getBankBranchByBankIdReducer.branchList,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getForumList: () => dispatch(fetchForumDropdown()),
    getStageList: () => dispatch(fetchStageDropdown()),
    getJudgeList: (id: any) => dispatch(fetchJudgeDropdown(id)),
    getBankOfficerList: (id: any) => dispatch(fetchBankOfficerByBranchId(id)),
    getBranchList: (id: any) => dispatch(fetchBankBranchByBankId(id)),
    getDistrictList: () => dispatch(fetchDistrictForDropdown()),
    getBankList: () => dispatch(fetchBankForDropdown()),
    getProductList: () => dispatch(fetchProductDropdown()),
  };
};
const connectComponent = connect(mapStateToProps, mapDispatchToProps)(AddCase);
export default connectComponent;
