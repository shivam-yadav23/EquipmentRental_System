import { Images } from "../../assets/assets"
import { Link } from "react-router-dom"
const Banner = () => {
  return (
    <div className='relative'>
        <img src={Images.Main_Banner} alt='banner' className='w-full hidden md:block'/>
        
        
        <div className='absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24'>
        
        <div className='flex items-center ml-120 mt-10 text-xl'>
            <Link to={"/equipments"} className='group hidden md:flex text-primary items-center gap-2 px-7 md:px-9 py-3 cursor-pointer'>
            Explore Now 
            <img className='transition group-hover:translate-x-1' src={Images.black_arrow_icon} alt='arrow' /> 
            </Link>
        </div>
        </div>

    </div>
  )
}

export default Banner