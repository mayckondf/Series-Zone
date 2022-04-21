import * as React from 'react';
import 'react';

declare module 'react' {
  interface CustomForwardRefRenderFunction<T, P = {}> {
    (props: PropsWithChildren<P>, ref: React.RefObject<T>): ReactElement | null;
    displayName?: string | undefined;
    // explicit rejected with `never` required due to
    // https://github.com/microsoft/TypeScript/issues/36826
    /**
     * defaultProps are not supported on render functions
     */
    defaultProps?: never | undefined;
    /**
     * propTypes are not supported on render functions
     */
    propTypes?: never | undefined;
  }

  function forwardRef<T, P = {}>(
    render: CustomForwardRefRenderFunction<T, P>,
  ): React.ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;
}
