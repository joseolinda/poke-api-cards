const createCard = (pokemon) => {
    const cards = document.querySelector(".container .cards");

    let tipos = "";

    for(let i = 0; i < pokemon.types.length; i++) {
        tipos += `<li>${pokemon.types[i].type.name}</li>`;
    }

    cards.innerHTML += `
        <div class="card">
            <span class="name">#${pokemon.id}</span>
            <img src="${pokemon.sprites.other["official-artwork"].front_default}" alt="" class="photo">
            <span class="name">${pokemon.name}</span>
            <span class="forms">Tipo: </span>
            <ul class="list_forms">
                ${tipos}
            </ul>
        </div>
    `;
}
const getPokemon = pokeID => {
    const ajax = new XMLHttpRequest();

    ajax.open("get", "https://pokeapi.co/api/v2/pokemon/" + pokeID);
    ajax.send();

    ajax.onreadystatechange = function() {
        if( this.readyState == 4 && this.status == 200) {
            let pokemon = JSON.parse(this.responseText);
            createCard(pokemon);
        }
    }
}

for(let i = 1; i <= 151; i++) {
    getPokemon(i);
}