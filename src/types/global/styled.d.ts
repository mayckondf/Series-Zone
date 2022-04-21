import { Theme } from '@src/theme/types';
import 'styled-components';

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}
