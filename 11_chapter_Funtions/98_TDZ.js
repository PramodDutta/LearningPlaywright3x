{
    console.log(a);
    let a = 10;
}

// Enter Block
//  ↓
// a is created ✅
// a has NO value yet ❌
//     ↓
// console.log(a)  ❌ Error (TDZ)
//     ↓
// let a = 10;
//     ↓
// a = 10 ✅