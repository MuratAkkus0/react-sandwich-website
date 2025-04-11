import userPP from "@/assets/icons/userPP.svg";

const FeedbackCard = () => {
  return (
    <>
      {" "}
      <div className="w-[434px] h-[273px] bg-[#F5F5F5] rounded-lg p-8 space-y-8">
        <p className="w-[85%] font-medium text-[20px]">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut
        </p>
        <div className="flex gap-4 items-center">
          <img src={userPP} alt="Profile photo" />
          <p className="font-medium text-[20px]">Donna B.</p>
        </div>
      </div>
    </>
  );
};

export default FeedbackCard;
