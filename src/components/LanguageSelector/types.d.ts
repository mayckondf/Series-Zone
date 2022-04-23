import { WithSafeArea } from '@src/types/app/SafeAreaElement';

export type LanguageSelectorProps = {
  absolute?: boolean;
};

export interface LanguageSelectorContainerProps
  extends WithSafeArea,
    LanguageSelectorProps {}
