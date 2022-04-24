/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import { useAppSelector } from '@src/redux/hooks';
import { removeFromErrors } from '@src/redux/reducers/error';
import { Error } from '@src/types/app/Error';
import { useAnimationState } from 'moti';
import { useDispatch } from 'react-redux';

import Icon from '../Icon';
import Text from '../Text';
import { CloseButton, Container, Row } from './styles';

const ToastError: React.FC = () => {
  const [currentError, setCurrentError] = useState<Error>();
  const { errors } = useAppSelector(state => state.error);
  const [visible, setVisible] = useState(false);
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();

  const animationState = useAnimationState({
    visible: {
      right: 12,
    },
    invisible: {
      right: -500,
    },
  });

  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(_counter => _counter - 1), 1000);

      if (counter === 1) {
        setVisible(false);
        dispatch(removeFromErrors(currentError!));
        setTimeout(() => setCurrentError(undefined), 1000);
      }
    }
  }, [counter]);

  useEffect(() => {
    if (errors.length && !currentError) {
      setCurrentError(errors[0]);
      setVisible(true);
      setCounter(5);
    }
  }, [errors, currentError]);

  useEffect(() => {
    if (visible) animationState.transitionTo('visible');
    if (!visible) animationState.transitionTo('invisible');
  }, [visible]);

  return (
    <Container state={animationState}>
      <Row>
        <Text fontStyle="b2">{currentError?.title}</Text>
        <CloseButton onPress={() => setVisible(false)}>
          <Icon variant="close" size={'sm'} />
        </CloseButton>
      </Row>
      <Text fontStyle="b2">{currentError?.message}</Text>
    </Container>
  );
};

export default ToastError;
