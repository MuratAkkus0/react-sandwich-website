import SectionTitle from "../atoms/SectionTitle";
import SectionUnderTitle from "../atoms/SectionUnderTitle";
import { Button } from "../ui/Button";
import GithubIco from "@/assets/icons/github-ico.svg";

const FinalCTA = () => {
  return (
    <>
      <div className="mt-38 mb-32 flex flex-col gap-12 items-center">
        <SectionTitle
          className="font-medium text-8xl max-lg:text-7xl max-sm:text-6xl text-center leading-[108px] max-md:leading-20"
          firstText="Start Building"
          secondText="in Minutes"
          breakWords
          reverseColorSequence
          fontSize=" text-8xl"
        />

        <SectionUnderTitle className="max-lg:text-lg ">
          Nemo enim ipsam voluptatem quia voluptas <br /> sit aspernatur aut
          odit aut fugit
        </SectionUnderTitle>

        <Button className="w-[70%] max-sm:w-[90%] max-sm:min-w-0 max-sm:max-w-dvw max-w-4xl min-w-3/4 flex justify-between h-fit font-semibold text-6xl max-md:text-4xl  max-sm:text-2xl max-xl:text-5xl bg-[#1C59F5] rounded-[20px] px-[84px] max-md:px-16 max-sm:px-7 py-10 max-sm:py-3 max-md:py-6 max-xl:px-[74px] max-xl:py-9">
          Final CTA
          <img
            className="max-xl:w-20 max-sm:w-13 max-md:w-18 max-xl:h-20"
            src={GithubIco}
            alt="Github Icon"
          />
        </Button>
      </div>
    </>
  );
};

export default FinalCTA;
