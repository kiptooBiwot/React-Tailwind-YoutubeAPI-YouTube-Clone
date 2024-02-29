import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import { Link } from 'react-router-dom'

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex justify-between bg-white">
      <div className="flex items-center gap-5">
        <img
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
          src={menu_icon}
          alt=""
          className="w-[22px] mr-[25px] hidden md:block"
        />
        <Link to={'/'}>
          <img src={logo} alt="" className="w-[90px] md:w-[130px]" />
        </Link>
      </div>
      <div className="relative text-gray-600 focus-within:text-gray-400">
        <input
          type="search"
          className="py-[6px] text-sm md:w-[450px] rounded-[25px] pr-10 pl-3 focus:outline-red-500 focus:bg-white focus:text-gray-900"
          placeholder="Search..."
          autoComplete="off"
        />
        <span className="absolute inset-y-0 right-0 flex items-center pr-2">
          <img src={search_icon} alt="" className=" w-5" />
        </span>
      </div>
      <div className="flex items-center gap-5">
        <img src={upload_icon} alt="" className="w-[25px] hidden md:block" />
        <img src={more_icon} alt="" className="w-[25px] hidden md:block" />
        <img
          src={notification_icon}
          alt=""
          className="w-[25px] hidden md:block"
        />
        <img src={profile_icon} alt="" className="w-[35px] rounded-full" />
      </div>
    </nav>
  )
}
export default Navbar
