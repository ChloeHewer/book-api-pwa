import * as React from "react";
import { IBook } from "../../reducers/bookReducer/bookReducer";
import styles from "./booksComponent.module.scss";

export interface IProps {
  books: IBook;
}

export interface IState {
  isShown: boolean;
}

class Books extends React.Component<IProps, IState> {
  public state = { isShown: false };

  public render() {
    const rotateStyle = this.state.isShown ? styles.cardRotated : "";
    return (
      <div className={styles.scene}>
        <article
          onClick={this.handleCardClick}
          className={`${rotateStyle} ${styles.card}`}
        >
          <div className={styles.cardFront}>
            <img src={this.props.books.volumeInfo.imageLinks.thumbnail} />
          </div>

          <div className={styles.cardBack}>
            <div>
              <h2>{this.props.books.volumeInfo.title}</h2>
              <div>{this.props.books.volumeInfo.authors}</div>
              <div>{this.props.books.volumeInfo.publishedDate}</div>
              <div>{this.props.books.volumeInfo.categories}</div>
              <p>{this.props.books.volumeInfo.description}</p>
            </div>
          </div>
        </article>
      </div>
    );
  }
  private handleCardClick = () => {
    this.setState({ isShown: !this.state.isShown });
  };
}

export default Books;
