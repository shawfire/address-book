import styled from '@emotion/styled';
import { theme } from '../../theme';

export const StyledFieldWrapper = styled.div<{
  errorMessage: string;
}>(({ errorMessage }) => ({
  display: 'flex',
  flexDirection: 'column',
  '@media (max-width: 800px)': {
    margin: 'auto 16px',
    maxWidth: '420px'
  },
  input: {
    ...theme.input,
    height: '48px',
    borderRadius: '4px',
    paddingLeft: '16px',
    lineHeight: '24px',
    backgroundColor: errorMessage
      ? theme.colors.errorInputBackgroundColor
      : theme.colors.inputBackgroundColor
  },
  label: {
    ...theme.label,
    height: '24px',
    lineHeight: '20px',
    top: '-2px',
    fontWeight: 'bold',
    marginTop: '22px'
  }
}));

export const StyledCard = styled.div<{
  maxWidth: number;
  backgroundColor: string;
}>(props => ({
  backgroundColor: props.backgroundColor,
  width: '100%',
  maxWidth: props.maxWidth,
  boxShadow:
    '0px 1px 1.5px rgba(0, 0, 0, 0.106), 0px 0px 0.5px rgba(0, 0, 0, 0.08)',
  borderRadius: '3px'
}));
