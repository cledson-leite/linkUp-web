import styles from './button.module.css';

type ButtonProps = {
  onClick?: () => void;
  label?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({onClick, label='Button', ...props}: ButtonProps) {
  return (
    <main className={`${styles.container} ${props.className}`} onClick={onClick}>{label}</main>
  )
}
