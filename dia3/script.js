class Pokemon{
    constructor(id,name,height,weight,sprites){

        this.id = id
        this.name = name
        this.height = height
        this.weight = weight
        this.sprites = sprites
    }
}


const getPokemon = name => {
    return new Promise((resolve, reject) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
            .then((response) => {
                if(response.status === 200) {
                    response.json()
                    .then((poke) => {
                        const pokemon = new Pokemon(poke.id, poke.name, poke.height, poke.weight, poke.sprites.front_default);
                        resolve(pokemon);
                    })
                    .catch(err => reject(err))   
                } else {
                    reject(`HTTP Status ${response.status}`)
                }
            })
            .catch((error) => console.log(error));
    })
}




getPokemon('charmander')
.then((data) => console.log(data))
.catch((razon)=>console.log(razon))