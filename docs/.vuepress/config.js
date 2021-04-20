module.exports = {
  title: 'TIL',
  description: 'Today I Learn',
  base: '/TIL',
  dest: 'build',
  themeConfig: {
    search: true,
    logo: 'https://avatars.githubusercontent.com/u/2128592?v=4', // logo 이미지
    nav: [
      { text: 'Home', link: '/' }, // 상단 메뉴
    ],
    sidebar: [
      { title: 'ENVIRONMENT', children: ['env/mac'] },
      { title: 'PHP', children: ['php/issue'] },
    ],
    smoothScroll: true, // 부드러운 스크롤 사용 여부
  },
};
