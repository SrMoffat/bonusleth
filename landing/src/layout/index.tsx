import { IssueBonus } from "layout/IssueBonus";
import React from "react";

declare interface LayoutProps {
  children: React.ReactNode | React.ReactNode[]
}

const Main: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main id='app'>
      <IssueBonus />
    </main>
  )
}

export default Main;
