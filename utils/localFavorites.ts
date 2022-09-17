const toggleFavorite = (id: number) => {
    console.log('toggleFavorite');

    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (favorites.includes(id)) {
        favorites = favorites.filter((favorite) => favorite !== id);
    } else {
        favorites.push(id);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
}

const toggle = {
    toggleFavorite,
}

export default toggle;