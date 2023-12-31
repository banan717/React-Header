import React from "react";
import styles from "./Menu.module.css";
import { Link, useNavigate } from "react-router-dom";

const Menu = ({ setVisible }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.menuBackground}>
      <div className="container-fluid">
        <nav className="row">
          <div className="col">
            <ul>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                onClick={() => {
                  setVisible(true);
                }}
                style={{ cursor: "pointer" }}
              >
                <path
                  d="M21 6H3"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 12.0703H3"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 18.0703H3"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <li>
                <Link to="/aboutPage">About</Link>
              </li>
              <li>
                <Link to="/features">Features</Link>
              </li>
              <li>
                <Link to="/galery">Galery</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
            </ul>
          </div>

          <div className={`col-auto ${styles.socialMedia}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="24"
              viewBox="0 0 14 24"
              fill="none"
              onClick={() => {
                navigate("/facebook");
              }}
              style={{ cursor: "pointer" }}
            >
              <path
                d="M13 1H9.72727C8.28064 1 6.89325 1.57946 5.87033 2.61091C4.8474 3.64236 4.27273 5.04131 4.27273 6.5V9.8H1V14.2H4.27273V23H8.63636V14.2H11.9091L13 9.8H8.63636V6.5C8.63636 6.20826 8.7513 5.92847 8.95588 5.72218C9.16047 5.51589 9.43795 5.4 9.72727 5.4H13V1Z"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              onClick={() => {
                navigate("/instagram");
              }}
              style={{ cursor: "pointer" }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.76153 1.02393C3.14476 1.02393 1.02344 3.14524 1.02344 5.76202V16.2382C1.02344 18.855 3.14476 20.9763 5.76153 20.9763H16.2377C18.8545 20.9763 20.9758 18.855 20.9758 16.2382V5.76202C20.9758 3.14524 18.8545 1.02393 16.2377 1.02393H5.76153ZM0.0234375 5.76202C0.0234375 2.59296 2.59247 0.0239258 5.76153 0.0239258H16.2377C19.4068 0.0239258 21.9758 2.59296 21.9758 5.76202V16.2382C21.9758 19.4073 19.4068 21.9763 16.2377 21.9763H5.76153C2.59247 21.9763 0.0234375 19.4073 0.0234375 16.2382V5.76202ZM11.5863 7.30404C10.8184 7.19017 10.0342 7.32133 9.34523 7.67884C8.65622 8.03636 8.09748 8.60203 7.74849 9.29539C7.3995 9.98876 7.27802 10.7745 7.40135 11.5409C7.52467 12.3073 7.8865 13.0153 8.43539 13.5642C8.98428 14.113 9.69226 14.4749 10.4586 14.5982C11.225 14.7215 12.0108 14.6 12.7042 14.2511C13.3975 13.9021 13.9632 13.3433 14.3207 12.6543C14.6782 11.9653 14.8094 11.1811 14.6955 10.4133C14.5794 9.63003 14.2144 8.90492 13.6545 8.34503C13.0946 7.78515 12.3695 7.42018 11.5863 7.30404ZM8.88466 6.79122C9.76037 6.33683 10.7571 6.17014 11.733 6.31485C12.7284 6.46247 13.65 6.92633 14.3616 7.63793C15.0732 8.34952 15.5371 9.27112 15.6847 10.2666C15.8294 11.2425 15.6627 12.2392 15.2083 13.1149C14.7539 13.9906 14.035 14.7007 13.1537 15.1443C12.2725 15.5878 11.2738 15.7422 10.2998 15.5855C9.32573 15.4288 8.4259 14.9689 7.72828 14.2713C7.03067 13.5736 6.57078 12.6738 6.41405 11.6998C6.25731 10.7257 6.4117 9.72705 6.85525 8.8458C7.29881 7.96456 8.00895 7.24561 8.88466 6.79122ZM16.7615 4.73821C16.4854 4.73821 16.2615 4.96207 16.2615 5.23821C16.2615 5.51435 16.4854 5.73821 16.7615 5.73821H16.7715C17.0477 5.73821 17.2715 5.51435 17.2715 5.23821C17.2715 4.96207 17.0477 4.73821 16.7715 4.73821H16.7615Z"
                fill="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="24"
              viewBox="0 0 31 24"
              fill="none"
              onClick={() => {
                navigate("/youtube");
              }}
              style={{ cursor: "pointer" }}
            >
              <path
                d="M28.4129 5.13066C28.2617 4.5167 27.9538 3.95417 27.5203 3.49988C27.0868 3.04559 26.543 2.71563 25.9439 2.54334C23.7549 2 14.999 2 14.999 2C14.999 2 6.24312 2 4.05414 2.59508C3.45503 2.76738 2.91126 3.09734 2.47775 3.55163C2.04424 4.00591 1.73635 4.56845 1.58518 5.18241C1.18456 7.44056 0.988597 9.73132 0.999751 12.0259C0.985471 14.3377 1.18145 16.6459 1.58518 18.9211C1.75184 19.516 2.06663 20.0571 2.49913 20.4922C2.93163 20.9273 3.46721 21.2417 4.05414 21.4049C6.24312 22 14.999 22 14.999 22C14.999 22 23.7549 22 25.9439 21.4049C26.543 21.2326 27.0868 20.9027 27.5203 20.4484C27.9538 19.9941 28.2617 19.4316 28.4129 18.8176C28.8104 16.5764 29.0063 14.3031 28.9983 12.0259C29.0126 9.71404 28.8166 7.40582 28.4129 5.13066V5.13066Z"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 16L20 12L12 8V16Z"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className={styles.logo}>
            Site <span>Logo</span>
          </h2>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
