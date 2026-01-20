import React from "react";
import useSSR from "../hooks/useSSR";
import Link from "./Link";

interface EmailLinkProps extends React.ComponentProps<"a"> {
  address: string;
}

export default function EmailLink({ address, children, ...rest }: EmailLinkProps) {
  const rss = useSSR();
  if(rss) return null;
  
  const link = window.atob(address);
  if(!children) children = link;
  
  return <Link external to={`mailto://${link}`} {...rest}>{children}</Link>;
}

