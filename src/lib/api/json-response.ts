import { NextResponse } from "next/server";

export function jsonApiResponse<T>(
  body: T,
  init?: ResponseInit,
): NextResponse<T> {
  return NextResponse.json(body, init);
}
