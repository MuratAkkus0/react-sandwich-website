import LogoSvg from "@/assets/logo.svg";
const Logo = () => {
  return (
    <div className="w-[124px] h-8 flex justify-between items-center">
      <img src={LogoSvg} className="w-8 h-8" alt="app logo" />
      <p className="text-2xl font-[Inter] font-semibold">LOGO"</p>
    </div>
  );
};

export default Logo;
