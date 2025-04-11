import { FeatureCardGridModel } from "@/types/models/templates/FeatureCardGrid";

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
