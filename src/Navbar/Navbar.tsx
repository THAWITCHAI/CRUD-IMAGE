import Link from "next/link";
import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="nav">
      <ul>
          <Link className="Link" href={"/"}>เพิ่มข้อมูล</Link>
          <Link className="Link" href={"/contact"}>แสดงข้อมูล</Link>
      </ul>
    </div>
  );
}
