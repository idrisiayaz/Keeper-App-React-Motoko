import { red } from "@material-ui/core/colors";
import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
      <p>
        Created by{" "}
        <a
          href="https://idrisiayaz.github.io/Ayaz-idrisi"
          style={{ color: "grey" }}
        >
          @idrisiayaz
        </a>
      </p>
    </footer>
  );
}

export default Footer;
