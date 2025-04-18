import FeedbackCard from "./FeedbackCard";
import userPP from "@/assets/icons/userPP.svg";
import feedbackData from "@/assets/static_datas/feedbacks.json";
import FeedbackSectionTitle from "./FeedbackSectionTitle";
import FeedbackSectionUndertitle from "./FeedbackSectionUndertitle";

const Feedback = () => {
  const feedbackArr = feedbackData.feedbacks;
  return (
    <>
      <div className="w-full flex max-xl:flex-col max-xl:gap-8">
        <div className="flex-[7] gap-5">
          <FeedbackSectionTitle>
            <span className="text-[#0000008F] font-normal">Don’t just </span>
            take our <br /> words for it
          </FeedbackSectionTitle>
          <FeedbackSectionUndertitle>
            Aenean leo ligula, porttitor eu, consequat vitae,
            <br /> eleifend ac, enim. Aliquam lorem ante, dapibus in,
            <br /> viverra quis
          </FeedbackSectionUndertitle>
        </div>
        <div className="flex-[13]">
          <div className="w-fit grid grid-cols-2 grid-rows-2 max-lg:grid-cols-1 max-lg:grid-rows-1 justify-items-center gap-x-11 gap-y-8">
            {feedbackArr.map((item, key) => (
              <FeedbackCard
                key={key}
                userName={item.userName}
                userPhoto={userPP}
              >
                {item.feedback}
              </FeedbackCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
