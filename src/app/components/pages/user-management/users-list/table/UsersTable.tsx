import { useMemo } from "react";
import { useTable, ColumnInstance } from "react-table";
import { CustomHeaderColumn } from "../table/columns/CustomHeaderColumn";
import { useQueryResponseData, useQueryResponseLoading } from "../core/QueryResponseProvider";
import { usersColumns } from "./columns/_columns";
import { User } from "../core/_models";
import { KTCardBody } from "../../../../../../_metronic/helpers";

export interface Props {
  userList?: any;
}

const UsersTable: React.FC<Props> = ({ userList }) => {
  const users = useQueryResponseData();
  const isLoading = useQueryResponseLoading();
  const data = useMemo(() => users, [users]);
  const columns = useMemo(() => usersColumns, []);
  const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable({
    columns,
    data,
  });

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
                    <>
                      <tr role="row">
                        {/* <td role="cell" className="">
                          <div className="form-check form-check-custom form-check-solid">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              data-kt-check="false"
                              data-kt-check-target="#kt_table_users .form-check-input"
                            />
                          </div>
                        </td> */}
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
                                {userDetail.firstName} {userDetail.lastName}
                              </a>
                              <span>{userDetail.userName}</span>
                            </div>
                          </div>
                        </td>
                        <td role="cell" className="">
                          {userDetail.userRoles.map((role: any) => {
                            return <span>{role} </span>;
                          })}
                        </td>
                        <td role="cell" className="">
                          <div className="badge badge-light fw-bolder">Yesterday</div>
                        </td>
                        <td role="cell" className="">
                          {userDetail.phoneNumber}
                        </td>
                        <td role="cell" className="">
                          10 Nov 2022, 9:23 pm
                        </td>
                        <td role="cell" className="text-end min-w-100px">
                          <a
                            className="btn btn-light btn-active-light-primary btn-sm"
                            data-kt-menu-trigger="click"
                            data-kt-menu-placement="bottom-end"
                          >
                            Actions
                            <span className="svg-icon svg-icon-5 m-0">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mh-50px">
                                <path
                                  d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </span>
                          </a>
                          <div
                            className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                            data-kt-menu="true"
                          >
                            <div className="menu-item px-3">
                              <a className="menu-link px-3">Edit</a>
                            </div>
                            <div className="menu-item px-3">
                              <a className="menu-link px-3" data-kt-users-table-filter="delete_row">
                                Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </>
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

export { UsersTable };
