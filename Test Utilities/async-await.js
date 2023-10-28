async function logGithub() {
    const response = await fetch("https://api.github.com/users/GabrielThurau");
    const userData = await response.json();
  }
  
  logGithub();