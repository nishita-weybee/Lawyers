// @ts-nocheck
import { Column } from "react-table";
import { UserInfoCell } from "./UserInfoCell";
import { UserTwoStepsCell } from "./UserTwoStepsCell";
import { UserActionsCell } from "./UserActionsCell";
import { UserCustomHeader } from "./UserCustomHeader";
import { User } from "../../core/_models";

const usersColumns: ReadonlyArray<Column<User>> = [
  // {
  //   Header: (props) => <UserSelectionHeader tableProps={props} />,
  //   id: "selection",
  //   Cell: ({ ...props }) => <UserSelectionCell id={props.data[props.row.index].id} />,
  // },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title="Name" className="min-w-125px" />,
    id: "Name",
    Cell: ({ ...props }) => <UserInfoCell user={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title="Role" className="min-w-125px" />,
    accessor: "UserRole",
  },
  // {
  //   Header: (props) => <UserCustomHeader tableProps={props} title="Last login" className="min-w-125px" />,
  //   id: "last_login",
  //   Cell: ({ ...props }) => <UserLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title="Contact" className="min-w-125px" />,
    id: "contact",
    Cell: ({ ...props }) => <UserTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  },
  // {
  //   Header: (props) => <UserCustomHeader tableProps={props} title="Joined day" className="min-w-125px" />,
  //   accessor: "joined_day",
  // },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title="Actions" className="text-end min-w-100px" />,
    id: "actions",
    Cell: ({ ...props }) => <UserActionsCell id={props.data[props.row.index].id} />,
  },
];

export { usersColumns };