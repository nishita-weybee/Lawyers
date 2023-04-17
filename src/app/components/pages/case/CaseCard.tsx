import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCaseById } from "../../../reducers/caseReducers/caseAction";
import { useParams } from "react-router-dom";
import { convert } from "../../../helpers/helperFunction";
export interface props {
  loading: boolean;
  caseDetailById: any;
  getCase: Function;
}
const CaseCard: React.FC<props> = ({ loading, caseDetailById, getCase }) => {
  const params = useParams();
  useEffect(() => {
    getCase(params.id);
  }, [params, getCase]);

  console.log(caseDetailById, loading);

  return (
    <>
      {!loading && caseDetailById?.data && (
        <div className="card">
          <div className="card-body p-lg-20">
            <div className="d-flex flex-column flex-xl-row">
              <div className="flex-lg-row-fluid me-xl-18 mb-10 mb-xl-0">
                <div className="mt-n1">
                  {/* <div className="d-flex flex-stack pb-10">
                    <a href="#">
                      <img alt="Logo" src="assets/media/svg/brand-logos/code-lab.svg" />
                    </a>

                    <a href="#" className="btn btn-sm btn-success">
                      Pay Now
                    </a>
                  </div> */}

                  <div className="m-0">
                    <div className="fw-bold fs-3 text-gray-800 mb-8">Case #{caseDetailById?.data?.caseNo}</div>

                    <div className="row g-5 mb-11">
                      <div className="col-sm-6">
                        <div className="fs-7 fw-bold text-muted mb-1">Bank:</div>

                        <div className="fw-bold fs-6 text-gray-800">{caseDetailById?.data?.bank}</div>
                      </div>

                      <div className="col-sm-6">
                        <div className="fs-7 fw-bold text-muted mb-1">Bank Officer:</div>

                        <div className="fw-bold fs-6 text-gray-800 d-flex align-items-center flex-wrap">
                          <span className="pe-2">{caseDetailById?.data?.bankOfficer}</span>
                          <span className="fs-7 text-danger d-flex align-items-center">
                            {/* <span className="bullet bullet-dot bg-danger me-2"></span>Due in 7 days */}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="row g-5 mb-11">
                      <div className="col-sm-6">
                        <div className="fs-7 fw-bold text-muted mb-1">NPA Amount:</div>

                        <div className="fw-bold fs-6 text-gray-800">{caseDetailById?.data?.npaAmount}</div>
                      </div>

                      <div className="col-sm-6">
                        <div className="fs-7 fw-bold text-muted mb-1">NPA Date:</div>

                        <div className="fw-bold fs-6 text-gray-800 d-flex align-items-center flex-wrap">
                          <span className="pe-2">{caseDetailById?.data?.npaDate}</span>
                          <span className="fs-7 text-danger d-flex align-items-center">
                            {/* <span className="bullet bullet-dot bg-danger me-2"></span>Due in 7 days */}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="row g-5 mb-11">
                      <div className="col-sm-6">
                        <div className="fs-7 fw-bold text-muted mb-1">13 (2):</div>

                        <div className="fw-bold fs-6 text-gray-800">{convert(caseDetailById?.data?.["13(2)"])}</div>
                      </div>

                      <div className="col-sm-6">
                        <div className="fs-7 fw-bold text-muted mb-1">13 (4):</div>

                        <div className="fw-bold fs-6 text-gray-800 d-flex align-items-center flex-wrap">
                          <span className="pe-2">{convert(caseDetailById?.data?.["13(4)"])}</span>
                          <span className="fs-7 text-danger d-flex align-items-center">
                            {/* <span className="bullet bullet-dot bg-danger me-2"></span>Due in 7 days */}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="row g-5 mb-12">
                      {/* <div className=""> */}
                      <div className="fs-7 fw-bold text-muted mb-1">Borrower:</div>

                      <div className="d-flex flex-wrap mt-0">
                        {caseDetailById?.data.borrowers.map((bow: any, i: any) => {
                          return (
                            <div className="d-flex align-items-center mb-3 mb-sm-2 col-6">
                              <span className="bullet bullet-dot bg-primary me-2 h-10px w-10px"></span>
                              <div className="fw-bold fs-6 text-gray-800">{bow.name}</div>
                            </div>
                          );
                        })}
                      </div>

                      {/* <div className="fw-semibold fs-7 text-gray-600">
                          8692 Wild Rose Drive
                          <br />
                          Livonia, MI 48150
                        </div> */}
                      {/* </div> */}

                      {/* <div className="col-sm-6">
                        <div className="fw-semibold fs-7 text-gray-600 mb-1">Issued By:</div>

                        <div className="fw-bold fs-6 text-gray-800">CodeLab Inc.</div>

                        <div className="fw-semibold fs-7 text-gray-600">
                          9858 South 53rd Ave.
                          <br />
                          Matthews, NC 28104
                        </div>
                      </div> */}
                    </div>

                    <div className="flex-grow-1">
                      <div className="table-responsive mb-9">
                        <table className="table mb-3">
                          <thead>
                            <tr className="border-bottom fs-6 fw-bold text-muted">
                              <th className="min-w-175px pb-2">Product</th>
                              <th className="min-w-70px text-end pb-2">Bank</th>
                              <th className="min-w-80px text-end pb-2">Account No.</th>
                              {/* <th className="min-w-100px text-end pb-2">Amount</th> */}
                            </tr>
                          </thead>
                          <tbody>
                            {caseDetailById?.data.caseProducts.map((product: any, i: any) => {
                              return (
                                <tr className="fw-bold text-gray-700 fs-5 text-end">
                                  <td className="d-flex align-items-center pt-6">
                                    <i className="fa fa-genderless text-primary fs-2 me-2"></i>
                                    {product.product}
                                  </td>
                                  <td className="pt-6">{product.bank}</td>
                                  <td className="pt-6">{product.accountNo}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>

                      {/* <div className="d-flex justify-content-end">
                        <div className="mw-300px">
                          <div className="d-flex flex-stack mb-3">
                            <div className="fw-semibold pe-10 text-gray-600 fs-7">Subtotal:</div>

                            <div className="text-end fw-bold fs-6 text-gray-800">$ 20,600.00</div>
                          </div>

                          <div className="d-flex flex-stack mb-3">
                            <div className="fw-semibold pe-10 text-gray-600 fs-7">VAT 0%</div>

                            <div className="text-end fw-bold fs-6 text-gray-800">0.00</div>
                          </div>

                          <div className="d-flex flex-stack mb-3">
                            <div className="fw-semibold pe-10 text-gray-600 fs-7">Subtotal + VAT</div>

                            <div className="text-end fw-bold fs-6 text-gray-800">$ 20,600.00</div>
                          </div>

                          <div className="d-flex flex-stack">
                            <div className="fw-semibold pe-10 text-gray-600 fs-7">Total</div>

                            <div className="text-end fw-bold fs-6 text-gray-800">$ 20,600.00</div>
                          </div>
                        </div>
                      </div> */}
                    </div>

                    <div className="flex-grow-1">
                      <div className="table-responsive mb-9">
                        <table className="table mb-3">
                          <thead>
                            <tr className="border-bottom fs-6 fw-bold text-muted">
                              <th className="min-w-175px pb-2">Description</th>
                              <th className="min-w-70px text-end pb-2">Owner</th>
                              <th className="min-w-80px text-end pb-2">Location</th>
                              <th className="min-w-100px text-end pb-2">District</th>
                            </tr>
                          </thead>
                          <tbody>
                            {caseDetailById?.data.properties.map((pro: any, i: any) => {
                              return (
                                <tr className="fw-bold text-gray-700 fs-5 text-end">
                                  <td className="d-flex align-items-center pt-6">
                                    <i className="fa fa-genderless text-primary fs-2 me-2"></i>
                                    {pro.description}
                                  </td>
                                  <td className="pt-6"> {pro.owner}</td>
                                  <td className="pt-6">{pro.location}</td>
                                  <td className="pt-6 text-dark fw-bolder">
                                    {pro.district} {pro.taluka}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>

                      {/* <div className="d-flex justify-content-end">
                        <div className="mw-300px">
                          <div className="d-flex flex-stack mb-3">
                            <div className="fw-semibold pe-10 text-gray-600 fs-7">Subtotal:</div>

                            <div className="text-end fw-bold fs-6 text-gray-800">$ 20,600.00</div>
                          </div>

                          <div className="d-flex flex-stack mb-3">
                            <div className="fw-semibold pe-10 text-gray-600 fs-7">VAT 0%</div>

                            <div className="text-end fw-bold fs-6 text-gray-800">0.00</div>
                          </div>

                          <div className="d-flex flex-stack mb-3">
                            <div className="fw-semibold pe-10 text-gray-600 fs-7">Subtotal + VAT</div>

                            <div className="text-end fw-bold fs-6 text-gray-800">$ 20,600.00</div>
                          </div>

                          <div className="d-flex flex-stack">
                            <div className="fw-semibold pe-10 text-gray-600 fs-7">Total</div>

                            <div className="text-end fw-bold fs-6 text-gray-800">$ 20,600.00</div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="m-0">
                <div className="d-print-none border border-dashed border-gray-300 card-rounded h-lg-100 min-w-md-350px p-9 bg-lighten">
                  <div className="mb-8">
                    <span className="badge badge-light-success me-2">Filed</span>
                    <span className="badge badge-light-warning">{caseDetailById?.data.status}</span>
                  </div>

                  <h6 className="mb-8 fw-bolder text-gray-600 text-hover-primary">COURT DETAILS</h6>

                  <div className="mb-6">
                    <div className="fw-semibold text-gray-600 fs-7">Case No:</div>
                    <div className="fw-bold text-gray-800 fs-6">{caseDetailById?.data.caseNo}</div>
                  </div>

                  <div className="mb-6">
                    <div className="fw-semibold text-gray-600 fs-7">CNR No:</div>
                    <div className="fw-bold text-gray-800 fs-6">
                      {caseDetailById?.data.cnrNo}
                      {/* <br />
                      AMB NLANBZTC */}
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="fw-semibold text-gray-600 fs-7">Year:</div>
                    <div className="fw-bold text-gray-800 fs-6">{caseDetailById?.data.year}</div>
                  </div>

                  <div className="mb-6">
                    <div className="fw-semibold text-gray-600 fs-7">District:</div>
                    <div className="fw-bold text-gray-800 fs-6">
                      {caseDetailById?.data?.filing?.judge?.district}, {caseDetailById?.data?.filing?.judge?.taluka}
                    </div>
                  </div>

                  <div className="mb-15">
                    <div className="fw-semibold text-gray-600 fs-7">Judge:</div>
                    <div className="fw-bold text-gray-800 fs-6">
                      {caseDetailById?.data?.filing?.judge?.name}, {caseDetailById?.data?.filing?.judge?.forum}
                    </div>
                  </div>

                  {/* <div className="mb-15">
                    <div className="fw-semibold text-gray-600 fs-7">Payment Term:</div>
                    <div className="fw-bold fs-6 text-gray-800 d-flex align-items-center">
                      14 days
                      <span className="fs-7 text-danger d-flex align-items-center">
                        <span className="bullet bullet-dot bg-danger mx-2"></span>Due in 7 days
                      </span>
                    </div>
                  </div> */}

                  <h6 className="mb-8 fw-bolder text-gray-600 text-hover-primary">CASE OVERVIEW</h6>

                  <div className="mb-6">
                    <div className="fw-semibold text-gray-600 fs-7">Case Category</div>
                    <div className="fw-bold fs-6 text-gray-800">
                      {caseDetailById?.data.caseCategory}
                      {/* <a href="#" className="link-primary ps-1">
                        View Project
                      </a> */}
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="fw-semibold text-gray-600 fs-7">Case Type:</div>
                    <div className="fw-bold text-gray-800 fs-6"> {caseDetailById?.data.caseType}</div>
                  </div>

                  <div className="mb-6">
                    <div className="fw-semibold text-gray-600 fs-7">Stage</div>
                    <div className="fw-bold fs-6 text-gray-800 d-flex align-items-center">
                      {caseDetailById?.data.filing.stage}
                      {/* <span className="fs-7 text-success d-flex align-items-center">
                        <span className="bullet bullet-dot bg-success mx-2"></span>35$/h Rate
                      </span> */}
                    </div>
                  </div>

                  <div className="m-0">
                    <div className="fw-semibold text-gray-600 fs-7">Remarks:</div>
                    <div className="fw-bold text-gray-800 fs-6"> {caseDetailById?.data.remarks}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    loading: state.getCaseByIdCaseReducer.loading,
    error: state.getCaseByIdCaseReducer.error,
    caseDetailById: state.getCaseByIdCaseReducer.caseDetails,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getCase: (id: any) => dispatch(getCaseById(id)),
  };
};
const connectComponent = connect(mapStateToProps, mapDispatchToProps)(CaseCard);
export default connectComponent;
