const messages = [
    "This is where it all begins...",
    "Commit committed",
    "Version control is awful",
    "COMMIT ALL THE FILES!",
    "The same thing we do every night, Pinky - try to take over the world!",
    "Lock S-foils in attack position",
    "This commit is a lie",
    "I'll explain when you're older!",
    "Here be Dragons",
    "Reinventing the wheel. Again.",
    "This is not the commit message you are looking for",
    "Batman! (this commit has no parents)",
    "Im one of those, when i walk, use both legs",
    "when i close my eyes, i cant see anything",
    "its dark, cause its night, too crazy"
  ];
  
  //funcion que obtiene un indice aleatorio y le hace un console.log
  const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
  }
  
  //hacemos export de la funcion
  module.exports = {
    funnyCommit
  };