import { PropsWithChildren } from "react";

export const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="mx-auto max-w-7xl px-4 md:px-0">{children}</div>;
};
