const mongoose = require('mongoose');
const Product = require('./models/Product');
const dotenv = require('dotenv');

dotenv.config();  // Load MONGODB_URI from .env file

mongoose.connect(process.env.MONGO_URI) 
    .then(async () => {
        console.log('Connected to MongoDB');

        // clear existing data
        await Product.deleteMany();

        // Insert new sample products
        await Product.insertMany([
            {
                name: 'Red Shirt',
                image: '/images/red-shirt.jpg',
                price: 19.99,
                description: 'Stylish red shirt made from cotton.'
            },
           {
                name: 'Khaki Chinos',
                image: '/images/khaki-chinos.jpg',
                price: 39.99,
                description: 'Comfortable khaki chinos for casual wear.'
          },
             {
                name: 'Green Hat',
                image: '/images/green-hat.jpg',
                price: 15.99,
                description: 'Cool green hat for sunny days.'
             },
            {
                name: 'Black Shoes',
                image: '/images/black-shoes.jpg',
                price: 49.99,
                description: 'Stylish black shoes for all occasions.'
    
            },
            {
                name: 'White Socks',
                image: '/images/white-socks.jpg',
                price: 5.99,
                description: 'Comfortable white socks for everyday wear.'
            },
            {
                name: 'Yellow Scarf',
                image: '/images/yellow-scarf.jpg',
                price: 12.99,
                description: 'Warm yellow scarf for chilly weather.'
            },
            {
                name: 'White Sneakers',
                image: '/images/white-sneakers.jpg',
                price: 39.99,
                description: 'Trendy white sneakers for casual outings.'
            },
             {
                name: 'Brown Belt',
                image: '/images/brown-belt.jpg',
                price: 24.99,
                description: 'Classic brown belt made from leather.'
             },
             {
                name: 'Gray Hoodie',
                image: '/images/gray-hoodie.jpg',   
                price: 34.99,
                description: 'Cozy gray hoodie for a relaxed look.'
             }   

    ]);

        console.log('Sample data inserted ✅');
        process.exit();
    })

    .catch(err => {
        console.error('MongoDB connection failed:', err);
        process.exit(1);
});
