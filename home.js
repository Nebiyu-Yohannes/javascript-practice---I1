// objects, classes, instances and constructors

class Animal{
    
    constructor(name, age, sex, type){
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.Type = type;
    }

    info(){
        return `This animal is ${this.name} and it is a ${this.Type}`;
}

}

const Animal1 = new Animal('Dog', 7, 'Male', 'Mammal');

const Animal2 = new Animal('Cat', 4, 'Female', 'Mammal');

const Animal3 = new Animal('Eagle', 3, 'Male', 'Bird');

const Animal4 = new Animal('Human', 75, 'Male', 'Mammal');



console.log(Animal1.info());
console.log(.info());
console.log(.info());
console.log(.info());
