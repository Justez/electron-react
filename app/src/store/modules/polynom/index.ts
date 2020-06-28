import { createActions } from 'redux-actions';

export const NAMESPACE = 'polynom';

export const actions = createActions(
  'PAINT',
  'SET_CANVAS',
  'INCREASE_CALCULATION_COUNT',
  { prefix: NAMESPACE },
);