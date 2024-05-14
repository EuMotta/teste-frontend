import React from 'react';

import Container from '../Container';
import styles from './Footer.module.css';
const Footer = ({ ...props }) => {
  return (
    <footer className={styles.footer} {...props}>
      <Container className={styles.footer_container}>
        <h4>Obrigado pela visita!</h4>
        <div className="flex justify-center items-end gap-5">
          <p>{new Date().getFullYear()}</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
