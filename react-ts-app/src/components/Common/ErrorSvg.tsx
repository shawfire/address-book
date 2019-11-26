import React from 'react';

import { theme } from '../../theme';

export const ErrorSvg = () => (
  <svg width='10' height='10' viewBox='0 0 10 10'>
    <path
      fill={theme.colors.errorColor}
      fillRule='evenodd'
      d='M9.736 8.634A.71.71 0 0 0 10 8.062a.71.71 0 0 0-.264-.573L7.269 5.022l2.467-2.511A.71.71 0 0 0 10 1.938c0-.205-.088-.396-.264-.572L8.59.22A.747.747 0 0 0 8.04 0a.905.905 0 0 0-.595.22L4.978 2.731 2.511.221A.775.775 0 0 0 1.938 0a.775.775 0 0 0-.572.22L.22 1.366a.775.775 0 0 0-.22.572c0 .235.073.426.22.573l2.467 2.511L.22 7.489a.775.775 0 0 0-.22.573c0 .235.073.426.22.572L1.366 9.78c.146.147.337.22.572.22a.775.775 0 0 0 .573-.22l2.467-2.467L7.445 9.78c.176.147.367.22.573.22a.775.775 0 0 0 .572-.22l1.146-1.146z'
    />
  </svg>
);
