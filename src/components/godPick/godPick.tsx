import * as React from "react";
import { IGreekGodData } from "../../data/data";
import styles from "./godPick.module.scss";

export interface IProps {
  god: IGreekGodData;
}

export interface IState {}

class GodPick extends React.Component<IProps, IState> {
  // state = { :  }
  render() {
    return <div className={styles.godPick}>{this.props.god.name}</div>;
  }
}

export default GodPick;
