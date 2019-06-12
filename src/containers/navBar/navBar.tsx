import * as React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navBar.module.scss";

export interface IProps {}

export interface IState {}

class NavBar extends React.Component<IProps, IState> {
  // state = { :  }
  render() {
    return (
      <section className={styles.navBar}>
        <NavLink className={styles.div} to={"/greekGods"}>
          <div>Greek Gods</div>
        </NavLink>
        <NavLink className={styles.div} to={"/quiz"}>
          <div>Quiz</div>
        </NavLink>
        <NavLink className={`${styles.div} ${styles.lastDiv}`} to={"/"}>
          <div>Sign Out</div>
        </NavLink>
      </section>
    );
  }
}

export default NavBar;
