import hasPermission, { actionsRole } from "../../../../../app/components/auth/core/hasPermissions";
import {
  ADD_USER,
  ADVOCATE,
  ASSOCIATE_ADVOCATE,
  BANK,
  BANK_BRANCH,
  BANK_OFFICER,
  DEPARTMENT,
  DISTRICT,
  EXECUTER,
  EXECUTIVE_OFFICER_DESIGNATION,
  FORUM,
  JUDGE,
  MASTERS,
  TALUKA,
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
    { to: DEPARTMENT, title: "Department" },
    { to: BANK_BRANCH, title: "Bank Branch" },
    { to: BANK_OFFICER, title: "Bank Officer" },
    { to: ADVOCATE, title: "Advocate" },
    { to: ASSOCIATE_ADVOCATE, title: "Associate Advocate" },
    { to: EXECUTER, title: "Executer" },
    { to: EXECUTIVE_OFFICER_DESIGNATION, title: "Executive Officer Designation" },
  ];

  return (
    <>
      {/* for admin */}
      {hasPermission(actionsRole.VIEW_FILE) && (
        <>
          <SidebarMenuItemWithSub to="" title="User" icon="/media/icons/duotune/communication/com006.svg" fontIcon="bi-person">
            <SidebarMenuItem to={ADD_USER} title="Add user" fontIcon="bi-layers" hasBullet={true} />
            <SidebarMenuItem to={VIEW_USER} title="View user" fontIcon="bi-layers" hasBullet={true} />
          </SidebarMenuItemWithSub>
          <SidebarMenuItemWithSub to={MASTERS} icon="/media/icons/duotune/art/art002.svg" title="Masters" fontIcon="bi-app-indicator">
            {masterMenu.map((menu: any, i: any) => {
              return <SidebarMenuItem to={`${menu.to}`} title={menu.title} fontIcon="bi-layers" hasBullet={true} key={i}/>;
            })}
          </SidebarMenuItemWithSub>
        </>
      )}

      {/* for employee
      {hasPermission(actionsRole.ONLY_ADMIN) && <></>} */}
    </>
  );
};

export { SidebarMenuMain };
