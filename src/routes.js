import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import Company from "./views/Company";
import Individual from "./views/Individual";

export default [
  {
    path: "/evrb/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/evrb/dashboard" />
  },
  {
    path: "/evrb/dashboard",
    layout: DefaultLayout,
    component: BlogOverview
  },
  // {
  //   path: "/user-profile-lite",
  //   layout: DefaultLayout,
  //   component: UserProfileLite
  // },
  // {
  //   path: "/add-new-post",
  //   layout: DefaultLayout,
  //   component: AddNewPost
  // },
  {
    path: "/evrb/errors",
    layout: DefaultLayout,
    component: Errors
  },
  // {
  //   path: "/components-overview",
  //   layout: DefaultLayout,
  //   component: ComponentsOverview
  // },
  {
    path: "/evrb/billing",
    layout: DefaultLayout,
    component: Tables
  },

  {
    path: "/evrb/individual",
    layout: DefaultLayout,
    component: Individual
  },

  {
    path: "/evrb/companies",
    layout: DefaultLayout,
    component: Company
  },
  // {
  //   path: "/blog-posts",
  //   layout: DefaultLayout,
  //   component: BlogPosts
  // }
];
