/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import { Keyboard, Platform } from 'react-native';

type Config = {
  useWillShow: boolean;
  useWillHide: boolean;
};

type HookReturn = [boolean, () => void];

export default (config?: Config): HookReturn => {
  const { useWillShow = false, useWillHide = false } = config || {};
  const [visible, setVisible] = useState(false);
  const isApple = Platform.OS === 'ios';
  const showEvent =
    useWillShow && isApple ? 'keyboardWillShow' : 'keyboardDidShow';
  const hideEvent =
    useWillHide && isApple ? 'keyboardWillHide' : 'keyboardDidHide';

  function dismiss() {
    Keyboard.dismiss();
    setVisible(false);
  }

  useEffect(() => {
    function onKeyboardShow() {
      setVisible(true);
    }

    function onKeyboardHide() {
      setVisible(false);
    }

    const showSubscription = Keyboard.addListener(showEvent, onKeyboardShow);
    const hideSubscription = Keyboard.addListener(hideEvent, onKeyboardHide);

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [useWillShow, useWillHide]);

  return [visible, dismiss];
};
