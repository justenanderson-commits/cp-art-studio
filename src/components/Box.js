import React from 'react'
import sofia from '../assets/sofia.jpg'
import dam from '../assets/denver_art_museum_group.jpg'

const Box = () => {
  return (
    <section className="bg-white lg:mt-20 w-9/12 h-[1123px]">
      {/* <div className="relative w-[1144px] h-[1123px] top-0 left-0"> */}
      <div className="relative w-full h-full bg-sage">
        <p className="absolute w-[353px] top-[741px] left-[741px] [font-family:'Inter-Bold',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[normal]">
          <span className="font-bold">
            Art Lessons for:
            <br />
          </span>
          <ul className="list-disc list-inside font-family['Inter-Regular', Helvetica] text-base sm:text-lg md:text-xl lg:text-2xl">
            <li>All Ages</li>
            <li>Private Lessons</li>
            <li>After School</li>
            <li>Home School</li>
            <li>Birthday Parties</li>
            <li>Art Therapy</li>
            <li>Meeting Special Needs</li>
          </ul>
        </p>
        <p className="absolute w-[518px] top-[34px] left-[90px] [font-family:'Inter-Bold',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[normal]">
          <span className="font-bold py-2">
            Diverse Offerings Include:
            <br />
          </span>
          <ul className="list-disc list-inside m-4 font-family['Inter-Regular', Helvetica] text-base sm:text-lg md:text-xl lg:text-2xl">
            <li>Ceramics/Pottery</li>
            <li>On-Site Ceramics Lab</li>
            <li>Total ceramic sculpting process <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(not prefabricated)</li>
            <li>Papier-Mache</li>
            <li>Mixed Media</li>
            <li>Metal Tooling</li>
            <li>Paper Making</li>
            <li>Plaster</li>
            <li>Painting - All Types</li>
            <li>Drawing</li>
            <li>Print Making</li>
            <li>Plein Air Experiences</li>
            <li>Museum Tours</li>
            <li>Batik</li>
            <li>And More!</li>
          </ul>
        </p>
        <img
          className="absolute w-[464px] h-[599px] top-[45px] left-[629px] object-cover"
          alt="Student with skull and flowers painting"
          src={sofia}
        />
        <img
          className="absolute w-[606px] h-[338px] top-[749px] left-[34px]"
          alt="Art group at the Denver art museum"
          src={dam}
        />
        {/* </div> */}
      </div>
    </section>
  )
}

export default Box
