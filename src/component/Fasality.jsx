import { IoChevronDownOutline } from "react-icons/io5";

const foodCities = [
    "Bangalore",
    "Gurgaon",
    "Hyderabad",
    "Delhi",
    "Mumbai",
    "Pune",
    "Kolkata",
    "Chennai",
    "Ahmedabad",
    "Chandigarh",
    "Jaipur",
];

const groceryCities = [
    "Bangalore",
    "Gurgaon",
    "Hyderabad",
    "Delhi",
    "Mumbai",
    "Pune",
    "Kolkata",
    "Chennai",
    "Ahmedabad",
    "Chandigarh",
    "Jaipur",
    "Kochi",
];

function CityCard({ text, isShowMore = false }) {
    return (
        <button
            type="button"
            className="h-23 rounded-2xl border border-[#d3d4d8] bg-white px-4 text-[13px] font-semibold text-[#3d4045] hover:bg-[#f8f8f8]"
        >
            <span
                className={`flex items-center justify-center gap-2 text-center leading-5 ${isShowMore ? "text-[#f45d13]" : ""}`}
            >
                {text}
                {isShowMore && <IoChevronDownOutline className="text-[18px]" />}
            </span>
        </button>
    );
}

function CityDeliverySection({ title, prefix, cities, showMore = false }) {
    return (
        <section>
            <h2 className="text-[24px] font-bold text-[#1c1f24]">{title}</h2>
            <div className="mt-6 grid grid-cols-4 gap-5">
                {cities.map((city) => (
                    <CityCard key={`${prefix}-${city}`} text={`Order ${prefix} online in ${city}`} />
                ))}
                {showMore && <CityCard text="Show More" isShowMore />}
            </div>
        </section>
    );
}

function Fasality(){
    return(
        <div className="w-248 bg-white mx-auto my-17.5 py-8 flex flex-col gap-20">
            <CityDeliverySection
                title="Cities with food delivery"
                prefix="food"
                cities={foodCities}
                showMore
            />

            <CityDeliverySection
                title="Cities with grocery delivery"
                prefix="grocery"
                cities={groceryCities}
            />
        </div>
    )
}

export default Fasality;