import * as React from "react";
import GreekGod from "../../components/greekGodComponent/greekGod";

export interface IProps {}

export interface IState {}

class GreekGods extends React.Component<IProps, IState> {
  // state = { :  }
  render() {
    return <GreekGod />;
  }
}

export default GreekGods;
