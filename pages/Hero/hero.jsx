import Image from 'next/image';
import images from '../../constants/images';

const Hero = () => {
  return (
    <div className="min-h-screen py-24  w-full">
        <div className="flex flex-col justify-around items-center text-center min-h-screen">
            <div className='w-4/5  md:w-3/4 mb-14'>
                <h2 className='text-5xl font-bold text-[var(--text-color-primary)] md:leading-relaxed md:text-6xl pb-5 '>Make You Dream <br/> Business Goal Come True</h2>
                <p className='text-lg text-[#464646] md:text-xl pb-5'>when you need us for improve your business,<br/>
                 then come with us to help your business have reach it,
                you just sit and feel that goal</p>
                <button className='bg-[var(--main-color)] hover:bg-[var(--main-second-color)] text-white px-7 shadow-2xl py-3 rounded-3xl'>Start Project</button>
            </div>
            <div className='flex justify-center items-center flex-col relative'>
              <div className='absolute -top-3 left-1/3'>
                <Image 
                src={images.groopBlueCircle}
                width={100}
                height={100}
                />
              </div>
              <Image 
              src={images.blueCircle}
              width={50}
              height={50}
              className='absolute top-1 right-0'
              />
            <div className='relative flex justify-center items-center'>
                <div className='absolute top-0 right-3/4 z-20 bg-white rounded-2xl p-2 shadow-2xl '>
                  <p className='text-xs md:text-sm text-[var(--text-color-primary)]'>⭐ GREAT PROJECT</p>
                  
                  <h3 className='text-lg md:text-xl font-bold'>+ Done</h3>
                </div>
                <div className=' absolute -bottom-1/4  left-1/2 md:left-3/4 z-20 bg-white rounded-2xl p-2 shadow-2xl '>
                  <div className='flex p-2 '>
                    <Image 
                    src={images.bill}
                    className='object-contain'
                    />
                    <div className='ml-2' > 
                      <h3 className='text-sm'>Rachid Mohamed</h3>
                      <p className='text-[var(--text-color-primary)] text-xs'>CEO Jar Bricola</p>
                    </div>
                  </div>
                  <p className='md:text-sm text-xs' >
                  “ This team is really the best in its field,I don't regret working with them, and will come back again thanks “
                  </p>
                </div>
              <Image
              src={images.HeroImg}
              className='pointer-events-none rounded-2xl w-4/5 md:w-3/5  z-10'
              />
              <Image 
              src={images.redCircle}
              width={50}
              height={50}
              className='absolute top-1/3 left-0 md:left-28 '
              />
              </div>
              <div>
               <Image 
                src={images.groopRedCircle}
                width={100}
                height={100}
                className='absolute -bottom-3 right-1/3'
                />
              </div>
              
            </div>
        </div>
    </div>
  )
}

export default Hero;