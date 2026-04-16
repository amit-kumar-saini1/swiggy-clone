function Header() {
  return (
    <div>
    <div className="max-w-253 max-h-13.5 mx-auto flex py-15 items-center">
        <div className="basis-1/3">
            <a href="#" className="h-full w-full block">
              <img className="h-12 w-40 object-contain" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" alt="" />
            </a>
        </div>
          <div className="basis-2/3 flex items-center justify-between">
            <a className="text-cyan-50 font-Gilroy "  href="">Swiggy Corporate</a>
            <a  className="text-cyan-50 font-Gilroy" href="">Partner with us</a>
            <a className="border-2 border-white text-cyan-50 border-solid py-3 px-4 rounded-[15px]" href="">Get the App</a>
            <a className="border-2 border-black border-solid py-3 px-12 rounded-[15px] text-cyan-50 bg-black" href="">Sign in</a>
        </div>
    </div>
    </div>
  )
}
export default Header