import Head from "next/head";
import Link from "next/link";
import { Grid } from "@material-ui/core";
import Sidebar from "../components/Sidebar";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Rick and Morty</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
      </Head>

      <Grid container xs={12} max-width="120vh">
        <Grid item xs={12}>
          <Link href="/">
            <a>
              <img
                className="logo"
                src="/rick-and-morty.svg"
                alt="logo"
                width="90%"
                height="80vh"
              />
            </a>
          </Link>
        </Grid>

        <Grid item xs={2}>
          <Sidebar />
        </Grid>

        {children}
      </Grid>

      <footer className="footer">&copy; 2020 Pablo Di Marco</footer>

      <style jsx>
        {`
          .footer {
            font-size: 20px;
            color: #01c5c4;
            width: 100%;
            position: fixed;
            left: 0;
            bottom: 0;
            padding: 10px;
            text-align: center;
            background-color: white;
          }
          .logo {
            padding: 5px;
          }
        `}
      </style>

      <style jsx global>{`
        body {
          font-family: "Ubuntu", sans-serif;
          overflow-x: hidden;
        }
      `}</style>
    </>
  );
};

export default Layout;
