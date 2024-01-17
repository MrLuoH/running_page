interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: '罗先森♥跑步',
  siteUrl: 'https://mrluoh.github.io/2023/11/07/%E9%83%A8%E7%BD%B2running_page-2023',
  logo: 'https://s2.loli.net/2023/10/31/KFm1LUv3JIjTXdk.jpg',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://mrluoh.github.io',
    },
    {
      name: 'About',
      url: 'https://mrluoh.github.io/about',
    },
  ],
};

export default data;
