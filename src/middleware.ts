import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const middleware = (req: NextRequest, res: NextResponse) => {
    return NextResponse.next();
};

export const config = {
    matcher: ["/", "/dashboard"],
};
