import { ReactNode } from "react";

type FeatureCardGridModel = {
  children: ReactNode;
};

const FeatureCardGrid: React.FC<FeatureCardGridModel> = ({ children }) => {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-2 items-center justify-center">
        {children}
      </div>
    </>
  );
};

export default FeatureCardGrid;
