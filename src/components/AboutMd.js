import connieAndSherman from '../assets/c_and_sherm 1.png'
import connieAndDaughter from '../assets/c_and_m 1.png'
import canyon from '../assets/m_sherm_canyon 1.png'

const About = () => {
  return (
    <div className="bg-black flex flex-row justify-center w-full">
      <div className="bg-black w-[834px] h-[2121px] relative">
        <div className="absolute top-[11px] left-[308px] [font-family:'Playfair_Display-Regular',Helvetica] font-normal text-white text-[81px] tracking-[0] leading-[normal]">
          About
        </div>
        <img
          className="absolute w-[834px] h-[490px] top-[142px] left-0 object-cover"
          alt="M sherm canyon"
          src="m-sherm-canyon-1.png"
        />
        <p className="absolute w-[724px] top-[672px] left-[55px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[31.9px] tracking-[0] leading-[normal]">
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
          className="absolute w-[518px] h-[330px] top-[1377px] left-[158px] object-cover"
          alt="C and m"
          src="c-and-m-1.png"
        />
        <img
          className="absolute w-[518px] h-[330px] top-[1759px] left-[150px] object-cover"
          alt="C and sherm"
          src="c-and-sherm-1.png"
        />
      </div>
    </div>
  )
}
