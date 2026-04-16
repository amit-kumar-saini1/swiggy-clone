import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";

const restaurantData = {
    title: "Discover best restaurants on Dineout",
    cards: [
        {
            id: 1,
            image:
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/11/25/dbb498d9-2f30-4d78-a59e-a2991b7c6c40_image1e5d43787947e4900a2ff1428ae9edd1e.JPG",
            cuisine: "Continental  Continental",
            location: "Hotel Hassan Palace, Pahtput, Agra",
            offer: "Flat 15% off on pre-booking",
            bankOffer: "Up to 10% off with bank offers",
        },
        {
            id: 2,
            image:
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/11/29/455f50df-aec2-483d-aef2-69a6235e5a70_image101fe2ac52834845db9d8d7a9e3427b855.JPG",
            cuisine: "Continental  Continental",
            location: "Hotel Gitanjali, Rohtas, Azamgarh",
            offer: "Flat 15% off on pre-booking",
            bankOffer: "Up to 10% off with bank offers",
        },
        {
            id: 3,
            image:
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1700215711/1bc8de3b79a010d86229537b1bf4efae.jpg",
            cuisine: "Continental  Continental",
            location: "Hotel Nirmal Palace, Permat, Kanpur",
            offer: "Flat 15% off on pre-booking",
            bankOffer: "Up to 10% off with bank offers",
        },
    ],
};


function Restaurants(){
    return(
        <div className="h-fit w-248 bg-white mx-auto mb-17 pt-14">
            <div className="flex justify-between ">
                <div className="text-[24px] font-bold">{restaurantData.title}</div>
                <div className="flex gap-4 pr-4">
                    <div className="rounded-full h-7.5 w-7.5 hover:bg-[#02060c26] bg-[#eceded] flex items-center justify-center">
                        <FaArrowLeft />
                    </div>
                    <div className="rounded-full h-7.5 w-7.5 hover:bg-[#02060c26] bg-[#eceded] flex items-center justify-center">
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <div className="mt-7.5 grid grid-cols-3 gap-4">
                {restaurantData.cards.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                ))}
            </div>
            <div>
                <img className="w-full h-auto mt-[140px]" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png" alt="" />
            </div>
        </div>
    )
}

function RestaurantCard({ restaurant }) {
    return (
        <div className="w-full h-91.25 rounded-[15px] border-2 border-gray-300">
            <div>
                <img
                    className="w-full h-47.25 rounded-t-[15px]"
                    src={restaurant.image}
                    alt={restaurant.cuisine}
                />
            </div>
            <div className="px-3.75 gap-2 pt-2 flex flex-col">
                <div>
                    <p className="text-[13px] text-[#02060c99]">{restaurant.cuisine}</p>
                    <p className="text-[13px] text-[#02060c99]">{restaurant.location}</p>
                </div>
                <div className="bg-[#1ba672] w-full text-white font-bold rounded-lg px-2 py-1.75 mt-2">
                    <a className="text-4 flex items-center gap-3" href="#">
                        <BiSolidOffer /> {restaurant.offer}
                    </a>
                </div>
                <div className="bg-[#c8f9e5] w-full text-[#2faf7f] rounded-lg px-2 py-1.75 mt-2">
                    <a className="text-4" href="#">
                        {restaurant.bankOffer}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Restaurants;