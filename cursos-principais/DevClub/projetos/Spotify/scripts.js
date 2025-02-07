document.addEventListener('DOMContentLoaded', () => {

const artistsData = [
    { name: 'BTS', image: './img/bts-capa.jfif' },
    { name: 'Beyonce', image: './img/beyonce.jfif' },
    { name: 'Tame Impala', image: './img/tame-impala.jfif' },
    { name: 'Dj Arana', image: './img/arana.jfif' },
    { name: 'Demi Lovato', image: './img/demi.jfif' },
    // { name: 'TV Girl', image: './img/tv-girl.jfif' },
    // { name: 'The Weeknd', image: './img/weenkend.jfif' },
    { name: 'Lil Peep', image: './img/peep.jfif' },
    // { name: 'Mitski', image: './img/miiii.jfif' },
     { name: 'MC Gw', image: './img/gw.jfif' }
];

const albumsData = [
    // { name: 'Melanchole', artist: 'Salvia Palth', image: './img/melanchole.jfif' },
    { name: 'Voicenotes', artist: 'Charlie Puth', image: './img/voicenotes-puth.jfif' },
    { name: 'Blackout', artist: 'Britney Spears', image: './img/blackout-spears.jfif' },
    { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: './img/album-hit-me.jpg' },
    { name: 'Shameless', artist: 'Camila Cabello', image: './img/camila.jfif' },
    // { name: '17', artist: 'XXXTENTACION', image: './img/17-xxx.jfif' },
    { name: 'Currents', artist: 'Tame Impala', image: './img/currents.jfif' },
    { name: 'Lust For Life', artist: 'Lana Del Rey', image: './img/lust-for-life.jfif' },
    { name: 'Who Really Cares', artist: 'TV Girl', image: './img/who.jfif' },
    { name: 'Malvatrem', artist: 'Slipmami', image: './img/malvatrem.jfif' },
];

const artistGrid = document.querySelector('.artistas-grid')
const albumsGrid = document.querySelector('.albums-grid')


    artistsData.forEach( artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')

        artistCard.innerHTML = `
            <img src="${artist.image}" alt="${artist.name}">
            <h3>${artist.name}</h3>
            <p>artista</p>
        `

        artistGrid.appendChild(artistCard)
    });


    albumsData.forEach( album => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')

        albumCard.innerHTML = `
            <img src="${album.image}" alt="${album.name}">
            <h3>${album.name}</h3>
            <p>${album.artist}</p>
        `

        albumsGrid.appendChild(albumCard)
    });

})