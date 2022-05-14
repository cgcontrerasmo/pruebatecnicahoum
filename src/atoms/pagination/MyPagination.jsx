import { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import "./MyPagination.scss";

const MyPagination = ({ setterPage, pages, page }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let finish = 0;
    let begin = 1;
    const auxItems = [];
    if (parseInt(page) + 10 > pages) finish = pages;
    else finish = parseInt(page) + 10;
    if (page > 5) begin = page - 4;
    for (let index = begin; index < finish; index++) {
      auxItems.push(
        <Pagination.Item
          key={index}
          active={index === page}
          onClick={(e) => {
            setterPage(e.target.innerHTML);
          }}
        >
          {index}
        </Pagination.Item>
      );
    }
    setItems(auxItems);
  }, [page, pages]);

  return (
    <Pagination>
      <Pagination.First onClick={() => setterPage(1)} />
      {page > 10 && <Pagination.Ellipsis />}
      {items}
      {pages > page + 5 && <Pagination.Ellipsis />}
      <Pagination.Last onClick={() => setterPage(pages)} />
    </Pagination>
  );
};

export default MyPagination;
