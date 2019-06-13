import * as React from "react";
import { connect } from "react-redux";
import { IStore } from "../../reducers/index";
import { fetchBooks, IBook } from "../../reducers/bookReducer/bookReducer";
import BooksComponent from "../../components/booksComponent/booksComponent";
import styles from "./books.module.scss";
import ChangeAuthor from "../../components/changeAuthor/changeAuthor";

export interface IOwnProps {}

export interface IStateProps {
  books: IBook[];
  fetchBooks: (authorName: string) => void;
}

export interface IState {
  filteredList: IBook[];
  author: string;
}

class BooksContainer extends React.Component<IOwnProps & IStateProps, IState> {
  public state = { filteredList: [], author: "" };

  public componentDidMount = () => {
    this.props.fetchBooks("Jane Austen");
  };

  public render() {
    return (
      <div>
        <ChangeAuthor />
        <section className={styles.forms}>
          <form>
            <fieldset>
              <label className={styles.genre}>Select genre</label>
              <select id="Genre">
                <option value="Fiction">Fiction</option>
                <option value="Literary">Literary</option>
                <option value="Aeronautics">Aeronautics</option>
                <option value="History">History</option>
              </select>
            </fieldset>
          </form>
        </section>

        <section className={styles.books}>
          {this.props.books.map((book, index) => (
            <BooksComponent key={index} books={book} />
          ))}
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state: IStore, props: IOwnProps) => {
  return {
    books: state.books.books
  };
};

const mapDispatchToProps = {
  fetchBooks
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksContainer);
