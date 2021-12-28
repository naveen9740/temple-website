import "./info.css";
export const Info = ({ name, desc }) => {
  return (
    <div className="info">
      <img
        className="info-img"
        src="https://www.svtkarkala.com/wp-content/uploads/2018/11/karkala-temple-festivels-icon.png"
        alt="logo"
      />
      <h3>{name}</h3>
      <p>{desc}</p>
      <button>Read More</button>
    </div>
  );
};
