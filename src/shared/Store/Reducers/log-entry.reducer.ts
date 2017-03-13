import { ActionReducer, Action } from '@ngrx/store';
import { LogEntry } from '../Models/log-entry';
import { LogEntryActions } from '../Actions/log-entry.actions';
import { UserActions } from '../Actions/user.actions';

const INITIAL_STATE: LogEntry[] = [];

export const logEntryReducer: ActionReducer<LogEntry> = (state: LogEntry[] = INITIAL_STATE, action: Action) => {
  switch(action.type){
    case LogEntryActions.GET_ALL_LOG_ENTRIES_SUCCESS: {
      return [...action.payload]
    }
    case UserActions.USER_LOGOUT_SUCCESS: {
      return INITIAL_STATE;
    }
    default: return state;
  }
};
