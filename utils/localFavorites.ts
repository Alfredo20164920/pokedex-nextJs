const toggleFavorite = (id: number) => {

    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (favorites.includes(id)) {
        favorites = favorites.filter((favorite) => favorite !== id);
    } else {
        favorites.push(id);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
}

const existInFavorites = (id: number): boolean => {

    if(typeof window === 'undefined') return false;

    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.includes(id);
}

const getFavorites = (): number[] => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}

const favoritesPokemons = {
    toggleFavorite,
    existInFavorites,
    getFavorites
}

export default favoritesPokemons;