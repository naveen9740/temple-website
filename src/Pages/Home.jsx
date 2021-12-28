import {
  Navbar,
  Banner,
  Info,
  Programs,
  FestivalsCel,
  Footer,
} from "../Components";
import { festivalCelb, infoAboutTemple } from "../data";

export const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Navbar />
      <Banner />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          backgroundColor: "#fdefe3",
          paddingBottom: "30px",
        }}
      >
        {infoAboutTemple.map(({ name, desc }) => {
          return <Info key={name} name={name} desc={desc} />;
        })}
      </div>
      <Programs />
      <div style={{ textAlign: "center" }}>
        <h1>Festivals Celebrated</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {festivalCelb.map(({ name, desc }) => {
            return <FestivalsCel name={name} desc={desc} key={name} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};
