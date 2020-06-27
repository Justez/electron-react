import { pathOr } from 'ramda';

import { NAMESPACE } from '.';

export const getRootID = pathOr(null, [NAMESPACE, 'rootID']);
