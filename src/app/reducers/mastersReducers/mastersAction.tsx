import { showToastMessageFailure, showToastMessageSuccess } from "../../helpers/helperFunction";
import {
  ACTIVE_DEACTIVE_MASTERS_FAILURE,
  ACTIVE_DEACTIVE_MASTERS_REQUEST,
  ACTIVE_DEACTIVE_MASTERS_SUCCESS,
  GET_ALL_ASSOCIATE_ADVOCATE_FAILURE,
  GET_ALL_ASSOCIATE_ADVOCATE_REQUEST,
  GET_ALL_ASSOCIATE_ADVOCATE_SUCCESS,
  GET_ALL_BANK_BRANCH_FAILURE,
  GET_ALL_BANK_BRANCH_REQUEST,
  GET_ALL_BANK_BRANCH_SUCCESS,
  GET_ALL_BANK_FAILURE,
  GET_ALL_BANK_OFFICER_FAILURE,
  GET_ALL_BANK_OFFICER_REQUEST,
  GET_ALL_BANK_OFFICER_SUCCESS,
  GET_ALL_BANK_REQUEST,
  GET_ALL_BANK_SUCCESS,
  GET_ALL_DEPARTMENT_FAILURE,
  GET_ALL_DEPARTMENT_REQUEST,
  GET_ALL_DEPARTMENT_SUCCESS,
  GET_ALL_DISTRICT_FAILURE,
  GET_ALL_DISTRICT_REQUEST,
  GET_ALL_DISTRICT_SUCCESS,
  GET_ALL_EXECUTER_NAME_FAILURE,
  GET_ALL_EXECUTER_NAME_REQUEST,
  GET_ALL_EXECUTER_NAME_SUCCESS,
  GET_ALL_EXECUTING_OFFICER_DESIGNATION_FAILURE,
  GET_ALL_EXECUTING_OFFICER_DESIGNATION_REQUEST,
  GET_ALL_EXECUTING_OFFICER_DESIGNATION_SUCCESS,
  GET_ALL_FORUM_FAILURE,
  GET_ALL_FORUM_REQUEST,
  GET_ALL_FORUM_SUCCESS,
  GET_ALL_JUDGE_NAME_FAILURE,
  GET_ALL_JUDGE_NAME_REQUEST,
  GET_ALL_JUDGE_NAME_SUCCESS,
  GET_ALL_OUR_ADVOCATE_FAILURE,
  GET_ALL_OUR_ADVOCATE_REQUEST,
  GET_ALL_OUR_ADVOCATE_SUCCESS,
  GET_ALL_TALUKA_FAILURE,
  GET_ALL_TALUKA_REQUEST,
  GET_ALL_TALUKA_SUCCESS,
  GET_BANK_BRANCH_BY_BANK_ID_FAILURE,
  GET_BANK_BRANCH_BY_BANK_ID_REQUEST,
  GET_BANK_BRANCH_BY_BANK_ID_SUCCESS,
  GET_BANK_FOR_DROPDOWN_MASTERS_FAILURE,
  GET_BANK_FOR_DROPDOWN_MASTERS_REQUEST,
  GET_BANK_FOR_DROPDOWN_MASTERS_SUCCESS,
  GET_BY_ID_MASTERS_FAILURE,
  GET_BY_ID_MASTERS_REQUEST,
  GET_BY_ID_MASTERS_SUCCESS,
  GET_DISTRICT_FOR_DROPDOWN_MASTERS_FAILURE,
  GET_DISTRICT_FOR_DROPDOWN_MASTERS_REQUEST,
  GET_DISTRICT_FOR_DROPDOWN_MASTERS_SUCCESS,
  POST_MASTER_DATA_FAILURE,
  POST_MASTER_DATA_REQUEST,
  POST_MASTER_DATA_SUCCESS,
  UPDATE_MASTERS_FAILURE,
  UPDATE_MASTERS_REQUEST,
  UPDATE_MASTERS_SUCCESS,
} from "../actionTypes";
import {
  getAllDistrict,
  getAllForum,
  getAllOurAdvocate,
  getAllDepartment,
  getAllExecutingOfficerDesignation,
  getAllExecuterName,
  getAllBank,
  getAllAssociateAdvocate,
  getAllBankBranch,
  getAllBankOfficer,
  getAllJudgeName,
  getAllTaluka,
  postDistrictService,
  postTalukaService,
  postForumService,
  postJudgeNameService,
  postBankService,
  postDepartmentService,
  postBankBranchService,
  postBankOfficerService,
  postOurAdvocateService,
  postAssociateAdvocateService,
  postExecuterNameService,
  postExecutingOfficerDesignationService,
  activeDeactiveDistrictService,
  activeDeactiveTalukaService,
  activeDeactiveForumService,
  activeDeactiveJudgeNameService,
  activeDeactiveBankService,
  activeDeactiveDepartmentService,
  activeDeactiveBankBranchService,
  activeDeactiveBankOfficerService,
  activeDeactiveOurAdvocateService,
  activeDeactiveAssociateAdvocateService,
  activeDeactiveExecuterNameService,
  activeDeactiveExecutingOfficerDesignationService,
  getByIdService,
  getBankBranchByBankId,
  updateMastersService,
  getBankForDropdown,
  getDistrictForDropdown,
} from "./mastersService";
const request = (type: string) => {
  return { type: type };
};
const success = (type: string, data: object, master?: string) => {
  return { type: type, payload: data, master: master };
};
const failure = (type: string, err: any) => {
  return { type: type, payload: err };
};

export const fetchAllDistrict = (master: any, location: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_ALL_DISTRICT_REQUEST));
    return getAllDistrict(location).then(
      (result: any) => {
        dispatch(success(GET_ALL_DISTRICT_SUCCESS, result.data, master));
      },
      (error: any) => {
        dispatch(failure(GET_ALL_DISTRICT_FAILURE, error.message));
      }
    );
  };
};
export const fetchAllDepartment = (master: any, location: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_ALL_DEPARTMENT_REQUEST));
    return getAllDepartment(location).then(
      (result: any) => {
        dispatch(success(GET_ALL_DEPARTMENT_SUCCESS, result.data, master));
      },
      (error: any) => {
        dispatch(failure(GET_ALL_DEPARTMENT_FAILURE, error.message));
      }
    );
  };
};
export const fetchAllBank = (master: any, location: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_ALL_BANK_REQUEST));
    return getAllBank(location).then(
      (result: any) => {
        dispatch(success(GET_ALL_BANK_SUCCESS, result.data, master));
      },
      (error: any) => {
        dispatch(failure(GET_ALL_BANK_FAILURE, error.message));
      }
    );
  };
};
export const fetchAllBankBranch = (master: any, location: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_ALL_BANK_BRANCH_REQUEST));
    return getAllBankBranch(location).then(
      (result: any) => {
        dispatch(success(GET_ALL_BANK_BRANCH_SUCCESS, result.data, master));
      },
      (error: any) => {
        dispatch(failure(GET_ALL_BANK_BRANCH_FAILURE, error.message));
      }
    );
  };
};
export const fetchAllBankOfficer = (master: any, location: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_ALL_BANK_OFFICER_REQUEST));
    return getAllBankOfficer(location).then(
      (result: any) => {
        dispatch(success(GET_ALL_BANK_OFFICER_SUCCESS, result.data, master));
      },
      (error: any) => {
        dispatch(failure(GET_ALL_BANK_OFFICER_FAILURE, error.message));
      }
    );
  };
};
export const fetchAllAssociateAdvocate = (master: any, location: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_ALL_ASSOCIATE_ADVOCATE_REQUEST));
    return getAllAssociateAdvocate(location).then(
      (result: any) => {
        dispatch(success(GET_ALL_ASSOCIATE_ADVOCATE_SUCCESS, result.data, master));
      },
      (error: any) => {
        dispatch(failure(GET_ALL_ASSOCIATE_ADVOCATE_FAILURE, error.message));
      }
    );
  };
};
export const fetchAllExecuterName = (master: any, location: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_ALL_EXECUTER_NAME_REQUEST));
    return getAllExecuterName(location).then(
      (result: any) => {
        dispatch(success(GET_ALL_EXECUTER_NAME_SUCCESS, result.data, master));
      },
      (error: any) => {
        dispatch(failure(GET_ALL_EXECUTER_NAME_FAILURE, error.message));
      }
    );
  };
};
export const fetchAllExecutingOfficerDesignation = (master: any, location: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_ALL_EXECUTING_OFFICER_DESIGNATION_REQUEST));
    return getAllExecutingOfficerDesignation(location).then(
      (result: any) => {
        dispatch(success(GET_ALL_EXECUTING_OFFICER_DESIGNATION_SUCCESS, result.data, master));
      },
      (error: any) => {
        dispatch(failure(GET_ALL_EXECUTING_OFFICER_DESIGNATION_FAILURE, error.message));
      }
    );
  };
};
export const fetchAllForum = (master: any, location: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_ALL_FORUM_REQUEST));
    return getAllForum(location).then(
      (result: any) => {
        dispatch(success(GET_ALL_FORUM_SUCCESS, result.data, master));
      },
      (error: any) => {
        dispatch(failure(GET_ALL_FORUM_FAILURE, error.message));
      }
    );
  };
};
export const fetchAllOurAdvocate = (master: any, location: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_ALL_OUR_ADVOCATE_REQUEST));
    return getAllOurAdvocate(location).then(
      (result: any) => {
        dispatch(success(GET_ALL_OUR_ADVOCATE_SUCCESS, result.data, master));
      },
      (error: any) => {
        dispatch(failure(GET_ALL_OUR_ADVOCATE_FAILURE, error.message));
      }
    );
  };
};
export const fetchAllJudgeName = (master: any, location: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_ALL_JUDGE_NAME_REQUEST));
    return getAllJudgeName(location).then(
      (result: any) => {
        dispatch(success(GET_ALL_JUDGE_NAME_SUCCESS, result.data, master));
      },
      (error: any) => {
        dispatch(failure(GET_ALL_JUDGE_NAME_FAILURE, error.message));
      }
    );
  };
};
export const fetchAllTaluka = (master: any, location: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_ALL_TALUKA_REQUEST));
    return getAllTaluka(location).then(
      (result: any) => {
        dispatch(success(GET_ALL_TALUKA_SUCCESS, result.data, master));
      },
      (error: any) => {
        dispatch(failure(GET_ALL_TALUKA_FAILURE, error.message));
      }
    );
  };
};

export const fetchBankBranchByBankId = (id: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_BANK_BRANCH_BY_BANK_ID_REQUEST));
    return getBankBranchByBankId(id).then(
      (result: any) => {
        dispatch(success(GET_BANK_BRANCH_BY_BANK_ID_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(GET_BANK_BRANCH_BY_BANK_ID_FAILURE, error.message));
      }
    );
  };
};

export const postDistrict = (detail: any) => {
  return (dispatch: any) => {
    dispatch(request(POST_MASTER_DATA_REQUEST));
    return postDistrictService(detail).then(
      (result: any) => {
        dispatch(success(POST_MASTER_DATA_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(POST_MASTER_DATA_FAILURE, error.message));
      }
    );
  };
};
export const postTaluka = (detail: any) => {
  return (dispatch: any) => {
    dispatch(request(POST_MASTER_DATA_REQUEST));
    return postTalukaService(detail).then(
      (result: any) => {
        dispatch(success(POST_MASTER_DATA_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(POST_MASTER_DATA_FAILURE, error.message));
      }
    );
  };
};
export const postForum = (detail: any) => {
  return (dispatch: any) => {
    dispatch(request(POST_MASTER_DATA_REQUEST));
    return postForumService(detail).then(
      (result: any) => {
        dispatch(success(POST_MASTER_DATA_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(POST_MASTER_DATA_FAILURE, error.message));
      }
    );
  };
};
export const postJudgeName = (detail: any) => {
  return (dispatch: any) => {
    dispatch(request(POST_MASTER_DATA_REQUEST));
    return postJudgeNameService(detail).then(
      (result: any) => {
        dispatch(success(POST_MASTER_DATA_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(POST_MASTER_DATA_FAILURE, error.message));
      }
    );
  };
};
export const postBank = (detail: any) => {
  return (dispatch: any) => {
    dispatch(request(POST_MASTER_DATA_REQUEST));
    return postBankService(detail).then(
      (result: any) => {
        dispatch(success(POST_MASTER_DATA_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(POST_MASTER_DATA_FAILURE, error.message));
      }
    );
  };
};
export const postDepartment = (detail: any) => {
  return (dispatch: any) => {
    dispatch(request(POST_MASTER_DATA_REQUEST));
    return postDepartmentService(detail).then(
      (result: any) => {
        dispatch(success(POST_MASTER_DATA_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(POST_MASTER_DATA_FAILURE, error.message));
      }
    );
  };
};
export const postBankBranch = (detail: any) => {
  return (dispatch: any) => {
    dispatch(request(POST_MASTER_DATA_REQUEST));
    return postBankBranchService(detail).then(
      (result: any) => {
        dispatch(success(POST_MASTER_DATA_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(POST_MASTER_DATA_FAILURE, error.message));
      }
    );
  };
};
export const postBankOfficer = (detail: any) => {
  return (dispatch: any) => {
    dispatch(request(POST_MASTER_DATA_REQUEST));
    return postBankOfficerService(detail).then(
      (result: any) => {
        dispatch(success(POST_MASTER_DATA_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(POST_MASTER_DATA_FAILURE, error.message));
      }
    );
  };
};
export const postOurAdvocate = (detail: any) => {
  return (dispatch: any) => {
    dispatch(request(POST_MASTER_DATA_REQUEST));
    return postOurAdvocateService(detail).then(
      (result: any) => {
        dispatch(success(POST_MASTER_DATA_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(POST_MASTER_DATA_FAILURE, error.message));
      }
    );
  };
};
export const postAssociateAdvocate = (detail: any) => {
  return (dispatch: any) => {
    dispatch(request(POST_MASTER_DATA_REQUEST));
    return postAssociateAdvocateService(detail).then(
      (result: any) => {
        dispatch(success(POST_MASTER_DATA_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(POST_MASTER_DATA_FAILURE, error.message));
      }
    );
  };
};
export const postExecuterName = (detail: any) => {
  return (dispatch: any) => {
    dispatch(request(POST_MASTER_DATA_REQUEST));
    return postExecuterNameService(detail).then(
      (result: any) => {
        dispatch(success(POST_MASTER_DATA_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(POST_MASTER_DATA_FAILURE, error.message));
      }
    );
  };
};
export const postExecutingOfficerDesignation = (detail: any) => {
  return (dispatch: any) => {
    dispatch(request(POST_MASTER_DATA_REQUEST));
    return postExecutingOfficerDesignationService(detail).then(
      (result: any) => {
        dispatch(success(POST_MASTER_DATA_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(ACTIVE_DEACTIVE_MASTERS_FAILURE, error.message));
      }
    );
  };
};

export const activeDeactiveDistrict = (id: any, status: string, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(ACTIVE_DEACTIVE_MASTERS_REQUEST));
    return activeDeactiveDistrictService(id).then(
      (result: any) => {
        dispatch(success(ACTIVE_DEACTIVE_MASTERS_SUCCESS, result.data));
        showToastMessageSuccess(`${status} successfully`);
        callback();
      },
      (error: any) => {
        dispatch(failure(ACTIVE_DEACTIVE_MASTERS_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};
export const activeDeactiveTaluka = (id: any, status: string, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(ACTIVE_DEACTIVE_MASTERS_REQUEST));
    return activeDeactiveTalukaService(id).then(
      (result: any) => {
        dispatch(success(ACTIVE_DEACTIVE_MASTERS_SUCCESS, result.data));
        showToastMessageSuccess(`${status} successfully`);
        callback();
      },
      (error: any) => {
        dispatch(failure(ACTIVE_DEACTIVE_MASTERS_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};
export const activeDeactiveForum = (id: any, status: string, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(ACTIVE_DEACTIVE_MASTERS_REQUEST));
    return activeDeactiveForumService(id).then(
      (result: any) => {
        dispatch(success(ACTIVE_DEACTIVE_MASTERS_SUCCESS, result.data));
        showToastMessageSuccess(`${status} successfully`);
        callback();
      },
      (error: any) => {
        dispatch(failure(ACTIVE_DEACTIVE_MASTERS_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};
export const activeDeactiveJudgeName = (id: any, status: string, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(ACTIVE_DEACTIVE_MASTERS_REQUEST));
    return activeDeactiveJudgeNameService(id).then(
      (result: any) => {
        dispatch(success(ACTIVE_DEACTIVE_MASTERS_SUCCESS, result.data));
        showToastMessageSuccess(`${status} successfully`);
        callback();
      },
      (error: any) => {
        dispatch(failure(ACTIVE_DEACTIVE_MASTERS_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};
export const activeDeactiveBank = (id: any, status: string, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(ACTIVE_DEACTIVE_MASTERS_REQUEST));
    return activeDeactiveBankService(id).then(
      (result: any) => {
        dispatch(success(ACTIVE_DEACTIVE_MASTERS_SUCCESS, result.data));
        showToastMessageSuccess(`${status} successfully`);
        callback();
      },
      (error: any) => {
        dispatch(failure(ACTIVE_DEACTIVE_MASTERS_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};
export const activeDeactiveDepartment = (id: any, status: string, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(ACTIVE_DEACTIVE_MASTERS_REQUEST));
    return activeDeactiveDepartmentService(id).then(
      (result: any) => {
        dispatch(success(ACTIVE_DEACTIVE_MASTERS_SUCCESS, result.data));
        showToastMessageSuccess(`${status} successfully`);
        callback();
      },
      (error: any) => {
        dispatch(failure(ACTIVE_DEACTIVE_MASTERS_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};
export const activeDeactiveBankBranch = (id: any, status: string, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(ACTIVE_DEACTIVE_MASTERS_REQUEST));
    return activeDeactiveBankBranchService(id).then(
      (result: any) => {
        dispatch(success(ACTIVE_DEACTIVE_MASTERS_SUCCESS, result.data));
        showToastMessageSuccess(`${status} successfully`);
        callback();
      },
      (error: any) => {
        dispatch(failure(ACTIVE_DEACTIVE_MASTERS_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};
export const activeDeactiveBankOfficer = (id: any, status: string, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(ACTIVE_DEACTIVE_MASTERS_REQUEST));
    return activeDeactiveBankOfficerService(id).then(
      (result: any) => {
        dispatch(success(ACTIVE_DEACTIVE_MASTERS_SUCCESS, result.data));
        showToastMessageSuccess(`${status} successfully`);
        callback();
      },
      (error: any) => {
        dispatch(failure(ACTIVE_DEACTIVE_MASTERS_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};
export const activeDeactiveOurAdvocate = (id: any, status: string, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(ACTIVE_DEACTIVE_MASTERS_REQUEST));
    return activeDeactiveOurAdvocateService(id).then(
      (result: any) => {
        dispatch(success(ACTIVE_DEACTIVE_MASTERS_SUCCESS, result.data));
        showToastMessageSuccess(`${status} successfully`);
        callback();
      },
      (error: any) => {
        dispatch(failure(ACTIVE_DEACTIVE_MASTERS_FAILURE, error.message));
      }
    );
  };
};
export const activeDeactiveAssociateAdvocate = (id: any, status: string, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(ACTIVE_DEACTIVE_MASTERS_REQUEST));
    return activeDeactiveAssociateAdvocateService(id).then(
      (result: any) => {
        dispatch(success(ACTIVE_DEACTIVE_MASTERS_SUCCESS, result.data));
        showToastMessageSuccess(`${status} successfully`);
        callback();
      },
      (error: any) => {
        dispatch(failure(ACTIVE_DEACTIVE_MASTERS_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};
export const activeDeactiveExecuterName = (id: any, status: string, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(ACTIVE_DEACTIVE_MASTERS_REQUEST));
    return activeDeactiveExecuterNameService(id).then(
      (result: any) => {
        dispatch(success(ACTIVE_DEACTIVE_MASTERS_SUCCESS, result.data));
        showToastMessageSuccess(`${status} successfully`);
        callback();
      },
      (error: any) => {
        dispatch(failure(ACTIVE_DEACTIVE_MASTERS_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};
export const activeDeactiveExecutingOfficerDesignation = (id: any, status: string, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(ACTIVE_DEACTIVE_MASTERS_REQUEST));
    return activeDeactiveExecutingOfficerDesignationService(id).then(
      (result: any) => {
        dispatch(success(ACTIVE_DEACTIVE_MASTERS_SUCCESS, result.data));
        showToastMessageSuccess(`${status} successfully`);
        callback();
      },
      (error: any) => {
        dispatch(failure(ACTIVE_DEACTIVE_MASTERS_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};

export const getById = (url: any, id: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_BY_ID_MASTERS_REQUEST));
    return getByIdService(url, id).then(
      (result: any) => {
        dispatch(success(GET_BY_ID_MASTERS_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(GET_BY_ID_MASTERS_FAILURE, error.message));
      }
    );
  };
};

export const updateMasters = (url: any, values: any, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(UPDATE_MASTERS_REQUEST));
    return updateMastersService(url, values).then(
      (result: any) => {
        dispatch(success(UPDATE_MASTERS_SUCCESS, result.data));
        showToastMessageSuccess(`Updated successfully`);
        callback();
      },
      (error: any) => {
        dispatch(failure(UPDATE_MASTERS_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};

export const fetchBankForDropdown = () => {
  return (dispatch: any) => {
    dispatch(request(GET_BANK_FOR_DROPDOWN_MASTERS_REQUEST));
    return getBankForDropdown().then(
      (result: any) => {
        dispatch(success(GET_BANK_FOR_DROPDOWN_MASTERS_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(GET_BANK_FOR_DROPDOWN_MASTERS_FAILURE, error.message));
      }
    );
  };
};

export const fetchDistrictForDropdown = () => {
  return (dispatch: any) => {
    dispatch(request(GET_DISTRICT_FOR_DROPDOWN_MASTERS_REQUEST));
    return getDistrictForDropdown().then(
      (result: any) => {
        dispatch(success(GET_DISTRICT_FOR_DROPDOWN_MASTERS_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(GET_DISTRICT_FOR_DROPDOWN_MASTERS_FAILURE, error.message));
      }
    );
  };
};
