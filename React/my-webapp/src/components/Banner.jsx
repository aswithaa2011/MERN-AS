
// import banner from '../assets/images/bnnr.avif'
import img1 from '../assets/images/default.avif'
import img2 from '../assets/images/bn1.avif'
import img3 from '../assets/images/bn2.avif'

const BannerImg=[{image:img1},
    {image:img2},
    {image:img3}
]

const Banner = () => {
  return (
  <>
 <div className='max-w-7xl mx-auto px-6 mt-10'>
        <div className='flex gap-5'>
          {BannerImg.map((e, i) => (
            <div
              key={i}
              className='flex-1 rounded-xl overflow-hidden shadow-md'
            >
              <img
                src={e.image}
                alt=""
                className="w-full h-[350px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
  </>
  )
}

export default Banner
