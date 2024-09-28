// Button.tsx
import React from 'react';
import classNames from 'classnames';
import './Button.css'; // 스타일 파일 import

interface ButtonProps {
  label: string;
  primary?: boolean;
  secondary?: boolean;
  large?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  primary,
  secondary,
  large,
  disabled,
}) => {
  // classNames 함수로 클래스명을 설정
  const buttonClass = classNames('button', {
    'button-primary': primary,       // primary prop이 true이면 'button-primary' 클래스 적용
    'button-secondary': secondary,   // secondary prop이 true이면 'button-secondary' 클래스 적용
    'button-large': large,           // large prop이 true이면 'button-large' 클래스 적용
    'button-disabled': disabled,     // disabled prop이 true이면 'button-disabled' 클래스 적용
  });

  return (
    <button className={buttonClass} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
