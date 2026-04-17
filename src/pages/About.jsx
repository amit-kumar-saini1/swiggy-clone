import Header from "../component/Header";
import Footer from "../component/Footer";

const photo = "https://www.swiggy.com/corporate/wp-content/uploads/2024/10/swiggy-logo.webp";

function About (){
    return(
        <>
            <Header photo={photo} color="text-[#ff5200]" />
                <div className="w-[70%] mx-auto h-[500px]">
                    <h1 className="text-4xl font-bold text-center mt-10 mb-5">About Us</h1>
                    <p className="text-lg text-center mb-10">
                        Swiggy is an Indian multinational restaurant aggregator and food delivery startup. It was founded in 2014 by two IIT Madras graduates, Nagaraj Kashyap and Sriharsha Majety.
                    </p>
                    <h4 className="text-2xl font-bold text-center mb-5">This website is made by Amit Kumar Saini </h4>
                    <p className="text-lg text-center mb-10 w-[70%] mx-auto">
                        This is a simple website created to demonstrate the use of React and Tailwind CSS. You can find more about me on my LinkedIn profile below.
                    </p>
                    <div className="flex justify-center">
                        <a className="text-2xl text-amber-50 font-bold mb-5  bg-[#0a66c2] p-3 rounded-[15px]" href="https://www.linkedin.com/in/amit-kumar-saini1/"> Linkedin</a>
                    </div>
                </div>
            <Footer />                
        </>
    )
}

export default About;   