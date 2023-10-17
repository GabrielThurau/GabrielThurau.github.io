let pokemon = {
    name: "",
    type: "fire"
  };
  
  let name = pokemon.name || "Who's That Pokemon?"; 
  console.log(name); // Who's That Pokemon?
  
  let type = pokemon.type || 'prolly a bug type or something';
  console.log(type); // fire