import { createContext, useContext, useReducer } from "react";
import { ActionTypes, appReducer } from "./Reducers";

interface UserDetails {
  avatar_url: string;
  name: string;
  bio: string;
}
interface RepoData {
  repo_name: string;
  description: string;
  language: string;
}

interface AppState {
  userDetails: UserDetails | null;
  repoData: RepoData | null;
}

interface SetUsersDetails {
  type: ActionTypes.SET_DETAILS;
  payload?: UserDetails;
}

interface CleanUserDetails {
  type: ActionTypes.CLEAN_DETAILS;
  payload?: null;
}

interface SetRepoData {
  type: ActionTypes.SET_REPO_DATA;
  payload?: RepoData;
}

const initialState: AppState = {
  userDetails: null,
  repoData: null,
};

const AppContext = createContext<
  | {
      state: AppState;
      dispatch: React.Dispatch<
        SetUsersDetails | SetRepoData | CleanUserDetails
      >;
    }
  | undefined
>(undefined);

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("Use App Context have to be used in an App Provider");
  }
  return context;
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
