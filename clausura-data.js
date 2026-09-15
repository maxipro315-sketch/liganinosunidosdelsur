const EQUIPOS = { POTRERO: "Potrero FC", JUVE: "Juventud Unida", CONFRA: "Confraternidad", IMPERIO: "Real Imperio FC", MUNI: "Muni San Basilio", MAYOL: "Carlos A. Mayol" };

const datosPrimera = [
    { nombre: "Potrero FC", pj: 4, pts: 10, gf: 10, gc: 2, foto: getFoto("Potrero FC") }, 
    { nombre: "Juventud Unida", pj: 4, pts: 9, gf: 7, gc: 7, foto: getFoto("Juventud Unida") },
    { nombre: "Confraternidad", pj: 4, pts: 7, gf: 5, gc: 4, foto: getFoto("Confraternidad") },
    { nombre: "Muni San Basilio", pj: 4, pts: 3, gf: 6, gc: 9, foto: getFoto("Muni San Basilio") }, 
    { nombre: "Real Imperio FC", pj: 4, pts: 2, gf: 5, gc: 8, foto: getFoto("Real Imperio FC") },
    { nombre: "Carlos A. Mayol", pj: 4, pts: 3, gf: 4, gc: 7, foto: getFoto("Carlos A. Mayol") }
];

const datosReserva = [
    { nombre: "Potrero FC", pj: 4, pts: 3, gf: 7, gc: 5, foto: getFoto("Potrero FC") }, 
    { nombre: "Juventud Unida", pj: 4, pts: 7, gf: 9, gc: 7, foto: getFoto("Juventud Unida") },
    { nombre: "Confraternidad", pj: 4, pts: 1, gf: 3, gc: 12, foto: getFoto("Confraternidad") },
    { nombre: "Muni San Basilio", pj: 4, pts: 7, gf: 6, gc: 4, foto: getFoto("Muni San Basilio") }, 
    { nombre: "Real Imperio FC", pj: 4, pts: 7, gf: 5, gc: 5, foto: getFoto("Real Imperio FC") },
    { nombre: "Carlos A. Mayol", pj: 4, pts: 9, gf: 7, gc: 4, foto: getFoto("Carlos A. Mayol") }
];

const resultadosHistoricos = {
    primera: [
        { id: "f1", nombre: "FECHA 1", libre: "-", partidos: [
            { local: "Confraternidad", gl: 2, visitante: "Carlos A. Mayol", gv: 1, dia: "09/08/2026", cancha: "El Bosque", goleadoresLocal: ["Díaz Cristian", "Bonzanini Lázaro"], goleadoresVisitante: ["Boaglio Tomas"] },
            { local: "Muni San Basilio", gl: 2, visitante: "Juventud Unida", gv: 3, dia: "09/08/2026", cancha: "San Basilio", goleadoresLocal: ["Coppini Facundo", "Moriondo Tomás"], goleadoresVisitante: ["Gutiérrez Ezequiel", "Toledo Gabriel", "Moyano Francisco"] },
            { local: "Potrero FC", gl: 2, visitante: "Real Imperio FC", gv: 2, dia: "09/08/2026", cancha: "Renato Cesarini", goleadoresLocal: ["Lucero Jeremías", "Axel Quevedo"], goleadoresVisitante: ["Cardetti Daniel", "Azcurra Pablo"] }
        ]},
        { id: "f2", nombre: "FECHA 2", libre: "-", partidos: [
            { local: "Real Imperio FC", gl: 1, visitante: "Confraternidad", gv: 1, dia: "16/08/2026", cancha: "Pucara IV", goleadoresLocal: [], goleadoresVisitante: ["Aimar Bruno"] },
            { local: "Carlos A. Mayol", gl: 3, visitante: "Muni San Basilio", gv: 1, dia: "23/08/2026", cancha: "El Mayol", goleadoresLocal: ["Quiroga Jeremías", "Lima Silvio", "Cejas Alexis"], goleadoresVisitante: ["Yrusta Allen"] },
            { local: "Potrero FC", gl: 4, visitante: "Juventud Unida", gv: 0, dia: "23/08/2026", cancha: "Pucara IV", goleadoresLocal: ["Christopher Escudero", "Jeremías Lucero (2)", "Facundo Torres"], goleadoresVisitante: [] }
        ]},
        { id: "f3", nombre: "FECHA 3", libre: "-", partidos: [
            { local: "Potrero FC", gl: 3, visitante: "Carlos A. Mayol", gv: 0, dia: "30/08/2026", cancha: "El Mayol", goleadoresLocal: ["Farias Valentín", "Escudero Christopher", "Bildoza Kevin"], goleadoresVisitante: [] },
            { local: "Confraternidad", gl: 2, visitante: "Muni San Basilio", gv: 1, dia: "30/08/2026", cancha: "El Bosque", goleadoresLocal: ["Aimar Bruno"], goleadoresVisitante: ["Ramonda Gaston"] },
            { local: "Juventud Unida", gl: 3, visitante: "Real Imperio FC", gv: 1, dia: "30/08/2026", cancha: "Predio Ramón J. Carcano", goleadoresLocal: ["Arias Hernán", "Oyola Néstor", "Enzo Rosales"], goleadoresVisitante: ["Fernández Maximiliano"] }
        ]},
        { id: "f4", nombre: "FECHA 4", libre: "-", partidos: [
            { local: "Juventud Unida", gl: 1, visitante: "Carlos A. Mayol", gv: 0, dia: "06/09/2026", cancha: "Predio Ramón J. Carcano", goleadoresLocal: ["Facundo Molina"], goleadoresVisitante: [] },
            { local: "Real Imperio FC", gl: 1, visitante: "Muni San Basilio", gv: 2, dia: "06/09/2026", cancha: "Pucara IV", goleadoresLocal: ["Alfaro Leandro"], goleadoresVisitante: ["Ramonda Gastón", "Canciano Francisco"] },
            { local: "Potrero FC", gl: 1, visitante: "Confraternidad", gv: 0, dia: "06/09/2026", cancha: "Centro Cultural Alberdi", goleadoresLocal: ["Escudero Christopher"], goleadoresVisitante: [] }
        ]},
        { id: "f5", nombre: "FECHA 5", proxima: true, partidos: [
            { local: "Muni San Basilio", gl: "-", visitante: "Potrero FC", gv: "-", dia: "20/09/2026", cancha: "San Basilio", localidad: "San Basilio, Provincia de Córdoba" },
            { local: "Carlos A. Mayol", gl: "-", visitante: "Real Imperio FC", gv: "-", dia: "20/09/2026", cancha: "El Mayol", localidad: "Huanchilla, Provincia de Córdoba" },
            { local: "Confraternidad", gl: "-", visitante: "Juventud Unida", gv: "-", dia: "20/09/2026", cancha: "El Bosque", localidad: "Monte De Los Gauchos, Provincia de Córdoba" }
        ]},
        { id: "f6", nombre: "FECHA 6", partidos: [
            { local: "Real Imperio FC", gl: "-", visitante: "Potrero FC", gv: "-", dia: "27/09/2026", cancha: "Pucara IV", localidad: "Río Cuarto, Provincia de Córdoba" },
            { local: "Carlos A. Mayol", gl: "-", visitante: "Confraternidad", gv: "-", dia: "27/09/2026", cancha: "El Mayol", localidad: "Huanchilla, Provincia de Córdoba" },
            { local: "Juventud Unida", gl: "-", visitante: "Muni San Basilio", gv: "-", dia: "27/09/2026", cancha: "Predio Ramón J. Carcano", localidad: "General Levalle, Provincia de Córdoba" }
        ]},
        { id: "f7", nombre: "FECHA 7", partidos: [
            { local: "Juventud Unida", gl: "-", visitante: "Potrero FC", gv: "-", dia: "11/10/2026", cancha: "Predio Ramón J. Carcano", localidad: "General Levalle, Provincia de Córdoba" },
            { local: "Muni San Basilio", gl: "-", visitante: "Carlos A. Mayol", gv: "-", dia: "11/10/2026", cancha: "San Basilio", localidad: "San Basilio, Provincia de Córdoba" },
            { local: "Confraternidad", gl: "-", visitante: "Real Imperio FC", gv: "-", dia: "11/10/2026", cancha: "El Bosque", localidad: "Monte De Los Gauchos, Provincia de Córdoba" }
        ]},
        { id: "f8", nombre: "FECHA 8", partidos: [
            { local: "Real Imperio FC", gl: "-", visitante: "Juventud Unida", gv: "-", dia: "18/10/2026", cancha: "Pucara IV", localidad: "Río Cuarto, Provincia de Córdoba" },
            { local: "Potrero FC", gl: "-", visitante: "Carlos A. Mayol", gv: "-", dia: "18/10/2026", cancha: "A confirmar", localidad: "Río Cuarto, Provincia de Córdoba" },
            { local: "Muni San Basilio", gl: "-", visitante: "Confraternidad", gv: "-", dia: "18/10/2026", cancha: "San Basilio", localidad: "San Basilio, Provincia de Córdoba" }
        ]},
        { id: "f9", nombre: "FECHA 9", partidos: [
            { local: "Confraternidad", gl: "-", visitante: "Potrero FC", gv: "-", dia: "01/11/2026", cancha: "El Bosque", localidad: "Monte De Los Gauchos, Provincia de Córdoba" },
            { local: "Muni San Basilio", gl: "-", visitante: "Real Imperio FC", gv: "-", dia: "01/11/2026", cancha: "San Basilio", localidad: "San Basilio, Provincia de Córdoba" },
            { local: "Carlos A. Mayol", gl: "-", visitante: "Juventud Unida", gv: "-", dia: "01/11/2026", cancha: "El Mayol", localidad: "Huanchilla, Provincia de Córdoba" }
        ]},
        { id: "f10", nombre: "FECHA 10", partidos: [
            { local: "Potrero FC", gl: "-", visitante: "Muni San Basilio", gv: "-", dia: "08/11/2026", cancha: "A confirmar", localidad: "Río Cuarto, Provincia de Córdoba" },
            { local: "Real Imperio FC", gl: "-", visitante: "Carlos A. Mayol", gv: "-", dia: "08/11/2026", cancha: "Pucara IV", localidad: "Río Cuarto, Provincia de Córdoba" },
            { local: "Juventud Unida", gl: "-", visitante: "Confraternidad", gv: "-", dia: "08/11/2026", cancha: "Predio Ramón J. Carcano", localidad: "General Levalle, Provincia de Córdoba" }
        ]}
    ],
    reserva: [
        { id: "f1", nombre: "FECHA 1", libre: "-", partidos: [
            { local: "Confraternidad", gl: 1, visitante: "Carlos A. Mayol", gv: 2, dia: "09/08/2026", cancha: "El Bosque", goleadoresLocal: ["Giles Genaro"], goleadoresVisitante: ["Ojeda Tomas", "Vega Sebastián"] },
            { local: "Muni San Basilio", gl: 1, visitante: "Juventud Unida", gv: 1, dia: "09/08/2026", cancha: "San Basilio", goleadoresLocal: ["Ruarte Gustavo"], goleadoresVisitante: ["Ávila Nicolino"] },
            { local: "Potrero FC", gl: 0, visitante: "Real Imperio FC", gv: 1, dia: "09/08/2026", cancha: "Renato Cesarini", goleadoresLocal: [], goleadoresVisitante: ["Torres Fran"] }
        ]},
        { id: "f2", nombre: "FECHA 2", libre: "-", partidos: [
            { local: "Real Imperio FC", gl: 0, visitante: "Confraternidad", gv: 0, dia: "16/08/2026", cancha: "Pucara IV", goleadoresLocal: [], goleadoresVisitante: [] },
            { local: "Carlos A. Mayol", gl: 1, visitante: "Muni San Basilio", gv: 2, dia: "23/08/2026", cancha: "El Mayol", goleadoresLocal: ["Trigo Joaquín"], goleadoresVisitante: ["Arias Mayco (2)"] },
            { local: "Potrero FC", gl: 0, visitante: "Juventud Unida", gv: 2, dia: "23/08/2026", cancha: "Pucara IV", goleadoresLocal: [], goleadoresVisitante: ["Ávila Nicolino", "Torres Juan"] }
        ]},
        { id: "f3", nombre: "FECHA 3", libre: "-", partidos: [
            { local: "Potrero FC", gl: 0, visitante: "Carlos A. Mayol", gv: 1, dia: "30/08/2026", cancha: "El Mayol", goleadoresLocal: [], goleadoresVisitante: ["Trigo Joaquín"] },
            { local: "Confraternidad", gl: 1, visitante: "Muni San Basilio", gv: 3, dia: "30/08/2026", cancha: "El Bosque", goleadoresLocal: ["Calderón Franco"], goleadoresVisitante: ["Arias Mayco", "Giraudo Agustín", "Burany Juan"] },
            { local: "Juventud Unida", gl: 5, visitante: "Real Imperio FC", gv: 3, dia: "30/08/2026", cancha: "Predio Ramón J. Carcano", goleadoresLocal: ["Fernandez Mariano", "Díaz Bruno", "Suárez Matías", "Torres Marcos (2)"], goleadoresVisitante: ["Torres Fran (2)", "Molinero Tomas"] }
        ]},
        { id: "f4", nombre: "FECHA 4", libre: "-", partidos: [
            { local: "Juventud Unida", gl: 1, visitante: "Carlos A. Mayol", gv: 3, dia: "06/09/2026", cancha: "Predio Ramón J. Carcano", goleadoresLocal: ["Alexis Rocha"], goleadoresVisitante: ["Joaquín Trigo (3)"] },
            { local: "Real Imperio FC", gl: 1, visitante: "Muni San Basilio", gv: 0, dia: "06/09/2026", cancha: "Pucara IV", goleadoresLocal: ["Rojas Pablo"], goleadoresVisitante: [] },
            { local: "Potrero FC", gl: 7, visitante: "Confraternidad", gv: 1, dia: "06/09/2026", cancha: "Centro Cultural Alberdi", goleadoresLocal: ["Escudero Christopher", "Sosa Rodrigo", "Varela Luciano", "Gabosi Lautaro", "Arias Nahuel", "Gabriel Oviedo", "Autogol"], goleadoresVisitante: ["Chávez Benjamin"] }
        ]},
        { id: "f5", nombre: "FECHA 5", proxima: true, partidos: [
            { local: "Muni San Basilio", gl: "-", visitante: "Potrero FC", gv: "-", dia: "20/09/2026", cancha: "San Basilio", localidad: "San Basilio, Provincia de Córdoba" },
            { local: "Carlos A. Mayol", gl: "-", visitante: "Real Imperio FC", gv: "-", dia: "20/09/2026", cancha: "El Mayol", localidad: "Huanchilla, Provincia de Córdoba" },
            { local: "Confraternidad", gl: "-", visitante: "Juventud Unida", gv: "-", dia: "20/09/2026", cancha: "El Bosque", localidad: "Monte De Los Gauchos, Provincia de Córdoba" }
        ]},
        { id: "f6", nombre: "FECHA 6", partidos: [
            { local: "Real Imperio FC", gl: "-", visitante: "Potrero FC", gv: "-", dia: "27/09/2026", cancha: "Pucara IV", localidad: "Río Cuarto, Provincia de Córdoba" },
            { local: "Carlos A. Mayol", gl: "-", visitante: "Confraternidad", gv: "-", dia: "27/09/2026", cancha: "El Mayol", localidad: "Huanchilla, Provincia de Córdoba" },
            { local: "Juventud Unida", gl: "-", visitante: "Muni San Basilio", gv: "-", dia: "27/09/2026", cancha: "Predio Ramón J. Carcano", localidad: "General Levalle, Provincia de Córdoba" }
        ]},
        { id: "f7", nombre: "FECHA 7", partidos: [
            { local: "Juventud Unida", gl: "-", visitante: "Potrero FC", gv: "-", dia: "11/10/2026", cancha: "Predio Ramón J. Carcano", localidad: "General Levalle, Provincia de Córdoba" },
            { local: "Muni San Basilio", gl: "-", visitante: "Carlos A. Mayol", gv: "-", dia: "11/10/2026", cancha: "San Basilio", localidad: "San Basilio, Provincia de Córdoba" },
            { local: "Confraternidad", gl: "-", visitante: "Real Imperio FC", gv: "-", dia: "11/10/2026", cancha: "El Bosque", localidad: "Monte De Los Gauchos, Provincia de Córdoba" }
        ]},
        { id: "f8", nombre: "FECHA 8", partidos: [
            { local: "Real Imperio FC", gl: "-", visitante: "Juventud Unida", gv: "-", dia: "18/10/2026", cancha: "Pucara IV", localidad: "Río Cuarto, Provincia de Córdoba" },
            { local: "Potrero FC", gl: "-", visitante: "Carlos A. Mayol", gv: "-", dia: "18/10/2026", cancha: "A confirmar", localidad: "Río Cuarto, Provincia de Córdoba" },
            { local: "Muni San Basilio", gl: "-", visitante: "Confraternidad", gv: "-", dia: "18/10/2026", cancha: "San Basilio", localidad: "San Basilio, Provincia de Córdoba" }
        ]},
        { id: "f9", nombre: "FECHA 9", partidos: [
            { local: "Confraternidad", gl: "-", visitante: "Potrero FC", gv: "-", dia: "01/11/2026", cancha: "El Bosque", localidad: "Monte De Los Gauchos, Provincia de Córdoba" },
            { local: "Muni San Basilio", gl: "-", visitante: "Real Imperio FC", gv: "-", dia: "01/11/2026", cancha: "San Basilio", localidad: "San Basilio, Provincia de Córdoba" },
            { local: "Carlos A. Mayol", gl: "-", visitante: "Juventud Unida", gv: "-", dia: "01/11/2026", cancha: "El Mayol", localidad: "Huanchilla, Provincia de Córdoba" }
        ]},
        { id: "f10", nombre: "FECHA 10", partidos: [
            { local: "Potrero FC", gl: "-", visitante: "Muni San Basilio", gv: "-", dia: "08/11/2026", cancha: "A confirmar", localidad: "Río Cuarto, Provincia de Córdoba" },
            { local: "Real Imperio FC", gl: "-", visitante: "Carlos A. Mayol", gv: "-", dia: "08/11/2026", cancha: "Pucara IV", localidad: "Río Cuarto, Provincia de Córdoba" },
            { local: "Juventud Unida", gl: "-", visitante: "Confraternidad", gv: "-", dia: "08/11/2026", cancha: "Predio Ramón J. Carcano", localidad: "General Levalle, Provincia de Córdoba" }
        ]}
    ]
};

function getProximaFecha(categoria = "primera") {
    const fechas = resultadosHistoricos[categoria] || [];
    return fechas.find(fecha => fecha.proxima) || fechas.find(fecha => fecha.partidos.some(partido => partido.gl === "-" && partido.gv === "-"));
}

const goleadoresDataPrimera = [
    { nombre: "Jeremías Lucero", equipo: "Potrero FC", goles: 3, escudo: getFoto("Potrero FC") },
    { nombre: "Christopher Escudero", equipo: "Potrero FC", goles: 3, escudo: getFoto("Potrero FC") },
    { nombre: "Aimar Bruno", equipo: "Confraternidad", goles: 1, escudo: getFoto("Confraternidad") },
    { nombre: "Gastón Ramonda", equipo: "Muni San Basilio", goles: 2, escudo: getFoto("Muni San Basilio") },
    { nombre: "Cristian Díaz", equipo: "Confraternidad", goles: 1, escudo: getFoto("Confraternidad") },
    { nombre: "Lázaro Bonzanini", equipo: "Confraternidad", goles: 1, escudo: getFoto("Confraternidad") },
    { nombre: "Tomás Boaglio", equipo: "Carlos A. Mayol", goles: 1, escudo: getFoto("Carlos A. Mayol") },
    { nombre: "Facundo Coppini", equipo: "Muni San Basilio", goles: 1, escudo: getFoto("Muni San Basilio") },
    { nombre: "Tomás Moriondo", equipo: "Muni San Basilio", goles: 1, escudo: getFoto("Muni San Basilio") },
    { nombre: "Ezequiel Gutiérrez", equipo: "Juventud Unida", goles: 1, escudo: getFoto("Juventud Unida") },
    { nombre: "Gabriel Toledo", equipo: "Juventud Unida", goles: 1, escudo: getFoto("Juventud Unida") },
    { nombre: "Francisco Moyano", equipo: "Juventud Unida", goles: 1, escudo: getFoto("Juventud Unida") },
    { nombre: "Axel Quevedo", equipo: "Potrero FC", goles: 1, escudo: getFoto("Potrero FC") },
    { nombre: "Daniel Cardetti", equipo: "Real Imperio FC", goles: 1, escudo: getFoto("Real Imperio FC") },
    { nombre: "Pablo Azcurra", equipo: "Real Imperio FC", goles: 1, escudo: getFoto("Real Imperio FC") },
    { nombre: "Jeremías Quiroga", equipo: "Carlos A. Mayol", goles: 1, escudo: getFoto("Carlos A. Mayol") },
    { nombre: "Silvio Lima", equipo: "Carlos A. Mayol", goles: 1, escudo: getFoto("Carlos A. Mayol") },
    { nombre: "Alexis Cejas", equipo: "Carlos A. Mayol", goles: 1, escudo: getFoto("Carlos A. Mayol") },
    { nombre: "Allen Yrusta", equipo: "Muni San Basilio", goles: 1, escudo: getFoto("Muni San Basilio") },
    { nombre: "Facundo Torres", equipo: "Potrero FC", goles: 1, escudo: getFoto("Potrero FC") },
    { nombre: "Valentín Farias", equipo: "Potrero FC", goles: 1, escudo: getFoto("Potrero FC") },
    { nombre: "Kevin Bildoza", equipo: "Potrero FC", goles: 1, escudo: getFoto("Potrero FC") },
    { nombre: "Hernán Arias", equipo: "Juventud Unida", goles: 1, escudo: getFoto("Juventud Unida") },
    { nombre: "Néstor Oyola", equipo: "Juventud Unida", goles: 1, escudo: getFoto("Juventud Unida") },
    { nombre: "Enzo Rosales", equipo: "Juventud Unida", goles: 1, escudo: getFoto("Juventud Unida") },
    { nombre: "Maximiliano Fernández", equipo: "Real Imperio FC", goles: 1, escudo: getFoto("Real Imperio FC") },
    { nombre: "Francisco Canciano", equipo: "Muni San Basilio", goles: 1, escudo: getFoto("Muni San Basilio") },
    { nombre: "Leandro Alfaro", equipo: "Real Imperio FC", goles: 1, escudo: getFoto("Real Imperio FC") },
    { nombre: "Facundo Molina", equipo: "Juventud Unida", goles: 1, escudo: getFoto("Juventud Unida") }
];

const vallaInvictaPrimera = [
    { nombre: "Romero Fabricio", equipo: "Potrero FC", partidos: 1, escudo: getFoto("Potrero FC") },
    { nombre: "Salinas Daniel", equipo: "Potrero FC", partidos: 2, escudo: getFoto("Potrero FC") },
    { nombre: "Fernando González", equipo: "Juventud Unida", partidos: 1, escudo: getFoto("Juventud Unida") },
    { nombre: "Carlos Vera", equipo: "Juventud Unida", partidos: 1, escudo: getFoto("Juventud Unida") }
];
const vallaInvictaReserva = [
    { nombre: "Pérez Nahuel", equipo: "Real Imperio FC", partidos: 3, escudo: getFoto("Real Imperio FC") },
    { nombre: "Javier Morales", equipo: "Carlos A. Mayol", partidos: 1, escudo: getFoto("Carlos A. Mayol") },
    { nombre: "Saucedo Julio", equipo: "Confraternidad", partidos: 1, escudo: getFoto("Confraternidad") },
    { nombre: "Carlos Vera", equipo: "Juventud Unida", partidos: 1, escudo: getFoto("Juventud Unida") }
];

const goleadoresDataReserva = [
    { nombre: "Joaquín Trigo", equipo: "Carlos A. Mayol", goles: 5, escudo: getFoto("Carlos A. Mayol") },
    { nombre: "Fran Torres", equipo: "Real Imperio FC", goles: 3, escudo: getFoto("Real Imperio FC") },
    { nombre: "Mayco Arias", equipo: "Muni San Basilio", goles: 3, escudo: getFoto("Muni San Basilio") },
    { nombre: "Nicolino Ávila", equipo: "Juventud Unida", goles: 2, escudo: getFoto("Juventud Unida") },
    { nombre: "Marcos Torres", equipo: "Juventud Unida", goles: 2, escudo: getFoto("Juventud Unida") },
    { nombre: "Genaro Giles", equipo: "Confraternidad", goles: 1, escudo: getFoto("Confraternidad") },
    { nombre: "Tomás Ojeda", equipo: "Carlos A. Mayol", goles: 1, escudo: getFoto("Carlos A. Mayol") },
    { nombre: "Sebastián Vega", equipo: "Carlos A. Mayol", goles: 1, escudo: getFoto("Carlos A. Mayol") },
    { nombre: "Gustavo Ruarte", equipo: "Muni San Basilio", goles: 1, escudo: getFoto("Muni San Basilio") },
    { nombre: "Juan Torres", equipo: "Juventud Unida", goles: 1, escudo: getFoto("Juventud Unida") },
    { nombre: "Franco Calderón", equipo: "Confraternidad", goles: 1, escudo: getFoto("Confraternidad") },
    { nombre: "Agustín Giraudo", equipo: "Muni San Basilio", goles: 1, escudo: getFoto("Muni San Basilio") },
    { nombre: "Juan Burany", equipo: "Muni San Basilio", goles: 1, escudo: getFoto("Muni San Basilio") },
    { nombre: "Mariano Fernández", equipo: "Juventud Unida", goles: 1, escudo: getFoto("Juventud Unida") },
    { nombre: "Bruno Díaz", equipo: "Juventud Unida", goles: 1, escudo: getFoto("Juventud Unida") },
    { nombre: "Matías Suárez", equipo: "Juventud Unida", goles: 1, escudo: getFoto("Juventud Unida") },
    { nombre: "Tomás Molinero", equipo: "Real Imperio FC", goles: 1, escudo: getFoto("Real Imperio FC") },
    { nombre: "Alexis Rocha", equipo: "Juventud Unida", goles: 1, escudo: getFoto("Juventud Unida") },
    { nombre: "Pablo Rojas", equipo: "Real Imperio FC", goles: 1, escudo: getFoto("Real Imperio FC") },
    { nombre: "Christopher Escudero", equipo: "Potrero FC", goles: 1, escudo: getFoto("Potrero FC") },
    { nombre: "Rodrigo Sosa", equipo: "Potrero FC", goles: 1, escudo: getFoto("Potrero FC") },
    { nombre: "Luciano Varela", equipo: "Potrero FC", goles: 1, escudo: getFoto("Potrero FC") },
    { nombre: "Lautaro Gabosi", equipo: "Potrero FC", goles: 1, escudo: getFoto("Potrero FC") },
    { nombre: "Nahuel Arias", equipo: "Potrero FC", goles: 1, escudo: getFoto("Potrero FC") },
    { nombre: "Gabriel Oviedo", equipo: "Potrero FC", goles: 1, escudo: getFoto("Potrero FC") },
    { nombre: "Benjamín Chávez", equipo: "Confraternidad", goles: 1, escudo: getFoto("Confraternidad") }
];

