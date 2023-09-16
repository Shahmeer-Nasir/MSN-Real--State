import Link from "next/link";

const Header = () => {
  return (
    <header className="self-stretch bg-gray-white h-[98px] flex flex-row py-[22px] px-20 box-border items-center justify-center sticky w-full top-[0] [background:white] z-[2] text-center text-5xl text-primary-500 font-body-large-400 lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
      <div className="flex-1 flex flex-row items-center justify-between">
        <Link
          className="[text-decoration:none] flex flex-row items-center justify-center gap-[8px] text-[inherit]"
          href="/"
        >
          <img className="relative w-11 h-11" alt="" src="/houseline.svg" />
          <div className="flex flex-col items-start justify-start">
            <h2 className="m-0 relative text-inherit leading-[24px] font-semibold font-inherit">
              MSN
            </h2>
            <div className="relative text-sm leading-[16px] font-medium">
              Real State
            </div>
          </div>
        </Link>
        <div className="flex flex-row items-center justify-end gap-[36px] text-sm text-primary-900 lg:flex sm:flex">
          <div className="flex flex-row items-start justify-start gap-[30px] lg:hidden">
            <div className="relative leading-[22px]">HOME</div>
            <div className="relative leading-[22px]">ABOUT US</div>
            <div className="relative leading-[22px]">OUR AGENTS</div>
            <Link
              className="cursor-pointer [text-decoration:none] relative leading-[22px] font-semibold text-[inherit]"
              href="/properties"
            >
              PROPERTIES
            </Link>
            <div className="relative leading-[22px]">GALLERY</div>
            <div className="relative leading-[22px]">BLOG</div>
            <div className="relative leading-[22px]">CONTACT US</div>
            <div className="relative leading-[22px]">SEARCH</div>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] hidden flex-row items-center justify-center lg:flex md:flex sm:flex">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 md:flex"
              alt=""
              src="/notification.svg"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
