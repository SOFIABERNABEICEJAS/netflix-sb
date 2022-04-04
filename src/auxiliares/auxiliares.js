export const urlBase = `https://api.themoviedb.org/3/`;
export const apiKey = `api_key=92b7c9e2808de339886a0b75ca3aa28e`;
export const paginas = "&page=";
export const lenguaje = "&language=";

// Definir URL entre categoria, tipoy week
export const definirURL = (categoria, tipo, week) => {
	console.log(week);
	if (week) {
		return `${categoria}/${tipo}/${week}`;
	} else {
		return `${tipo}/${categoria}`;
	}
};
