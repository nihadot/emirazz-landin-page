import imag from "../../assets/images/emiraaz white.png"
type Props = {}

function SplashScreen({}: Props) {
  return (
    <div className='flex justify-center items-center h-screen'>
        <img className='md:w-[500px] md:h-full w-60 h-24 object-contain' src={imag} />
    </div>
  )
}

export default SplashScreen