const sample=require("./foodchart.json")
// Task 1 -list all the food items
const allfooditems=sample.filter(x=>x.foodname);
 console.table(allfooditems);

// Task 2-list all the food items with the category vegetables
const veg=sample.filter(x=>x.category==="Vegetable");
console.table(veg);

// Task -3 list all the food items with the category Fruit
const fruit=sample.filter(x=>x.category==="Fruit");
 console.table(fruit);

// Task -4 List all the food items with the category Protein
const protein=sample.filter(x=>x.category==="Protein")
 console.table(protein);

//Task-5 List all the food items with the category Nuts 
const deeznuts=sample.filter(x=>x.category==="Nuts")
 console.table(deeznuts);

//Task -6 List all the foood items with the category grains 
const grains=sample.filter(x=>x.category==="Grain")
 console.table(grains);

// Task -7List all the food items with the category dairy
const dairy=sample.filter(x=>x.category==="Dairy")
console.table(dairy);

// Task-8 List all the food items with the calorie above 100;
const calorie100great=sample.filter(x=>x.calorie>100)
 console.table(calorie100great);

// Task-9 List all the food items with calorie below 100;
const calorie100low=sample.filter(x=>x.calorie<100)
console.table(calorie100low);

// Task 10 List all the food items with highest protein content to the lowest;
sample.sort((a,b)=>b.protiens-a.protiens)
 const upperseniche=sample.filter(x=>x.foodname);
console.table(upperseniche);

// Task 11 List all the food items with lowest carbohydrate content to the highest;
sample.sort((a,b)=>a.cab-b.cab)
 const nicheseupper=sample.filter(x=>x.foodname);
 console.table(nicheseupper)


 

