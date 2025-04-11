import { Button } from "../ui/Button";
import GithubIco from "@/assets/icons/github-ico.svg";

const FinalCTA = () => {
  return (
    <>
      <div className="mt-38 mb-32 flex flex-col gap-12 items-center">
        <p className="font-medium text-8xl text-center leading-[108px]">
          Start Building <br />
          <span className="text-[#0000008F] font-normal">in Minutes</span>
        </p>
        <p className="font-medium text-2xl text-[#0000008F] text-center">
          Nemo enim ipsam voluptatem quia voluptas <br /> sit aspernatur aut
          odit aut fugit
        </p>
        <Button className="w-4xl flex justify-between h-fit font-semibold text-6xl bg-[#1C59F5] rounded-[20px] px-[84px] py-10">
          Final CTA
          <img src={GithubIco} alt="Github Icon" />
        </Button>
      </div>
    </>
  );
};

export default FinalCTA;
