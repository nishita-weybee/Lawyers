import { useNavigate } from "react-router-dom";
import { KTSVG } from "../../../../../../../_metronic/helpers";
import { useListView } from "../../core/ListViewProvider";
import { UsersListSearchComponent } from "./UsersListSearchComponent";
export interface props {
  path: string;
}

const UsersListHeader: React.FC<props> = ({ path }) => {
  const { selected } = useListView();
  const navigate = useNavigate();
  return (
    <div className="card-header border-0 pt-6">
      <UsersListSearchComponent />

      <div className="card-toolbar">
        <div className="d-flex justify-content-end" data-kt-user-table-toolbar="base"></div>
        <button type="button" className="btn btn-primary" onClick={() => navigate(path)}>
          <KTSVG path="/media/icons/duotune/arrows/arr075.svg" className="svg-icon-2" />
          Add
        </button>
        {/* {selected.length > 0 ? <UsersListGrouping /> : <UsersListToolbar />} */}
      </div>
    </div>
  );
};

export { UsersListHeader };
