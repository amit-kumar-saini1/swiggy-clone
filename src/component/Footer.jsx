const footerData = [
    {
        title: "Company",
        links: [
            { text: "About Us", href: "#" },
            { text: "Swiggy Corporate", href: "#" },
            { text: "Careers", href: "#" },
            { text: "Team", href: "#" },
            { text: "Swiggy One", href: "#" },
        ],
    },
    {
        title: "Contact us",
        links: [
            { text: "Help & Support", href: "#" },
            { text: "Partner With Us", href: "#" },
            { text: "Ride With Us", href: "#" },
        ],
    },
    {
        title: "Available in:",
        links: [
            { text: "Bangalore", href: "#" },
            { text: "Gurgaon", href: "#" },
            { text: "Hyderabad", href: "#" },
            { text: "Delhi", href: "#" },
            { text: "Mumbai", href: "#" },
            { text: "Pune", href: "#" },
        ],
    },
    {
        title: "Life at Swiggy",
        links: [
            { text: "Explore With Swiggy", href: "#" },
            { text: "Swiggy News", href: "#" },
            { text: "Snackables", href: "#" },
        ],
    },
];

function Footer(){
    return(
        <div className="bg-gray-100 h-fit flex items-center justify-center flex-col pt-8">
            <div className="flex w-201.5 h-fit pb-6 gap-3">
                <div className="basis-2/6 h-12 w-40">
                    <img src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg" alt="" />
                    <p className="text-3">© 2025 Swiggy Limited</p>
                </div>
                                {footerData.map((section) => (
                                        <div key={section.title} className="basis-1/6 pr-5">
                                                <h5 className="font-bold mb-2 ">{section.title}</h5>
                                                <ul className="space-y-1 gap-5">
                                                        {section.links.map((link) => (
                                                                <li className="mt-5" key={link.text}>
                                                                        <a href={link.href}>{link.text}</a>
                                                                </li>
                                                        ))}
                                                </ul>
                                        </div>
                                ))}
            </div>
            <div className="flex mb-10 mt-10 border-t-2 border-gray-300 pt-5 gap-7 px-15">
                <p className="text-[24px] font-bold">For better experience, download the Swiggy app now</p>
                <a className="h-16 w-49.25 hover:scale-110 duration-300" href="#">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" alt="" />
                </a>
                <a className="h-16 w-49.25 hover:scale-110 duration-300" href="#">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Footer;