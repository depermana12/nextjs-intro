import { NextResponse } from "next/server";
import db from "../../../utils/db";

// eslint-disable-next-line no-unused-vars
export const GET = async (request: Request) => {
  const todos = await db.todo.findMany({});
  return NextResponse.json({
    success: true,
    length: todos.length,
    data: todos,
  });
};
export const POST = async (request: Request) => {
  const data = await request.json();
  const todo = await db.todo.create({
    data,
  });
  return NextResponse.json({ message: todo });
};
