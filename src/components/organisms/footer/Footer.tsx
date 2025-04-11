import Logo from "@/components/atoms/Logo";
import InstaIco from "@/assets/icons/insta-ico.svg";
import FaceIco from "@/assets/icons/facebook-ico.svg";
const Footer = () => {
  return (
    <>
      {" "}
      <div>
        <div className="flex justify-between">
          <div className="flex-[2]">
            <Logo />
          </div>
          <div className="flex-[6] grid grid-rows-1 grid-cols-4">
            <div className="space-y-3">
              <h5 className="font-semibold text-base">Product</h5>
              <div className="font-normal">
                <p>Courses</p>
                <p>Schedule</p>
                <p>Pricing</p>
                <p>Teachers</p>
              </div>
            </div>
            <div className="space-y-3">
              <h5 className="font-semibold text-base">Product</h5>
              <div className="font-normal">
                <p>Courses</p>
                <p>Schedule</p>
                <p>Pricing</p>
                <p>Teachers</p>
              </div>
            </div>
            <div className="space-y-3">
              <h5 className="font-semibold text-base">Product</h5>
              <div className="font-normal">
                <p>Courses</p>
                <p>Schedule</p>
                <p>Pricing</p>
                <p>Teachers</p>
              </div>
            </div>
          </div>
          <div className="flex-[2] flex flex-col items-end gap-6">
            <img className="w-5 h-5" src={InstaIco} alt="instagram icon" />
            <img className="w-5 h-5" src={FaceIco} alt="facebook icon" />
            <img className="w-5 h-5" src={InstaIco} alt="instagram icon" />
            <img className="w-5 h-5" src={FaceIco} alt="facebook icon" />
          </div>
        </div>
        <div className="py-24 flex justify-between">
          <p className="font-medium text-[14px] text-[#0000008F]">
            © 2025 Gemi, Inc. All rights reserved
          </p>
          <a
            href="https://github.com/muratakkus0"
            target="blank"
            className="text-[#215DF5] text-[14px]"
          >
            Coded by <span className="underline">Murat Akkus</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
