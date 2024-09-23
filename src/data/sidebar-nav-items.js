// export default function () {
//   return [
//     {
//       title: "Dashboard",
//       to: "/evrb/dashboard",
//       htmlBefore: '<i style="font-size: 22px" class="material-icons">speed</i>',
//       htmlAfter: ""
//     },
//     // {
//     //   title: "Blog Posts",
//     //   htmlBefore: '<i class="material-icons">vertical_split</i>',
//     //   to: "/blog-posts",
//     // },
//     // {
//     //   title: "Add New Post",
//     //   htmlBefore: '<i class="material-icons">note_add</i>',
//     //   to: "/add-new-post",
//     // },
//     // {
//     //   title: "Forms & Components",
//     //   htmlBefore: '<i class="material-icons">view_module</i>',
//     //   to: "/components-overview",
//     // },
//     {
//       title: "Billing",
//       htmlBefore: '<i style="font-size: 22px" class="material-icons">receipt_long</i>',
//       to: "/evrb/billing",
//     },

//     {
//       title: "Individual",
//       htmlBefore: '<i style="font-size: 22px" class="material-icons">insert_emoticon</i>',
//       to: "/evrb/individual",
//     },
//     {
//       title: "Companies",
//       htmlBefore: '<i style="font-size: 24px" class="material-icons">apartment</i>',
//       to: "/evrb/companies",
//     },

//     {
//       title: "Reconciliation",
//       htmlBefore: '<i style="font-size: 22px" class="material-icons">cached</i>',
//       to: "/evrb/reconciliation",
//     },
//     // {
//     //   title: "User Profile",
//     //   htmlBefore: '<i class="material-icons">person</i>',
//     //   to: "/user-profile-lite",
//     // },
//     // {
//     //   title: "Errors",
//     //   htmlBefore: '<i class="material-icons">error</i>',
//     //   to: "/errors",
//     // }
//   ];
// }



// sidebar-nav-items.js

export const getSidebarNavItems = () => {
  return [
    {
      title: "Dashboard",
      to: "/evrb/dashboard",
      htmlBefore: '<i style="font-size: 22px" class="material-icons">speed</i>',
      htmlAfter: ""
    },
    {
      title: "Billing",
      htmlBefore: '<i style="font-size: 22px" class="material-icons">receipt_long</i>',
      items: [
        {
          title: "Bills",
          to: "/evrb/billing",
          htmlBefore: '<i class="material-icons">receipt</i>',
        },
        {
          title: "Reconciliation",
          to: "/evrb/reconciliation",
          htmlBefore: '<i class="material-icons">compare_arrows</i>',
        },
        {
          title: "Particulars",
          to: "/evrb/particulars",
          htmlBefore: '<i class="material-icons">compare_arrows</i>',
        },
      ],
    },
    {
      title: "Registration",
      htmlBefore: '<i style="font-size: 22px" class="material-icons">person_add</i>',
      items: [
        {
          title: "Individual",
          to: "/evrb/individual",
          htmlBefore: '<i class="material-icons">person</i>',
        },
        {
          title: "Company",
          to: "/evrb/companies",
          htmlBefore: '<i class="material-icons">business</i>',
        },
      ],
    },


    {
      title: "Documents",
      to: "/evrb/documents",
      htmlBefore: '<i style="font-size: 22px" class="material-icons">speed</i>',
      htmlAfter: ""
    },


    {
      title: "SETUPS",
      htmlBefore: '<i style="font-size: 22px" class="material-icons">person_add</i>',
      items: [
        {
          title: "Subjects",
          to: "/evrb/subjects",
          htmlBefore: '<i class="material-icons">person</i>',
        },
        {
          title: "Cpd",
          to: "/evrb/cpp",
          htmlBefore: '<i class="material-icons">business</i>',
        },
        {
          title: "Reg. Category",
          to: "/evrb/registration-category",
          htmlBefore: '<i class="material-icons">business</i>',
        },
      ],
    },


    


  ];
};
