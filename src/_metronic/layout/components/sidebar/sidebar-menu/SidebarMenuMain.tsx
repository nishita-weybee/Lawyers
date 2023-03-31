import hasPermission, { actionsRole } from "../../../../../app/components/auth/core/hasPermissions";
import {
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
  PRODUCTS,
  STAGE,
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
    { to: PRODUCTS, title: "Products" },
    { to: STAGE, title: "Stage" },
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
        <SidebarMenuItem to={`case/add-case`} title={"Add Case"} fontIcon="bi-layers" hasBullet={true} />
      </SidebarMenuItemWithSub>

      {/* for employee
      {hasPermission(actionsRole.ONLY_ADMIN) && <></>} */}
    </>
  );
};

export { SidebarMenuMain };
