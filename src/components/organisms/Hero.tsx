import SectionTitle from "../atoms/SectionTitle";
import SectionUnderTitle from "../atoms/SectionUnderTitle";
import { Button } from "../ui/Button";

const Hero = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <div className="mb-12 flex flex-col gap-8 justify-center items-center">
          <SectionTitle
            firstText="Launch your"
            secondText="Saas faster"
            fontSize=" text-8xl max-lg:text-7xl max-sm:text-6xl"
            SameFontWeightForBoth="700"
            breakWords
            reverseColorSequence
          />

          <SectionUnderTitle className="max-lg:text-lg px-5 max-sm:text-base">
            Nemo enim ipsam voluptatem quia volupta <br />
            sit aspernatur aut odit aut fugit
          </SectionUnderTitle>
          <div className="flex gap-4 max-lg:flex-col">
            <Button
              size="xl"
              className="text-xl max-lg:text-lg font-semibold"
              variant={"default"}
            >
              Primary Button
            </Button>
            <Button
              size="xl"
              className="text-xl max-lg:text-lg font-semibold"
              variant={"secondary"}
            >
              Secondary Button
            </Button>
          </div>
        </div>
        <p className="hover:underline text-sm">
          <span className="text-[#000000A3]">Baked with </span>
          <span className="text-[10px]">❤️</span>,{" "}
          <span className="text-[#000000A3]">Crafted for you</span>
        </p>
      </section>
    </>
  );
};

export default Hero;
