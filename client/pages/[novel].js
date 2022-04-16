import React from "react";
import { useRouter } from "next/router";

export default function novel() {
  const router = useRouter();
  const { novel } = router.query;

  return <div>{novel}</div>;
}
