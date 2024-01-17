/**
 * Generates an array of pagination buttons based on the given number.
 * @param {number} number - The number of pagination buttons to generate.
 * @returns {JSX.Element[]} - An array of pagination buttons.
 */
const paginationNumber = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const paginateNumber = index + 1;

    return (
      <button key={paginateNumber} className="join-item btn">
        {paginateNumber}
      </button>
    );
  });
};

/**
 * Renders a pagination component.
 * @returns {JSX.Element} The pagination component.
 */
const Pagination = () => {
  return (
    <div className="justify-end w-full mt-12 mb-6 join">
      <button className="uppercase join-item btn">Prev</button>
      {paginationNumber(3)}
      <button className="uppercase join-item btn">next</button>
    </div>
  );
};

export default Pagination;
