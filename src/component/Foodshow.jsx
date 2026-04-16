import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const foodItems = [
    {
        id: 1,
        name: "Paratha",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Paratha.png"
    },
    {
        id: 2,
        name: "Dosa",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Dosa.png"
    },
    {
        id: 3,
        name: "Cake",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png"
    },
    {
        id: 2,
        name: "Dosa",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Dosa.png"
    },,
    {
        id: 2,
        name: "Dosa",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Dosa.png"
    },,
    {
        id: 2,
        name: "Dosa",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Dosa.png"
    },
];



function Foodshow(){
    return(
        <div className="h-104.5 w-248 bg-white mx-auto my-17 py-8">
            <div className="flex justify-between ">
                <div className="text-[24px] font-bold">Order our best food options</div>
                <div className="flex gap-4 pr-4">
                    <div className="rounded-full h-7.5 w-7.5 hover:bg-[#02060c26] bg-[#eceded] flex items-center justify-center">
                        <FaArrowLeft />
                    </div>
                    <div className="rounded-full h-7.5 w-7.5 hover:bg-[#02060c26] bg-[#eceded] flex items-center justify-center">
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <div className="flex gap-4 mt-6">
                {foodItems.map((item) => (
                    <div>
                    <a key={item.id} href="#">
                        <img className="w-36 h-45" src={item.image} alt={item.name} />
                    </a>
                    <a key={item.id} href="#">
                        <img className="w-36 h-45" src={item.image} alt={item.name} />
                    </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Foodshow;