import { useListView } from "../../core/ListViewProvider";
import { UsersListFilter } from "./UsersListFilter";
import { UsersListSearchComponent } from "./UsersListSearchComponent";

const UsersListHeader = () => {
  const { selected } = useListView();
  return (
    <div className="card-header border-0 pt-6">
      <UsersListSearchComponent />
      {/* begin::Card toolbar */}
      <div className="card-toolbar">
        {/* begin::Group actions */}
        <div className="d-flex justify-content-end" data-kt-user-table-toolbar="base">
          {/* <UsersListFilter /> */}
        </div>
        {/* {selected.length > 0 ? <UsersListGrouping /> : <UsersListToolbar />} */}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  );
};

export { UsersListHeader };
