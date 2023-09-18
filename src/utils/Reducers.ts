export enum ActionTypes {
  SET_DETAILS = "SET_DETAILS",
  CLEAN_DETAILS = "CLEAN_DETAILS",
  SET_REPO_DATA = "SET_REPO_DATA",
}

export const appReducer = (state: any, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_DETAILS:
      return {
        ...state,
        userDetails: action.payload,
      };

    case ActionTypes.CLEAN_DETAILS:
      return {
        ...state,
        userDetails: null,
      };

    case ActionTypes.SET_REPO_DATA:
      return {
        ...state,
        repoData: action.payload,
      };
    default:
      return state;
  }
};
