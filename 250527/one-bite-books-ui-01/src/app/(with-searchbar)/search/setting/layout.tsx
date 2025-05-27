import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div>미니 임시서치바</div>
      {children}
    </>
  );
};

export default layout;
