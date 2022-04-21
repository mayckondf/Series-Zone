import { NativeModules } from 'react-native';
import { Reactotron as ReactotronType } from 'reactotron-core-client';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

const logFakeFunction = (...args: any[]) => args;

interface IReactotron {
  log: (...args: any[]) => void;
  warn: (...args: any[]) => void;
  error: (...args: any[]) => void;
  logFlow: (...args: any[]) => void;
  logImportant: (...args: any[]) => void;
  createEnhancer?: ReactotronType['createEnhancer'];
}

declare global {
  interface Console {
    tron: IReactotron;
  }
}

if (__DEV__) {
  const host = NativeModules.SourceCode.scriptURL.split('://')[1].split(':')[0];

  const reactotron = Reactotron.configure({ host, name: 'Series Zone' })
    .useReactNative({
      editor: false,
      networking: {
        ignoreUrls: /symbolicate|svg|generate_204/,
      },
      overlay: false,
    })
    .use(reactotronRedux())
    .connect();

  console.tron = {
    log: reactotron.log!,
    warn: reactotron.warn!,
    error: reactotron.error!,
    logFlow: reactotron.log!,
    logImportant: reactotron.logImportant!,
    createEnhancer: reactotron.createEnhancer,
  };
} else {
  console.tron = {
    log: logFakeFunction,
    warn: logFakeFunction,
    error: logFakeFunction,
    logFlow: logFakeFunction,
    logImportant: logFakeFunction,
  };
}
