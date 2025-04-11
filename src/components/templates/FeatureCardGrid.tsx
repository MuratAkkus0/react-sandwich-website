import { ReactNode } from "react";

type FeatureCardGridModel = {
  children: ReactNode;
};

const FeatureCardGrid: React.FC<FeatureCardGridModel> = ({ children }) => {
  return (
    <>
      <div className="w-full grid grid-cols-3 grid-rows-2 max-lg:grid-cols-2 max-lg:grid-rows-3  max-md:grid-cols-1 max-md:auto-rows-auto gap-24 items-center justify-items-center">
        {children}
      </div>
    </>
  );
};

export default FeatureCardGrid;
