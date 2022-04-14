const hamBtn = document.querySelector('#hamBtn');
const navMenu = document.querySelector('#nav-menu');
const cancelMenu = document.querySelector('#cancel');
const artistList = document.querySelector('#artistList');

hamBtn.addEventListener('click', () => {
  navMenu.classList.add('active');
  hamBtn.classList.add('active');
});

cancelMenu.addEventListener('click', () => {
  navMenu.classList.remove('active');
  hamBtn.classList.remove('active');
});

const artists = [
  {
    img: './assets/thumbpic1.jpg',
    artistName: 'Lorem Ipsum',
    expertise: 'Lorem Ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    img: './assets/thumbpic2.jpg',
    artistName: 'Lorem Ipsum',
    expertise: 'Lorem Ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    img: './assets/thumbpic3.jpg',
    artistName: 'Lorem Ipsum',
    expertise: 'Lorem Ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    img: './assets/thumbpic4.jpg',
    artistName: 'Lorem Ipsum',
    expertise: 'Lorem Ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    img: './assets/thumbpic5.jpg',
    artistName: 'Lorem Ipsum',
    expertise: 'Lorem Ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    img: './assets/thumbpic6.jpg',
    artistName: 'Lorem Ipsum',
    expertise: 'Lorem Ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
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