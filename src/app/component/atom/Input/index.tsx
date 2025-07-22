import DefaultInput from "./default";
import EmailInput from "./EmailInput";
import NumberInput from "./NumberInput";
import PasswordInput from "./PasswordInput";


export type InputProps = {
  variant?: 'default' | 'email' | 'number' | 'password';
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ error, variant = 'default', label = 'input', ...props }: InputProps) {
  if(variant === 'email') return <EmailInput label={label} error={error} {...props} />
  if(variant === 'number') return <NumberInput label={label} error={error} {...props} />
  if(variant === 'password') return <PasswordInput label={label} error={error} {...props} />
  return (
    <DefaultInput  label={label} error={error} {...props}/>
  )
}
