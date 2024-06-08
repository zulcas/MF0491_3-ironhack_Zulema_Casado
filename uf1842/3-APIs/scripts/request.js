async function getPuzzle(wordCount) {
    //Llamada a API
    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    //Convertimos respuesta a JSON
    const data = await response.json();
    return data.puzzle;
}
