import arrow from '../assets/arrow.svg';
import owlPainting from '../assets/painting_owl_and_cactus.png';
import butterflyPainting from '../assets/butterfly_painting.png';
import garlicArt from '../assets/garlic_art.png';

const TestimonialsSmall = () => {
  return (
    <div className="relative w-full">
      {/* Testimonials Container */}
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row w-full">
        {/* Left Section */}
        <div className="flex flex-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2">
          <div className="bg-[#181818] p-4 rounded-lg mb-4">
            <div className="font-semibold text-white text-lg md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-2xl mb-2">
              Knowledge, professionalism, and wisdom
            </div>
            <p className="font-light text-white text-sm md:text-base lg:text-base xl:text-lg 2xl:text-base">
              "My three grown daughters loved their years of weekly art classes at
              Connie's studio, where Connie brings her knowledge, professionalism,
              and wisdom to her mixed-age classes while..."
            </p>
          </div>
          <div className="font-medium text-white text-sm md:text-base lg:text-base xl:text-lg 2xl:text-base text-right">
            See full review
            <img
              className="w-4 ml-1 inline-block"
              alt="arrow"
              src={arrow}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2">
          <img
            className="w-full h-auto md:h-[292px] lg:h-[292px] xl:h-[292px] 2xl:h-[292px] object-cover"
            alt="artist painting owl and cactus"
            src={owlPainting}
          />
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row w-full my-4">
        {/* Left Section */}
        <div className="flex flex-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2">
          <div className="bg-[#181818] p-4 rounded-lg mb-4">
            <div className="font-semibold text-white text-lg md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-2xl mb-2">
              She has time for each of us
            </div>
            <p className="font-light text-white text-sm md:text-base lg:text-base xl:text-lg 2xl:text-base">
              "Ms. Connie has been my art teacher from kindergarten to now, she
              has taught all of my older siblings and each of us have loved her
              from the beginning. When we found out that she..."
            </p>
          </div>
          <div className="font-medium text-white text-sm md:text-base lg:text-base xl:text-lg 2xl:text-base text-right">
            See full review
            <img
              className="w-4 ml-1 inline-block"
              alt="arrow"
              src={arrow}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2">
          <img
            className="w-full h-auto md:h-[292px] lg:h-[292px] xl:h-[292px] 2xl:h-[292px] object-cover"
            alt="Butterfly painting"
            src={butterflyPainting}
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row w-full">
        {/* Left Section */}
        <div className="flex flex-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2">
          <div className="bg-[#181818] p-4 rounded-lg mb-4">
            <div className="font-semibold text-white text-lg md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-2xl mb-2">
              Integral part of my daughter's life
            </div>
            <p className="font-light text-white text-sm md:text-base lg:text-base xl:text-lg 2xl:text-base">
              "Connie's Art Studio has been an integral part of my daughter's
              life since she was six years old..."
            </p>
          </div>
          <div className="font-medium text-white text-sm md:text-base lg:text-base xl:text-lg 2xl:text-base text-right">
            See full review
            <img
              className="w-4 ml-1 inline-block"
              alt="arrow"
              src={arrow}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2">
          <img
            className="w-full h-auto md:h-[292px] lg:h-[292px] xl:h-[292px] 2xl:h-[292px] object-cover"
            alt="Garlic art"
            src={garlicArt}
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSmall;
