import * as React from "react";
import styles from "./greekGod.module.scss";
import { IGreekGodData } from "../../data/data";

export interface IProps {
  greekGod: IGreekGodData;
}

export interface IState {}

class GreekGod extends React.Component<IProps, IState> {
  // state = { :  }
  render() {
    return (
      <article className={styles.godArticles}>
        <h2>{this.props.greekGod.name}</h2>
        <div>{this.props.greekGod.info}</div>
      </article>
    );
  }
}

export default GreekGod;
