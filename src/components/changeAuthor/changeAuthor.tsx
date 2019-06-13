import * as React from "react";
import styles from "./changeAuthor.module.scss";
import { fetchBooks } from "../../reducers/bookReducer/bookReducer";
import { connect } from "react-redux";
import { IStore } from "../../reducers";

export interface IOwnProps {}

export interface IStateProps {
  fetchBooks: (author: string) => any;
}

export interface IState {
  author: string;
}

class ChangeAuthor extends React.Component<IOwnProps & IStateProps, IState> {
  public state = { author: "" };
  public render() {
    return (
      <form>
        <fieldset>
          <label className={styles.author}>Select Author</label>
          <select id="Author" onChange={this.handleChange}>
            <option value="Jane Austen">Jane Austen</option>
            <option value="Isaac Asimov">Isaac Asimov</option>
            <option value="Dan Brown">Dan Brown</option>
          </select>
        </fieldset>
      </form>
    );
  }
  private handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ author: event.target.value }, () =>
      this.props.fetchBooks(this.state.author)
    );
  };
}

const mapStateToProps = (state: IStore, props: IOwnProps) => {
  return {};
};

const mapDispatchToProps = { fetchBooks };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeAuthor);
