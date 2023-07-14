// @ts-nocheck
import { Column } from "react-table";
import { UserCustomHeader } from "./UserCustomHeader";
import { User } from "../../core/_models";

export const usersColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="User"
        className="min-w-125px text-capitalize"
      />
    ),
    id: "Name",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Role"
        className="text-capitalize min-w-125px"
      />
    ),
    accessor: "Role",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Contact"
        className="text-capitalize min-w-125px"
      />
    ),
    id: "contact",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Actions"
        className="text-capitalize text-end min-w-100px"
      />
    ),
    id: "actions",
  },
];
export const commonColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Name"
        className="text-capitalize min-w-125px"
      />
    ),
    id: "Name",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Actions"
        className="text-capitalize text-end min-w-100px"
      />
    ),
    id: "actions",
  },
];
export const bankBranchColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Bank Branch"
        className="text-capitalize min-w-125px"
      />
    ),
    id: "Name",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Bank"
        className="text-capitalize min-w-125px"
      />
    ),
    id: "Bank",
  },

  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Actions"
        className="text-capitalize text-end min-w-100px"
      />
    ),
    id: "actions",
  },
];
export const bankOfficerColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Bank Officer"
        className="text-capitalize min-w-125px"
      />
    ),
    id: "Name",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Mobile"
        className="text-capitalize  min-w-100px"
      />
    ),
    id: "Mobile",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Email"
        className="text-capitalize  min-w-100px"
      />
    ),
    id: "Email",
  },

  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Bank"
        className="text-capitalize  min-w-100px"
      />
    ),
    id: "Bank",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Platforms"
        className="text-capitalize  min-w-100px"
      />
    ),
    id: "Platforms",
  },

  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Actions"
        className="text-capitalize text-end min-w-100px"
      />
    ),
    id: "actions",
  },
];
export const executiveColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Executive"
        className="text-capitalize min-w-125px"
      />
    ),
    id: "Name",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="District"
        className="text-capitalize min-w-125px"
      />
    ),
    id: "District",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Taluka"
        className="text-capitalize min-w-125px"
      />
    ),
    id: "Taluka",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Exe Officer Designation"
        className="text-capitalize min-w-125px"
      />
    ),
    id: "ExeOfficerDesignation",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Mobile"
        className="text-capitalize  min-w-100px"
      />
    ),
    id: "Mobile",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Actions"
        className="text-capitalize text-end min-w-100px"
      />
    ),
    id: "actions",
  },
];
export const advocateColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Advocate"
        className="text-capitalize min-w-125px"
      />
    ),
    id: "Name",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Mobile"
        className="text-capitalize  min-w-100px"
      />
    ),
    id: "Mobile",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Email"
        className="text-capitalize  min-w-100px"
      />
    ),
    id: "Email",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Actions"
        className="text-capitalize text-end min-w-100px"
      />
    ),
    id: "actions",
  },
];
export const associateAdvocateColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Associate Advocate"
        className="text-capitalize min-w-125px"
      />
    ),
    id: "Name",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="District"
        className="text-capitalize min-w-125px"
      />
    ),
    id: "District",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Taluka"
        className="text-capitalize min-w-125px"
      />
    ),
    id: "Taluka",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Address"
        className="text-capitalize  min-w-100px"
      />
    ),
    id: "Address",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Mobile"
        className="text-capitalize  min-w-100px"
      />
    ),
    id: "Mobile",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Email"
        className="text-capitalize  min-w-100px"
      />
    ),
    id: "Email",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Actions"
        className="text-capitalize text-end min-w-100px"
      />
    ),
    id: "actions",
  },
];
export const talukaColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Taluka"
        className="text-capitalize min-w-125px"
      />
    ),
    id: "Name",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="District"
        className="text-capitalize min-w-125px"
      />
    ),
    id: "District",
  },

  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Actions"
        className="text-capitalize text-end min-w-100px"
      />
    ),
    id: "actions",
  },
];
export const judgeColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Judge"
        className="text-capitalize min-w-125px"
      />
    ),
    id: "Name",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="District"
        className="text-capitalize min-w-125px"
      />
    ),
    id: "District",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Taluka"
        className="text-capitalize min-w-125px"
      />
    ),
    id: "Taluka",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Forum"
        className="text-capitalize min-w-125px"
      />
    ),
    id: "Forum",
  },

  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Actions"
        className="text-capitalize text-end min-w-100px"
      />
    ),
    id: "actions",
  },
];
export const caseColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Case No"
        className="text-capitalize min-w-125px"
      />
    ),
    id: "CaseNo",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Case Title"
        className="text-capitalize min-w-125px"
      />
    ),
    id: "CaseTitle",
  },

  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Area"
        className="text-capitalize min-w-100px"
      />
    ),
    id: "Area",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Court"
        className="text-capitalize min-w-100px"
      />
    ),
    id: "Court",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Stage"
        className="text-capitalize min-w-100px"
      />
    ),
    id: "Stage",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Date"
        className="text-capitalize min-w-100px"
      />
    ),
    id: "Date",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Status"
        className="text-capitalize min-w-100px"
      />
    ),
    id: "Status",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Actions"
        className="text-capitalize text-end min-w-100px"
      />
    ),
    id: "actions",
  },
];

export const productColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Product"
        className="text-capitalize min-w-125px"
      />
    ),
    id: "Name",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Bank"
        className="text-capitalize  min-w-100px"
      />
    ),
    id: "Bank",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Actions"
        className="text-capitalize text-end min-w-100px"
      />
    ),
    id: "actions",
  },
];
export const oppAdvocateColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Oppsite Advocate"
        className="text-capitalize min-w-125px"
      />
    ),
    id: "Name",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Mobile"
        className="text-capitalize  min-w-100px"
      />
    ),
    id: "Mobile",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Actions"
        className="text-capitalize text-end min-w-100px"
      />
    ),
    id: "actions",
  },
];
export const departmentColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Department"
        className="text-capitalize min-w-125px"
      />
    ),
    id: "Name",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Bank"
        className="text-capitalize  min-w-100px"
      />
    ),
    id: "Bank",
  },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Actions"
        className="text-capitalize text-end min-w-100px"
      />
    ),
    id: "actions",
  },
];
export const caseTypeColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Case Type"
        className="text-capitalize min-w-125px"
      />
    ),
    id: "Name",
  },
  // {
  //   Header: (props) => (
  //     <UserCustomHeader
  //       tableProps={props}
  //       title="Applicant Caption"
  //       className="text-capitalize min-w-125px"
  //     />
  //   ),
  //   id: "ApplicantCaption",
  // },
  // {
  //   Header: (props) => (
  //     <UserCustomHeader
  //       tableProps={props}
  //       title="Opponent Caption"
  //       className="text-capitalize min-w-125px"
  //     />
  //   ),
  //   id: "OpponentCaption",
  // },
  // {
  //   Header: (props) => (
  //     <UserCustomHeader
  //       tableProps={props}
  //       title="Case Category"
  //       className="text-capitalize  min-w-100px"
  //     />
  //   ),
  //   id: "CaseCategory",
  // },
  {
    Header: (props) => (
      <UserCustomHeader
        tableProps={props}
        title="Actions"
        className="text-capitalize text-end min-w-100px"
      />
    ),
    id: "actions",
  },
];
