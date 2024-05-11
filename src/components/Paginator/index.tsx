import React from 'react';

import Button from '../Button';

type Props = {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  setPage: (page: number) => void;
};

const Paginator = (props: Props) => {
  const { totalCount, pageSize, currentPage, setPage } = props;
  const totalPages = Math.ceil(totalCount / pageSize);

  const goToPreviousPage = () => {
    setPage(currentPage - 1);
  };

  const goToNextPage = () => {
    setPage(currentPage + 1);
  };

  return (
    <div className="flex gap-5 justify-center items-center">
      <Button onClick={goToPreviousPage} disabled={currentPage <= 1}>
        Anterior
      </Button>
      <span>{currentPage}</span>
      <Button onClick={goToNextPage} disabled={currentPage >= totalPages}>
        Próximo
      </Button>
    </div>
  );
};

export default Paginator;
