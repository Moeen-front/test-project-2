import { NavLink, Outlet, useSearchParams, useLocation } from "react-router-dom";
import { getBooks } from "./data";

const Books = () => {
  let bookList = getBooks();
  let [searchParams, setSearchParams] = useSearchParams();
  let location = useLocation();

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr" ,textDecoration:"none"  }}>
      <div style={{ display: "flex", flexDirection: "column", fontSize:"20px" , }}>
        <input
          type="text"
          value={searchParams.get("x") || ""}
          onChange={(event) => {
            let inputValue = event.target.value;
            if (inputValue) {
              setSearchParams({ x: inputValue });
            } else {
              setSearchParams({});
            }
          }}
        />
        {bookList
          .filter((bookFiltered) => {
            let filter = searchParams.get("x");
            if (!filter) return true;
            let name = bookFiltered.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((book) => (
            <NavLink
              to={`${book.id}${location.search}`}
              key={book.id}
              style={({ isActive }) => {
                return { color: isActive ? "red" : "black " , fontSize: isActive ? "22px" : "20px" , textDecoration: "none", fontWeight: isActive ? "bolder" : "normal" };
              }}
            >
              {book.name}
            </NavLink>
          ))}
      </div>

      <Outlet />
    </div>
  );
};

export default Books;