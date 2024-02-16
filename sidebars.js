/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    'index',
    {
      type: "html",
      value: '<span class="sidebar-divider" />',
    },
    {
      type: "html",
      className: "sidebar-title",
      value: "About Web3Privacy Now",
      defaultStyle: true,
    },
    'manifesto',
    'roadmap',
    'history',
    'brand',
    {
      type: "html",
      value: '<span class="sidebar-divider" />',
    },
    {
      type: "html",
      className: "sidebar-title",
      value: "Projects",
      defaultStyle: true,
    },
    {
      type: "category",
      label: "Research",
      link: { type: 'doc', id: 'research/index'},
      items: [{type: 'autogenerated', dirName: 'research'}],
    },
    {
      type: "category",
      label: "Events",
      link: {type: 'doc', id: 'events/index'},
      items: [{type: 'autogenerated', dirName: 'events'}],
    },
    'projects/privacy-explorer',
    /*{
      type: "category",
      label: "Privacy News",
      link: {type: 'doc', id: 'news/week-in-the-privacy'},
      items: [{type: 'autogenerated', dirName: 'news'}],
    },*/
    'news/week-in-the-privacy',
    'projects/privacy-tech-awards',
    {
      type: "html",
      value: '<span class="sidebar-divider" />',
    },
    {
      type: "html",
      className: "sidebar-title",
      value: "Tools",
      defaultStyle: true,
    },
    'git',
    'communication',
    'workgroups',
    {
      type: "html",
      value: '<span class="sidebar-divider" />',
    },
    {
      type: "html",
      className: "sidebar-title",
      value: "Community",
      defaultStyle: true,
    },
    'follow-us',
    'get-involved',
    {
      type: "category",
      label: "Membership",
      link: {type: 'doc', id: 'membership/index'},
      items: [
        'membership/personal-benefits',
        'membership/org-benefits',
      ],
    },
    'donate',
    'code-of-conduct',
    {
      type: "html",
      value: '<span class="sidebar-divider" />',
    },
    {
      type: "html",
      className: "sidebar-title",
      value: "Governance",
      defaultStyle: true,
    },
    'association/index',
    {
      type: "category",
      label: "Core Team",
      link: {type: 'doc', id: 'core-team/index'},
      items: [
        'core-team/multisig'
      ],
    },
    'contacts',
    /*{
      type: "html",
      value: '<span class="sidebar-divider" />',
    },
    {
      type: "html",
      className: "sidebar-title",
      value: "Others",
      defaultStyle: true,
    },
    'funding-requests',*/
  ],

};

export default sidebars;
