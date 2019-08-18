// CODE here for your Lambda Classes
class Person{
    constructor (baseAttr){
        this.name = baseAttr.name;
        this.age = baseAttr.age;
        this.location = baseAttr.location;
    }
    speak(){
        return `Hello, my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person{
    constructor (teachAttr){
        super (teachAttr);
        this.specialty = teachAttr.specialty;
        this.favLanguage = teachAttr.favLanguage;
        this.catchPhrase = teachAttr.catchPhrase;
        
    }
    demo (subject){
        return `Today, we are going to learn ${subject}.`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}.`;
    }
    fixGrade(student){
        let points = Math.round(Math.random()*100);
        if (student.grade >= 100){
            student.grade -= points;
            return `${points} have been deducted from ${student.name}'s grade. ${student.name}'s grade is now ${student.grade}.`;
        } else{
            student.grade += points;
            return `${points} points have been added to ${student.name}'s grade. ${student.name}'s grade is now ${student.grade}.`;
        }
    }
}

class Student extends Person{
    constructor (learnAttr){
        super (learnAttr);
        this.previousBackground = learnAttr.previousBackground;
        this.className = learnAttr.className;
        this.favSubjects = learnAttr.favSubjects;
        this.grade = learnAttr.grade;
    }
    listsSubjects(){
        console.log (`My favorite subjects are:`);
        this.favSubjects.forEach(item => console.log(item));
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
    graduate(){
        if (this.grade > 70) {
            return `${this.name} has graduated with a final grade of ${this.grade}!`;
        } else {
            let diff = 5 - this.grade;
            this.grade += diff;
            return `After careful review of all work, ${diff} points were added and ${this.name} has graduated with a final grade of ${this.grade}.`;
        }
    }
}

class TeamLead extends Instructor{
    constructor (leadAttr){
        super (leadAttr);
        this.gradClassName = leadAttr.gradClassName;
        this.favInstructor = leadAttr.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel stand up time!`;        
    }
    debugs(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const pace = new Instructor({
    name: "Pace",
    location: "Sunny, Cali",
    age: 28,
    gender: "male",
    favLanguage: "JavaScript",
    specialty: "Front-end",
    catchPhrase: "handy-dandy"
});

const dan = new Instructor({
    name: "Dan",
    location: "San Diego",
    age: 30,
    gender: "male",
    favLanguage: "Python",
    specialty: "Front-end",
    catchPhrase: "no worries"
});

const gina = new TeamLead({
    name: "Gina",
    location: "Denver",
    age: 27,
    gender: "female",
    favLanguage: "JavaScript",
    specialty: "Full Stack",
    catchPhrase: "you got this!",
    favInstructor: "Josh Knell",
    gradClassName: "Web12",
});

const nathan = new TeamLead({
    name: "Nathan",
    location: "Denver",
    age: 27,
    gender: "male",
    favLanguage: "JavaScript",
    specialty: "front-end",
    catchPhrase: "keep going, keep pushing",
    favInstructor: "Pace Ellsworth",
    gradClassName: "Web9",
});

const courtney = new Student({
    name: "Courtney",
    location: "New Jersey",
    age: "don't be rude",
    gender: "female",
    favLanguage: "JavaScript",
    grade: 100,
    favSubjects: ["JavaScript", "science"]
});

const aleesha = new Student ({
    name: "Aleesha",
    location: "USA",
    age: 22,
    gender: "female",
    favLanguage: "JavaScript",
    grade: 100,
    favSubjects: ["CSS", "JavaScript"]
});

console.log(gina.speak());
console.log(nathan.favInstructor);
console.log(gina.standUp("WebPT9"));
//console.log(aleesha.listsSubjects());
console.log(courtney.PRAssignment("CSS Sprint Challenge"));
console.log(pace.demo("JavaScript"));
console.log(nathan.debugs(courtney, "FlexBox"));
console.log(gina.grade(courtney,"flexbox"));
console.log(aleesha.graduate());
console.log(gina.fixGrade(courtney, "css"));
console.log(nathan.catchPhrase);
console.log(courtney.graduate());