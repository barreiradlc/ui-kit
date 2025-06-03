import React, { HTMLAttributes } from 'react';

interface ContainerProps extends React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  direction: "row" | "col"
}

export const Container: React.FC<ContainerProps> = (props) => {
  const { direction = "row", children } = props;

  const flexDirection = `flex-${direction === "row" ? "row" : "column"}`;

  return (
    <div
      className={`flex p-4 gap-4 ${flexDirection}`}
      {...props}
    >
      {children}
    </div>
  );
};
