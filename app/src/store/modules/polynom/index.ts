import { createActions } from 'redux-actions';

export const NAMESPACE = 'polynom';

export const actions = createActions(
  'SET_CANVAS',
  { prefix: NAMESPACE },
);