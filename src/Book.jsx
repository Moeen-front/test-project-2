import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getBook, deleteBook } from "./data";
import React from "react";

const Book = () => {
  const params = useParams();
  const book = getBook(params.bookId);
  let location= useLocation()
  let navigate= useNavigate()

  if (book) {
    return (
      <React.Fragment >
        <img src={book.img} alt="" width={"300px"} /><br></br>
        <ul>
          <li >{book.name}</li>
          <li>{book.price}</li>
          <li>{book.author}</li>
          <li>{book.description}</li>
        </ul>
        <br /><br />
          <button style={{width:"200px" , height:"50px"}}
            onClick={() => {
              deleteBook(book.id);
              navigate("/books" + location.search)
            }}
          >
           <h2>  حذف کردن کتاب  </h2>
          </button>
      </React.Fragment>
    );
  } else {
    return <div>
      <h1>  متاسفانه کتاب مورد نظر موجود نیست !</h1>
      </div>;
  }
};

export default Book;