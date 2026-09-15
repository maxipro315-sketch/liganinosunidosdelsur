let activeCompetition = "primera";
let showAllScorers = false;

const clubLogos = LOGOS;
const competitions = {
    primera: {
        label: "Primera Divisi\u00f3n",
        standings: datosPrimera.map(team => [team.nombre, team.pj, team.pts, team.gf, team.gc]),
        scorers: goleadoresDataPrimera.map(player => [player.nombre, player.equipo, player.goles])
    },
    reserva: {
        label: "Reserva",
        standings: datosReserva.map(team => [team.nombre, team.pj, team.pts, team.gf, team.gc]),
        scorers: goleadoresDataReserva.map(player => [player.nombre, player.equipo, player.goles])
    }
};

function renderStandings() {
    const data = competitions[activeCompetition];
    const competitionLabel = document.querySelector("#competition-label");
    if (competitionLabel) competitionLabel.textContent = data.label;
    document.querySelector("#table-caption").textContent = `Posiciones completas · ${data.label}`;
    document.querySelector("#standings-body").innerHTML = data.standings.slice(0, 3).map((team, index) => {
        const [name, pj, pts, gf, gc] = team;
        const df = gf - gc;
        return `<tr><td class="position ${index < 3 ? "top" : ""}">${index + 1}</td><td><div class="team"><img src="${clubLogos[name]}" alt="Escudo de ${name}"><span class="team-name">${name}</span></div></td><td>${pj}</td><td class="points">${pts}</td></tr>`;
    }).join("");
}

function renderScorers() {
    const scorerList = document.querySelector("#scorers-list");
    if (!scorerList) return;
    const data = competitions[activeCompetition].scorers;
    const visible = data.slice(0, 3);
    document.querySelector("#scorers-list").innerHTML = visible.map((player, index) => {
        const [name, team, goals] = player;
        return `<article class="leader"><span class="leader-rank">${index + 1}</span><img src="${clubLogos[team]}" alt="Escudo de ${team}"><div><div class="leader-name">${name}</div><div class="leader-team">${team}</div></div><strong class="goals">${goals}</strong></article>`;
    }).join("");
    const toggle = document.querySelector("#scorers-toggle");
    if (toggle) toggle.textContent = "Ver Clausura completo";
}

function renderNextFixture() {
    const fixtureList = document.querySelector("#next-fixture-list");
    const fixtureLabel = document.querySelector("#next-fixture-label");
    if (!fixtureList) return;
    const fechas = typeof resultadosHistoricos !== "undefined" ? resultadosHistoricos.primera || [] : [];
    const fixture = typeof getProximaFecha === "function"
        ? getProximaFecha("primera")
        : fechas.find(fecha => fecha.proxima) || fechas.find(fecha => fecha.partidos?.some(partido => partido.gl === "-" && partido.gv === "-"));
    if (!fixture) {
        fixtureList.innerHTML = `<p class="fixture-empty">No hay próxima fecha cargada.</p>`;
        return;
    }
    if (fixtureLabel) fixtureLabel.textContent = `Clausura · ${fixture.nombre.replace("FECHA", "Fecha")}`;
    fixtureList.innerHTML = fixture.partidos.map((partido, index) => `<article class="fixture"><div class="fixture-number">0${index + 1}</div><div class="fixture-main"><div class="fixture-teams"><span>${partido.local}</span><strong>VS</strong><span>${partido.visitante}</span></div><div class="fixture-meta"><span><i class="fa-regular fa-calendar"></i> ${partido.dia || "Fecha a confirmar"}</span><span><i class="fa-solid fa-location-dot"></i> ${partido.cancha || "Cancha a confirmar"}</span></div><small class="fixture-location">${partido.localidad || "Localidad a confirmar"}</small></div></article>`).join("");
}

function setCompetition(competition) {
    activeCompetition = competition;
    showAllScorers = false;
    document.querySelectorAll("[data-competition]").forEach(button => button.classList.toggle("active", button.dataset.competition === competition));
    renderStandings();
    renderScorers();
    renderNextFixture();
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-competition]").forEach(button => button.addEventListener("click", () => setCompetition(button.dataset.competition)));
    const scorersToggle = document.querySelector("#scorers-toggle");
    if (scorersToggle) scorersToggle.addEventListener("click", () => { window.location.href = "clausura.html"; });
    renderNextFixture();
    renderStandings();
    renderScorers();

    document.querySelectorAll("[data-sponsor-carousel]").forEach(carousel => {
        const slides = [...carousel.querySelectorAll(".sponsor-slide")];
        const dots = carousel.parentElement.querySelector(".sponsor-dots");
        const previous = carousel.querySelector(".sponsor-prev");
        const next = carousel.querySelector(".sponsor-next");
        let current = 0;
        let timer;

        const showSlide = index => {
            current = (index + slides.length) % slides.length;
            slides.forEach((slide, slideIndex) => slide.classList.toggle("active", slideIndex === current));
            if (dots) dots.querySelectorAll("button").forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === current));
        };
        const restart = () => {
            window.clearInterval(timer);
            timer = window.setInterval(() => showSlide(current + 1), 4500);
        };

        slides.forEach((_, index) => {
            const dot = document.createElement("button");
            dot.type = "button";
            dot.setAttribute("aria-label", `Ver auspiciante ${index + 1}`);
            dot.addEventListener("click", () => { showSlide(index); restart(); });
            dots?.appendChild(dot);
        });
        previous?.addEventListener("click", () => { showSlide(current - 1); restart(); });
        next?.addEventListener("click", () => { showSlide(current + 1); restart(); });
        carousel.addEventListener("mouseenter", () => window.clearInterval(timer));
        carousel.addEventListener("mouseleave", restart);
        carousel.addEventListener("focusin", () => window.clearInterval(timer));
        carousel.addEventListener("focusout", restart);
        showSlide(0);
        restart();
    });
});
