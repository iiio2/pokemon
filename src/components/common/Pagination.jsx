import { Fragment } from 'react';

const Pagination = ({ goToPrevPage, goToNextPage }) => {
  return (
    <Fragment>
      {goToPrevPage && (
        <button className='mr-2 btn btn-primary' onClick={goToPrevPage}>
          Previous
        </button>
      )}
      {goToNextPage && (
        <button className='btn btn-primary' onClick={goToNextPage}>
          Next
        </button>
      )}
    </Fragment>
  );
};

export default Pagination;
