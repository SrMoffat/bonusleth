import { IssueBonus } from "layout/IssueBonus";
import React from "react";
import Feeds from "./Feeds";

declare interface LayoutProps {
  children: React.ReactNode | React.ReactNode[]
}

const Main: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main id='app'>
      <IssueBonus />
      <Feeds/>
    </main>
  )
}

export default Main;
