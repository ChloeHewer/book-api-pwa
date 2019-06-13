import * as React from "react";
import { IBook } from "../../reducers/bookReducer/bookReducer";
import styles from "./booksComponent.module.scss";

export interface IProps {
  books: IBook;
}

export interface IState {}

class Books extends React.Component<IProps, IState> {
  // state = { :  }
  public render() {
    return (
      <article className={styles.book}>
        <section className={styles.topSection}>
          <h3 className={styles.title}>{this.props.books.volumeInfo.title}</h3>
          <img
            className={styles.image}
            src={this.props.books.volumeInfo.imageLinks.thumbnail}
          />
        </section>
        <p className={styles.author}>{this.props.books.volumeInfo.authors}</p>
        <p>{this.props.books.volumeInfo.categories}</p>
        <p>{this.props.books.volumeInfo.publishedDate}</p>
        <p className={styles.description}>
          {this.props.books.volumeInfo.description}
        </p>
      </article>
    );
  }
}

export default Books;
