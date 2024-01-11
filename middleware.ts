import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "fr"],

  // Used when no locale matches
  defaultLocale: "en",
  localePrefix: "never",
  localeDetection: false,
});

export const config = {
  // Match only internationalized pathnames
  // Les pages /auth , /api
  matcher: ["/((?!api|auth|auth|protected|_next|.*\\..*).*)"],
};
