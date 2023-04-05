import { useLocation, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { activeDeactiveCase, getAllCase } from "../../../reducers/caseReducers/caseAction";
import { useEffect } from "react";
import { KTCard } from "../../../../_metronic/helpers";
import { ADD_CASE } from "../../../helpers/routesConstant";
import { UsersListHeader } from "../user-management/users-list/components/header/UsersListHeader";
import PaginatedItems from "../../common/modal/pagination/PaginatedItems";
export interface props {
  fetchAllCase: Function;
  cases: any;
}
const ViewCase: React.FC<props> = ({ fetchAllCase, cases }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchAllCase(location.search);
  }, [fetchAllCase, location.search]);

  // console.log(cases);
  const params = useParams();
  // console.log(params["*"]);

  return (
    // <div className="row g-6 g-xl-9">
    //   <div className="col-md-6 col-xl-4">
    //     <div className="card border border-2 border-gray-300 border-hover">
    //       <div className="card-header border-0 pt-9">
    //         <div className="card-title m-0">
    //           <div className="symbol symbol-50px w-50px bg-light">
    //             <img src="/media/svg/brand-logos/plurk.svg" alt="card2" className="p-3" />
    //           </div>
    //         </div>
    //         <div className="card-toolbar">
    //           <span className="badge badge-light-primary fw-bolder me-auto px-4 py-3">In Progress</span>
    //         </div>
    //       </div>
    //       <div className="card-body p-9">
    //         <div className="fs-3 fw-bolder text-dark">Fitness App</div>
    //         <p className="text-gray-400 fw-bold fs-5 mt-1 mb-7">CRM App application to HR efficiency</p>
    //         <div className="d-flex flex-wrap mb-5">
    //           <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
    //             <div className="fs-6 text-gray-800 fw-bolder">November 10, 2021</div>
    //             <div className="fw-bold text-gray-400">Due Date</div>
    //           </div>
    //           <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
    //             <div className="fs-6 text-gray-800 fw-bolder">$284,900.00</div>
    //             <div className="fw-bold text-gray-400">Budget</div>
    //           </div>
    //         </div>
    //         <div className="h-4px w-100 bg-light mb-5" data-bs-toggle="tooltip" title="This project completed">
    //           <div className="bg-primary rounded h-4px" role="progressbar" style={{ width: "50%" }}></div>
    //         </div>

    //         <div className=" d-flex justify-content-between">
    //           <div className="">
    //             <div className="symbol symbol-35px symbol-circle">
    //               <img src="/media/avatars/300-6.jpg" alt="Pic" />
    //             </div>
    //             <div className="symbol symbol-35px symbol-circle">
    //               <img src="/media/avatars/300-1.jpg" alt="Pic" />
    //             </div>
    //             <div className="symbol symbol-35px symbol-circle">
    //               <span className="symbol-label bg-primary text-inverse-primary fw-bolder">S</span>
    //             </div>
    //           </div>
    //           <div>
    //             <span className="btn btn-sm btn-icon btn-light-primary me-4" onClick={() => navigate(`${EDIT_CASE}/${1}`)}>
    //               <span className="svg-icon svg-icon-2">
    //                 <i className="fa-solid fa-pen-to-square"></i>
    //               </span>
    //             </span>
    //             <span className="btn btn-sm btn-icon btn-light-danger" onClick={() => activateDeactivateCase(1)}>
    //               <span className="svg-icon svg-icon-2">
    //                 <i className="fa-solid fa-user-xmark"></i>
    //               </span>
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <>
      <KTCard>
        <UsersListHeader path={ADD_CASE} />
        <PaginatedItems itemsPerPage={10} userList={cases?.data} />
      </KTCard>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    res: state.activeDeactiveCaseReducer.res,
    loading: state.activeDeactiveCaseReducer.loading,
    error: state.activeDeactiveCaseReducer.error,

    cases: state.getAllCaseReducer.case,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchAllCase: (location: any) => dispatch(getAllCase(location)),
  };
};
const connectComponent = connect(mapStateToProps, mapDispatchToProps)(ViewCase);
export default connectComponent;
