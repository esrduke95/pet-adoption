const pets = [
    { 
    petImage: `<img src="https://i.imgur.com/zj5blnr.jpg"/>`,
    name: 'Oreo',
    petColor: 'Black & White Tuxedo',
    specialSkill: 'can eat an entire can of wet food in under two minutes.',
    petType: 'cat'
    },
    { 
    petImage: `<img src="https://i.imgur.com/9KI8EQI.jpg"/>`,
    name: 'Melllvar',
    petColor: 'white',
    specialSkill: 'will cuddle while watching Futurama or Star Trek',
    petType: 'dog'
    },
    { 
    petImage: `<img src="https://i.imgur.com/DiqoOcF.jpg"/>`,
    name: 'Kathleen',
    petColor: 'yellow & black',
    specialSkill: 'likes to hug you reaaaally tight',
    petType: 'reptile'
    },
    { 
    petImage: `<img src="https://i.imgur.com/WgGRQdL.jpg"/>`,
    name: 'Frankenberry',
    petColor: 'calico',
    specialSkill: 'meows loud enough to be heard across the house',
    petType: 'cat'
    },
    { 
    petImage: `<img src="https://i.imgur.com/VJW8GDg.jpg"/>`,
    name: 'Toddy',
    petColor: 'yellow',
    specialSkill: 'can fit most tennis balls in mouth',
    petType: 'dog'
    },
    { 
    petImage: `<img src="https://i.imgur.com/unQ5ss1.jpg"/>`,
    name: 'Dr. Mundo',
    petColor: 'blue, green, & grey',
    specialSkill: 'can sing all of American Pie',
    petType: 'bird'
    }
]

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const makePetCards = (petCards) => {
    let domString = '';
    console.log('domString', domString);
    for (let j = 0; j < petCards.length; j++) {
        domString += '<div class="pet">';
        domString += `${petCards[j].petImage}`;
        domString += `<div class="petName">${petCards[j].name}</div>`;
        domString += `<strong>Color: ${petCards[j].petColor}</strong>`;
        domString += `<div>Special Skill: ${petCards[j].specialSkill}</div>`;
        domString += `<div>Type: ${petCards[j].petType}</div>`;
        domString += '</div>';
    }

    printToDom('pets', domString)
};

const init = () => {
    makePetCards(pets);
}

init();