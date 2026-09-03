class Car {
    // Parameterized Constructor
    constructor(assigned_name) {
        this.name = assigned_name;
    }

    eat(){}
}

let hyundai_i10 = new Car("i10");
console.log(hyundai_i10.name);
hyundai_i10.eat();  

let hyundai_creta = new Car("creta");
console.log(hyundai_creta.name);
