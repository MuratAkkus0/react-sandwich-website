import SectionTitle from "../atoms/SectionTitle";
import SectionUnderTitle from "../atoms/SectionUnderTitle";
import { Button } from "../ui/Button";
import GithubIco from "@/assets/icons/github-ico.svg";

const FinalCTA = () => {
  return (
    <>
      <div className="mt-38 mb-32 flex flex-col gap-12 items-center">
        <SectionTitle
          className="font-medium text-8xl text-center leading-[108px]"
          firstText="Start Building"
          secondText="in Minutes"
          breakWords
          reverseColorSequence
          fontSize=" text-8xl"
        />

        <SectionUnderTitle>
          Nemo enim ipsam voluptatem quia voluptas <br /> sit aspernatur aut
          odit aut fugit
        </SectionUnderTitle>

        <Button className="w-[70%] max-w-4xl min-w-3/4 flex justify-between h-fit font-semibold text-6xl max-xl:text-5xl bg-[#1C59F5] rounded-[20px] px-[84px] py-10 max-xl:px-[74px] max-xl:py-9">
          Final CTA
          <img
            className="max-xl:w-20 max-xl:h-20"
            src={GithubIco}
            alt="Github Icon"
          />
        </Button>
      </div>
    </>
  );
};

export default FinalCTA;
