import React from 'react';

import Button from '../Button';
import styles from './Paginator.module.css';
type Props = {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  setPage: (page: number) => void;
};

const Paginator = (props: Props) => {
  const { currentPage, setPage } = props;

  const goToPreviousPage = () => {
    setPage(currentPage - 1);
  };

  const goToNextPage = () => {
    setPage(currentPage + 1);
  };

  return (
    <div className={styles.paginator_content}>
      <Button onClick={goToPreviousPage} disabled={currentPage <= 1}>
        Anterior
      </Button>
      <span>{currentPage}</span>
      <Button onClick={goToNextPage}>Próximo</Button>
    </div>
  );
};

export default Paginator;
