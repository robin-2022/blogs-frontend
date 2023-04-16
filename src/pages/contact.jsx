import Container from "../components/container";
import Link from "next/link";
const Contact = () => {
  return (
    <Container>
      <div className="contactHeader">
        <h1>Contact</h1>
      </div>
      <div className="img2">
        <img
          src="/programador.jpg"
          alt=""
          width={100}
          height={100}
          className="rounded-circle mx-auto d-block"
        />
        <div className="cardMe">
          <p>
            I'm currently taking on freelance work. If you are interested in
            hiring me for your project please use the form below to get in
            touch. Want to know how I work and what I can offer? Check out my
            project case studies and resume. <br />
          </p>
          <h2>You can also find me on the following channels</h2>
          <Link href="/">
            <i className="bi bi-whatsapp"></i>
          </Link>
          <Link href="/">
            <i className="bi bi-facebook"></i>
          </Link>
          <Link href="/">
            <i className="bi bi-github"></i>
          </Link>
        </div>
        <form className="form">
          <h1>Get In Touch</h1>
          <div className="input_container">
            <div className="input_div">
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
              />
            </div>
            <div className="input_div2">
              <input type="text" className="form-control" placeholder="Email" />
            </div>
          </div>
          <textarea
            className="textarea"
            cols="85"
            rows="14"
            placeholder="Enter your message"
          ></textarea>
          <button type="button" class="btn btn-primary">
            {" "}
            Send It
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Contact;
