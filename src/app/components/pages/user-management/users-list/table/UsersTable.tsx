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
  commonColumns,
  executiveColumns,
  judgeColumns,
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
} from "../../../../../reducers/mastersReducers/mastersAction";
import { activeDeactiveCase, getAllCase } from "../../../../../reducers/caseReducers/caseAction";
import { EDIT_CASE, VIEW_USER } from "../../../../../helpers/routesConstant";
import { convert } from "../../../../../helpers/helperFunction";

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
      case "district":
        return commonColumns;
      case "taluka":
        return talukaColumns;
      case "forum":
        return commonColumns;
      case "judge":
        return judgeColumns;
      case "bank-details":
        return commonColumns;
      case "department":
        return commonColumns;
      case "bank-branch":
        return bankBranchColumns;
      case "bank-officer":
        return bankOfficerColumns;
      case "advocate":
        return advocateColumns;
      case "associate-advocate":
        return associateAdvocateColumns;
      case "executer":
        return executiveColumns;
      case "executive-officer-designation":
        return commonColumns;
      case "products":
        return commonColumns;
      case "stage":
        return commonColumns;
      case "case/view-cases":
        return caseColumns;
      default:
        return usersColumns;
    }
  }, [params.masters]);
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

                          {params.masters === "taluka" && (
                            <td role="cell" className="">
                              {userDetail.district}
                            </td>
                          )}

                          {params.masters === "executer" && (
                            <td role="cell" className="">
                              {userDetail.mobile}
                            </td>
                          )}

                          {params.masters === "associate-advocate" && (
                            <>
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

                          {params.masters === "advocate" && (
                            <>
                              <td role="cell" className="">
                                {userDetail.mobile}
                              </td>
                              <td role="cell" className="">
                                {userDetail.email}
                              </td>
                            </>
                          )}

                          {params.masters === "bank-branch" && (
                            <>
                              <td role="cell" className="">
                                {userDetail.bank}
                              </td>
                            </>
                          )}

                          {params.masters === "judge" && (
                            <>
                              <td role="cell" className="">
                                {userDetail.forum}
                              </td>
                            </>
                          )}

                          {params.masters === "bank-officer" && (
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
                                {userDetail.bankBranch}
                              </td>
                            </>
                          )}
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
                        {location.pathname !== VIEW_USER && (
                          <span
                            className="btn btn-sm btn-icon btn-light-primary me-4"
                            onClick={() =>
                              navigate(params.masters ? `/masters/edit-${params.masters}/${userDetail.id}` : `${EDIT_CASE}/${userDetail.id}`)
                            }
                          >
                            {/* <span className="svg-icon svg-icon-2">
                              <i className="fa-solid fa-pen-to-square"></i>
                            </span> */}
                            <KTSVG path="/media/icons/duotune/art/art005.svg" className="svg-icon-3" />
                          </span>
                        )}

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
        case "district":
          dispatch(activeDeactiveDistrict(id, `District ${status}`, callback));
          break;
        case "taluka":
          dispatch(activeDeactiveTaluka(id, `Taluka ${status}`, callback));
          break;
        case "forum":
          dispatch(activeDeactiveForum(id, `Forum ${status}`, callback));
          break;
        case "judge":
          dispatch(activeDeactiveJudgeName(id, `Judge ${status}`, callback));
          break;
        case "bank-details":
          dispatch(activeDeactiveBank(id, `Bank ${status}`, callback));
          break;
        case "department":
          dispatch(activeDeactiveDepartment(id, `Department ${status}`, callback));
          break;
        case "bank-branch":
          dispatch(activeDeactiveBankBranch(id, `Bank Branch ${status}`, callback));
          break;
        case "bank-officer":
          dispatch(activeDeactiveBankOfficer(id, `Bank Officer ${status}`, callback));
          break;
        case "advocate":
          dispatch(activeDeactiveOurAdvocate(id, `Advocate ${status}`, callback));
          break;
        case "associate-advocate":
          dispatch(activeDeactiveAssociateAdvocate(id, `Associate Advocate ${status}`, callback));
          break;
        case "executer":
          dispatch(activeDeactiveExecuterName(id, `Executer ${status}`, callback));
          break;
        case "executive-officer-designation":
          dispatch(activeDeactiveExecutingOfficerDesignation(id, `Designation ${status}`, callback));
          break;
        case "products":
          dispatch(activeDeactiveProducts(id, `Product ${status}`, callback));
          break;
        case "stage":
          dispatch(activeDeactiveStage(id, `Stage ${status}`, callback));
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
        case "district":
          dispatch(fetchAllDistrict(masters, location));
          break;
        case "taluka":
          dispatch(fetchAllTaluka(masters, location));
          break;
        case "forum":
          dispatch(fetchAllForum(masters, location));
          break;
        case "judge":
          dispatch(fetchAllJudgeName(masters, location));
          break;
        case "bank-details":
          dispatch(fetchAllBank(masters, location));
          break;
        case "department":
          dispatch(fetchAllDepartment(masters, location));
          break;
        case "bank-branch":
          dispatch(fetchAllBankBranch(masters, location));
          break;
        case "bank-officer":
          dispatch(fetchAllBankOfficer(masters, location));
          break;
        case "advocate":
          dispatch(fetchAllOurAdvocate(masters, location));
          break;
        case "associate-advocate":
          dispatch(fetchAllAssociateAdvocate(masters, location));
          break;
        case "executer":
          dispatch(fetchAllExecuterName(masters, location));
          break;
        case "executive-officer-designation":
          dispatch(fetchAllExecutingOfficerDesignation(masters, location));
          break;
        case "products":
          dispatch(fetchAllProduct(masters, location));
          break;
        case "stage":
          dispatch(fetchAllStage(masters, location));
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
