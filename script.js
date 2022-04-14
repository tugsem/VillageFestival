const hamBtn = document.querySelector('#hamBtn');
const navMenu = document.querySelector('#nav-menu');
const cancelMenu = document.querySelector('#cancel');
const artistList = document.querySelector('#artistList');
const moreBtn = document.querySelector('#seeMore');

hamBtn.addEventListener('click', () => {
    navMenu.classList.add('active');
    hamBtn.classList.add('active');
})

cancelMenu.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamBtn.classList.remove('active');
})

const artists = [
    {
        img: './assets/thumbpic1.jpg',
        artistName : 'Lorem Ipsum',
        expertise : 'Lorem Ipsum dolor sit amet',
        description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
        img: './assets/thumbpic2.jpg',
        artistName: 'Lorem Ipsum',
        expertise: 'Lorem Ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
        img: './assets/thumbpic3.jpg',
        artistName: 'Lorem Ipsum',
        expertise: 'Lorem Ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
        img: './assets/thumbpic4.jpg',
        artistName: 'Lorem Ipsum',
        expertise: 'Lorem Ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
        img: './assets/thumbpic5.jpg',
        artistName: 'Lorem Ipsum',
        expertise: 'Lorem Ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
        img: './assets/thumbpic6.jpg',
        artistName: 'Lorem Ipsum',
        expertise: 'Lorem Ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }
]

for (let artist of artists) {
        const shortline = document.createElement('div');
        shortline.style = 'border-bottom: 2px solid #d3d3d3; width: 20px;';
        let li = document.createElement('li');
        li.classList.add('listItem');
        let img = document.createElement('img');
        img.classList.add('artist-img');
        img.src = artist.img;
        let div = document.createElement('div');
        div.classList.add('side-info');
        let h3 = document.createElement('h3');
        h3.innerText = artist.artistName;
        let h4 = document.createElement('h4.job-title');
        h4.classList.add('job-title');
        h4.innerText = artist.expertise;
        let p = document.createElement('p');
        p.innerText = artist.description;
        div.append(h3, h4, shortline, p);
        li.append(img, div);
        artistList.appendChild(li);
}



