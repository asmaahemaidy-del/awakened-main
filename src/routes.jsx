import { lazy } from "react";
import { Navigate, Outlet } from "react-router";
import { RootLayout } from "./layouts/RootLayout";

// Each page is its own chunk; prerendering resolves them before writing HTML.
const page = (load, name) => lazy(() => load().then((m) => ({ default: m[name] })));

const HomePage = page(() => import("./pages/HomePage"), "HomePage");
const ServicesPage = page(() => import("./pages/ServicesPage"), "ServicesPage");
const IndividualsPage = page(() => import("./pages/IndividualsPage"), "IndividualsPage");
const OrganizationsPage = page(() => import("./pages/OrganizationsPage"), "OrganizationsPage");
const RetreatsPage = page(() => import("./pages/RetreatsPage"), "RetreatsPage");
const CommunityPage = page(() => import("./pages/CommunityPage"), "CommunityPage");
const AboutPage = page(() => import("./pages/AboutPage"), "AboutPage");
const ContactPage = page(() => import("./pages/ContactPage"), "ContactPage");
const BookPage = page(() => import("./pages/BookPage"), "BookPage");
const EventsPage = page(() => import("./pages/EventsPage"), "EventsPage");
const PartnersPage = page(() => import("./pages/PartnersPage"), "PartnersPage");
const ExpertsPage = page(() => import("./pages/ExpertsPage"), "ExpertsPage");
const CheckoutSuccessPage = page(() => import("./pages/CheckoutSuccessPage"), "CheckoutSuccessPage");
const CheckoutCancelPage = page(() => import("./pages/CheckoutCancelPage"), "CheckoutCancelPage");
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

export const routes = [
  {
    path: "/",
    element: (
      <RootLayout>
        <Outlet />
      </RootLayout>
    ),
    children: [
      { index: true, element: <HomePage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "individuals", element: <IndividualsPage /> },
      { path: "organizations", element: <OrganizationsPage /> },
      { path: "retreats", element: <RetreatsPage /> },
      { path: "community", element: <CommunityPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "book", element: <BookPage /> },
      { path: "reserve", element: <Navigate to="/events" replace /> },
      { path: "events", element: <EventsPage /> },
      { path: "partners", element: <PartnersPage /> },
      { path: "experts", element: <ExpertsPage /> },
      { path: "checkout/success", element: <CheckoutSuccessPage /> },
      { path: "checkout/cancel", element: <CheckoutCancelPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
];

// Pages written to static HTML at build time and listed in sitemap.xml.
export const PRERENDER_PAGES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/services", priority: "0.9", changefreq: "monthly" },
  { path: "/individuals", priority: "0.9", changefreq: "monthly" },
  { path: "/organizations", priority: "0.9", changefreq: "monthly" },
  { path: "/retreats", priority: "0.8", changefreq: "monthly" },
  { path: "/book", priority: "0.8", changefreq: "weekly" },
  { path: "/events", priority: "0.8", changefreq: "weekly" },
  { path: "/about", priority: "0.7", changefreq: "monthly" },
  { path: "/experts", priority: "0.7", changefreq: "monthly" },
  { path: "/community", priority: "0.6", changefreq: "monthly" },
  { path: "/partners", priority: "0.6", changefreq: "monthly" },
  { path: "/contact", priority: "0.7", changefreq: "yearly" },
];
