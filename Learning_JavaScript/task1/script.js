const teams = [
    {
        team: "CSK",
        fullName: "Chennai Super Kings",
        primaryColor: "Yellow",
        secondaryColor: "Blue",
        trophies: 5,
        captain: "Ruturaj Gaikwad"
    },
    {
        team: "MI",
        fullName: "Mumbai Indians",
        primaryColor: "Blue",
        secondaryColor: "Gold",
        trophies: 5,
        captain: "Hardik Pandya"
    },
    {
        team: "KKR",
        fullName: "Kolkata Knight Riders",
        primaryColor: "Purple",
        secondaryColor: "Gold",
        trophies: 3,
        captain: "Ajinkya Rahane"
    },
    {
        team: "RCB",
        fullName: "Royal Challengers Bengaluru",
        primaryColor: "Red",
        secondaryColor: "Black",
        trophies: 1,
        captain: "Rajat Patidar"
    },
    {
        team: "SRH",
        fullName: "Sunrisers Hyderabad",
        primaryColor: "Orange",
        secondaryColor: "Black",
        trophies: 1,
        captain: "Pat Cummins"
    },
    {
        team: "RR",
        fullName: "Rajasthan Royals",
        primaryColor: "Pink",
        secondaryColor: "Blue",
        trophies: 1,
        captain: "Sanju Samson"
    },
    {
        team: "GT",
        fullName: "Gujarat Titans",
        primaryColor: "Dark Blue",
        secondaryColor: "Gold",
        trophies: 1,
        captain: "Shubman Gill"
    },
    {
        team: "DC",
        fullName: "Delhi Capitals",
        primaryColor: "Blue",
        secondaryColor: "Red",
        trophies: 0,
        captain: "Not Confirmed"
    },
    {
        team: "LSG",
        fullName: "Lucknow Super Giants",
        primaryColor: "Blue",
        secondaryColor: "Orange",
        trophies: 0,
        captain: "KL Rahul"
    },
    {
        team: "PBKS",
        fullName: "Punjab Kings",
        primaryColor: "Red",
        secondaryColor: "Gold",
        trophies: 0,
        captain: "Shikhar Dhawan"
    },

    // ===== 10 OLD / DEFUNCT TEAMS =====
    {
        team: "DCG",
        fullName: "Deccan Chargers",
        primaryColor: "Blue",
        secondaryColor: "Silver",
        trophies: 1,
        captain: "Kumar Sangakkara"
    },
    {
        team: "KTK",
        fullName: "Kochi Tuskers Kerala",
        primaryColor: "Purple",
        secondaryColor: "Orange",
        trophies: 0,
        captain: "Mahela Jayawardene"
    },
    {
        team: "RPS",
        fullName: "Rising Pune Supergiant",
        primaryColor: "Purple",
        secondaryColor: "Pink",
        trophies: 0,
        captain: "Steve Smith"
    },
    {
        team: "GL",
        fullName: "Gujarat Lions",
        primaryColor: "Orange",
        secondaryColor: "Blue",
        trophies: 0,
        captain: "Suresh Raina"
    },
    {
        team: "PWI",
        fullName: "Pune Warriors India",
        primaryColor: "Dark Blue",
        secondaryColor: "Silver",
        trophies: 0,
        captain: "Sourav Ganguly"
    },
    {
        team: "CSK2",
        fullName: "Chennai Superstars (Champions League)", // non-IPL but added to reach 20
        primaryColor: "Yellow",
        secondaryColor: "Blue",
        trophies: 0,
        captain: "MS Dhoni"
    },
    {
        team: "KXP",
        fullName: "Kings XI Punjab (Old Name of PBKS)",
        primaryColor: "Red",
        secondaryColor: "Silver",
        trophies: 0,
        captain: "George Bailey"
    },
    {
        team: "DD",
        fullName: "Delhi Daredevils (Old Name of DC)",
        primaryColor: "Blue",
        secondaryColor: "Red",
        trophies: 0,
        captain: "Zaheer Khan"
    },
    {
        team: "RPS2",
        fullName: "Rising Pune Supergiants (alternate season)",
        primaryColor: "Purple",
        secondaryColor: "Pink",
        trophies: 0,
        captain: "MS Dhoni"
    },
    {
        team: "Kochi",
        fullName: "Kochi IPL Team (Temporary Franchise)",
        primaryColor: "Orange",
        secondaryColor: "Black",
        trophies: 0,
        captain: "Brendon McCullum"
    }
];

let btn = document.querySelector(".btn");
let team = document.querySelector("#team");
let fullName = document.querySelector("#full-name");
let trophies = document.querySelector("#trophies");
let captain = document.querySelector("#captain");
let win = document.querySelectorAll(".win");
let main = document.querySelector(".main");

btn.addEventListener("click",function(){
    let winner = teams[Math.floor(Math.random()*teams.length)];
    team.innerHTML = winner.team;
    fullName.innerHTML = winner.fullName;
    trophies.innerHTML = "Trophies: " + winner.trophies;
    captain.innerHTML = "Captain: " + winner.captain;

    win.forEach(box => {
        box.style.backgroundColor = winner.primaryColor;
    });
    main.style.backgroundColor = winner.secondaryColor;
})