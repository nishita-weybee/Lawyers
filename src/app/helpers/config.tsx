export const AUTH_BASE_URL = `/Auth`;
export const USER_BASE_URL = `/User`;

export const USER_ROLES = `${AUTH_BASE_URL}/Roles`;
export const GET_USER_BY_ACCESSTOKEN = `${AUTH_BASE_URL}/verify_token`;
export const LOGIN = `${AUTH_BASE_URL}/Login`;
export const REGISTER = `${AUTH_BASE_URL}/RegisterUser`;
export const FORGOT_PASSWORD = `${AUTH_BASE_URL}/ForgotPassword`;
export const RESET_PASSWORD = `${AUTH_BASE_URL}/ResetPassword`;

export const USER_LIST = `${USER_BASE_URL}/GetAllUsersDetails`;
export const USER_DETAILS = `${USER_BASE_URL}/GetUserDetails`;
export const EDIT_USER_DETAILS = `${USER_BASE_URL}/EditUserDetails`;
export const ACTIVATE_DEACTIVATE_USER = `${USER_BASE_URL}/ActiveDeactivateUserAccount`;

// Masters
export const GET_ALL_DISTRICT = `District/GetAllDistrict`;
export const GET_ALL_DEPARTMENT = `Department/GetAllDepartment`;
export const GET_ALL_BANK = `Bank/GetAllBank`;
export const GET_ALL_BANK_BRANCH = `BankBranch/GetAllBankBranch`;
export const GET_ALL_BANK_OFFICER = `BankOfficer/GetAllBankOfficer`;
export const GET_ALL_ASSOCIATE_ADVOCATE = `AssociateAdvocate/GetAllAssociateAdvocate`;
export const GET_ALL_EXECUTER_NAME = `ExecuterName/GetAllExecuterName`;
export const GET_ALL_EXECUTING_OFFICER_DESIGNATION = "/ExecutingOfficerDesignation/GetAllExecutingOfficerDesignation";
export const GET_ALL_FORUM = "/Forum/GetAllForum";
export const GET_ALL_JUDGE_NAME = "JudgeName/GetAllJudgeName";
export const GET_ALL_OUR_ADVOCATE = "/OurAdvocate/GetAllOurAdvocate";
export const GET_ALL_TALUKA = "/Taluka/GetAllTaluka";

export const GET_BY_ID_DISTRICT = `District/GetDistrictById`;
export const GET_BY_ID_DEPARTMENT = `Department/GetDepartmentById`;
export const GET_BY_ID_BANK = `Bank/GetBankById`;
export const GET_BY_ID_BANK_BRANCH = `BankBranch/GetBankBranchById`;
export const GET_BY_ID_BANK_OFFICER = `BankOfficer/GetBankOfficerById`;
export const GET_BY_ID_ASSOCIATE_ADVOCATE = `AssociateAdvocate/GetAssociateAdvocateById`;
export const GET_BY_ID_EXECUTER_NAME = `ExecuterName/GetExecuterNameById`;
export const GET_BY_ID_EXECUTING_OFFICER_DESIGNATION = "/ExecutingOfficerDesignation/GetExecutingOfficerDesignationById";
export const GET_BY_ID_FORUM = "/Forum/GetForumById";
export const GET_BY_ID_JUDGE_NAME = "JudgeName/GetJudgeNameById";
export const GET_BY_ID_OUR_ADVOCATE = "/OurAdvocate/GetOurAdvocateById";
export const GET_BY_ID_TALUKA = "/Taluka/GetTalukaById";

export const POST_DISTRICT = "/District/AddDistrict";
export const POST_DEPARTMENT = "Department/AddDepartment";
export const POST_BANK = "/Bank/AddBank";
export const POST_BANK_BRANCH = "/BankBranch/AddBankBranch";
export const POST_BANK_OFFICER = "/BankOfficer/AddBankOfficer";
export const POST_ASSOCIATE_ADVOCATE = "/AssociateAdvocate/AddAssociateAdvocate";
export const POST_EXECUTER_NAME = "/ExecuterName/AddExecuterName";
export const POST_EXECUTING_OFFICER_OFFICER_DESIGNATION = "/ExecutingOfficerDesignation/AddExecutingOfficerDesignation";
export const POST_FORUM = "/Forum/AddForum";
export const POST_JUDGE_NAME = "/JudgeName/AddJudgeName";
export const POST_OUR_ADVOCATE = "/OurAdvocate/AddOurAdvocate";
export const POST_TALUKA = "/Taluka/AddTaluka";

export const ACTIVE_DEACTIVE_DISTRICT = "/District/ActiveDeactivateDistrict";
export const ACTIVE_DEACTIVE_DEPARTMENT = "Department/ActiveDeactivateDepartment";
export const ACTIVE_DEACTIVE_BANK = "/Bank/ActiveDeactivateBank";
export const ACTIVE_DEACTIVE_BANK_BRANCH = "/BankBranch/ActiveDeactivateBankBranch";
export const ACTIVE_DEACTIVE_BANK_OFFICER = "/BankOfficer/ActiveDeactivateBankOfficer";
export const ACTIVE_DEACTIVE_ASSOCIATE_ADVOCATE = "AssociateAdvocate/ActiveDeactivateAssociateAdvocate";
export const ACTIVE_DEACTIVE_EXECUTER_NAME = "/ExecuterName/ActiveDeactivateExecuterName";
export const ACTIVE_DEACTIVE_EXECUTING_OFFICER_OFFICER_DESIGNATION = "/ExecutingOfficerDesignation/ActiveDeactivateExecutingOfficerDesignation";
export const ACTIVE_DEACTIVE_FORUM = "/Forum/ActiveDeactivateForum";
export const ACTIVE_DEACTIVE_JUDGE_NAME = "/JudgeName/ActiveDeactivateJudgeName";
export const ACTIVE_DEACTIVE_OUR_ADVOCATE = "/OurAdvocate/ActiveDeactivateOurAdvocate";
export const ACTIVE_DEACTIVE_TALUKA = "/Taluka/ActiveDeactivateTaluka";

export const GET_DISTRICT_BY_ID = `District/GetDistrictById`;
export const GET_DEPARTMENT_BY_ID = `Department/GetDepartmentById`;
export const GET_BANK_BY_ID = `Bank/GetBankById`;
export const GET_BANK_BRANCH_BY_ID = `BankBranch/GetBankBranchById`;
export const GET_BANK_OFFICER_BY_ID = `BankOfficer/GetBankOfficerById`;
export const GET_ASSOCIATE_ADVOCATE_BY_ID = `AssociateAdvocate/GetAssociateAdvocateById`;
export const GET_EXECUTER_NAME_BY_ID = `ExecuterName/GetExecuterNameById`;
export const GET_EXECUTING_OFFICER_DESIGNATION_BY_ID = "/ExecutingOfficerDesignation/GetExecutingOfficerDesignationById";
export const GET_FORUM_BY_ID = "/Forum/GetForumById";
export const GET_JUDGE_NAME_BY_ID = "JudgeName/GetJudgeNameById";
export const GET_OUR_ADVOCATE_BY_ID = "/OurAdvocate/GetOurAdvocateById";
export const GET_TALUKA_BY_ID = "/Taluka/GetTalukaById";

export const UPDATE_DISTRICT_BY_ID = `/District/EditDistrict`;
export const UPDATE_DEPARTMENT_BY_ID = `/Department/EditDepartment`;
export const UPDATE_BANK_BY_ID = `/Bank/EditBank`;
export const UPDATE_BANK_BRANCH_BY_ID = `/BankBranch/EditBankBranch`;
export const UPDATE_BANK_OFFICER_BY_ID = `/BankOfficer/EditBankOfficer`;
export const UPDATE_ASSOCIATE_ADVOCATE_BY_ID = `/AssociateAdvocate/EditAssociateAdvocate`;
export const UPDATE_EXECUTER_NAME_BY_ID = `/ExecuterName/EditExecuterName`;
export const UPDATE_EXECUTING_OFFICER_DESIGNATION_BY_ID = "/ExecutingOfficerDesignation/EditExecutingOfficerDesignation";
export const UPDATE_FORUM_BY_ID = "/Forum/EditForum";
export const UPDATE_JUDGE_NAME_BY_ID = "/JudgeName/EditJudgeName";
export const UPDATE_OUR_ADVOCATE_BY_ID = "/OurAdvocate/EditOurAdvocate";
export const UPDATE_TALUKA_BY_ID = "/Taluka/EditTaluka";

// dropdown
export const GET_BANK_BRANCH_BY_BANK_ID = "/BankBranch/GetBankBranchByBankId";
export const GET_BANK_FOR_DROPDOWN = "/Bank/GetBanksForDropdown";
export const GET_DISTRICT_FOR_DROPDOWN = "/District/GetDistrictsForDropdown";
