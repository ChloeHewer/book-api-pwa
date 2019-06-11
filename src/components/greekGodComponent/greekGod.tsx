import * as React from "react";

export interface IProps {}

export interface IState {}

class GreekGod extends React.Component<IProps, IState> {
  // state = { :  }
  render() {
    return (
      <section>
        <div>
          Info on greek gods.... this will be the layout for the data for each
          god
        </div>
      </section>
    );
  }
}

export default GreekGod;
