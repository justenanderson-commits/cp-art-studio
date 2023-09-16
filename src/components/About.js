import connieAndSherman from '../assets/c_and_sherm 1.png'
import connieAndDaughter from '../assets/c_and_m 1.png'
import canyon from '../assets/m_sherm_canyon 1.png'

const About = () => {
  return (
    <div className="bg-black flex flex-col items-center justify-center w-full">
      <div className="bg-black overflow-hidden relative">
        <div className="[font-family:'Playfair_Display-Regular',Helvetica] font-normal text-white text-5xl lg:text-6xl md:text-4xl text-center my-8">
          About
          <div className="flex justify-center lg:mt-4">
            <img
              className="w-full lg:w-3/4 lg:h-[490px] md:w-5/6 md:h-[424px] object-cover mt-4"
              alt="M sherm canyon"
              src={canyon}
            />
          </div>
        </div>
        <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-white text-xl lg:text-2xl md:text-lg text-left mx-6 lg:mx-44">
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
      </div>
        <div className="lg:flex lg:justify-center md:flex md:justify-center">
          <img
            className="w-full lg:w-4/12 md:w-2/5 object-cover mt-4 md:mx-4 lg:m-8 lg:mx-12"
            alt="C and sherm"
            src={connieAndSherman}
          />
          <img
            className="w-full lg:w-4/12 md:w-2/5 object-cover mt-4 md:mx-4 lg:m-8 lg:mx-12"
            alt="C and m"
            src={connieAndDaughter}
          />
        </div>
    </div>
  )
}

export default About
