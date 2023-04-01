import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const Card = ({ elem }) => {
  const [navIcons, setNavIcons] = useState(false);
  const [like, setLike] = useState(false);

  const likeClickHandler = (e) => {
    e.stopPropagation();
    like === false ? setLike(true) : setLike(false);
  };

  return (
    <Link to={`/placedetails/${elem.id}`} target="_blank">
      <div
        className="h-[25rem] w-[90vw] flex flex-col bg-white cursor-pointer relative sm:w-[18rem] sm:h-[26rem]"
        id={elem.id}
        onMouseOver={() => {
          setNavIcons(true);
        }}
        onMouseOut={() => {
          setNavIcons(false);
        }}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          loop={true}
          mousewheel={true}
          cssMode={true}
          pagination={navIcons}
          navigation={navIcons}
          modules={[Pagination, Navigation]}
          className=" bg-white h-[23rem] w-full p-0 sm:h-[18rem]"
        >
          {elem.imgSrc.map((src, i) => (
            <SwiperSlide key={i}>
              <img
                src={src}
                alt="card"
                className="w-full h-full rounded-2xl m-0"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Icons [Heart*/}
        <div className="absolute right-0 p-4 z-10">
          <AiFillHeart
            className={
              !like ? "text-2xl text-gray-700" : "text-2xl text-mainColor"
            }
            onClick={likeClickHandler}
          />
        </div>
        {/* ******************************************************** */}
        <div className="flex items-center justify-between py-1">
          <span className="text-sm font-semibold sm:text-sm lg:text-lg">
            {elem.location}
          </span>
          <span className="flex gap-2 items-center text-gray-700 text-xs sm:text-base">
            <BsFillStarFill />
            {elem.rating}
          </span>
        </div>
        <span className="text-xs sm:text-base text-gray-500">
          {elem.distance}
        </span>
        <span className="text-xs sm:text-base text-gray-500">{elem.date}</span>
        <span className="font-semibold text-black">
          {elem.price}
          <span className="font-normal"> night</span>
        </span>
      </div>
    </Link>
  );
};

export default Card;
