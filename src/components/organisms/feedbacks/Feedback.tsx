import FeedbackCard from "./FeedbackCard";

const Feedback = () => {
  return (
    <>
      {" "}
      <div className="w-full flex gap52">
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
          <div className="w-fit grid grid-cols-2 grid-rows-2 justify-items-center gap-x-11 gap-y-8">
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
