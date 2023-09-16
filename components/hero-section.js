import "antd/dist/antd.min.css";
import { Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const HeroSection = () => {
  const router = useRouter();

  const onSearchCTAClick = () => {
    router.push("/properties");
  };

  return (
    <section className="self-stretch flex flex-col py-[120px] px-[30px] items-center justify-start bg-[url('/hero-section@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-33xl text-gray-white font-body-regular-400">
      <div className="self-stretch flex flex-col items-center justify-center gap-[62px] max-w-[95%px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px] md:max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit leading-[72px] font-semibold font-inherit">
            Find Your Dream Home
          </h1>
          <div className="self-stretch relative text-xl leading-[28px] font-body-large-400 text-primary-50">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <form className="self-stretch flex flex-col items-center justify-start gap-[17px]">
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <button
              className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded overflow-hidden flex flex-row items-start justify-start"
              autoFocus={true}
              disabled={false}
            >
              <div className="relative text-base leading-[24px] font-medium font-body-large-400 text-gray-white text-center">
                Rent
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-3 px-6 bg-gray-white rounded overflow-hidden flex flex-row items-start justify-start">
              <div className="relative text-base leading-[24px] font-medium font-body-large-400 text-primary-400 text-center">
                Sale
              </div>
            </button>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center">
            <nav className="m-0 flex-1 rounded-lg bg-gray-white flex flex-row py-8 px-[62px] box-border items-center justify-between max-w-[1400px] md:w-[300px] md:flex-col md:gap-[20px] md:items-start md:justify-start md:ml-[auto] md:mr-[auto]">
              <div className="w-[137px] flex flex-col items-start justify-start gap-[16px]">
                <div className="relative text-base leading-[24px] capitalize font-semibold font-body-large-400 text-primary-700 text-center">
                  Locations
                </div>
                <Dropdown
                  overlay={
                    <Menu>
                      {[
                        { value: "Karachi" },
                        { value: "Lahore" },
                        { value: "Islamabad" },
                        { value: "Multan" },
                        { value: "Hyderabad" },
                      ].map((option, index) => (
                        <Menu.Item key={index}>
                          <a onClick={(e) => e.preventDefault()}>
                            {option.value || ""}
                          </a>
                        </Menu.Item>
                      ))}
                    </Menu>
                  }
                  trigger={["hover"]}
                >
                  <Button onClick={(e) => e.preventDefault()}>
                    {`Select your city `}
                    <DownOutlined />
                  </Button>
                </Dropdown>
              </div>
              <div className="w-[177px] flex flex-col items-start justify-start gap-[16px]">
                <div className="relative text-base leading-[24px] capitalize font-semibold font-body-large-400 text-primary-700 text-left flex items-end w-[150px]">
                  Property Type
                </div>
                <Dropdown
                  className="self-stretch"
                  overlay={
                    <Menu>
                      {[
                        { value: "Cottage" },
                        { value: "Condo" },
                        { value: "Bungalow" },
                        { value: "Apartment" },
                        { value: "Luxury" },
                      ].map((option, index) => (
                        <Menu.Item key={index}>
                          <a onClick={(e) => e.preventDefault()}>
                            {option.value || ""}
                          </a>
                        </Menu.Item>
                      ))}
                    </Menu>
                  }
                  trigger={["hover"]}
                >
                  <Button onClick={(e) => e.preventDefault()}>
                    {`Select property type `}
                    <DownOutlined />
                  </Button>
                </Dropdown>
              </div>
              <div className="w-[155px] flex flex-col items-start justify-start gap-[16px]">
                <div className="relative text-base leading-[24px] capitalize font-semibold font-body-large-400 text-primary-700 text-left flex items-end w-[150px]">
                  Rent Range
                </div>
                <Dropdown
                  className="self-stretch"
                  overlay={
                    <Menu>
                      {[
                        { value: "$100 - $199" },
                        { value: "$200 - $499" },
                        { value: "$500 - $1499" },
                        { value: ">$1499" },
                      ].map((option, index) => (
                        <Menu.Item key={index}>
                          <a onClick={(e) => e.preventDefault()}>
                            {option.value || ""}
                          </a>
                        </Menu.Item>
                      ))}
                    </Menu>
                  }
                  trigger={["hover"]}
                >
                  <Button onClick={(e) => e.preventDefault()}>
                    {`Select rent range `}
                    <DownOutlined />
                  </Button>
                </Dropdown>
              </div>
              <button
                className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded w-[102px] flex flex-row box-border items-center justify-center hover:bg-steelblue"
                onClick={onSearchCTAClick}
              >
                <a className="[text-decoration:none] relative text-base leading-[24px] font-medium font-body-large-400 text-gray-white text-center">
                  Search
                </a>
              </button>
            </nav>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
