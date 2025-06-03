import React, { HTMLAttributes } from 'react';

interface ContainerProps extends React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  direction: "row" | "col"
}

export const Container: React.FC<ContainerProps> = (props) => {
  const { direction = "row", children } = props;

  const flexDirection = `${direction === "row" ? "flex-row" : "flex-col"}`;

  return (
    <div
      className={`p-4 gap-4 flex ${flexDirection}`}
      {...props}
    >
      {children}
    </div>
  );
};
