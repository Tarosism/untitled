import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MainCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const dummy = [
    {
      txt: "쓰고싶은 장르의 테마를 선택해 몰입도를 높이세요",
      img: "http://placeimg.com/640/480/any",
    },
    { txt: "asd", img: "http://placeimg.com/640/480/any" },
  ];
  const dummyText = [
    "http://placeimg.com/640/480/any",
    "http://placeimg.com/640/480/any",
  ];

  return (
    <>
      <Slider dots={false} infinite={true} speed={500} slidesToShow={1}>
        {dummy.map((fill) => (
          <img src={fill.img} />
        ))}
      </Slider>
    </>
  );
}
