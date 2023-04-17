import { capitalizeFirstLetter, showToastMessageFailure, showToastMessageSuccess } from "../../helpers/helperFunction";
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
  GET_ALL_CASE_CATEGORY_FAILURE,
  GET_ALL_CASE_CATEGORY_REQUEST,
  GET_ALL_CASE_CATEGORY_SUCCESS,
  GET_ALL_CASE_TYPE_FAILURE,
  GET_ALL_CASE_TYPE_REQUEST,
  GET_ALL_CASE_TYPE_SUCCESS,
  GET_ALL_DEPARTMENT_FAILURE,
  GET_ALL_DEPARTMENT_REQUEST,
  GET_ALL_DEPARTMENT_SUCCESS,
  GET_ALL_DESIGNATION_FAILURE,
  GET_ALL_DESIGNATION_REQUEST,
  GET_ALL_DESIGNATION_SUCCESS,
  GET_ALL_DISPOSAL_FAILURE,
  GET_ALL_DISPOSAL_REQUEST,
  GET_ALL_DISPOSAL_SUCCESS,
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
  GET_ALL_OPPSITE_ADVOCATE_FAILURE,
  GET_ALL_OPPSITE_ADVOCATE_REQUEST,
  GET_ALL_OPPSITE_ADVOCATE_SUCCESS,
  GET_ALL_OUR_ADVOCATE_FAILURE,
  GET_ALL_OUR_ADVOCATE_REQUEST,
  GET_ALL_OUR_ADVOCATE_SUCCESS,
  GET_ALL_PRODUCT_FAILURE,
  GET_ALL_PRODUCT_REQUEST,
  GET_ALL_PRODUCT_SUCCESS,
  GET_ALL_STAGE_FAILURE,
  GET_ALL_STAGE_REQUEST,
  GET_ALL_STAGE_SUCCESS,
  GET_ALL_TALUKA_FAILURE,
  GET_ALL_TALUKA_REQUEST,
  GET_ALL_TALUKA_SUCCESS,
  GET_BANK_BRANCH_BY_BANK_ID_FAILURE,
  GET_BANK_BRANCH_BY_BANK_ID_REQUEST,
  GET_BANK_BRANCH_BY_BANK_ID_SUCCESS,
  GET_BANK_FOR_DROPDOWN_MASTERS_FAILURE,
  GET_BANK_FOR_DROPDOWN_MASTERS_REQUEST,
  GET_BANK_FOR_DROPDOWN_MASTERS_SUCCESS,
  GET_BANK_OFFICER_BY_BANK_FAILURE,
  GET_BANK_OFFICER_BY_BANK_REQUEST,
  GET_BANK_OFFICER_BY_BANK_SUCCESS,
  GET_BANK_OFFICER_FOR_DROPDOWN_MASTERS_FAILURE,
  GET_BANK_OFFICER_FOR_DROPDOWN_MASTERS_REQUEST,
  GET_BANK_OFFICER_FOR_DROPDOWN_MASTERS_SUCCESS,
  GET_BY_ID_MASTERS_FAILURE,
  GET_BY_ID_MASTERS_REQUEST,
  GET_BY_ID_MASTERS_SUCCESS,
  GET_CASE_CAT_FOR_DROPDOWN_FAILURE,
  GET_CASE_CAT_FOR_DROPDOWN_REQUEST,
  GET_CASE_CAT_FOR_DROPDOWN_SUCCESS,
  GET_CASE_TYPE_BY_CASE_CAT_FAILURE,
  GET_CASE_TYPE_BY_CASE_CAT_REQUEST,
  GET_CASE_TYPE_BY_CASE_CAT_SUCCESS,
  GET_DESIGNATION_FOR_DROPDOWN_FAILURE,
  GET_DESIGNATION_FOR_DROPDOWN_REQUEST,
  GET_DESIGNATION_FOR_DROPDOWN_SUCCESS,
  GET_DISTRICT_FOR_DROPDOWN_MASTERS_FAILURE,
  GET_DISTRICT_FOR_DROPDOWN_MASTERS_REQUEST,
  GET_DISTRICT_FOR_DROPDOWN_MASTERS_SUCCESS,
  GET_EXE_OFF_DESIGNATION_FOR_DROPDOWN_FAILURE,
  GET_EXE_OFF_DESIGNATION_FOR_DROPDOWN_REQUEST,
  GET_EXE_OFF_DESIGNATION_FOR_DROPDOWN_SUCCESS,
  GET_FORUM_DROPDOWN_MASTERS_FAILURE,
  GET_FORUM_DROPDOWN_MASTERS_REQUEST,
  GET_FORUM_DROPDOWN_MASTERS_SUCCESS,
  GET_JUDGE_BY_TALUKA_FAILURE,  
  GET_JUDGE_BY_TALUKA_REQUEST,
  GET_JUDGE_BY_TALUKA_SUCCESS,
  GET_JUDGE_DROPDOWN_MASTERS_FAILURE,
  GET_JUDGE_DROPDOWN_MASTERS_REQUEST,
  GET_JUDGE_DROPDOWN_MASTERS_SUCCESS,
  GET_PRODUCT_FOR_DROPDOWN_MASTERS_FAILURE,
  GET_PRODUCT_FOR_DROPDOWN_MASTERS_REQUEST,
  GET_PRODUCT_FOR_DROPDOWN_MASTERS_SUCCESS,
  GET_STAGE_FOR_DROPDOWN_MASTERS_FAILURE,
  GET_STAGE_FOR_DROPDOWN_MASTERS_REQUEST,
  GET_STAGE_FOR_DROPDOWN_MASTERS_SUCCESS,
  GET_TALUKA_BY_DISTRICT_ID_FAILURE,
  GET_TALUKA_BY_DISTRICT_ID_REQUEST,
  GET_TALUKA_BY_DISTRICT_ID_SUCCESS,
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
  getAllProduct,
  getAllStage,
  activeDeactiveProductService,
  activeDeactiveStageService,
  postProductService,
  postStageService,
  getForumForDropdown,
  getStageForDropdown,
  getBankOfficerForDropdown,
  getJudgeForDropdown,
  activeDeactiveDisposalService,
  activeDeactiveDesignationService,
  activeDeactiveCaseTypeService,
  activeDeactiveCaseCategoryService,
  activeDeactiveOppositeAdvocateService,
  getAllDisposal,
  getAllCaseType,
  getAllCaseCategory,
  getAllDesignation,
  getAllOppositeAdvocate,
  postDisposalService,
  postDesignationService,
  postCaseTypeService,
  postCaseCategoryService,
  postOppositeAdvocateService,
  getDesignationForDropdown,
  getTalukaByDistrictId,
  getCaseCategoryForDropdown,
  getExeOffDesignationForDropdown,
  getProductByBankForDropdown,
  getBankOfficerByBank,
  getJudgeByTaluka,
  getCaseTypeByCaseCat,
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
export const fetchAllProduct = (master: any, location: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_ALL_PRODUCT_REQUEST));
    return getAllProduct(location).then(
      (result: any) => {
        dispatch(success(GET_ALL_PRODUCT_SUCCESS, result.data, master));
      },
      (error: any) => {
        dispatch(failure(GET_ALL_PRODUCT_FAILURE, error.message));
      }
    );
  };
};
export const fetchAllStage = (master: any, location: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_ALL_STAGE_REQUEST));
    return getAllStage(location).then(
      (result: any) => {
        dispatch(success(GET_ALL_STAGE_SUCCESS, result.data, master));
      },
      (error: any) => {
        dispatch(failure(GET_ALL_STAGE_FAILURE, error.message));
      }
    );
  };
};
export const fetchAllDisposal = (master: any, location: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_ALL_DISPOSAL_REQUEST));
    return getAllDisposal(location).then(
      (result: any) => {
        dispatch(success(GET_ALL_DISPOSAL_SUCCESS, result.data, master));
      },
      (error: any) => {
        dispatch(failure(GET_ALL_DISPOSAL_FAILURE, error.message));
      }
    );
  };
};

export const fetchAllCaseType = (master: any, location: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_ALL_CASE_TYPE_REQUEST));
    return getAllCaseType(location).then(
      (result: any) => {
        dispatch(success(GET_ALL_CASE_TYPE_SUCCESS, result.data, master));
      },
      (error: any) => {
        dispatch(failure(GET_ALL_CASE_TYPE_FAILURE, error.message));
      }
    );
  };
};

export const fetchAllCaseCategory = (master: any, location: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_ALL_CASE_CATEGORY_REQUEST));
    return getAllCaseCategory(location).then(
      (result: any) => {
        dispatch(success(GET_ALL_CASE_CATEGORY_SUCCESS, result.data, master));
      },
      (error: any) => {
        dispatch(failure(GET_ALL_CASE_CATEGORY_FAILURE, error.message));
      }
    );
  };
};

export const fetchAllDesignation = (master: any, location: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_ALL_DESIGNATION_REQUEST));
    return getAllDesignation(location).then(
      (result: any) => {
        dispatch(success(GET_ALL_DESIGNATION_SUCCESS, result.data, master));
      },
      (error: any) => {
        dispatch(failure(GET_ALL_DESIGNATION_FAILURE, error.message));
      }
    );
  };
};

export const fetchAllOppositeAdvocate = (master: any, location: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_ALL_OPPSITE_ADVOCATE_REQUEST));
    return getAllOppositeAdvocate(location).then(
      (result: any) => {
        dispatch(success(GET_ALL_OPPSITE_ADVOCATE_SUCCESS, result.data, master));
      },
      (error: any) => {
        dispatch(failure(GET_ALL_OPPSITE_ADVOCATE_FAILURE, error.message));
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

export const fetchJudgeByTaluka = (id: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_JUDGE_BY_TALUKA_REQUEST));
    return getJudgeByTaluka(id).then(
      (result: any) => {
        dispatch(success(GET_JUDGE_BY_TALUKA_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(GET_JUDGE_BY_TALUKA_FAILURE, error.message));
      }
    );
  };
};

export const postDistrict = (detail: any, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(POST_MASTER_DATA_REQUEST));
    return postDistrictService(detail).then(
      (result: any) => {
        dispatch(success(POST_MASTER_DATA_SUCCESS, result.data));
        showToastMessageSuccess(`District Added`);
        callback();
      },
      (error: any) => {
        dispatch(failure(POST_MASTER_DATA_FAILURE, error.message));
        showToastMessageFailure(error.response.data.error.errorMessage);
      }
    );
  };
};
export const postTaluka = (detail: any, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(POST_MASTER_DATA_REQUEST));
    return postTalukaService(detail).then(
      (result: any) => {
        dispatch(success(POST_MASTER_DATA_SUCCESS, result.data));
        showToastMessageSuccess(`Taluka Added`);
        callback();
      },
      (error: any) => {
        dispatch(failure(POST_MASTER_DATA_FAILURE, error.message));
        showToastMessageFailure(error.response.data.error.errorMessage);
      }
    );
  };
};
export const postForum = (detail: any, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(POST_MASTER_DATA_REQUEST));
    return postForumService(detail).then(
      (result: any) => {
        dispatch(success(POST_MASTER_DATA_SUCCESS, result.data));
        showToastMessageSuccess(`Forum Added`);
        callback();
      },
      (error: any) => {
        dispatch(failure(POST_MASTER_DATA_FAILURE, error.message));
        showToastMessageFailure(error.response.data.error.errorMessage);
      }
    );
  };
};
export const postJudgeName = (detail: any, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(POST_MASTER_DATA_REQUEST));
    return postJudgeNameService(detail).then(
      (result: any) => {
        dispatch(success(POST_MASTER_DATA_SUCCESS, result.data));
        showToastMessageSuccess(`Judge Added`);
        callback();
      },
      (error: any) => {
        dispatch(failure(POST_MASTER_DATA_FAILURE, error.message));
        showToastMessageFailure(error.response.data.error.errorMessage);
      }
    );
  };
};
export const postBank = (detail: any, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(POST_MASTER_DATA_REQUEST));
    return postBankService(detail).then(
      (result: any) => {
        dispatch(success(POST_MASTER_DATA_SUCCESS, result.data));
        showToastMessageSuccess(`Bank Added`);
        callback();
      },
      (error: any) => {
        dispatch(failure(POST_MASTER_DATA_FAILURE, error.message));
        showToastMessageFailure(error.response.data.error.errorMessage);
      }
    );
  };
};
export const postDepartment = (detail: any, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(POST_MASTER_DATA_REQUEST));
    return postDepartmentService(detail).then(
      (result: any) => {
        dispatch(success(POST_MASTER_DATA_SUCCESS, result.data));
        showToastMessageSuccess(`Department Added`);
        callback();
      },
      (error: any) => {
        dispatch(failure(POST_MASTER_DATA_FAILURE, error.message));
        showToastMessageFailure(error.response.data.error.errorMessage);
      }
    );
  };
};
export const postBankBranch = (detail: any, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(POST_MASTER_DATA_REQUEST));
    return postBankBranchService(detail).then(
      (result: any) => {
        dispatch(success(POST_MASTER_DATA_SUCCESS, result.data));
        showToastMessageSuccess(`Bank Branch Added`);
        callback();
      },
      (error: any) => {
        dispatch(failure(POST_MASTER_DATA_FAILURE, error.message));
        showToastMessageFailure(error.response.data.error.errorMessage);
      }
    );
  };
};
export const postBankOfficer = (detail: any, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(POST_MASTER_DATA_REQUEST));
    return postBankOfficerService(detail).then(
      (result: any) => {
        dispatch(success(POST_MASTER_DATA_SUCCESS, result.data));
        showToastMessageSuccess(`Bank Officer Added`);
        callback();
      },
      (error: any) => {
        dispatch(failure(POST_MASTER_DATA_FAILURE, error.message));
        showToastMessageFailure(error.response.data.error.errorMessage);
      }
    );
  };
};
export const postOurAdvocate = (detail: any, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(POST_MASTER_DATA_REQUEST));
    return postOurAdvocateService(detail).then(
      (result: any) => {
        dispatch(success(POST_MASTER_DATA_SUCCESS, result.data));
        showToastMessageSuccess(`Advocate Added`);
        callback();
      },
      (error: any) => {
        dispatch(failure(POST_MASTER_DATA_FAILURE, error.message));
        showToastMessageFailure(error.response.data.error.errorMessage);
      }
    );
  };
};
export const postAssociateAdvocate = (detail: any, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(POST_MASTER_DATA_REQUEST));
    return postAssociateAdvocateService(detail).then(
      (result: any) => {
        dispatch(success(POST_MASTER_DATA_SUCCESS, result.data));
        showToastMessageSuccess(`Associate Advocate Added`);
        callback();
      },
      (error: any) => {
        dispatch(failure(POST_MASTER_DATA_FAILURE, error.message));
        showToastMessageFailure(error.response.data.error.errorMessage);
      }
    );
  };
};
export const postExecuterName = (detail: any, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(POST_MASTER_DATA_REQUEST));
    return postExecuterNameService(detail).then(
      (result: any) => {
        dispatch(success(POST_MASTER_DATA_SUCCESS, result.data));
        showToastMessageSuccess(`Executer Added`);
        callback();
      },
      (error: any) => {
        dispatch(failure(POST_MASTER_DATA_FAILURE, error.message));
        showToastMessageFailure(error.response.data.error.errorMessage);
      }
    );
  };
};
export const postExecutingOfficerDesignation = (detail: any, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(POST_MASTER_DATA_REQUEST));
    return postExecutingOfficerDesignationService(detail).then(
      (result: any) => {
        dispatch(success(POST_MASTER_DATA_SUCCESS, result.data));
        showToastMessageSuccess(`Designation Added`);
        callback();
      },
      (error: any) => {
        dispatch(failure(POST_MASTER_DATA_FAILURE, error.message));
        showToastMessageFailure(error.response.data.error.errorMessage);
      }
    );
  };
};
export const postStage = (detail: any, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(POST_MASTER_DATA_REQUEST));
    return postStageService(detail).then(
      (result: any) => {
        dispatch(success(POST_MASTER_DATA_SUCCESS, result.data));
        showToastMessageSuccess(`Stage Added`);
        callback();
      },
      (error: any) => {
        dispatch(failure(POST_MASTER_DATA_FAILURE, error.message));
        showToastMessageFailure(error.response.data.error.errorMessage);
      }
    );
  };
};
export const postProduct = (detail: any, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(POST_MASTER_DATA_REQUEST));
    return postProductService(detail).then(
      (result: any) => {
        dispatch(success(POST_MASTER_DATA_SUCCESS, result.data));
        showToastMessageSuccess(`Product Added`);
        callback();
      },
      (error: any) => {
        dispatch(failure(POST_MASTER_DATA_FAILURE, error.message));
        showToastMessageFailure(error.response.data.error.errorMessage);
      }
    );
  };
};

export const postDisposal = (detail: any, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(POST_MASTER_DATA_REQUEST));
    return postDisposalService(detail).then(
      (result: any) => {
        dispatch(success(POST_MASTER_DATA_SUCCESS, result.data));
        showToastMessageSuccess(`Disposal Added`);
        callback();
      },
      (error: any) => {
        dispatch(failure(POST_MASTER_DATA_FAILURE, error.message));
        showToastMessageFailure(error.response.data.error.errorMessage);
      }
    );
  };
};

export const postDesgination = (detail: any, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(POST_MASTER_DATA_REQUEST));
    return postDesignationService(detail).then(
      (result: any) => {
        dispatch(success(POST_MASTER_DATA_SUCCESS, result.data));
        showToastMessageSuccess(`Designation Added`);
        callback();
      },
      (error: any) => {
        dispatch(failure(POST_MASTER_DATA_FAILURE, error.message));
        showToastMessageFailure(error.response.data.error.errorMessage);
      }
    );
  };
};

export const postCaseType = (detail: any, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(POST_MASTER_DATA_REQUEST));
    return postCaseTypeService(detail).then(
      (result: any) => {
        dispatch(success(POST_MASTER_DATA_SUCCESS, result.data));
        showToastMessageSuccess(`Case Type Added`);
        callback();
      },
      (error: any) => {
        dispatch(failure(POST_MASTER_DATA_FAILURE, error.message));
        showToastMessageFailure(error.response.data.error.errorMessage);
      }
    );
  };
};

export const postCaseCategory = (detail: any, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(POST_MASTER_DATA_REQUEST));
    return postCaseCategoryService(detail).then(
      (result: any) => {
        dispatch(success(POST_MASTER_DATA_SUCCESS, result.data));
        showToastMessageSuccess(`Case Category Added`);
        callback();
      },
      (error: any) => {
        dispatch(failure(POST_MASTER_DATA_FAILURE, error.message));
        showToastMessageFailure(error.response.data.error.errorMessage);
      }
    );
  };
};

export const postOppsiteAdvocate = (detail: any, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(POST_MASTER_DATA_REQUEST));
    return postOppositeAdvocateService(detail).then(
      (result: any) => {
        dispatch(success(POST_MASTER_DATA_SUCCESS, result.data));
        showToastMessageSuccess(`Oppsite Advocate Added`);
        callback();
      },
      (error: any) => {
        dispatch(failure(POST_MASTER_DATA_FAILURE, error.message));
        showToastMessageFailure(error.response.data.error.errorMessage);
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
        showToastMessageSuccess(status);
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
        showToastMessageSuccess(status);
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
        showToastMessageSuccess(status);
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
        showToastMessageSuccess(status);
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
        showToastMessageSuccess(status);
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
        showToastMessageSuccess(status);
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
        showToastMessageSuccess(status);
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
        showToastMessageSuccess(status);
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
        showToastMessageSuccess(status);
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
        showToastMessageSuccess(status);
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
        showToastMessageSuccess(status);
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
        showToastMessageSuccess(status);
        callback();
      },
      (error: any) => {
        dispatch(failure(ACTIVE_DEACTIVE_MASTERS_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};
export const activeDeactiveProducts = (id: any, status: string, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(ACTIVE_DEACTIVE_MASTERS_REQUEST));
    return activeDeactiveProductService(id).then(
      (result: any) => {
        dispatch(success(ACTIVE_DEACTIVE_MASTERS_SUCCESS, result.data));
        showToastMessageSuccess(status);
        callback();
      },
      (error: any) => {
        dispatch(failure(ACTIVE_DEACTIVE_MASTERS_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};
export const activeDeactiveStage = (id: any, status: string, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(ACTIVE_DEACTIVE_MASTERS_REQUEST));
    return activeDeactiveStageService(id).then(
      (result: any) => {
        dispatch(success(ACTIVE_DEACTIVE_MASTERS_SUCCESS, result.data));
        showToastMessageSuccess(status);
        callback();
      },
      (error: any) => {
        dispatch(failure(ACTIVE_DEACTIVE_MASTERS_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};
export const activeDeactiveDisposal = (id: any, status: string, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(ACTIVE_DEACTIVE_MASTERS_REQUEST));
    return activeDeactiveDisposalService(id).then(
      (result: any) => {
        dispatch(success(ACTIVE_DEACTIVE_MASTERS_SUCCESS, result.data));
        showToastMessageSuccess(status);
        callback();
      },
      (error: any) => {
        dispatch(failure(ACTIVE_DEACTIVE_MASTERS_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};
export const activeDeactiveDesignation = (id: any, status: string, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(ACTIVE_DEACTIVE_MASTERS_REQUEST));
    return activeDeactiveDesignationService(id).then(
      (result: any) => {
        dispatch(success(ACTIVE_DEACTIVE_MASTERS_SUCCESS, result.data));
        showToastMessageSuccess(status);
        callback();
      },
      (error: any) => {
        dispatch(failure(ACTIVE_DEACTIVE_MASTERS_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};
export const activeDeactiveCaseType = (id: any, status: string, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(ACTIVE_DEACTIVE_MASTERS_REQUEST));
    return activeDeactiveCaseTypeService(id).then(
      (result: any) => {
        dispatch(success(ACTIVE_DEACTIVE_MASTERS_SUCCESS, result.data));
        showToastMessageSuccess(status);
        callback();
      },
      (error: any) => {
        dispatch(failure(ACTIVE_DEACTIVE_MASTERS_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};
export const activeDeactiveCaseCategory = (id: any, status: string, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(ACTIVE_DEACTIVE_MASTERS_REQUEST));
    return activeDeactiveCaseCategoryService(id).then(
      (result: any) => {
        dispatch(success(ACTIVE_DEACTIVE_MASTERS_SUCCESS, result.data));
        showToastMessageSuccess(status);
        callback();
      },
      (error: any) => {
        dispatch(failure(ACTIVE_DEACTIVE_MASTERS_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};
export const activeDeactiveOppositeAdvocate = (id: any, status: string, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(ACTIVE_DEACTIVE_MASTERS_REQUEST));
    return activeDeactiveOppositeAdvocateService(id).then(
      (result: any) => {
        dispatch(success(ACTIVE_DEACTIVE_MASTERS_SUCCESS, result.data));
        showToastMessageSuccess(status);
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

export const updateMasters = (url: any, masters: any, values: any, callback: Function) => {
  return (dispatch: any) => {
    dispatch(request(UPDATE_MASTERS_REQUEST));
    return updateMastersService(url, values).then(
      (result: any) => {
        dispatch(success(UPDATE_MASTERS_SUCCESS, result.data));
        showToastMessageSuccess(`${capitalizeFirstLetter(masters.replace(/-/g, " "))} Updated`);
        callback();
      },
      (error: any) => {
        dispatch(failure(UPDATE_MASTERS_FAILURE, error.response.data.error.errorMessage));
        showToastMessageFailure(error.response.data.error.errorMessage);
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

export const fetchForumDropdown = () => {
  return (dispatch: any) => {
    dispatch(request(GET_FORUM_DROPDOWN_MASTERS_REQUEST));
    return getForumForDropdown().then(
      (result: any) => {
        dispatch(success(GET_FORUM_DROPDOWN_MASTERS_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(GET_FORUM_DROPDOWN_MASTERS_FAILURE, error.message));
      }
    );
  };
};

export const fetchStageDropdown = () => {
  return (dispatch: any) => {
    dispatch(request(GET_STAGE_FOR_DROPDOWN_MASTERS_REQUEST));
    return getStageForDropdown().then(
      (result: any) => {
        dispatch(success(GET_STAGE_FOR_DROPDOWN_MASTERS_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(GET_STAGE_FOR_DROPDOWN_MASTERS_FAILURE, error.message));
      }
    );
  };
};

export const fetchJudgeDropdown = (id: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_JUDGE_DROPDOWN_MASTERS_REQUEST));
    return getJudgeForDropdown(id).then(
      (result: any) => {
        dispatch(success(GET_JUDGE_DROPDOWN_MASTERS_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(GET_JUDGE_DROPDOWN_MASTERS_FAILURE, error.message));
      }
    );
  };
};

export const fetchBankOfficerByBranchId = (id: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_BANK_OFFICER_FOR_DROPDOWN_MASTERS_REQUEST));
    return getBankOfficerForDropdown(id).then(
      (result: any) => {
        dispatch(success(GET_BANK_OFFICER_FOR_DROPDOWN_MASTERS_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(GET_BANK_OFFICER_FOR_DROPDOWN_MASTERS_FAILURE, error.message));
      }
    );
  };
};

export const fetchTalukaByDistrictId = (id: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_TALUKA_BY_DISTRICT_ID_REQUEST));
    return getTalukaByDistrictId(id).then(
      (result: any) => {
        dispatch(success(GET_TALUKA_BY_DISTRICT_ID_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(GET_TALUKA_BY_DISTRICT_ID_FAILURE, error.message));
      }
    );
  };
};

export const fetchProductByBankDropdown = (id: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_PRODUCT_FOR_DROPDOWN_MASTERS_REQUEST));
    return getProductByBankForDropdown(id).then(
      (result: any) => {
        dispatch(success(GET_PRODUCT_FOR_DROPDOWN_MASTERS_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(GET_PRODUCT_FOR_DROPDOWN_MASTERS_FAILURE, error.message));
      }
    );
  };
};

export const fetchDesignationDropdown = () => {
  return (dispatch: any) => {
    dispatch(request(GET_DESIGNATION_FOR_DROPDOWN_REQUEST));
    return getDesignationForDropdown().then(
      (result: any) => {
        dispatch(success(GET_DESIGNATION_FOR_DROPDOWN_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(GET_DESIGNATION_FOR_DROPDOWN_FAILURE, error.message));
      }
    );
  };
};

export const fetchCaseCategoryForDropdown = () => {
  return (dispatch: any) => {
    dispatch(request(GET_CASE_CAT_FOR_DROPDOWN_REQUEST));
    return getCaseCategoryForDropdown().then(
      (result: any) => {
        dispatch(success(GET_CASE_CAT_FOR_DROPDOWN_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(GET_CASE_CAT_FOR_DROPDOWN_FAILURE, error.message));
      }
    );
  };
};

export const fetchExeOffDesignationForDropdown = () => {
  return (dispatch: any) => {
    dispatch(request(GET_EXE_OFF_DESIGNATION_FOR_DROPDOWN_REQUEST));
    return getExeOffDesignationForDropdown().then(
      (result: any) => {
        dispatch(success(GET_EXE_OFF_DESIGNATION_FOR_DROPDOWN_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(GET_EXE_OFF_DESIGNATION_FOR_DROPDOWN_FAILURE, error.message));
      }
    );
  };
};

export const fetchBankOfficerByBank = (id: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_BANK_OFFICER_BY_BANK_REQUEST));
    return getBankOfficerByBank(id).then(
      (result: any) => {
        dispatch(success(GET_BANK_OFFICER_BY_BANK_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(GET_BANK_OFFICER_BY_BANK_FAILURE, error.message));
      }
    );
  };
};

export const fetchCaseTypeByCaseCat = (id: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_CASE_TYPE_BY_CASE_CAT_REQUEST));
    return getCaseTypeByCaseCat(id).then(
      (result: any) => {
        dispatch(success(GET_CASE_TYPE_BY_CASE_CAT_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(GET_CASE_TYPE_BY_CASE_CAT_FAILURE, error.message));
      }
    );
  };
};
