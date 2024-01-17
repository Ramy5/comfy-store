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
