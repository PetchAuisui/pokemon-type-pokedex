export const typeColors = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};

export const typeChart = {
  normal: {
    normal: 1, fire: 1, water: 1, grass: 1, electric: 1, ice: 1, fighting: 1, poison: 1, ground: 1, flying: 1, psychic: 1, bug: 1, rock: 0.5, ghost: 0, dragon: 1, dark: 1, steel: 0.5, fairy: 1
  },
  fire: {
    normal: 1, fire: 0.5, water: 0.5, grass: 2, electric: 1, ice: 2, fighting: 1, poison: 1, ground: 1, flying: 1, psychic: 1, bug: 2, rock: 0.5, ghost: 1, dragon: 0.5, dark: 1, steel: 2, fairy: 1
  },
  water: {
    normal: 1, fire: 2, water: 0.5, grass: 0.5, electric: 1, ice: 1, fighting: 1, poison: 1, ground: 2, flying: 1, psychic: 1, bug: 1, rock: 2, ghost: 1, dragon: 0.5, dark: 1, steel: 1, fairy: 1
  },
  grass: {
    normal: 1, fire: 0.5, water: 2, grass: 0.5, electric: 1, ice: 1, fighting: 1, poison: 0.5, ground: 2, flying: 0.5, psychic: 1, bug: 0.5, rock: 2, ghost: 1, dragon: 0.5, dark: 1, steel: 0.5, fairy: 1
  },
  electric: {
    normal: 1, fire: 1, water: 2, grass: 0.5, electric: 0.5, ice: 1, fighting: 1, poison: 1, ground: 0, flying: 2, psychic: 1, bug: 1, rock: 1, ghost: 1, dragon: 0.5, dark: 1, steel: 1, fairy: 1
  },
  ice: {
    normal: 1, fire: 0.5, water: 0.5, grass: 2, electric: 1, ice: 0.5, fighting: 1, poison: 1, ground: 2, flying: 2, psychic: 1, bug: 1, rock: 1, ghost: 1, dragon: 2, dark: 1, steel: 0.5, fairy: 1
  },
  fighting: {
    normal: 2, fire: 1, water: 1, grass: 1, electric: 1, ice: 2, fighting: 1, poison: 0.5, ground: 1, flying: 0.5, psychic: 0.5, bug: 0.5, rock: 2, ghost: 0, dragon: 1, dark: 2, steel: 2, fairy: 0.5
  },
  poison: {
    normal: 1, fire: 1, water: 1, grass: 2, electric: 1, ice: 1, fighting: 1, poison: 0.5, ground: 0.5, flying: 1, psychic: 1, bug: 1, rock: 0.5, ghost: 0.5, dragon: 1, dark: 1, steel: 0, fairy: 2
  },
  ground: {
    normal: 1, fire: 2, water: 1, grass: 0.5, electric: 2, ice: 1, fighting: 1, poison: 2, ground: 1, flying: 0, psychic: 1, bug: 0.5, rock: 2, ghost: 1, dragon: 1, dark: 1, steel: 2, fairy: 1
  },
  flying: {
    normal: 1, fire: 1, water: 1, grass: 2, electric: 0.5, ice: 1, fighting: 2, poison: 1, ground: 1, flying: 1, psychic: 1, bug: 2, rock: 0.5, ghost: 1, dragon: 1, dark: 1, steel: 0.5, fairy: 1
  },
  psychic: {
    normal: 1, fire: 1, water: 1, grass: 1, electric: 1, ice: 1, fighting: 2, poison: 2, ground: 1, flying: 1, psychic: 0.5, bug: 1, rock: 1, ghost: 1, dragon: 1, dark: 0, steel: 0.5, fairy: 1
  },
  bug: {
    normal: 1, fire: 0.5, water: 1, grass: 2, electric: 1, ice: 1, fighting: 0.5, poison: 0.5, ground: 1, flying: 0.5, psychic: 2, bug: 1, rock: 1, ghost: 0.5, dragon: 1, dark: 2, steel: 0.5, fairy: 0.5
  },
  rock: {
    normal: 1, fire: 2, water: 1, grass: 1, electric: 1, ice: 2, fighting: 0.5, poison: 1, ground: 0.5, flying: 2, psychic: 1, bug: 2, rock: 1, ghost: 1, dragon: 1, dark: 1, steel: 0.5, fairy: 1
  },
  ghost: {
    normal: 0, fire: 1, water: 1, grass: 1, electric: 1, ice: 1, fighting: 1, poison: 1, ground: 1, flying: 1, psychic: 2, bug: 1, rock: 1, ghost: 2, dragon: 1, dark: 0.5, steel: 1, fairy: 1
  },
  dragon: {
    normal: 1, fire: 1, water: 1, grass: 1, electric: 1, ice: 1, fighting: 1, poison: 1, ground: 1, flying: 1, psychic: 1, bug: 1, rock: 1, ghost: 1, dragon: 2, dark: 1, steel: 0.5, fairy: 0
  },
  dark: {
    normal: 1, fire: 1, water: 1, grass: 1, electric: 1, ice: 1, fighting: 0.5, poison: 1, ground: 1, flying: 1, psychic: 2, bug: 1, rock: 1, ghost: 2, dragon: 1, dark: 0.5, steel: 1, fairy: 0.5
  },
  steel: {
    normal: 1, fire: 0.5, water: 0.5, grass: 1, electric: 0.5, ice: 2, fighting: 1, poison: 1, ground: 1, flying: 1, psychic: 1, bug: 1, rock: 2, ghost: 1, dragon: 1, dark: 1, steel: 0.5, fairy: 2
  },
  fairy: {
    normal: 1, fire: 0.5, water: 1, grass: 1, electric: 1, ice: 1, fighting: 2, poison: 0.5, ground: 1, flying: 1, psychic: 1, bug: 1, rock: 1, ghost: 1, dragon: 2, dark: 2, steel: 0.5, fairy: 1
  }
};

export const pokemonDatabase = [
  {
    "id": 1,
    "nameEn": "Bulbasaur",
    "nameTh": "ฟุชิกิดาเนะ",
    "types": [
      "grass",
      "poison"
    ]
  },
  {
    "id": 2,
    "nameEn": "Ivysaur",
    "nameTh": "ฟุชิกิโซ",
    "types": [
      "grass",
      "poison"
    ]
  },
  {
    "id": 3,
    "nameEn": "Venusaur",
    "nameTh": "ฟุชิกิบานะ",
    "types": [
      "grass",
      "poison"
    ]
  },
  {
    "id": 4,
    "nameEn": "Charmander",
    "nameTh": "ฮิโตคาเงะ",
    "types": [
      "fire"
    ]
  },
  {
    "id": 5,
    "nameEn": "Charmeleon",
    "nameTh": "ลิซาร์โดะ",
    "types": [
      "fire"
    ]
  },
  {
    "id": 6,
    "nameEn": "Charizard",
    "nameTh": "ลิซาร์ดอน",
    "types": [
      "fire",
      "flying"
    ]
  },
  {
    "id": 7,
    "nameEn": "Squirtle",
    "nameTh": "เซนิกาเมะ",
    "types": [
      "water"
    ]
  },
  {
    "id": 8,
    "nameEn": "Wartortle",
    "nameTh": "คาเมล",
    "types": [
      "water"
    ]
  },
  {
    "id": 9,
    "nameEn": "Blastoise",
    "nameTh": "คาเม็กซ์",
    "types": [
      "water"
    ]
  },
  {
    "id": 10,
    "nameEn": "Caterpie",
    "nameTh": "คาเตอร์ปี",
    "types": [
      "bug"
    ]
  },
  {
    "id": 11,
    "nameEn": "Metapod",
    "nameTh": "ทรานเซล",
    "types": [
      "bug"
    ]
  },
  {
    "id": 12,
    "nameEn": "Butterfree",
    "nameTh": "บัตเตอร์ฟรี",
    "types": [
      "flying",
      "bug"
    ]
  },
  {
    "id": 13,
    "nameEn": "Weedle",
    "nameTh": "บีเดิล",
    "types": [
      "poison",
      "bug"
    ]
  },
  {
    "id": 14,
    "nameEn": "Kakuna",
    "nameTh": "โคคูน",
    "types": [
      "poison",
      "bug"
    ]
  },
  {
    "id": 15,
    "nameEn": "Beedrill",
    "nameTh": "สเปียร์",
    "types": [
      "poison",
      "bug"
    ]
  },
  {
    "id": 16,
    "nameEn": "Pidgey",
    "nameTh": "ป็อปโปะ",
    "types": [
      "normal",
      "flying"
    ]
  },
  {
    "id": 17,
    "nameEn": "Pidgeotto",
    "nameTh": "พีเจียน",
    "types": [
      "normal",
      "flying"
    ]
  },
  {
    "id": 18,
    "nameEn": "Pidgeot",
    "nameTh": "พีเจียต",
    "types": [
      "normal",
      "flying"
    ]
  },
  {
    "id": 19,
    "nameEn": "Rattata",
    "nameTh": "โครัตตา",
    "types": [
      "normal"
    ]
  },
  {
    "id": 20,
    "nameEn": "Raticate",
    "nameTh": "รัตตา",
    "types": [
      "normal"
    ]
  },
  {
    "id": 21,
    "nameEn": "Spearow",
    "nameTh": "โอนิสึซึเมะ",
    "types": [
      "normal",
      "flying"
    ]
  },
  {
    "id": 22,
    "nameEn": "Fearow",
    "nameTh": "โอนิดริล",
    "types": [
      "normal",
      "flying"
    ]
  },
  {
    "id": 23,
    "nameEn": "Ekans",
    "nameTh": "อาร์โบ",
    "types": [
      "poison"
    ]
  },
  {
    "id": 24,
    "nameEn": "Arbok",
    "nameTh": "อาร์บอก",
    "types": [
      "poison"
    ]
  },
  {
    "id": 25,
    "nameEn": "Pikachu",
    "nameTh": "พิคาชู",
    "types": [
      "electric"
    ]
  },
  {
    "id": 26,
    "nameEn": "Raichu",
    "nameTh": "ไรชู",
    "types": [
      "electric"
    ]
  },
  {
    "id": 27,
    "nameEn": "Sandshrew",
    "nameTh": "แซนด์",
    "types": [
      "ground"
    ]
  },
  {
    "id": 28,
    "nameEn": "Sandslash",
    "nameTh": "แซนด์แพน",
    "types": [
      "ground"
    ]
  },
  {
    "id": 29,
    "nameEn": "Nidoran♀",
    "nameTh": "นิโดรัน♀",
    "types": [
      "poison"
    ]
  },
  {
    "id": 30,
    "nameEn": "Nidorina",
    "nameTh": "นิโดรินา",
    "types": [
      "poison"
    ]
  },
  {
    "id": 31,
    "nameEn": "Nidoqueen",
    "nameTh": "นิโดควีน",
    "types": [
      "poison",
      "ground"
    ]
  },
  {
    "id": 32,
    "nameEn": "Nidoran♂",
    "nameTh": "นิโดรัน♂",
    "types": [
      "poison"
    ]
  },
  {
    "id": 33,
    "nameEn": "Nidorino",
    "nameTh": "นิโดริโน",
    "types": [
      "poison"
    ]
  },
  {
    "id": 34,
    "nameEn": "Nidoking",
    "nameTh": "นิโดคิง",
    "types": [
      "poison",
      "ground"
    ]
  },
  {
    "id": 35,
    "nameEn": "Clefairy",
    "nameTh": "ปิปปี",
    "types": [
      "fairy"
    ]
  },
  {
    "id": 36,
    "nameEn": "Clefable",
    "nameTh": "ปิคซี",
    "types": [
      "fairy"
    ]
  },
  {
    "id": 37,
    "nameEn": "Vulpix",
    "nameTh": "โรคอน",
    "types": [
      "fire"
    ]
  },
  {
    "id": 38,
    "nameEn": "Ninetales",
    "nameTh": "คิวคอน",
    "types": [
      "fire"
    ]
  },
  {
    "id": 39,
    "nameEn": "Jigglypuff",
    "nameTh": "พูริน",
    "types": [
      "normal",
      "fairy"
    ]
  },
  {
    "id": 40,
    "nameEn": "Wigglytuff",
    "nameTh": "พูคูริน",
    "types": [
      "normal",
      "fairy"
    ]
  },
  {
    "id": 41,
    "nameEn": "Zubat",
    "nameTh": "ซูแบท",
    "types": [
      "poison",
      "flying"
    ]
  },
  {
    "id": 42,
    "nameEn": "Golbat",
    "nameTh": "โกลแบท",
    "types": [
      "poison",
      "flying"
    ]
  },
  {
    "id": 43,
    "nameEn": "Oddish",
    "nameTh": "นาโซโนะคุสะ",
    "types": [
      "grass",
      "poison"
    ]
  },
  {
    "id": 44,
    "nameEn": "Gloom",
    "nameTh": "คุไซฮานะ",
    "types": [
      "grass",
      "poison"
    ]
  },
  {
    "id": 45,
    "nameEn": "Vileplume",
    "nameTh": "รัฟเฟรเซีย",
    "types": [
      "grass",
      "poison"
    ]
  },
  {
    "id": 46,
    "nameEn": "Paras",
    "nameTh": "พารัส",
    "types": [
      "grass",
      "bug"
    ]
  },
  {
    "id": 47,
    "nameEn": "Parasect",
    "nameTh": "พาราเซ็คท์",
    "types": [
      "grass",
      "bug"
    ]
  },
  {
    "id": 48,
    "nameEn": "Venonat",
    "nameTh": "คองปัง",
    "types": [
      "poison",
      "bug"
    ]
  },
  {
    "id": 49,
    "nameEn": "Venomoth",
    "nameTh": "มอร์ฟอน",
    "types": [
      "poison",
      "bug"
    ]
  },
  {
    "id": 50,
    "nameEn": "Diglett",
    "nameTh": "ดิกดา",
    "types": [
      "ground"
    ]
  },
  {
    "id": 51,
    "nameEn": "Dugtrio",
    "nameTh": "ดักทริโอ",
    "types": [
      "ground"
    ]
  },
  {
    "id": 52,
    "nameEn": "Meowth",
    "nameTh": "เนียส",
    "types": [
      "normal"
    ]
  },
  {
    "id": 53,
    "nameEn": "Persian",
    "nameTh": "เปอร์เซียน",
    "types": [
      "normal"
    ]
  },
  {
    "id": 54,
    "nameEn": "Psyduck",
    "nameTh": "โคดัก",
    "types": [
      "water"
    ]
  },
  {
    "id": 55,
    "nameEn": "Golduck",
    "nameTh": "โกลดัก",
    "types": [
      "water"
    ]
  },
  {
    "id": 56,
    "nameEn": "Mankey",
    "nameTh": "แมนคี",
    "types": [
      "fighting"
    ]
  },
  {
    "id": 57,
    "nameEn": "Primeape",
    "nameTh": "โอโคริซารุ",
    "types": [
      "fighting"
    ]
  },
  {
    "id": 58,
    "nameEn": "Growlithe",
    "nameTh": "การ์ดี",
    "types": [
      "fire"
    ]
  },
  {
    "id": 59,
    "nameEn": "Arcanine",
    "nameTh": "วินดี",
    "types": [
      "fire"
    ]
  },
  {
    "id": 60,
    "nameEn": "Poliwag",
    "nameTh": "เนียวโรโมะ",
    "types": [
      "water"
    ]
  },
  {
    "id": 61,
    "nameEn": "Poliwhirl",
    "nameTh": "เนียวโรโซ",
    "types": [
      "water"
    ]
  },
  {
    "id": 62,
    "nameEn": "Poliwrath",
    "nameTh": "เนียวโรบอน",
    "types": [
      "water",
      "fighting"
    ]
  },
  {
    "id": 63,
    "nameEn": "Abra",
    "nameTh": "เคซี",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 64,
    "nameEn": "Kadabra",
    "nameTh": "ยุนเกเรอร์",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 65,
    "nameEn": "Alakazam",
    "nameTh": "ฟูดิน",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 66,
    "nameEn": "Machop",
    "nameTh": "วันริกี",
    "types": [
      "fighting"
    ]
  },
  {
    "id": 67,
    "nameEn": "Machoke",
    "nameTh": "โกริกี",
    "types": [
      "fighting"
    ]
  },
  {
    "id": 68,
    "nameEn": "Machamp",
    "nameTh": "ไคริกี",
    "types": [
      "fighting"
    ]
  },
  {
    "id": 69,
    "nameEn": "Bellsprout",
    "nameTh": "มาดาซึโบมิ",
    "types": [
      "grass",
      "poison"
    ]
  },
  {
    "id": 70,
    "nameEn": "Weepinbell",
    "nameTh": "อุซึดง",
    "types": [
      "grass",
      "poison"
    ]
  },
  {
    "id": 71,
    "nameEn": "Victreebel",
    "nameTh": "อุซึบ็อท",
    "types": [
      "grass",
      "poison"
    ]
  },
  {
    "id": 72,
    "nameEn": "Tentacool",
    "nameTh": "เมโนคุราเกะ",
    "types": [
      "water",
      "poison"
    ]
  },
  {
    "id": 73,
    "nameEn": "Tentacruel",
    "nameTh": "โดคุคุราเกะ",
    "types": [
      "water",
      "poison"
    ]
  },
  {
    "id": 74,
    "nameEn": "Geodude",
    "nameTh": "อิชิซึบูเตะ",
    "types": [
      "ground",
      "rock"
    ]
  },
  {
    "id": 75,
    "nameEn": "Graveler",
    "nameTh": "โกโลน",
    "types": [
      "ground",
      "rock"
    ]
  },
  {
    "id": 76,
    "nameEn": "Golem",
    "nameTh": "โกโลเนีย",
    "types": [
      "ground",
      "rock"
    ]
  },
  {
    "id": 77,
    "nameEn": "Ponyta",
    "nameTh": "โพนีตะ",
    "types": [
      "fire"
    ]
  },
  {
    "id": 78,
    "nameEn": "Rapidash",
    "nameTh": "แกลล็อป",
    "types": [
      "fire"
    ]
  },
  {
    "id": 79,
    "nameEn": "Slowpoke",
    "nameTh": "ยาดง",
    "types": [
      "water",
      "psychic"
    ]
  },
  {
    "id": 80,
    "nameEn": "Slowbro",
    "nameTh": "ยาโดรัน",
    "types": [
      "water",
      "psychic"
    ]
  },
  {
    "id": 81,
    "nameEn": "Magnemite",
    "nameTh": "คอยล์",
    "types": [
      "electric",
      "steel"
    ]
  },
  {
    "id": 82,
    "nameEn": "Magneton",
    "nameTh": "แรคอยล์",
    "types": [
      "electric",
      "steel"
    ]
  },
  {
    "id": 83,
    "nameEn": "Farfetch'd",
    "nameTh": "คาโมเนกิ",
    "types": [
      "normal",
      "flying"
    ]
  },
  {
    "id": 84,
    "nameEn": "Doduo",
    "nameTh": "โดโด",
    "types": [
      "normal",
      "flying"
    ]
  },
  {
    "id": 85,
    "nameEn": "Dodrio",
    "nameTh": "โดโดริโอ",
    "types": [
      "normal",
      "flying"
    ]
  },
  {
    "id": 86,
    "nameEn": "Seel",
    "nameTh": "พาเวา",
    "types": [
      "water"
    ]
  },
  {
    "id": 87,
    "nameEn": "Dewgong",
    "nameTh": "จูกอน",
    "types": [
      "water",
      "ice"
    ]
  },
  {
    "id": 88,
    "nameEn": "Grimer",
    "nameTh": "เบ็ทเบเตอร์",
    "types": [
      "poison"
    ]
  },
  {
    "id": 89,
    "nameEn": "Muk",
    "nameTh": "เบ็ทเบตัน",
    "types": [
      "poison"
    ]
  },
  {
    "id": 90,
    "nameEn": "Shellder",
    "nameTh": "เชลเดอร์",
    "types": [
      "water"
    ]
  },
  {
    "id": 91,
    "nameEn": "Cloyster",
    "nameTh": "พาร์เชน",
    "types": [
      "water",
      "ice"
    ]
  },
  {
    "id": 92,
    "nameEn": "Gastly",
    "nameTh": "โกส",
    "types": [
      "poison",
      "ghost"
    ]
  },
  {
    "id": 93,
    "nameEn": "Haunter",
    "nameTh": "โกสท์",
    "types": [
      "poison",
      "ghost"
    ]
  },
  {
    "id": 94,
    "nameEn": "Gengar",
    "nameTh": "เก็งกา",
    "types": [
      "poison",
      "ghost"
    ]
  },
  {
    "id": 95,
    "nameEn": "Onix",
    "nameTh": "อิวาร์ค",
    "types": [
      "ground",
      "rock"
    ]
  },
  {
    "id": 96,
    "nameEn": "Drowzee",
    "nameTh": "สลีป",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 97,
    "nameEn": "Hypno",
    "nameTh": "สลีปเปอร์",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 98,
    "nameEn": "Krabby",
    "nameTh": "แครบ",
    "types": [
      "water"
    ]
  },
  {
    "id": 99,
    "nameEn": "Kingler",
    "nameTh": "คิงเกลอร์",
    "types": [
      "water"
    ]
  },
  {
    "id": 100,
    "nameEn": "Voltorb",
    "nameTh": "บิริริดามา",
    "types": [
      "electric"
    ]
  },
  {
    "id": 101,
    "nameEn": "Electrode",
    "nameTh": "มารุมายน์",
    "types": [
      "electric"
    ]
  },
  {
    "id": 102,
    "nameEn": "Exeggcute",
    "nameTh": "ทามะทามะ",
    "types": [
      "grass",
      "psychic"
    ]
  },
  {
    "id": 103,
    "nameEn": "Exeggutor",
    "nameTh": "นัชชี",
    "types": [
      "grass",
      "psychic"
    ]
  },
  {
    "id": 104,
    "nameEn": "Cubone",
    "nameTh": "คาระคาระ",
    "types": [
      "ground"
    ]
  },
  {
    "id": 105,
    "nameEn": "Marowak",
    "nameTh": "การะการะ",
    "types": [
      "ground"
    ]
  },
  {
    "id": 106,
    "nameEn": "Hitmonlee",
    "nameTh": "ซาวามูลาร์",
    "types": [
      "fighting"
    ]
  },
  {
    "id": 107,
    "nameEn": "Hitmonchan",
    "nameTh": "เอบิวาลาร์",
    "types": [
      "fighting"
    ]
  },
  {
    "id": 108,
    "nameEn": "Lickitung",
    "nameTh": "เบโรรินกา",
    "types": [
      "normal"
    ]
  },
  {
    "id": 109,
    "nameEn": "Koffing",
    "nameTh": "โดกาซ",
    "types": [
      "poison"
    ]
  },
  {
    "id": 110,
    "nameEn": "Weezing",
    "nameTh": "มาตาโดกัซ",
    "types": [
      "poison"
    ]
  },
  {
    "id": 111,
    "nameEn": "Rhyhorn",
    "nameTh": "ไซฮอร์น",
    "types": [
      "ground",
      "rock"
    ]
  },
  {
    "id": 112,
    "nameEn": "Rhydon",
    "nameTh": "ไซดอน",
    "types": [
      "ground",
      "rock"
    ]
  },
  {
    "id": 113,
    "nameEn": "Chansey",
    "nameTh": "ลัคกี",
    "types": [
      "normal"
    ]
  },
  {
    "id": 114,
    "nameEn": "Tangela",
    "nameTh": "มอนจารา",
    "types": [
      "grass"
    ]
  },
  {
    "id": 115,
    "nameEn": "Kangaskhan",
    "nameTh": "การูรา",
    "types": [
      "normal"
    ]
  },
  {
    "id": 116,
    "nameEn": "Horsea",
    "nameTh": "ทัททู",
    "types": [
      "water"
    ]
  },
  {
    "id": 117,
    "nameEn": "Seadra",
    "nameTh": "ซีดรา",
    "types": [
      "water"
    ]
  },
  {
    "id": 118,
    "nameEn": "Goldeen",
    "nameTh": "โทซาคินโตะ",
    "types": [
      "water"
    ]
  },
  {
    "id": 119,
    "nameEn": "Seaking",
    "nameTh": "อซึมาโอ",
    "types": [
      "water"
    ]
  },
  {
    "id": 120,
    "nameEn": "Staryu",
    "nameTh": "ฮิโตเดมัน",
    "types": [
      "water"
    ]
  },
  {
    "id": 121,
    "nameEn": "Starmie",
    "nameTh": "สตาร์มี",
    "types": [
      "water",
      "psychic"
    ]
  },
  {
    "id": 122,
    "nameEn": "Mr. Mime",
    "nameTh": "บาร์เรียด",
    "types": [
      "psychic",
      "fairy"
    ]
  },
  {
    "id": 123,
    "nameEn": "Scyther",
    "nameTh": "สไตรค์",
    "types": [
      "flying",
      "bug"
    ]
  },
  {
    "id": 124,
    "nameEn": "Jynx",
    "nameTh": "รูจูลา",
    "types": [
      "ice",
      "psychic"
    ]
  },
  {
    "id": 125,
    "nameEn": "Electabuzz",
    "nameTh": "เอเลบู",
    "types": [
      "electric"
    ]
  },
  {
    "id": 126,
    "nameEn": "Magmar",
    "nameTh": "บูเบอร์",
    "types": [
      "fire"
    ]
  },
  {
    "id": 127,
    "nameEn": "Pinsir",
    "nameTh": "ไคลอส",
    "types": [
      "bug"
    ]
  },
  {
    "id": 128,
    "nameEn": "Tauros",
    "nameTh": "เคนเทารอส",
    "types": [
      "normal"
    ]
  },
  {
    "id": 129,
    "nameEn": "Magikarp",
    "nameTh": "คอยคิง",
    "types": [
      "water"
    ]
  },
  {
    "id": 130,
    "nameEn": "Gyarados",
    "nameTh": "เกียราดอส",
    "types": [
      "water",
      "flying"
    ]
  },
  {
    "id": 131,
    "nameEn": "Lapras",
    "nameTh": "ลาพลาซ",
    "types": [
      "water",
      "ice"
    ]
  },
  {
    "id": 132,
    "nameEn": "Ditto",
    "nameTh": "เมตามอน",
    "types": [
      "normal"
    ]
  },
  {
    "id": 133,
    "nameEn": "Eevee",
    "nameTh": "อีวุย",
    "types": [
      "normal"
    ]
  },
  {
    "id": 134,
    "nameEn": "Vaporeon",
    "nameTh": "ชาวเวอร์ส",
    "types": [
      "water"
    ]
  },
  {
    "id": 135,
    "nameEn": "Jolteon",
    "nameTh": "ธันเดอร์ส",
    "types": [
      "electric"
    ]
  },
  {
    "id": 136,
    "nameEn": "Flareon",
    "nameTh": "บูสเตอร์",
    "types": [
      "fire"
    ]
  },
  {
    "id": 137,
    "nameEn": "Porygon",
    "nameTh": "โพรีกอน",
    "types": [
      "normal"
    ]
  },
  {
    "id": 138,
    "nameEn": "Omanyte",
    "nameTh": "ออมไนต์",
    "types": [
      "water",
      "rock"
    ]
  },
  {
    "id": 139,
    "nameEn": "Omastar",
    "nameTh": "ออมสตาร์",
    "types": [
      "water",
      "rock"
    ]
  },
  {
    "id": 140,
    "nameEn": "Kabuto",
    "nameTh": "คาบูโตะ",
    "types": [
      "water",
      "rock"
    ]
  },
  {
    "id": 141,
    "nameEn": "Kabutops",
    "nameTh": "คาบูท็อปส์",
    "types": [
      "water",
      "rock"
    ]
  },
  {
    "id": 142,
    "nameEn": "Aerodactyl",
    "nameTh": "พเทอรา",
    "types": [
      "flying",
      "rock"
    ]
  },
  {
    "id": 143,
    "nameEn": "Snorlax",
    "nameTh": "คาบิกอน",
    "types": [
      "normal"
    ]
  },
  {
    "id": 144,
    "nameEn": "Articuno",
    "nameTh": "ฟรีเซอร์",
    "types": [
      "ice",
      "flying"
    ]
  },
  {
    "id": 145,
    "nameEn": "Zapdos",
    "nameTh": "ธันเดอร์",
    "types": [
      "electric",
      "flying"
    ]
  },
  {
    "id": 146,
    "nameEn": "Moltres",
    "nameTh": "ไฟเยอร์",
    "types": [
      "fire",
      "flying"
    ]
  },
  {
    "id": 147,
    "nameEn": "Dratini",
    "nameTh": "มินิริว",
    "types": [
      "dragon"
    ]
  },
  {
    "id": 148,
    "nameEn": "Dragonair",
    "nameTh": "ฮาคุริว",
    "types": [
      "dragon"
    ]
  },
  {
    "id": 149,
    "nameEn": "Dragonite",
    "nameTh": "ไคริว",
    "types": [
      "flying",
      "dragon"
    ]
  },
  {
    "id": 150,
    "nameEn": "Mewtwo",
    "nameTh": "มิวทู",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 151,
    "nameEn": "Mew",
    "nameTh": "มิว",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 152,
    "nameEn": "Chikorita",
    "nameTh": "จิโคริตา",
    "types": [
      "grass"
    ]
  },
  {
    "id": 153,
    "nameEn": "Bayleef",
    "nameTh": "เบย์ลีฟ",
    "types": [
      "grass"
    ]
  },
  {
    "id": 154,
    "nameEn": "Meganium",
    "nameTh": "เมกาเนียม",
    "types": [
      "grass"
    ]
  },
  {
    "id": 155,
    "nameEn": "Cyndaquil",
    "nameTh": "ฮิโนอาราชิ",
    "types": [
      "fire"
    ]
  },
  {
    "id": 156,
    "nameEn": "Quilava",
    "nameTh": "แม็กมาราชิ",
    "types": [
      "fire"
    ]
  },
  {
    "id": 157,
    "nameEn": "Typhlosion",
    "nameTh": "แบ็กฟูน",
    "types": [
      "fire"
    ]
  },
  {
    "id": 158,
    "nameEn": "Totodile",
    "nameTh": "วานิโนโกะ",
    "types": [
      "water"
    ]
  },
  {
    "id": 159,
    "nameEn": "Croconaw",
    "nameTh": "อัลลิเกต",
    "types": [
      "water"
    ]
  },
  {
    "id": 160,
    "nameEn": "Feraligatr",
    "nameTh": "ออไดล์",
    "types": [
      "water"
    ]
  },
  {
    "id": 161,
    "nameEn": "Sentret",
    "nameTh": "โอทาจิ",
    "types": [
      "normal"
    ]
  },
  {
    "id": 162,
    "nameEn": "Furret",
    "nameTh": "โอโอทาจิ",
    "types": [
      "normal"
    ]
  },
  {
    "id": 163,
    "nameEn": "Hoothoot",
    "nameTh": "โฮโฮ",
    "types": [
      "normal",
      "flying"
    ]
  },
  {
    "id": 164,
    "nameEn": "Noctowl",
    "nameTh": "โยรุโนะซึคุ",
    "types": [
      "normal",
      "flying"
    ]
  },
  {
    "id": 165,
    "nameEn": "Ledyba",
    "nameTh": "เรดิบา",
    "types": [
      "flying",
      "bug"
    ]
  },
  {
    "id": 166,
    "nameEn": "Ledian",
    "nameTh": "เรเดียน",
    "types": [
      "flying",
      "bug"
    ]
  },
  {
    "id": 167,
    "nameEn": "Spinarak",
    "nameTh": "อิโตมารุ",
    "types": [
      "poison",
      "bug"
    ]
  },
  {
    "id": 168,
    "nameEn": "Ariados",
    "nameTh": "อาริอาโดส",
    "types": [
      "poison",
      "bug"
    ]
  },
  {
    "id": 169,
    "nameEn": "Crobat",
    "nameTh": "โครแบท",
    "types": [
      "poison",
      "flying"
    ]
  },
  {
    "id": 170,
    "nameEn": "Chinchou",
    "nameTh": "ชอนชี",
    "types": [
      "water",
      "electric"
    ]
  },
  {
    "id": 171,
    "nameEn": "Lanturn",
    "nameTh": "แลนเทอร์น",
    "types": [
      "water",
      "electric"
    ]
  },
  {
    "id": 172,
    "nameEn": "Pichu",
    "nameTh": "พิชู",
    "types": [
      "electric"
    ]
  },
  {
    "id": 173,
    "nameEn": "Cleffa",
    "nameTh": "ปี",
    "types": [
      "fairy"
    ]
  },
  {
    "id": 174,
    "nameEn": "Igglybuff",
    "nameTh": "พูพูริน",
    "types": [
      "normal",
      "fairy"
    ]
  },
  {
    "id": 175,
    "nameEn": "Togepi",
    "nameTh": "โทเกปี",
    "types": [
      "fairy"
    ]
  },
  {
    "id": 176,
    "nameEn": "Togetic",
    "nameTh": "โทเกชิก",
    "types": [
      "flying",
      "fairy"
    ]
  },
  {
    "id": 177,
    "nameEn": "Natu",
    "nameTh": "เนที",
    "types": [
      "flying",
      "psychic"
    ]
  },
  {
    "id": 178,
    "nameEn": "Xatu",
    "nameTh": "เนทิโอ",
    "types": [
      "flying",
      "psychic"
    ]
  },
  {
    "id": 179,
    "nameEn": "Mareep",
    "nameTh": "เมรีป",
    "types": [
      "electric"
    ]
  },
  {
    "id": 180,
    "nameEn": "Flaaffy",
    "nameTh": "โมโคโค",
    "types": [
      "electric"
    ]
  },
  {
    "id": 181,
    "nameEn": "Ampharos",
    "nameTh": "เด็นริว",
    "types": [
      "electric"
    ]
  },
  {
    "id": 182,
    "nameEn": "Bellossom",
    "nameTh": "คิเรอิฮานะ",
    "types": [
      "grass"
    ]
  },
  {
    "id": 183,
    "nameEn": "Marill",
    "nameTh": "มาริล",
    "types": [
      "water",
      "fairy"
    ]
  },
  {
    "id": 184,
    "nameEn": "Azumarill",
    "nameTh": "มาริลลิ",
    "types": [
      "water",
      "fairy"
    ]
  },
  {
    "id": 185,
    "nameEn": "Sudowoodo",
    "nameTh": "อุซกกี",
    "types": [
      "rock"
    ]
  },
  {
    "id": 186,
    "nameEn": "Politoed",
    "nameTh": "นิวโรโทโน",
    "types": [
      "water"
    ]
  },
  {
    "id": 187,
    "nameEn": "Hoppip",
    "nameTh": "ฮาเน็กโกะ",
    "types": [
      "grass",
      "flying"
    ]
  },
  {
    "id": 188,
    "nameEn": "Skiploom",
    "nameTh": "โพพ็อกโกะ",
    "types": [
      "grass",
      "flying"
    ]
  },
  {
    "id": 189,
    "nameEn": "Jumpluff",
    "nameTh": "วาทักโกะ",
    "types": [
      "grass",
      "flying"
    ]
  },
  {
    "id": 190,
    "nameEn": "Aipom",
    "nameTh": "เอย์แพม",
    "types": [
      "normal"
    ]
  },
  {
    "id": 191,
    "nameEn": "Sunkern",
    "nameTh": "ฮิมานัทส์",
    "types": [
      "grass"
    ]
  },
  {
    "id": 192,
    "nameEn": "Sunflora",
    "nameTh": "คิมาวาริ",
    "types": [
      "grass"
    ]
  },
  {
    "id": 193,
    "nameEn": "Yanma",
    "nameTh": "ยันยันมา",
    "types": [
      "flying",
      "bug"
    ]
  },
  {
    "id": 194,
    "nameEn": "Wooper",
    "nameTh": "อูปา",
    "types": [
      "water",
      "ground"
    ]
  },
  {
    "id": 195,
    "nameEn": "Quagsire",
    "nameTh": "นูโอ",
    "types": [
      "water",
      "ground"
    ]
  },
  {
    "id": 196,
    "nameEn": "Espeon",
    "nameTh": "เอฟี",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 197,
    "nameEn": "Umbreon",
    "nameTh": "แบล็กกี",
    "types": [
      "dark"
    ]
  },
  {
    "id": 198,
    "nameEn": "Murkrow",
    "nameTh": "ยามิคาราซึ",
    "types": [
      "flying",
      "dark"
    ]
  },
  {
    "id": 199,
    "nameEn": "Slowking",
    "nameTh": "ยาโดคิง",
    "types": [
      "water",
      "psychic"
    ]
  },
  {
    "id": 200,
    "nameEn": "Misdreavus",
    "nameTh": "มูมา",
    "types": [
      "ghost"
    ]
  },
  {
    "id": 201,
    "nameEn": "Unown",
    "nameTh": "อันโนน",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 202,
    "nameEn": "Wobbuffet",
    "nameTh": "โซนานส์",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 203,
    "nameEn": "Girafarig",
    "nameTh": "คิรินริกิ",
    "types": [
      "normal",
      "psychic"
    ]
  },
  {
    "id": 204,
    "nameEn": "Pineco",
    "nameTh": "คุนุกิดามะ",
    "types": [
      "bug"
    ]
  },
  {
    "id": 205,
    "nameEn": "Forretress",
    "nameTh": "ฟอเรทอส",
    "types": [
      "bug",
      "steel"
    ]
  },
  {
    "id": 206,
    "nameEn": "Dunsparce",
    "nameTh": "โนก็อจจิ",
    "types": [
      "normal"
    ]
  },
  {
    "id": 207,
    "nameEn": "Gligar",
    "nameTh": "ไกลกา",
    "types": [
      "ground",
      "flying"
    ]
  },
  {
    "id": 208,
    "nameEn": "Steelix",
    "nameTh": "ฮากาเนล",
    "types": [
      "ground",
      "steel"
    ]
  },
  {
    "id": 209,
    "nameEn": "Snubbull",
    "nameTh": "บูล",
    "types": [
      "fairy"
    ]
  },
  {
    "id": 210,
    "nameEn": "Granbull",
    "nameTh": "แกรนบูล",
    "types": [
      "fairy"
    ]
  },
  {
    "id": 211,
    "nameEn": "Qwilfish",
    "nameTh": "ฮารีเซน",
    "types": [
      "water",
      "poison"
    ]
  },
  {
    "id": 212,
    "nameEn": "Scizor",
    "nameTh": "ฮัซซัม",
    "types": [
      "bug",
      "steel"
    ]
  },
  {
    "id": 213,
    "nameEn": "Shuckle",
    "nameTh": "ซึโบซึโบะ",
    "types": [
      "bug",
      "rock"
    ]
  },
  {
    "id": 214,
    "nameEn": "Heracross",
    "nameTh": "เฮราครอส",
    "types": [
      "fighting",
      "bug"
    ]
  },
  {
    "id": 215,
    "nameEn": "Sneasel",
    "nameTh": "นิวลา",
    "types": [
      "ice",
      "dark"
    ]
  },
  {
    "id": 216,
    "nameEn": "Teddiursa",
    "nameTh": "ฮิเมกุมะ",
    "types": [
      "normal"
    ]
  },
  {
    "id": 217,
    "nameEn": "Ursaring",
    "nameTh": "ริงกุมะ",
    "types": [
      "normal"
    ]
  },
  {
    "id": 218,
    "nameEn": "Slugma",
    "nameTh": "มักแม็ก",
    "types": [
      "fire"
    ]
  },
  {
    "id": 219,
    "nameEn": "Magcargo",
    "nameTh": "มักคาร์โก",
    "types": [
      "fire",
      "rock"
    ]
  },
  {
    "id": 220,
    "nameEn": "Swinub",
    "nameTh": "อุริมู",
    "types": [
      "ice",
      "ground"
    ]
  },
  {
    "id": 221,
    "nameEn": "Piloswine",
    "nameTh": "อิโนมู",
    "types": [
      "ice",
      "ground"
    ]
  },
  {
    "id": 222,
    "nameEn": "Corsola",
    "nameTh": "ซันนีโก",
    "types": [
      "water",
      "rock"
    ]
  },
  {
    "id": 223,
    "nameEn": "Remoraid",
    "nameTh": "เทปโปโอ",
    "types": [
      "water"
    ]
  },
  {
    "id": 224,
    "nameEn": "Octillery",
    "nameTh": "ออคตัน",
    "types": [
      "water"
    ]
  },
  {
    "id": 225,
    "nameEn": "Delibird",
    "nameTh": "เดลิเบิร์ด",
    "types": [
      "ice",
      "flying"
    ]
  },
  {
    "id": 226,
    "nameEn": "Mantine",
    "nameTh": "แมนไทน์",
    "types": [
      "water",
      "flying"
    ]
  },
  {
    "id": 227,
    "nameEn": "Skarmory",
    "nameTh": "แอร์มุโด",
    "types": [
      "flying",
      "steel"
    ]
  },
  {
    "id": 228,
    "nameEn": "Houndour",
    "nameTh": "เดลวิล",
    "types": [
      "fire",
      "dark"
    ]
  },
  {
    "id": 229,
    "nameEn": "Houndoom",
    "nameTh": "เฮลการ์",
    "types": [
      "fire",
      "dark"
    ]
  },
  {
    "id": 230,
    "nameEn": "Kingdra",
    "nameTh": "คิงดรา",
    "types": [
      "water",
      "dragon"
    ]
  },
  {
    "id": 231,
    "nameEn": "Phanpy",
    "nameTh": "โกมาโซ",
    "types": [
      "ground"
    ]
  },
  {
    "id": 232,
    "nameEn": "Donphan",
    "nameTh": "ดอนแฟน",
    "types": [
      "ground"
    ]
  },
  {
    "id": 233,
    "nameEn": "Porygon2",
    "nameTh": "โพรีกอน",
    "types": [
      "normal"
    ]
  },
  {
    "id": 234,
    "nameEn": "Stantler",
    "nameTh": "โอโดชิชิ",
    "types": [
      "normal"
    ]
  },
  {
    "id": 235,
    "nameEn": "Smeargle",
    "nameTh": "โดเบิล",
    "types": [
      "normal"
    ]
  },
  {
    "id": 236,
    "nameEn": "Tyrogue",
    "nameTh": "บัลกี",
    "types": [
      "fighting"
    ]
  },
  {
    "id": 237,
    "nameEn": "Hitmontop",
    "nameTh": "คาโพเอลาร์",
    "types": [
      "fighting"
    ]
  },
  {
    "id": 238,
    "nameEn": "Smoochum",
    "nameTh": "มุจูล",
    "types": [
      "ice",
      "psychic"
    ]
  },
  {
    "id": 239,
    "nameEn": "Elekid",
    "nameTh": "เอเลคิด",
    "types": [
      "electric"
    ]
  },
  {
    "id": 240,
    "nameEn": "Magby",
    "nameTh": "บูบี",
    "types": [
      "fire"
    ]
  },
  {
    "id": 241,
    "nameEn": "Miltank",
    "nameTh": "มิลแทงค์",
    "types": [
      "normal"
    ]
  },
  {
    "id": 242,
    "nameEn": "Blissey",
    "nameTh": "แฮปปีนาส",
    "types": [
      "normal"
    ]
  },
  {
    "id": 243,
    "nameEn": "Raikou",
    "nameTh": "ไรโค",
    "types": [
      "electric"
    ]
  },
  {
    "id": 244,
    "nameEn": "Entei",
    "nameTh": "เอ็นเต",
    "types": [
      "fire"
    ]
  },
  {
    "id": 245,
    "nameEn": "Suicune",
    "nameTh": "ซุยคูน",
    "types": [
      "water"
    ]
  },
  {
    "id": 246,
    "nameEn": "Larvitar",
    "nameTh": "โยกิราส",
    "types": [
      "ground",
      "rock"
    ]
  },
  {
    "id": 247,
    "nameEn": "Pupitar",
    "nameTh": "ซานากิราส",
    "types": [
      "ground",
      "rock"
    ]
  },
  {
    "id": 248,
    "nameEn": "Tyranitar",
    "nameTh": "บันกิราส",
    "types": [
      "rock",
      "dark"
    ]
  },
  {
    "id": 249,
    "nameEn": "Lugia",
    "nameTh": "ลูเกีย",
    "types": [
      "flying",
      "psychic"
    ]
  },
  {
    "id": 250,
    "nameEn": "Ho-Oh",
    "nameTh": "โฮโอ",
    "types": [
      "fire",
      "flying"
    ]
  },
  {
    "id": 251,
    "nameEn": "Celebi",
    "nameTh": "เซเลบี",
    "types": [
      "grass",
      "psychic"
    ]
  },
  {
    "id": 252,
    "nameEn": "Treecko",
    "nameTh": "คิโมริ",
    "types": [
      "grass"
    ]
  },
  {
    "id": 253,
    "nameEn": "Grovyle",
    "nameTh": "จุปไทล์",
    "types": [
      "grass"
    ]
  },
  {
    "id": 254,
    "nameEn": "Sceptile",
    "nameTh": "จูไคน",
    "types": [
      "grass"
    ]
  },
  {
    "id": 255,
    "nameEn": "Torchic",
    "nameTh": "อาชาโม",
    "types": [
      "fire"
    ]
  },
  {
    "id": 256,
    "nameEn": "Combusken",
    "nameTh": "วาคาชาโม",
    "types": [
      "fire",
      "fighting"
    ]
  },
  {
    "id": 257,
    "nameEn": "Blaziken",
    "nameTh": "บาชาโม",
    "types": [
      "fire",
      "fighting"
    ]
  },
  {
    "id": 258,
    "nameEn": "Mudkip",
    "nameTh": "มิซึโกโร",
    "types": [
      "water"
    ]
  },
  {
    "id": 259,
    "nameEn": "Marshtomp",
    "nameTh": "นูมาโคร",
    "types": [
      "water",
      "ground"
    ]
  },
  {
    "id": 260,
    "nameEn": "Swampert",
    "nameTh": "ลากลาจ",
    "types": [
      "water",
      "ground"
    ]
  },
  {
    "id": 261,
    "nameEn": "Poochyena",
    "nameTh": "โปชิเอนา",
    "types": [
      "dark"
    ]
  },
  {
    "id": 262,
    "nameEn": "Mightyena",
    "nameTh": "กราเอนา",
    "types": [
      "dark"
    ]
  },
  {
    "id": 263,
    "nameEn": "Zigzagoon",
    "nameTh": "จิกุซากุมะ",
    "types": [
      "normal"
    ]
  },
  {
    "id": 264,
    "nameEn": "Linoone",
    "nameTh": "มัสสึกุมะ",
    "types": [
      "normal"
    ]
  },
  {
    "id": 265,
    "nameEn": "Wurmple",
    "nameTh": "เคมุตโสะ",
    "types": [
      "bug"
    ]
  },
  {
    "id": 266,
    "nameEn": "Silcoon",
    "nameTh": "คาราซาลิส",
    "types": [
      "bug"
    ]
  },
  {
    "id": 267,
    "nameEn": "Beautifly",
    "nameTh": "อาเกฮันท์",
    "types": [
      "flying",
      "bug"
    ]
  },
  {
    "id": 268,
    "nameEn": "Cascoon",
    "nameTh": "มายูลด์",
    "types": [
      "bug"
    ]
  },
  {
    "id": 269,
    "nameEn": "Dustox",
    "nameTh": "โดคุเคล",
    "types": [
      "poison",
      "bug"
    ]
  },
  {
    "id": 270,
    "nameEn": "Lotad",
    "nameTh": "ฮาซึโบ",
    "types": [
      "water",
      "grass"
    ]
  },
  {
    "id": 271,
    "nameEn": "Lombre",
    "nameTh": "ฮาซึเบรโร",
    "types": [
      "water",
      "grass"
    ]
  },
  {
    "id": 272,
    "nameEn": "Ludicolo",
    "nameTh": "รุนปัปปา",
    "types": [
      "water",
      "grass"
    ]
  },
  {
    "id": 273,
    "nameEn": "Seedot",
    "nameTh": "ทาเนโบ",
    "types": [
      "grass"
    ]
  },
  {
    "id": 274,
    "nameEn": "Nuzleaf",
    "nameTh": "โคโนฮานะ",
    "types": [
      "grass",
      "dark"
    ]
  },
  {
    "id": 275,
    "nameEn": "Shiftry",
    "nameTh": "ดาเทนกุ",
    "types": [
      "grass",
      "dark"
    ]
  },
  {
    "id": 276,
    "nameEn": "Taillow",
    "nameTh": "สึบาเมะ",
    "types": [
      "normal",
      "flying"
    ]
  },
  {
    "id": 277,
    "nameEn": "Swellow",
    "nameTh": "โอโอสึบาเมะ",
    "types": [
      "normal",
      "flying"
    ]
  },
  {
    "id": 278,
    "nameEn": "Wingull",
    "nameTh": "คาโมเมะ",
    "types": [
      "water",
      "flying"
    ]
  },
  {
    "id": 279,
    "nameEn": "Pelipper",
    "nameTh": "เพลิปเปอร์",
    "types": [
      "water",
      "flying"
    ]
  },
  {
    "id": 280,
    "nameEn": "Ralts",
    "nameTh": "ราลท์ซ",
    "types": [
      "psychic",
      "fairy"
    ]
  },
  {
    "id": 281,
    "nameEn": "Kirlia",
    "nameTh": "เคอเรีย",
    "types": [
      "psychic",
      "fairy"
    ]
  },
  {
    "id": 282,
    "nameEn": "Gardevoir",
    "nameTh": "เซอไนท์",
    "types": [
      "psychic",
      "fairy"
    ]
  },
  {
    "id": 283,
    "nameEn": "Surskit",
    "nameTh": "อาเมทามะ",
    "types": [
      "water",
      "bug"
    ]
  },
  {
    "id": 284,
    "nameEn": "Masquerain",
    "nameTh": "อาเมมอธ",
    "types": [
      "flying",
      "bug"
    ]
  },
  {
    "id": 285,
    "nameEn": "Shroomish",
    "nameTh": "คิโนโคโค",
    "types": [
      "grass"
    ]
  },
  {
    "id": 286,
    "nameEn": "Breloom",
    "nameTh": "คิโนกัซซา",
    "types": [
      "grass",
      "fighting"
    ]
  },
  {
    "id": 287,
    "nameEn": "Slakoth",
    "nameTh": "นามาเคโร",
    "types": [
      "normal"
    ]
  },
  {
    "id": 288,
    "nameEn": "Vigoroth",
    "nameTh": "ยารุคิโมโนะ",
    "types": [
      "normal"
    ]
  },
  {
    "id": 289,
    "nameEn": "Slaking",
    "nameTh": "เค็คคิง",
    "types": [
      "normal"
    ]
  },
  {
    "id": 290,
    "nameEn": "Nincada",
    "nameTh": "ซึชินิน",
    "types": [
      "ground",
      "bug"
    ]
  },
  {
    "id": 291,
    "nameEn": "Ninjask",
    "nameTh": "เท็คคานิน",
    "types": [
      "flying",
      "bug"
    ]
  },
  {
    "id": 292,
    "nameEn": "Shedinja",
    "nameTh": "นูเคนิน",
    "types": [
      "bug",
      "ghost"
    ]
  },
  {
    "id": 293,
    "nameEn": "Whismur",
    "nameTh": "โกเนียวเนียว",
    "types": [
      "normal"
    ]
  },
  {
    "id": 294,
    "nameEn": "Loudred",
    "nameTh": "โดกอม",
    "types": [
      "normal"
    ]
  },
  {
    "id": 295,
    "nameEn": "Exploud",
    "nameTh": "บาคุองก์",
    "types": [
      "normal"
    ]
  },
  {
    "id": 296,
    "nameEn": "Makuhita",
    "nameTh": "มาคุโนชิตะ",
    "types": [
      "fighting"
    ]
  },
  {
    "id": 297,
    "nameEn": "Hariyama",
    "nameTh": "ฮาริเทยามะ",
    "types": [
      "fighting"
    ]
  },
  {
    "id": 298,
    "nameEn": "Azurill",
    "nameTh": "รูริริ",
    "types": [
      "normal",
      "fairy"
    ]
  },
  {
    "id": 299,
    "nameEn": "Nosepass",
    "nameTh": "โนซพาส",
    "types": [
      "rock"
    ]
  },
  {
    "id": 300,
    "nameEn": "Skitty",
    "nameTh": "เอเนโค",
    "types": [
      "normal"
    ]
  },
  {
    "id": 301,
    "nameEn": "Delcatty",
    "nameTh": "เอเนโคโรโระ",
    "types": [
      "normal"
    ]
  },
  {
    "id": 302,
    "nameEn": "Sableye",
    "nameTh": "ยามิรามิ",
    "types": [
      "ghost",
      "dark"
    ]
  },
  {
    "id": 303,
    "nameEn": "Mawile",
    "nameTh": "คูชีท",
    "types": [
      "steel",
      "fairy"
    ]
  },
  {
    "id": 304,
    "nameEn": "Aron",
    "nameTh": "โคโคโดรา",
    "types": [
      "rock",
      "steel"
    ]
  },
  {
    "id": 305,
    "nameEn": "Lairon",
    "nameTh": "โคโดรา",
    "types": [
      "rock",
      "steel"
    ]
  },
  {
    "id": 306,
    "nameEn": "Aggron",
    "nameTh": "บอสโกโดรา",
    "types": [
      "rock",
      "steel"
    ]
  },
  {
    "id": 307,
    "nameEn": "Meditite",
    "nameTh": "อาซานัน",
    "types": [
      "fighting",
      "psychic"
    ]
  },
  {
    "id": 308,
    "nameEn": "Medicham",
    "nameTh": "ชาเรม",
    "types": [
      "fighting",
      "psychic"
    ]
  },
  {
    "id": 309,
    "nameEn": "Electrike",
    "nameTh": "ราคุไร",
    "types": [
      "electric"
    ]
  },
  {
    "id": 310,
    "nameEn": "Manectric",
    "nameTh": "ไลโวลต์",
    "types": [
      "electric"
    ]
  },
  {
    "id": 311,
    "nameEn": "Plusle",
    "nameTh": "พราเซิล",
    "types": [
      "electric"
    ]
  },
  {
    "id": 312,
    "nameEn": "Minun",
    "nameTh": "ไมนัน",
    "types": [
      "electric"
    ]
  },
  {
    "id": 313,
    "nameEn": "Volbeat",
    "nameTh": "บารูบีท",
    "types": [
      "bug"
    ]
  },
  {
    "id": 314,
    "nameEn": "Illumise",
    "nameTh": "อิลูมิเซะ",
    "types": [
      "bug"
    ]
  },
  {
    "id": 315,
    "nameEn": "Roselia",
    "nameTh": "โรเซเลีย",
    "types": [
      "grass",
      "poison"
    ]
  },
  {
    "id": 316,
    "nameEn": "Gulpin",
    "nameTh": "โกคูลิน",
    "types": [
      "poison"
    ]
  },
  {
    "id": 317,
    "nameEn": "Swalot",
    "nameTh": "มารุโนม",
    "types": [
      "poison"
    ]
  },
  {
    "id": 318,
    "nameEn": "Carvanha",
    "nameTh": "คิบาเนีย",
    "types": [
      "water",
      "dark"
    ]
  },
  {
    "id": 319,
    "nameEn": "Sharpedo",
    "nameTh": "ซาเมฮาเดอร์",
    "types": [
      "water",
      "dark"
    ]
  },
  {
    "id": 320,
    "nameEn": "Wailmer",
    "nameTh": "เวลโกะ",
    "types": [
      "water"
    ]
  },
  {
    "id": 321,
    "nameEn": "Wailord",
    "nameTh": "เวลโอ",
    "types": [
      "water"
    ]
  },
  {
    "id": 322,
    "nameEn": "Numel",
    "nameTh": "ดอนเมล",
    "types": [
      "fire",
      "ground"
    ]
  },
  {
    "id": 323,
    "nameEn": "Camerupt",
    "nameTh": "บาคูดา",
    "types": [
      "fire",
      "ground"
    ]
  },
  {
    "id": 324,
    "nameEn": "Torkoal",
    "nameTh": "โคทอยซ์",
    "types": [
      "fire"
    ]
  },
  {
    "id": 325,
    "nameEn": "Spoink",
    "nameTh": "บาเนบู",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 326,
    "nameEn": "Grumpig",
    "nameTh": "บูพิก",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 327,
    "nameEn": "Spinda",
    "nameTh": "พัทชีล",
    "types": [
      "normal"
    ]
  },
  {
    "id": 328,
    "nameEn": "Trapinch",
    "nameTh": "นัคครา",
    "types": [
      "ground"
    ]
  },
  {
    "id": 329,
    "nameEn": "Vibrava",
    "nameTh": "วิบราวา",
    "types": [
      "ground",
      "dragon"
    ]
  },
  {
    "id": 330,
    "nameEn": "Flygon",
    "nameTh": "ฟลายกอน",
    "types": [
      "ground",
      "dragon"
    ]
  },
  {
    "id": 331,
    "nameEn": "Cacnea",
    "nameTh": "ซาโบเนีย",
    "types": [
      "grass"
    ]
  },
  {
    "id": 332,
    "nameEn": "Cacturne",
    "nameTh": "น็อคทัส",
    "types": [
      "grass",
      "dark"
    ]
  },
  {
    "id": 333,
    "nameEn": "Swablu",
    "nameTh": "ทิลท์โท",
    "types": [
      "normal",
      "flying"
    ]
  },
  {
    "id": 334,
    "nameEn": "Altaria",
    "nameTh": "ทิลทาลิส",
    "types": [
      "flying",
      "dragon"
    ]
  },
  {
    "id": 335,
    "nameEn": "Zangoose",
    "nameTh": "แซงกูส",
    "types": [
      "normal"
    ]
  },
  {
    "id": 336,
    "nameEn": "Seviper",
    "nameTh": "ฮาบูเนค",
    "types": [
      "poison"
    ]
  },
  {
    "id": 337,
    "nameEn": "Lunatone",
    "nameTh": "ลูนาโทน",
    "types": [
      "psychic",
      "rock"
    ]
  },
  {
    "id": 338,
    "nameEn": "Solrock",
    "nameTh": "โซลร็อก",
    "types": [
      "psychic",
      "rock"
    ]
  },
  {
    "id": 339,
    "nameEn": "Barboach",
    "nameTh": "โดโจทช์",
    "types": [
      "water",
      "ground"
    ]
  },
  {
    "id": 340,
    "nameEn": "Whiscash",
    "nameTh": "นามาซูน",
    "types": [
      "water",
      "ground"
    ]
  },
  {
    "id": 341,
    "nameEn": "Corphish",
    "nameTh": "เฮกานิ",
    "types": [
      "water"
    ]
  },
  {
    "id": 342,
    "nameEn": "Crawdaunt",
    "nameTh": "ชิซาริเกอร์",
    "types": [
      "water",
      "dark"
    ]
  },
  {
    "id": 343,
    "nameEn": "Baltoy",
    "nameTh": "ยาจิลอน",
    "types": [
      "ground",
      "psychic"
    ]
  },
  {
    "id": 344,
    "nameEn": "Claydol",
    "nameTh": "เนนดอลล์",
    "types": [
      "ground",
      "psychic"
    ]
  },
  {
    "id": 345,
    "nameEn": "Lileep",
    "nameTh": "ลิลีลา",
    "types": [
      "grass",
      "rock"
    ]
  },
  {
    "id": 346,
    "nameEn": "Cradily",
    "nameTh": "ยูเรเดิล",
    "types": [
      "grass",
      "rock"
    ]
  },
  {
    "id": 347,
    "nameEn": "Anorith",
    "nameTh": "อน็อปธ์",
    "types": [
      "bug",
      "rock"
    ]
  },
  {
    "id": 348,
    "nameEn": "Armaldo",
    "nameTh": "อามัลโด",
    "types": [
      "bug",
      "rock"
    ]
  },
  {
    "id": 349,
    "nameEn": "Feebas",
    "nameTh": "ฮินบาส",
    "types": [
      "water"
    ]
  },
  {
    "id": 350,
    "nameEn": "Milotic",
    "nameTh": "มิโลคารอส",
    "types": [
      "water"
    ]
  },
  {
    "id": 351,
    "nameEn": "Castform",
    "nameTh": "โปวาลุน",
    "types": [
      "normal"
    ]
  },
  {
    "id": 352,
    "nameEn": "Kecleon",
    "nameTh": "คาคุเลียน",
    "types": [
      "normal"
    ]
  },
  {
    "id": 353,
    "nameEn": "Shuppet",
    "nameTh": "คาเงะโบอุส",
    "types": [
      "ghost"
    ]
  },
  {
    "id": 354,
    "nameEn": "Banette",
    "nameTh": "จุปเป็ตตะ",
    "types": [
      "ghost"
    ]
  },
  {
    "id": 355,
    "nameEn": "Duskull",
    "nameTh": "โยมาวารุ",
    "types": [
      "ghost"
    ]
  },
  {
    "id": 356,
    "nameEn": "Dusclops",
    "nameTh": "ซามาโยรุ",
    "types": [
      "ghost"
    ]
  },
  {
    "id": 357,
    "nameEn": "Tropius",
    "nameTh": "โทรพิอุส",
    "types": [
      "grass",
      "flying"
    ]
  },
  {
    "id": 358,
    "nameEn": "Chimecho",
    "nameTh": "ชิรีน",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 359,
    "nameEn": "Absol",
    "nameTh": "แอบโซล",
    "types": [
      "dark"
    ]
  },
  {
    "id": 360,
    "nameEn": "Wynaut",
    "nameTh": "โซนาโนะ",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 361,
    "nameEn": "Snorunt",
    "nameTh": "ยูกิวาราชิ",
    "types": [
      "ice"
    ]
  },
  {
    "id": 362,
    "nameEn": "Glalie",
    "nameTh": "โอนิโกริ",
    "types": [
      "ice"
    ]
  },
  {
    "id": 363,
    "nameEn": "Spheal",
    "nameTh": "ทามาซาราชิ",
    "types": [
      "water",
      "ice"
    ]
  },
  {
    "id": 364,
    "nameEn": "Sealeo",
    "nameTh": "โทดอกเกลอร์",
    "types": [
      "water",
      "ice"
    ]
  },
  {
    "id": 365,
    "nameEn": "Walrein",
    "nameTh": "โทโดเซรุกา",
    "types": [
      "water",
      "ice"
    ]
  },
  {
    "id": 366,
    "nameEn": "Clamperl",
    "nameTh": "ปาลูลุ",
    "types": [
      "water"
    ]
  },
  {
    "id": 367,
    "nameEn": "Huntail",
    "nameTh": "ฮันเทล",
    "types": [
      "water"
    ]
  },
  {
    "id": 368,
    "nameEn": "Gorebyss",
    "nameTh": "ซาคุราบีส",
    "types": [
      "water"
    ]
  },
  {
    "id": 369,
    "nameEn": "Relicanth",
    "nameTh": "จีแลนซ์",
    "types": [
      "water",
      "rock"
    ]
  },
  {
    "id": 370,
    "nameEn": "Luvdisc",
    "nameTh": "เลิฟคัส",
    "types": [
      "water"
    ]
  },
  {
    "id": 371,
    "nameEn": "Bagon",
    "nameTh": "ทัทซึเบ",
    "types": [
      "dragon"
    ]
  },
  {
    "id": 372,
    "nameEn": "Shelgon",
    "nameTh": "โคโมรู",
    "types": [
      "dragon"
    ]
  },
  {
    "id": 373,
    "nameEn": "Salamence",
    "nameTh": "โบมันเดอร์",
    "types": [
      "flying",
      "dragon"
    ]
  },
  {
    "id": 374,
    "nameEn": "Beldum",
    "nameTh": "ดันบัล",
    "types": [
      "psychic",
      "steel"
    ]
  },
  {
    "id": 375,
    "nameEn": "Metang",
    "nameTh": "เมแทงก์",
    "types": [
      "psychic",
      "steel"
    ]
  },
  {
    "id": 376,
    "nameEn": "Metagross",
    "nameTh": "เมทากรอส",
    "types": [
      "psychic",
      "steel"
    ]
  },
  {
    "id": 377,
    "nameEn": "Regirock",
    "nameTh": "เรจิร็อก",
    "types": [
      "rock"
    ]
  },
  {
    "id": 378,
    "nameEn": "Regice",
    "nameTh": "เรจิไอซ์",
    "types": [
      "ice"
    ]
  },
  {
    "id": 379,
    "nameEn": "Registeel",
    "nameTh": "เรจิสตีล",
    "types": [
      "steel"
    ]
  },
  {
    "id": 380,
    "nameEn": "Latias",
    "nameTh": "ลาทิอาส",
    "types": [
      "psychic",
      "dragon"
    ]
  },
  {
    "id": 381,
    "nameEn": "Latios",
    "nameTh": "ลาทิโอส",
    "types": [
      "psychic",
      "dragon"
    ]
  },
  {
    "id": 382,
    "nameEn": "Kyogre",
    "nameTh": "ไคออกา",
    "types": [
      "water"
    ]
  },
  {
    "id": 383,
    "nameEn": "Groudon",
    "nameTh": "กราดอน",
    "types": [
      "ground"
    ]
  },
  {
    "id": 384,
    "nameEn": "Rayquaza",
    "nameTh": "เร็คควอซา",
    "types": [
      "flying",
      "dragon"
    ]
  },
  {
    "id": 385,
    "nameEn": "Jirachi",
    "nameTh": "จิราชิ",
    "types": [
      "psychic",
      "steel"
    ]
  },
  {
    "id": 386,
    "nameEn": "Deoxys",
    "nameTh": "ดีอ็อกซิส",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 387,
    "nameEn": "Turtwig",
    "nameTh": "นาเอเติล",
    "types": [
      "grass"
    ]
  },
  {
    "id": 388,
    "nameEn": "Grotle",
    "nameTh": "ฮายาชิกาเมะ",
    "types": [
      "grass"
    ]
  },
  {
    "id": 389,
    "nameEn": "Torterra",
    "nameTh": "โดไดโทส",
    "types": [
      "grass",
      "ground"
    ]
  },
  {
    "id": 390,
    "nameEn": "Chimchar",
    "nameTh": "ฮิโกซารุ",
    "types": [
      "fire"
    ]
  },
  {
    "id": 391,
    "nameEn": "Monferno",
    "nameTh": "โมคาซารุ",
    "types": [
      "fire",
      "fighting"
    ]
  },
  {
    "id": 392,
    "nameEn": "Infernape",
    "nameTh": "โกคาซารุ",
    "types": [
      "fire",
      "fighting"
    ]
  },
  {
    "id": 393,
    "nameEn": "Piplup",
    "nameTh": "โพจจามะ",
    "types": [
      "water"
    ]
  },
  {
    "id": 394,
    "nameEn": "Prinplup",
    "nameTh": "โพจไทชิ",
    "types": [
      "water"
    ]
  },
  {
    "id": 395,
    "nameEn": "Empoleon",
    "nameTh": "เอ็มเพลท์",
    "types": [
      "water",
      "steel"
    ]
  },
  {
    "id": 396,
    "nameEn": "Starly",
    "nameTh": "มุคคูรุ",
    "types": [
      "normal",
      "flying"
    ]
  },
  {
    "id": 397,
    "nameEn": "Staravia",
    "nameTh": "มุคูเบิร์ด",
    "types": [
      "normal",
      "flying"
    ]
  },
  {
    "id": 398,
    "nameEn": "Staraptor",
    "nameTh": "มุคูฮอว์ก",
    "types": [
      "normal",
      "flying"
    ]
  },
  {
    "id": 399,
    "nameEn": "Bidoof",
    "nameTh": "บิปปา",
    "types": [
      "normal"
    ]
  },
  {
    "id": 400,
    "nameEn": "Bibarel",
    "nameTh": "บีดารุ",
    "types": [
      "normal",
      "water"
    ]
  },
  {
    "id": 401,
    "nameEn": "Kricketot",
    "nameTh": "โคโรโบชิ",
    "types": [
      "bug"
    ]
  },
  {
    "id": 402,
    "nameEn": "Kricketune",
    "nameTh": "โคโรท็อก",
    "types": [
      "bug"
    ]
  },
  {
    "id": 403,
    "nameEn": "Shinx",
    "nameTh": "โคลิงก์",
    "types": [
      "electric"
    ]
  },
  {
    "id": 404,
    "nameEn": "Luxio",
    "nameTh": "ลุคซิโอ",
    "types": [
      "electric"
    ]
  },
  {
    "id": 405,
    "nameEn": "Luxray",
    "nameTh": "เร็นโทรา",
    "types": [
      "electric"
    ]
  },
  {
    "id": 406,
    "nameEn": "Budew",
    "nameTh": "ซึโบมี",
    "types": [
      "grass",
      "poison"
    ]
  },
  {
    "id": 407,
    "nameEn": "Roserade",
    "nameTh": "โรสเรด",
    "types": [
      "grass",
      "poison"
    ]
  },
  {
    "id": 408,
    "nameEn": "Cranidos",
    "nameTh": "ซึไกโดส",
    "types": [
      "rock"
    ]
  },
  {
    "id": 409,
    "nameEn": "Rampardos",
    "nameTh": "แรมพาล์ด",
    "types": [
      "rock"
    ]
  },
  {
    "id": 410,
    "nameEn": "Shieldon",
    "nameTh": "ทาเทท็อปส์",
    "types": [
      "rock",
      "steel"
    ]
  },
  {
    "id": 411,
    "nameEn": "Bastiodon",
    "nameTh": "โทริเด็ปส์",
    "types": [
      "rock",
      "steel"
    ]
  },
  {
    "id": 412,
    "nameEn": "Burmy",
    "nameTh": "มิโนมุจจิ",
    "types": [
      "bug"
    ]
  },
  {
    "id": 413,
    "nameEn": "Wormadam",
    "nameTh": "มิโนมาดาม",
    "types": [
      "grass",
      "bug"
    ]
  },
  {
    "id": 414,
    "nameEn": "Mothim",
    "nameTh": "กาเมล",
    "types": [
      "flying",
      "bug"
    ]
  },
  {
    "id": 415,
    "nameEn": "Combee",
    "nameTh": "มิทซึฮันนี",
    "types": [
      "flying",
      "bug"
    ]
  },
  {
    "id": 416,
    "nameEn": "Vespiquen",
    "nameTh": "บีควิน",
    "types": [
      "flying",
      "bug"
    ]
  },
  {
    "id": 417,
    "nameEn": "Pachirisu",
    "nameTh": "พาจิริซึ",
    "types": [
      "electric"
    ]
  },
  {
    "id": 418,
    "nameEn": "Buizel",
    "nameTh": "บุยเซล",
    "types": [
      "water"
    ]
  },
  {
    "id": 419,
    "nameEn": "Floatzel",
    "nameTh": "โฟลเซล",
    "types": [
      "water"
    ]
  },
  {
    "id": 420,
    "nameEn": "Cherubi",
    "nameTh": "เชอรินโบ",
    "types": [
      "grass"
    ]
  },
  {
    "id": 421,
    "nameEn": "Cherrim",
    "nameTh": "เชอริม",
    "types": [
      "grass"
    ]
  },
  {
    "id": 422,
    "nameEn": "Shellos",
    "nameTh": "คารานะคูชิ",
    "types": [
      "water"
    ]
  },
  {
    "id": 423,
    "nameEn": "Gastrodon",
    "nameTh": "ไทรโทดอน",
    "types": [
      "water",
      "ground"
    ]
  },
  {
    "id": 424,
    "nameEn": "Ambipom",
    "nameTh": "เอเทโบธ",
    "types": [
      "normal"
    ]
  },
  {
    "id": 425,
    "nameEn": "Drifloon",
    "nameTh": "ฟูวันเต",
    "types": [
      "flying",
      "ghost"
    ]
  },
  {
    "id": 426,
    "nameEn": "Drifblim",
    "nameTh": "ฟูวาไรด์",
    "types": [
      "flying",
      "ghost"
    ]
  },
  {
    "id": 427,
    "nameEn": "Buneary",
    "nameTh": "มิมิโรล",
    "types": [
      "normal"
    ]
  },
  {
    "id": 428,
    "nameEn": "Lopunny",
    "nameTh": "มิมิล็อป",
    "types": [
      "normal"
    ]
  },
  {
    "id": 429,
    "nameEn": "Mismagius",
    "nameTh": "มูมาจิ",
    "types": [
      "ghost"
    ]
  },
  {
    "id": 430,
    "nameEn": "Honchkrow",
    "nameTh": "ดอนคาราซึ",
    "types": [
      "flying",
      "dark"
    ]
  },
  {
    "id": 431,
    "nameEn": "Glameow",
    "nameTh": "เนียรุมา",
    "types": [
      "normal"
    ]
  },
  {
    "id": 432,
    "nameEn": "Purugly",
    "nameTh": "บูเนียตโตะ",
    "types": [
      "normal"
    ]
  },
  {
    "id": 433,
    "nameEn": "Chingling",
    "nameTh": "ลีชาน",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 434,
    "nameEn": "Stunky",
    "nameTh": "สกังพู",
    "types": [
      "poison",
      "dark"
    ]
  },
  {
    "id": 435,
    "nameEn": "Skuntank",
    "nameTh": "สกาแทงค์",
    "types": [
      "poison",
      "dark"
    ]
  },
  {
    "id": 436,
    "nameEn": "Bronzor",
    "nameTh": "โดมิเรอร์",
    "types": [
      "psychic",
      "steel"
    ]
  },
  {
    "id": 437,
    "nameEn": "Bronzong",
    "nameTh": "โดทาคุน",
    "types": [
      "psychic",
      "steel"
    ]
  },
  {
    "id": 438,
    "nameEn": "Bonsly",
    "nameTh": "อุโซฮาจิ",
    "types": [
      "rock"
    ]
  },
  {
    "id": 439,
    "nameEn": "Mime Jr.",
    "nameTh": "มาเนเน",
    "types": [
      "psychic",
      "fairy"
    ]
  },
  {
    "id": 440,
    "nameEn": "Happiny",
    "nameTh": "พินพูคุ",
    "types": [
      "normal"
    ]
  },
  {
    "id": 441,
    "nameEn": "Chatot",
    "nameTh": "เพราป",
    "types": [
      "normal",
      "flying"
    ]
  },
  {
    "id": 442,
    "nameEn": "Spiritomb",
    "nameTh": "มิคารูเกะ",
    "types": [
      "ghost",
      "dark"
    ]
  },
  {
    "id": 443,
    "nameEn": "Gible",
    "nameTh": "ฟุคามารุ",
    "types": [
      "ground",
      "dragon"
    ]
  },
  {
    "id": 444,
    "nameEn": "Gabite",
    "nameTh": "กาไบต์",
    "types": [
      "ground",
      "dragon"
    ]
  },
  {
    "id": 445,
    "nameEn": "Garchomp",
    "nameTh": "กาเบรียส",
    "types": [
      "ground",
      "dragon"
    ]
  },
  {
    "id": 446,
    "nameEn": "Munchlax",
    "nameTh": "กอนเบะ",
    "types": [
      "normal"
    ]
  },
  {
    "id": 447,
    "nameEn": "Riolu",
    "nameTh": "ริโอลุ",
    "types": [
      "fighting"
    ]
  },
  {
    "id": 448,
    "nameEn": "Lucario",
    "nameTh": "ลูคาริโอ",
    "types": [
      "fighting",
      "steel"
    ]
  },
  {
    "id": 449,
    "nameEn": "Hippopotas",
    "nameTh": "ฮิปโปโปตัส",
    "types": [
      "ground"
    ]
  },
  {
    "id": 450,
    "nameEn": "Hippowdon",
    "nameTh": "คาบัลดอน",
    "types": [
      "ground"
    ]
  },
  {
    "id": 451,
    "nameEn": "Skorupi",
    "nameTh": "สกอร์ปี",
    "types": [
      "poison",
      "bug"
    ]
  },
  {
    "id": 452,
    "nameEn": "Drapion",
    "nameTh": "โดราเปียน",
    "types": [
      "poison",
      "dark"
    ]
  },
  {
    "id": 453,
    "nameEn": "Croagunk",
    "nameTh": "กูเรกกรู",
    "types": [
      "fighting",
      "poison"
    ]
  },
  {
    "id": 454,
    "nameEn": "Toxicroak",
    "nameTh": "โดคูร็อก",
    "types": [
      "fighting",
      "poison"
    ]
  },
  {
    "id": 455,
    "nameEn": "Carnivine",
    "nameTh": "มัสคิปปา",
    "types": [
      "grass"
    ]
  },
  {
    "id": 456,
    "nameEn": "Finneon",
    "nameTh": "เคโคโอ",
    "types": [
      "water"
    ]
  },
  {
    "id": 457,
    "nameEn": "Lumineon",
    "nameTh": "เนโอแลนท์",
    "types": [
      "water"
    ]
  },
  {
    "id": 458,
    "nameEn": "Mantyke",
    "nameTh": "ทาแมนทา",
    "types": [
      "water",
      "flying"
    ]
  },
  {
    "id": 459,
    "nameEn": "Snover",
    "nameTh": "ยูกิคาบูริ",
    "types": [
      "grass",
      "ice"
    ]
  },
  {
    "id": 460,
    "nameEn": "Abomasnow",
    "nameTh": "ยูกิโน",
    "types": [
      "grass",
      "ice"
    ]
  },
  {
    "id": 461,
    "nameEn": "Weavile",
    "nameTh": "มานิวลา",
    "types": [
      "ice",
      "dark"
    ]
  },
  {
    "id": 462,
    "nameEn": "Magnezone",
    "nameTh": "จิบะคอยล์",
    "types": [
      "electric",
      "steel"
    ]
  },
  {
    "id": 463,
    "nameEn": "Lickilicky",
    "nameTh": "เบโรเบลท์",
    "types": [
      "normal"
    ]
  },
  {
    "id": 464,
    "nameEn": "Rhyperior",
    "nameTh": "โดไซดอน",
    "types": [
      "ground",
      "rock"
    ]
  },
  {
    "id": 465,
    "nameEn": "Tangrowth",
    "nameTh": "โมจัมโบ",
    "types": [
      "grass"
    ]
  },
  {
    "id": 466,
    "nameEn": "Electivire",
    "nameTh": "เอเลคิเบิล",
    "types": [
      "electric"
    ]
  },
  {
    "id": 467,
    "nameEn": "Magmortar",
    "nameTh": "บูเบิร์น",
    "types": [
      "fire"
    ]
  },
  {
    "id": 468,
    "nameEn": "Togekiss",
    "nameTh": "โทเกคิส",
    "types": [
      "flying",
      "fairy"
    ]
  },
  {
    "id": 469,
    "nameEn": "Yanmega",
    "nameTh": "เมกกะยันมะ",
    "types": [
      "flying",
      "bug"
    ]
  },
  {
    "id": 470,
    "nameEn": "Leafeon",
    "nameTh": "ลีเฟีย",
    "types": [
      "grass"
    ]
  },
  {
    "id": 471,
    "nameEn": "Glaceon",
    "nameTh": "กราเซีย",
    "types": [
      "ice"
    ]
  },
  {
    "id": 472,
    "nameEn": "Gliscor",
    "nameTh": "ไกลออน",
    "types": [
      "ground",
      "flying"
    ]
  },
  {
    "id": 473,
    "nameEn": "Mamoswine",
    "nameTh": "แมมมู",
    "types": [
      "ice",
      "ground"
    ]
  },
  {
    "id": 474,
    "nameEn": "Porygon-Z",
    "nameTh": "โพรีกอน-แซด",
    "types": [
      "normal"
    ]
  },
  {
    "id": 475,
    "nameEn": "Gallade",
    "nameTh": "เอรูเรโด",
    "types": [
      "fighting",
      "psychic"
    ]
  },
  {
    "id": 476,
    "nameEn": "Probopass",
    "nameTh": "ไดโนซ",
    "types": [
      "rock",
      "steel"
    ]
  },
  {
    "id": 477,
    "nameEn": "Dusknoir",
    "nameTh": "โยนัว",
    "types": [
      "ghost"
    ]
  },
  {
    "id": 478,
    "nameEn": "Froslass",
    "nameTh": "ยูกิเมโนโกะ",
    "types": [
      "ice",
      "ghost"
    ]
  },
  {
    "id": 479,
    "nameEn": "Rotom",
    "nameTh": "โรตอม",
    "types": [
      "electric",
      "ghost"
    ]
  },
  {
    "id": 480,
    "nameEn": "Uxie",
    "nameTh": "ยุคซี",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 481,
    "nameEn": "Mesprit",
    "nameTh": "เอ็มริต",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 482,
    "nameEn": "Azelf",
    "nameTh": "อักนอม",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 483,
    "nameEn": "Dialga",
    "nameTh": "ดีอัลกา",
    "types": [
      "dragon",
      "steel"
    ]
  },
  {
    "id": 484,
    "nameEn": "Palkia",
    "nameTh": "พัลเกีย",
    "types": [
      "water",
      "dragon"
    ]
  },
  {
    "id": 485,
    "nameEn": "Heatran",
    "nameTh": "ฮีดราน",
    "types": [
      "fire",
      "steel"
    ]
  },
  {
    "id": 486,
    "nameEn": "Regigigas",
    "nameTh": "เรจิกิกัส",
    "types": [
      "normal"
    ]
  },
  {
    "id": 487,
    "nameEn": "Giratina",
    "nameTh": "กิราตินา",
    "types": [
      "ghost",
      "dragon"
    ]
  },
  {
    "id": 488,
    "nameEn": "Cresselia",
    "nameTh": "เครเซเลีย",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 489,
    "nameEn": "Phione",
    "nameTh": "ฟีโอเน",
    "types": [
      "water"
    ]
  },
  {
    "id": 490,
    "nameEn": "Manaphy",
    "nameTh": "มานาฟี",
    "types": [
      "water"
    ]
  },
  {
    "id": 491,
    "nameEn": "Darkrai",
    "nameTh": "ดาร์กไร",
    "types": [
      "dark"
    ]
  },
  {
    "id": 492,
    "nameEn": "Shaymin",
    "nameTh": "เชมิน",
    "types": [
      "grass"
    ]
  },
  {
    "id": 493,
    "nameEn": "Arceus",
    "nameTh": "อาร์เซอุส",
    "types": [
      "normal"
    ]
  },
  {
    "id": 494,
    "nameEn": "Victini",
    "nameTh": "วิคทินี",
    "types": [
      "fire",
      "psychic"
    ]
  },
  {
    "id": 495,
    "nameEn": "Snivy",
    "nameTh": "ซึทาจะ",
    "types": [
      "grass"
    ]
  },
  {
    "id": 496,
    "nameEn": "Servine",
    "nameTh": "จาโนวี",
    "types": [
      "grass"
    ]
  },
  {
    "id": 497,
    "nameEn": "Serperior",
    "nameTh": "จาโลดา",
    "types": [
      "grass"
    ]
  },
  {
    "id": 498,
    "nameEn": "Tepig",
    "nameTh": "โพคาบู",
    "types": [
      "fire"
    ]
  },
  {
    "id": 499,
    "nameEn": "Pignite",
    "nameTh": "จาโอบู",
    "types": [
      "fire",
      "fighting"
    ]
  },
  {
    "id": 500,
    "nameEn": "Emboar",
    "nameTh": "เอ็นบูโอ",
    "types": [
      "fire",
      "fighting"
    ]
  },
  {
    "id": 501,
    "nameEn": "Oshawott",
    "nameTh": "มิจูมารุ",
    "types": [
      "water"
    ]
  },
  {
    "id": 502,
    "nameEn": "Dewott",
    "nameTh": "ฟุตาจิมารุ",
    "types": [
      "water"
    ]
  },
  {
    "id": 503,
    "nameEn": "Samurott",
    "nameTh": "ไดเคนคิ",
    "types": [
      "water"
    ]
  },
  {
    "id": 504,
    "nameEn": "Patrat",
    "nameTh": "มิเนซูมิ",
    "types": [
      "normal"
    ]
  },
  {
    "id": 505,
    "nameEn": "Watchog",
    "nameTh": "มิรูฮอก",
    "types": [
      "normal"
    ]
  },
  {
    "id": 506,
    "nameEn": "Lillipup",
    "nameTh": "โยเทอรี",
    "types": [
      "normal"
    ]
  },
  {
    "id": 507,
    "nameEn": "Herdier",
    "nameTh": "เฮอเดอเรีย",
    "types": [
      "normal"
    ]
  },
  {
    "id": 508,
    "nameEn": "Stoutland",
    "nameTh": "มูแลนด์",
    "types": [
      "normal"
    ]
  },
  {
    "id": 509,
    "nameEn": "Purrloin",
    "nameTh": "โจโรเนโกะ",
    "types": [
      "dark"
    ]
  },
  {
    "id": 510,
    "nameEn": "Liepard",
    "nameTh": "เลพัลดัส",
    "types": [
      "dark"
    ]
  },
  {
    "id": 511,
    "nameEn": "Pansage",
    "nameTh": "ยานัปปุ",
    "types": [
      "grass"
    ]
  },
  {
    "id": 512,
    "nameEn": "Simisage",
    "nameTh": "ยานักกี",
    "types": [
      "grass"
    ]
  },
  {
    "id": 513,
    "nameEn": "Pansear",
    "nameTh": "บาอปปุ",
    "types": [
      "fire"
    ]
  },
  {
    "id": 514,
    "nameEn": "Simisear",
    "nameTh": "บาอกกี",
    "types": [
      "fire"
    ]
  },
  {
    "id": 515,
    "nameEn": "Panpour",
    "nameTh": "ฮิยัปปุ",
    "types": [
      "water"
    ]
  },
  {
    "id": 516,
    "nameEn": "Simipour",
    "nameTh": "ฮิยักกี",
    "types": [
      "water"
    ]
  },
  {
    "id": 517,
    "nameEn": "Munna",
    "nameTh": "มุนนะ",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 518,
    "nameEn": "Musharna",
    "nameTh": "มุชานา",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 519,
    "nameEn": "Pidove",
    "nameTh": "มาเมพาโตะ",
    "types": [
      "normal",
      "flying"
    ]
  },
  {
    "id": 520,
    "nameEn": "Tranquill",
    "nameTh": "ฮาโทโบ",
    "types": [
      "normal",
      "flying"
    ]
  },
  {
    "id": 521,
    "nameEn": "Unfezant",
    "nameTh": "เคนโฮโล",
    "types": [
      "normal",
      "flying"
    ]
  },
  {
    "id": 522,
    "nameEn": "Blitzle",
    "nameTh": "ชิมามา",
    "types": [
      "electric"
    ]
  },
  {
    "id": 523,
    "nameEn": "Zebstrika",
    "nameTh": "ซีบรายกา",
    "types": [
      "electric"
    ]
  },
  {
    "id": 524,
    "nameEn": "Roggenrola",
    "nameTh": "ดันโกโร",
    "types": [
      "rock"
    ]
  },
  {
    "id": 525,
    "nameEn": "Boldore",
    "nameTh": "กันเทิล",
    "types": [
      "rock"
    ]
  },
  {
    "id": 526,
    "nameEn": "Gigalith",
    "nameTh": "กิไกอาซ",
    "types": [
      "rock"
    ]
  },
  {
    "id": 527,
    "nameEn": "Woobat",
    "nameTh": "โคโรโมริ",
    "types": [
      "flying",
      "psychic"
    ]
  },
  {
    "id": 528,
    "nameEn": "Swoobat",
    "nameTh": "โคโคโรโมริ",
    "types": [
      "flying",
      "psychic"
    ]
  },
  {
    "id": 529,
    "nameEn": "Drilbur",
    "nameTh": "โมกุริว",
    "types": [
      "ground"
    ]
  },
  {
    "id": 530,
    "nameEn": "Excadrill",
    "nameTh": "โดริวซึ",
    "types": [
      "ground",
      "steel"
    ]
  },
  {
    "id": 531,
    "nameEn": "Audino",
    "nameTh": "ทาบุนเนะ",
    "types": [
      "normal"
    ]
  },
  {
    "id": 532,
    "nameEn": "Timburr",
    "nameTh": "ด็อคโคเรอร์",
    "types": [
      "fighting"
    ]
  },
  {
    "id": 533,
    "nameEn": "Gurdurr",
    "nameTh": "โดเท็คคทซึ",
    "types": [
      "fighting"
    ]
  },
  {
    "id": 534,
    "nameEn": "Conkeldurr",
    "nameTh": "โรบูชิน",
    "types": [
      "fighting"
    ]
  },
  {
    "id": 535,
    "nameEn": "Tympole",
    "nameTh": "โอทามาโร",
    "types": [
      "water"
    ]
  },
  {
    "id": 536,
    "nameEn": "Palpitoad",
    "nameTh": "กามาการุ",
    "types": [
      "water",
      "ground"
    ]
  },
  {
    "id": 537,
    "nameEn": "Seismitoad",
    "nameTh": "กามาเกโรเกะ",
    "types": [
      "water",
      "ground"
    ]
  },
  {
    "id": 538,
    "nameEn": "Throh",
    "nameTh": "นาเกคิ",
    "types": [
      "fighting"
    ]
  },
  {
    "id": 539,
    "nameEn": "Sawk",
    "nameTh": "ดาเกคิ",
    "types": [
      "fighting"
    ]
  },
  {
    "id": 540,
    "nameEn": "Sewaddle",
    "nameTh": "คูรูมีรุ",
    "types": [
      "grass",
      "bug"
    ]
  },
  {
    "id": 541,
    "nameEn": "Swadloon",
    "nameTh": "คูรูมายุ",
    "types": [
      "grass",
      "bug"
    ]
  },
  {
    "id": 542,
    "nameEn": "Leavanny",
    "nameTh": "ฮาฮาโคโมริ",
    "types": [
      "grass",
      "bug"
    ]
  },
  {
    "id": 543,
    "nameEn": "Venipede",
    "nameTh": "ฟูชิเดะ",
    "types": [
      "poison",
      "bug"
    ]
  },
  {
    "id": 544,
    "nameEn": "Whirlipede",
    "nameTh": "วีกา",
    "types": [
      "poison",
      "bug"
    ]
  },
  {
    "id": 545,
    "nameEn": "Scolipede",
    "nameTh": "เพนโดรา",
    "types": [
      "poison",
      "bug"
    ]
  },
  {
    "id": 546,
    "nameEn": "Cottonee",
    "nameTh": "โมนเมน",
    "types": [
      "grass",
      "fairy"
    ]
  },
  {
    "id": 547,
    "nameEn": "Whimsicott",
    "nameTh": "เอลฟุน",
    "types": [
      "grass",
      "fairy"
    ]
  },
  {
    "id": 548,
    "nameEn": "Petilil",
    "nameTh": "จูริเน",
    "types": [
      "grass"
    ]
  },
  {
    "id": 549,
    "nameEn": "Lilligant",
    "nameTh": "เดรเดีย",
    "types": [
      "grass"
    ]
  },
  {
    "id": 550,
    "nameEn": "Basculin",
    "nameTh": "บาสราโอ",
    "types": [
      "water"
    ]
  },
  {
    "id": 551,
    "nameEn": "Sandile",
    "nameTh": "เมะกุโรโกะ",
    "types": [
      "ground",
      "dark"
    ]
  },
  {
    "id": 552,
    "nameEn": "Krokorok",
    "nameTh": "วารุวิล",
    "types": [
      "ground",
      "dark"
    ]
  },
  {
    "id": 553,
    "nameEn": "Krookodile",
    "nameTh": "วารุเวียล",
    "types": [
      "ground",
      "dark"
    ]
  },
  {
    "id": 554,
    "nameEn": "Darumaka",
    "nameTh": "ดารุมักกะ",
    "types": [
      "fire"
    ]
  },
  {
    "id": 555,
    "nameEn": "Darmanitan",
    "nameTh": "ฮิฮิดารุมะ",
    "types": [
      "fire"
    ]
  },
  {
    "id": 556,
    "nameEn": "Maractus",
    "nameTh": "มาราคัจจิ",
    "types": [
      "grass"
    ]
  },
  {
    "id": 557,
    "nameEn": "Dwebble",
    "nameTh": "อิชิซึไม",
    "types": [
      "bug",
      "rock"
    ]
  },
  {
    "id": 558,
    "nameEn": "Crustle",
    "nameTh": "อิวาพาเลซ",
    "types": [
      "bug",
      "rock"
    ]
  },
  {
    "id": 559,
    "nameEn": "Scraggy",
    "nameTh": "ซึรุกกุ",
    "types": [
      "fighting",
      "dark"
    ]
  },
  {
    "id": 560,
    "nameEn": "Scrafty",
    "nameTh": "ซึรุซึคิน",
    "types": [
      "fighting",
      "dark"
    ]
  },
  {
    "id": 561,
    "nameEn": "Sigilyph",
    "nameTh": "ซิมโบลา",
    "types": [
      "flying",
      "psychic"
    ]
  },
  {
    "id": 562,
    "nameEn": "Yamask",
    "nameTh": "เดซึมาซึ",
    "types": [
      "ghost"
    ]
  },
  {
    "id": 563,
    "nameEn": "Cofagrigus",
    "nameTh": "เดซึคาน",
    "types": [
      "ghost"
    ]
  },
  {
    "id": 564,
    "nameEn": "Tirtouga",
    "nameTh": "โปรโตกา",
    "types": [
      "water",
      "rock"
    ]
  },
  {
    "id": 565,
    "nameEn": "Carracosta",
    "nameTh": "อบาโกรา",
    "types": [
      "water",
      "rock"
    ]
  },
  {
    "id": 566,
    "nameEn": "Archen",
    "nameTh": "อาเคน",
    "types": [
      "flying",
      "rock"
    ]
  },
  {
    "id": 567,
    "nameEn": "Archeops",
    "nameTh": "อาเคโอส",
    "types": [
      "flying",
      "rock"
    ]
  },
  {
    "id": 568,
    "nameEn": "Trubbish",
    "nameTh": "ยาบุคุรอน",
    "types": [
      "poison"
    ]
  },
  {
    "id": 569,
    "nameEn": "Garbodor",
    "nameTh": "ดัสต์ดาส",
    "types": [
      "poison"
    ]
  },
  {
    "id": 570,
    "nameEn": "Zorua",
    "nameTh": "โซรัว",
    "types": [
      "dark"
    ]
  },
  {
    "id": 571,
    "nameEn": "Zoroark",
    "nameTh": "โซโรอาร์ค",
    "types": [
      "dark"
    ]
  },
  {
    "id": 572,
    "nameEn": "Minccino",
    "nameTh": "จิลามี",
    "types": [
      "normal"
    ]
  },
  {
    "id": 573,
    "nameEn": "Cinccino",
    "nameTh": "จิลัคจิโน",
    "types": [
      "normal"
    ]
  },
  {
    "id": 574,
    "nameEn": "Gothita",
    "nameTh": "โกธิมู",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 575,
    "nameEn": "Gothorita",
    "nameTh": "โกธิมิรุ",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 576,
    "nameEn": "Gothitelle",
    "nameTh": "โกธิรูเซล",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 577,
    "nameEn": "Solosis",
    "nameTh": "ยูนิรัน",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 578,
    "nameEn": "Duosion",
    "nameTh": "ดาบูลัน",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 579,
    "nameEn": "Reuniclus",
    "nameTh": "แลนคูลัส",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 580,
    "nameEn": "Ducklett",
    "nameTh": "โคอารูฮิ",
    "types": [
      "water",
      "flying"
    ]
  },
  {
    "id": 581,
    "nameEn": "Swanna",
    "nameTh": "สวอนนา",
    "types": [
      "water",
      "flying"
    ]
  },
  {
    "id": 582,
    "nameEn": "Vanillite",
    "nameTh": "วานิเพ็ตติ",
    "types": [
      "ice"
    ]
  },
  {
    "id": 583,
    "nameEn": "Vanillish",
    "nameTh": "วานิริช",
    "types": [
      "ice"
    ]
  },
  {
    "id": 584,
    "nameEn": "Vanilluxe",
    "nameTh": "ไบวานิลลา",
    "types": [
      "ice"
    ]
  },
  {
    "id": 585,
    "nameEn": "Deerling",
    "nameTh": "ชิคิจิกะ",
    "types": [
      "normal",
      "grass"
    ]
  },
  {
    "id": 586,
    "nameEn": "Sawsbuck",
    "nameTh": "เมบูคิจิกะ",
    "types": [
      "normal",
      "grass"
    ]
  },
  {
    "id": 587,
    "nameEn": "Emolga",
    "nameTh": "เอมอนกา",
    "types": [
      "electric",
      "flying"
    ]
  },
  {
    "id": 588,
    "nameEn": "Karrablast",
    "nameTh": "คาบูรูโมะ",
    "types": [
      "bug"
    ]
  },
  {
    "id": 589,
    "nameEn": "Escavalier",
    "nameTh": "ชูวัลโก",
    "types": [
      "bug",
      "steel"
    ]
  },
  {
    "id": 590,
    "nameEn": "Foongus",
    "nameTh": "ทามาเกะทาเคะ",
    "types": [
      "grass",
      "poison"
    ]
  },
  {
    "id": 591,
    "nameEn": "Amoonguss",
    "nameTh": "โมโรบาเรรุ",
    "types": [
      "grass",
      "poison"
    ]
  },
  {
    "id": 592,
    "nameEn": "Frillish",
    "nameTh": "พูรูริล",
    "types": [
      "water",
      "ghost"
    ]
  },
  {
    "id": 593,
    "nameEn": "Jellicent",
    "nameTh": "บูรุนเจล",
    "types": [
      "water",
      "ghost"
    ]
  },
  {
    "id": 594,
    "nameEn": "Alomomola",
    "nameTh": "มามันโบ",
    "types": [
      "water"
    ]
  },
  {
    "id": 595,
    "nameEn": "Joltik",
    "nameTh": "บาชูรุ",
    "types": [
      "electric",
      "bug"
    ]
  },
  {
    "id": 596,
    "nameEn": "Galvantula",
    "nameTh": "เดนทูลา",
    "types": [
      "electric",
      "bug"
    ]
  },
  {
    "id": 597,
    "nameEn": "Ferroseed",
    "nameTh": "เทสซีด",
    "types": [
      "grass",
      "steel"
    ]
  },
  {
    "id": 598,
    "nameEn": "Ferrothorn",
    "nameTh": "นัทเทรย์",
    "types": [
      "grass",
      "steel"
    ]
  },
  {
    "id": 599,
    "nameEn": "Klink",
    "nameTh": "เกียร์",
    "types": [
      "steel"
    ]
  },
  {
    "id": 600,
    "nameEn": "Klang",
    "nameTh": "กิเกียร์",
    "types": [
      "steel"
    ]
  },
  {
    "id": 601,
    "nameEn": "Klinklang",
    "nameTh": "กิกิเกียร์",
    "types": [
      "steel"
    ]
  },
  {
    "id": 602,
    "nameEn": "Tynamo",
    "nameTh": "ชิบิชิราซึ",
    "types": [
      "electric"
    ]
  },
  {
    "id": 603,
    "nameEn": "Eelektrik",
    "nameTh": "ชิบิบีล",
    "types": [
      "electric"
    ]
  },
  {
    "id": 604,
    "nameEn": "Eelektross",
    "nameTh": "ชิบิรูดอน",
    "types": [
      "electric"
    ]
  },
  {
    "id": 605,
    "nameEn": "Elgyem",
    "nameTh": "ลีเกรย์",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 606,
    "nameEn": "Beheeyem",
    "nameTh": "โอเบ็ม",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 607,
    "nameEn": "Litwick",
    "nameTh": "ฮิโตโมชิ",
    "types": [
      "fire",
      "ghost"
    ]
  },
  {
    "id": 608,
    "nameEn": "Lampent",
    "nameTh": "แลมพูลา",
    "types": [
      "fire",
      "ghost"
    ]
  },
  {
    "id": 609,
    "nameEn": "Chandelure",
    "nameTh": "แชนเดลา",
    "types": [
      "fire",
      "ghost"
    ]
  },
  {
    "id": 610,
    "nameEn": "Axew",
    "nameTh": "คิบาโกะ",
    "types": [
      "dragon"
    ]
  },
  {
    "id": 611,
    "nameEn": "Fraxure",
    "nameTh": "โอโนนโดะ",
    "types": [
      "dragon"
    ]
  },
  {
    "id": 612,
    "nameEn": "Haxorus",
    "nameTh": "โอโนโนคุส",
    "types": [
      "dragon"
    ]
  },
  {
    "id": 613,
    "nameEn": "Cubchoo",
    "nameTh": "คูมะชุน",
    "types": [
      "ice"
    ]
  },
  {
    "id": 614,
    "nameEn": "Beartic",
    "nameTh": "ทันแบร์",
    "types": [
      "ice"
    ]
  },
  {
    "id": 615,
    "nameEn": "Cryogonal",
    "nameTh": "ฟรีจิโอ",
    "types": [
      "ice"
    ]
  },
  {
    "id": 616,
    "nameEn": "Shelmet",
    "nameTh": "โชโบมากิ",
    "types": [
      "bug"
    ]
  },
  {
    "id": 617,
    "nameEn": "Accelgor",
    "nameTh": "อกิลดา",
    "types": [
      "bug"
    ]
  },
  {
    "id": 618,
    "nameEn": "Stunfisk",
    "nameTh": "แมกเกียว",
    "types": [
      "electric",
      "ground"
    ]
  },
  {
    "id": 619,
    "nameEn": "Mienfoo",
    "nameTh": "โคโจฟู",
    "types": [
      "fighting"
    ]
  },
  {
    "id": 620,
    "nameEn": "Mienshao",
    "nameTh": "โคโจนโดะ",
    "types": [
      "fighting"
    ]
  },
  {
    "id": 621,
    "nameEn": "Druddigon",
    "nameTh": "คริมแกน",
    "types": [
      "dragon"
    ]
  },
  {
    "id": 622,
    "nameEn": "Golett",
    "nameTh": "โกบิท",
    "types": [
      "ground",
      "ghost"
    ]
  },
  {
    "id": 623,
    "nameEn": "Golurk",
    "nameTh": "โกลูก",
    "types": [
      "ground",
      "ghost"
    ]
  },
  {
    "id": 624,
    "nameEn": "Pawniard",
    "nameTh": "โคมาทานา",
    "types": [
      "dark",
      "steel"
    ]
  },
  {
    "id": 625,
    "nameEn": "Bisharp",
    "nameTh": "คิริคิซัน",
    "types": [
      "dark",
      "steel"
    ]
  },
  {
    "id": 626,
    "nameEn": "Bouffalant",
    "nameTh": "บัฟฟรอน",
    "types": [
      "normal"
    ]
  },
  {
    "id": 627,
    "nameEn": "Rufflet",
    "nameTh": "วาชิบอน",
    "types": [
      "normal",
      "flying"
    ]
  },
  {
    "id": 628,
    "nameEn": "Braviary",
    "nameTh": "วอร์เกิล",
    "types": [
      "normal",
      "flying"
    ]
  },
  {
    "id": 629,
    "nameEn": "Vullaby",
    "nameTh": "วัลไจ",
    "types": [
      "flying",
      "dark"
    ]
  },
  {
    "id": 630,
    "nameEn": "Mandibuzz",
    "nameTh": "วัลจีนา",
    "types": [
      "flying",
      "dark"
    ]
  },
  {
    "id": 631,
    "nameEn": "Heatmor",
    "nameTh": "คุยทาแรน",
    "types": [
      "fire"
    ]
  },
  {
    "id": 632,
    "nameEn": "Durant",
    "nameTh": "ไอแอนท์",
    "types": [
      "bug",
      "steel"
    ]
  },
  {
    "id": 633,
    "nameEn": "Deino",
    "nameTh": "โมโนซึ",
    "types": [
      "dragon",
      "dark"
    ]
  },
  {
    "id": 634,
    "nameEn": "Zweilous",
    "nameTh": "จิเฮด",
    "types": [
      "dragon",
      "dark"
    ]
  },
  {
    "id": 635,
    "nameEn": "Hydreigon",
    "nameTh": "ซาซันดรา",
    "types": [
      "dragon",
      "dark"
    ]
  },
  {
    "id": 636,
    "nameEn": "Larvesta",
    "nameTh": "เมลาร์วา",
    "types": [
      "fire",
      "bug"
    ]
  },
  {
    "id": 637,
    "nameEn": "Volcarona",
    "nameTh": "อุลกามอธ",
    "types": [
      "fire",
      "bug"
    ]
  },
  {
    "id": 638,
    "nameEn": "Cobalion",
    "nameTh": "โคบัลออน",
    "types": [
      "fighting",
      "steel"
    ]
  },
  {
    "id": 639,
    "nameEn": "Terrakion",
    "nameTh": "เทราคิออน",
    "types": [
      "fighting",
      "rock"
    ]
  },
  {
    "id": 640,
    "nameEn": "Virizion",
    "nameTh": "วิริซิออน",
    "types": [
      "grass",
      "fighting"
    ]
  },
  {
    "id": 641,
    "nameEn": "Tornadus",
    "nameTh": "ทอร์เนลอส",
    "types": [
      "flying"
    ]
  },
  {
    "id": 642,
    "nameEn": "Thundurus",
    "nameTh": "โวลโทลอส",
    "types": [
      "electric",
      "flying"
    ]
  },
  {
    "id": 643,
    "nameEn": "Reshiram",
    "nameTh": "เรชิรัม",
    "types": [
      "fire",
      "dragon"
    ]
  },
  {
    "id": 644,
    "nameEn": "Zekrom",
    "nameTh": "เซครอม",
    "types": [
      "electric",
      "dragon"
    ]
  },
  {
    "id": 645,
    "nameEn": "Landorus",
    "nameTh": "แลนโดลอส",
    "types": [
      "ground",
      "flying"
    ]
  },
  {
    "id": 646,
    "nameEn": "Kyurem",
    "nameTh": "คิวเรม",
    "types": [
      "ice",
      "dragon"
    ]
  },
  {
    "id": 647,
    "nameEn": "Keldeo",
    "nameTh": "เคลดิโอ",
    "types": [
      "water",
      "fighting"
    ]
  },
  {
    "id": 648,
    "nameEn": "Meloetta",
    "nameTh": "เมโลเอตตา",
    "types": [
      "normal",
      "psychic"
    ]
  },
  {
    "id": 649,
    "nameEn": "Genesect",
    "nameTh": "เกโนเซ็กท์",
    "types": [
      "bug",
      "steel"
    ]
  },
  {
    "id": 650,
    "nameEn": "Chespin",
    "nameTh": "ฮาริมารอน",
    "types": [
      "grass"
    ]
  },
  {
    "id": 651,
    "nameEn": "Quilladin",
    "nameTh": "ฮาริบอร์ก",
    "types": [
      "grass"
    ]
  },
  {
    "id": 652,
    "nameEn": "Chesnaught",
    "nameTh": "บริการอน",
    "types": [
      "grass",
      "fighting"
    ]
  },
  {
    "id": 653,
    "nameEn": "Fennekin",
    "nameTh": "ฟ็อกโกะ",
    "types": [
      "fire"
    ]
  },
  {
    "id": 654,
    "nameEn": "Braixen",
    "nameTh": "ไทเรนาร์",
    "types": [
      "fire"
    ]
  },
  {
    "id": 655,
    "nameEn": "Delphox",
    "nameTh": "มาโฮคซี",
    "types": [
      "fire",
      "psychic"
    ]
  },
  {
    "id": 656,
    "nameEn": "Froakie",
    "nameTh": "เคโรมัตซึ",
    "types": [
      "water"
    ]
  },
  {
    "id": 657,
    "nameEn": "Frogadier",
    "nameTh": "เกโคกาชิระ",
    "types": [
      "water"
    ]
  },
  {
    "id": 658,
    "nameEn": "Greninja",
    "nameTh": "เก็คโคกะ",
    "types": [
      "water",
      "dark"
    ]
  },
  {
    "id": 659,
    "nameEn": "Bunnelby",
    "nameTh": "โฮรุบี",
    "types": [
      "normal"
    ]
  },
  {
    "id": 660,
    "nameEn": "Diggersby",
    "nameTh": "โฮรุโด",
    "types": [
      "normal",
      "ground"
    ]
  },
  {
    "id": 661,
    "nameEn": "Fletchling",
    "nameTh": "ยายาโคมะ",
    "types": [
      "normal",
      "flying"
    ]
  },
  {
    "id": 662,
    "nameEn": "Fletchinder",
    "nameTh": "ฮิโนยาโคมะ",
    "types": [
      "fire",
      "flying"
    ]
  },
  {
    "id": 663,
    "nameEn": "Talonflame",
    "nameTh": "ไฟร์แอโรว์",
    "types": [
      "fire",
      "flying"
    ]
  },
  {
    "id": 664,
    "nameEn": "Scatterbug",
    "nameTh": "โคฟูคิมูชิ",
    "types": [
      "bug"
    ]
  },
  {
    "id": 665,
    "nameEn": "Spewpa",
    "nameTh": "โคฟูไร",
    "types": [
      "bug"
    ]
  },
  {
    "id": 666,
    "nameEn": "Vivillon",
    "nameTh": "วิวิญอง",
    "types": [
      "flying",
      "bug"
    ]
  },
  {
    "id": 667,
    "nameEn": "Litleo",
    "nameTh": "ชิชิโกะ",
    "types": [
      "normal",
      "fire"
    ]
  },
  {
    "id": 668,
    "nameEn": "Pyroar",
    "nameTh": "คาเอ็นจิชิ",
    "types": [
      "normal",
      "fire"
    ]
  },
  {
    "id": 669,
    "nameEn": "Flabébé",
    "nameTh": "ฟลาเบเบ",
    "types": [
      "fairy"
    ]
  },
  {
    "id": 670,
    "nameEn": "Floette",
    "nameTh": "ฟลาเอตเต",
    "types": [
      "fairy"
    ]
  },
  {
    "id": 671,
    "nameEn": "Florges",
    "nameTh": "ฟลาเจส",
    "types": [
      "fairy"
    ]
  },
  {
    "id": 672,
    "nameEn": "Skiddo",
    "nameTh": "เมเคิล",
    "types": [
      "grass"
    ]
  },
  {
    "id": 673,
    "nameEn": "Gogoat",
    "nameTh": "โกโกท",
    "types": [
      "grass"
    ]
  },
  {
    "id": 674,
    "nameEn": "Pancham",
    "nameTh": "ยันชัม",
    "types": [
      "fighting"
    ]
  },
  {
    "id": 675,
    "nameEn": "Pangoro",
    "nameTh": "โกรอนดะ",
    "types": [
      "fighting",
      "dark"
    ]
  },
  {
    "id": 676,
    "nameEn": "Furfrou",
    "nameTh": "ทริมเมียน",
    "types": [
      "normal"
    ]
  },
  {
    "id": 677,
    "nameEn": "Espurr",
    "nameTh": "เนียสเปอร์",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 678,
    "nameEn": "Meowstic",
    "nameTh": "เนียโอนิกซ์",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 679,
    "nameEn": "Honedge",
    "nameTh": "ฮิโตทซึกิ",
    "types": [
      "ghost",
      "steel"
    ]
  },
  {
    "id": 680,
    "nameEn": "Doublade",
    "nameTh": "นิดังกิล",
    "types": [
      "ghost",
      "steel"
    ]
  },
  {
    "id": 681,
    "nameEn": "Aegislash",
    "nameTh": "กิลการ์ด",
    "types": [
      "ghost",
      "steel"
    ]
  },
  {
    "id": 682,
    "nameEn": "Spritzee",
    "nameTh": "ชูชูป",
    "types": [
      "fairy"
    ]
  },
  {
    "id": 683,
    "nameEn": "Aromatisse",
    "nameTh": "เฟรฟุวัน",
    "types": [
      "fairy"
    ]
  },
  {
    "id": 684,
    "nameEn": "Swirlix",
    "nameTh": "เพร็อพพัฟ",
    "types": [
      "fairy"
    ]
  },
  {
    "id": 685,
    "nameEn": "Slurpuff",
    "nameTh": "เพโรรีม",
    "types": [
      "fairy"
    ]
  },
  {
    "id": 686,
    "nameEn": "Inkay",
    "nameTh": "มาอีกะ",
    "types": [
      "psychic",
      "dark"
    ]
  },
  {
    "id": 687,
    "nameEn": "Malamar",
    "nameTh": "คาลามาเนโร",
    "types": [
      "psychic",
      "dark"
    ]
  },
  {
    "id": 688,
    "nameEn": "Binacle",
    "nameTh": "คาเมเทเทะ",
    "types": [
      "water",
      "rock"
    ]
  },
  {
    "id": 689,
    "nameEn": "Barbaracle",
    "nameTh": "กาเมโนเดส",
    "types": [
      "water",
      "rock"
    ]
  },
  {
    "id": 690,
    "nameEn": "Skrelp",
    "nameTh": "คูซูโม",
    "types": [
      "water",
      "poison"
    ]
  },
  {
    "id": 691,
    "nameEn": "Dragalge",
    "nameTh": "ดรามิโดโร",
    "types": [
      "poison",
      "dragon"
    ]
  },
  {
    "id": 692,
    "nameEn": "Clauncher",
    "nameTh": "อุเด็ปโป",
    "types": [
      "water"
    ]
  },
  {
    "id": 693,
    "nameEn": "Clawitzer",
    "nameTh": "บลอสเตอร์",
    "types": [
      "water"
    ]
  },
  {
    "id": 694,
    "nameEn": "Helioptile",
    "nameTh": "เอลิคิเทล",
    "types": [
      "normal",
      "electric"
    ]
  },
  {
    "id": 695,
    "nameEn": "Heliolisk",
    "nameTh": "เอเลซาร์ด",
    "types": [
      "normal",
      "electric"
    ]
  },
  {
    "id": 696,
    "nameEn": "Tyrunt",
    "nameTh": "จิโกรัส",
    "types": [
      "rock",
      "dragon"
    ]
  },
  {
    "id": 697,
    "nameEn": "Tyrantrum",
    "nameTh": "กาจิโกรัส",
    "types": [
      "rock",
      "dragon"
    ]
  },
  {
    "id": 698,
    "nameEn": "Amaura",
    "nameTh": "อมารุส",
    "types": [
      "ice",
      "rock"
    ]
  },
  {
    "id": 699,
    "nameEn": "Aurorus",
    "nameTh": "อมารูรูกา",
    "types": [
      "ice",
      "rock"
    ]
  },
  {
    "id": 700,
    "nameEn": "Sylveon",
    "nameTh": "นิมเฟีย",
    "types": [
      "fairy"
    ]
  },
  {
    "id": 701,
    "nameEn": "Hawlucha",
    "nameTh": "ลูจาบูล",
    "types": [
      "fighting",
      "flying"
    ]
  },
  {
    "id": 702,
    "nameEn": "Dedenne",
    "nameTh": "เดเด็นเนะ",
    "types": [
      "electric",
      "fairy"
    ]
  },
  {
    "id": 703,
    "nameEn": "Carbink",
    "nameTh": "เมเลซี",
    "types": [
      "rock",
      "fairy"
    ]
  },
  {
    "id": 704,
    "nameEn": "Goomy",
    "nameTh": "นูเมรา",
    "types": [
      "dragon"
    ]
  },
  {
    "id": 705,
    "nameEn": "Sliggoo",
    "nameTh": "นูเมล",
    "types": [
      "dragon"
    ]
  },
  {
    "id": 706,
    "nameEn": "Goodra",
    "nameTh": "นูเมลกอน",
    "types": [
      "dragon"
    ]
  },
  {
    "id": 707,
    "nameEn": "Klefki",
    "nameTh": "เคลฟฟี",
    "types": [
      "steel",
      "fairy"
    ]
  },
  {
    "id": 708,
    "nameEn": "Phantump",
    "nameTh": "โบคุเร",
    "types": [
      "grass",
      "ghost"
    ]
  },
  {
    "id": 709,
    "nameEn": "Trevenant",
    "nameTh": "โอร็อต",
    "types": [
      "grass",
      "ghost"
    ]
  },
  {
    "id": 710,
    "nameEn": "Pumpkaboo",
    "nameTh": "บาเค็จจะ",
    "types": [
      "grass",
      "ghost"
    ]
  },
  {
    "id": 711,
    "nameEn": "Gourgeist",
    "nameTh": "พัมพ์จิน",
    "types": [
      "grass",
      "ghost"
    ]
  },
  {
    "id": 712,
    "nameEn": "Bergmite",
    "nameTh": "คาจิคอล",
    "types": [
      "ice"
    ]
  },
  {
    "id": 713,
    "nameEn": "Avalugg",
    "nameTh": "เครเบส",
    "types": [
      "ice"
    ]
  },
  {
    "id": 714,
    "nameEn": "Noibat",
    "nameTh": "ออนแบท",
    "types": [
      "flying",
      "dragon"
    ]
  },
  {
    "id": 715,
    "nameEn": "Noivern",
    "nameTh": "ออนเวิร์น",
    "types": [
      "flying",
      "dragon"
    ]
  },
  {
    "id": 716,
    "nameEn": "Xerneas",
    "nameTh": "เซอเนียส",
    "types": [
      "fairy"
    ]
  },
  {
    "id": 717,
    "nameEn": "Yveltal",
    "nameTh": "อีเวลทอล",
    "types": [
      "flying",
      "dark"
    ]
  },
  {
    "id": 718,
    "nameEn": "Zygarde",
    "nameTh": "ซีการ์ด",
    "types": [
      "ground",
      "dragon"
    ]
  },
  {
    "id": 719,
    "nameEn": "Diancie",
    "nameTh": "ดีแอนซี",
    "types": [
      "rock",
      "fairy"
    ]
  },
  {
    "id": 720,
    "nameEn": "Hoopa",
    "nameTh": "ฮูปา",
    "types": [
      "psychic",
      "ghost"
    ]
  },
  {
    "id": 721,
    "nameEn": "Volcanion",
    "nameTh": "โวลเคเนียน",
    "types": [
      "fire",
      "water"
    ]
  },
  {
    "id": 722,
    "nameEn": "Rowlet",
    "nameTh": "โมคุโร",
    "types": [
      "grass",
      "flying"
    ]
  },
  {
    "id": 723,
    "nameEn": "Dartrix",
    "nameTh": "ฟุคุซึโร",
    "types": [
      "grass",
      "flying"
    ]
  },
  {
    "id": 724,
    "nameEn": "Decidueye",
    "nameTh": "จูไนเปอร์",
    "types": [
      "grass",
      "ghost"
    ]
  },
  {
    "id": 725,
    "nameEn": "Litten",
    "nameTh": "เนียบี",
    "types": [
      "fire"
    ]
  },
  {
    "id": 726,
    "nameEn": "Torracat",
    "nameTh": "เนียฮีท",
    "types": [
      "fire"
    ]
  },
  {
    "id": 727,
    "nameEn": "Incineroar",
    "nameTh": "กาโอกาเอ็น",
    "types": [
      "fire",
      "dark"
    ]
  },
  {
    "id": 728,
    "nameEn": "Popplio",
    "nameTh": "อชิมาริ",
    "types": [
      "water"
    ]
  },
  {
    "id": 729,
    "nameEn": "Brionne",
    "nameTh": "โอชามาริ",
    "types": [
      "water"
    ]
  },
  {
    "id": 730,
    "nameEn": "Primarina",
    "nameTh": "อชิเรเน",
    "types": [
      "water",
      "fairy"
    ]
  },
  {
    "id": 731,
    "nameEn": "Pikipek",
    "nameTh": "ชึชึเคระ",
    "types": [
      "normal",
      "flying"
    ]
  },
  {
    "id": 732,
    "nameEn": "Trumbeak",
    "nameTh": "เครารัปปา",
    "types": [
      "normal",
      "flying"
    ]
  },
  {
    "id": 733,
    "nameEn": "Toucannon",
    "nameTh": "โดเดคาบาชิ",
    "types": [
      "normal",
      "flying"
    ]
  },
  {
    "id": 734,
    "nameEn": "Yungoos",
    "nameTh": "ยังกูส",
    "types": [
      "normal"
    ]
  },
  {
    "id": 735,
    "nameEn": "Gumshoos",
    "nameTh": "เดคากูส",
    "types": [
      "normal"
    ]
  },
  {
    "id": 736,
    "nameEn": "Grubbin",
    "nameTh": "อโกจิมูชิ",
    "types": [
      "bug"
    ]
  },
  {
    "id": 737,
    "nameEn": "Charjabug",
    "nameTh": "เด็นจิมูชิ",
    "types": [
      "electric",
      "bug"
    ]
  },
  {
    "id": 738,
    "nameEn": "Vikavolt",
    "nameTh": "คุวากานอน",
    "types": [
      "electric",
      "bug"
    ]
  },
  {
    "id": 739,
    "nameEn": "Crabrawler",
    "nameTh": "มาเค็นคานิ",
    "types": [
      "fighting"
    ]
  },
  {
    "id": 740,
    "nameEn": "Crabominable",
    "nameTh": "เคเค็นคานิ",
    "types": [
      "ice",
      "fighting"
    ]
  },
  {
    "id": 741,
    "nameEn": "Oricorio",
    "nameTh": "โอโดริโดริ",
    "types": [
      "fire",
      "flying"
    ]
  },
  {
    "id": 742,
    "nameEn": "Cutiefly",
    "nameTh": "อบูรี",
    "types": [
      "bug",
      "fairy"
    ]
  },
  {
    "id": 743,
    "nameEn": "Ribombee",
    "nameTh": "อบูริบง",
    "types": [
      "bug",
      "fairy"
    ]
  },
  {
    "id": 744,
    "nameEn": "Rockruff",
    "nameTh": "อิวังโค",
    "types": [
      "rock"
    ]
  },
  {
    "id": 745,
    "nameEn": "Lycanroc",
    "nameTh": "ลูกาลูกัน",
    "types": [
      "rock"
    ]
  },
  {
    "id": 746,
    "nameEn": "Wishiwashi",
    "nameTh": "โยวาชิ",
    "types": [
      "water"
    ]
  },
  {
    "id": 747,
    "nameEn": "Mareanie",
    "nameTh": "ฮิโดอิเดะ",
    "types": [
      "water",
      "poison"
    ]
  },
  {
    "id": 748,
    "nameEn": "Toxapex",
    "nameTh": "โดฮิโดอิเดะ",
    "types": [
      "water",
      "poison"
    ]
  },
  {
    "id": 749,
    "nameEn": "Mudbray",
    "nameTh": "โดโรบังโค",
    "types": [
      "ground"
    ]
  },
  {
    "id": 750,
    "nameEn": "Mudsdale",
    "nameTh": "บัมบะโดโร",
    "types": [
      "ground"
    ]
  },
  {
    "id": 751,
    "nameEn": "Dewpider",
    "nameTh": "ชิซึคุโม",
    "types": [
      "water",
      "bug"
    ]
  },
  {
    "id": 752,
    "nameEn": "Araquanid",
    "nameTh": "โอนิชิซึคุโม",
    "types": [
      "water",
      "bug"
    ]
  },
  {
    "id": 753,
    "nameEn": "Fomantis",
    "nameTh": "คาริคิริ",
    "types": [
      "grass"
    ]
  },
  {
    "id": 754,
    "nameEn": "Lurantis",
    "nameTh": "รารันเทส",
    "types": [
      "grass"
    ]
  },
  {
    "id": 755,
    "nameEn": "Morelull",
    "nameTh": "เนมาชู",
    "types": [
      "grass",
      "fairy"
    ]
  },
  {
    "id": 756,
    "nameEn": "Shiinotic",
    "nameTh": "มาเชโดะ",
    "types": [
      "grass",
      "fairy"
    ]
  },
  {
    "id": 757,
    "nameEn": "Salandit",
    "nameTh": "ยาโทโมริ",
    "types": [
      "fire",
      "poison"
    ]
  },
  {
    "id": 758,
    "nameEn": "Salazzle",
    "nameTh": "เอ็นนิวท์",
    "types": [
      "fire",
      "poison"
    ]
  },
  {
    "id": 759,
    "nameEn": "Stufful",
    "nameTh": "นุยโคกุมะ",
    "types": [
      "normal",
      "fighting"
    ]
  },
  {
    "id": 760,
    "nameEn": "Bewear",
    "nameTh": "คิเทรุกุมะ",
    "types": [
      "normal",
      "fighting"
    ]
  },
  {
    "id": 761,
    "nameEn": "Bounsweet",
    "nameTh": "อมาคาจิ",
    "types": [
      "grass"
    ]
  },
  {
    "id": 762,
    "nameEn": "Steenee",
    "nameTh": "อมามาอิโกะ",
    "types": [
      "grass"
    ]
  },
  {
    "id": 763,
    "nameEn": "Tsareena",
    "nameTh": "อมาโจ",
    "types": [
      "grass"
    ]
  },
  {
    "id": 764,
    "nameEn": "Comfey",
    "nameTh": "คิววะวา",
    "types": [
      "fairy"
    ]
  },
  {
    "id": 765,
    "nameEn": "Oranguru",
    "nameTh": "ยาเรยูตัน",
    "types": [
      "normal",
      "psychic"
    ]
  },
  {
    "id": 766,
    "nameEn": "Passimian",
    "nameTh": "นาเก็ทซึเกะซารุ",
    "types": [
      "fighting"
    ]
  },
  {
    "id": 767,
    "nameEn": "Wimpod",
    "nameTh": "โคโซคูมูชิ",
    "types": [
      "water",
      "bug"
    ]
  },
  {
    "id": 768,
    "nameEn": "Golisopod",
    "nameTh": "กูโซคูมูชะ",
    "types": [
      "water",
      "bug"
    ]
  },
  {
    "id": 769,
    "nameEn": "Sandygast",
    "nameTh": "ซึนาบา",
    "types": [
      "ground",
      "ghost"
    ]
  },
  {
    "id": 770,
    "nameEn": "Palossand",
    "nameTh": "ชิโรเดซึนะ",
    "types": [
      "ground",
      "ghost"
    ]
  },
  {
    "id": 771,
    "nameEn": "Pyukumuku",
    "nameTh": "นามาโคบูชิ",
    "types": [
      "water"
    ]
  },
  {
    "id": 772,
    "nameEn": "Type: Null",
    "nameTh": "ไทป์: นูล",
    "types": [
      "normal"
    ]
  },
  {
    "id": 773,
    "nameEn": "Silvally",
    "nameTh": "ซิลวาดี",
    "types": [
      "normal"
    ]
  },
  {
    "id": 774,
    "nameEn": "Minior",
    "nameTh": "เมเทโน",
    "types": [
      "flying",
      "rock"
    ]
  },
  {
    "id": 775,
    "nameEn": "Komala",
    "nameTh": "เน็คโคอาลา",
    "types": [
      "normal"
    ]
  },
  {
    "id": 776,
    "nameEn": "Turtonator",
    "nameTh": "บาคุกาเมส",
    "types": [
      "fire",
      "dragon"
    ]
  },
  {
    "id": 777,
    "nameEn": "Togedemaru",
    "nameTh": "โทเกะเดมารุ",
    "types": [
      "electric",
      "steel"
    ]
  },
  {
    "id": 778,
    "nameEn": "Mimikyu",
    "nameTh": "มิมิคคิว",
    "types": [
      "ghost",
      "fairy"
    ]
  },
  {
    "id": 779,
    "nameEn": "Bruxish",
    "nameTh": "ฮากิกิชิริ",
    "types": [
      "water",
      "psychic"
    ]
  },
  {
    "id": 780,
    "nameEn": "Drampa",
    "nameTh": "จิจีลอน",
    "types": [
      "normal",
      "dragon"
    ]
  },
  {
    "id": 781,
    "nameEn": "Dhelmise",
    "nameTh": "ดาดาริน",
    "types": [
      "grass",
      "ghost"
    ]
  },
  {
    "id": 782,
    "nameEn": "Jangmo-o",
    "nameTh": "จาราโค",
    "types": [
      "dragon"
    ]
  },
  {
    "id": 783,
    "nameEn": "Hakamo-o",
    "nameTh": "จารังโก",
    "types": [
      "fighting",
      "dragon"
    ]
  },
  {
    "id": 784,
    "nameEn": "Kommo-o",
    "nameTh": "จารารังกา",
    "types": [
      "fighting",
      "dragon"
    ]
  },
  {
    "id": 785,
    "nameEn": "Tapu Koko",
    "nameTh": "คาปู โคเคโค",
    "types": [
      "electric",
      "fairy"
    ]
  },
  {
    "id": 786,
    "nameEn": "Tapu Lele",
    "nameTh": "คาปู เทเทฟู",
    "types": [
      "psychic",
      "fairy"
    ]
  },
  {
    "id": 787,
    "nameEn": "Tapu Bulu",
    "nameTh": "คาปู บูลูลู",
    "types": [
      "grass",
      "fairy"
    ]
  },
  {
    "id": 788,
    "nameEn": "Tapu Fini",
    "nameTh": "คาปู เรฮิเร",
    "types": [
      "water",
      "fairy"
    ]
  },
  {
    "id": 789,
    "nameEn": "Cosmog",
    "nameTh": "คอสม็อก",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 790,
    "nameEn": "Cosmoem",
    "nameTh": "คอสโมม",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 791,
    "nameEn": "Solgaleo",
    "nameTh": "โซลกาเลโอ",
    "types": [
      "psychic",
      "steel"
    ]
  },
  {
    "id": 792,
    "nameEn": "Lunala",
    "nameTh": "ลูนาอาลา",
    "types": [
      "psychic",
      "ghost"
    ]
  },
  {
    "id": 793,
    "nameEn": "Nihilego",
    "nameTh": "อุทซึรอยด์",
    "types": [
      "poison",
      "rock"
    ]
  },
  {
    "id": 794,
    "nameEn": "Buzzwole",
    "nameTh": "มัสชิบูน",
    "types": [
      "fighting",
      "bug"
    ]
  },
  {
    "id": 795,
    "nameEn": "Pheromosa",
    "nameTh": "เฟโรเช",
    "types": [
      "fighting",
      "bug"
    ]
  },
  {
    "id": 796,
    "nameEn": "Xurkitree",
    "nameTh": "เด็นจูโมคุ",
    "types": [
      "electric"
    ]
  },
  {
    "id": 797,
    "nameEn": "Celesteela",
    "nameTh": "เท็คคากูยะ",
    "types": [
      "flying",
      "steel"
    ]
  },
  {
    "id": 798,
    "nameEn": "Kartana",
    "nameTh": "คามิทซึรูกิ",
    "types": [
      "grass",
      "steel"
    ]
  },
  {
    "id": 799,
    "nameEn": "Guzzlord",
    "nameTh": "อคูจิคิง",
    "types": [
      "dragon",
      "dark"
    ]
  },
  {
    "id": 800,
    "nameEn": "Necrozma",
    "nameTh": "เนครอสมา",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 801,
    "nameEn": "Magearna",
    "nameTh": "มาเกียนา",
    "types": [
      "steel",
      "fairy"
    ]
  },
  {
    "id": 802,
    "nameEn": "Marshadow",
    "nameTh": "มาร์ชาโดว์",
    "types": [
      "fighting",
      "ghost"
    ]
  },
  {
    "id": 803,
    "nameEn": "Poipole",
    "nameTh": "เบเวนอม",
    "types": [
      "poison"
    ]
  },
  {
    "id": 804,
    "nameEn": "Naganadel",
    "nameTh": "อาโกโยง",
    "types": [
      "poison",
      "dragon"
    ]
  },
  {
    "id": 805,
    "nameEn": "Stakataka",
    "nameTh": "สึนเดะสึนเดะ",
    "types": [
      "rock",
      "steel"
    ]
  },
  {
    "id": 806,
    "nameEn": "Blacephalon",
    "nameTh": "ซุกะโด้ง",
    "types": [
      "fire",
      "ghost"
    ]
  },
  {
    "id": 807,
    "nameEn": "Zeraora",
    "nameTh": "เซราโอรา",
    "types": [
      "electric"
    ]
  },
  {
    "id": 808,
    "nameEn": "Meltan",
    "nameTh": "เมลตัน",
    "types": [
      "steel"
    ]
  },
  {
    "id": 809,
    "nameEn": "Melmetal",
    "nameTh": "เมลเมทัล",
    "types": [
      "steel"
    ]
  },
  {
    "id": 810,
    "nameEn": "Grookey",
    "nameTh": "ซารุโนริ",
    "types": [
      "grass"
    ]
  },
  {
    "id": 811,
    "nameEn": "Thwackey",
    "nameTh": "บาจินคี",
    "types": [
      "grass"
    ]
  },
  {
    "id": 812,
    "nameEn": "Rillaboom",
    "nameTh": "กอริลลันดา",
    "types": [
      "grass"
    ]
  },
  {
    "id": 813,
    "nameEn": "Scorbunny",
    "nameTh": "ฮิบานี",
    "types": [
      "fire"
    ]
  },
  {
    "id": 814,
    "nameEn": "Raboot",
    "nameTh": "แรบบิฟุต",
    "types": [
      "fire"
    ]
  },
  {
    "id": 815,
    "nameEn": "Cinderace",
    "nameTh": "เอสเบิร์น",
    "types": [
      "fire"
    ]
  },
  {
    "id": 816,
    "nameEn": "Sobble",
    "nameTh": "เมซซอน",
    "types": [
      "water"
    ]
  },
  {
    "id": 817,
    "nameEn": "Drizzile",
    "nameTh": "จิเมเลียน",
    "types": [
      "water"
    ]
  },
  {
    "id": 818,
    "nameEn": "Inteleon",
    "nameTh": "อินเทเลียน",
    "types": [
      "water"
    ]
  },
  {
    "id": 819,
    "nameEn": "Skwovet",
    "nameTh": "โฮชิกะริสึ",
    "types": [
      "normal"
    ]
  },
  {
    "id": 820,
    "nameEn": "Greedent",
    "nameTh": "โยคุบะริสึ",
    "types": [
      "normal"
    ]
  },
  {
    "id": 821,
    "nameEn": "Rookidee",
    "nameTh": "โคโคการะ",
    "types": [
      "flying"
    ]
  },
  {
    "id": 822,
    "nameEn": "Corvisquire",
    "nameTh": "อาโอคาราสึ",
    "types": [
      "flying"
    ]
  },
  {
    "id": 823,
    "nameEn": "Corviknight",
    "nameTh": "อาร์เมอร์การ์",
    "types": [
      "flying",
      "steel"
    ]
  },
  {
    "id": 824,
    "nameEn": "Blipbug",
    "nameTh": "ซัจจิมุชิ",
    "types": [
      "bug"
    ]
  },
  {
    "id": 825,
    "nameEn": "Dottler",
    "nameTh": "เลโดมุชิ",
    "types": [
      "psychic",
      "bug"
    ]
  },
  {
    "id": 826,
    "nameEn": "Orbeetle",
    "nameTh": "อิออร์บ",
    "types": [
      "psychic",
      "bug"
    ]
  },
  {
    "id": 827,
    "nameEn": "Nickit",
    "nameTh": "คุสุเนะ",
    "types": [
      "dark"
    ]
  },
  {
    "id": 828,
    "nameEn": "Thievul",
    "nameTh": "ฟ็อกสไล",
    "types": [
      "dark"
    ]
  },
  {
    "id": 829,
    "nameEn": "Gossifleur",
    "nameTh": "ฮิเมงกะ",
    "types": [
      "grass"
    ]
  },
  {
    "id": 830,
    "nameEn": "Eldegoss",
    "nameTh": "วาตะชิรากะ",
    "types": [
      "grass"
    ]
  },
  {
    "id": 831,
    "nameEn": "Wooloo",
    "nameTh": "วูลู",
    "types": [
      "normal"
    ]
  },
  {
    "id": 832,
    "nameEn": "Dubwool",
    "nameTh": "ไบวูลู",
    "types": [
      "normal"
    ]
  },
  {
    "id": 833,
    "nameEn": "Chewtle",
    "nameTh": "คามุคาเมะ",
    "types": [
      "water"
    ]
  },
  {
    "id": 834,
    "nameEn": "Drednaw",
    "nameTh": "คาจิริกาเมะ",
    "types": [
      "water",
      "rock"
    ]
  },
  {
    "id": 835,
    "nameEn": "Yamper",
    "nameTh": "วันปาจิ",
    "types": [
      "electric"
    ]
  },
  {
    "id": 836,
    "nameEn": "Boltund",
    "nameTh": "พัลส์วัน",
    "types": [
      "electric"
    ]
  },
  {
    "id": 837,
    "nameEn": "Rolycoly",
    "nameTh": "ทันด้ง",
    "types": [
      "rock"
    ]
  },
  {
    "id": 838,
    "nameEn": "Carkol",
    "nameTh": "โทร็อกกอน",
    "types": [
      "fire",
      "rock"
    ]
  },
  {
    "id": 839,
    "nameEn": "Coalossal",
    "nameTh": "เซคิทันซัง",
    "types": [
      "fire",
      "rock"
    ]
  },
  {
    "id": 840,
    "nameEn": "Applin",
    "nameTh": "คาจิชชู",
    "types": [
      "grass",
      "dragon"
    ]
  },
  {
    "id": 841,
    "nameEn": "Flapple",
    "nameTh": "แอปปริว",
    "types": [
      "grass",
      "dragon"
    ]
  },
  {
    "id": 842,
    "nameEn": "Appletun",
    "nameTh": "ทารุปเปิล",
    "types": [
      "grass",
      "dragon"
    ]
  },
  {
    "id": 843,
    "nameEn": "Silicobra",
    "nameTh": "ซึนะเฮบิ",
    "types": [
      "ground"
    ]
  },
  {
    "id": 844,
    "nameEn": "Sandaconda",
    "nameTh": "ซาไดจา",
    "types": [
      "ground"
    ]
  },
  {
    "id": 845,
    "nameEn": "Cramorant",
    "nameTh": "อุ๊อุ",
    "types": [
      "water",
      "flying"
    ]
  },
  {
    "id": 846,
    "nameEn": "Arrokuda",
    "nameTh": "ซาชิคามาสึ",
    "types": [
      "water"
    ]
  },
  {
    "id": 847,
    "nameEn": "Barraskewda",
    "nameTh": "คามาสึโจ",
    "types": [
      "water"
    ]
  },
  {
    "id": 848,
    "nameEn": "Toxel",
    "nameTh": "เอเลซัน",
    "types": [
      "electric",
      "poison"
    ]
  },
  {
    "id": 849,
    "nameEn": "Toxtricity",
    "nameTh": "สตรินเดอร์",
    "types": [
      "electric",
      "poison"
    ]
  },
  {
    "id": 850,
    "nameEn": "Sizzlipede",
    "nameTh": "ยาคุเดะ",
    "types": [
      "fire",
      "bug"
    ]
  },
  {
    "id": 851,
    "nameEn": "Centiskorch",
    "nameTh": "มารุยาคุเดะ",
    "types": [
      "fire",
      "bug"
    ]
  },
  {
    "id": 852,
    "nameEn": "Clobbopus",
    "nameTh": "ทาทักโกะ",
    "types": [
      "fighting"
    ]
  },
  {
    "id": 853,
    "nameEn": "Grapploct",
    "nameTh": "โอโทสพัส",
    "types": [
      "fighting"
    ]
  },
  {
    "id": 854,
    "nameEn": "Sinistea",
    "nameTh": "ยาบาฉะ",
    "types": [
      "ghost"
    ]
  },
  {
    "id": 855,
    "nameEn": "Polteageist",
    "nameTh": "พอตเดธ",
    "types": [
      "ghost"
    ]
  },
  {
    "id": 856,
    "nameEn": "Hatenna",
    "nameTh": "มิบริม",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 857,
    "nameEn": "Hattrem",
    "nameTh": "เทบริม",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 858,
    "nameEn": "Hatterene",
    "nameTh": "บริมออน",
    "types": [
      "psychic",
      "fairy"
    ]
  },
  {
    "id": 859,
    "nameEn": "Impidimp",
    "nameTh": "เบโรบา",
    "types": [
      "dark",
      "fairy"
    ]
  },
  {
    "id": 860,
    "nameEn": "Morgrem",
    "nameTh": "กิโม",
    "types": [
      "dark",
      "fairy"
    ]
  },
  {
    "id": 861,
    "nameEn": "Grimmsnarl",
    "nameTh": "โอลองเกะ",
    "types": [
      "dark",
      "fairy"
    ]
  },
  {
    "id": 862,
    "nameEn": "Obstagoon",
    "nameTh": "ทาจิฟซากุมะ",
    "types": [
      "normal",
      "dark"
    ]
  },
  {
    "id": 863,
    "nameEn": "Perrserker",
    "nameTh": "เนียคิง",
    "types": [
      "steel"
    ]
  },
  {
    "id": 864,
    "nameEn": "Cursola",
    "nameTh": "ซานิกอน",
    "types": [
      "ghost"
    ]
  },
  {
    "id": 865,
    "nameEn": "Sirfetch'd",
    "nameTh": "เนงิกะไนท์",
    "types": [
      "fighting"
    ]
  },
  {
    "id": 866,
    "nameEn": "Mr. Rime",
    "nameTh": "บาลิโคโอรุ",
    "types": [
      "ice",
      "psychic"
    ]
  },
  {
    "id": 867,
    "nameEn": "Runerigus",
    "nameTh": "เดธเบิร์น",
    "types": [
      "ground",
      "ghost"
    ]
  },
  {
    "id": 868,
    "nameEn": "Milcery",
    "nameTh": "มาโฮมิล",
    "types": [
      "fairy"
    ]
  },
  {
    "id": 869,
    "nameEn": "Alcremie",
    "nameTh": "มาวิป",
    "types": [
      "fairy"
    ]
  },
  {
    "id": 870,
    "nameEn": "Falinks",
    "nameTh": "ไทเรสึ",
    "types": [
      "fighting"
    ]
  },
  {
    "id": 871,
    "nameEn": "Pincurchin",
    "nameTh": "บาจินอุนิ",
    "types": [
      "electric"
    ]
  },
  {
    "id": 872,
    "nameEn": "Snom",
    "nameTh": "ยูกิฮามิ",
    "types": [
      "ice",
      "bug"
    ]
  },
  {
    "id": 873,
    "nameEn": "Frosmoth",
    "nameTh": "มอสโนว์",
    "types": [
      "ice",
      "bug"
    ]
  },
  {
    "id": 874,
    "nameEn": "Stonjourner",
    "nameTh": "อิชิเฮนจิน",
    "types": [
      "rock"
    ]
  },
  {
    "id": 875,
    "nameEn": "Eiscue",
    "nameTh": "โคโอริปโปะ",
    "types": [
      "ice"
    ]
  },
  {
    "id": 876,
    "nameEn": "Indeedee",
    "nameTh": "อิเอซซัน",
    "types": [
      "normal",
      "psychic"
    ]
  },
  {
    "id": 877,
    "nameEn": "Morpeko",
    "nameTh": "โมรุเปโกะ",
    "types": [
      "electric",
      "dark"
    ]
  },
  {
    "id": 878,
    "nameEn": "Cufant",
    "nameTh": "โซโด",
    "types": [
      "steel"
    ]
  },
  {
    "id": 879,
    "nameEn": "Copperajah",
    "nameTh": "ไดโอโด",
    "types": [
      "steel"
    ]
  },
  {
    "id": 880,
    "nameEn": "Dracozolt",
    "nameTh": "พัจจิรากอน",
    "types": [
      "electric",
      "dragon"
    ]
  },
  {
    "id": 881,
    "nameEn": "Arctozolt",
    "nameTh": "พัจจิรุดอน",
    "types": [
      "electric",
      "ice"
    ]
  },
  {
    "id": 882,
    "nameEn": "Dracovish",
    "nameTh": "อุโอโนรากอน",
    "types": [
      "water",
      "dragon"
    ]
  },
  {
    "id": 883,
    "nameEn": "Arctovish",
    "nameTh": "อุโอจิรุดอน",
    "types": [
      "water",
      "ice"
    ]
  },
  {
    "id": 884,
    "nameEn": "Duraludon",
    "nameTh": "ดิวรัลดอน",
    "types": [
      "dragon",
      "steel"
    ]
  },
  {
    "id": 885,
    "nameEn": "Dreepy",
    "nameTh": "โดราเมชิยะ",
    "types": [
      "ghost",
      "dragon"
    ]
  },
  {
    "id": 886,
    "nameEn": "Drakloak",
    "nameTh": "โดรอนจิ",
    "types": [
      "ghost",
      "dragon"
    ]
  },
  {
    "id": 887,
    "nameEn": "Dragapult",
    "nameTh": "โดราพัลท์",
    "types": [
      "ghost",
      "dragon"
    ]
  },
  {
    "id": 888,
    "nameEn": "Zacian",
    "nameTh": "ซาเชียน",
    "types": [
      "fairy"
    ]
  },
  {
    "id": 889,
    "nameEn": "Zamazenta",
    "nameTh": "ซามาเซนตา",
    "types": [
      "fighting"
    ]
  },
  {
    "id": 890,
    "nameEn": "Eternatus",
    "nameTh": "มุเก็นไดนา",
    "types": [
      "poison",
      "dragon"
    ]
  },
  {
    "id": 891,
    "nameEn": "Kubfu",
    "nameTh": "ดาคุมะ",
    "types": [
      "fighting"
    ]
  },
  {
    "id": 892,
    "nameEn": "Urshifu",
    "nameTh": "วูลาโอส",
    "types": [
      "fighting",
      "dark"
    ]
  },
  {
    "id": 893,
    "nameEn": "Zarude",
    "nameTh": "ซารู้ด",
    "types": [
      "grass",
      "dark"
    ]
  },
  {
    "id": 894,
    "nameEn": "Regieleki",
    "nameTh": "เรจิเอเลคิ",
    "types": [
      "electric"
    ]
  },
  {
    "id": 895,
    "nameEn": "Regidrago",
    "nameTh": "เรจิดราโก",
    "types": [
      "dragon"
    ]
  },
  {
    "id": 896,
    "nameEn": "Glastrier",
    "nameTh": "บลิซซาพอส",
    "types": [
      "ice"
    ]
  },
  {
    "id": 897,
    "nameEn": "Spectrier",
    "nameTh": "เรสพอส",
    "types": [
      "ghost"
    ]
  },
  {
    "id": 898,
    "nameEn": "Calyrex",
    "nameTh": "บัดเดร็กซ์",
    "types": [
      "grass",
      "psychic"
    ]
  },
  {
    "id": 899,
    "nameEn": "Wyrdeer",
    "nameTh": "อายาชิชิ",
    "types": [
      "normal",
      "psychic"
    ]
  },
  {
    "id": 900,
    "nameEn": "Kleavor",
    "nameTh": "บาซากิริ",
    "types": [
      "bug",
      "rock"
    ]
  },
  {
    "id": 901,
    "nameEn": "Ursaluna",
    "nameTh": "กาจิกุมะ",
    "types": [
      "normal",
      "ground"
    ]
  },
  {
    "id": 902,
    "nameEn": "Basculegion",
    "nameTh": "อิไดโต",
    "types": [
      "water",
      "ghost"
    ]
  },
  {
    "id": 903,
    "nameEn": "Sneasler",
    "nameTh": "โอนิวลา",
    "types": [
      "fighting",
      "poison"
    ]
  },
  {
    "id": 904,
    "nameEn": "Overqwil",
    "nameTh": "ฮารีมัน",
    "types": [
      "poison",
      "dark"
    ]
  },
  {
    "id": 905,
    "nameEn": "Enamorus",
    "nameTh": "เลิฟโทลอส",
    "types": [
      "flying",
      "fairy"
    ]
  },
  {
    "id": 906,
    "nameEn": "Sprigatito",
    "nameTh": "เนียวฮะ",
    "types": [
      "grass"
    ]
  },
  {
    "id": 907,
    "nameEn": "Floragato",
    "nameTh": "เนียโรเต",
    "types": [
      "grass"
    ]
  },
  {
    "id": 908,
    "nameEn": "Meowscarada",
    "nameTh": "มาสเคอเนีย",
    "types": [
      "grass",
      "dark"
    ]
  },
  {
    "id": 909,
    "nameEn": "Fuecoco",
    "nameTh": "โฮเกเตอร์",
    "types": [
      "fire"
    ]
  },
  {
    "id": 910,
    "nameEn": "Crocalor",
    "nameTh": "อาจิเกเตอร์",
    "types": [
      "fire"
    ]
  },
  {
    "id": 911,
    "nameEn": "Skeledirge",
    "nameTh": "ลาวด์โบน",
    "types": [
      "fire",
      "ghost"
    ]
  },
  {
    "id": 912,
    "nameEn": "Quaxly",
    "nameTh": "แคว็กซ์",
    "types": [
      "water"
    ]
  },
  {
    "id": 913,
    "nameEn": "Quaxwell",
    "nameTh": "เวลคาโมะ",
    "types": [
      "water"
    ]
  },
  {
    "id": 914,
    "nameEn": "Quaquaval",
    "nameTh": "เวนิวัล",
    "types": [
      "water",
      "fighting"
    ]
  },
  {
    "id": 915,
    "nameEn": "Lechonk",
    "nameTh": "กูร์ตง",
    "types": [
      "normal"
    ]
  },
  {
    "id": 916,
    "nameEn": "Oinkologne",
    "nameTh": "เพอร์ฟูตง",
    "types": [
      "normal"
    ]
  },
  {
    "id": 917,
    "nameEn": "Tarountula",
    "nameTh": "ทามันทูล่า",
    "types": [
      "bug"
    ]
  },
  {
    "id": 918,
    "nameEn": "Spidops",
    "nameTh": "วาไนเดอร์",
    "types": [
      "bug"
    ]
  },
  {
    "id": 919,
    "nameEn": "Nymble",
    "nameTh": "มาเมะบัตตะ",
    "types": [
      "bug"
    ]
  },
  {
    "id": 920,
    "nameEn": "Lokix",
    "nameTh": "เอ็กซ์เลก",
    "types": [
      "bug",
      "dark"
    ]
  },
  {
    "id": 921,
    "nameEn": "Pawmi",
    "nameTh": "พาโม",
    "types": [
      "electric"
    ]
  },
  {
    "id": 922,
    "nameEn": "Pawmo",
    "nameTh": "พาม็อต",
    "types": [
      "electric",
      "fighting"
    ]
  },
  {
    "id": 923,
    "nameEn": "Pawmot",
    "nameTh": "เพอร์ม็อต",
    "types": [
      "electric",
      "fighting"
    ]
  },
  {
    "id": 924,
    "nameEn": "Tandemaus",
    "nameTh": "วักคาเนซูมิ",
    "types": [
      "normal"
    ]
  },
  {
    "id": 925,
    "nameEn": "Maushold",
    "nameTh": "อิกคาเนซูมิ",
    "types": [
      "normal"
    ]
  },
  {
    "id": 926,
    "nameEn": "Fidough",
    "nameTh": "พาปิม็อตจิ",
    "types": [
      "fairy"
    ]
  },
  {
    "id": 927,
    "nameEn": "Dachsbun",
    "nameTh": "บัลซ์เซล",
    "types": [
      "fairy"
    ]
  },
  {
    "id": 928,
    "nameEn": "Smoliv",
    "nameTh": "มินีฟ",
    "types": [
      "normal",
      "grass"
    ]
  },
  {
    "id": 929,
    "nameEn": "Dolliv",
    "nameTh": "โอลีเนียว",
    "types": [
      "normal",
      "grass"
    ]
  },
  {
    "id": 930,
    "nameEn": "Arboliva",
    "nameTh": "โอลีวา",
    "types": [
      "normal",
      "grass"
    ]
  },
  {
    "id": 931,
    "nameEn": "Squawkabilly",
    "nameTh": "อิคิริงโกะ",
    "types": [
      "normal",
      "flying"
    ]
  },
  {
    "id": 932,
    "nameEn": "Nacli",
    "nameTh": "โคจีโอ",
    "types": [
      "rock"
    ]
  },
  {
    "id": 933,
    "nameEn": "Naclstack",
    "nameTh": "จีโอซึมู",
    "types": [
      "rock"
    ]
  },
  {
    "id": 934,
    "nameEn": "Garganacl",
    "nameTh": "เคียวจีโอน",
    "types": [
      "rock"
    ]
  },
  {
    "id": 935,
    "nameEn": "Charcadet",
    "nameTh": "คาร์โบ",
    "types": [
      "fire"
    ]
  },
  {
    "id": 936,
    "nameEn": "Armarouge",
    "nameTh": "กุเร็นอาร์มา",
    "types": [
      "fire",
      "psychic"
    ]
  },
  {
    "id": 937,
    "nameEn": "Ceruledge",
    "nameTh": "โซเบลดส์",
    "types": [
      "fire",
      "ghost"
    ]
  },
  {
    "id": 938,
    "nameEn": "Tadbulb",
    "nameTh": "ซุพีคา",
    "types": [
      "electric"
    ]
  },
  {
    "id": 939,
    "nameEn": "Bellibolt",
    "nameTh": "ฮาราบารี",
    "types": [
      "electric"
    ]
  },
  {
    "id": 940,
    "nameEn": "Wattrel",
    "nameTh": "ไคเด็น",
    "types": [
      "electric",
      "flying"
    ]
  },
  {
    "id": 941,
    "nameEn": "Kilowattrel",
    "nameTh": "ไทไคเด็น",
    "types": [
      "electric",
      "flying"
    ]
  },
  {
    "id": 942,
    "nameEn": "Maschiff",
    "nameTh": "โอราทิฟ",
    "types": [
      "dark"
    ]
  },
  {
    "id": 943,
    "nameEn": "Mabosstiff",
    "nameTh": "มาฟีทิฟ",
    "types": [
      "dark"
    ]
  },
  {
    "id": 944,
    "nameEn": "Shroodle",
    "nameTh": "ชิรุชูลู",
    "types": [
      "normal",
      "poison"
    ]
  },
  {
    "id": 945,
    "nameEn": "Grafaiai",
    "nameTh": "ทากิงกูลู",
    "types": [
      "normal",
      "poison"
    ]
  },
  {
    "id": 946,
    "nameEn": "Bramblin",
    "nameTh": "อาโนะคุสะ",
    "types": [
      "grass",
      "ghost"
    ]
  },
  {
    "id": 947,
    "nameEn": "Brambleghast",
    "nameTh": "อาโนะโฮรากุสะ",
    "types": [
      "grass",
      "ghost"
    ]
  },
  {
    "id": 948,
    "nameEn": "Toedscool",
    "nameTh": "โนโนะคุราเกะ",
    "types": [
      "grass",
      "ground"
    ]
  },
  {
    "id": 949,
    "nameEn": "Toedscruel",
    "nameTh": "ริคุคุราเกะ",
    "types": [
      "grass",
      "ground"
    ]
  },
  {
    "id": 950,
    "nameEn": "Klawf",
    "nameTh": "กาเคกานิ",
    "types": [
      "rock"
    ]
  },
  {
    "id": 951,
    "nameEn": "Capsakid",
    "nameTh": "แคปไซจิ",
    "types": [
      "grass"
    ]
  },
  {
    "id": 952,
    "nameEn": "Scovillain",
    "nameTh": "สโกวิลเลิน",
    "types": [
      "fire",
      "grass"
    ]
  },
  {
    "id": 953,
    "nameEn": "Rellor",
    "nameTh": "ชิกาโรโค",
    "types": [
      "bug"
    ]
  },
  {
    "id": 954,
    "nameEn": "Rabsca",
    "nameTh": "เบราคาสุ",
    "types": [
      "psychic",
      "bug"
    ]
  },
  {
    "id": 955,
    "nameEn": "Flittle",
    "nameTh": "ฮิราฮินะ",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 956,
    "nameEn": "Espathra",
    "nameTh": "เควสพัตรา",
    "types": [
      "psychic"
    ]
  },
  {
    "id": 957,
    "nameEn": "Tinkatink",
    "nameTh": "คานุจัง",
    "types": [
      "steel",
      "fairy"
    ]
  },
  {
    "id": 958,
    "nameEn": "Tinkatuff",
    "nameTh": "นาคานุจัง",
    "types": [
      "steel",
      "fairy"
    ]
  },
  {
    "id": 959,
    "nameEn": "Tinkaton",
    "nameTh": "เดคานุจัง",
    "types": [
      "steel",
      "fairy"
    ]
  },
  {
    "id": 960,
    "nameEn": "Wiglett",
    "nameTh": "อุมิดิกดา",
    "types": [
      "water"
    ]
  },
  {
    "id": 961,
    "nameEn": "Wugtrio",
    "nameTh": "อุมิทริโอ",
    "types": [
      "water"
    ]
  },
  {
    "id": 962,
    "nameEn": "Bombirdier",
    "nameTh": "โอโตชิโดริ",
    "types": [
      "flying",
      "dark"
    ]
  },
  {
    "id": 963,
    "nameEn": "Finizen",
    "nameTh": "นามิอิรุกะ",
    "types": [
      "water"
    ]
  },
  {
    "id": 964,
    "nameEn": "Palafin",
    "nameTh": "อิรุกะแมน",
    "types": [
      "water"
    ]
  },
  {
    "id": 965,
    "nameEn": "Varoom",
    "nameTh": "โบรรอน",
    "types": [
      "poison",
      "steel"
    ]
  },
  {
    "id": 966,
    "nameEn": "Revavroom",
    "nameTh": "โบรโรโรม",
    "types": [
      "poison",
      "steel"
    ]
  },
  {
    "id": 967,
    "nameEn": "Cyclizar",
    "nameTh": "โมโตโทคาเงะ",
    "types": [
      "normal",
      "dragon"
    ]
  },
  {
    "id": 968,
    "nameEn": "Orthworm",
    "nameTh": "มิมิซึซึ",
    "types": [
      "steel"
    ]
  },
  {
    "id": 969,
    "nameEn": "Glimmet",
    "nameTh": "คิราเมะ",
    "types": [
      "poison",
      "rock"
    ]
  },
  {
    "id": 970,
    "nameEn": "Glimmora",
    "nameTh": "คิราฟลอร์",
    "types": [
      "poison",
      "rock"
    ]
  },
  {
    "id": 971,
    "nameEn": "Greavard",
    "nameTh": "โบจิ",
    "types": [
      "ghost"
    ]
  },
  {
    "id": 972,
    "nameEn": "Houndstone",
    "nameTh": "ฮากาด็อก",
    "types": [
      "ghost"
    ]
  },
  {
    "id": 973,
    "nameEn": "Flamigo",
    "nameTh": "คลามิงโก้",
    "types": [
      "fighting",
      "flying"
    ]
  },
  {
    "id": 974,
    "nameEn": "Cetoddle",
    "nameTh": "อารุคุจิระ",
    "types": [
      "ice"
    ]
  },
  {
    "id": 975,
    "nameEn": "Cetitan",
    "nameTh": "ฮัลค์จิระ",
    "types": [
      "ice"
    ]
  },
  {
    "id": 976,
    "nameEn": "Veluza",
    "nameTh": "มิกาลูซา",
    "types": [
      "water",
      "psychic"
    ]
  },
  {
    "id": 977,
    "nameEn": "Dondozo",
    "nameTh": "เฮรัชเชอร์",
    "types": [
      "water"
    ]
  },
  {
    "id": 978,
    "nameEn": "Tatsugiri",
    "nameTh": "ชาริทัตสึ",
    "types": [
      "water",
      "dragon"
    ]
  },
  {
    "id": 979,
    "nameEn": "Annihilape",
    "nameTh": "โคโนะโยซารุ",
    "types": [
      "fighting",
      "ghost"
    ]
  },
  {
    "id": 980,
    "nameEn": "Clodsire",
    "nameTh": "โดะโอ",
    "types": [
      "poison",
      "ground"
    ]
  },
  {
    "id": 981,
    "nameEn": "Farigiraf",
    "nameTh": "ริกิคิริน",
    "types": [
      "normal",
      "psychic"
    ]
  },
  {
    "id": 982,
    "nameEn": "Dudunsparce",
    "nameTh": "โนโกก็อจจิ",
    "types": [
      "normal"
    ]
  },
  {
    "id": 983,
    "nameEn": "Kingambit",
    "nameTh": "โดโดเกซัน",
    "types": [
      "dark",
      "steel"
    ]
  },
  {
    "id": 984,
    "nameEn": "Great Tusk",
    "nameTh": "งายักษ์",
    "types": [
      "fighting",
      "ground"
    ]
  },
  {
    "id": 985,
    "nameEn": "Scream Tail",
    "nameTh": "หางตะเบ็ง",
    "types": [
      "psychic",
      "fairy"
    ]
  },
  {
    "id": 986,
    "nameEn": "Brute Bonnet",
    "nameTh": "เห็ดคลุ้มคลั่ง",
    "types": [
      "grass",
      "dark"
    ]
  },
  {
    "id": 987,
    "nameEn": "Flutter Mane",
    "nameTh": "เกศากระพือ",
    "types": [
      "ghost",
      "fairy"
    ]
  },
  {
    "id": 988,
    "nameEn": "Slither Wing",
    "nameTh": "ปีกไล้พสุธา",
    "types": [
      "fighting",
      "bug"
    ]
  },
  {
    "id": 989,
    "nameEn": "Sandy Shocks",
    "nameTh": "ขนทราย",
    "types": [
      "electric",
      "ground"
    ]
  },
  {
    "id": 990,
    "nameEn": "Iron Treads",
    "nameTh": "รอยล้อเหล็ก",
    "types": [
      "ground",
      "steel"
    ]
  },
  {
    "id": 991,
    "nameEn": "Iron Bundle",
    "nameTh": "ถุงเหล็ก",
    "types": [
      "water",
      "ice"
    ]
  },
  {
    "id": 992,
    "nameEn": "Iron Hands",
    "nameTh": "แขนเหล็ก",
    "types": [
      "electric",
      "fighting"
    ]
  },
  {
    "id": 993,
    "nameEn": "Iron Jugulis",
    "nameTh": "คอเหล็ก",
    "types": [
      "flying",
      "dark"
    ]
  },
  {
    "id": 994,
    "nameEn": "Iron Moth",
    "nameTh": "แมลงมอธเหล็ก",
    "types": [
      "fire",
      "poison"
    ]
  },
  {
    "id": 995,
    "nameEn": "Iron Thorns",
    "nameTh": "หนามเหล็ก",
    "types": [
      "electric",
      "rock"
    ]
  },
  {
    "id": 996,
    "nameEn": "Frigibax",
    "nameTh": "เซบิเอะ",
    "types": [
      "ice",
      "dragon"
    ]
  },
  {
    "id": 997,
    "nameEn": "Arctibax",
    "nameTh": "เซโกล",
    "types": [
      "ice",
      "dragon"
    ]
  },
  {
    "id": 998,
    "nameEn": "Baxcalibur",
    "nameTh": "เซเกลฟ",
    "types": [
      "ice",
      "dragon"
    ]
  },
  {
    "id": 999,
    "nameEn": "Gimmighoul",
    "nameTh": "คอลเลคเรย์",
    "types": [
      "ghost"
    ]
  },
  {
    "id": 1000,
    "nameEn": "Gholdengo",
    "nameTh": "ซาร์ฟโก",
    "types": [
      "ghost",
      "steel"
    ]
  },
  {
    "id": 1001,
    "nameEn": "Wo-Chien",
    "nameTh": "ฉงเจี่ยน",
    "types": [
      "grass",
      "dark"
    ]
  },
  {
    "id": 1002,
    "nameEn": "Chien-Pao",
    "nameTh": "เป้าเจี้ยน",
    "types": [
      "ice",
      "dark"
    ]
  },
  {
    "id": 1003,
    "nameEn": "Ting-Lu",
    "nameTh": "ติ่งลู่",
    "types": [
      "ground",
      "dark"
    ]
  },
  {
    "id": 1004,
    "nameEn": "Chi-Yu",
    "nameTh": "อวี้อวี๋",
    "types": [
      "fire",
      "dark"
    ]
  },
  {
    "id": 1005,
    "nameEn": "Roaring Moon",
    "nameTh": "จันทร์คำรน",
    "types": [
      "dragon",
      "dark"
    ]
  },
  {
    "id": 1006,
    "nameEn": "Iron Valiant",
    "nameTh": "นักรบเหล็ก",
    "types": [
      "fighting",
      "fairy"
    ]
  },
  {
    "id": 1007,
    "nameEn": "Koraidon",
    "nameTh": "โคไรดอน",
    "types": [
      "fighting",
      "dragon"
    ]
  },
  {
    "id": 1008,
    "nameEn": "Miraidon",
    "nameTh": "มิไรดอน",
    "types": [
      "electric",
      "dragon"
    ]
  },
  {
    "id": 1009,
    "nameEn": "Walking Wake",
    "nameTh": "คลื่นน้ำกระเพื่อม",
    "types": [
      "water",
      "dragon"
    ]
  },
  {
    "id": 1010,
    "nameEn": "Iron Leaves",
    "nameTh": "ใบด่างเหล็ก",
    "types": [
      "grass",
      "psychic"
    ]
  },
  {
    "id": 1011,
    "nameEn": "Dipplin",
    "nameTh": "คามิชชู",
    "types": [
      "grass",
      "dragon"
    ]
  },
  {
    "id": 1012,
    "nameEn": "Poltchageist",
    "nameTh": "ฉะเดธ",
    "types": [
      "grass",
      "ghost"
    ]
  },
  {
    "id": 1013,
    "nameEn": "Sinistcha",
    "nameTh": "ยาบาโซฉะ",
    "types": [
      "grass",
      "ghost"
    ]
  },
  {
    "id": 1014,
    "nameEn": "Okidogi",
    "nameTh": "อี้เนะอินุ",
    "types": [
      "fighting",
      "poison"
    ]
  },
  {
    "id": 1015,
    "nameEn": "Munkidori",
    "nameTh": "มาชิมาชิระ",
    "types": [
      "poison",
      "psychic"
    ]
  },
  {
    "id": 1016,
    "nameEn": "Fezandipiti",
    "nameTh": "คิจิคิกิสึ",
    "types": [
      "poison",
      "fairy"
    ]
  },
  {
    "id": 1017,
    "nameEn": "Ogerpon",
    "nameTh": "โอการ์ปอง",
    "types": [
      "grass"
    ]
  },
  {
    "id": 1018,
    "nameEn": "Archaludon",
    "nameTh": "บริดิวรัส",
    "types": [
      "dragon",
      "steel"
    ]
  },
  {
    "id": 1019,
    "nameEn": "Hydrapple",
    "nameTh": "คามิสึโอโรจิ",
    "types": [
      "grass",
      "dragon"
    ]
  },
  {
    "id": 1020,
    "nameEn": "Gouging Fire",
    "nameTh": "เพลิงทะลวง",
    "types": [
      "fire",
      "dragon"
    ]
  },
  {
    "id": 1021,
    "nameEn": "Raging Bolt",
    "nameTh": "ฟ้าคะนองคลั่ง",
    "types": [
      "electric",
      "dragon"
    ]
  },
  {
    "id": 1022,
    "nameEn": "Iron Boulder",
    "nameTh": "ศิลาเหล็ก",
    "types": [
      "psychic",
      "rock"
    ]
  },
  {
    "id": 1023,
    "nameEn": "Iron Crown",
    "nameTh": "หัวเหล็ก",
    "types": [
      "psychic",
      "steel"
    ]
  },
  {
    "id": 1024,
    "nameEn": "Terapagos",
    "nameTh": "เทราปากอส",
    "types": [
      "normal"
    ]
  },
  {
    "id": 1025,
    "nameEn": "Pecharunt",
    "nameTh": "โมโมวาโร่",
    "types": [
      "poison",
      "ghost"
    ]
  }
];
