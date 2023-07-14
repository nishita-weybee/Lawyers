import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Field } from "formik";
import { connect } from "react-redux";
import {
  fetchAllOurAdvocatesForDropdown,
  fetchDistrictForDropdown,
  fetchJudgeByTaluka,
  fetchStageDropdown,
  fetchStatusForDropdown,
} from "../../../reducers/mastersReducers/mastersAction";
import { useParams } from "react-router-dom";
import { NO_RECORDS_FOUND } from "../../../helpers/globalConstant";

interface Props {
  values: any;
  touched: any;
  errors: any;
  otherCaptionArr: any;
  setFieldValue: any;
  getOurAdvocateList: any;
  ourAdvocateList: any;
  stageList: any;
  getStageList: any;
  districtList: any;
  getDistrictList: any;
  judgeList: any;
  getJudgeByTalukaId: any;
  statusList: any;
  getStatusList: any;
}

const CaseTypeForm = ({
  values,
  touched,
  errors,
  otherCaptionArr,
  setFieldValue,
  ourAdvocateList,
  getOurAdvocateList,
  stageList,
  getStageList,
  getDistrictList,
  districtList,
  judgeList,
  getJudgeByTalukaId,
  statusList,
  getStatusList,
}: Props) => {
  const params = useParams();
  const [talukaArr, setTalukaArr] = useState([]);
  const [courtArr, setCourtArr] = useState([]);
  const [talukaId, setTalukaId] = useState([]);

  const getFieldValue = (fieldName: any) => {
    const field = values?.defaultValues?.find(
      (obj: any) => obj.fieldName === fieldName
    );
    // field && setTalukaId(field.value);
    field && setFieldValue("talukaId", field.value);
  };
  console.log(values.talukaId, values.districtId);

  useEffect(() => {
    getOurAdvocateList();
    getStageList();
    getDistrictList();
    getStatusList();
    if (params.id) {
      getFieldValue("talukaId");
      // getJudgeByTalukaId(values?.filing?.judge?.talukaId);
    }
  }, []);

  useEffect(() => {
    if (values.talukaId) {
      getJudgeByTalukaId(values.talukaId);
    }
  }, [values.talukaId]);

  const handleTaluka = (districtId: any) => {
    const findDistrict = districtList?.find((item: any) => {
      return Number(item.id) === Number(districtId);
    });
    findDistrict?.taluka && setTalukaArr(findDistrict?.taluka);
  };

  useEffect(() => {
    if (params.id) {
      values.districtId && handleTaluka(values.districtId);
    }
  }, [districtList]);

  useEffect(() => {
    setCourtArr(judgeList);
  }, [judgeList]);

  const setFormValues = (formData: any, setFieldValue: any) => {
    formData.forEach((data: any) => {
      const { fieldName, value } = data;
      setFieldValue(fieldName, value);
    });
  };
  useEffect(() => {
    setFormValues(values.defaultValues, setFieldValue);
  }, []);

  return (
    <>
      <div className="px-9 pt-9">
        <div className="row mb-6">
          <div className="col-lg-12">
            <label className=" col-form-label fw-bold fs-6 required">
              Case Type
            </label>
            <div className="">
              <Field
                placeholder="Case Type"
                type="text"
                name={"name"}
                autoComplete="off"
                className={clsx(
                  "form-control bg-transparent",
                  {
                    "is-invalid": touched.name && errors.name,
                  },
                  {
                    "is-valid": touched.name && !errors.name,
                  }
                )}
              />
              {touched.name && errors.name && (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">
                    <span role="alert">{`${errors.name}`}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="row mb-lg-6">
          <div className="col-lg-6">
            <label className=" col-form-label fw-bold fs-6 required">
              Applicant Caption
            </label>
            <div className="">
              <Field
                placeholder="Applicant Caption"
                type="text"
                name="applicant_Caption"
                autoComplete="off"
                className={clsx("form-control bg-transparent")}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <label className=" col-form-label fw-bold fs-6 required">
              Opponent Caption
            </label>
            <div className="">
              <Field
                placeholder="Opponent Caption"
                type="text"
                name="opponent_Caption"
                autoComplete="off"
                className={clsx("form-control bg-transparent")}
              />
            </div>
          </div>
        </div>
        <div className="row mb-lg-6">
          {otherCaptionArr.map((otherCaption: any, index: any) => {
            return (
              <div className="col-lg-6 ">
                <label className=" col-form-label fw-bold fs-6 required">
                  {otherCaption.label}
                </label>
                <div className="mb-lg-6">
                  <Field
                    placeholder={otherCaption.label}
                    type="text"
                    name={otherCaption.name}
                    autoComplete="off"
                    className={clsx("form-control bg-transparent")}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="border-0 align-items-center heading-background">
        <div className="card-title m-0">
          <h5 className=" m-0 text-capitalize">
            Default Values to Load while Adding New Case
          </h5>
        </div>
      </div>
      <div className="px-9">
        <div className="row mb-lg-6">
          <div className="col-lg-4">
            <label className=" col-form-label fw-bold fs-6 required">
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
          <div className="col-lg-4">
            <label className=" col-form-label fw-bold fs-6 required">
              Filing Stage
            </label>
            <div className="">
              <Field
                as="select"
                name="filingStageId"
                className={clsx("form-control bg-transparent form-select")}
                onChange={(e: any) => {
                  setFieldValue("filingStageId", parseInt(e.target.value));
                }}
              >
                <option value={""} disabled>
                  Select Filing Stage
                </option>
                {stageList && stageList.length > 0 ? (
                  stageList?.map((list: any, i: any) => (
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
          <div className="col-lg-4">
            <label className=" col-form-label fw-bold fs-6 required">
              Case Status
            </label>
            <div className="">
              <Field
                as="select"
                name="caseStatusId"
                className={clsx("form-control bg-transparent form-select")}
                onChange={(e: any) => {
                  setFieldValue("caseStatusId", parseInt(e.target.value));
                }}
              >
                <option value={""} disabled>
                  Select Case Status
                </option>
                {statusList && statusList.length > 0 ? (
                  statusList?.map((list: any, i: any) => (
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
              {errors.caseStatusId && touched.caseStatusId && (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">
                    <span role="alert">{`${errors.caseStatusId}`}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="row mb-lg-6">
          <div className="col-lg-4">
            <label className=" col-form-label fw-bold fs-6 required">
              District
            </label>
            <div>
              <Field
                as="select"
                name="districtId"
                className={clsx("form-control bg-transparent form-select")}
                onChange={(e: any) => {
                  setFieldValue("districtId", parseInt(e.target.value));
                  handleTaluka(e.target.value);
                }}
              >
                <option value={""} disabled>
                  Select District
                </option>
                {!districtList?.length && <option>{NO_RECORDS_FOUND}</option>}
                {districtList?.map((list: any, i: any) => (
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
              {touched?.districtId && errors?.districtId && (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">
                    <span role="alert">{`${errors.districtId}`}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-4">
            <label className=" col-form-label fw-bold fs-6 required">
              Taluka
            </label>
            <div>
              <Field
                as="select"
                name="talukaId"
                className={clsx("form-control bg-transparent form-select")}
                onChange={(e: any) => {
                  setFieldValue("talukaId", parseInt(e.target.value));
                  getJudgeByTalukaId(e.target.value);
                }}
              >
                <option value={""} disabled>
                  Select Taluka
                </option>
                {!talukaArr?.length && <option>{NO_RECORDS_FOUND}</option>}
                {talukaArr?.map((list: any, i: any) => (
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
              {touched.talukaId && errors.talukaId && (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">
                    <span role="alert">{`${errors.talukaId}`}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="col-lg-4">
            <label className=" col-form-label fw-bold fs-6 required">
              Court
            </label>
            <div>
              <Field
                as="select"
                name="filing.judgeId"
                className={clsx("form-control bg-transparent form-select")}
                onChange={(e: any) => {
                  setFieldValue("judgeId", parseInt(e.target.value));
                }}
              >
                <option value={""} disabled>
                  Select Court
                </option>
                {courtArr && courtArr.length > 0 ? (
                  courtArr?.map((list: any, i: any) => (
                    <>
                      {!params.id && list.isActive === true && (
                        <option key={i} value={list.id}>
                          {list.forum} - {list.name}
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
              {touched?.filing?.judgeId && errors?.filing?.judgeId && (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">
                    <span role="alert">{`${errors.filing.judgeId}`}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    ourAdvocateList: state.getAllOurAdvocatesForDropdownReducer.ourAdvocateList,
    stageList: state.getStageForDropdownReducer.stageList,
    districtList: state.getDistrictForDropdownReducer.districtList.data,
    judgeList: state.getJudgeByTalukaReducer.judgeList,
    statusList: state.getAllStatusForDropdownReducer.statusList,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getOurAdvocateList: () => dispatch(fetchAllOurAdvocatesForDropdown()),
    getStageList: () => dispatch(fetchStageDropdown()),
    getDistrictList: () => dispatch(fetchDistrictForDropdown()),
    getJudgeByTalukaId: (id: any) => dispatch(fetchJudgeByTaluka(id)),
    getStatusList: () => dispatch(fetchStatusForDropdown()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CaseTypeForm);
