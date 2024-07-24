// 유저에게 두 단어를 입력 받고
// 배열로 바꾸기
// ex) ice coffee
// [i,c,e,c,o,f,f,e,e]

// const words = prompt("두 단어를 입력하세요");
// const splitWords = words.split(" ");
// const [a, b] = splitWords;
// const arr = [...a, ...b];
// const [one, ...rest] = num // [2,3,4,5]

const [a, b] = prompt("두 단어 입력").split(" ");
const arr = [...a, ...b];

const data = [
  {
    creadit_card: "30449285862622",
    first_name: "Byrom",
    color: "Goldenrod",
    car_model: "Club Wagon",
  },
  {
    creadit_card: "560225264831899871",
    first_name: "Ninnetta",
    color: "Green",
    car_model: "SVX",
  },
  {
    creadit_card: "5602227305321408",
    first_name: "Lacie",
    color: "Fuscia",
    car_model: "911",
  },
  {
    creadit_card: "6386963952074490",
    first_name: "Seumas",
    color: "Goldenrod",
    car_model: "Yaris",
  },
  {
    creadit_card: "3546732969842312",
    first_name: "Norine",
    color: "Orange",
    car_model: "Monte Carlo",
  },
  {
    creadit_card: "502084961938442883",
    first_name: "Randene",
    color: "Fuscia",
    car_model: "A3",
  },
  {
    creadit_card: "3570674595853827",
    first_name: "Shandeigh",
    color: "Violet",
    car_model: "Truck",
  },
  {
    creadit_card: "30475512100932",
    first_name: "Mickey",
    color: "Teal",
    car_model: "Freestar",
  },
  {
    creadit_card: "6304979901346085",
    first_name: "Tilda",
    color: "Indigo",
    car_model: "Suburban 2500",
  },
  {
    creadit_card: "374288338791022",
    first_name: "Tracie",
    color: "Blue",
    car_model: "S4",
  },
  {
    creadit_card: "3569007325502492",
    first_name: "Tiffanie",
    color: "Puce",
    car_model: "3 Series",
  },
  {
    creadit_card: "3581297969754160",
    first_name: "Jinny",
    color: "Red",
    car_model: "Galant",
  },
  {
    creadit_card: "5610828884900353",
    first_name: "Jarret",
    color: "Maroon",
    car_model: "Catera",
  },
  {
    creadit_card: "633467098613154085",
    first_name: "Jackie",
    color: "Orange",
    car_model: "Element",
  },
  {
    creadit_card: "372301287623732",
    first_name: "Irvin",
    color: "Mauv",
    car_model: "F250",
  },
  {
    creadit_card: "5526239602413005",
    first_name: "Carmelle",
    color: "Crimson",
    car_model: "Explorer",
  },
  {
    creadit_card: "30076284991076",
    first_name: "Mortie",
    color: "Indigo",
    car_model: "Swift",
  },
  {
    creadit_card: "201584856246285",
    first_name: "Doti",
    color: "Fuscia",
    car_model: "911",
  },
  {
    creadit_card: "56022353409113882",
    first_name: "Layton",
    color: "Yellow",
    car_model: "Alpina B7",
  },
  {
    creadit_card: "3567009971431424",
    first_name: "Flss",
    color: "Violet",
    car_model: "Galant",
  },
  {
    creadit_card: "4844256910518927",
    first_name: "Damaris",
    color: "Orange",
    car_model: "Continental",
  },
  {
    creadit_card: "3535321112742232",
    first_name: "Sander",
    color: "Teal",
    car_model: "Viper",
  },
  {
    creadit_card: "3555691260709521",
    first_name: "Molli",
    color: "Violet",
    car_model: "Bonneville",
  },
  {
    creadit_card: "3575962306315581",
    first_name: "Onida",
    color: "Yellow",
    car_model: "Monaco",
  },
  {
    creadit_card: "3581421942092874",
    first_name: "Karole",
    color: "Violet",
    car_model: "Grand Marquis",
  },
  {
    creadit_card: "56022115149669824",
    first_name: "Loella",
    color: "Indigo",
    car_model: "VS Commodore",
  },
  {
    creadit_card: "6304925944034938358",
    first_name: "Kiley",
    color: "Puce",
    car_model: "G6",
  },
  {
    creadit_card: "3542641578508673",
    first_name: "Anne-marie",
    color: "Purple",
    car_model: "Q",
  },
  {
    creadit_card: "3551805517698089",
    first_name: "Christin",
    color: "Pink",
    car_model: "Pajero",
  },
  {
    creadit_card: "3544617839355797",
    first_name: "Druci",
    color: "Red",
    car_model: "Focus",
  },
  {
    creadit_card: "5100176813196926",
    first_name: "Maxy",
    color: "Mauv",
    car_model: "Typ-1",
  },
  {
    creadit_card: "30480969038197",
    first_name: "Merilee",
    color: "Fuscia",
    car_model: "Grand Prix",
  },
  {
    creadit_card: "3543663864071058",
    first_name: "Mame",
    color: "Mauv",
    car_model: "XT",
  },
  {
    creadit_card: "5100178777505498",
    first_name: "Hildegaard",
    color: "Maroon",
    car_model: "Gran Sport",
  },
  {
    creadit_card: "3589135388616986",
    first_name: "Madella",
    color: "Crimson",
    car_model: "Miata MX-5",
  },
  {
    creadit_card: "4917250697795206",
    first_name: "Tonia",
    color: "Aquamarine",
    car_model: "H2",
  },
  {
    creadit_card: "201527064881591",
    first_name: "Wilfred",
    color: "Maroon",
    car_model: "Pilot",
  },
  {
    creadit_card: "50386425366332326",
    first_name: "Evvy",
    color: "Maroon",
    car_model: "Taurus",
  },
  {
    creadit_card: "5002359443421430",
    first_name: "Amity",
    color: "Goldenrod",
    car_model: "Mazda5",
  },
  {
    creadit_card: "5100173278027662",
    first_name: "Teador",
    color: "Indigo",
    car_model: "Regal",
  },
  {
    creadit_card: "4026056645465588",
    first_name: "Olenka",
    color: "Teal",
    car_model: "Challenger",
  },
  {
    creadit_card: "56022432843548729",
    first_name: "Barbara",
    color: "Purple",
    car_model: "Grand Caravan",
  },
  {
    creadit_card: "3554606092095486",
    first_name: "Tabbitha",
    color: "Fuscia",
    car_model: "Continental",
  },
  {
    creadit_card: "4508939612794733",
    first_name: "Danny",
    color: "Violet",
    car_model: "Charger",
  },
  {
    creadit_card: "3582790403673953",
    first_name: "Kevon",
    color: "Goldenrod",
    car_model: "Tundra",
  },
  {
    creadit_card: "5179889680795176",
    first_name: "Rodney",
    color: "Mauv",
    car_model: "X5",
  },
  {
    creadit_card: "3533963018167741",
    first_name: "Merci",
    color: "Pink",
    car_model: "F430",
  },
  {
    creadit_card: "3566504421390148",
    first_name: "Nancee",
    color: "Khaki",
    car_model: "Aventador",
  },
  {
    creadit_card: "6759870293369656296",
    first_name: "Shem",
    color: "Mauv",
    car_model: "Century",
  },
  {
    creadit_card: "3563238817175077",
    first_name: "Louisa",
    color: "Mauv",
    car_model: "GT-R",
  },
];

// 1. credit_card의 숫자의 앞 3자리 합이 10 넘기는 애들만 살리기

const e = data.filter((x) => {
  const arr = [...x.creadit_card].map((v) => +v);
  return arr[0] + arr[1] + arr[2] > 10;
});

console.log(e);
