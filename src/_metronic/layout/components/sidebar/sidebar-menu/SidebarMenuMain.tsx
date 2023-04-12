import hasPermission, { actionsRole } from "../../../../../app/components/auth/core/hasPermissions";
import {
  ADD_CASE,
  ASSOCIATE_ADVOCATE,
  BANK,
  BANK_BRANCH,
  BANK_OFFICER,
  CASE_CATEGROY,
  CASE_TYPE,
  DEPARTMENT,
  DESIGNATION,
  DISPOSAL,
  DISTRICT,
  EXECUTER,
  EXECUTIVE_OFFICER_DESIGNATION,
  FORUM,
  JUDGE,
  MASTERS,
  OPPOSITE_ADVOCATE,
  PRODUCTS,
  STAGE,
  TALUKA,
  VIEW_CASE,
  VIEW_USER,
} from "../../../../../app/helpers/routesConstant";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { SidebarMenuItemWithSub } from "./SidebarMenuItemWithSub";

const SidebarMenuMain = () => {
  const masterMenu = [
    { to: DISTRICT, title: "District" },
    { to: TALUKA, title: "Taluka" },
    { to: FORUM, title: "Forum" },
    { to: JUDGE, title: "Judge" },
    { to: BANK, title: "Bank" },
    { to: BANK_BRANCH, title: "Bank Branch" },
    { to: BANK_OFFICER, title: "Bank Officer" },
    { to: DEPARTMENT, title: "Department" },
    // { to: ADVOCATE, title: "Advocate" },
    { to: ASSOCIATE_ADVOCATE, title: "Associate Advocate" },
    { to: EXECUTIVE_OFFICER_DESIGNATION, title: "Executive Officer Designation" },
    { to: EXECUTER, title: "Executer" },
    { to: PRODUCTS, title: "Products" },
    { to: STAGE, title: "Stage" },
    { to: DESIGNATION, title: "Designation" },
    { to: OPPOSITE_ADVOCATE, title: "Opposite Advocate" },
    { to: DISPOSAL, title: "Disposal" },
    { to: CASE_CATEGROY, title: "Case Category" },
    { to: CASE_TYPE, title: "Case Type" },
  ];

  return (
    <>
      {/* for admin */}
      {hasPermission(actionsRole.VIEW_FILE) && (
        <>
          {/* <SidebarMenuItemWithSub to="" title="User" icon="/media/icons/duotune/communication/com006.svg" fontIcon="bi-person">
            <SidebarMenuItem to={ADD_USER} title="Add User" fontIcon="bi-layers" hasBullet={true} />
            <SidebarMenuItem to={VIEW_USER} title="View User" fontIcon="bi-layers" hasBullet={true} />
          </SidebarMenuItemWithSub> */}
          <SidebarMenuItem to={VIEW_USER} title="User" icon="/media/icons/duotune/communication/com006.svg" fontIcon="bi-layers" />

          <SidebarMenuItemWithSub to={MASTERS} icon="/media/icons/duotune/art/art002.svg" title="Masters" fontIcon="bi-app-indicator">
            {masterMenu.map((menu: any, i: any) => {
              return <SidebarMenuItem to={`${menu.to}`} title={menu.title} fontIcon="bi-layers" hasBullet={true} key={i} />;
            })}
          </SidebarMenuItemWithSub>
        </>
      )}

      <SidebarMenuItemWithSub to={"case"} icon={"/media/icons/duotune/abstract/abs027.svg"} title="Case" fontIcon="bi-app-indicator">
        <SidebarMenuItem to={`${ADD_CASE}`} title={"Add Case"} fontIcon="bi-layers" hasBullet={true} />
        <SidebarMenuItem to={`${VIEW_CASE}`} title={"View Cases"} fontIcon="bi-layers" hasBullet={true} />
      </SidebarMenuItemWithSub>

      {/* for employee
      {hasPermission(actionsRole.ONLY_ADMIN) && <></>} */}
    </>
  );
};

export { SidebarMenuMain };
