import { SignIn } from "@clerk/nextjs";

import styles from "../../auth.styles.module.css";

export default function SignInPage() {
  return (
    <div className={styles.container}>
      <SignIn
        appearance={{
          elements: {
            card: styles.clerkCard,
            formButtonPrimary: styles.clerkButton,
            input: styles.clerkInput,
            label: styles.clerkLabel,
            socialButtonsIconButton: styles.socialButtonsIconButton,
          },
          variables: {
            colorPrimary: "var(--principal)",
            colorBackground: "var(--background)",
            colorText: "var(--texto-principal)",
            colorTextSecondary: "var(--texto-secundario)",
            colorTextOnPrimaryBackground: "var(--texto-principal)",
            fontFamily: "GochiHand, sans-serif",
          },
        }}
      />
    </div>
  );
} 