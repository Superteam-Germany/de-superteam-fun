"use client";
import React, { useEffect } from "react";

import { useRouter } from "next/navigation";

type Props = {};

const Page = (props: Props) => {
  const router = useRouter();
  useEffect(() => {
    // Example effect using the router
    console.log('Page not found, redirecting...');
    // You might want to redirect or perform some action here
  }, [router]); // Include 'router' in the dependency array

  return <div>Page Not Found</div>;
};

export default Page;
