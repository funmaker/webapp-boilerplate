import React from "react";
import { Link as WouterLink } from "wouter";
import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";

interface LinkProps extends MuiLinkProps {
  to: string;
  external?: boolean;
  nav?: boolean;
  replace?: boolean;
  noMui?: boolean;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  // eslint-disable-next-line react/prop-types,prefer-arrow-callback
  function Link({ to, external, nav = false, replace = false, noMui, className, children, ...rest }, ref) {
    if(external) {
      return <MuiLink target="_blank" rel="noopener noreferrer" href={to} className={className} {...rest} ref={ref} />;
    } else if(noMui) {
      return <WouterLink to={to} className={className} ref={ref}>{children}</WouterLink>;
    } else {
      return <WouterLink to={to} asChild><MuiLink className={className} {...rest} ref={ref}>{children}</MuiLink></WouterLink>;
    }
  },
);

export default Link;

