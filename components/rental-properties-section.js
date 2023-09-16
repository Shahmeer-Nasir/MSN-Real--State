import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import Link from "next/link";
import PropertyRentCard from "./property-rent-card";

const RentalPropertiesSection = () => {
  return (
    <form className="self-stretch flex flex-col py-[86px] px-0 items-center justify-start gap-[39px]">
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px] md:pl-[60px] md:pr-[60px] md:box-border">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative text-21xl leading-[48px] font-semibold font-body-large-400 text-primary-800 text-center">
            Latest Properties of Rent
          </div>
          <div className="self-stretch relative text-xl leading-[28px] font-body-large-400 text-lightslategray text-center">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap py-0 px-2.5 items-center justify-center gap-[32px]">
          <Link
            className="cursor-pointer [text-decoration:none] flex-1 rounded-3xs bg-gray-white box-border h-[466.99px] flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] min-w-[355px] max-w-[400px] border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5"
            href="/properties-grid-view"
          >
            <Link
              className="cursor-pointer [text-decoration:none] self-stretch relative rounded-3xs h-[200px] bg-[url('/propertyimage@2x.png')] bg-cover bg-no-repeat bg-[top]"
              href="/properties-grid-view"
            />
            <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
              <div className="flex-1 relative text-[14.51px] leading-[20.32px] font-medium font-body-large-400 text-gray-700 text-left">
                92 ALLIUM PLACE, ORLANDO FL 32827
              </div>
            </div>
            <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
              <div className="relative text-[13.55px] leading-[18.98px] font-semibold font-body-large-400 text-primary-500 text-left">
                $ 590,693
              </div>
            </div>
            <div className="self-stretch flex flex-row py-0 px-2.5 items-start justify-start gap-[17px]">
              <div className="flex flex-row items-center justify-start gap-[4.35px]">
                <img
                  className="relative w-[17.42px] h-[17.42px]"
                  alt=""
                  src="/car.svg"
                />
                <div className="relative text-[10.84px] leading-[16.27px] font-medium font-body-large-400 text-gray-500 text-left">
                  4
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[4.35px]">
                <img
                  className="relative w-[17.42px] h-[17.42px]"
                  alt=""
                  src="/bathtub.svg"
                />
                <div className="relative text-[10.84px] leading-[16.27px] font-medium font-body-large-400 text-gray-500 text-left">
                  4
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[4.35px]">
                <img
                  className="relative w-[17.42px] h-[17.42px]"
                  alt=""
                  src="/arrowsout.svg"
                />
                <div className="relative text-[10.84px] leading-[16.27px] font-medium font-body-large-400 text-gray-500 text-left">
                  2,096.00 ft
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="flex flex-row items-center justify-start gap-[5.81px]">
                <img
                  className="relative rounded-[50%] w-[27.57px] h-[27.57px] object-cover"
                  alt=""
                  src="/ellipse-1@2x.png"
                />
                <div className="relative text-[11.61px] leading-[17.42px] font-medium font-body-large-400 text-gray-700 text-center">
                  Jenny Wilson
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[8.71px]">
                <TextField
                  className="[border:none] bg-[transparent]"
                  color="primary"
                  label="Label"
                  size="medium"
                  placeholder="Placeholder"
                  variant="outlined"
                  type="text"
                />
                <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start">
                  <img
                    className="relative w-[14.51px] h-[14.51px]"
                    alt=""
                    src="/heart.svg"
                  />
                </div>
                <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start">
                  <img
                    className="relative w-[14.51px] h-[14.51px]"
                    alt=""
                    src="/plus.svg"
                  />
                </div>
              </div>
            </div>
          </Link>
          <PropertyRentCard
            imageDimensions="/property-image@2x.png"
            imageDimensionsText="/car.svg"
            imageDimensionsText2="/bathtub.svg"
            imageDimensionsText3="/arrowsout.svg"
            imageDimensionsText4="/plus1.svg"
          />
          <PropertyRentCard
            imageDimensions="/property-image1@2x.png"
            imageDimensionsText="/car1.svg"
            imageDimensionsText2="/bathtub1.svg"
            imageDimensionsText3="/arrowsout1.svg"
            imageDimensionsText4="/plus2.svg"
          />
          <PropertyRentCard
            imageDimensions="/property-image2@2x.png"
            imageDimensionsText="/car1.svg"
            imageDimensionsText2="/bathtub1.svg"
            imageDimensionsText3="/arrowsout1.svg"
            imageDimensionsText4="/plus2.svg"
          />
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded flex flex-row items-start justify-start">
        <div className="relative text-base leading-[24px] font-medium font-body-large-400 text-gray-white text-center">
          Load more listing
        </div>
      </button>
    </form>
  );
};

export default RentalPropertiesSection;
