import { createActions } from 'redux-actions';

export const NAMESPACE = 'polynomSettings';

export const actions = createActions(
  'UPDATE_STATUS',
  'UPDATE_SETTINGS',
  { prefix: NAMESPACE },
);