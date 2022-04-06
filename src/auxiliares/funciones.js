// Definir URL entre categoria, tipoy week
export const definirURLGeneral = (categoria, tipo, week) => {
	week ? `${categoria}/${tipo}/${week}` : `${tipo}/${categoria}`;
};
