export const ROUTES = {
  HERO: "hero",
  ABOUT: "about",
  SERVICES: "services",
  PORTFOLIO: "portfolio",
  CONTACT: "contact",
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RouteId = (typeof ROUTES)[RouteKey];
