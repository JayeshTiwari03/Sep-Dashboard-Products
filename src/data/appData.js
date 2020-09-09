export const pieChartData = [
  { foodType: "WheyIsolate", availableInstock: 20 },
  { foodType: "Creatine", availableInstock: 10 },
  { foodType: "FishOil", availableInstock: 12 },
  { foodType: "MultiVitamin", availableInstock: 18 },
  { foodType: "BCAA", availableInstock: 15 },
  { foodType: "Coffee", availableInstock: 15 },
];

//inventory percentage of available products
//Nutrition products
//foodType; availableInstock

export const barChartQ4Months = ["October", "November", "December"];

export const barChartMonthlyPercentages = [
  { name: "Beverages", data: [14, 16, 19.5] },
  { name: "Condiments", data: [24, 23.5, 24.5] },
  { name: "Produce", data: [12.5, 12.5, 14] },
  { name: "Meat/Poultry", data: [16, 18, 17] },
  { name: "Seafood", data: [21.5, 20, 17] },
  { name: "Other", data: [7, 12, 11] },
];

//quarter wise inventory details


export const gridData = [
    {
        "ProductID": 1,
        "ProductName": "WheyIsolate",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "10 boxes x 20 bags",
        "UnitPrice": 18,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        },
        "FirstOrderedOn": new Date(1996, 8, 20)
    },
    {
        "ProductID": 2,
        "ProductName": "Creatine",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 19,
        "UnitsInStock": 17,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        },
        "FirstOrderedOn": new Date(1996, 7, 12)
    },
    {
        "ProductID": 3,
        "ProductName": "FishOil",
        "SupplierID": 1,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 550 ml bottles",
        "UnitPrice": 10,
        "UnitsInStock": 13,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        },
        "FirstOrderedOn": new Date(1996, 8, 26)
    },
    {
        "ProductID": 4,
        "ProductName": "MultiVitamins",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "48 - 6 oz jars",
        "UnitPrice": 22,
        "UnitsInStock": 53,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        },
        "FirstOrderedOn": new Date(1996, 9, 19)
    },
    {
        "ProductID": 5,
        "ProductName": "BCAAs",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "36 boxes",
        "UnitPrice": 21.35,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        },
        "FirstOrderedOn": new Date(1996, 7, 17)
    },
    {
        "ProductID": 6,
        "ProductName": "Coffee",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 8 oz jars",
        "UnitPrice": 25,
        "UnitsInStock": 120,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        },
        "FirstOrderedOn": new Date(1996, 9, 19)
    },
    {
        "ProductID": 7,
        "ProductName": "Ashwagandha",
        "SupplierID": 3,
        "CategoryID": 7,
        "QuantityPerUnit": "12 - 1 lb pkgs.",
        "UnitPrice": 30,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        },
        "FirstOrderedOn": new Date(1996, 7, 22)
    },
    {
        "ProductID": 8,
        "ProductName": "VitaminC",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 12 oz jars",
        "UnitPrice": 40,
        "UnitsInStock": 6,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        },
        "FirstOrderedOn": new Date(1996, 11, 1)
    },
  ];

  export const panelBarData = {
    'teammates': [
      {
        firstName: 'Rakesh',
        lastName: 'Singh',
        position: 'Team Lead'
      }, {
        firstName: 'Drew',
        lastName: 'Barrymore',
        position: 'Sales Associate'
      }, {
        firstName: 'Robert',
        lastName: 'Anthony',
        position: 'Business System Analyst'
      }, {
        firstName: 'Britt',
        lastName: 'Baker',
        position: 'Accounting Manager'
      }, {
        firstName: 'Steve',
        lastName: 'Curry',
        position: 'Sales Agent'
      }, {
        firstName: 'John',
        lastName: 'Ring',
        position: 'Sales Manager'
      }
    ],
    'salesReports': [
      {
        title: 'Q1 Report',
      }, {
        title: 'Q2 Report',
      }, {
        title: 'Q3 Report',
      }, {
        title: 'Q4 Report',
      }
    ]
  }