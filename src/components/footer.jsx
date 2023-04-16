import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="imgFooter">
          <img
            src="/programador.jpg"
            alt=""
            width={90}
            height={90}
            className="rounded-circle"
          />
        </div>
        <div className="contact">
          <h2>Interested in hiring me for your project?</h2>
          <p>
            Looking for an experienced frontend developer to build your web app
            or ship your software product? To start an initial chat, just drop
            me an email at <a href="">robinlaor@gmail.com</a> or use the
            <a href="/contact">form on the contact page</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
