/**
 * 
 * @param {String} carta
 * @returns HTMLImageElement
 */
export const crearCartaHTML = ( carta ) => {

    if (!carta) throw new Error("carta es obligatorio");

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');

    return imgCarta;
}