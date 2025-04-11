import FeedbackCard from "./FeedbackCard";
import userPP from "@/assets/icons/userPP.svg";

const Feedback = () => {
  return (
    <>
      {" "}
      <div className="w-full flex max-xl:flex-col max-xl:gap-8">
        <div className="flex-[7]">
          <div className="flex flex-col gap-5">
            <h3 className="font-medium text-[40px] leading-[48px]">
              <span className="text-[#0000008F] font-normal">Don’t just</span>{" "}
              take our <br /> words for it
            </h3>
            <p className="text-[#0000008F] text-base font-medium">
              Aenean leo ligula, porttitor eu, consequat vitae,
              <br /> eleifend ac, enim. Aliquam lorem ante, dapibus in,
              <br /> viverra quis
            </p>
          </div>
        </div>
        <div className="flex-[13]">
          <div className="w-fit grid grid-cols-2 grid-rows-2 max-lg:grid-cols-1 max-lg:grid-rows-1 justify-items-center gap-x-11 gap-y-8">
            <FeedbackCard userName="Donna B." userPhoto={userPP}>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut
            </FeedbackCard>
            <FeedbackCard userName="Donna B." userPhoto={userPP}>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut
            </FeedbackCard>
            <FeedbackCard userName="Donna B." userPhoto={userPP}>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut
            </FeedbackCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
