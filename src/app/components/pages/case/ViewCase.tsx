import { useLocation, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getAllCase } from "../../../reducers/caseReducers/caseAction";
import { useEffect } from "react";
import { KTCard } from "../../../../_metronic/helpers";
import { ADD_CASE } from "../../../helpers/routesConstant";
import { UsersListHeader } from "../user-management/users-list/components/header/UsersListHeader";
import PaginatedItems from "../../common/modal/pagination/PaginatedItems";
import Title from "../../common/Breadcrumbs/Title";
import Loader from "../../common/loader/Loader";
export interface props {
  fetchAllCase: Function;
  cases: any;
  loading: boolean;
}
const ViewCase: React.FC<props> = ({ fetchAllCase, cases, loading }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchAllCase(location.search);
  }, [fetchAllCase, location.search]);

  const params = useParams();

  return (
    <>
      <Title title={"Case"} />
      <KTCard>
        <UsersListHeader path={ADD_CASE} />
        {!cases?.data && <Loader />}
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
