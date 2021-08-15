import { Children } from '@app/utils/commonTypes';

export const PageWidthBoundry = ({ children }: Children) => {
  return <div className="max-w-6xl mx-auto">{children}</div>;
};
