import { pathOr } from 'ramda';

import { NAMESPACE } from '.';

export const getPolynomSettings = pathOr(null, [NAMESPACE]);
