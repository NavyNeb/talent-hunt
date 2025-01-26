import EmblaCarousel from '../molecules/Carousel/EmblaCarousel'
import Rectangle from '/TalentsBg.png'

const TalentsTrending = () => {
  return (
    <div className='px-[2rem] rounded-4xl overflow-clip' >
      <div className='object-contain rounded-[42px] px-[1.5rem] py-[2.5rem]' style={{ backgroundImage: `url(${Rectangle})`,  }} >
        <EmblaCarousel />
      </div>
    </div>
  )
}

export default TalentsTrending
