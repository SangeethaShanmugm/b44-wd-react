import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
export function BookDetail({ bookList }) {
  const { bookid } = useParams();
  console.log(bookList[bookid]);
  const book = bookList[bookid];
  const navigate = useNavigate();
  return (
    <div>
      <iframe
        width="100%"
        height="550"
        src={book.trailer}
        title="The Secret Full Movie In English Law Of Attraction Full HD Original  Full Uncut Movie  Secret 2020"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="book-detail-container">
        <div className="book-spec">
          <h2 className="book-name">{book.name}</h2>
          <p className="book-rating">⭐{book.rating}</p>
        </div>
        <p className="book-summary">{book.summary}</p>
        <Button
          variant="contained"
          startIcon={<ArrowBackIosIcon />}
          onClick={() => navigate(-1)}
        >
          BACK
        </Button>
      </div>
    </div>
  );
}
