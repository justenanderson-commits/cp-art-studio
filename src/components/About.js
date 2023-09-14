import connieAndSherman from '../assets/c_and_sherm 1.png'
import connieAndDaughter from '../assets/c_and_m 1.png'
import canyon from '../assets/m_sherm_canyon 1.png'

const About = () => {
  return (
    <div className="bg-black flex flex-row justify-center w-full">
      <div className="bg-black overflow-hidden w-[1506px] h-[1676px] relative">
        <div className="absolute top-[84px] left-[639px] [font-family:'Playfair_Display-Regular',Helvetica] font-normal text-white text-[81px] tracking-[0] leading-[normal]">
          About
        </div>
        <p className="absolute w-[1140px] top-[779px] left-[186px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[31.9px] tracking-[0] leading-[normal]">
          Connie is a Colorado native, her love of nature and vast wilderness
          adventures contribute greatly to her own artistry. If she&#39;s not en
          plein air painting in her Monet-style garden or enjoying the serenity
          of a mountain trail, she&#39;s found teaching, giving of her passion
          for visual art through her privately-owned studio. <br />
          <br />
          Her enthusiasm as an innovative and dynamic art educator spans over 25
          years, earning her several prestigious statewide and local awards.
          Connie is a Colorado licensed educator in K- 12 Art and Literacy. She
          holds a BA in Studio Fine Arts and a BA in Communication with an
          emphasis in Leadership. Her excellence in education and artistic
          mastery are clearly evident.
        </p>
        <img
          className="absolute w-[1140px] h-[490px] top-[225px] left-[186px] object-cover"
          alt="M sherm canyon"
          src={canyon}
        />
        <img
          className="absolute w-[518px] h-[330px] top-[1291px] left-[186px] object-cover"
          alt="C and m"
          src={connieAndDaughter}
        />
        <img
          className="absolute w-[518px] h-[330px] top-[1291px] left-[808px] object-cover"
          alt="C and sherm"
          src={connieAndSherman}
        />

        {/* <div className="absolute w-[1506px] h-[72px] top-0 left-[-5px] bg-[#1e1d1d]">
          <div className="left-[385px] absolute top-[22px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#a0bfb5] text-[22px] tracking-[0] leading-[normal]">
            HOME
          </div>
          <div className="left-[509px] absolute top-[22px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#a0bfb5] text-[22px] tracking-[0] leading-[normal]">
            ABOUT
          </div>
          <div className="left-[644px] absolute top-[22px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#a0bfb5] text-[22px] tracking-[0] leading-[normal]">
            TESTIMONIALS
          </div>
          <div className="inline-flex items-start gap-[9.96px] absolute top-[23px] left-[864px]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#a0bfb5] text-[22px] tracking-[0] leading-[normal]">
              GALLERY
            </div>
          </div>
          <div className="absolute top-[22px] left-[1020px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#a0bfb5] text-[22px] tracking-[0] leading-[normal]">
            CONTACT
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default About
