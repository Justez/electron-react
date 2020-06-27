import { createActions } from 'redux-actions';

export const NAMESPACE = 'polynomSettings';

export const actions = createActions(
  'UPDATE_INTERVAL',
  'UPDATE_CALCULATION_LIMIT',
  'UPDATE_STATUS',
  { prefix: NAMESPACE },
);