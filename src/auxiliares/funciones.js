// Definir URL entre categoria, tipoy week
export const definirURLGeneral = (categoria, tipo, week) => {
	if (week) {
		return `${categoria}/${tipo}/${week}`;
	} else {
		return `${tipo}/${categoria}`;
	}
};


// recordá dejar espacio entre los operadores: export const numeroCartas = () => {
export const numeroCartas=()=>{
	 const pantalla = window.innerWidth;

  if (pantalla > 1300) {
    return 6;
  } else if (pantalla <= 1300 && pantalla > 1180) {
    return 5;
	} else if (pantalla <= 1180 && pantalla >960) {
		return 4;
  } else if (pantalla <= 960 && pantalla >750) {
    return 3;
  } else if (pantalla <= 750 && pantalla > 520) {
    return 2;
  } else if (pantalla <= 520) {
    return 1;
  }
};

