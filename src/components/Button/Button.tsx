import Link from 'next/link';

import styles from './Button.module.css';

interface Button {
  children?: React.ReactNode;
  href?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  target?: string;
  onClick?: () => void;
}
const Button = ({ children, href, className, disabled, ...props }: Button) => {
  let buttonClassName = styles.button;
  let buttonDisabled = styles.disabled;
  if (className) {
    buttonClassName = ` ${buttonClassName} ${className} `;
  }
  if (disabled) {
    buttonClassName = ` ${buttonDisabled} ${className} `;
  }

  const buttonProps = {
    className: buttonClassName,
    ...props,
  };
  if (href) {
    if (href.startsWith('/')) {
      return (
        <Link href={href} {...buttonProps}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} {...buttonProps}>
        {children}
      </a>
    );
  }

  return <button {...buttonProps}>{children}</button>;
};

export default Button;