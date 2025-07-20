'use client';

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { useAuth } from "@clerk/nextjs";

export default function Index() {
  const { userId } = useAuth()
  const router = useRouter()
  useEffect(() => {
    if (!userId) {
      router.push("/sign-up");
    } else {
      router.push("/home");
    }
  }, [userId, router]);

  return null;
}
