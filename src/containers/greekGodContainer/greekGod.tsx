import * as React from "react";
import GreekGod from "../../components/greekGodComponent/greekGod";
import GodPick from "../../components/godPick/godPick";
import data from "../../data/data";
import styles from "./greekGod.module.scss";

export interface IProps {}

export interface IState {}

class GreekGods extends React.Component<IProps, IState> {
  // state = { :  }
  render() {
    return (
      <section className={styles.greekGodPage}>
        <section className={styles.godPickFrame}>
          <section className={styles.godPick}>
            <div>All</div>
            {data.map((god, index) => (
              <GodPick key={index} god={god} />
            ))}
          </section>
        </section>
        <section>
          {data.map((god, index) => (
            <GreekGod key={index} greekGod={god} />
          ))}
        </section>
      </section>
    );
  }
}

export default GreekGods;
