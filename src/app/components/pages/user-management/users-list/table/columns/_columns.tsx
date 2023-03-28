// @ts-nocheck
import { Column } from "react-table";
import { UserCustomHeader } from "./UserCustomHeader";
import { User } from "../../core/_models";

export const usersColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <UserCustomHeader tableProps={props} title="Name" className="min-w-125px" />,
    id: "Name",
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title="Role" className="min-w-125px" />,
    accessor: "Role",
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title="Contact" className="min-w-125px" />,
    id: "contact",
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title="Actions" className="text-end min-w-100px" />,
    id: "actions",
  },
];

export const commonColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <UserCustomHeader tableProps={props} title="Name" className="min-w-125px" />,
    id: "Name",
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title="Actions" className="text-end min-w-100px" />,
    id: "actions",
  },
];

export const bankBranchColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <UserCustomHeader tableProps={props} title="Name" className="min-w-125px" />,
    id: "Name",
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title="Bank" className="min-w-125px" />,
    id: "Bank",
  },

  {
    Header: (props) => <UserCustomHeader tableProps={props} title="Actions" className="text-end min-w-100px" />,
    id: "actions",
  },
];

export const bankOfficerColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <UserCustomHeader tableProps={props} title="Name" className="min-w-125px" />,
    id: "Name",
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title="Mobile" className=" min-w-100px" />,
    id: "Mobile",
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title="Email" className=" min-w-100px" />,
    id: "Email",
  },

  {
    Header: (props) => <UserCustomHeader tableProps={props} title="Bank" className=" min-w-100px" />,
    id: "Bank",
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title="Bank Branch" className=" min-w-100px" />,
    id: "BankBranch",
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title="Actions" className="text-end min-w-100px" />,
    id: "actions",
  },
];

export const executiveColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <UserCustomHeader tableProps={props} title="Name" className="min-w-125px" />,
    id: "Name",
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title="Mobile" className=" min-w-100px" />,
    id: "Mobile",
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title="Actions" className="text-end min-w-100px" />,
    id: "actions",
  },
];

export const advocateColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <UserCustomHeader tableProps={props} title="Name" className="min-w-125px" />,
    id: "Name",
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title="Mobile" className=" min-w-100px" />,
    id: "Mobile",
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title="Email" className=" min-w-100px" />,
    id: "Email",
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title="Actions" className="text-end min-w-100px" />,
    id: "actions",
  },
];

export const associateAdvocateColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <UserCustomHeader tableProps={props} title="Name" className="min-w-125px" />,
    id: "Name",
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title="Mobile" className=" min-w-100px" />,
    id: "Mobile",
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title="Email" className=" min-w-100px" />,
    id: "Email",
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title="Address" className=" min-w-100px" />,
    id: "Address",
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title="Actions" className="text-end min-w-100px" />,
    id: "actions",
  },
];

export const talukaColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <UserCustomHeader tableProps={props} title="Name" className="min-w-125px" />,
    id: "Name",
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title="District" className="min-w-125px" />,
    id: "District",
  },

  {
    Header: (props) => <UserCustomHeader tableProps={props} title="Actions" className="text-end min-w-100px" />,
    id: "actions",
  },
];
