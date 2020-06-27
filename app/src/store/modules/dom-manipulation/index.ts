import { createActions } from 'redux-actions';

export const NAMESPACE = 'domManipulation';

export const actions = createActions(
  'SET_ROOT_ID',
  { prefix: NAMESPACE },
);