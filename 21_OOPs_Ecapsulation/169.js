class Person{
        // hide your chids
        #child1;
        #child2;
        // private
    constructor(name, ch1, ch2) {
        this.name = name;
        this.#child1 = ch1
        this.#child2 = ch2;
    }
    getChild1(){
        return this.#child1;
    }

    setChild1(changed_name){
        this.#child1 = changed_name;
    }
}
let p = new Person("Pramod", "Vrad", "Jenny");
// console.log(p.#child1);
console.log(p.getChild1());
p.setChild1("VIRAD");
console.log(p.getChild1());