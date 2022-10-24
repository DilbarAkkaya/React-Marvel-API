

class MarvelService {
  getResource = async (url) => {
    let res = await fetch(url);

    if(!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  }
  getAllCharacters = () => {
    return this.getResource('https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=210&apikey=a87f33c97fe5b731013fc345d75f2fb1');
}
getCharacter = (id) => {
  return this.getResource(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=a87f33c97fe5b731013fc345d75f2fb1`);
}
}

export default MarvelService;