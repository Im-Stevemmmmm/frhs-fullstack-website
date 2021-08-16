import { Children } from '@app/utils/commonTypes';

export interface PageWidthBoundaryProps extends Children {}

export const PageWidthBoundary = ({ children }: PageWidthBoundaryProps) => {
  return <div className="max-w-6xl mx-auto">{children}</div>;
};
