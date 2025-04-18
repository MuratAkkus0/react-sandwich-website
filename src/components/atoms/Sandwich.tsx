import SandwichSvg from "@/assets/sandwich-4 1.svg";

const Sandwich = () => {
  return (
    <>
      <section className="flex justify-center items-center -mt-52 -mb-18 max-md:-mt-60 max-sm:-mt-80 max-md:-mb-6 max-sm:-mb-55">
        <img
          className="w-[906px] h-[906px] max-xl:w-[800px] max-xl:h-[800px]"
          src={SandwichSvg}
          alt="Sandwich Image"
        />
      </section>
    </>
  );
};

export default Sandwich;
