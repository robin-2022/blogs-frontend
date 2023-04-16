import Footer from "@/src/components/footer";
import Container from "../components/container";
import Image from "next/image";
import Link from "next/link";
const Index = () => {
  return (
    <Container>
      <header className="header">
        <div className="img">
          <Image
            src="/programador.jpg"
            alt=""
            width={150}
            height={150}
            className="rounded-circle"
          />
        </div>
        <div className="p">
          <h1>Robin&apos;s blog </h1>
          <p>
            I am a systems engineering student and this is my blog. <br /> You
            can follow me via the various channels below:
          </p>
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
      </header>
      <div className="post">
        <div>
          <Image src="/next.png" alt="" width={700} height={300} />
        </div>
        <div className="text">
          <h2>Next.js vs React</h2>
          <p>
            Next.js and React are two of the most popular front-end web
            development frameworks. And the debate between Next.js vs React has
            been around for a while. In short, to understand next.js vs react,
            Next.js is a simplified development environment built on top of
            React...
          </p>
          <button type="button" class="btn btn-primary">
            Read more
          </button>
        </div>
      </div>
      <div className="card-grid">
        <div className="card">
          <Image src="/card1.jpg" alt="" width={400} height={150} />
          <h2>The create react-app dead</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            dignissimos in possimus suscipit eveniet. Voluptates, voluptas
            aperiam autem iusto tempora, vero non officiis sequi ipsam veniam
            architecto deserunt ea voluptatem.
          </p>
          <div className="date">
            <div className="clock">
              <i class="bi bi-clock"></i> April 18,2023
            </div>
            <div>
              <i class="bi bi-chat-dots"></i>
              <Link className="comments" href="/">
                12 comments
              </Link>
            </div>
          </div>
        </div>
        <div className="card">
          <Image src="/card2.jpg" alt="" width={400} height={150} />
          <h2>React Components</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            obcaecati magnam alias incidunt, iste doloribus a. Eveniet, iure.
            Non harum asperiores mollitia dignissimos fuga recusandae cum
            tenetur veritatis ea nulla!
          </p>
          <div className="date">
            <div className="clock">
              <i class="bi bi-clock"></i> April 18,2023
            </div>
            <div>
              <i class="bi bi-chat-dots"></i>
              <Link className="comments" href="/">
                12 comments
              </Link>
            </div>
          </div>
        </div>
        <div className="card">
          <Image src="/card3.jpg" alt="" width={400} height={150} />
          <h2>Best Practices for Code Review</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
            doloremque dolorum fugiat similique velit, laudantium quae enim nemo
            et error reprehenderit cumque esse voluptatem vero molestias
            repudiandae ducimus pariatur? Fugit!
          </p>
          <div className="date">
            <div className="clock">
              <i class="bi bi-clock"></i> April 18,2023
            </div>
            <div>
              <i class="bi bi-chat-dots"></i>
              <Link className="comments" href="/">
                12 comments
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="card-grid">
        <div className="card">
          <Image src="/card1.jpg" alt="" width={400} height={150} />
          <h2>The create react-app dead</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            dignissimos in possimus suscipit eveniet. Voluptates, voluptas
            aperiam autem iusto tempora, vero non officiis sequi ipsam veniam
            architecto deserunt ea voluptatem.
          </p>
          <div className="date">
            <div className="clock">
              <i class="bi bi-clock"></i> April 18,2023
            </div>
            <div>
              <i class="bi bi-chat-dots"></i>
              <Link className="comments" href="/">
                12 comments
              </Link>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="/card2.jpg" alt="" width={400} height={150} />
          <h2>React Components</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            obcaecati magnam alias incidunt, iste doloribus a. Eveniet, iure.
            Non harum asperiores mollitia dignissimos fuga recusandae cum
            tenetur veritatis ea nulla!
          </p>
          <div className="date">
            <div className="clock">
              <i class="bi bi-clock"></i> April 18,2023
            </div>
            <div>
              <i class="bi bi-chat-dots"></i>
              <Link className="comments" href="/">
                12 comments
              </Link>
            </div>
          </div>
        </div>
        <div className="card">
          <Image src="/card3.jpg" alt="" width={400} height={150} />
          <h2>Best Practices for Code Review</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
            doloremque dolorum fugiat similique velit, laudantium quae enim nemo
            et error reprehenderit cumque esse voluptatem vero molestias
            repudiandae ducimus pariatur? Fugit!
          </p>
          <div className="date">
            <div className="clock">
              <i class="bi bi-clock"></i> April 18,2023
            </div>
            <div>
              <i class="bi bi-chat-dots"></i>
              <Link className="comments" href="/">
                12 comments
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Index;
