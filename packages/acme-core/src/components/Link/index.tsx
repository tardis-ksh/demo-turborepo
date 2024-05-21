import type { FC, PropsWithChildren } from 'react';

export interface LinkProps {
  href?: string;
}

const Link:FC<PropsWithChildren & LinkProps> = (props) => {
  const { children, href } = props;

  return <a href={href}>im a link component {children}</a>;
};

export default Link;
