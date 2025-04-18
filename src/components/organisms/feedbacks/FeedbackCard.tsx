import { ReactNode } from "react";

type FeedbackCardModel = {
  children: ReactNode;
  userName: string;
  userPhoto: string;
};

const FeedbackCard: React.FC<FeedbackCardModel> = ({
  children,
  userName,
  userPhoto,
}) => {
  return (
    <>
      <div className="max-lg:w-full w-[434px] h-[273px] bg-[#F5F5F5] rounded-lg p-8 max-md:p-6 space-y-8">
        <p className="w-[85%] font-medium text-[20px] max-sm:text-lg">
          {children}
        </p>
        <div className="flex gap-4 items-center">
          <img src={userPhoto} alt="Profile photo" />
          <p className="font-medium text-[20px] max-sm:text-lg">{userName}</p>
        </div>
      </div>
    </>
  );
};

export default FeedbackCard;
