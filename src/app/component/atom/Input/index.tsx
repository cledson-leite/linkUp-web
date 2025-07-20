import DefaultInput from "./default";
import EmailInput from "./EmailInput";
import NumberInput from "./NumberInput";
import PasswordInput from "./PasswordInput";


type InputProps = {
  variant?: 'default' | 'email' | 'number' | 'password';
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ error, variant = 'default', label = 'input', ...props }: InputProps) {
  if(variant === 'email') return <EmailInput label={label} {...props} />
  if(variant === 'number') return <NumberInput label={label} {...props} />
  if(variant === 'password') return <PasswordInput label={label} {...props} />
  return (
    <DefaultInput  label={label} error={error} {...props}/>
  )
}
