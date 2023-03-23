import {
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
  POST_ADVOCATE_FAILURE,
  POST_ADVOCATE_REQUEST,
  POST_ADVOCATE_SUCCESS,
  POST_ASSOCIATE_ADVOCATE_FAILURE,
  POST_ASSOCIATE_ADVOCATE_REQUEST,
  POST_ASSOCIATE_ADVOCATE_SUCCESS,
  POST_BANK_BRANCH_FAILURE,
  POST_BANK_BRANCH_REQUEST,
  POST_BANK_BRANCH_SUCCESS,
  POST_BANK_FAILURE,
  POST_BANK_OFFICER_FAILURE,
  POST_BANK_OFFICER_REQUEST,
  POST_BANK_OFFICER_SUCCESS,
  POST_BANK_REQUEST,
  POST_BANK_SUCCESS,
  POST_DEPARTMENT_FAILURE,
  POST_DEPARTMENT_REQUEST,
  POST_DEPARTMENT_SUCCESS,
  POST_DISTRICT_FAILURE,
  POST_DISTRICT_REQUEST,
  POST_DISTRICT_SUCCESS,
  POST_EXECUTER_FAILURE,
  POST_EXECUTER_REQUEST,
  POST_EXECUTER_SUCCESS,
  POST_EXECUTING_OFFICER_DESIGNATION_FAILURE,
  POST_EXECUTING_OFFICER_DESIGNATION_REQUEST,
  POST_EXECUTING_OFFICER_DESIGNATION_SUCCESS,
  POST_FORUM_FAILURE,
  POST_FORUM_REQUEST,
  POST_FORUM_SUCCESS,
  POST_JUGDE_FAILURE,
  POST_JUGDE_REQUEST,
  POST_JUGDE_SUCCESS,
  POST_MASTER_DATA_FAILURE,
  POST_MASTER_DATA_REQUEST,
  POST_MASTER_DATA_SUCCESS,
  POST_TALUKA_FAILURE,
  POST_TALUKA_REQUEST,
  POST_TALUKA_SUCCESS,
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
    dispatch(request(POST_TALUKA_REQUEST));
    return postTalukaService(detail).then(
      (result: any) => {
        dispatch(success(POST_TALUKA_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(POST_TALUKA_FAILURE, error.message));
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
    dispatch(request(POST_JUGDE_REQUEST));
    return postJudgeNameService(detail).then(
      (result: any) => {
        dispatch(success(POST_JUGDE_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(POST_JUGDE_FAILURE, error.message));
      }
    );
  };
};
export const postBank = (detail: any) => {
  return (dispatch: any) => {
    dispatch(request(POST_BANK_REQUEST));
    return postBankService(detail).then(
      (result: any) => {
        dispatch(success(POST_BANK_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(POST_BANK_FAILURE, error.message));
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
    dispatch(request(POST_BANK_BRANCH_REQUEST));
    return postBankBranchService(detail).then(
      (result: any) => {
        dispatch(success(POST_BANK_BRANCH_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(POST_BANK_BRANCH_FAILURE, error.message));
      }
    );
  };
};
export const postBankOfficer = (detail: any) => {
  return (dispatch: any) => {
    dispatch(request(POST_BANK_OFFICER_REQUEST));
    return postBankOfficerService(detail).then(
      (result: any) => {
        dispatch(success(POST_BANK_OFFICER_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(POST_BANK_OFFICER_FAILURE, error.message));
      }
    );
  };
};
export const postOurAdvocate = (detail: any) => {
  return (dispatch: any) => {
    dispatch(request(POST_ADVOCATE_REQUEST));
    return postOurAdvocateService(detail).then(
      (result: any) => {
        dispatch(success(POST_ADVOCATE_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(POST_ADVOCATE_FAILURE, error.message));
      }
    );
  };
};
export const postAssociateAdvocate = (detail: any) => {
  return (dispatch: any) => {
    dispatch(request(POST_ASSOCIATE_ADVOCATE_REQUEST));
    return postAssociateAdvocateService(detail).then(
      (result: any) => {
        dispatch(success(POST_ASSOCIATE_ADVOCATE_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(POST_ASSOCIATE_ADVOCATE_FAILURE, error.message));
      }
    );
  };
};
export const postExecuterName = (detail: any) => {
  return (dispatch: any) => {
    dispatch(request(POST_EXECUTER_REQUEST));
    return postExecuterNameService(detail).then(
      (result: any) => {
        dispatch(success(POST_EXECUTER_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(POST_EXECUTER_FAILURE, error.message));
      }
    );
  };
};
export const postExecutingOfficerDesignation = (detail: any) => {
  return (dispatch: any) => {
    dispatch(request(POST_EXECUTING_OFFICER_DESIGNATION_REQUEST));
    return postExecutingOfficerDesignationService(detail).then(
      (result: any) => {
        dispatch(success(POST_EXECUTING_OFFICER_DESIGNATION_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(POST_EXECUTING_OFFICER_DESIGNATION_FAILURE, error.message));
      }
    );
  };
};
