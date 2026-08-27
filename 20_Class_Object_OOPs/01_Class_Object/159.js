class Car{
    // constructor(){
    //  // Default Conscutor
    // }

    // Param
    constructor(assigned_name){
        this.name = assigned_name;
    }
}

let hyndai_i10 = new Car("i10");
console.log(hyndai_i10.name);

let hyndai_create = new Car("creta");
console.log(hyndai_create.name);



const a = new Car("i11");     // constructor runs → "i10"
const b = new Car("Nexon");

// class Bad { constructor(a) {} constructor(b) {} }

class Bike {}
new Bike();   // Bike {}  — works fine, just has nothing in it