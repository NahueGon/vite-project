/**
 * 
 * @param {Array<string>} deck 
 * @returns String
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) throw new Error('No hay cartas en el deck');

    const carta = deck.pop();

    return carta;
}