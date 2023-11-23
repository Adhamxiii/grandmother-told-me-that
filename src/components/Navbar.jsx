import React from "react";
import { BiArrowBack } from "react-icons/bi";
import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <BiArrowBack className={styles.back} onClick={() => navigate(-1)} />
    </nav>
  );
};

export default Navbar;
