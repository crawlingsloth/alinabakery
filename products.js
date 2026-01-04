// Product catalog - stored locally
const products = [
    {
        id: 1,
        name: "Tuna Bun",
        category: "breads",
        price: 15,
        description: "Soft bun filled with savory tuna filling",
        emoji: "🥖"
    },
    {
        id: 2,
        name: "Creme Bun",
        category: "breads",
        price: 15,
        description: "Sweet bun filled with smooth vanilla creme",
        emoji: "🥐"
    },
    {
        id: 3,
        name: "Sausage Bun",
        category: "breads",
        price: 20,
        description: "Delicious bun with juicy sausage filling",
        emoji: "🌭"
    }
];

// Save products to localStorage on page load
if (typeof window !== 'undefined') {
    localStorage.setItem('bakeryProducts', JSON.stringify(products));
}
