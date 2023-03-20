import { FC, PropsWithChildren, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { HeaderProps } from "react-table";
import { User } from "../../core/_models";

type Props = {
  className?: string;
  title?: string;
  tableProps: PropsWithChildren<HeaderProps<User>>;
};
const UserCustomHeader: FC<Props> = ({ className, title, tableProps }) => {
  const id = tableProps.column.id;
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState<boolean | null>(false);
  const [orderBy, setOrderby] = useState<boolean | null>();
  console.log(sortBy);
  useEffect(() => {
    setSearchParams({
      SortBy: "UserName",
    });
  }, []);

  const sortColumn = () => {
    switch (id) {
      case "name":
        setSortBy(true);
        setOrderby(!orderBy);
        setSearchParams({
          SortBy: "UserName",
          // OrderBy: `${!orderBy}`,
        });
        break;
      case "role":
        setSortBy(true);
        setOrderby(!orderBy);
        setSearchParams({
          SortBy: "UserRole",
          // OrderBy: `${!orderBy}`,
        });
        break;

      default:
        break;
    }
  };

  return (
    <th {...tableProps.column.getHeaderProps()} style={{ cursor: "pointer" }} onClick={sortColumn}>
      {title}
      {sortBy ? (
        <span className="ms-2">
          <i className={`fa-solid fa-chevron-${orderBy ? "up" : "down"}`} />
        </span>
      ) : null}
    </th>
  );
};

export { UserCustomHeader };
