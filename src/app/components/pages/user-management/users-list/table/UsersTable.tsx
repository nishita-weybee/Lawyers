import { useMemo } from "react";
import { ColumnInstance, useTable } from "react-table";
import { useQueryResponseData } from "../core/QueryResponseProvider";
import { KTCardBody, KTSVG } from "../../../../../../_metronic/helpers";
import { CustomHeaderColumn } from "./columns/CustomHeaderColumn";
import { User } from "../core/_models";
import { connect } from "react-redux";
import { activateDeactivateUser, fetchUserList } from "../../../../../reducers/userReducers/userAction";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  advocateColumns,
  associateAdvocateColumns,
  bankBranchColumns,
  bankOfficerColumns,
  caseColumns,
  caseTypeColumns,
  commonColumns,
  departmentColumns,
  executiveColumns,
  judgeColumns,
  oppAdvocateColumns,
  productColumns,
  talukaColumns,
  usersColumns,
} from "./columns/_columns";
import {
  activeDeactiveAssociateAdvocate,
  activeDeactiveBank,
  activeDeactiveBankBranch,
  activeDeactiveBankOfficer,
  activeDeactiveDepartment,
  activeDeactiveDistrict,
  activeDeactiveExecuterName,
  activeDeactiveExecutingOfficerDesignation,
  activeDeactiveForum,
  activeDeactiveJudgeName,
  activeDeactiveOurAdvocate,
  activeDeactiveTaluka,
  fetchAllDistrict,
  fetchAllJudgeName,
  fetchAllForum,
  fetchAllTaluka,
  fetchAllDepartment,
  fetchAllExecutingOfficerDesignation,
  fetchAllBank,
  fetchAllExecuterName,
  fetchAllAssociateAdvocate,
  fetchAllOurAdvocate,
  fetchAllBankOfficer,
  fetchAllBankBranch,
  fetchAllStage,
  fetchAllProduct,
  activeDeactiveProducts,
  activeDeactiveStage,
  activeDeactiveDesignation,
  activeDeactiveOppositeAdvocate,
  activeDeactiveDisposal,
  activeDeactiveCaseType,
  activeDeactiveCaseCategory,
  fetchAllDesignation,
  fetchAllOppositeAdvocate,
  fetchAllCaseCategory,
  fetchAllCaseType,
  fetchAllDisposal,
} from "../../../../../reducers/mastersReducers/mastersAction";
import { activeDeactiveCase, getAllCase } from "../../../../../reducers/caseReducers/caseAction";
import { EDIT_CASE, VIEW_USER } from "../../../../../helpers/routesConstant";
import { convert } from "../../../../../helpers/helperFunction";
import {
  BANK_OFFICER_CONST,
  CASE_CATEGORY_CONST,
  CASE_TYPE_CONST,
  DESIGNATION_CONST,
  DISPOSAL_CONST,
  OPPOSITE_ADVOCATE_CONST,
  TALUKA_CONST,
  FORUM_CONST,
  JUDGE_CONST,
  BANK_CONST,
  DEPARTMENT_CONST,
  BANK_BRANCH_CONST,
  ADVOCATE_CONST,
  ASSOCIATE_ADVOCATE_CONST,
  EXECUTIVE_OFFICER_DESIGNATION_CONST,
  PRODUCTS_CONST,
  EXECUTER_CONST,
  STAGE_CONST,
  DISTRICT_CONST,
} from "../../../../../helpers/globalConstant";

export interface Props {
  userList?: any;
  accountStatus?: any;
  getUserList: Function;
}

const UsersTable: React.FC<Props> = ({ userList, accountStatus, getUserList }) => {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const users = useQueryResponseData();
  const data = useMemo(() => users, [users]);
  const columns = useMemo(() => {
    switch (params.masters || params["*"]) {
      case DISTRICT_CONST:
        return commonColumns;
      case TALUKA_CONST:
        return talukaColumns;
      case FORUM_CONST:
        return commonColumns;
      case JUDGE_CONST:
        return judgeColumns;
      case BANK_CONST:
        return commonColumns;
      case DEPARTMENT_CONST:
        return departmentColumns;
      case BANK_BRANCH_CONST:
        return bankBranchColumns;
      case BANK_OFFICER_CONST:
        return bankOfficerColumns;
      case ADVOCATE_CONST:
        return advocateColumns;
      case ASSOCIATE_ADVOCATE_CONST:
        return associateAdvocateColumns;
      case EXECUTER_CONST:
        return executiveColumns;
      case EXECUTIVE_OFFICER_DESIGNATION_CONST:
        return commonColumns;
      case PRODUCTS_CONST:
        return productColumns;
      case STAGE_CONST:
        return commonColumns;
      case DESIGNATION_CONST:
        return commonColumns;
      case OPPOSITE_ADVOCATE_CONST:
        return oppAdvocateColumns;
      case DISPOSAL_CONST:
        return commonColumns;
      case CASE_TYPE_CONST:
        return caseTypeColumns;
      case CASE_CATEGORY_CONST:
        return commonColumns;
      case "case/view-cases":
        return caseColumns;
      default:
        return usersColumns;
    }
  }, [params]);
  const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable({
    columns,
    data,
  });
  const color = ["primary", "danger", "success", "warning", "info"];

  const activateDeactivateUser = (id: any, status: any) => {
    accountStatus(params.masters || params["*"], id, status, () => {
      getUserList(params.masters || params["*"], location.search);
    });
  };
  console.log(params, location);

  return (
    <KTCardBody className="py-4">
      <div className="table-responsive">
        <table id="kt_table_users" className="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer" {...getTableProps()}>
          <thead>
            <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
              {headers.map((column: ColumnInstance<User>) => (
                <CustomHeaderColumn key={column.id} column={column} />
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-600 fw-bold" {...getTableBodyProps()}>
            {userList.length ? (
              <>
                {userList?.map((userDetail: any, i: any) => {
                  return (
                    <tr role="row" key={i}>
                      {location.pathname === VIEW_USER ? (
                        <>
                          <td role="cell" className="">
                            <div className="d-flex align-items-center">
                              <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                <div className="symbol-label">
                                  <span
                                    className={`symbol-label bg-light-${color[i > 4 ? userList.length - 1 - i : i]} text-${
                                      color[i > 4 ? userList.length - 1 - i : i]
                                    } fw-bold fs-4`}
                                  >
                                    {userDetail?.firstName.charAt(0).toUpperCase()}
                                    {/* {userDetail.lastName.charAt(0).toUpperCase()} */}
                                  </span>
                                </div>
                              </div>
                              <div className="d-flex flex-column">
                                <span className="text-gray-800 text-hover-primary mb-1">
                                  {`${userDetail.firstName}`} {userDetail.middleName} {userDetail.lastName}
                                </span>
                                <span>{userDetail.email}</span>
                              </div>
                            </div>
                          </td>
                          <td role="cell" className="">
                            <span key={i}> {userDetail.role} </span>
                          </td>
                          <td role="cell" className="">
                            {userDetail.phoneNumber || "-"}
                          </td>
                        </>
                      ) : (
                        <>
                          {params.masters && (
                            <td role="cell" className="">
                              {userDetail.name}
                            </td>
                          )}

                          {params.masters === TALUKA_CONST && (
                            <td role="cell" className="">
                              {userDetail.district}
                            </td>
                          )}

                          {params.masters === PRODUCTS_CONST && (
                            <td role="cell" className="">
                              {userDetail.bank}
                            </td>
                          )}

                          {params.masters === CASE_TYPE_CONST && (
                            <td role="cell" className="">
                              {userDetail.caseCategory}
                            </td>
                          )}

                          {params.masters === DEPARTMENT_CONST && (
                            <td role="cell" className="">
                              {userDetail.bank}
                            </td>
                          )}

                          {params.masters === EXECUTER_CONST && (
                            <>
                              <td role="cell" className="">
                                {userDetail.district}
                              </td>
                              <td role="cell" className="">
                                {userDetail.taluka}
                              </td>
                              <td role="cell" className="">
                                {userDetail.exeOfficerDesingation}
                              </td>
                              <td role="cell" className="">
                                {userDetail.mobile}
                              </td>
                            </>
                          )}

                          {params.masters === ASSOCIATE_ADVOCATE_CONST && (
                            <>
                              <td role="cell" className="">
                                {userDetail.district}
                              </td>
                              <td role="cell" className="">
                                {userDetail.taluka}
                              </td>
                              <td role="cell" className="">
                                {userDetail.mobile}
                              </td>
                              <td role="cell" className="">
                                {userDetail.email}
                              </td>
                              <td role="cell" className="">
                                {userDetail.postalAddress}
                              </td>
                            </>
                          )}

                          {params.masters === ADVOCATE_CONST && (
                            <>
                              <td role="cell" className="">
                                {userDetail.mobile}
                              </td>
                              <td role="cell" className="">
                                {userDetail.email}
                              </td>
                            </>
                          )}

                          {params.masters === BANK_BRANCH_CONST && (
                            <>
                              <td role="cell" className="">
                                {userDetail.bank}
                              </td>
                            </>
                          )}

                          {params.masters === OPPOSITE_ADVOCATE_CONST && (
                            <>
                              <td role="cell" className="">
                                {userDetail.mobile}
                              </td>
                            </>
                          )}

                          {params.masters === JUDGE_CONST && (
                            <>
                              <td role="cell" className="">
                                {userDetail.district}
                              </td>
                              <td role="cell" className="">
                                {userDetail.taluka}
                              </td>
                              <td role="cell" className="">
                                {userDetail.forum}
                              </td>
                            </>
                          )}

                          {params.masters === BANK_OFFICER_CONST && (
                            <>
                              <td role="cell" className="">
                                {userDetail.mobile}
                              </td>
                              <td role="cell" className="">
                                {userDetail.email}
                              </td>
                              <td role="cell" className="">
                                {userDetail.bank}
                              </td>
                              <td role="cell" className="">
                                {userDetail.isEmail && (
                                  <div className="d-flex align-items-center">
                                    <span className="bullet bg-primary me-3"></span> Email
                                  </div>
                                )}
                                {userDetail.isWhatsapp && (
                                  <div className="d-flex align-items-center">
                                    <span className="bullet bg-primary me-3"></span> Whatsapp
                                  </div>
                                )}
                                {userDetail.isSms && (
                                  <div className="d-flex align-items-center">
                                    <span className="bullet bg-primary me-3"></span> Sms
                                  </div>
                                )}
                              </td>
                            </>
                          )}

                          {/* {params.masters === EXECUTIVE_OFFICER_DESIGNATION_CONST && (
                            <>
                              <td role="cell" className="">
                                {userDetail.designation}
                              </td>
                            </>
                          )} */}
                        </>
                      )}

                      {location.pathname === "/case/view-cases" && (
                        <>
                          <td role="cell" className="">
                            {userDetail.bank}
                          </td>

                          <td role="cell" className="">
                            {userDetail.borrowers.map((x: any) => (
                              <div className="d-flex align-items-center">
                                <span className="bullet bg-primary me-3"></span> {x.name}
                              </div>
                            ))}
                          </td>

                          <td role="cell" className="">
                            {userDetail.cnrNo}
                          </td>

                          <td role="cell" className="">
                            {convert(userDetail.filingDate)}
                          </td>

                          <td role="cell" className="">
                            {userDetail.npaAmount}
                          </td>
                        </>
                      )}

                      <td role="cell" className="text-end min-w-100px AAA">
                        {/* {location.pathname !== VIEW_USER && ( */}
                        <span
                          className="btn btn-sm btn-icon btn-light-primary me-4"
                          onClick={() =>
                            navigate(
                              params.masters
                                ? `/masters/edit-${params.masters}/${userDetail.id}`
                                : `${location.pathname.replace("view", "edit")}/${userDetail.id}`
                            )
                          }
                        >
                          <KTSVG path="/media/icons/duotune/art/art005.svg" className="svg-icon-3" />
                        </span>
                        {/* )} */}

                        <span
                          className={`btn btn-sm btn-icon ${userDetail.isActive ? "btn-light-success" : "btn-light-danger"}`}
                          onClick={() => activateDeactivateUser(userDetail.id, userDetail.isActive ? "Deactivated" : "Activated")}
                        >
                          <span className="svg-icon svg-icon-2">
                            {userDetail.isActive ? <i className="fa-solid fa-user-check" /> : <i className="fa-solid fa-user-xmark" />}
                          </span>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </>
            ) : (
              <tr>
                <td colSpan={7}>
                  <div className="d-flex text-center w-100 align-content-center justify-content-center">No Records Found</div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </KTCardBody>
  );
};

const mapStateToProps = (state: any) => {
  return {
    loading: state.activateDeactivateUserReducer.loading,
    error: state.activateDeactivateUserReducer.error,
    res: state.activateDeactivateUserReducer,
    cases: state.getAllCaseReducer.case,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    accountStatus: (masters: any, id: any, status: string, callback: Function) => {
      switch (masters) {
        case DISTRICT_CONST:
          dispatch(activeDeactiveDistrict(id, `District ${status}`, callback));
          break;
        case TALUKA_CONST:
          dispatch(activeDeactiveTaluka(id, `Taluka ${status}`, callback));
          break;
        case FORUM_CONST:
          dispatch(activeDeactiveForum(id, `Forum ${status}`, callback));
          break;
        case JUDGE_CONST:
          dispatch(activeDeactiveJudgeName(id, `Judge ${status}`, callback));
          break;
        case BANK_CONST:
          dispatch(activeDeactiveBank(id, `Bank ${status}`, callback));
          break;
        case DEPARTMENT_CONST:
          dispatch(activeDeactiveDepartment(id, `Department ${status}`, callback));
          break;
        case BANK_BRANCH_CONST:
          dispatch(activeDeactiveBankBranch(id, `Bank Branch ${status}`, callback));
          break;
        case BANK_OFFICER_CONST:
          dispatch(activeDeactiveBankOfficer(id, `Bank Officer ${status}`, callback));
          break;
        case ADVOCATE_CONST:
          dispatch(activeDeactiveOurAdvocate(id, `Advocate ${status}`, callback));
          break;
        case ASSOCIATE_ADVOCATE_CONST:
          dispatch(activeDeactiveAssociateAdvocate(id, `Associate Advocate ${status}`, callback));
          break;
        case EXECUTER_CONST:
          dispatch(activeDeactiveExecuterName(id, `Executer ${status}`, callback));
          break;
        case EXECUTIVE_OFFICER_DESIGNATION_CONST:
          dispatch(activeDeactiveExecutingOfficerDesignation(id, `Designation ${status}`, callback));
          break;
        case PRODUCTS_CONST:
          dispatch(activeDeactiveProducts(id, `Product ${status}`, callback));
          break;
        case STAGE_CONST:
          dispatch(activeDeactiveStage(id, `Stage ${status}`, callback));
          break;
        case DESIGNATION_CONST:
          dispatch(activeDeactiveDesignation(id, `Designation ${status}`, callback));
          break;
        case OPPOSITE_ADVOCATE_CONST:
          dispatch(activeDeactiveOppositeAdvocate(id, `Opposite Advocate ${status}`, callback));
          break;
        case DISPOSAL_CONST:
          dispatch(activeDeactiveDisposal(id, `Disposal ${status}`, callback));
          break;
        case CASE_TYPE_CONST:
          dispatch(activeDeactiveCaseType(id, `Case Type ${status}`, callback));
          break;
        case CASE_CATEGORY_CONST:
          dispatch(activeDeactiveCaseCategory(id, `Case Category ${status}`, callback));
          break;
        case "case/view-cases":
          dispatch(activeDeactiveCase(id, `Case ${status}`, callback));
          break;
        default:
          dispatch(activateDeactivateUser(id, `User ${status}`, callback));
          break;
      }
    },
    getUserList: (masters: string, location: any) => {
      switch (masters) {
        case DISTRICT_CONST:
          dispatch(fetchAllDistrict(masters, location));
          break;
        case TALUKA_CONST:
          dispatch(fetchAllTaluka(masters, location));
          break;
        case FORUM_CONST:
          dispatch(fetchAllForum(masters, location));
          break;
        case JUDGE_CONST:
          dispatch(fetchAllJudgeName(masters, location));
          break;
        case BANK_CONST:
          dispatch(fetchAllBank(masters, location));
          break;
        case DEPARTMENT_CONST:
          dispatch(fetchAllDepartment(masters, location));
          break;
        case BANK_BRANCH_CONST:
          dispatch(fetchAllBankBranch(masters, location));
          break;
        case BANK_OFFICER_CONST:
          dispatch(fetchAllBankOfficer(masters, location));
          break;
        case ADVOCATE_CONST:
          dispatch(fetchAllOurAdvocate(masters, location));
          break;
        case ASSOCIATE_ADVOCATE_CONST:
          dispatch(fetchAllAssociateAdvocate(masters, location));
          break;
        case EXECUTER_CONST:
          dispatch(fetchAllExecuterName(masters, location));
          break;
        case EXECUTIVE_OFFICER_DESIGNATION_CONST:
          dispatch(fetchAllExecutingOfficerDesignation(masters, location));
          break;
        case PRODUCTS_CONST:
          dispatch(fetchAllProduct(masters, location));
          break;
        case STAGE_CONST:
          dispatch(fetchAllStage(masters, location));
          break;
        case DESIGNATION_CONST:
          dispatch(fetchAllDesignation(masters, location));
          break;
        case OPPOSITE_ADVOCATE_CONST:
          dispatch(fetchAllOppositeAdvocate(masters, location));
          break;
        case DISPOSAL_CONST:
          dispatch(fetchAllDisposal(masters, location));
          break;
        case CASE_TYPE_CONST:
          dispatch(fetchAllCaseType(masters, location));
          break;
        case CASE_CATEGORY_CONST:
          dispatch(fetchAllCaseCategory(masters, location));
          break;
        case "case/view-cases":
          dispatch(getAllCase(location));
          break;

        default:
          dispatch(fetchUserList(location));
          break;
      }
    },
  };
};

const connectComponent = connect(mapStateToProps, mapDispatchToProps)(UsersTable);
export default connectComponent;
