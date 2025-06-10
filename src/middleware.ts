import { withAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest } from "next/server";

export default withAuth(
    async function middleware(request: NextRequest) {

    }, {
        isReturnToCurrentPage: true,
    }
)

export const config = {
    matcher: [
        
    ]
}