import React from "react";
import { useWindowSize } from "../../../../helpers/useWindowSize";
import { useParams } from "react-router-dom";
import { Field, FieldArray } from "formik";
import clsx from "clsx";
import { NO_RECORDS_FOUND } from "../../../../helpers/globalConstant";
import { KTSVG } from "../../../../../_metronic/helpers";
import { connect } from "react-redux";
import CaseOfficer from "./CaseOfficer";

interface Props {
  values: any;
  foundItem: any;
  showClientOfficer: any;
  setShowClientOfficer: any;
  setFieldValue: any;
  getCLientOfficerByClientIdList: any;
  setCurrentClientId: any;
  clientList: any;
  clientOfficer: any;
  ourAdvocateList: any;
  oppositeAdvocateList: any;
  errors: any;
  touched: any;
  setClientOfficer: any;
}

const DynamicFormTwo = (Props: Props) => {
  const {
    values,
    foundItem,
    showClientOfficer,
    setShowClientOfficer,
    setFieldValue,
    getCLientOfficerByClientIdList,
    setCurrentClientId,
    clientList,
    clientOfficer,
    ourAdvocateList,
    oppositeAdvocateList,
    errors,
    touched,
    setClientOfficer,
  }: Props = Props;
  const { isMobile, windowSize } = useWindowSize();
  const params = useParams();
  return (
    <>
      {/* <FieldArray
        name="case_OppositeParties"
        render={({ insert, remove, push }) => (
          <div className="row mb-lg-6">
            {values?.case_OppositeParties?.map((detail: any, index: any) => (
              <div
                className={`row mb-4 
                 ${isMobile && "border position-relative p-4"} `}
                key={index}
              >
                <div className="col-lg-3 field-with-error-height">
                  <div className="">
                    <Field
                      placeholder="Opposite Party"
                      type="text"
                      name={`case_OppositeParties.${index}.oppositeParty`}
                      autoComplete="off"
                      className={clsx("form-control bg-transparent")}
                    />
                  </div>
                </div>

                <div className="col-lg-3 field-with-error-height">
                  <div className="">
                    <Field
                      placeholder="Party Name"
                      type="text"
                      name={`case_OppositeParties.${index}.partyName`}
                      autoComplete="off"
                      className={clsx("form-control bg-transparent")}
                    />
                  </div>
                </div>
                <div className="col-lg-2 field-with-error-height">
                  <Field
                    placeholder="Party Number"
                    type="text"
                    name={`case_OppositeParties.${index}.partyNo`}
                    autoComplete="off"
                    className={clsx("form-control bg-transparent")}
                  />
                </div>
                <div
                  className={
                    values.isClientSide === `${foundItem?.applicant_Caption}`
                      ? "col-lg-2 field-with-error-height"
                      : "col-lg-3 field-with-error-height"
                  }
                >
                  <Field
                    as="select"
                    name={`case_OppositeParties.${index}.oppositeAdvocateId`}
                    className={clsx("form-control bg-transparent form-select")}
                    onChange={(e: any) => {
                      setFieldValue(
                        `case_OppositeParties.${index}.oppositeAdvocateId`,
                        parseInt(e.target.value)
                      );
                    }}
                  >
                    <option value={""} disabled>
                      Advocate
                    </option>
                    {oppositeAdvocateList?.length === 0 && (
                      <option>{NO_RECORDS_FOUND}</option>
                    )}
                    {oppositeAdvocateList?.length > 0 &&
                      oppositeAdvocateList?.map((list: any, i: any) => (
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
            ))}

            <div className="d-flex justify-content-start mt-2">
              <button
                type="button"
                className="btn btn-light btn-sm btn-active-light-primary"
                onClick={() =>
                  push({
                    oppositeParty: "",
                    partyName: "",
                    partyNo: "",
                    oppositeAdvocateId: "",
                  })
                }
              >
                <KTSVG
                  path="/media/icons/duotune/arrows/arr075.svg"
                  className="svg-icon-2"
                />
                Add
              </button>
            </div>
          </div>
        )}
      /> */}
      <div className="row mb-lg-3">
        <div className="col-md-3">
          <Field
            placeholder="Opposite Party"
            type="text"
            name="oppositeParty"
            autoComplete="off"
            className={clsx("form-control bg-transparent")}
          />
          {errors.oppositeParty && touched.oppositeParty && (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">
                <span role="alert">{`${errors.oppositeParty}`}</span>
              </div>
            </div>
          )}
        </div>
        <div className="col-md-3">
          <Field
            placeholder="Party Name"
            type="text"
            name="partyName"
            autoComplete="off"
            className={clsx("form-control bg-transparent")}
          />
          {errors.partyName && touched.partyName && (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">
                <span role="alert">{`${errors.partyName}`}</span>
              </div>
            </div>
          )}
        </div>
        <div className="col-md-3">
          <Field
            placeholder="Party Number"
            type="text"
            name="partyNo"
            autoComplete="off"
            className={clsx("form-control bg-transparent")}
          />
          {errors.partyNo && touched.partyNo && (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">
                <span role="alert">{`${errors.partyNo}`}</span>
              </div>
            </div>
          )}
        </div>
        <div className="col-md-3">
          <Field
            as="select"
            name="oppositeAdvocateId"
            className={clsx("form-control bg-transparent form-select")}
            onChange={(e: any) => {
              setFieldValue(`oppositeAdvocateId`, parseInt(e.target.value));
            }}
          >
            <option value={""} disabled>
              Opposite Advocate
            </option>
            {oppositeAdvocateList?.length === 0 && (
              <option>{NO_RECORDS_FOUND}</option>
            )}
            {oppositeAdvocateList?.length > 0 &&
              oppositeAdvocateList?.map((list: any, i: any) => (
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
          {errors.oppositeAdvocateId && touched.oppositeAdvocateId && (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">
                <span role="alert">{`${errors.oppositeAdvocateId}`}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <span className="fw-bold fs-2">Vs</span>
      </div>
      <div className="row mb-lg-6">
        <label
          htmlFor="clientId"
          className="col-form-label fw-bold fs-6 required"
        >
          {foundItem?.opponent_Caption}
        </label>
        <FieldArray
          name="case_Clients"
          render={({ insert, remove, push }) => (
            <div className="row mb-lg-6">
              {values?.case_Clients?.map((detail: any, index: any) => (
                // <div
                //   className={`row mb-4
                //   ${isMobile && "border position-relative p-4"} `}
                //   key={index}
                // >
                //   <>
                //     <div
                //       className={
                //         showClientOfficer
                //           ? "col-lg-2 field-with-error-height"
                //           : "col-lg-3 field-with-error-height"
                //       }
                //     >
                //       <Field
                //         as="select"
                //         name={`case_Clients.${index}.clientId`}
                //         className={clsx(
                //           "form-control bg-transparent form-select"
                //         )}
                //         onChange={(e: any) => {
                //           setShowClientOfficer(true);
                //           const clientId = e.target.value;
                //           clientId && getCLientOfficerByClientIdList(clientId);
                //           setCurrentClientId(`case_Clients.${index}.clientId`);
                //           setFieldValue(
                //             `case_Clients.${index}.clientId`,
                //             parseInt(e.target.value)
                //           );
                //         }}
                //       >
                //         <option value={""} disabled>
                //           Select Client
                //         </option>
                //         {/* {!clientList?.length && (
                //           <option>{NO_RECORDS_FOUND}</option>
                //         )} */}
                //         {clientList?.length > 0 &&
                //           clientList.map((list: any, i: any) => (
                //             <>
                //               {!params.id && list.isActive === true && (
                //                 <option key={i} value={list.id}>
                //                   {list.name}
                //                 </option>
                //               )}
                //               {params.id && (
                //                 <option key={i} value={list.id}>
                //                   {list.name}
                //                 </option>
                //               )}
                //             </>
                //           ))}
                //       </Field>
                //       {touched?.case_Clients?.[index]?.clientId &&
                //         errors?.case_Clients?.[index]?.clientId && (
                //           <div className="fv-plugins-message-container">
                //             <div className="fv-help-block">
                //               <span role="alert">{`${errors.case_Clients[index].clientId}`}</span>
                //             </div>
                //           </div>
                //         )}
                //     </div>
                //     {showClientOfficer && (
                //       <div className="col-lg-2 field-with-error-height">
                //         <Field
                //           as="select"
                //           name={`case_Clients.${index}.clientOfficerId`}
                //           className={clsx(
                //             "form-control bg-transparent form-select"
                //           )}
                //           onChange={(e: any) => {
                //             setFieldValue(
                //               `case_Clients.${index}.clientOfficerId`,
                //               parseInt(e.target.value)
                //             );
                //           }}
                //         >
                //           <option value={""} disabled>
                //             Select Client Officer
                //           </option>
                //           {clientOfficer &&
                //             clientOfficer[`case_Clients.${index}.clientId`]
                //               ?.length === 0 && (
                //               <option>{NO_RECORDS_FOUND}</option>
                //             )}
                //           {clientOfficer &&
                //             clientOfficer[`case_Clients.${index}.clientId`]
                //               ?.length > 0 &&
                //             clientOfficer[`case_Clients.${index}.clientId`].map(
                //               (list: any, i: any) => (
                //                 <>
                //                   {!params.id && list.isActive === true && (
                //                     <option key={i} value={list.id}>
                //                       {list.name}
                //                     </option>
                //                   )}
                //                   {params.id && (
                //                     <option key={i} value={list.id}>
                //                       {list.name}
                //                     </option>
                //                   )}
                //                 </>
                //               )
                //             )}
                //         </Field>
                //         {touched?.case_Clients?.[index]?.clientOfficerId &&
                //           errors?.case_Clients?.[index]?.clientOfficerId && (
                //             <div className="fv-plugins-message-container">
                //               <div className="fv-help-block">
                //                 <span role="alert">{`${errors.case_Clients[index].clientOfficerId}`}</span>
                //               </div>
                //             </div>
                //           )}
                //       </div>
                //     )}
                //   </>
                //   <div className="col-lg-3 field-with-error-height ">
                //     <Field
                //       placeholder="Party Name"
                //       type="text"
                //       name={`case_Clients.${index}.partyName`}
                //       autoComplete="off"
                //       className={clsx("form-control bg-transparent")}
                //     />
                //     {touched?.case_Clients?.[index]?.partyName &&
                //       errors?.case_Clients?.[index]?.partyName && (
                //         <div className="fv-plugins-message-container">
                //           <div className="fv-help-block">
                //             <span role="alert">{`${errors.case_Clients[index].partyName}`}</span>
                //           </div>
                //         </div>
                //       )}
                //   </div>
                //   <div className="col-lg-2 field-with-error-height">
                //     <Field
                //       placeholder="Party Number"
                //       type="text"
                //       name={`case_Clients.${index}.partyNo`}
                //       autoComplete="off"
                //       className={clsx("form-control bg-transparent")}
                //     />
                //     {touched?.case_Clients?.[index]?.partyNo &&
                //       errors?.case_Clients?.[index]?.partyNo && (
                //         <div className="fv-plugins-message-container">
                //           <div className="fv-help-block">
                //             <span role="alert">{`${errors.case_Clients[index].partyNo}`}</span>
                //           </div>
                //         </div>
                //       )}
                //   </div>

                //   <div
                //     className={
                //       values.isClientSide === `${foundItem?.opponent_Caption}`
                //         ? "col-lg-2 field-with-error-height"
                //         : "col-lg-3 field-with-error-height"
                //     }
                //   >
                //     <Field
                //       as="select"
                //       name={`case_Clients.${index}.ourAdvocateId`}
                //       className={clsx(
                //         "form-control bg-transparent form-select"
                //       )}
                //       onChange={(e: any) => {
                //         setFieldValue(
                //           `case_Clients.${index}.ourAdvocateId`,
                //           parseInt(e.target.value)
                //         );
                //       }}
                //     >
                //       <option value={""} disabled>
                //         Advocate
                //       </option>
                //       {!ourAdvocateList && <option>{NO_RECORDS_FOUND}</option>}
                //       {ourAdvocateList.length > 0 &&
                //         ourAdvocateList?.map((list: any, i: any) => (
                //           <>
                //             {!params.id && list.isActive === true && (
                //               <option key={i} value={list.id}>
                //                 {list.name}
                //               </option>
                //             )}
                //             {params.id && (
                //               <option key={i} value={list.id}>
                //                 {list.name}
                //               </option>
                //             )}
                //           </>
                //         ))}
                //     </Field>
                //     {touched?.case_Clients?.[index]?.ourAdvocateId &&
                //       errors?.case_Clients?.[index]?.ourAdvocateId && (
                //         <div className="fv-plugins-message-container">
                //           <div className="fv-help-block">
                //             <span role="alert">{`${errors.case_Clients[index].ourAdvocateId}`}</span>
                //           </div>
                //         </div>
                //       )}
                //   </div>

                //   <button
                //     className={`col-lg-1 btn btn-icon btn-sm btn-color-gray-400 btn-active-icon-danger ${
                //       isMobile && "position-absolute"
                //     }`}
                //     onClick={() => remove(index)}
                //     style={
                //       isMobile
                //         ? {
                //             top: "-16px",
                //             right: " -16px",
                //           }
                //         : undefined
                //     }
                //   >
                //     <KTSVG
                //       path="/media/icons/duotune/general/gen040.svg"
                //       className="svg-icon-muted svg-icon-2hx"
                //     />
                //   </button>
                // </div>
                <CaseOfficer
                  Props={{
                    ...Props,
                    detail: detail,
                    index: index,
                    remove: remove,
                    push: push,
                    insert: insert,
                  }}
                />
              ))}

              <div className="d-flex justify-content-start mt-2">
                <button
                  type="button"
                  className="btn btn-light btn-sm btn-active-light-primary"
                  onClick={() =>
                    push({
                      clientId: "",
                      clientOfficerId: "",
                      partyName: "",
                      partyNo: "",
                      ourAdvocateId: "",
                    })
                  }
                >
                  <KTSVG
                    path="/media/icons/duotune/arrows/arr075.svg"
                    className="svg-icon-2"
                  />
                  Add
                </button>
              </div>
            </div>
          )}
        />
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    oppositeAdvocateList:
      state.getAllOppositeAdvocatesForDropdownReducer.oppositeAdvocateList,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DynamicFormTwo);
