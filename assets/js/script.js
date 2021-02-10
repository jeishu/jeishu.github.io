new Glider(document.querySelector('.glider'), {
  slidesToShow: 1,
  slidesToScroll: 'auto',
  dots: '#dots',
  draggable: true,
  rewind: true,
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
});