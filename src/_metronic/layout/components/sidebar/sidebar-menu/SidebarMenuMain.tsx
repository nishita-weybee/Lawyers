import hasPermission, { actionsRole } from "../../../../../app/components/auth/core/hasPermissions";
import { ADD_ADMIN, ADD_EMPLOYEE } from "../../../../../app/helpers/routesConstant";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { SidebarMenuItemWithSub } from "./SidebarMenuItemWithSub";

const SidebarMenuMain = () => {
  // const intl = useIntl();

  return (
    <>
      <SidebarMenuItem to="/dashboard" icon="/media/icons/duotune/art/art002.svg" title="Dashboard" fontIcon="bi-app-indicator" />

      {hasPermission(actionsRole.VIEW_FILE) && (
        <SidebarMenuItemWithSub to="" title="User" icon="/media/icons/duotune/communication/com006.svg" fontIcon="bi-person">
          <SidebarMenuItem to={ADD_EMPLOYEE} title="Add Employee" fontIcon="bi-layers" hasBullet={true} />
          <SidebarMenuItem to={ADD_ADMIN} title="Add Admin" fontIcon="bi-layers" hasBullet={true} />
        </SidebarMenuItemWithSub>
      )}
    </>
  );
};

export { SidebarMenuMain };
