// CODE here for your Lambda Classes


class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructors extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`
    }
    randomGrade(student) {
        let newGrade = student.grade + Math.round((Math.random() - Math.random()) * 100);
        if (newGrade >= 70) {
            return `Congradulations, ${student.name}, you graduated with a ${newGrade}%!`
        } else {
            return `Keep grading ${student.name}'s assignments. The grade is at ${newGrade}%.`
        }
    }
}

class Students extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.grade = attributes.grade;
    }
    listsSubjects(...favSubjects) {
        return `${this.name} enjoys: ${this.favSubjects.join(", ")}.`
    }
    prAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`
    }
}

class ProjectManagers extends Instructors {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(slackChannel) {
        return `${this.name} announces to ${slackChannel}, @channel standy times!`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student}'s code on ${subject}`
    }
}

const danielLaRusso = new Students(
    {
        name: "Daniel LaRusso",
        age: 17,
        location: "Los Angeles",
        gender: "male",
        previousBackground: "Waxing Cars",
        className: "Android Development",
        favSubjects: ["Java", "JavaScript", "CSS", "HTML", "Karate"],
        grade: 70
    }
);

const harryPotter = new Students(
    {
        name: "Harry Potter",
        age: 19,
        location: "4 Privet Drive",
        gender: "male",
        previousBackground: "Seeker",
        className: "iOS Development",
        favSubjects: ["Java", "JavaScript", "CSS", "HTML"],
        grade: 70
    }
);

const mrMiyagi = new Instructors(
    {
        name: "Mr. Miyagi",
        age: 86,
        location: "Los Angeles",
        gender: "male",
        specialty: "karate",
        favLanguage: "javascript",
        catchPhrase: "wax on, wax off"
    }
)

const severusSnape = new Instructors(
    {
        name: "Severus Snape",
        age: 38,
        location: "Slytherin House",
        gender: "male",
        specialty: "Defence Against The Dark Arts",
        favLanguage: "C++",
        catchPhrase: "It may have escaped your notice but life isn't fair."
    }
)

const albusDumbledore = new ProjectManagers(
    {
        name: "Albus Dumbledore",
        age: 150,
        location: "Hogwarts",
        gender: "male",
        specialty: "Defence Against The Dark Arts",
        favLanguage: "Java",
        catchPhrase: "It does not do to dwell on dreams and forget to live.",
        gradClassName: "JavaScript IV",
        favInstructor: "Severus Snape"
    }
)

const jeanLucPicard = new ProjectManagers(
    {
        name: "Jean-Luc Picard",
        age: 78,
        location: "USS Enterprise (NCC-1701-D)",
        gender: "male",
        specialty: "captaining",
        favLanguage: "Java",
        catchPhrase: "It is possible to commit no mistakes and still lose. That is not a weakness. That is life.",
        gradClassName: "JavaScript IV",
        favInstructor: "Mr. Miyagi"
    }
)
//PM
console.log(jeanLucPicard.name);
console.log(jeanLucPicard.age);
console.log(jeanLucPicard.location);
console.log(jeanLucPicard.gender);
console.log(jeanLucPicard.favLanguage);
console.log(jeanLucPicard.catchPhrase);
console.log(jeanLucPicard.favInstructor);
console.log(jeanLucPicard.standUp("@Web_20"));
console.log(jeanLucPicard.debugsCode(harryPotter.name, harryPotter.favSubjects));
console.log(jeanLucPicard.speak());
console.log(jeanLucPicard.randomGrade(harryPotter));

//Instructor
console.log(severusSnape.name);
console.log(severusSnape.age);
console.log(severusSnape.location);
console.log(severusSnape.gender);
console.log(severusSnape.favLanguage);
console.log(severusSnape.catchPhrase);
console.log(severusSnape.demo("CSS"));
console.log(severusSnape.grade(harryPotter, "HTML"));
console.log(severusSnape.speak());
console.log(severusSnape.randomGrade(danielLaRusso));

//Student
console.log(harryPotter.name);
console.log(harryPotter.age);
console.log(harryPotter.location);
console.log(harryPotter.gender);
console.log(harryPotter.previousBackground);
console.log(harryPotter.className);
console.log(harryPotter.favSubjects);
console.log(harryPotter.listsSubjects());
console.log(harryPotter.prAssignment("JavaScript"));
console.log(harryPotter.sprintChallenge("CSS"));
console.log(harryPotter.speak());