import { NextResponse } from "next/server";

// eslint-disable-next-line no-unused-vars
export const GET = async (request: Request) => {
    return NextResponse.json({ message: "hello darknest my old friend" });
};
