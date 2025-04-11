import FeatureCard from "./FeatureCard";
import SectionTitle from "@/components/atoms/SectionTitle";
import FeatureList from "@/assets/static_datas/features.json";
import FeatureCardGrid from "@/components/templates/FeatureCardGrid";

const Features = () => {
  const featureArray = FeatureList.features;
  return (
    <>
      <section className="flex justify-center items-center pb-24">
        <div className="flex flex-col">
          <SectionTitle
            firstText="Each feature is"
            secondText="minimal and adaptable"
          />
          <div className="mt-16">
            {/* card */}
            <FeatureCardGrid>
              {featureArray.map((item, key) => (
                <FeatureCard
                  key={key}
                  title={item.title}
                  details={item.details}
                />
              ))}
            </FeatureCardGrid>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
