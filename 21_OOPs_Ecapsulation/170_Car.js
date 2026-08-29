class Car {
        #engine; // #private
        constructor(name, engineName) {
        this.name = name;
        this.#engine = engineName;
    }
    getEngine() {
        return this.#engine;
    }
    setEngine(nameEngine) {
        this.#engine = nameEngine;
    }


}

let tesla = new Car("Tesla", "V8");
console.log(tesla.getEngine());
tesla.setEngine("V9");
console.log(tesla.getEngine());
