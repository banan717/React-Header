import React from "react";
import styles from "./search.module.css";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.search}>
      <div className={styles.box}>
        <input type="text" placeholder="Search the musicials" />
        <button
          className={styles.my_button}
          onClick={() => {
            navigate("/video");
          }}
        >
          Watch now
        </button>
      </div>
    </div>
  );
};

export default Search;
