import type { FC, PropsWithChildren } from 'react';

import { useConsole } from "@tardis-ksh/acme-hooks";

export interface LinkProps {
  href?: string;
}

const Link:FC<PropsWithChildren & LinkProps> = (props) => {
  const { children, href } = props;

  useConsole();

  return <a href={href}>change {children}</a>;
};

export default Link;
