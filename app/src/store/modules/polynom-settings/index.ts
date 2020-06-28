import { createActions } from 'redux-actions';

export const NAMESPACE = 'polynomSettings';

export const actions = createActions(
  'UPDATE_SETTINGS',
  'UPDATE_COLOR',
  { prefix: NAMESPACE },
);