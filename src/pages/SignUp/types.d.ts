import React from 'react';

export type SignUpViewProps = {
  nicknameState: [string, React.Dispatch<React.SetStateAction<string>>];
  validated: boolean;
  handleContinue: () => void;
};
