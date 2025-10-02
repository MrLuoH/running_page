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

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: 'Mr’Luo Running',
  siteUrl:
    'https://mrluoh.github.io/2023/11/07/%E9%83%A8%E7%BD%B2running_page-2023',
  logo: 'https://s2.loli.net/2023/10/31/KFm1LUv3JIjTXdk.jpg',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
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
