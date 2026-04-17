import { Link } from "react-router-dom";

function Header({photo,color="text-cyan-50"}) {
  return (
    <div>
    <div className="max-w-253 max-h-13.5 mx-auto flex py-15 items-center">
        <div className="basis-1/3">
            <a href="#" className="h-full w-full block">
              <img className="h-12 w-40 object-contain" src={photo} alt="" />
            </a>
        </div>
          <div className="basis-2/3 flex items-center justify-between">
            <Link className={` ${color} font-bold`}  to="/about">Swiggy Corporate</Link>
            <Link  className={` ${color} font-bold`} to="/about">Partner with us</Link>
            <Link className={`border-2 border-white ${color} border-solid font-bold py-3 px-4 rounded-[15px]`} to="/about">About Us</Link>
            <Link className="border-2 border-black border-solid py-3 px-12 rounded-[15px] text-cyan-50 bg-black" to="/about">Sign in</Link>
        </div>
    </div>
    </div>
  )
}
export default Header