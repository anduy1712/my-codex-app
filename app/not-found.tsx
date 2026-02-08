import React from "react";
import Link from "next/link";
import { PATHS } from "@/utils/paths";

export default function NotFound() {
  const a = 3;
  console.log({ a });

  return (
    <div className="mt-52 flex flex-col items-center font-semibold">
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href={PATHS.home.getHref()} replace>
        Go to Home
      </Link>
    </div>
  );
}
