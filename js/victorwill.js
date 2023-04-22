// This is a description of my self in vanilla JS.
// Run this code on your browser console.

// Greetings
console.log('%c Hey There!!', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');

// Variable declerations
let interests = ["Dancing", "Anime", "Singing", "Big booty Latinas", "Music", "Finance"];
let intro = "I love building amazing experiences on digital platforms like the web";
let technologies = ["HTML", "CSS", "Javascript", "Figma", "Git", "GitHub", "Photoshop"];
let seniority;
let level = "200 level";

// Switch-case to check my level of academic seniority 

    switch (level){
        case "100 level":
        seniority = "freshman";
        break;
        case "200 level":
        seniority = "sophomore";
        break;
        case "300 level":
        seniority = "junior";
        break;
        case "400 level":
        seniority = "senior";
        break;
        case "500 level":
        seniority = "senior";
        break;
        default:
        seniority = "student";
    }


// Short Introduction
function shortIntro () {
    let fullname = "Victor Williams";
    let course = "Electrical Engineering";
    let aboutMe =  `My name is ${fullname} and ${intro}. I'm currently a ${seniority} here at Covenant University studying ${course}.`;
    return aboutMe;
}

console.log(shortIntro());

// Group interests, skills, and technologies on the console

// Interests    
    console.group("Here are some of the things that interest me:");
    for(let i = 0; i < interests.length; i++) {
    console.log(interests[i]);
    }
    console.groupEnd("Here are some of the things that interest me:");

// Skills
    console.group("This is how I currently rate my skills")
    const skills = [
    { skill: "Frontend Engineering", rating: 6 },
    { skill: "User Interface Design", rating: 8 },
    { skill: "Algorithms and Data Structures", rating: 3 },
    { skill: "Graphic Design", rating: 9.5 },
    ];

    console.table(skills);
    console.groupEnd("This is how I currently rate my skills");

// Technologies
    console.group("Technologies I work with:");
    for(let i = 0; i < technologies.length; i++) {
    console.log(technologies[i]);
    }
    console.groupEnd("Technologies I work with:");




// Just playing around with the console
// I'm sure the entireity of this file could be compressed into shorter and more concise lines of code, but I just wanted to be extra!
// I mean... Why not???

