import { useRouter } from 'next/navigation';
import React from 'react';

import Button from '../Button';
import styles from './Paginator.module.css';
type Props = {
  totalCount: number;
  pageSize: number;
  currentPage: number;
};

const Paginator = (props: Props) => {
  let { currentPage } = props;
  const { totalCount } = props;
  const router = useRouter();
  const handleNext = () => {
    currentPage++;
    router.push(`/pokemons/${currentPage}`);
  };
  const handleBack = () => {
    currentPage--;
    router.push(`/pokemons/${currentPage}`);
  };
  return (
    <div className={styles.paginator_content}>
      <Button onClick={handleBack} disabled={currentPage < 1}>
        Anterior
      </Button>
      <span>{currentPage}</span>
      <Button onClick={handleNext} disabled={totalCount < 1}>
        Próximo
      </Button>
    </div>
  );
};

export default Paginator;
