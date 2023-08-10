// objects, classes, instances and constructors

class Animal{
    
    constructor(name, age, sex, type){
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.Type = type;
    }

    info(){
        return "This animal is " ${this.age} "and, it is " ${Type};
    }

}


const Dog = new Animal('Dog', 7, 'male', 'mammal')

console.log(Dog)
console.log(Dog.Type)
console.log(Dog.info())

