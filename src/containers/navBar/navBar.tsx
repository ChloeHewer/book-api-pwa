import * as React from "react";
import styles from "./navBar.module.scss";
import logo from "../../images/logo_transparent.png";

export interface IProps { }

export interface IState { }

class NavBar extends React.Component<IProps, IState> {
  // state = { :  }
  render() {
    return (
      <section className={styles.navBar}>
        <span className={styles.logoFrame}>
          <div className={styles.imgFrame}>
            <img src={logo} alt="Logo" />
          </div>
          <p className={styles.text}>Find a book you're interested in today</p>
        </span>
        <span className={styles.searchFrame}>
          <input type="search" placeholder="search for books..." />
          <div>Search</div>
        </span>
      </section>
    );
  }
}

export default NavBar;
