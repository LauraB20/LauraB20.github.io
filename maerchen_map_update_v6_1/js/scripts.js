// Data: Märchenfiguren pro Region
const DATA = {
  "Europa": [
    {
      "name": "Aschenputtel",
      "archetype": "Heldin"
    },
    {
      "name": "Hänsel & Gretel",
      "archetype": "Helden"
    },
    {
      "name": "Robin Hood",
      "archetype": "Held"
    },
    {
      "name": "Till Eulenspiegel",
      "archetype": "Trickster"
    },
    {
      "name": "Baba Jaga",
      "archetype": "Hexe/Monster"
    },
    {
      "name": "Lorelei",
      "archetype": "Nacht-/Wassergeist"
    },
    {
      "name": "Rotkäppchen",
      "archetype": "Heldin"
    },
    {
      "name": "Rumpelstilzchen",
      "archetype": "Magisches Wesen"
    }
  ],
  "Naher Osten": [
    {
      "name": "Peri",
      "archetype": "Magisches Wesen"
    },
    {
      "name": "Zahhak",
      "archetype": "Monster/Tyrann"
    },
    {
      "name": "Dschinn (Jinn)",
      "archetype": "Magisches Wesen"
    },
    {
      "name": "Ifrit",
      "archetype": "Dschinn (mächtig)"
    },
    {
      "name": "Ghul",
      "archetype": "Monster"
    },
    {
      "name": "Roc / Rukh (Riesen-Vogel)",
      "archetype": "Magisches Wesen"
    },
    {
      "name": "Scheherazade (Shahrzad)",
      "archetype": "Erzählerin"
    },
    {
      "name": "Sinbad der Seefahrer",
      "archetype": "Abenteuerheld"
    },
    {
      "name": "Aladin",
      "archetype": "Held"
    },
    {
      "name": "Alibaba",
      "archetype": "Held/Trickster"
    }
  ],
  "Iran / Persien": [
    {
      "name": "Simurgh",
      "archetype": "Magisches Wesen"
    },
    {
      "name": "Rustam",
      "archetype": "Held"
    },
    {
      "name": "Div (Dämon)",
      "archetype": "Monster"
    },
    {
      "name": "Peri",
      "archetype": "Magisches Wesen"
    }
  ],
  "Mittelasien": [
    {
      "name": "Manas",
      "archetype": "Held"
    },
    {
      "name": "Aldar Köse",
      "archetype": "Trickster"
    },
    {
      "name": "Tepegöz",
      "archetype": "Monster"
    },
    {
      "name": "Alpamys (Alpamis)",
      "archetype": "Held"
    },
    {
      "name": "Tulpar (geflügeltes Pferd)",
      "archetype": "Magisches Wesen"
    }
  ],
  "Westafrika": [
    {
      "name": "Anansi",
      "archetype": "Trickster"
    },
    {
      "name": "Mami Wata",
      "archetype": "Magisches Wesen"
    }
  ],
  "Ostafrika": [
    {
      "name": "Kalulu (Hase)",
      "archetype": "Trickster"
    },
    {
      "name": "Popobawa (Zanzibar-Geist)",
      "archetype": "Nachtgeist"
    },
    {
      "name": "Nandi Bär (Kenya)",
      "archetype": "Monster"
    },
    {
      "name": "Sungura (Hase – Swahili-Trickster)",
      "archetype": "Trickster"
    },
    {
      "name": "Kintu (Buganda/Uganda)",
      "archetype": "Held"
    }
  ],
  "Nordamerika": [
    {
      "name": "Paul Bunyan",
      "archetype": "Held/Riese"
    },
    {
      "name": "Coyote",
      "archetype": "Trickster"
    },
    {
      "name": "Raven (Rabe)",
      "archetype": "Trickster/Kulturbringer"
    },
    {
      "name": "Thunderbird",
      "archetype": "Magisches Wesen"
    },
    {
      "name": "Wendigo",
      "archetype": "Monster"
    }
  ],
  "Arktis (Inuit)": [
    {
      "name": "Sedna",
      "archetype": "Naturgeist"
    },
    {
      "name": "Qalupalik",
      "archetype": "Monster"
    },
    {
      "name": "Amarok",
      "archetype": "Monster/Tiergeist"
    }
  ],
  "Mesoamerika (Maya/Azteken)": [
    {
      "name": "Xtabay",
      "archetype": "Weibliche Warnfigur"
    },
    {
      "name": "Camazotz (Fledermauswesen)",
      "archetype": "Monster"
    },
    {
      "name": "Quetzalcoatl (gefiederte Schlange)",
      "archetype": "Gott/Naturwesen"
    }
  ],
  "Südamerika (Anden)": [
    {
      "name": "Pachamama",
      "archetype": "Naturgeist"
    },
    {
      "name": "Ekeko (Anden-Glücksgeist)",
      "archetype": "Magisches Wesen"
    },
    {
      "name": "Supay (Unterweltgeist)",
      "archetype": "Monster/Nachtgeist"
    },
    {
      "name": "Amaru (Schlangen-Drache)",
      "archetype": "Magisches Wesen"
    },
    {
      "name": "Apu (Berggeist)",
      "archetype": "Naturgeist"
    },
    {
      "name": "Pishtaco (Legendenfigur)",
      "archetype": "Monster"
    }
  ],
  "Südamerika (Amazonas)": [
    {
      "name": "Iara / Yara",
      "archetype": "Weibliche Warnfigur"
    },
    {
      "name": "La Llorona",
      "archetype": "Weibliche Warnfigur"
    },
    {
      "name": "Mapinguari",
      "archetype": "Monster"
    },
    {
      "name": "El Pombero",
      "archetype": "Trickster/Waldgeist"
    },
    {
      "name": "Curupira",
      "archetype": "Waldgeist"
    }
  ],
  "Südasien (Indien)": [
    {
      "name": "Apsaras",
      "archetype": "Magisches Wesen"
    },
    {
      "name": "Rama & Sita",
      "archetype": "Helden"
    },
    {
      "name": "Hanuman",
      "archetype": "Held (Affengott)"
    }
  ],
  "Ostasien (China/Japan)": [
    {
      "name": "Mulan",
      "archetype": "Heldin"
    },
    {
      "name": "Sun Wukong",
      "archetype": "Trickster/Held"
    },
    {
      "name": "Kitsune",
      "archetype": "Magisches Wesen"
    },
    {
      "name": "Momotarō",
      "archetype": "Held"
    }
  ],
  "Ozeanien (Polynesien)": [
    {
      "name": "Maui",
      "archetype": "Held/Trickster"
    },
    {
      "name": "Pele (Vulkan-Göttin, Hawaiʻi)",
      "archetype": "Naturgeist"
    },
    {
      "name": "Menehune (kleine Leute, Hawaiʻi)",
      "archetype": "Feenwesen"
    },
    {
      "name": "Moʻo (Echsen-/Drachengeist, Hawaiʻi)",
      "archetype": "Magisches Wesen"
    },
    {
      "name": "Tangaroa/Tagaloa (Meeresgott)",
      "archetype": "Naturwesen"
    },
    {
      "name": "Hina (Mond-/Meeresfigur)",
      "archetype": "Mythische Figur"
    }
  ],
  "Australien (Aborigines)": [
    {
      "name": "Rainbow Serpent",
      "archetype": "Schöpferwesen"
    },
    {
      "name": "Mimis",
      "archetype": "Magisches Wesen"
    },
    {
      "name": "Bunjil",
      "archetype": "Naturgeist"
    }
  ],
  "Neuseeland (Maori)": [
    {
      "name": "Taniwha",
      "archetype": "Magisches Wesen/Monster"
    },
    {
      "name": "Maui",
      "archetype": "Held/Trickster"
    },
    {
      "name": "Patupaiarehe",
      "archetype": "Feenwesen"
    }
  ],
  "Nordafrika": [
    {
      "name": "Aisha Qandisha",
      "archetype": "Nacht-/Wassergeist"
    },
    {
      "name": "Dschinn (Jinn)",
      "archetype": "Magisches Wesen"
    },
    {
      "name": "Ifrit",
      "archetype": "Dschinn (mächtig)"
    },
    {
      "name": "Ghul",
      "archetype": "Monster"
    },
    {
      "name": "Boujloud (Maskenfigur)",
      "archetype": "Trickster/Festfigur"
    }
  ]
};

const REGION_STYLE = {
  "Europa": {
    "abbr": "EU",
    "color": "#5B7D4C"
  },
  "Nordamerika": {
    "abbr": "NA",
    "color": "#3D7A73"
  },
  "Arktis (Inuit)": {
    "abbr": "AR",
    "color": "#2E6FA7"
  },
  "Mesoamerika (Maya/Azteken)": {
    "abbr": "MA",
    "color": "#2F7F6F"
  },
  "Südamerika (Anden)": {
    "abbr": "AN",
    "color": "#2E7D8A"
  },
  "Südamerika (Amazonas)": {
    "abbr": "AM",
    "color": "#2F7D4A"
  },
  "Westafrika": {
    "abbr": "WA",
    "color": "#B07A3A"
  },
  "Ostafrika": {
    "abbr": "OA",
    "color": "#A87C2E"
  },
  "Naher Osten": {
    "abbr": "ME",
    "color": "#B8873A"
  },
  "Iran / Persien": {
    "abbr": "IR",
    "color": "#2E6F86"
  },
  "Mittelasien": {
    "abbr": "CA",
    "color": "#3F64B5"
  },
  "Südasien (Indien)": {
    "abbr": "IN",
    "color": "#1B7F8F"
  },
  "Ostasien (China/Japan)": {
    "abbr": "EA",
    "color": "#2F8A6B"
  },
  "Ozeanien (Polynesien)": {
    "abbr": "PO",
    "color": "#2F8FB0"
  },
  "Australien (Aborigines)": {
    "abbr": "AU",
    "color": "#B05A3A"
  },
  "Neuseeland (Maori)": {
    "abbr": "NZ",
    "color": "#1F6F3B"
  },
  "Nordafrika": {
    "abbr": "NAF",
    "color": "#C28A3A"
  }
};

const modal = document.getElementById("marker-modal");
const modalTitle = document.getElementById("modal-title");
const modalList = document.getElementById("modal-list");
const modalClose = document.querySelector(".modal-close");
const markers = document.querySelectorAll(".marker");

function clearSelected(){
  document.querySelectorAll(".circle.selected").forEach(c => c.classList.remove("selected"));
}

function closeModal(){
  modal.classList.remove("is-open");
  clearSelected();
}

function renderModal(region){
  const items = DATA[region] || [];
  const s = REGION_STYLE[region];
  modalTitle.textContent = region;
  modalTitle.style.color = s ? s.color : "rgba(54, 63, 68, .92)";
  // clear list
  modalList.innerHTML = "";
  items.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="li-name">${item.name}</span>
      <span class="li-sep">—</span>
      <span class="li-desc">${item.archetype}</span>`;
    modalList.appendChild(li);
  });
}

function positionModalNear(marker){
  const rect = marker.getBoundingClientRect();
  const modalRect = modal.getBoundingClientRect();

  // default: to the right and slightly above
  let left = rect.right + 14;
  let top = rect.top - 10;

  // keep inside viewport
  const pad = 12;
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  // if overflow right, place left
  if (left + modalRect.width + pad > vw) {
    left = rect.left - modalRect.width - 14;
  }
  // if overflow left, clamp
  if (left < pad) left = pad;

  // if overflow bottom, move up
  if (top + modalRect.height + pad > vh) {
    top = vh - modalRect.height - pad;
  }
  // clamp top
  if (top < pad) top = pad;

  modal.style.left = `${left}px`;
  modal.style.top = `${top}px`;
}

function openModalAtMarker(marker){
  const region = marker.dataset.region;
  const s = REGION_STYLE[region];

  renderModal(region);

  // Ensure modal has size before positioning
  modal.classList.add("is-open");
  positionModalNear(marker);

  // Accent color available for future styling
  if(s) modal.style.setProperty("--accent", s.color);
}

function applyMarkerStyles(){
  markers.forEach(marker => {
    const region = marker.dataset.region;
    const s = REGION_STYLE[region];
    const circle = marker.querySelector(".circle");
    const label = marker.querySelector(".label");

    if (s) {
      marker.dataset.color = s.color;
      if (circle) circle.style.background = s.color;
      if (label) {
        label.textContent = region;
        label.title = "";
      }
    } else {
      if (label) label.title = region;
    }
  });
}

applyMarkerStyles();

markers.forEach(marker => {
  marker.addEventListener("click", (e) => {
    e.stopPropagation();
    clearSelected();
    const c = marker.querySelector(".circle");
    if(c) c.classList.add("selected");
    openModalAtMarker(marker);
  });
});

// Click outside closes
document.addEventListener("click", () => closeModal());

// Prevent clicks inside modal from closing
modal.addEventListener("click", (e) => e.stopPropagation());

// Close button
modalClose.addEventListener("click", (e) => {
  e.stopPropagation();
  closeModal();
});

// Close with ESC
document.addEventListener("keydown", (e) => {
  if(e.key === "Escape") closeModal();
});

window.addEventListener("resize", closeModal);

// Close button star morph on hover
const closeBtn = document.querySelector(".modal-close");
if (closeBtn) {
  closeBtn.addEventListener("mouseenter", () => { closeBtn.textContent = "★"; });
  closeBtn.addEventListener("mouseleave", () => { closeBtn.textContent = "☆"; });
}
