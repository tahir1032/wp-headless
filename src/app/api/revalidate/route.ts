import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secret = request.headers.get("x-vercel-revalidate-secret");
  const expectedSecret = process.env.REVALIDATE_SECRET;

  if (!expectedSecret || secret !== expectedSecret) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    const body = await request.json().catch(() => ({}));

    let paths: string[];
    if (Array.isArray(body.paths)) {
      paths = body.paths.filter((p: unknown): p is string => typeof p === "string");
    } else if (typeof body.path === "string") {
      paths = [body.path];
    } else {
      paths = ["/"];
    }

    if (paths.length === 0) {
      paths = ["/"];
    }

    for (const path of paths) {
      revalidatePath(path);
    }

    return NextResponse.json({ revalidated: true, paths });
  } catch {
    return NextResponse.json({ message: "Revalidation failed" }, { status: 500 });
  }
}
