import React from 'react';

import Input from '@/app/component/atom/Input';


interface InputWithLabelProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({ label, error, ...props }) => {
  let placeholder = props.placeholder;
  if (!placeholder) {
    if (label.toLowerCase().includes('email')) placeholder = 'Digite seu email';
    else if (label.toLowerCase().includes('senha')) placeholder = 'Digite sua senha';
  }
  return <Input label={label} error={error} {...props} placeholder={placeholder} />;
};

export default InputWithLabel; 