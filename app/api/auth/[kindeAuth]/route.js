import {handleAuth} from "@kinde-oss/kinde-auth-nextjs/server";
export const GET = handleAuth({
    onLogin: async (req, res, session) => {
        // Custom redirect logic after login
        res.redirect(302, "/custom-page"); // Redirect to your custom route
      },
});