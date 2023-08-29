"use client";
import React, { useEffect } from "react";

import { useRouter } from "next/navigation";

type Props = {};

const Page = (props: Props) => {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, []);

  return null;
};

export default Page;
