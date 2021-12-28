import "./FestivalsCel.css";
export const FestivalsCel = ({ name, desc }) => {
  return (
    <div className="fc">
      <img
        src="https://www.svtkarkala.com/wp-content/uploads/2018/11/karkala-temple-festivels-icon.png"
        alt=""
      />
      <div>
        <h3>{name}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};
