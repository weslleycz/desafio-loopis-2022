import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const middleware = (req: NextRequest, res: NextResponse) => {
    return NextResponse.next();
};

export const config = {
    matcher: ["/api/:path*"],
};
