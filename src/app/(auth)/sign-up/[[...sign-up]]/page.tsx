import { SignUp } from "@clerk/nextjs";

import styles from "../../auth.styles.module.css";

export default function SignUpPage() {
  return (
    <div className={styles.container}>
      <SignUp
        appearance={{
          elements: {
            card: styles.clerkCard,
            formButtonPrimary: styles.clerkButton,
            input: styles.clerkInput,
            label: styles.clerkLabel,
          },
          variables: {
            colorPrimary: "var(--principal)",
            colorBackground: "var(--background)",
            colorText: "var(--texto-principal)",
            colorTextSecondary: "var(--texto-secundario)",
            fontFamily: "Inter, sans-serif",
          },
        }}
      />
    </div>
  );
} 