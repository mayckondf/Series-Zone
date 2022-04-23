/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';

import { DEBOUNCE_DEFAULT_TIME_IN_MILLISECONDS } from '@src/utils/constants';
import lodashDebounce from 'lodash.debounce';
import { TextInput } from 'react-native';

import { Container, StyledTextInput } from './styles';
import { InputSearchProps } from './types';

const InputSearch = React.forwardRef<TextInput, InputSearchProps>(
  ({ search, setSearch, ...props }, ref) => {
    const [value, setValue] = useState(search || '');

    const debounceOnChange = useRef(
      lodashDebounce(async (text: string) => {
        setSearch && setSearch(text);
      }, DEBOUNCE_DEFAULT_TIME_IN_MILLISECONDS),
    ).current;

    useEffect(() => {
      return () => {
        debounceOnChange.cancel();
      };
    }, [debounceOnChange]);

    useEffect(() => {
      debounceOnChange(value);
    }, [value]);

    return (
      <Container>
        <StyledTextInput
          ref={ref}
          onChangeText={setValue}
          value={value}
          {...props}
        />
      </Container>
    );
  },
);

export default InputSearch;
