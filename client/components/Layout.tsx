import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { Button, Menu } from "semantic-ui-react";
import "./Layout.scss";

interface LayoutProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Layout({ className, children }: LayoutProps) {
  return (
    <div className="Layout">
      <Menu className="mainMenu" size='massive' color='blue' attached secondary pointing>
        <Menu.Item header as={Link} to="/">NFT Assembly Registry</Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item as={NavLink} exact to="/">Listing</Menu.Item>
          <Menu.Item onClick={() => {}}>Add Collection</Menu.Item>
          <Menu.Item onClick={() => {}}>Login</Menu.Item>
        </Menu.Menu>
      </Menu>
      <div className={`content${className ? ` ${className}` : ""}`}>
        {children}
      </div>
    </div>
  );
}
