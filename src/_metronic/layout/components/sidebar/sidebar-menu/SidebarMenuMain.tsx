import hasPermission, { actionsRole } from "../../../../../app/components/auth/core/hasPermissions";
import { ADD_USER, DASHBOARD, MASTERS, PROFILE, VIEW_USER } from "../../../../../app/helpers/routesConstant";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { SidebarMenuItemWithSub } from "./SidebarMenuItemWithSub";

const SidebarMenuMain = () => {
  // const intl = useIntl();

  return (
    <>
      {/* <SidebarMenuItem to={DASHBOARD} icon="/media/icons/duotune/art/art002.svg" title="Dashboard" fontIcon="bi-app-indicator" /> */}
      {/* {hasPermission(actionsRole.VIEW_FILE) && (
        <>
          <SidebarMenuItem to={ADD_USER} icon="/media/icons/duotune/communication/com006.svg" title="Add User" fontIcon="bi-person" />
          <SidebarMenuItem to={VIEW_USER} icon="/media/icons/duotune/art/art002.svg" title="View User" fontIcon="bi-app-indicator" />
        </>
      )} */}
{/* for admin */}
      {hasPermission(actionsRole.VIEW_FILE) && (
        <>
          <SidebarMenuItemWithSub to="" title="User" icon="/media/icons/duotune/communication/com006.svg" fontIcon="bi-person">
            <SidebarMenuItem to={ADD_USER} title="Add user" fontIcon="bi-layers" hasBullet={true} />
            <SidebarMenuItem to={VIEW_USER} title="View user" fontIcon="bi-layers" hasBullet={true} />
          </SidebarMenuItemWithSub>
          <SidebarMenuItem to={MASTERS} icon="/media/icons/duotune/art/art002.svg" title="Masters" fontIcon="bi-app-indicator" />
        </>
      )}
{/* for employee */}
      {/* {hasPermission(actionsRole.ONLY_ADMIN) && ( */}
      {/* <SidebarMenuItem to={PROFILE} icon="/media/icons/duotune/communication/com005.svg" title="Profile" fontIcon="bi-app-indicator" /> */}
      {/* )} */}
    </>
  );
};

export { SidebarMenuMain };
