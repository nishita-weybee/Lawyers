import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Field } from "formik";
import clsx from "clsx";
import { NO_RECORDS_FOUND } from "../../../helpers/globalConstant";
import { useParams } from "react-router-dom";
import { fetchStatusForDropdown } from "../../../reducers/mastersReducers/mastersAction";

interface Props {
  values: any;
  caseTypeList: any;
  errors: any;
  touched: any;
  setFieldValue: any;
  getStatusList: any;
  statusList: any;
  statusListLoading: any;
}

const Step3 = ({
  values,
  caseTypeList,
  errors,
  touched,
  setFieldValue,
  getStatusList,
  statusList,
  statusListLoading,
}: Props) => {
  const params = useParams();
  const [fields, setFields] = useState<{ field: string; label: string }[]>([]);

  const foundItem = caseTypeList.find((item: any) => {
    return Number(item.id) === Number(values.caseTypeId);
  });

  useEffect(() => {
    getStatusList();
  }, []);
  console.log(statusList);

  useEffect(() => {
    if (foundItem) {
      const filterFoundItem = Object.keys(foundItem).filter((key, index) =>
        key.includes("caption_")
      );
      const fieldObject = filterFoundItem.reduce((obj, key) => {
        obj[key] = foundItem[key];
        return obj;
      }, {} as Record<string, string>);

      const transformedArray = Object.entries(fieldObject).map(
        ([key, value]) => ({
          field: key,
          label: value,
        })
      );
      setFields(transformedArray);
    }
  }, [foundItem]);

  console.log(touched, "touched");

  return (
    <>
      <div className="row mb-lg-6 mt-2">
        {fields &&
          fields.map((field, index) => {
            return (
              <div className="col-lg-6" key={index}>
                <label
                  htmlFor={`field-${index}`}
                  className="col-form-label fw-bold fs-6"
                >
                  {field.label}
                </label>
                <Field
                  placeholder={field.label}
                  type="text"
                  name={"caseFieldsDetails." + field.field}
                  autoComplete="off"
                  className={clsx("form-control bg-transparent")}
                />
              </div>
            );
          })}
        <div className="col-lg-12">
          <label className="col-form-label fw-bold fs-6 required">Status</label>
          <Field
            as="select"
            name="statusId"
            className={clsx("form-control bg-transparent form-select")}
            onChange={(e: any) => {
              setFieldValue("statusId", parseInt(e.target.value));
            }}
          >
            <option value={""} disabled>
              Select Status
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
        </div>

        {touched?.statusId && errors?.statusId && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">
              <span role="alert">{`${errors.statusId}`}</span>
            </div>
          </div>
        )}
        <div className="col-lg-12">
          <label className="col-form-label fw-bold fs-6 required">
            Case Note
          </label>
          <Field
            placeholder=" Case Note"
            type="text"
            name="caseNote"
            autoComplete="off"
            className={clsx("form-control bg-transparent")}
          />
        </div>
        {touched?.caseNote && errors?.caseNote && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">
              <span role="alert">{`${errors.caseNote}`}</span>
            </div>
          </div>
        )}

        <div className="col-lg-12">
          <label className="col-form-label fw-bold fs-6 required">
            Remarks
          </label>
          <Field
            placeholder="Remarks"
            type="text"
            name="remarks"
            autoComplete="off"
            className={clsx("form-control bg-transparent")}
          />
        </div>
        {touched?.remarks && errors?.remarks && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">
              <span role="alert">{`${errors.remarks}`}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    caseTypeList: state.getCaseTypeForDropdownReducer.caseTypeList,

    statusListLoading: state.getAllStatusForDropdownReducer.loading,
    statusList: state.getAllStatusForDropdownReducer.statusList,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    getStatusList: () => dispatch(fetchStatusForDropdown()),
  };
};
const connectComponent = connect(mapStateToProps, mapDispatchToProps)(Step3);
export default connectComponent;
