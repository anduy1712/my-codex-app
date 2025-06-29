"use client";

import { Button } from "@/components/atoms/button";
import useBearStore from "@/stores/slices/bears/bear-store";

export default function Page() {
  const firstName = useBearStore((state) => state.firstName);

  return (
    <div>
      <Button>Alo {firstName}</Button>
    </div>
  );
}
