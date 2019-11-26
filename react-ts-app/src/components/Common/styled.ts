import styled from '@emotion/styled';
import { theme } from '../../theme';
import { string } from 'prop-types';

export const StyledError = styled.div<{
  id: string;
}>(props => ({
  id: props.id,
  ...theme.error,
  height: '24px',
  lineHeight: '24px',
  top: '-2px',
  fontWeight: 'bold',
  marginTop: '10px'
}));
