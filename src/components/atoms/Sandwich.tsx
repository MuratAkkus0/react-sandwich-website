import SandwichSvg from "@/assets/sandwich-4 1.svg";

const Sandwich = () => {
  return (
    <>
      <section className="-mt-52 -mb-18 flex justify-center items-center">
        <img
          className="w-[906px] h-[906px]"
          src={SandwichSvg}
          alt="Sandwich Image"
        />
      </section>
    </>
  );
};

export default Sandwich;
