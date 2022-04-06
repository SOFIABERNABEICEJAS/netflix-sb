// Definir URL entre categoria, tipoy week
export const definirURLGeneral = (categoria, tipo, week) => {
	if (week) {
		return `${categoria}/${tipo}/${week}`;
	} else {
		return `${tipo}/${categoria}`;
	}
};
