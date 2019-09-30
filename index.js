// const GITHUB_BASE = 'https://api.github.com/';
const SWAPI = 'https://swapi.co/api/';
const queryAPI = async (endpoint) => {
    let fullURL = SWAPI + endpoint;
    const response = await fetch(fullURL);
    if (!response.ok) throw new Error('error in request' + fullURL);
    return await response.json();
};

const getPromises = async () => {
    try {
        const [films, species] = await Promise.all([
            queryAPI('films'),
            queryAPI('species')
        ]);
        return `films number: ${films.count}, number of species: ${species.count}`;
    } catch (e) {
        console.error(e)
    }
};

getPromises().then(r => document.getElementById('output').innerText = r);



