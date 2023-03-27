import { useMemo, useState } from "react";
import { ColumnInstance, useTable } from "react-table";
import { useQueryResponseData } from "../core/QueryResponseProvider";
import { KTCardBody } from "../../../../../../_metronic/helpers";
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
  commonColumns,
  executiveColumns,
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
} from "../../../../../reducers/mastersReducers/mastersAction";

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
    switch (params.masters) {
      case "district":
        return commonColumns;
      case "taluka":
        return talukaColumns;
      case "forum":
        return commonColumns;
      case "judge":
        return commonColumns;
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
      default:
        return usersColumns;
    }
  }, [params.masters]);
  const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable({
    columns,
    data,
  });

  const [activeBtn, setActiveBtn] = useState(false);

  const activateDeactivateUser = (id: any, status: any) => {
    setActiveBtn(!activeBtn);
    accountStatus(params.masters, id, status, () => {
      getUserList(params.masters, location.search);
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
                {userList.map((userDetail: any, i: any) => {
                  return (
                    <tr role="row" key={i}>
                      {location.pathname === "/view-user" ? (
                        <>
                          <td role="cell" className="">
                            <div className="d-flex align-items-center">
                              <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                <a>
                                  <div className="symbol-label">
                                    <img src="/media/avatars/300-6.jpg" alt="Emma Smith" className="w-100" />
                                  </div>
                                </a>
                              </div>
                              <div className="d-flex flex-column">
                                <a className="text-gray-800 text-hover-primary mb-1">
                                  {`${userDetail.firstName}  ${userDetail.lastName}`} {userDetail.middleName}
                                </a>
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
                          <td role="cell" className="">
                            {userDetail.name}
                          </td>

                          {params.masters === "taluka" && (
                            <td role="cell" className="">
                              {userDetail.district}
                            </td>
                          )}

                          {params.masters === "executer" && (
                            <td role="cell" className="">
                              {userDetail.moblie}
                            </td>
                          )}

                          {params.masters === "associate-advocate" && (
                            <>
                              <td role="cell" className="">
                                {userDetail.moblie}
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
                                {userDetail.moblie}
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

                          {params.masters === "bank-officer" && (
                            <>
                              <td role="cell" className="">
                                {userDetail.moblie}
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

                      <td role="cell" className="text-end min-w-100px">
                        <span
                          className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary me-4"
                          onClick={() => navigate(`/masters/edit-${params.masters}/${userDetail.id}`)}
                        >
                          <span className="svg-icon svg-icon-2">
                            <i className="fa-solid fa-pen-to-square"></i>
                          </span>
                        </span>

                        <span
                          className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
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
                  <div className="d-flex text-center w-100 align-content-center justify-content-center">No matching records found</div>
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
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    accountStatus: (masters: any, id: any, status: string, callback: Function) => {
      switch (masters) {
        case "district":
          dispatch(activeDeactiveDistrict(id, status, callback));
          break;
        case "taluka":
          dispatch(activeDeactiveTaluka(id, status, callback));
          break;
        case "forum":
          dispatch(activeDeactiveForum(id, status, callback));
          break;
        case "judge":
          dispatch(activeDeactiveJudgeName(id, status, callback));
          break;
        case "bank-details":
          dispatch(activeDeactiveBank(id, status, callback));
          break;
        case "department":
          dispatch(activeDeactiveDepartment(id, status, callback));
          break;
        case "bank-branch":
          dispatch(activeDeactiveBankBranch(id, status, callback));
          break;
        case "bank-officer":
          dispatch(activeDeactiveBankOfficer(id, status, callback));
          break;
        case "advocate":
          dispatch(activeDeactiveOurAdvocate(id, status, callback));
          break;
        case "associate-advocate":
          dispatch(activeDeactiveAssociateAdvocate(id, status, callback));
          break;
        case "executer":
          dispatch(activeDeactiveExecuterName(id, status, callback));
          break;
        case "executive-officer-designation":
          dispatch(activeDeactiveExecutingOfficerDesignation(id, status, callback));
          break;
        default:
          dispatch(activateDeactivateUser(id, status, callback));
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
        default:
          dispatch(fetchUserList(location));
          break;
      }
    },
  };
};

const connectComponent = connect(mapStateToProps, mapDispatchToProps)(UsersTable);
export default connectComponent;
