import { ReactNode } from 'react';

interface IProps {
  children?: ReactNode
}

function Main({ children }: IProps) {
  return <main className='main'>{children}</main>;
}

export default Main;
