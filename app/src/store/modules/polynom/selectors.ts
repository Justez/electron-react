import { pathOr } from 'ramda';

import { NAMESPACE } from '.';

export const getPolynomData = pathOr(null, [NAMESPACE]);
export const getCalculationCount = pathOr(null, [NAMESPACE, 'calcCount']);