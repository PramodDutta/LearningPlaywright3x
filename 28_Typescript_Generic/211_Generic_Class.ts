class TestDataStorage<T> {
    private items: T[] = [];
    add(item: T): void {
        this.items.push(item);
    }
    getFirst(): T {
        return this.items[0]!;
    }
    getAll(): T[] {
        return this.items;
    }

    count(): number {
        return this.items.length;
    }
}

let statuscodeStore = new TestDataStorage<number>();
let testNameStore = new TestDataStorage<string>();

statuscodeStore.add(200);
statuscodeStore.add(404);
statuscodeStore.add(500);

testNameStore.add("Login Test");
testNameStore.add("Checkout Test");


console.log("Codes:", statuscodeStore.getAll());
console.log("First code:", statuscodeStore.getFirst());
console.log("Tests:", testNameStore.getAll());
console.log("Test count:", testNameStore.count());