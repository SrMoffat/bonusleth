import React from 'react';

type Props = {
  className?: string;
  icon?: JSX.Element;
  label: string;
  onClick: () => void;
};

const IssueButton: React.FC<Props> = ({ icon, label, className, onClick }) => {
  return (
    <button className={`issue-button ${className}`} onClick={onClick}>
      {icon}
      <span>{label}</span>
    </button>
  )
}

export default IssueButton;
