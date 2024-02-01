import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

/**
 * Renders a pagination component.
 * @returns {JSX.Element} The pagination component.
 */
const complexPagination = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;
  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const paginationNumber = Array.from(
    { length: pageCount },
    (_, index) => index + 1
  );

  const handlePaginate = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPaginationButtons = ({ paginationNumber, activeClass }) => {
    return (
      <button
        key={paginationNumber}
        className={`btn join-item ${
          activeClass ? "bg-base-300 border border-base-300" : ""
        }`}
        onClick={() => handlePaginate(paginationNumber)}
      >
        {paginationNumber}
      </button>
    );
  };

  const renderPaginationButtons = () => {
    const paginationButtons = [];
    return paginationButtons;
  };

  if (pageCount < 2) return null;

  return (
    <div className="justify-end w-full mt-12 mb-6 join">
      <button
        className="uppercase join-item btn"
        onClick={() => {
          let prev = page - 1;
          if (prev < 1) prev = pageCount;
          handlePaginate(prev);
        }}
      >
        Prev
      </button>
      {}
      <button
        className="uppercase join-item btn"
        onClick={() => {
          let next = page + 1;
          if (next > pageCount) next = 1;
          handlePaginate(next);
        }}
      >
        next
      </button>
    </div>
  );
};

export default complexPagination;
