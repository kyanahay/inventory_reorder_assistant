// Inventory Reorder Assistant
//Create and Initialize Variables
const itemName = "Cuticle Oil";

const unitCost = 3.62;
const currentStock = 7;
const reorderLevel = 5;
const targetStock = 30;
const weeklyDemand = 15;
const supplierLeadTimeWeeks = 1;

// Calculate Inventory Metrics

const weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity;

const stockDeficit = Math.max(0, targetStock - currentStock);

const reorderQuantity = (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) : 0;

const estimatedReorderCost = reorderQuantity * unitCost;

const reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks;

// Print to Console 

console.log("Inventory Assistant");

console.log("Item Name:                      " + itemName);
console.log("Weeks of Cover:                 " + weeksOfCover.toFixed(2));
console.log("Reorder Now?                    " + reorderNow);
console.log("Recommended Reorder Quantity:   " + reorderQuantity);
console.log("Estimated Reorder Cost:         $" + estimatedReorderCost.toFixed(2));
