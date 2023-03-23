import { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { KTCard } from "../../../../_metronic/helpers";
import {
  ADD_ADVOCATE,
  ADD_ASSOCIATE_ADVOCATE,
  ADD_BANK,
  ADD_BANK_BRANCH,
  ADD_BANK_OFFICER,
  ADD_DEPARTMENT,
  ADD_DISTRICT,
  ADD_EXECUTER,
  ADD_EXECUTIVE_OFFICER_DESIGNATION,
  ADD_FORUM,
  ADD_JUDGE,
  ADD_TALUKA,
} from "../../../helpers/routesConstant";
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
  const masters = params.masters;
  let addPath = "";

  useEffect(() => {
    getDetails(masters, location.search);
  }, [getDetails, masters, location.search]);

  switch (masters) {
    case "district":
      addPath = `${ADD_DISTRICT}`;
      break;
    case "taluka":
      addPath = `${ADD_TALUKA}`;
      break;
    case "forum":
      addPath = `${ADD_FORUM}`;
      break;
    case "judge":
      addPath = `${ADD_JUDGE}`;
      break;
    case "bank-details":
      addPath = `${ADD_BANK}`;
      break;
    case "department":
      addPath = `${ADD_DEPARTMENT}`;
      break;
    case "bank-branch":
      addPath = `${ADD_BANK_BRANCH}`;
      break;
    case "bank-officer":
      addPath = `${ADD_BANK_OFFICER}`;
      break;
    case "advocate":
      addPath = `${ADD_ADVOCATE}`;
      break;
    case "associate-advocate":
      addPath = `${ADD_ASSOCIATE_ADVOCATE}`;
      break;
    case "executer":
      addPath = `${ADD_EXECUTER}`;
      break;
    case "executive-officer-designation":
      addPath = `${ADD_EXECUTIVE_OFFICER_DESIGNATION}`;
      break;

    default:
      break;
  }
  return (
    <>
      <KTCard>
        <UsersListHeader path={addPath} />
        {/* <PaginatedItems itemsPerPage={10} userList={userList} /> */}
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
        case "bank":
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
          break;
      }
    },
  };
};
const connectComponent = connect(mapStateToProps, mapDispatchToProps)(Masters);
export default connectComponent;
