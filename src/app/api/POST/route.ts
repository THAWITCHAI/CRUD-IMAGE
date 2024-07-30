import { NextResponse } from "next/server";
import { mysqlPool } from "../../../../untils/db";
// const promisePool = mysqlPool.promise();
// const [row] = await promisePool.query(
//   "INSERT INTO products(id,name,path) VALUES(?,?,?)",
//   [8454, "thawitchai", "C:\fakepath\Screenshot (89).png"]
// );
// console.log(row)


export async function POST(req: any) {
  console.log(await req)

  return NextResponse.json({ massage: "Post Successfully" }, { status: 200 });
}
