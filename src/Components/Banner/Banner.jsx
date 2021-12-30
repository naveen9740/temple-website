import "./Banner.css";
import { Images } from "../../data";
import { useEffect, useState } from "react";
export const Banner = () => {
  let [img, setImg] = useState(0);
  setTimeout(() => {
    setImg(img >= 4 ? 0 : img + 1);
  }, 6000);
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
      <img
        style={{ display: "none" }}
        src="https://i.ibb.co/9whQZkS/templwm.jpg"
        alt="templ1"
      />
      <img
        style={{ display: "none" }}
        src="https://i.ibb.co/cJh6dPJ/templ6.jpg"
        alt="templ2"
      />
      <img
        style={{ display: "none" }}
        src="https://i.ibb.co/jZVMSnF/templ3.jpg"
        alt="templ3"
      />
      <img
        style={{ display: "none" }}
        src="https://i.ibb.co/9wWCYvm/temp2.jpg"
        alt="templ4"
      />
    </div>
  );
};
