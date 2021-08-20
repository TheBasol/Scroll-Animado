var daftpunk1 = basicScroll.create({
  elem: document.querySelector('.daftpunk1'),
  from: 'top-top',
  to: 'bottom-top',
  props: {
    '--img1': {
      from: '0',
      to: '90vh'
    }
  }
});

var daftpunk2 = basicScroll.create({
  elem: document.querySelector('.daftpunk2'),
  from: 'top-top',
  to: 'bottom-top',
  props: {
    '--img2': {
      from: '0',
      to: '90vh'
    }
  }
});

var daftpunk3 = basicScroll.create({
  elem: document.querySelector('.daftpunk3'),
  from: 'top-top',
  to: 'bottom-top',
  props: {
    '--img3': {
      from: '0',
      to: '90vh'
    }
  }
});

var daftpunk4 = basicScroll.create({
  elem: document.querySelector('.daftpunk4'),
  from: 'top-top',
  to: 'bottom-top',
  props: {
    '--img4': {
      from: '0',
      to: '90vh'
    }
  }
});


daftpunk1.start();
daftpunk2.start();
daftpunk3.start();
daftpunk4.start();
