import "./Footer.css";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="contact">
        <h3>Contact Us</h3>
        <p>Sri Venkatramana Temple, Udupi District, Katapady – 574105.</p>
        <p>
          <strong>+91 9876543211</strong> |{" "}
          <strong>svtkatapady@gmail.com</strong>
        </p>
      </div>
      <div className="copyright">
        <p>
          Copyright © 2022 Sri Venkatramana Temple Katapady. All rights reserved
        </p>
        <a href="#">Privacy Policy</a> | <a href="#">Cookie Policy</a> |{" "}
        <a href="#">Disclaimer</a> |
      </div>
    </div>
  );
};
