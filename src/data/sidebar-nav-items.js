export default function () {
  return [
    {
      title: "Dashboard",
      to: "/evrb/dashboard",
      htmlBefore: '<i style="font-size: 22px" class="material-icons">speed</i>',
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
      htmlBefore: '<i style="font-size: 22px" class="material-icons">receipt_long</i>',
      to: "/evrb/billing",
    },

    {
      title: "Individual",
      htmlBefore: '<i style="font-size: 22px" class="material-icons">insert_emoticon</i>',
      to: "/evrb/individual",
    },
    {
      title: "Companies",
      htmlBefore: '<i style="font-size: 24px" class="material-icons">apartment</i>',
      to: "/evrb/companies",
    },

    {
      title: "Reconciliation",
      htmlBefore: '<i style="font-size: 22px" class="material-icons">cached</i>',
      to: "/evrb/reconciliation",
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
