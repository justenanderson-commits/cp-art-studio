import arrow from '../assets/arrow.svg'
import owlPainting from '../assets/painting_owl_and_cactus.png'

const TestimonialsSmall = () => {
  return (
    <div className="relative w-[1073px] h-[952px]">
      <div className="absolute -top-px left-[317px] [font-family:'Playfair_Display-Regular',Helvetica] font-normal text-white text-[76.6px] text-center tracking-[0] leading-[normal]">
        Testimonials
      </div>
      <div className="absolute w-[269px] h-[73px] top-[879px] left-[402px]">
        <div className="absolute top-[23px] left-[16px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[20.5px] text-right tracking-[0] leading-[normal]">
          Read More Testimonials
        </div>
        <div className="absolute w-[269px] h-[73px] top-0 left-0 border-[1.28px] border-solid border-white" />
      </div>
      <div className="absolute w-[723px] h-[292px] top-[193px] left-0">
        <div className="absolute w-[405px] h-[291px] top-0 left-[308px] bg-[#181818]" />
        <div className="absolute w-[393px] top-[19px] left-[330px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[41.4px] tracking-[0] leading-[42.1px]">
          Knowledge, professionalism, and wisdom
        </div>
        <p className="absolute w-[273px] top-[159px] left-[332px] [font-family:'Inter-Light',Helvetica] font-light text-white text-[14.1px] tracking-[0] leading-[normal]">
          “My three grown daughters loved their years of weekly art classes at
          Connie&#39;s studio, where Connie brings her knowledge,
          professionalism, and wisdom to her mixed-age classes while...”
        </p>
        <div className="absolute top-[255px] left-[331px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[15.1px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
          See full review
        </div>
        <img
          className="w-[30px] top-[256px] left-[445px] absolute h-[20px]"
          alt="arrow"
          src={ arrow }
        />
        <img
          className="absolute w-[313px] h-[292px] top-0 left-0 object-cover"
          alt="Painting owl and"
          src={ owlPainting }
        />
      </div>
      <div className="absolute w-[713px] h-[293px] top-[535px] left-0">
        <div className="absolute w-[405px] h-[291px] top-[2px] left-0 bg-[#181818]" />
        <p className="absolute w-[383px] top-[21px] left-[22px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[41.4px] tracking-[0] leading-[42.1px]">
          She has time for each of us
        </p>
        <p className="absolute w-[273px] top-[134px] left-[22px] [font-family:'Inter-Light',Helvetica] font-light text-white text-[14.1px] tracking-[0] leading-[normal]">
          “Ms. Connie has been my art teacher from kindergarten to now, she has
          taught all of my older siblings and each of us have loved her from the
          beginning. When we found out that she...”
        </p>
        <div className="top-[248px] left-[23px] whitespace-nowrap absolute [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[15.1px] text-right tracking-[0] leading-[normal]">
          See full review
        </div>
        <img
          className="w-[30px] top-[250px] left-[137px] absolute h-[20px]"
          alt="arrow"
          src={ arrow }
        />
        <img
          className="absolute w-[315px] h-[291px] top-0 left-[398px] object-cover"
          alt="Butterfly painting"
          src="butterfly-painting.png"
        />
      </div>
      <div className="absolute w-[308px] h-[632px] top-[193px] left-[765px]">
        <div className="absolute w-[308px] h-[341px] top-[291px] left-0 bg-[#181818]" />
        <p className="absolute w-[280px] top-[337px] left-[17px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[41.4px] tracking-[0] leading-[42.1px]">
          Integral part of my daughter's life
        </p>
        <p className="absolute w-[217px] top-[522px] left-[17px] [font-family:'Inter-Light',Helvetica] font-light text-white text-[14.1px] tracking-[0] leading-[normal]">
          “Connie's Art Studio has been an integral part of my daughter's life
          since she was six years old...”
        </p>
        <div className="w-[116px] top-[586px] left-[6px] absolute [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[15.1px] text-right tracking-[0] leading-[normal]">
          See full review
        </div>
        <img
          className="w-[23px] top-[586px] left-[128px] absolute h-[20px]"
          alt="arrow"
          src={ arrow }
        />
        <img
          className="absolute w-[308px] h-[292px] top-0 left-0 object-cover"
          alt="Garlic art"
          src="garlic-art.png"
        />
      </div>
    </div>
  )
}

export default TestimonialsSmall
