import * as React from "react";
import GreekGod from "../../components/greekGodComponent/greekGod";
import data from "../../data/data";

export interface IProps {}

export interface IState {}

class GreekGods extends React.Component<IProps, IState> {
  // state = { :  }
  render() {
    return (
      <section>
        {data.map((god, index) => (
          <GreekGod greekGod={god} />
        ))}
      </section>
    );
  }
}

export default GreekGods;
