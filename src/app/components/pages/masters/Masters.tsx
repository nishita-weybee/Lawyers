import { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { KTCard } from "../../../../_metronic/helpers";
import {
  fetchAllAssociateAdvocate,
  fetchAllBank,
  fetchAllBankBranch,
  fetchAllBankOfficer,
  fetchAllCaseCategory,
  fetchAllCaseType,
  fetchAllDepartment,
  fetchAllDesignation,
  fetchAllDisposal,
  fetchAllDistrict,
  fetchAllExecuterName,
  fetchAllExecutingOfficerDesignation,
  fetchAllForum,
  fetchAllJudgeName,
  fetchAllOppositeAdvocate,
  fetchAllOurAdvocate,
  fetchAllProduct,
  fetchAllStage,
  fetchAllTaluka,
} from "../../../reducers/mastersReducers/mastersAction";
import { fetchUserList } from "../../../reducers/userReducers/userAction";
import PaginatedItems from "../../common/modal/pagination/PaginatedItems";
import { UsersListHeader } from "../user-management/users-list/components/header/UsersListHeader";
import { PageLink } from "../../../../_metronic/layout/core";
import Title from "../../common/Breadcrumbs/Title";
import Loader from "../../common/loader/Loader";

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
} from "../../../helpers/globalConstant";

export interface props {
  getDetails: Function;
  loading: boolean;
  details: any;
  error: any;
}

const Masters: React.FC<props> = ({ getDetails, loading, details, error }) => {
  const location = useLocation();
  const params = useParams();

  useEffect(() => {
    getDetails(params.masters, location.search);
  }, [getDetails, params.masters, location.search]);

  const usersBreadcrumbs: Array<PageLink> = [
    {
      title: "District",
      path: "/masters/district",
      isSeparator: false,
      isActive: false,
    },
    {
      title: "",
      path: "",
      isSeparator: true,
      isActive: false,
    },
  ];

  return (
    <>
      <Title title={params.masters} />
      <KTCard>
        <UsersListHeader path={`/masters/add-${params.masters}`} />
        {!details?.data && <Loader />}
        <PaginatedItems itemsPerPage={10} userList={details?.data} />
      </KTCard>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    loading: state.getAllMastersDataReducer.loading,
    error: state.getAllMastersDataReducer.error,
    details: state.getAllMastersDataReducer.getAllDetails,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getDetails: (masters: string, location: any) => {
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
        default:
          dispatch(fetchUserList(location));
          break;
      }
    },
  };
};
const connectComponent = connect(mapStateToProps, mapDispatchToProps)(Masters);
export default connectComponent;
