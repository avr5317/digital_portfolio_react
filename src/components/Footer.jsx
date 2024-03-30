import React from "react";
import logo from "../assets/logo.png";
import {
  AiFillCaretUp,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logo} alt="profile-photo" />

        <h2>Vinaya Rekha</h2>
        <p>Do your best!!!.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://github.com/avr5317" target={"blank"}>
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/vinaya-rekha-a-12985b184/?originalSubdomain=in"
            target={"blank"}
          >
            <AiFillLinkedin />
          </a>
          <a href="https://vercel.com/vinaya-rekhas-projects" target={"blank"}>
            <AiFillCaretUp />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
