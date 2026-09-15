var LOGOS = {
    "Potrero FC": "Teams/potrero-fc.webp",
    "Juventud Unida": "https://i.postimg.cc/xjpKMwbk/Escudo-GL-removebg-preview.png",
    "Aston FC": "Teams/aston-fc.webp",
    "Confraternidad": "Teams/confraternidad.webp",
    "Muni San Basilio": "Teams/muni-san-basilio.webp",
    "Real Imperio FC": "Teams/real-imperio-fc.webp",
    "Carlos A. Mayol": "Teams/carlos-a-mayol.webp"
};

var LOGO_FALLBACKS = {
    "potrero-fc.webp": "https://i.postimg.cc/02Bjtx8c/Potrero-Removed.png",
    "aston-fc.webp": "https://i.postimg.cc/N028jp0X/Escudo-Aston-FC-removebg-preview.png",
    "confraternidad.webp": "https://i.postimg.cc/t4YvFdTh/Escudo-C-A-C-removebg-preview.png",
    "muni-san-basilio.webp": "https://i.postimg.cc/vBhH5wq5/Muni-San-Basilio-Removed.png",
    "real-imperio-fc.webp": "https://i.postimg.cc/bJbR33c0/escudo-imperio-removebg-preview.png",
    "carlos-a-mayol.webp": "https://i.postimg.cc/ZK2Y8ccg/Carlos-A-Mayol-Removed.png",
    "juventud-unida.webp": "https://i.postimg.cc/xjpKMwbk/Escudo-GL-removebg-preview.png"
};

function getFoto(eqNombre) {
    return LOGOS[eqNombre] || "";
}

var TEAM_IDS_BY_NAME = {
    "Potrero FC": "potrero",
    "Juventud Unida": "juventud",
    "Confraternidad": "confraternidad",
    "Aston FC": "aston",
    "Real Imperio FC": "imperio",
    "Muni San Basilio": "muni",
    "Carlos A. Mayol": "mayol"
};

function getTeamIdByNombre(nombre) {
    return TEAM_IDS_BY_NAME[nombre];
}

function getNombreByTeamId(id) {
    return Object.keys(TEAM_IDS_BY_NAME).find(nombre => TEAM_IDS_BY_NAME[nombre] === id);
}

var teamsData = {
    aston: { name: "Aston Fútbol Club", location: "General Levalle, Provincia de Córdoba", stadium: "", stadiumUrl: "", ig: "https://www.instagram.com/astonfutbolclub_?igsh=MWhpc3N2aG9kMTI2Yg==", logo: LOGOS["Aston FC"] },
    mayol: { name: "Club Social y Deportivo Carlos A. Mayol", location: "Huanchilla, Provincia de Córdoba", stadium: "El Mayol", stadiumUrl: "http://maps.google.com", ig: "https://www.instagram.com/carlosamayolfutbol?igsh=eGI0YXlwdXgxd2Vx", logo: LOGOS["Carlos A. Mayol"] },
    confraternidad: { name: "Club Atlético Confraternidad", location: "Monte De Los Gauchos, Provincia de Córdoba", stadium: "El Bosque", stadiumUrl: "http://maps.google.com", ig: "https://www.instagram.com/club_confraternidad?igsh=ZmtiN29xN3F4OGw3", logo: LOGOS["Confraternidad"] },
    muni: { name: "Club Deportivo Municipal de San Basilio", location: "San Basilio, Provincia de Córdoba", stadium: "San Basilio", stadiumUrl: "http://maps.google.com", ig: "https://www.instagram.com/cdmsb_elmuni?igsh=MWNjd2o3cW9lNmJ6aQ==", logo: LOGOS["Muni San Basilio"] },
    juventud: { name: "Juventud Unida", location: "General Levalle, Provincia de Córdoba", stadium: "Predio Ramón J. Carcano", stadiumUrl: "", ig: "https://www.instagram.com/juventudunidagrallevalle?igsh=bXR1aHE5cnRyMHV5", logo: LOGOS["Juventud Unida"] },
    potrero: { name: "Potrero Futbol Club", location: "Río Cuarto, Provincia de Córdoba", stadium: "", stadiumUrl: "", ig: "https://www.instagram.com/el_potrerofc?igsh=MTVkaWQxaTh5bGZudA==", logo: LOGOS["Potrero FC"] },
    imperio: { name: "Real Imperio Futbol Club", location: "Río Cuarto, Provincia de Córdoba", stadium: "Pucará IV", stadiumUrl: "http://maps.google.com", ig: "https://www.instagram.com/realimperiofc_?igsh=YTl1ZmdlYm53YjU5", logo: LOGOS["Real Imperio FC"] }
};
