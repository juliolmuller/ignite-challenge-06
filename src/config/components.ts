import { Container } from '@chakra-ui/react';

import theme from './theme';

Container.defaultProps = {
  ...Container.defaultProps,
  maxW: theme.breakpoints.xl,
  mx: 'auto',
};
