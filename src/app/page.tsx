'use client';

import { useRouter } from "next/navigation";

import { useAuth } from "@clerk/nextjs";

export default function Index() {
  const { userId } = useAuth()
  const router = useRouter()
  if (!userId) {
    router.push("/sign-up");
  } else {
    router.push("/home");
  }
}
