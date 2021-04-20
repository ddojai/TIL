module.exports = {
  title: 'TIL',
  description: 'Today I Learn',
  base: '/TIL',
  themeConfig: {
    logo: 'https://avatars.githubusercontent.com/u/2128592?v=4', // logo 이미지
    nav: [
      { text: 'Home', link: '/' }, // 상단 메뉴
    ],
    sidebar: 'auto', // 사이드바 사용 여부. auto로 하면 content의 내용이 반영된다.
    smoothScroll: true, // 부드러운 스크롤 사용 여부
  },
};
