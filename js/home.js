document.addEventListener('DOMContentLoaded', function () {
  var heroSlides = [
    { img: 'assets/global-table.jpg', l1: 'Live-Action', l2: 'Premium Docuseries', title: 'Coming 2027' },
    { img: 'assets/futureproof.jpg', l1: 'Live-Action', l2: 'Premium Docuseries', title: 'Coming 2027' },
    { img: 'assets/campfire-family.jpg', l1: 'Live-action reality', l2: 'series', title: 'Coming 2027' },
    { img: 'assets/future-economy-series.jpg', l1: 'Weekly Global', l2: 'Business Series', title: 'Coming 2027' },
    { img: 'assets/earthkeepers.jpg', l1: 'Animated Educational &', l2: 'Entertainment Series', title: 'Coming 2028' },
    { img: 'assets/beasties-anim.jpg', l1: 'Animated Educational &', l2: 'Entertainment Series', title: 'Coming 2028' }
  ];

  initCarousel(document.getElementById('hero-carousel'), heroSlides, 6500);
});
