import { ReactNode } from 'react';
import { IQuizAction } from '../../interfaces/actions.interface';

interface IProps {
  className?: string
  children: ReactNode
  action: IQuizAction
  disabled?: boolean
  // eslint-disable-next-line no-unused-vars
  dispatch: (action: IQuizAction) => void
}

function Button({ className = '', children, action, disabled = false, dispatch }: IProps) {
  return (
    <button
      className={className}
      disabled={disabled}
      onClick={() => dispatch(action)}
    >
      {children}
    </button>
  );
}

export default Button;
