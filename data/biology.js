//jshint esversion:8

const questions = [
  {
    question: "Sulphur bacteria are examples of",
    options: [
      "Carnivores",
      "Heterotroph",
      "Saprophytes",
      "Autotrophs"
    ],
    answer: 3
  },
  {
    question: "The inherent ability of organisms to reproduce and multiply is called",
    options: [
      "C value",
      " Biotic Potential",
      "Carrying Capacity",
      "K value"
    ],
    answer: 1
  },
  {
    question: "Nitrite is oxidized to nitrate by",
    options: [
      "Nitrosomonas ",
      "Nitrator",
      "Azotobacter",
      "Nitrobacter"
    ],
    answer: 3
  },
  {
    question: "All these are reptiles except",
    options: [
      "Salamanders",
      "Crocodiles",
      "Snakes",
      "Turtles"
    ],
    answer: 0
  },
  {
    question: "______ is an example of bottom feeders",
    options: [
      "Cat Fish",
      "Frog",
      "Snake",
      "Tadpole"
    ],
    answer: 0
  },
  {
    question: "An organism that produce its own food from basic nutrients is called",
    options: [
      "autotroph",
      "heterotroph",
      "producer",
      "energy source"
    ],
    answer: 1
  },
  {
    question: "One very important attribute of ecosystem is the source of energy which is ",
    options: [
      "from photosynthesis autotrophs",
      "photosynthetic bacteria",
      "Sola energy",
      "Purple bacteria"
    ],
    answer: 2
  },
  {
    question: "A caterpillar eats a leaf and a bird eats the caterpillar. in the interaction the bird is a?",
    options: [
      "Producer",
      "Herbivore",
      "Primary consumer",
      "Secondary consumer"
    ],
    answer: 2
  },
  {
    question: "The bottom of shallow part of freshwater constitute____",
    options: [
      "Littoral Zone",
      "Benthic Zone",
      "Intertidal Zone",
      "Lenthic Zone"
    ],
    answer: 0
  },
  {
    question: "The homoiothermic animals of colder climates are longer in size than their counterparts found in the got regions of the globe.",
    options: [
      "Jordan's rule",
      "Allen's rule",
      "Thermo rule",
      "Bergman's rule"
    ],
    answer: 3
  },
  {
    question: "The fishes living in low temperature water regions tend to have more number of vestibule than their counterparts living in the high temperature water regions.",
    options: [
      "Jordan's rule",
      "Allen's rule",
      "Thermo rule",
      "Bergman's rule"
    ],
    answer: 0
  },
  {
    question: "The tail, about and legs are competitively smaller in the mammals of cold climates than those in hot climates regions.",
    options: [
      "Jordan's rule",
      "Allen's rule",
      "Thermo rule",
      "Bergman's rule"
    ],
    answer: 1
  },
  {
    question: "Ozone absorbs",
    options: [
      "Ultraviolet light",
      "Infrared light",
      "Visible light",
      "Oxygen",
      "No form of light"
    ],
    answer: 0
  },
  {
    question: "Which biological factor is responsible for poor vegetation in deserts",
    options: [
      "Grazing by animals and goats",
      "Low rainfall",
      "Poor fertility of soil",
      "Native mankind"
    ],
    answer: 1
  },
  {
    question: "The sun loving plants are referred to as ",
    options: [
      "Halophytes",
      "Heliophytes",
      "Heterotrophs",
      "Sciophytes"
    ],
    answer: 1
  },
  {
    question: "Which of the following do plants usually compete for?",
    options: [
      "Light only",
      "Light and soil nutrients",
      "Light, soil nutrients and carbon dioxide",
      "Light, Oxygen, Carbpn dioxide"
    ],
    answer: 1
  },
  
  {
    question: "Which of the following is not part of mammalian brane",
    options: [
      "Fore brain",
      "Mind brain",
      "Hind brain",
      "Mid brain"
    ],
    answer: 1
  },
  {
    question: "What is biodiversity",
    options: [
      "A high number of different species in an ecosystem",
      "A low number of different species in an ecosystem",
      "The number of different species in an ecosystem"
    ],
    answer: 2
  },
  {
    question: "If the percentage of energy in the producer is 100%, how many percent of energy will get to the tertiary consumer?",
    options: [
      "70%",
      "10%",
      "0.1%",
      "1%"
    ],
    answer: 2
  },
  {
    question: "The total amount of radiant energy reaching the earth surface is",
    options: [
      "13.00×10²³ joules per year",
      " 6.24×10²³ joules per year",
      "5.20×10²² joules per yea",
      "13.00×10²² joules per year"
    ],
    answer: 1
  },
  {
    question: "Which of the following is a cold desert",
    options: [
      "The great basin of north America",
      " Amazon basin of south America",
      "Malaysian island",
      "Steppes of Asia"
    ],
    answer: 0
  },
  {
    question: "The depth of the sea is called",
    options: [
      "Intertidal zone",
      "Lenthic zone",
      "Abyssal zone",
      "Littoral zone"
    ],
    answer: 2
  },
  {
    question: "Cold-blooded animals are also known as __________ animal",
    options: [
      "Poikilothermic",
      "Homoiothermic",
      "Thermometric",
      "carcinogenic"
    ],
    answer: 0
  },
  {
    question: "Ecosystem is",
    options: [
      "Open",
      "Closed",
      "Both A and B",
      "Neither open nor closed"
    ],
    answer: 0
  },
  {
    question: "The pyramid of number is based on",
    options: [
      "Unit per area",
      "Food per individual",
      "Individuals in trophic level",
      "Energy per unit area"
    ],
    answer: 2
  },
  {
    question: "The phosporus cycle differs from those of carbon and nitrogen as well as those of sulphure, oxygen and hydrogen inthat it lacks",
    options: [
      "Water",
      "Dust particles",
      "Gaseous phase",
      "All of the above"
    ],
    answer: 2
  },
  {
    question: "Secondary productivity is",
    options: [
      "Conversion of physical energy into chemical energy at producer level",
      "Conversion of physical energy into chemical energy at consumer level",
      "The rate of energy storage at consumer level",
      "The decomposition of organic matter by decomposers"
    ],
    answer: 2
  },
  {
    question: "The ecological pyramid which can be inverted in a tree ecosystem is",
    options: [
      "Pyramid of number",
      "Pyramid of energy",
      "Pyramid of biomass",
      "Pyramid of ecosystem"
    ],
    answer: 0
  },
  {
    question: "Growing rice results in the release of ___ in the atmosphere",
    options: [
      "Methane",
      "Nitrous Oxide",
      "Ozone",
      "Phosphorus"
    ],
    answer: 0
  },
  {
    question: "The hydrologic cycle of the ecosystem is driven by",
    options: [
      "Evaporation",
      "Transpiration",
      "Love",
      "Solar energy and gravity"
    ],
    answer: 3
  },
  {
    question: "Aphotic region means",
    options: [
      "The upper reaches of the ocean in which light penetrates",
      "The lower layer of the ocean where light does not penetrate",
      "The middle layer of the ocean where light partly reaches",
      "The uppermost layer of the sea where light reaches"
    ],
    answer: 1
  },
  {
    question: "Volcano eruption disturbs ",
    options: [
      "Phosphorus cycle",
      "Potassium cycle",
      "Nitrogen cycle",
      "Sulphur cyle"
    ],
    answer: 0
  },
  {
    question: "Dispersion means",
    options: [
      " Distribution of organisms within a population over an areas",
      "Distribution of organisms within a niche",
      "The movement of individuals among populations",
      "Degradation of organisms from a niche"
    ],
    answer: 0
  },
  {
    question: "Which of the following climatic controls is the most important?",
    options: [
      "Latitude",
      "Altitude",
      "Wind and Pressure system",
      "Continentality"
    ],
    answer: 2
  },
  {
    question: "Sources of dissolved oxygen in water ",
    options: [
      "Photolysis",
      "Photosynthesis",
      "Natural aeration",
      "Mechanical aeration"
    ],
    answer: 2
  },
  {
    question: "Wind generally blow from area of",
    options: [
      "Low pressure to high pressure",
      "High pressure to low pressure",
      "High pressure to high pressure",
      "Low pressure to low pressure"
    ],
    answer: 1
  },
  {
    question: "What is the average salinity of an estuary",
    options: [
      "23 ppt",
      "40ppt",
      "8ppt",
      "17ppt"
    ],
    answer: 0
  },
  {
    question: "Detritivore means",
    options: [
      "A type of life cycle characteristic of plants and a few algae",
      " Clean up of a hazardous waste site by microorganisms",
      "Consumption of fragments of freshly dead or decomposing organism",
      "The monster that runs after human soul"
    ],
    answer: 2
  },
  {
    question: "Savannah",
    options: [
      " Tropical grassland containing scattered trees or shrub",
      "Temperate grassland with scattered trees",
      "Tropical grassland with scattered trees in areas of high rainfall",
      "Temperate grassland with scattered trees in prolonged wet areas"
    ],
    answer: 0
  },
  {
    question: "Zonation",
    options: [
      "Positioning of communities graphically on a gradient",
      "Creating zones for plant and animal",
      "Distribution of vegetation along an environmental gradient",
      "Collection of niche in various portion of a habitat"
    ],
    answer: 2
  },
  {
    question: "Which one of the following statement is correct for secondary succession?",
    options: [
      "It is similar to primary succession, except that it has a relatively fast place",
      "It begins on a bare rock",
      "It occurs on a deforested site",
      "It follows primary succession"
    ],
    answer: 2
  },
  {
    question: "An ecosystem which can be easily damaged but can recover after some time, if damaging effect stops, it will be having",
    options: [
      "Low stability and low resilence",
      "High stability and high resilence",
      "Low stability and high resilence",
      "High stability and low resilence"
    ],
    answer: 2
  },
  {
    question: "Primary succession is development of communities on?",
    options: [
      "Newly exposed habitat",
      "Opened fresh habitat",
      "Freshly harvested crop field",
      "Pond filled after a dry season"
    ],
    answer: 0
  },
  {
    question: "In succession, complexities in structure are",
    options: [
      "Drastically increasing",
      "Slowly increasing",
      "Not increasing but decreasing",
      "Constant"
    ],
    answer: 1
  },
  {
    question: "Pyramid of energy in a river ecosystem is",
    options: [
      "Always upright",
      "Always erect",
      "Constant",
      "Declining"
    ],
    answer: 0
  },
  {
    question: "A progressive series of changes in plant and anialof an area from initial colonization is known as",
    options: [
      "Evolution",
      "Succession",
      "Specialisation",
      "Selection"
    ],
    answer: 1
  },
  {
    question: "When the number of organisms at successive levels are plotted, then this pyramid is called yhe pyramid of ______.",
    options: [
      "Energy",
      "Number",
      "Biomass",
      "Both A and C"
    ],
    answer: 1
  },
  {
    question: "The pyramid that cannot be inverted in a stable ecosystem, is pyramid of",
    options: [
      "Number",
      "Energy",
      "Biomass",
      "All of the above"
    ],
    answer: 1
  },
  {
    question: "The term ecosystem was coined by",
    options: [
      "Odum",
      "Ernest Haeckel",
      "Tansley",
      "Reiter"
    ],
    answer: 2
  },
  {
    question: "Inverted pyramid of biomass can be traced in which one of the following ecosystem?",
    options: [
      "Rain forest",
      "Desert",
      "Ocean",
      "Tundra"
    ],
    answer: 2
  },
  {
    question: "Ecological factors, which prevent a species from producing at its maximum rate are termed as",
    options: [
      "Survival curve",
      "Ecological drift",
      "Environment resistance",
      "All of the above"
    ],
    answer: 2
  },
  {
    question: "_______ is the measure of the buffering capacity of water",
    options: [
      "pH",
      "Millilitres",
      "Alkalinity",
      "Turbidity"
    ],
    answer: 2
  },
  {
    question: "In the food chain the flow of energy is",
    options: [
      "Multidirectional",
      "Bidirectional",
      "Undirectional",
      "None of the above"
    ],
    answer: 2
  },
  {
    question: "Collected invertebrate animals are usually preserved in",
    options: [
      "100% alcohol",
      "10% alcohol",
      "75% formalin",
      "10% formalin"
    ],
    answer: 2
  },
  {
    question: "The ideal place to record body temperature in a dead body is",
    options: [
      "Rectum",
      "Axilia",
      "Mouth",
      "Groin"
    ],
    answer: 0
  },
  {
    question: "Only ________ percent of solar energy is used by photosynthesis plant",
    options: [
      "48%",
      "26%",
      "15%",
      "5%"
    ],
    answer: 1
  },
  {
    question: "The state of normal rainfall increasing suddenly and continuing constantly for several days is named as",
    options: [
      "break",
      "burst",
      "mango shower",
      "kall baishakhi"
    ],
    answer: 1
  },
  {
    question: "Which of the following climatic controls is the most important?",
    options: [
      "Latitude",
      "Altitude",
      "Pressure and wind system",
      "Continentality"
    ],
    answer: 0
  },
  {
    question: "Most stable ecosystem is",
    options: [
      "Mountain",
      "Forest",
      "Desert",
      "Ocean"
    ],
    answer: 0
  },
  {
    question: "Aves are ______ blooded animals",
    options: [
      "warm",
      "cold",
      "hot",
      "normal"
    ],
    answer: 0
  },
  
  
  
];

export default questions;
