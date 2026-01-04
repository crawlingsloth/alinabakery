// Product catalog - stored locally
const products = [
    // Artisan Breads
    {
        id: 1,
        name: "Sourdough Loaf",
        category: "breads",
        price: 8.50,
        description: "Classic artisan sourdough with a crispy crust and tangy flavor",
        emoji: "🥖"
    },
    {
        id: 2,
        name: "Whole Wheat Bread",
        category: "breads",
        price: 7.00,
        description: "Hearty whole wheat bread, perfect for sandwiches",
        emoji: "🍞"
    },
    {
        id: 3,
        name: "Baguette",
        category: "breads",
        price: 5.50,
        description: "Traditional French baguette with a golden crust",
        emoji: "🥖"
    },
    {
        id: 4,
        name: "Multigrain Loaf",
        category: "breads",
        price: 7.50,
        description: "Nutritious blend of seeds and grains",
        emoji: "🌾"
    },
    {
        id: 5,
        name: "Ciabatta",
        category: "breads",
        price: 6.50,
        description: "Italian-style bread with an airy texture",
        emoji: "🥖"
    },
    {
        id: 6,
        name: "Rye Bread",
        category: "breads",
        price: 8.00,
        description: "Dense and flavorful rye bread",
        emoji: "🍞"
    },

    // Pastries & Cakes
    {
        id: 7,
        name: "Butter Croissant",
        category: "pastries",
        price: 4.50,
        description: "Flaky, buttery layers of perfection",
        emoji: "🥐"
    },
    {
        id: 8,
        name: "Pain au Chocolat",
        category: "pastries",
        price: 5.00,
        description: "Croissant with rich chocolate filling",
        emoji: "🥐"
    },
    {
        id: 9,
        name: "Almond Croissant",
        category: "pastries",
        price: 5.50,
        description: "Croissant filled with almond cream and topped with sliced almonds",
        emoji: "🥐"
    },
    {
        id: 10,
        name: "Apple Danish",
        category: "pastries",
        price: 4.75,
        description: "Sweet pastry with cinnamon apples",
        emoji: "🍎"
    },
    {
        id: 11,
        name: "Cinnamon Roll",
        category: "pastries",
        price: 5.25,
        description: "Soft, gooey cinnamon roll with cream cheese frosting",
        emoji: "🌀"
    },
    {
        id: 12,
        name: "Custom Cake (6\")",
        category: "pastries",
        price: 35.00,
        description: "Personalized 6-inch cake - contact us for flavors and designs",
        emoji: "🎂"
    },
    {
        id: 13,
        name: "Custom Cake (8\")",
        category: "pastries",
        price: 50.00,
        description: "Personalized 8-inch cake - contact us for flavors and designs",
        emoji: "🎂"
    },
    {
        id: 14,
        name: "Cupcakes (6-pack)",
        category: "pastries",
        price: 18.00,
        description: "Assorted gourmet cupcakes",
        emoji: "🧁"
    },
    {
        id: 15,
        name: "Fruit Tart",
        category: "pastries",
        price: 6.50,
        description: "Buttery tart shell with vanilla cream and fresh fruit",
        emoji: "🥧"
    },

    // Cookies & Treats
    {
        id: 16,
        name: "Chocolate Chip Cookies (6-pack)",
        category: "cookies",
        price: 12.00,
        description: "Classic cookies with Belgian chocolate chips",
        emoji: "🍪"
    },
    {
        id: 17,
        name: "Double Chocolate Cookies (6-pack)",
        category: "cookies",
        price: 12.00,
        description: "Rich chocolate cookies with chocolate chunks",
        emoji: "🍪"
    },
    {
        id: 18,
        name: "Oatmeal Raisin Cookies (6-pack)",
        category: "cookies",
        price: 11.00,
        description: "Chewy oatmeal cookies with plump raisins",
        emoji: "🍪"
    },
    {
        id: 19,
        name: "Sugar Cookies (6-pack)",
        category: "cookies",
        price: 11.00,
        description: "Soft and sweet vanilla sugar cookies",
        emoji: "🍪"
    },
    {
        id: 20,
        name: "Brownies (4-pack)",
        category: "cookies",
        price: 10.00,
        description: "Fudgy chocolate brownies",
        emoji: "🍫"
    },
    {
        id: 21,
        name: "Blueberry Muffins (4-pack)",
        category: "cookies",
        price: 10.00,
        description: "Moist muffins bursting with fresh blueberries",
        emoji: "🧁"
    },
    {
        id: 22,
        name: "Banana Bread (Loaf)",
        category: "cookies",
        price: 9.00,
        description: "Moist and flavorful banana bread",
        emoji: "🍌"
    },
    {
        id: 23,
        name: "Scones (4-pack)",
        category: "cookies",
        price: 11.00,
        description: "Buttery scones with your choice of flavor",
        emoji: "🥐"
    },
    {
        id: 24,
        name: "Macarons (6-pack)",
        category: "cookies",
        price: 15.00,
        description: "Delicate French macarons in assorted flavors",
        emoji: "🍬"
    }
];

// Save products to localStorage on page load
if (typeof window !== 'undefined') {
    localStorage.setItem('bakeryProducts', JSON.stringify(products));
}
