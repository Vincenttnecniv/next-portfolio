import Nav from "../components/Footer/Nav";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <style jsx>{`
        h1 {
          color: lightGray;
          text-align: center;
          position: fixed;
          left: 22%;
          font-size: 60px;
          padding: 40px;
          padding-top: 30px;
        }

        a:hover {
          color: orange;
        }

        img {
          margin-left: 200px;
          margin-top: 30px;
          padding: 30px;
        }
      `}</style>
      <Head>
        <title>Contact</title>
      </Head>
      <div className="github">
        <Nav />
        <h1>See my Github</h1>
        <a
          href="https://github.com/Vincenttnecniv"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <img
            className="img1"
            src="/static/github.png"
            alt="My Github"
            width="100"
            height="100"
          />
        </a>
        <br />
        <h1>vinny.pgimnasium@gmail.com</h1>
        <a
          href="vinny.pgimnasium@gmail.com"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <img
            className="img1"
            src="/static/email.png"
            alt="My Github"
            width="100"
            height="100"
          />
        </a>
        <br />
        <h1>See my LinkedIn</h1>
        <a
          href="https://www.linkedin.com/in/vincent-v-d-westhuizen/"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <img
            className="img1"
            src="/static/linkedIn.png"
            alt="My Github"
            width="100"
            height="100"
          />
        </a>
      </div>
    </>
  );
};
export default Contact;
