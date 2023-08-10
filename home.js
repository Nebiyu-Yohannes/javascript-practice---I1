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

const Animal1 = new Animal('Dog', 7, 'male', 'Mammal');

const Animal2 = new Animal('Cat', 4, 'female', 'Mammal');

const Animal3 = new Animal('Eagle', 3, 'male', 'Bird');

const Animal4 = new Animal('Human', 75, 'male', 'Mammal');

console.log(Dog);
console.log(Dog.Type);
console.log(Dog.info());


