import { useEffect } from "react";
import { fetchUserList } from "../../../reducers/userReducers/userAction";
import { connect } from "react-redux";
import { KTCard } from "../../../../_metronic/helpers";
import { UsersListHeader } from "../user-management/users-list/components/header/UsersListHeader";
import PaginatedItems from "../../common/modal/pagination/PaginatedItems";
import { useLocation } from "react-router-dom";
import { ADD_USER } from "../../../helpers/routesConstant";
import Title from "../../common/Breadcrumbs/Title";
import Loader from "../../common/loader/Loader";

export interface Props {
  error: string;
  getUserList: Function;
  loadingList: Boolean;
  userList: any;
}

const ViewUser: React.FC<Props> = ({ getUserList, loadingList, userList, error }) => {
  const location = useLocation();

  useEffect(() => {
    getUserList(location.search);
  }, [getUserList, location.search]);
 

  return (
    <>
      <Title title={"User"} />
      <KTCard>
        <UsersListHeader path={ADD_USER} />
        {loadingList && <Loader />}
        {userList && <PaginatedItems itemsPerPage={10} userList={userList} />}
      </KTCard>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    loadingList: state.userListReducer.loading,
    error: state.userListReducer.error,
    userList: state.userListReducer.userList?.data,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getUserList: (location: any) => dispatch(fetchUserList(location)),
  };
};
const connectComponent = connect(mapStateToProps, mapDispatchToProps)(ViewUser);
export default connectComponent;
