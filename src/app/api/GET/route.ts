import { NextResponse } from "next/server";
import { mysqlPool } from "../../../../untils/db";

export async function GET() {
  const promisePool = mysqlPool.promise();
  const [res] = await promisePool.query("SELECT * FROM products");
  return NextResponse.json(res);
}
