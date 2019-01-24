import { EDIT_ORG, CANCEL_EDIT } from '../actions/orgs';
import { Action } from './types';

const initialState = {
  editModeOrg: {},
  editMode: false
};

export default function orgs(state = initialState, action: Action) {
  switch (action.type) {
    case EDIT_ORG:
      return { ...state, editMode: true, editModeOrg: action.editModeOrg };
    case CANCEL_EDIT:
      return { ...state, editMode: false, editModeOrg: {} };
    default:
      return state;
  }
}
