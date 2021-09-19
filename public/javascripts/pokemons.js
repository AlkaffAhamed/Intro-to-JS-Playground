// wrap code in IIFE
(async function pokemonPage()
{
  // fetch pokemon list from `/api/pokemons`
  pokemonlist = await fetch("/api/pokemons")
  .then(p => p.json())

  // console.log(pokemonlist)

  // remove the placeholder in #pokemon-list
  const placeholder = document.querySelector("#pokemon-list")
  placeholder.innerHTML = ""

  // For each pokemon,
  Array.from(pokemonlist).forEach((pokemon) => 
  {
    //       1. create a li element with class 'col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200'
    const contents = document.createElement("li")
    contents.className = 'col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200'

    //       2. the li element should have the following inner HTML:
    //         <div class="flex-1 flex flex-col p-8">
    const divtag = document.createElement("div")
    divtag.className = "flex-1 flex flex-col p-8"

    //         <img
    //           class="w-32 h-32 flex-shrink-0 mx-auto bg-gray-200 rounded-full"
    //           src="${pokemon.thumbnail}"
    //           alt=""
    //         />
    const image = document.createElement("img")
    image.className = "w-32 h-32 flex-shrink-0 mx-auto bg-gray-200 rounded-full"
    image.src = pokemon.thumbnail

    //         <h3 class="mt-6 text-gray-900 text-sm font-medium">
    //           ${pokemon.name.english}
    //         </h3>
    const pokemonName = document.createElement("h3")
    pokemonName.className = "mt-6 text-gray-900 text-sm font-medium"
    pokemonName.innerHTML = pokemon.name.english

    //         <dl class="mt-1 flex-grow flex flex-col justify-between">
    //           <dd class="text-gray-500 text-sm line-clamp-3">${pokemon.description}</dd>
    //         </dl>
    const pokemonDesc = document.createElement("dl")
    pokemonDesc.className = "mt-1 flex-grow flex flex-col justify-between"
    pokemonDesc.innerHTML = `<dd class="text-gray-500 text-sm line-clamp-3">${pokemon.description}</dd>`

    //       </div>
    divtag.appendChild(image)
    divtag.appendChild(pokemonName)
    divtag.appendChild(pokemonDesc)
    contents.appendChild(divtag)

    //       3. append the li element to #pokemon-list
    placeholder.appendChild(contents)
  })
})()
