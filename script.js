const hamBtn = document.querySelector('#hamBtn');
const navMenu = document.querySelector('#nav-menu');
const cancelMenu = document.querySelector('#cancel');
const artistList = document.querySelector('#artistList');
const navMenuItems = document.querySelectorAll('.nav-menu-items');

hamBtn.addEventListener('click', () => {
  navMenu.classList.add('active');
  hamBtn.classList.add('active');
});

cancelMenu.addEventListener('click', () => {
  navMenu.classList.remove('active');
  hamBtn.classList.remove('active');
});

navMenuItems.forEach(item => {
  item.onclick = () => {
    navMenu.classList.remove('active');
    hamBtn.classList.remove('active');
  }
})

const artists = [
  {
    img: './assets/thumbpic1.jpg',
    artistName: 'Selin Semerci',
    expertise: 'Turkish singer',
    description: 'The first Turkish Grammy awarded jazz singer.',
  },
  {
    img: './assets/thumbpic2.jpg',
    artistName: 'Çağla Akışkan',
    expertise: 'Photographer',
    description: 'Wildlife photographer of the last year.',
  },
  {
    img: './assets/thumbpic3.jpg',
    artistName: 'Timuçin Esen',
    expertise: 'Mural Painter',
    description: 'International artist who likes to travel the world.',
  },
  {
    img: './assets/thumbpic4.jpg',
    artistName: 'Gülin Ayla',
    expertise: ' Turkish Singer',
    description: 'The singer on the top of the Turkish hit music lists.',
  },
  {
    img: './assets/thumbpic5.jpg',
    artistName: 'Chris Clockwork',
    expertise: 'Dj',
    description: 'Worldwide known electronic musician',
  },
  {
    img: './assets/thumbpic6.jpg',
    artistName: 'Anya Falfe',
    expertise: 'Founder and volunteer of Global Care Organization',
    description: 'She gave seminars about global warming across 30 country.',
  },
];

for (let i = 0; i < artists.length; i += 1) {
  const shortline = document.createElement('div');
  shortline.style = 'border-bottom: 2px solid #d3d3d3; width: 20px;';
  const li = document.createElement('li');
  li.classList.add('listItem');
  const img = document.createElement('img');
  img.classList.add('artist-img');
  img.src = artists[i].img;
  const div = document.createElement('div');
  div.classList.add('side-info');
  const h3 = document.createElement('h3');
  h3.innerText = artists[i].artistName;
  const h4 = document.createElement('h4.job-title');
  h4.classList.add('job-title');
  h4.innerText = artists[i].expertise;
  const p = document.createElement('p');
  p.innerText = artists[i].description;
  div.append(h3, h4, shortline, p);
  li.append(img, div);
  artistList.appendChild(li);
}