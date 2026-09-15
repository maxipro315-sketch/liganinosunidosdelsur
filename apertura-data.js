const EQUIPOS = { POTRERO: "Potrero FC", JUVE: "Juventud Unida", CONFRA: "Confraternidad", ASTON: "Aston FC", IMPERIO: "Real Imperio FC", MUNI: "Muni San Basilio", MAYOL: "Carlos A. Mayol" };

const datosPrimera = [
    { nombre: "Potrero FC", pj: 6, pts: 16, gf: 13, gc: 3, foto: getFoto("Potrero FC") }, 
    { nombre: "Juventud Unida", pj: 6, pts: 13, gf: 12, gc: 4, foto: getFoto("Juventud Unida") },
    { nombre: "Aston FC", pj: 6, pts: 9, gf: 10, gc: 11, foto: getFoto("Aston FC") },
    { nombre: "Confraternidad", pj: 6, pts: 8, gf: 5, gc: 5, foto: getFoto("Confraternidad") },
    { nombre: "Muni San Basilio", pj: 6, pts: 5, gf: 6, gc: 9, foto: getFoto("Muni San Basilio") }, 
    { nombre: "Real Imperio FC", pj: 6, pts: 4, gf: 4, gc: 8, foto: getFoto("Real Imperio FC") },
    { nombre: "Carlos A. Mayol", pj: 6, pts: 3, gf: 3, gc: 13, foto: getFoto("Carlos A. Mayol") }
];

const datosReserva = [
    { nombre: "Real Imperio FC", pj: 6, pts: 13, gf: 14, gc: 7, foto: getFoto("Real Imperio FC") },
    { nombre: "Carlos A. Mayol", pj: 6, pts: 10, gf: 13, gc: 7, foto: getFoto("Carlos A. Mayol") },
    { nombre: "Potrero FC", pj: 6, pts: 10, gf: 9, gc: 7, foto: getFoto("Potrero FC") },
    { nombre: "Juventud Unida", pj: 6, pts: 9, gf: 8, gc: 13, foto: getFoto("Juventud Unida") },
    { nombre: "Muni San Basilio", pj: 6, pts: 8, gf: 4, gc: 5, foto: getFoto("Muni San Basilio") },
    { nombre: "Aston FC", pj: 6, pts: 7, gf: 8, gc: 12, foto: getFoto("Aston FC") },
    { nombre: "Confraternidad", pj: 6, pts: 2, gf: 5, gc: 10, foto: getFoto("Confraternidad") }
];

const resultadosHistoricos = {
    primera: [
        { id: "f1", nombre: "FECHA 1", libre: "Carlos A. Mayol", partidos: [{ local: "Real Imperio FC", gl: 1, visitante: "Aston FC", gv: 2 }, { local: "Juventud Unida", gl: 1, visitante: "Muni San Basilio", gv: 1 }, { local: "Potrero FC", gl: 0, visitante: "Confraternidad", gv: 0 }]},
        { id: "f2", nombre: "FECHA 2", libre: "Potrero FC", partidos: [{ local: "Muni San Basilio", gl: 2, visitante: "Carlos A. Mayol", gv: 2 }, { local: "Real Imperio FC", gl: 1, visitante: "Confraternidad", gv: 0 }, { local: "Aston FC", gl: 0, visitante: "Juventud Unida", gv: 3 }]},
        { id: "f3", nombre: "FECHA 3", libre: "Real Imperio FC", partidos: [{ local: "Aston FC", gl: 1, visitante: "Confraternidad", gv: 2 }, { local: "Carlos A. Mayol", gl: 0, visitante: "Juventud Unida", gv: 3 }, { local: "Muni San Basilio", gl: 0, visitante: "Potrero FC", gv: 1 }]},
        { id: "f4", nombre: "FECHA 4", libre: "Confraternidad", partidos: [{ local: "Muni San Basilio", gl: 2, visitante: "Real Imperio FC", gv: 1 }, { local: "Juventud Unida", gl: 1, visitante: "Potrero FC", gv: 2 }, { local: "Carlos A. Mayol", gl: 0, visitante: "Aston FC", gv: 3 }]},
        { id: "f5", nombre: "FECHA 5", libre: "Aston FC", partidos: [{ local: "Real Imperio FC", gl: 0, visitante: "Juventud Unida", gv: 1 }, { local: "Confraternidad", gl: 2, visitante: "Muni San Basilio", gv: 0 }, { local: "Potrero FC", gl: 4, visitante: "Carlos A. Mayol", gv: 0 }]},
        { id: "f6", nombre: "FECHA 6", libre: "Muni San Basilio", partidos: [{ local: "Carlos A. Mayol", gl: 1, visitante: "Real Imperio FC", gv: 1 }, { local: "Juventud Unida", gl: 3, visitante: "Confraternidad", gv: 1 }, { local: "Potrero FC", gl: 4, visitante: "Aston FC", gv: 2 }]},
        { id: "f7", nombre: "FECHA 7", libre: "Juventud Unida", partidos: [{ local: "Aston FC", gl: 2, visitante: "Muni San Basilio", gv: 1 }, { local: "Confraternidad", gl: 0, visitante: "Carlos A. Mayol", gv: 0 }, { local: "Real Imperio FC", gl: 0, visitante: "Potrero FC", gv: 2 }]}
    ],
    reserva: [
        { id: "f1", nombre: "FECHA 1", libre: "Carlos A. Mayol", partidos: [{ local: "Real Imperio FC", gl: 3, visitante: "Aston FC", gv: 2 }, { local: "Juventud Unida", gl: 1, visitante: "Muni San Basilio", gv: 0 }, { local: "Potrero FC", gl: 2, visitante: "Confraternidad", gv: 1 }]},
        { id: "f2", nombre: "FECHA 2", libre: "Potrero FC", partidos: [{ local: "Muni San Basilio", gl: 0, visitante: "Carlos A. Mayol", gv: 0 }, { local: "Real Imperio FC", gl: 1, visitante: "Confraternidad", gv: 1 }, { local: "Aston FC", gl: 2, visitante: "Juventud Unida", gv: 1 }]},
        { id: "f3", nombre: "FECHA 3", libre: "Real Imperio FC", partidos: [{ local: "Aston FC", gl: 1, visitante: "Confraternidad", gv: 1 }, { local: "Carlos A. Mayol", gl: 4, visitante: "Juventud Unida", gv: 0 }, { local: "Muni San Basilio", gl: 0, visitante: "Potrero FC", gv: 0 }]},
        { id: "f4", nombre: "FECHA 4", libre: "Confraternidad", partidos: [{ local: "Muni San Basilio", gl: 2, visitante: "Real Imperio FC", gv: 1 }, { local: "Juventud Unida", gl: 4, visitante: "Potrero FC", gv: 2 }, { local: "Carlos A. Mayol", gl: 4, visitante: "Aston FC", gv: 1 }]},
        { id: "f5", nombre: "FECHA 5", libre: "Aston FC", partidos: [{ local: "Muni San Basilio", gl: 2, visitante: "Confraternidad", gv: 1 }, { local: "Real Imperio FC", gl: 4, visitante: "Juventud Unida", gv: 0 }, { local: "Potrero FC", gl: 2, visitante: "Carlos A. Mayol", gv: 1 }]},
        { id: "f6", nombre: "FECHA 6", libre: "Muni San Basilio", partidos: [{ local: "Carlos A. Mayol", gl: 2, visitante: "Real Imperio FC", gv: 4 }, { local: "Juventud Unida", gl: 2, visitante: "Confraternidad", gv: 1 }, { local: "Potrero FC", gl: 3, visitante: "Aston FC", gv: 0 }]},
        { id: "f7", nombre: "FECHA 7", libre: "Juventud Unida", partidos: [{ local: "Aston FC", gl: 2, visitante: "Muni San Basilio", gv: 0 }, { local: "Confraternidad", gl: 0, visitante: "Carlos A. Mayol", gv: 2 }, { local: "Real Imperio FC", gl: 1, visitante: "Potrero FC", gv: 0 }]}
    ]
};

const goleadoresDataPrimera = [
    { nombre: "Bautista Flores", equipo: "Juventud Unida", goles: 8, escudo: getFoto("Juventud Unida") },
    { nombre: "Roque Krafic", equipo: "Potrero FC", goles: 7, escudo: getFoto("Potrero FC") },
    { nombre: "Flores Facundo", equipo: "Muni San Basilio", goles: 4, escudo: getFoto("Muni San Basilio") },
    { nombre: "Giménez Eliseo", equipo: "Confraternidad", goles: 3, escudo: getFoto("Confraternidad") },
    { nombre: "Farias Sergio", equipo: "Juventud Unida", goles: 3, escudo: getFoto("Juventud Unida") },
    { nombre: "Molina Facundo", equipo: "Aston FC", goles: 3, escudo: getFoto("Aston FC") },
    { nombre: "Cardetti Daniel", equipo: "Real Imperio FC", goles: 3, escudo: getFoto("Real Imperio FC") },
    { nombre: "Arce Gabriel", equipo: "Real Imperio FC", goles: 3, escudo: getFoto("Real Imperio FC") },
    { nombre: "Torres Facundo", equipo: "Potrero FC", goles: 3, escudo: getFoto("Potrero FC") },
    { nombre: "Azcurra Jorge", equipo: "Muni San Basilio", goles: 2, escudo: getFoto("Muni San Basilio") },
    { nombre: "Sosa Rodrigo", equipo: "Confraternidad", goles: 2, escudo: getFoto("Confraternidad") },
    { nombre: "Colombero Alan", equipo: "Aston FC", goles: 2, escudo: getFoto("Aston FC") },
    { nombre: "Villalobo Alejo", equipo: "Real Imperio FC", goles: 2, escudo: getFoto("Real Imperio FC") },
    { nombre: "Silva Agustín", equipo: "Potrero FC", goles: 2, escudo: getFoto("Potrero FC") },
    { nombre: "Quiroga Ulises", equipo: "Aston FC", goles: 2, escudo: getFoto("Aston FC") },
    { nombre: "Benítez Germán", equipo: "Carlos A. Mayol", goles: 2, escudo: getFoto("Carlos A. Mayol") },
    { nombre: "Macagno Isa", equipo: "Real Imperio FC", goles: 2, escudo: getFoto("Real Imperio FC") },
    { nombre: "Tejeda Gastón", equipo: "Aston FC", goles: 1, escudo: getFoto("Aston FC") },
    { nombre: "Cejas Alexis", equipo: "Carlos A. Mayol", goles: 1, escudo: getFoto("Carlos A. Mayol") },
    { nombre: "Mercau Thiago", equipo: "Juventud Unida", goles: 1, escudo: getFoto("Juventud Unida") },
    { nombre: "Magallanes Yonatan", equipo: "Juventud Unida", goles: 1, escudo: getFoto("Juventud Unida") },
    { nombre: "Flores Uriel", equipo: "Confraternidad", goles: 1, escudo: getFoto("Confraternidad") },
    { nombre: "Sosa Carlos", equipo: "Confraternidad", goles: 1, escudo: getFoto("Confraternidad") },
    { nombre: "García Manuel", equipo: "Aston FC", goles: 1, escudo: getFoto("Aston FC") },
    { nombre: "Selva Dip Joaquín", equipo: "Juventud Unida", goles: 1, escudo: getFoto("Juventud Unida") },
    { nombre: "Canciano Francisco", equipo: "Muni San Basilio", goles: 1, escudo: getFoto("Muni San Basilio") },
    { nombre: "González Michael", equipo: "Real Imperio FC", goles: 1, escudo: getFoto("Real Imperio FC") },
    { nombre: "Boaglio Tomas", equipo: "Carlos A. Mayol", goles: 1, escudo: getFoto("Carlos A. Mayol") },
    { nombre: "Fernández Jonathan", equipo: "Potrero FC", goles: 1, escudo: getFoto("Potrero FC") },
    { nombre: "Arce Miguel", equipo: "Juventud Unida", goles: 1, escudo: getFoto("Juventud Unida") },
    { nombre: "Mosqueira Nahuel", equipo: "Real Imperio FC", goles: 1, escudo: getFoto("Real Imperio FC") },
    { nombre: "Bollo Pablo", equipo: "Carlos A. Mayol", goles: 1, escudo: getFoto("Carlos A. Mayol") },
    { nombre: "Alvaro Barrios", equipo: "Potrero FC", goles: 1, escudo: getFoto("Potrero FC") },
    { nombre: "Martinez Ezequiel", equipo: "Potrero FC", goles: 1, escudo: getFoto("Potrero FC") },
    { nombre: "Mansilla Joel", equipo: "Real Imperio FC", goles: 1, escudo: getFoto("Real Imperio FC") },
    { nombre: "Alfaro Leandro", equipo: "Real Imperio FC", goles: 1, escudo: getFoto("Real Imperio FC") },
    { nombre: "Bustos Martin", equipo: "Juventud Unida", goles: 1, escudo: getFoto("Juventud Unida") }
];

const goleadoresDataReserva = [
    { nombre: "Torres David", equipo: "Real Imperio FC", goles: 8, escudo: getFoto("Real Imperio FC") },
    { nombre: "Sibona Valentin", equipo: "Carlos A. Mayol", goles: 4, escudo: getFoto("Carlos A. Mayol") },
    { nombre: "Gutiérrez Gaston", equipo: "Confraternidad", goles: 3, escudo: getFoto("Confraternidad") },
    { nombre: "Díaz Bruno", equipo: "Juventud Unida", goles: 3, escudo: getFoto("Juventud Unida") },
    { nombre: "Quiroga Bautista", equipo: "Aston FC", goles: 3, escudo: getFoto("Aston FC") },
    { nombre: "Pajon Julian", equipo: "Potrero FC", goles: 3, escudo: getFoto("Potrero FC") },
    { nombre: "Arce Miguel", equipo: "Juventud Unida", goles: 3, escudo: getFoto("Juventud Unida") },
    { nombre: "Martinez Ezequiel", equipo: "Potrero FC", goles: 2, escudo: getFoto("Potrero FC") },
    { nombre: "Trigo Joaquin", equipo: "Carlos A. Mayol", goles: 2, escudo: getFoto("Carlos A. Mayol") },
    { nombre: "Quiroga Douglas", equipo: "Carlos A. Mayol", goles: 2, escudo: getFoto("Carlos A. Mayol") },
    { nombre: "Carmona Oscar", equipo: "Juventud Unida", goles: 2, escudo: getFoto("Juventud Unida") },
    { nombre: "Pérez Leandro", equipo: "Juventud Unida", goles: 2, escudo: getFoto("Juventud Unida") },
    { nombre: "Bustos Martin", equipo: "Juventud Unida", goles: 2, escudo: getFoto("Juventud Unida") },
    { nombre: "Martini Federico", equipo: "Juventud Unida", goles: 1, escudo: getFoto("Juventud Unida") },
    { nombre: "Cáceres Damian", equipo: "Juventud Unida", goles: 1, escudo: getFoto("Juventud Unida") },
    { nombre: "Mauro Estabre", equipo: "Potrero FC", goles: 1, escudo: getFoto("Potrero FC") },
    { nombre: "Lautaro Gabosi", equipo: "Potrero FC", goles: 1, escudo: getFoto("Potrero FC") },
    { nombre: "Cardetti Daniel", equipo: "Real Imperio FC", goles: 1, escudo: getFoto("Real Imperio FC") },
    { nombre: "Saborgano David", equipo: "Real Imperio FC", goles: 1, escudo: getFoto("Real Imperio FC") },
    { nombre: "Soto Leandro", equipo: "Aston FC", goles: 1, escudo: getFoto("Aston FC") },
    { nombre: "Galarza Gaston", equipo: "Carlos A. Mayol", goles: 1, escudo: getFoto("Carlos A. Mayol") },
    { nombre: "Diaz Joaquin", equipo: "Real Imperio FC", goles: 1, escudo: getFoto("Real Imperio FC") },
    { nombre: "Rojo Facundo", equipo: "Confraternidad", goles: 1, escudo: getFoto("Confraternidad") },
    { nombre: "Pascual Samuel", equipo: "Aston FC", goles: 1, escudo: getFoto("Aston FC") },
    { nombre: "Rosales Jona", equipo: "Juventud Unida", goles: 1, escudo: getFoto("Juventud Unida") },
    { nombre: "Cabral Bruno", equipo: "Potrero FC", goles: 1, escudo: getFoto("Potrero FC") },
    { nombre: "Núñez Yeray", equipo: "Carlos A. Mayol", goles: 1, escudo: getFoto("Carlos A. Mayol") },
    { nombre: "Gargano Axel", equipo: "Carlos A. Mayol", goles: 1, escudo: getFoto("Carlos A. Mayol") },
    { nombre: "Bosco Facundo", equipo: "Aston FC", goles: 1, escudo: getFoto("Aston FC") },
    { nombre: "Ochoa Mariano", equipo: "Confraternidad", goles: 1, escudo: getFoto("Confraternidad") },
    { nombre: "Saldaño Alexis", equipo: "Muni San Basilio", goles: 1, escudo: getFoto("Muni San Basilio") },
    { nombre: "Vicentini Tomas", equipo: "Muni San Basilio", goles: 1, escudo: getFoto("Muni San Basilio") },
    { nombre: "Ojeda Tomas", equipo: "Carlos A. Mayol", goles: 1, escudo: getFoto("Carlos A. Mayol") },
    { nombre: "Toledo Martin", equipo: "Carlos A. Mayol", goles: 1, escudo: getFoto("Carlos A. Mayol") },
    { nombre: "Moriondo Tomas", equipo: "Muni San Basilio", goles: 1, escudo: getFoto("Muni San Basilio") },
    { nombre: "Arias Mayco", equipo: "Muni San Basilio", goles: 1, escudo: getFoto("Muni San Basilio") },
    { nombre: "Torres Facundo", equipo: "Potrero FC", goles: 1, escudo: getFoto("Potrero FC") },
    { nombre: "Ortiz Gonzalo", equipo: "Real Imperio FC", goles: 1, escudo: getFoto("Real Imperio FC") },
    { nombre: "Paredes Emiliano", equipo: "Real Imperio FC", goles: 1, escudo: getFoto("Real Imperio FC") },
    { nombre: "Leguiza Diego", equipo: "Confraternidad", goles: 1, escudo: getFoto("Confraternidad") },
    { nombre: "Neuen Lepori", equipo: "Real Imperio FC", goles: 1, escudo: getFoto("Real Imperio FC") },
    { nombre: "Luna Tomas", equipo: "Real Imperio FC", goles: 1, escudo: getFoto("Real Imperio FC") },
    { nombre: "López Uriel", equipo: "Real Imperio FC", goles: 1, escudo: getFoto("Real Imperio FC") },
    { nombre: "Quintero Maximo", equipo: "Real Imperio FC", goles: 1, escudo: getFoto("Real Imperio FC") },
    { nombre: "Andrés Matías", equipo: "Aston FC", goles: 1, escudo: getFoto("Aston FC") },
    { nombre: "Tello Jesús", equipo: "Aston FC", goles: 1, escudo: getFoto("Aston FC") },
    { nombre: "Coria Ulises", equipo: "Aston FC", goles: 1, escudo: getFoto("Aston FC") },
    { nombre: "Fernandez Ricardo", equipo: "Carlos A. Mayol", goles: 1, escudo: getFoto("Carlos A. Mayol") },
    { nombre: "Aimé Agustín", equipo: "Real Imperio FC", goles: 1, escudo: getFoto("Real Imperio FC") },
    { nombre: "Enzo Rosales", equipo: "Juventud Unida", goles: 1, escudo: getFoto("Juventud Unida") },
    { nombre: "Lopez Matias", equipo: "Potrero FC", goles: 1, escudo: getFoto("Potrero FC") }
];

const playoffsData = {
    primera: { 
        cuartos: [ 
            { eq1: EQUIPOS.CONFRA, eq2: EQUIPOS.JUVE, ida1: "2", vuelta1: "0", global1: "2", ida2: "1", vuelta2: "1", global2: "2", nota: "Pasó Juventud Unida por penales" }, 
            { eq1: EQUIPOS.MUNI, eq2: EQUIPOS.IMPERIO, ida1: "1", vuelta1: "0", global1: "1", ida2: "3", vuelta2: "2", global2: "5" }, 
            { eq1: EQUIPOS.MAYOL, eq2: EQUIPOS.ASTON, ida1: "0", vuelta1: "2", global1: "2", ida2: "0", vuelta2: "3", global2: "3" } 
        ],
        semis: [
            { eq1: EQUIPOS.POTRERO, eq2: EQUIPOS.ASTON, ida1: "2", vuelta1: "2", global1: "4", ida2: "1", vuelta2: "1", global2: "2", nota: "Pasó Potrero FC" },
            { eq1: EQUIPOS.JUVE, eq2: EQUIPOS.IMPERIO, ida1: "2", vuelta1: "2", global1: "4", ida2: "4", vuelta2: "0", global2: "4", nota: "Ganó Real Imperio FC 4-3 en penales" }
        ],
        final: [
            { eq1: EQUIPOS.POTRERO, eq2: EQUIPOS.IMPERIO, ida1: "1", vuelta1: "-", global1: "-", ida2: "0", vuelta2: "-", global2: "-", nota: "¡CAMPEÓN POTRERO FC!" }
        ]
    },
    reserva: { 
        cuartos: [ 
            { eq1: EQUIPOS.CONFRA, eq2: EQUIPOS.JUVE, ida1: "1", vuelta1: "0", global1: "1", ida2: "1", vuelta2: "2", global2: "3" }, 
            { eq1: EQUIPOS.MUNI, eq2: EQUIPOS.IMPERIO, ida1: "0", vuelta1: "1", global1: "1", ida2: "1", vuelta2: "1", global2: "2" }, 
            { eq1: EQUIPOS.MAYOL, eq2: EQUIPOS.ASTON, ida1: "0", vuelta1: "1", global1: "1", ida2: "1", vuelta2: "3", global2: "4" } 
        ],
        semis: [
            { eq1: EQUIPOS.POTRERO, eq2: EQUIPOS.ASTON, ida1: "1", vuelta1: "3", global1: "4", ida2: "1", vuelta2: "2", global2: "3", nota: "Pasó Potrero FC" },
            { eq1: EQUIPOS.JUVE, eq2: EQUIPOS.IMPERIO, ida1: "3", vuelta1: "2", global1: "5", ida2: "2", vuelta2: "0", global2: "2", nota: "Pasó Juventud Unida" }
        ],
        final: [
            { eq1: EQUIPOS.POTRERO, eq2: EQUIPOS.JUVE, ida1: "3", vuelta1: "-", global1: "-", ida2: "2", vuelta2: "-", global2: "-", nota: "¡CAMPEÓN POTRERO FC!" }
        ]
    }
};

