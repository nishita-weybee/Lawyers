import { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { KTCard } from "../../../../_metronic/helpers";
import {
  fetchAllAssociateAdvocate,
  fetchAllBank,
  fetchAllBankBranch,
  fetchAllBankOfficer,
  fetchAllDepartment,
  fetchAllDistrict,
  fetchAllExecuterName,
  fetchAllExecutingOfficerDesignation,
  fetchAllForum,
  fetchAllJudgeName,
  fetchAllOurAdvocate,
  fetchAllTaluka,
} from "../../../reducers/mastersReducers/mastersAction";
import { fetchUserList } from "../../../reducers/userReducers/userAction";
import PaginatedItems from "../../common/modal/pagination/PaginatedItems";
import { UsersListHeader } from "../user-management/users-list/components/header/UsersListHeader";

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

  return (
    <>
      <KTCard>
        <UsersListHeader path={`/masters/add-${params.masters}`} />
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
const connectComponent = connect(mapStateToProps, mapDispatchToProps)(Masters);
export default connectComponent;
