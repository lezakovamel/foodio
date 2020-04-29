import React, { useRef, useEffect } from "react";
import BaseTemplate from "../templates/BaseTemplate";

import FoodioIntro from "../organisms/FoodioIntro";
import CardSection from "../organisms/CardSection";

const MainPage = () => {
  const sectionRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", onScrollChanged);
  }, []);

  const onExploreFoodClicked = () => {
    {
      if (sectionRef.current) {
        window.scrollTo({
          behavior: "smooth",
          top: sectionRef.current.offsetTop,
        });
      }
    }
  };

  const onScrollChanged = (event) => {
    if (window.scrollY >= window.innerHeight) {
      titleRef.current.style.visibility = "visible";
      titleRef.current.style.opacity = "1";
    }
    if (window.scrollY <= window.innerHeight) {
      titleRef.current.style.visibility = "hidden";
      titleRef.current.style.opacity = "0";
    }
  };

  const onAccountClicked = () => {};

  return (
    <BaseTemplate
      title="Foodio"
      onAccountClicked={onAccountClicked}
      titleRef={titleRef}
    >
      <FoodioIntro onExploreClick={onExploreFoodClicked} />
      <CardSection reference={sectionRef} />
    </BaseTemplate>
  );
};

export default MainPage;
