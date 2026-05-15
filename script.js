// ─────────────────────────────────────────
//  BOSTON TOUR: script.js
// ─────────────────────────────────────────

const stops = [
  {
    id: 1,
    name: "West Roxbury",
    tagline: "Där Boston andas ut",
    description:
      "Jag bor här. Det är väldigt lugnt och de flesta som bor runt oss är äldre, många pensionerade poliser. Ändå är jag lycklig, för min bästa vän i hela världen bor tio minuter bort. De flesta av mina klasskamrater från gymnasiet bor i stadsdelar som Dorchester, så det var underbart att ha en vän så nära.",
    // Real photo: Centre Street, West Roxbury (Wikimedia Commons)
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Centre_Street,_West_Roxbury.jpg",
    lat: 42.2798, lng: -71.1617
  },
  {
    id: 2,
    name: "Arnold Arboretum",
    tagline: "281 hektar frihet",
    description:
      "Det här är min lyckliga plats. Det är ett litet område med kullar och skog som är skyddad från ljus- och ljudföroreningar så gott det går. Jag går dit för att tänka och promenera, och ibland festa när vi var yngre. Arboretum ägs egentligen av Harvard, men det är kopplat till ett annat och större naturområde som heter Urban Wild. Det är mer vildvuxet och mer som en riktig skog, och roligt att göra en lättare vandring i.",
    // Personal photo
    image: "data/arboretum.jpg",
    lat: 42.3006, lng: -71.1286
  },
  {
    id: 3,
    name: "Boston Latin School",
    tagline: "Amerikas äldsta offentliga skola",
    description:
      "Det här är min gymnasieskola, mitt i Longwood Medical Area nära Harvard. Det var ett tryggt område men en väldigt speciell skola. Skolan var överfull och intensiv, men jag träffade så många coola människor som trauma-bondade med mig.",
    // Personal photo
    image: "data/boston-latin.webp",
    lat: 42.3372, lng: -71.0988
  },
  {
    id: 4,
    name: "Forest Hills",
    tagline: "Sista hållplatsen, full av liv",
    description:
      "Det här är slutstationen på orangelinjen och dit måste jag åka för att komma hem.",
    // Real photo: aerial view of Forest Hills station (Wikimedia Commons)
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Forest_Hills_station_aerial_view,_December_2018.JPG",
    lat: 42.3003, lng: -71.1139
  },
  {
    id: 5,
    name: "Ruggles",
    tagline: "Orangelinjens livligaste knutpunkt",
    description:
      "Det här är tågstationen jag tog för att komma till skolan. Det var också platsen för dåliga aktiviteter.",
    // Real photo: aerial view of Ruggles station (Wikimedia Commons)
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ruggles_station_aerial_view,_December_2018.JPG",
    lat: 42.3363, lng: -71.0897
  },
  {
    id: 6,
    name: "Fenway-området",
    tagline: "Mer än bara baseballplanen",
    description:
      "Jag hängde här hela tiden när det fanns en biograf här. Det finns så många ställen att äta och säsongsvis en isbana nära Landmark Center. Det finns också mycket shopping att göra här.",
    // Real photo: Fenway Park night game (Wikimedia Commons, confirmed URL)
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Fenway_Park_night_game.JPG/1280px-Fenway_Park_night_game.JPG",
    lat: 42.3467, lng: -71.0972
  },
  {
    id: 7,
    name: "Longwood Medical Area",
    tagline: "En stad i staden",
    description:
      "Efter skolan brukade jag gå till Longwood Galleria, som känns som att det fastnade på 1990-talet. Det är ett matgalleria inuti sjukhuskomplexet med Dunkin' och Charley's och andra lunchställen. Tusentals sjukvårdsarbetare äter där varje dag, utan att någon utanför området vet om det.",
    // Personal photo
    image: "data/longwood-galleria.jpg",
    lat: 42.3364, lng: -71.1061
  },
  {
    id: 8,
    name: "Brookline Village",
    tagline: "En liten stad som råkade bli uppsvald",
    description:
      "Brookline Village ligger tekniskt sett inte i Boston. Brookline är en egen kommun men det omges helt av staden och känns inbyggt i den. Min pappa jobbade på Trader Joe's här, så jag tillbringade mycket tid här när jag växte upp. Det finns en lång gata med butiker och fin arkitektur.",
    // Real photo: Brookline Village Green Line station (Wikimedia Commons)
    image: "data/brookline.webp",
    lat: 42.3316, lng: -71.1213
  },
  {
    id: 9,
    name: "Boston University",
    tagline: "Där mina vänner bor",
    description:
      "BU sträcker sig längs Commonwealth Avenue i vad som känns som miltals, med Charles River på ena sidan och gröna linjen på den andra. Det är ett av de största privata universiteten i landet och campus är bara staden. Inga murar, inga grindar, bara byggnader inbyggda i gatunätet.",
    // Real photo: BU Bridge over Charles River (Wikimedia Commons)
    image: "data/bu.jpg",
    lat: 42.3505, lng: -71.1054
  },
  {
    id: 10,
    name: "Dorchester",
    tagline: "Bostons största och mest levande stadsdel",
    description:
      "Det här är ett område där jag tillbringade mycket tid som tonåring. Det finns bättre ställen att äta och hänga på eftersom invånarna är yngre och det finns ett stort vietnamesiskt område med fantastisk mat.",
    // Real photo: JFK Presidential Library on Columbia Point, Dorchester (Wikimedia Commons)
    image: "data/dorchester.jpg",
    lat: 42.3025, lng: -71.0670
  },
  {
    id: 11,
    name: "Carpenter Center for the Visual Arts",
    tagline: "Le Corbusiers enda byggnad i Nordamerika",
    description:
      "Om du vill se mitt examensarbete hänger det på tredje våningen! Det här är också en av de mest intressanta byggnaderna i USA. Det är den enda Le Corbusier designade på nordamerikansk mark. Den diagonala rampen som skär genom byggnaden är typisk Le Corbusier, radikal, funktionell och helt ointresserad av konventioner.",
    // Real photo: east view of CCVA Harvard (Wikimedia Commons, confirmed URL)
    image: "https://upload.wikimedia.org/wikipedia/commons/5/53/2023-0323-Harvard-Carpenter_Center_for_the_Visual_Arts-02-East_view.jpg",
    lat: 42.3742, lng: -71.1147
  },
  {
    id: 12,
    name: "Steriti Memorial Rink",
    tagline: "Isbana vid vattnet i North End",
    description:
      "Den här isbanan i North End är min favoritisbana i staden. Den ligger precis vid Charles River och man kan se vattnet och Charlestown från fönstren när man åker skridskor. Den är öppen för allmänheten enligt ett strängt schema men den är gratis och så rolig att besöka med vänner. Det var här jag skadade mig riktigt illa och fick ett blått öga en gång, men det är fortfarande en av mina favoritplatser.",
    // Real photo: North End Boston waterfront (Wikimedia Commons)
    image: "data/steriti.jpg",
    lat: 42.3653, lng: -71.0547
  }
];


// ─────────────────────────────────────────
//  FLIKNAVIGERING
// ─────────────────────────────────────────

const navBtns = document.querySelectorAll('.nav-btn');
const tabs    = document.querySelectorAll('.tab');
let mapInitialized = false;

function switchTab(tabId) {
  tabs.forEach(t => t.classList.remove('active'));
  navBtns.forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + tabId).classList.add('active');
  navBtns.forEach(b => { if (b.dataset.tab === tabId) b.classList.add('active'); });
  if (tabId === 'map' && !mapInitialized) {
    initMap();
    mapInitialized = true;
  }
}

navBtns.forEach(btn => btn.addEventListener('click', () => switchTab(btn.dataset.tab)));

document.querySelectorAll('.cta-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const dest = btn.dataset.goto;
    if (dest) switchTab(dest);
  });
});

document.getElementById('stopTagsPreview').addEventListener('click', (e) => {
  if (e.target.classList.contains('stop-tag')) {
    const idx = parseInt(e.target.dataset.index, 10);
    switchTab('tour');
    setTimeout(() => loadStop(idx), 50);
  }
});


// ─────────────────────────────────────────
//  ÖVERSIKT: TAGGAR
// ─────────────────────────────────────────

const tagsContainer = document.getElementById('stopTagsPreview');
stops.forEach((stop, i) => {
  const tag = document.createElement('span');
  tag.className = 'stop-tag';
  tag.dataset.index = i;
  tag.textContent = stop.name;
  tagsContainer.appendChild(tag);
});


// ─────────────────────────────────────────
//  TUREN: SIDOLISTA
// ─────────────────────────────────────────

let currentStopIndex = null;
const stopsList  = document.getElementById('stopsList');
const stopDetail = document.getElementById('stopDetail');

stops.forEach((stop, i) => {
  const li = document.createElement('li');
  li.className = 'stop-item';
  li.dataset.index = i;
  li.innerHTML = `
    <span class="stop-number">${String(i + 1).padStart(2, '0')}</span>
    <span class="stop-name">${stop.name}</span>
  `;
  li.addEventListener('click', () => loadStop(i));
  stopsList.appendChild(li);
});


// ─────────────────────────────────────────
//  LADDA EN PLATS
// ─────────────────────────────────────────

function loadStop(index) {
  const stop = stops[index];
  currentStopIndex = index;

  document.querySelectorAll('.stop-item').forEach((el, i) => {
    el.classList.toggle('active', i === index);
  });

  stopDetail.innerHTML = `
    <div class="stop-card">
      <img src="${stop.image}" alt="${stop.name}" class="stop-card-img" />
      <div class="stop-card-body">
        <p class="stop-card-number">Hållplats ${String(index + 1).padStart(2, '0')} av ${stops.length}</p>
        <h2 class="stop-card-title">${stop.name}</h2>
        <p class="stop-card-tagline">${stop.tagline}</p>
        <p class="stop-card-desc">${stop.description}</p>
        <div class="stop-nav">
          <button class="stop-nav-btn" id="btnPrev" ${index === 0 ? 'disabled' : ''}>← Föregående</button>
          <button class="stop-nav-btn" id="btnNext" ${index === stops.length - 1 ? 'disabled' : ''}>Nästa →</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('btnPrev')?.addEventListener('click', () => loadStop(currentStopIndex - 1));
  document.getElementById('btnNext')?.addEventListener('click', () => loadStop(currentStopIndex + 1));
  stopDetail.scrollTop = 0;
}


// ─────────────────────────────────────────
//  LEAFLET-KARTA
// ─────────────────────────────────────────

function initMap() {
  const map = L.map('map', {
    center: [42.318, -71.095],
    zoom: 12,
    zoomControl: true
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors © CARTO',
    maxZoom: 19
  }).addTo(map);

  const pinIcon = L.divIcon({
    className: '',
    html: `<div style="
      width: 14px; height: 14px;
      background: #1b2d4f;
      border: 2.5px solid #c9973c;
      border-radius: 50%;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      cursor: pointer;
    "></div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
    popupAnchor: [0, -10]
  });

  stops.forEach((stop, i) => {
    const marker = L.marker([stop.lat, stop.lng], { icon: pinIcon }).addTo(map);

    const popupContent = `
      <div>
        <div class="popup-name">${stop.name}</div>
        <div class="popup-tagline">${stop.tagline}</div>
        <button class="popup-link" onclick="goToStop(${i})">Öppna i turen →</button>
      </div>
    `;

    marker.bindPopup(popupContent, { closeButton: false, minWidth: 180 });
    marker.on('mouseover', function() { this.openPopup(); });
    marker.on('click', function() {
      switchTab('tour');
      setTimeout(() => loadStop(i), 50);
    });
  });

  const legendContainer = document.getElementById('mapLegend');
  stops.forEach((stop, i) => {
    const item = document.createElement('div');
    item.className = 'legend-item';
    item.innerHTML = `
      <div class="legend-dot"></div>
      <span class="legend-name">${stop.name}</span>
    `;
    item.addEventListener('click', () => {
      switchTab('tour');
      setTimeout(() => loadStop(i), 50);
    });
    legendContainer.appendChild(item);
  });
}

function goToStop(index) {
  switchTab('tour');
  setTimeout(() => loadStop(index), 50);
}
