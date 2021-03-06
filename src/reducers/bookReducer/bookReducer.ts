// IBook interface

export interface IBook {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    industryIdentifiers: [
      {
        type: string;
        identifier: string;
      },
      {
        type: string;
        identifier: string;
      }
    ];
    readingModes: {
      text: boolean;
      image: boolean;
    };
    pageCount: number;
    printType: string;
    categories: string[];
    averageRating: number;
    ratingsCount: number;
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    panelizationSummary: {
      containsEpubBubbles: boolean;
      containsImageBubbles: boolean;
    };
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
  };
  saleInfo: {
    country: string;
    saleability: string;
    isEbook: boolean;
    listPrice: {
      amount: string;
      currencyCode: string;
    };
    retailPrice: {
      amount: boolean;
      currencyCode: string;
    };
    buyLink: string;
    offers: [
      {
        finskyOfferType: number;
        listPrice: {
          amountInMicros: number;
          currencyCode: string;
        };
        retailPrice: {
          amountInMicros: boolean;
          currencyCode: string;
        };
        giftable: boolean;
      }
    ];
  };
  accessInfo: {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: {
      isAvailable: boolean;
      acsTokenLink: string;
    };
    pdf: {
      isAvailable: boolean;
    };
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
  };
  searchInfo: string;
}

// action types
export const FETCH_BOOKS = "FETCH_BOOKS";
export const SUCCESS_FETCH_BOOKS = "SUCCESS_FETCH_BOOKS";
export const FAILURE_FETCH_BOOKS = "FAILURE_FETCH_BOOKS";
// export const SET_AUTHOR = "SET_AUTHOR";

// action interfaces
export interface IGetBooksAction {
  type: typeof FETCH_BOOKS;
}
export interface IGetBooksSuccessAction {
  type: typeof SUCCESS_FETCH_BOOKS;
  books: IBook[];
}
export interface IGetBooksFailureAction {
  type: typeof FAILURE_FETCH_BOOKS;
  error: Error;
}
// export interface IChangeAuthor {
//   type: typeof SET_AUTHOR;
//   author: string;
// }

// action creators
export const getBooks = (): IGetBooksAction => ({
  type: FETCH_BOOKS
});
export const getBooksSuccess = (books: IBook[]): IGetBooksSuccessAction => ({
  type: SUCCESS_FETCH_BOOKS,
  books
});
export const getBooksFailure = (error: Error): IGetBooksFailureAction => ({
  type: FAILURE_FETCH_BOOKS,
  error
});
// export const changeAuthor = (author: string): IChangeAuthor => ({
//   type: SET_AUTHOR,
//   author
// });

export const fetchBooks = (author: string) => (dispatch: any) => {
  dispatch(getBooks());
  fetch(
    "https://www.googleapis.com/books/v1/volumes?q=inauthor:" +
    author +
    "&maxResults=20&key:AIzaSyA5wXkMeJbotPhclQzUNOS6zA7pHW2hUYc"
  )
    .then(res => res.json())
    .then(data => dispatch(getBooksSuccess(data.items)))
    .catch(error => {
      dispatch(getBooksFailure(error));
      alert("rate limited");
    });
};

// combining action creators
type IBookActions =
  | IGetBooksAction
  | IGetBooksSuccessAction
  | IGetBooksFailureAction;
// | IChangeAuthor;

export interface IBookState {
  books: IBook[];
  error: null | Error;
  loading: boolean;
  author: string;
}

// reducer with initial state
const initialState: IBookState = {
  books: [],
  error: null,
  loading: false,
  author: "a"
};

const bookReducer = (state = initialState, action: IBookActions) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return { ...state, loading: true, error: null };
    case SUCCESS_FETCH_BOOKS:
      return { ...state, loading: false, error: null, books: action.books };
    case FAILURE_FETCH_BOOKS:
      return { ...state, loading: false, error: action.error };
    // case SET_AUTHOR:
    //   return { ...state, loading: false, error: null, author: action.author };
    default:
      return state;
  }
};

export default bookReducer;
