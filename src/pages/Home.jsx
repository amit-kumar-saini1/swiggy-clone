import Header from "../component/Header";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import Foodshow from "../component/Foodshow";
import Footer from "../component/Footer";
import Fasality from "../component/Fasality";
import Restaurants from "../component/Restaurants";

const photo = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png";

function Home() {
    const foodImages = [
        {
            imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png",
            linkUrl: "#",
            alt: "food 1",
        },
        {
            imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png",
            linkUrl: "#",
            alt: "food 2",
        },
        {
            imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png",
            linkUrl: "#",
            alt: "food 3",
        },
    ];

    return (
        <>
        <div className="bg-orange-500 h-fit  ">
            <Header photo={photo} color="text-[#ffffff]" />
            <div className="flex flex-col items-center relative">
                <div className="flex justify-center items-center px-4">
                    <p className="text-[48px] text-white text-center leading-tight font-semibold mt-15 mb-5">
                        Order food. Discover best <br />restaurants. Swiggy it!
                    </p>
                </div>

                <div className="flex gap-5">
                    <div className="bg-white basis-1/3 w-67.5 h-15 rounded-[15px] flex items-center px-3.75">
                        <FaLocationDot className="text-orange-400 text-[28px] pr-2.5" />
                        Enter your delivery location
                        <RiArrowDropDownLine className="text-[2px]" />
                    </div>

                    <div className="bg-white basis-2/3 w-122.5 h-15 rounded-[15px] flex items-center px-3.75 justify-between">
                        <p>Search for restaurant, item or more</p>
                        <IoIosSearch className="text-[20px]" />
                    </div>
                </div>

                <div className="mt-10 flex gap-5 flex-wrap justify-center mb-5">
                    {foodImages.map((item, index) => (
                        <FoodCard
                            key={index}
                            imageUrl={item.imageUrl}
                            href={item.linkUrl}
                            alt={item.alt}
                        />
                    ))}
                </div>
                <div>
                    <img  className="h-112.5 w-62.5 absolute top-5 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" />
                    <img  className="h-112.5 w-62.5 absolute top-5 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" />
                </div>
            </div>
        </div>
        <Foodshow/>
      <Restaurants/>
      <Fasality/>   
      <Footer/>
        </>
    );
}

function FoodCard({ imageUrl, alt, href }) {
    return (
        <a href={href}  rel="noreferrer">
            <img
                className="h-75 w-81.5 object-cover rounded-[15px]"
                src={imageUrl}
                alt={alt}
            />
        </a>
    );
}

export default Home;