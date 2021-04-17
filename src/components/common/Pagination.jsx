import { Fragment } from 'react';

const Pagination = ({ goToPrevPage, goToNextPage }) => {
  return (
    <Fragment>
      {goToPrevPage && <button onClick={goToPrevPage}>Previous</button>}
      {goToNextPage && <button onClick={goToNextPage}>Next</button>}
    </Fragment>
  );
};

export default Pagination;
