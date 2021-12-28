import "./Banner.css";
import { Images } from "../../data";
import { useState } from "react";
export const Banner = () => {
  let [img, setImg] = useState(0);
  setTimeout(() => {
    setImg(img >= 4 ? 0 : img + 1);
  }, 6000);
  console.log(img);
  return (
    <div className="banner">
      <img
        style={{
          backgroundImage: `url(` + `${Images[img]}` + `)`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
        alt=""
      />
    </div>
  );
};
