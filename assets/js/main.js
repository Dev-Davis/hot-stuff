console.log('Hi Mom!');

const printToDom = (divId, textToPrint) => {
    selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
}

const flavors = [
    {
        original: "Original: All the flavor without the heat",
        lilSpice: "Lil Spice: Just enough kick to wake up your taste buds", 
        mild: "Mild: Spicy bold flavor",
        medium: "Medium: Big bold flavor that makes you want to sing",
        hot: "Hot: Kick ass flavor with all the burn",
        xHot: "X-Hot: Call the fire department",
        cajun: "Cajun: Spicy dry rub flavor",
        lemonPepper: "Lemon Pepper: Zesty lemon kick",
        sweetHeat: "Sweet Heat: Sweer BBQ flavor with just enough heat"
    }
];

const appetizers = [
    {
        sideSalad: "Side Salad: 2.79",
        onionRings: "Onion Rings: 2.79",
        baconCheddarFries: "Bacon Cheddar Fries: 2.79",
        loadedChickenFries: "Loaded Chicken Fries: 3.99",
        friedPickles: "Fried Pickles: 2.79"
    }
];

const aLaCarte = [
    {
        breastQuarter: "Breast Quarter: 5.49",
        legQuarter: "Leg Quarter: 4.49",
        fishSandwich: "Fish Sandwich - 2 pc filet: 4.99",
        giantFishSandwich: "Giant Fish Sandwich - 3 pc filet: 6.49"
    }
];

const salads = [
    {
        houseSalad: "Regular Salad (No chicken): 4.99",
        chickenSalad: "Chicken Salad (grilled or fried): 6.99",
        specialtySalad: "Specialty Chicken Salad; ",
        dressing: "Dressing: Ranch, Blue Cheese, Honey Mustard or Famous Vinaigrette",
        description1: "Cheese, cucumbers, cherry tomatoes, & crutons",
        description2: "All the above + mandarin oranges, pecans & crutons",
        saladExtras: "add Bacon + Onion: 0.50",
    }
];

const wings = [
    {
        wings1: "5 wings: 4.99",
        wings2: "10 wings: 7.99",
        wings3: "20 wings: 14.99",
        wings4: "50 wings: 36.99",
        wings5: "100 wings: 72.99",
    }
];

const chickenFishCombo = [
    {
        combo1: "3 wings/ 1 fish/ 1 side: 5.99",
        combo2: "2 tenders / 1 fish/ 1 side: 5.99",
        combo3: "Shrimp Basket: 8.99",
        combo4: "5 wings and 1 fish: 5.99",
        combo5: "3 tenders and 1 fish 5.99",
        description1: "Mustard, onions, pickles, tartar sauce & hot sauce",
        description2: "All you eat fish every Sunday",
        extra: "add cheese: 0.50"
    }
];

const tenders = [
    {
        tend1: "3 tenders: 4.29",
        tend2: "6 tenders: 7.99",
        tend3: "12 tenders: 14.99",
        tend4: "24 tenders: 28.99",
        tend5: "60 tenders: 67.99",
    }
];

const familyPacks = [
    {
        pack1: "20 wings, 4 pc fish and 2 lg sides: 27.99",
        pack2: "12 tenders, 4 pc fish, and 2 lg sides: 27.99",
        pack3: "1 whole chicken and 2 lg sides: 21.99"
    }
];

const sides = [
    {
        side1: "French Fries / Baked Potatoes: 1.99",
        side2: "Baked Potato / Cole Slaw / Potato Salad: 1.99",
        side3: "Collard Greens / Mac & Cheese: 1.99"
    }
];

const kidsMeals = [
    {
        meal1: "Grilled Cheese: 2.99",
        meal2: "1 pc chicken tender: 2.99",
        meal3: "1 pc fish filet: 3.99",
        mealIncludes: "all kids meals include 1 side and a 12oz drink"
    }
];

const drinks = [
    {
        drink1: "Famous Fruit Tea: 24oz: 1.99 or 1Gal: 4.99",
        drink2: "Homemade Lemonade: 24oz: 1.99 or 1Gal: 4.99 ",
        drink3: "Soft Drink: 12oz: 0.99 or 24oz: 1.79",
        softOptions: "Coke, Sprite, Orange Fanta, Dr. Pepper or Fruit Punch"
    }
];

// const prices = [
//     {
//         price1: "$0.50",
//         price2: "$0.99"
//         price3: "$1.79"
//         price4: "$2.79",
//         price5: "$2.99"
//         price6: "$3.99",
//         price7: "$4.29",
//         price8: "$4.49",
//         price9: "$4.99",
//         price10: "$5.49",
//         price11: "$5.99",
//         price12: "$6.49",
//         price13: "$6.99",
//         price14: "$7.99",
//         price15: "$8.99",
//         price16: "$14.99",
//         price17: "$21.99"
//         price18: "$27.99",
//         price19: "$28.99",
//         price20: "$36.99",
//         price21: "$67.99",
//         price22: "$72.99",
//     }
// ];

const storeHours = [
    {

    }
];

const flavChoices = () => {

    let rub = '';

    for(let i = 0; i < flavors.length; i++) {
        rub += `<div>`
        rub += `<h1>Spices!</h1>`
        rub += `<h4>${flavors[i].original}</h4>`
        rub += `<h4>${flavors[i].lilSpice}</h4>`
        rub += `<h4>${flavors[i].mild}</h4>`
        rub += `<h4>${flavors[i].medium}</h4>`
        rub += `<h4>${flavors[i].hot}</h4>`
        rub += `<h4>${flavors[i].xHot}</h4>`
        rub += `<h4>${flavors[i].cajun}</h4>`
        rub += `<h4>${flavors[i].lemonPepper}</h4>`
        rub += `<h4>${flavors[i].sweetHeat}</h4>`
        rub += `</div>`
    } 
    printToDom('flavors', rub);
}

const apps = () => {
    
    let tizers = '';

    for(let i = 0; i < appetizers.length; i++) {
        tizers += `<div class="app">`
        tizers += `<h2>Appetizers!</h2>`
        tizers += `<p>${appetizers[i].sideSalad}</p>`
        tizers += `<p>${appetizers[i].onionRings}</p>`
        tizers += `<p>${appetizers[i].baconCheddarFries}</p>`
        tizers += `<p>${appetizers[i].loadedChickenFries}</p>`
        tizers += `<p>${appetizers[i].friedPickles}</p>`
        tizers += `</div>`
    }
    printToDom('appetize', tizers);
}

const laCarte = () => {

    let mainFillers = '';

    for(let i = 0; i < aLaCarte.length; i++) {
        mainFillers += `<div class="aLa">`
        mainFillers += `<h2>aLaCarte!</h2>`
        mainFillers += `<p>${aLaCarte[i].breastQuarter}</p>`
        mainFillers += `<p>${aLaCarte[i].legQuarter}</p>`
        mainFillers += `<p>${aLaCarte[i].fishSandwich}</p>`
        mainFillers += `<p>${aLaCarte[i].giantFishSandwich}</p>`
        mainFillers += `</div>`
    }
    printToDom('carte', mainFillers);
}

const gardenBowls = () => {
     let lettuces = '';

     for(let i = 0; i < salads.length; i++) {
         lettuces += `<div class="sals">`
         lettuces += `<h2>Salads!</h2>`
         lettuces += `<p>${salads[i].houseSalad}</p>`
         lettuces += `<h4>${salads[i].description1}</h4>`
         lettuces += `<p>${salads[i].chickenSalad}</p>`
         lettuces += `<h4>${salads[i].description1}</h4>`
         lettuces += `<p>${salads[i].specialtySalad}</p>`
         lettuces += `<h4>${salads[i].description2}</h4>`
         lettuces += `<p>${salads[i].dressing}</p>`
         lettuces += `<p>${salads[i].saladExtras}</p>`
         lettuces += `</div>`
     }
     printToDom('ensaladas', lettuces);
}

const wingIt = () => {
    let wingz = '';

    for(let i = 0; i < wings.length; i++) {
        wingz += `<div class="wngs">`
        wingz += `<h2>Wings!</h2>`
        wingz += `<p>${wings[i].wings1}</p>`
        wingz += `<p>${wings[i].wings2}</p>`
        wingz += `<p>${wings[i].wings3}</p>`
        wingz += `<p>${wings[i].wings4}</p>`
        wingz += `<p>${wings[i].wings5}</p>`
        wingz += `</div>`
    }
    printToDom('wingers', wingz);
}

const chickTenders = () => {
    let tendz = '';

    for(let i = 0; i < tenders.length; i++) {
        tendz += `<div class="tens">`
        tendz += `<h2>Chicken Tenders!</h2>`
        tendz += `<p>${tenders[i].tend1}</p>`
        tendz += `<p>${tenders[i].tend2}</p>`
        tendz += `<p>${tenders[i].tend3}</p>`
        tendz += `<p>${tenders[i].tend4}</p>`
        tendz += `<p>${tenders[i].tend5}</p>`
        tendz += `</div>`
    }
    printToDom('chickenTenders', tendz)
}

const polloYpiscado = () => {
    let cnf = '';

    for(let i = 0; i < chickenFishCombo.length; i++) {
        cnf += `<div class="chicksnfish">`
        cnf += `<h2>Chicken and Fish Combos!</h2>`
        cnf += `<p>${chickenFishCombo[i].combo1}</p>`
        cnf += `<p>${chickenFishCombo[i].combo2}</p>`
        cnf += `<p>${chickenFishCombo[i].combo3}</p>`
        cnf += `<p>${chickenFishCombo[i].description1}</p>`
        cnf += `<p>${chickenFishCombo[i].extra}</p>`
        cnf += `<p>${chickenFishCombo[i].combo4}</p>`
        cnf += `<p>${chickenFishCombo[i].combo5}</p>`
        cnf += `<p>${chickenFishCombo[i].description2}</p>`
        cnf += `</div>`
    }
    printToDom('chickNfish', cnf);
}

const famPacks = () => {
    let famDeals = '';

    for(let i =0; i < familyPacks.length; i++) {
        famDeals += `<div class="famPax">`
        famDeals += `<h2>Family Packs!</h2>`
        famDeals += `<p>${familyPacks[i].pack1}</p>`
        famDeals += `<p>${familyPacks[i].pack2}</p>`
        famDeals += `<p>${familyPacks[i].pack3}</p>`
        famDeals += `</div>`
    }
    printToDom('famMeals', famDeals);
}

const sideItems = () => {
    let setSides = '';

    for(let i = 0; i < sides.length; i++) {
        setSides += `<div>`
        setSides += `<h2>Sides!</h2>`
        setSides += `<p>${sides[i].side1}</p>`
        setSides += `<p>${sides[i].side2}</p>`
        setSides += `<p>${sides[i].side3}</p>`
        setSides += `</div>`
    }
    printToDom('sideDish', setSides);
}



init = () => {
    flavChoices();
    apps();
    laCarte();
    gardenBowls();
    wingIt();
    chickTenders();
    polloYpiscado();
    famPacks();
    sideItems();
}
init();