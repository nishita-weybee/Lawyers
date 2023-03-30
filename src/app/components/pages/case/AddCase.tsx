import clsx from "clsx";
import { Field, FieldArray, Form, Formik } from "formik";
import Multiselect from "multiselect-react-dropdown";
import React from "react";
import { KTSVG } from "../../../../_metronic/helpers";
import { NEXT } from "../../../helpers/globalConstant";

export interface props {}

const AddCase: React.FC<props> = () => {
  const onSubmit = (values: any, resetForm: any) => {
    console.log(values.temp, "submit");
    resetForm();
    // e.preventDefault();
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
      //   border: "none",
      //   fontSize: "10px",
      //   minHeight: "50px",
    },
    inputField: {
      // To change input field position or margin
      //   margin: "5px",
    },
    chips: {
      // To change css chips(Selected options)
      // background: "red",
    },
    optionContainer: {
      // To change css for option container
      //   border: "2px solid",
    },
    option: {
      // To change css for dropdown options
      color: "black",
      backgroundColor: "white",
      hover: {
        color: "blue",
        backgroundColor: "white",
      },
    },
    groupHeading: {
      // To chanage group heading style
    },
  };

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
        { bowDetail: [{ borrower: "", productId: "", accountNumber: "" }] },
      ],
    },
    { key: "Property Details", value: [{ proDetails: [{ location: "", owner: "", description: "" }] }] },
    { key: "Bank Officer Details", value: [{ bankOfficerId: "" }] },
    { key: "Court Details", value: [{ cnrNumber: "" }, { forumId: "" }, { judgeId: "" }, { stageId: "" }, { date: "" }, { fillingDate: "" }] },
  ];

  return (
    <Formik initialValues={{ temp: initialValues }} onSubmit={async (values: any, { resetForm }) => onSubmit(values, resetForm)}>
      {({ setFieldValue, isSubmitting, resetForm, values, touched, errors }) => (
        console.log(values, "values"),
        (
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
                                  <option value={""}>Select Bank</option>
                                  <option value={"1"}>Bob</option>
                                  <option value={"2"}>Kotak</option>
                                  <option value={"3"}>Icici</option>
                                </Field>
                              </div>
                            </div>
                            <div className="row mb-6">
                              <label htmlFor={`temp.${i}.value.${3}.districtId`} className="col-lg-4 col-form-label fw-bold fs-6 required">
                                District
                              </label>
                              <div className="col-lg-8">
                                <Field
                                  as="select"
                                  name={`temp.${i}.value.${3}.districtId`}
                                  className={clsx("form-control bg-transparent form-select")}
                                >
                                  <option value={""}>Select District</option>
                                  <option value={"1"}>Mumbai</option>
                                  <option value={"2"}>Ahmedabad</option>
                                  <option value={"3"}>Banglore</option>
                                </Field>
                              </div>
                            </div>
                            <div className="">
                              <FieldArray
                                name={`temp.${i}.value.${8}.bowDetail`}
                                render={({ insert, remove, push }) => (
                                  <div>
                                    {step?.value[8]?.bowDetail?.map((detail: any, index: any) => (
                                      <div className="border p-4 mt-7 position-relative" key={index}>
                                        <div className="row mb-6" key={index}>
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
                                        </div>
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
                                              <option value={""}>Select Product</option>
                                              <option value={"1"}>Perfumes</option>
                                              <option value={"2"}>Bags</option>
                                              <option value={"3"}>Cosmetics</option>
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

                                    {/* <button
                                      type="button"
                                      className="btn btn-sm btn-light btn-active-light-primary d-flex justify-content-end mt-4"
                                      onClick={() => push({})}
                                    >
                                      <KTSVG path="/media/icons/duotune/arrows/arr075.svg" className="svg-icon-2" /> Add
                                    </button> */}

                                    <div className="d-flex justify-content-end mt-2">
                                  <button
                                    type="button"
                                    className="btn btn-light btn-sm btn-active-light-primary"
                                    onClick={() => push({})}
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
                              <label htmlFor={`temp.${i}.value.${4}.npa`} className="col-lg-4 col-form-label fw-bold fs-6 required">
                                NPA
                              </label>
                              <div className="col-lg-8">
                                <Field
                                  placeholder={`NPA`}
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
                                <Field as="select" name={`temp.${i}.value.${1}.forumId`} className={clsx("form-control bg-transparent form-select")}>
                                  <option>Select Forum</option>
                                  <option value={"1"}> Forum 1</option>
                                  <option value={"2"}> Forum 2</option>
                                  <option value={"3"}> Forum 3</option>
                                </Field>
                              </div>
                            </div>
                            <div className="row mb-6">
                              <label htmlFor={`temp.${i}.value.${2}.judgeId`} className="col-lg-4 col-form-label fw-bold fs-6 required">
                                Judge
                              </label>
                              <div className="col-lg-8">
                                <Field as="select" name={`temp.${i}.value.${2}.judgeId`} className={clsx("form-control bg-transparent form-select")}>
                                  <option>Select Judge</option>
                                  <option value={"1"}> Judge 1</option>
                                  <option value={"2"}> Judge 2</option>
                                  <option value={"3"}> Judge 3</option>
                                </Field>
                              </div>
                            </div>
                            <div className="row mb-6">
                              <label htmlFor={`temp.${i}.value.${3}.stageId`} className="col-lg-4 col-form-label fw-bold fs-6 required">
                                Stage
                              </label>
                              <div className="col-lg-8">
                                <Field as="select" name={`temp.${i}.value.${3}.stageId`} className={clsx("form-control bg-transparent form-select")}>
                                  <option value={""}>Select Stage</option>
                                  <option value={"1"}> Stage 1</option>
                                  <option value={"2"}> Stage 2</option>
                                  <option value={"3"}> Stage 3</option>
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
                              <label htmlFor={`temp.${i}.value${0}.bankOfficerId`} className="col-lg-4 col-form-label fw-bold fs-6 required">
                                Bank Officer
                              </label>
                              <div className="col-lg-8">
                                <Multiselect
                                  options={[
                                    { name: "Option 1", id: 1 },
                                    { name: "Option 2", id: 2 },
                                  ]}
                                  onSelect={onSelect}
                                  onRemove={onRemove}
                                  displayValue="name"
                                  showCheckbox={true}
                                  emptyRecordMsg={"No records found"}
                                  closeIcon={"cancel"}
                                  placeholder={"Select Bank Officer"}
                                  loading={false}
                                  style={style}
                                />
                              </div>
                            </div>
                          </>
                        )}
                      </div>

                      <div className="card-footer d-flex justify-content-end py-6 px-9">
                        <button type={i === values.temp.length - 1 ? "submit" : "button"} className="btn btn-primary d-flex align-items-center">
                          {i === values.temp.length - 1 ? "Save Changes" : NEXT}
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

export default AddCase;
