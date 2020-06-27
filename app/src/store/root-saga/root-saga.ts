import { all } from 'redux-saga/effects';

import polynom from 'store/modules/polynom/sagas';

export default function* rootSaga() {
  yield all([
    polynom(),
  ]);
}