const children = require('./children');

module.exports = {
  title: 'Today I Learned',
  description: 'Tech Wiki',
  base: '/TIL/',
  dest: 'build',
  themeConfig: {
    search: true,
    logo: 'https://avatars.githubusercontent.com/u/2128592?v=4', // logo 이미지
    nav: [
      {
        text: 'GitHub',
        link: 'https://github.com/ddojai/',
      },
      {
        text: 'Tistory',
        link: 'https://ddojai.tistory.com/',
      },
    ],
    sidebar: [
      { title: 'algorithm', children: children.algorithm },
      { title: 'node', children: children.node },
      { title: 'php', children: children.php },
      { title: 'etc', children: children.etc },
    ],
    smoothScroll: true, // 부드러운 스크롤 사용 여부
  },
};
