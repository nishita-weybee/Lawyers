import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";
import UsersTable from "../../../pages/user-management/users-list/table/UsersTable";

interface PaginatedItemsProps {
  itemsPerPage: number;
  userList: any;
}

const PaginatedItems: React.FC<PaginatedItemsProps> = ({ userList, itemsPerPage }) => {
  const pageCount = Math.ceil(userList?.total_Record_Count / itemsPerPage);
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePageClick = (e: any) => {
    searchParams.set("PageNumber", e.selected + 1);
    setSearchParams(searchParams);
  };



  return (
    <>
      {userList?.records && (
        <>
          <UsersTable userList={userList.records} />
          <div className="card-body pt-0">
            <ReactPaginate
              breakLabel="..."
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              nextLabel={<i className="next"></i>}
              previousLabel={<i className="previous"></i>}
              containerClassName="pagination"
              activeClassName="active"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              nextClassName="page-item next"
              previousClassName="page-item previous"
              disabledClassName="disabled"
              disabledLinkClassName="disabled"
              nextLinkClassName="page-link"
              previousLinkClassName="page-link"
              forcePage={searchParams.get("PageNumber") ? Number(searchParams.get("PageNumber")) - 1 : 0}
            />
          </div>
        </>
      )}
    </>
  );
};

export default PaginatedItems;
