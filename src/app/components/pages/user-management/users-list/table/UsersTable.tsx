import { useMemo, useState } from "react";
import { ColumnInstance, useTable } from "react-table";
import { useQueryResponseData } from "../core/QueryResponseProvider";
import { usersColumns } from "./columns/_columns";
import { KTCardBody } from "../../../../../../_metronic/helpers";
import { CustomHeaderColumn } from "./columns/CustomHeaderColumn";
import { User } from "../core/_models";
import { connect } from "react-redux";
import { activateDeactivateUser } from "../../../../../reducers/userReducer/addUser/addUserAction";

export interface Props {
  userList?: any;
  statusFunc?: any;
}

const UsersTable: React.FC<Props> = ({ userList, statusFunc }) => {
  const users = useQueryResponseData();
  // const isLoading = useQueryResponseLoading();
  const data = useMemo(() => users, [users]);
  const columns = useMemo(() => usersColumns, []);
  const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable({
    columns,
    data,
  });
  const [activeBtn, setActiveBtn] = useState(false);
  const activateDeactivateUser = (email: any) => {
    setActiveBtn(!activeBtn);
    statusFunc(email);
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
            {userList.length > 0 ? (
              <>
                {userList.map((userDetail: any, i: any) => {
                  return (
                    <tr role="row" key={i}>
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
                        {userDetail.phoneNumber}
                      </td>

                      <td role="cell" className="text-end min-w-100px">
                        <span
                          className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                          onClick={() => activateDeactivateUser(userDetail.email)}
                        >
                          <span className="svg-icon svg-icon-2">
                            {activeBtn ? <i className="fa-solid fa-user-xmark"></i> : <i className="fa-solid fa-user-check" />}
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
    userRoles: state.activateDeactivateUserReducer,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    statusFunc: (email: any) => dispatch(activateDeactivateUser(email)),
  };
};
const connectComponent = connect(mapStateToProps, mapDispatchToProps)(UsersTable);
export default connectComponent;
