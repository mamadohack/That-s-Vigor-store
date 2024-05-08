"use client";
import { NextPage } from "next";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
interface Props {}

const Page: NextPage<Props> = () => {
  return (
    <div>
      <div>
        sign up page
        <Link href={"/signup"}>signup</Link>
        <Link href={"/signin"}>signin</Link>
      </div>
    </div>
  );
};

export default Page;
