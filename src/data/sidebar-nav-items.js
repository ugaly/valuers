export default function() {
  return [
    {
      title: "Dashboard",
      to: "/evrb/dashboard",
      htmlBefore: '<i style="font-size: 22px" class="material-icons">edit</i>',
      htmlAfter: ""
    },
    // {
    //   title: "Blog Posts",
    //   htmlBefore: '<i class="material-icons">vertical_split</i>',
    //   to: "/blog-posts",
    // },
    // {
    //   title: "Add New Post",
    //   htmlBefore: '<i class="material-icons">note_add</i>',
    //   to: "/add-new-post",
    // },
    // {
    //   title: "Forms & Components",
    //   htmlBefore: '<i class="material-icons">view_module</i>',
    //   to: "/components-overview",
    // },
    {
      title: "Billing",
      htmlBefore: '<i style="font-size: 22px" class="material-icons">table_chart</i>',
      to: "/evrb/billing",
    },

    {
      title: "Individual",
      htmlBefore: '<i style="font-size: 22px" class="material-icons">vertical_split</i>',
      to: "/evrb/individual",
    },
       {
      title: "Companies",
      htmlBefore: '<i style="font-size: 22px" class="material-icons">view_module</i>',
      to: "/evrb/companies",
    },
    // {
    //   title: "User Profile",
    //   htmlBefore: '<i class="material-icons">person</i>',
    //   to: "/user-profile-lite",
    // },
    // {
    //   title: "Errors",
    //   htmlBefore: '<i class="material-icons">error</i>',
    //   to: "/errors",
    // }
  ];
}
