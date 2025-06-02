import React, { HTMLAttributes } from 'react';

interface ContainerProps extends React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  direction: "row" | "col"
}

export const Container: React.FC<ContainerProps> = (props) => {
  const { direction, children } = props;

  const flexDirection = `flex-${direction === 'row' ? "row" : "col"}`;

  return (
    <div
      className={`
        flex p-4 m-4
        ${flexDirection}
      `}
      {...props}
    >
      {children}
    </div>
  );
};
