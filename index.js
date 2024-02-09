const express = require('express');
const app = express();

const customers = [
    {
        name: "Odis Rhinehart",
        level: "Warga",
        favorite_menu: "Chicken & Ribs Combo",
        total_transaction: "IDR 194,700",
        "Action": "Detail"
    },
    {
        name: "Kris Roher",
        level: "Warga",
        favorite_menu: "Surf & Turf Gift Basket",
        total_transaction: "IDR 631,200",
        "Action": "Detail"
    },
    {
        name: "Serenity Fisher",
        level: "Juragan",
        favorite_menu: "Fried Chicken Dinner",
        total_transaction: "IDR 1,040,920",
        "Action": "Detail"
    },
    {
        name: "Brooklyn Warren",
        level: "Sultan",
        favorite_menu: "Surf & Turf Gift Basket",
        total_transaction: "IDR 730,500",
        "Action": "Detail"
    },
    {
        name: "Franco Delort",
        level: "Juragan",
        favorite_menu: "Chicken & Ribs Combo",
        total_transaction: "IDR 96,000",
        "Action": "Detail"
    },
    {
        name: "Saul Geoghegan",
        level: "Juragan",
        favorite_menu: "Surf & Turf Gift Basket",
        total_transaction: "IDR 256,000",
        "Action": "Detail"
    },
    {
        name: "Alfredo Vetrovs",
        level: "Juragan",
        favorite_menu: "Dark & Stormy",
        total_transaction: "IDR 590,080",
        "Action": "Detail"
    },
    {
        name: "Cristofer Vetrovs",
        level: "Konglomerat",
        favorite_menu: "Shaking Beef Tri-Tip",
        total_transaction: "IDR 782,600",
        "Action": "Detail"
    },
    {
        name: "Calvin Steward",
        level: "Konglomerat",
        favorite_menu: "BBQ Rib Dinner",
        total_transaction: "IDR 467,500",
        "Action": "Detail"
    },
    {
        name: "Calvin Steward",
        level: "Konglomerat",
        favorite_menu: "BBQ Rib Dinner",
        total_transaction: "IDR 467,500",
        "Action": "Detail"
    },
    // Data pelanggan lainnya ...
];


app.get('/customers', (req, res) => {
    res.json(customers);
});

app.get('/customers/:name', (req, res) => {
    const customerName = req.params.name;
    const customer = customers.find(c => c.name === customerName);
    if (!customer) {
        return res.status(404).json({ message: 'Customer not found' });
    }
    res.json(customer);
});

app.listen(5000, () => {
    console.log('Server API berjalan di port 3000');
});