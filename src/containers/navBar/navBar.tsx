import * as React from "react";
import styles from "./navBar.module.scss";

export interface IProps {}

export interface IState {}

class NavBar extends React.Component<IProps, IState> {
  // state = { :  }
  render() {
    return (
      <section className={styles.navBar}>
        <div>Greek Gods</div>
        <div>Quiz</div>
        <div className={styles.lastDiv}>Sign in</div>
      </section>
    );
  }
}

export default NavBar;
