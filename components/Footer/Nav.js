import Link from "next/Link";

const Nav = () => {
  return (
    <>
      <style global jsx>{`
        html {
          width: 100%;
          height: 100%;
          background-color: #28282b;
        }
      `}</style>
      <style jsx>{`
        nav {
          background-color: orange;
          width: 40%;
          text-align: center;
          border-radius: 25px;
          height: 70px;
          margin-left: 480px;
          padding: 5px;
          padding-bottom: 0px;
        }

        a:hover {
          background-color: #28282b;
          color: lightGray;
        }

        a {
          display: inline-block;
          padding: 15px;
          font-size: 25px;
          font-family: Garamond;
          color: #28282b;
          border: 6px solid orange;
          border-radius: 36px;
          text-decoration: none;
          height: 30%;
        }

        nav:hover {
          outline-offset: -5px;
          outline: 4px solid lightGray;
        }
      `}</style>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>

        <Link href="/about">
          <a>About</a>
        </Link>

        <Link href="/contact">
          <a>Contact</a>
        </Link>

        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </nav>
      <br />
    </>
  );
};

export default Nav;
