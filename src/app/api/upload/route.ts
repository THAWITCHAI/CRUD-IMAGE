import { NextResponse } from "next/server";
import { mysqlPool } from "../../../../untils/db";


export async function POST(req:any){
    const data = await req.json()
    // console.log(data)
    const promisePool = mysqlPool.promise();
    await promisePool.query("INSERT INTO images set ?",[data]);
    return NextResponse.json({massage:'Successfully'},{status:200})
}