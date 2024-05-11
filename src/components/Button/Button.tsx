import Link from 'next/link';

import styles from './Button.module.css';

interface Button {
  children?: React.ReactNode;
  href?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  target?: string;
  unstyled?: boolean;
  onClick?: () => void;
}
const Button = ({
  children,
  href,
  className,
  unstyled,
  disabled,
  ...props
}: Button) => {
  let buttonClassName = styles.button;
  const buttonDisabled = styles.disabled;
  if (className) {
    buttonClassName = ` ${buttonClassName} ${className} `;
  }
  if (disabled) {
    buttonClassName = ` ${buttonDisabled} ${className} `;
  }
  if (unstyled) {
    buttonClassName = '';
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

  return (
    <button disabled={disabled} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
