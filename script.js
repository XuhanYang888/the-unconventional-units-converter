const default_units = [
  { length: "cm" },
  { weight: "g" },
  { volume: "ml" },
  { area: "sqcm" },
];

const conversion_data = {
  length: [
    { object: "pencil", cm: 19 },
    { object: "smartphone", cm: 14 },
    { object: "credit_card", cm: 8.6 },
    { object: "standard_ruler", cm: 30 },
    { object: "toothbrush", cm: 19 },
    { object: "fork", cm: 20 },
    { object: "spoon", cm: 15 },
    { object: "wallet", cm: 11 },
    { object: "book", cm: 23 },
    { object: "computer mouse", cm: 11 },
    { object: "baseball_bat", cm: 71 },
    { object: "men's shoe", cm: 30 },
    { object: "water_bottle", cm: 25 },
    { object: "sticky_note", cm: 7.6 },
    { object: "TV remote", cm: 18 },
    { object: "socks", cm: 30 },
    { object: "diameter of a roll of toilet paper", cm: 11 },
    { object: "DVD case", cm: 19 },
    { object: "spatula", cm: 32 },
    { object: "cookbook", cm: 28 },
  ],
  weight: [
    { object: "apple", g: 182 },
    { object: "banana", g: 118 },
    { object: "loaf_of_bread", g: 400 },
    { object: "can_of_soda", g: 355 },
    { object: "egg", g: 60 },
    { object: "bar_of_chocolate", g: 100 },
    { object: "smartphone", g: 200 },
    { object: "laptop", g: 1250 },
    { object: "lightbulb", g: 100 },
    { object: "hairbrush", g: 150 },
    { object: "jar_of_peanut_butter", g: 500 },
    { object: "keyring", g: 50 },
    { object: "coffee_mug", g: 350 },
    { object: "TV_remote", g: 150 },
    { object: "saucepan", g: 800 },
    { object: "umbrella", g: 400 },
    { object: "baseball", g: 145 },
    { object: "tennis_ball", g: 58 },
    { object: "wallet", g: 100 },
    { object: "pair_of_glasses", g: 50 },
  ],
  area: [
    { object: "sticky_note", sqcm: 58 },
    { object: "postcard", sqcm: 320 },
    { object: "credit_card", sqcm: 54 },
    { object: "smartphone_screen", sqcm: 100 },
    { object: "A4_paper", sqcm: 6237 },
    { object: "placemat", sqcm: 3000 },
    { object: "laptop_cover", sqcm: 19600 },
    { object: "cutting_board", sqcm: 15000 },
    { object: "picture_frame", sqcm: 8000 },
    { object: "plate", sqcm: 20106 },
    { object: "mirror", sqcm: 9000 },
    { object: "doormat", sqcm: 40000 },
    { object: "rug", sqcm: 100000 },
    { object: "window", sqcm: 60000 },
    { object: "sofa_seat", sqcm: 30000 },
    { object: "tabletop", sqcm: 50000 },
    { object: "phone_screen_protector", sqcm: 50 },
    { object: "notebook_cover", sqcm: 1800 },
    { object: "CD_cover", sqcm: 142 },
    { object: "chalkboard", sqcm: 20000 },
  ],
  volume: [
    { object: "standard_water_bottle", ml: 500 },
    { object: "coffee_mug", ml: 300 },
    { object: "soup_bowl", ml: 400 },
    { object: "teaspoon", ml: 5 },
    { object: "tablespoon", ml: 15 },
    { object: "wine_glass", ml: 150 },
    { object: "beer_bottle", ml: 330 },
    { object: "juice_box", ml: 200 },
    { object: "pet_bottle_cap", ml: 7 },
    { object: "milk_carton", ml: 250 },
    { object: "oil_jug", ml: 1000 },
    { object: "detergent_bottle", ml: 1500 },
    { object: "measuring_cup", ml: 250 },
    { object: "ice_cream_tub", ml: 500 },
    { object: "takeaway_soup_container", ml: 700 },
    { object: "baby_bottle", ml: 240 },
    { object: "thermos", ml: 750 },
    { object: "paint_can", ml: 1000 },
    { object: "flower_vase", ml: 1200 },
    { object: "fish_tank", ml: 2000 },
    { object: "blender_pitcher", ml: 1500 },
  ],
};

const unit_to_type = {};
const type_to_unit = {};

default_units.forEach((item) => {
  const type = Object.keys(item)[0];
  const unit = Object.values(item)[0];
  unit_to_type[unit] = type;
  type_to_unit[type] = unit;
});

function convertUnit() {
  const value = parseFloat(document.getElementById("valueInput").value);
  const unit = document.getElementById("unitSelect").value;

  const unitType = unit_to_type[unit];
  if (!unitType) {
    document.getElementById("resultOutput").innerText = "Unknown unit.";
    return;
  }

  const options = conversion_data[unitType];
  const randomOption = options[Math.floor(Math.random() * options.length)];

  const conversionFactor = randomOption[unit];
  const objectName = randomOption["object"].replace(/_/g, " ");

  const result = value / conversionFactor;

  document.getElementById(
    "resultOutput"
  ).innerText = `${value} ${unit} is approximately ${result.toFixed(
    2
  )} average ${objectName}.`;
}
