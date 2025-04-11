import { Button } from "../ui/Button";

const Hero = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <div className="mb-12 flex flex-col gap-8 justify-center items-center">
          <p className="text-8xl font-bold">Launch your</p>
          <p className="text-8xl font-bold text-[#666666]">Saas faster</p>
          <p className="text-2xl font-medium text-[#0000008F] text-center">
            Nemo enim ipsam voluptatem quia volupta <br />
            sit aspernatur aut odit aut fugit
          </p>
          <div className="flex gap-4">
            <Button
              size="xl"
              className="text-2xl font-semibold"
              variant={"default"}
            >
              Primary Button
            </Button>
            <Button
              size="xl"
              className="text-2xl font-semibold"
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
