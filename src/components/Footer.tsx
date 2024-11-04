import { ReactNode } from 'react';

interface IProps {
  children?: ReactNode
}

function Footer({ children }: IProps) {
  return (
    <footer className='footer'>{children}</footer>
  );
}

export default Footer;
