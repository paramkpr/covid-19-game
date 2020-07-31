maze = {
    1: [2, 3, 4],
    2: [5, 6, 3],
    3: [2, 4, 6],
    4: [5, 7, 2],
    5: [12, 11, 3],
    6: [12, 8, 5],
    7: [11, 2],
    8: [9, 6, 3],
    9: [5, 4, 10],
    10: [],
    11: [8, 12],
    12: [7, 6]
}

situations = {1: `You are in a field with three doors.One to your right, one to your left, and one right in front of you. The game is simple: Each door will hold an option. Choose your doors carefully, keeping in mind everything you should do to protect yourself from COVID-19. Every door you choose will take you to a different location. If you end up at the same location twice, you may have chosen a wrong covid-19 prevention measure. Have fun in the maze! To start, open one door.`,
              2: `You are in a grocery store with three store rooms. The first room contains masks, the second room contains gloves, and the third room contains sanitisers. Choose the door you wish to open in order to stock up on the most important protection. What is the protection you choose?`,
              3: `You are in a movie theatre with three exits.All the seats are full except one- specially reserved for you- located in a crowded VIP Lounge.The first exit will take you to the VIP Lounge, the second exit will take you to a private screening, and the third exit will take you to the candy store to get you some extra snacks for the movie. Where do you wish to go?`,
              4: `You are in an abandoned warehouse with three doors. You now have a fever and face difficuty in breathing. There are three garage doors.The first will take you straight home to your bed, the second will take you to the hospital for a checkup, and the third will take you to the pharmacy to purchase drugs for self medication. Where are you going?`,
              5: `You are in a hospital to meet a doctor. There are three seperate waiting rooms. The first waiting room is air conditioned, the second one has fans but no windows, and the third has fans and open windows. It's sweltering hot outside. Which door will you open?`,
              6: `You are in a school with your friends. The first door will take you to a football field, the second door will take you to a wrestling ring and the third room will lead you to a badminton court. Which door will you open to play the safest game(having least body contact)?`,
              7: `You are in an office. You just realised that you forgot your latex gloves at home and need to clean your hands.The first door will lead you to alcohol based sanitisers and the second door will lead you to herbal sanitisers. Which door do you open?`,
              8: `You are in a playground. `,
              9: `You are in an opera house. A circus jester is offering you two free tickets on one condition: you must wash your hands for the advised period of time. For how many seconds will you wash your hands?
                  DOOR A) 10 Seconds
                  DOOR B) 30 Seconds
                  DOOR C) 20 Seconds`,
              10: `You made it!`,
              11: `You are at an underground train station. You must catch a train to visit a sick relative. The first door will open a crowded train with healthy passengers and the second door will open a relatively empty train with sick passengers. Which train would be the safest choice?`,
              12: `You are in a circus. The magician asks for your help to perform a trick. You oblige. What is the safest distance from which you can help the magician with his trick?
                    DOOR A) 1 Meter
                    DOOR B) 2 Meters`
}


choices = {1: {2: ["Door A", "A"],
               3: ["Door B", "B"],
               4: ["Door C", "C"]},
           2: {5: ["Door A", "A"],
               6: ["Door B", "B"],
               3: ["Door C", "C"]},
           3: {2: ["Door A", "A"],
               4: ["Door B", "B"],
               6: ["Door C", "C"]},
           4:{5: ["Door A", "A"],
              7: ["Door B", "B"],
              2: ["Door C", "C"]},
           5:{12: ["Door A", "A"],
              11: ["Door B", "B"],
              3: ["Door C", "C"]},
           6:{12: ["Door A", "A"],
              8: ["Door B", "B"],
              5: ["Door C", "C"]},
           7:{11: ["Door A", "A"],
              2: ["Door B", "B"]},
           8:{9: ["Door A", "A"],
              6: ["Door B", "B"],
              3: ["Door C", "C"]},
           9:{5: ["Door A", "A"],
              4: ["Door B", "B"],
              10: ["Door C", "C"]},
           10: {},
           11:{8: ["Door A", "A"],
               12: ["Door B", "B"]},
           12:{7: ["Door A", "A"],
               6: ["Door B", "B"]}}

console.log("Loaded")

function items(obj) {
    let i, arr = [];
    for(i in obj) {
        arr.push([i, obj[i]])
    }
    return arr
}

function take_input(position, choices) {
    let c = {}
    let a = items(choices[position])
    for (let i=0; i<a.length; i++) {
        c[a[i][1][1]] = a[i][0]
    }
    console.log(c)

    $("#door0").click(function () {
        player_position = c['A'];
        console.log(player_position);
        interface(player_position, choices);
    });
    $("#door1").click(function () {
        player_position = c['B'];
        console.log(player_position);
        interface(player_position, choices);
    });
    $("#door2").click(function () {
        player_position = c['C'];
        console.log(player_position);
        interface(player_position, choices);
    })        

    return 'none';
}


function interface(position, choices) {
    if (position === 10) {
        console.log('You win')
    }
    console.log(position)

    take_input(position, choices)

    $('#situation_number').html(position)
    $('#situation_text').html(situations[position])
    console.log(situations[position]);
    
}

interface(1, choices)
take_input(1, choices)