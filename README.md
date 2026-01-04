# Alina Bakery Website

A professional, Starbucks-style website for Alina Bakery featuring a beautiful tropical beach theme with teal, orange, and cream colors from the logo.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Shopping Cart**: Add items to cart with localStorage (no backend needed)
- **Product Catalog**: 24 bakery items across 3 categories:
  - Artisan Breads (6 items)
  - Pastries & Cakes (9 items)
  - Cookies & Treats (9 items)
- **Category Filtering**: Filter products by category
- **Contact Form**: Submit orders and inquiries (stored in localStorage)
- **Smooth Animations**: Professional transitions and effects
- **Mobile Navigation**: Hamburger menu for mobile devices

## How to Use

### Opening the Website

1. Simply open `index.html` in any modern web browser
2. Or use a local server for better experience:
   ```bash
   python3 -m http.server 8000
   ```
   Then visit: http://localhost:8000

### Customer Journey

1. **Browse**: Scroll through the homepage to learn about the bakery
2. **Shop**: Click "Explore Menu" or scroll to the menu section
3. **Filter**: Use category buttons to filter products
4. **Add to Cart**: Click "Add to Cart" on any product
5. **View Cart**: Click the cart icon in the navigation bar
6. **Checkout**: Click "Proceed to Order" to send your order via the contact form
7. **Submit**: Fill in your details and submit the form

### For You (The Owner)

#### Viewing Orders/Messages
Open the browser console (F12) and type:
```javascript
viewSubmissions()
```
This shows all contact form submissions including orders.

#### Viewing Cart Contents
```javascript
viewCart()
```

#### Clearing Cart
```javascript
clearCart()
```

## Customization

### Update Products
Edit `products.js` to add, remove, or modify products. Each product has:
- `id`: Unique identifier
- `name`: Product name
- `category`: "breads", "pastries", or "cookies"
- `price`: Price in dollars
- `description`: Short description
- `emoji`: Display icon

### Update Colors
Edit CSS variables in `styles.css` (lines 2-12) to change the color scheme.

### Update Contact Info
Edit the contact section in `index.html` to update:
- Phone number
- Email address
- Business hours
- Location details

### Add Real Images
Replace emoji placeholders with real images:
1. Add images to an `images` folder
2. Update the `menu-item-image` section in `script.js`
3. Update gallery placeholders in `index.html`

## File Structure

```
alina-bakery/
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # Interactivity and cart management
├── products.js         # Product catalog
├── logo.png           # Your bakery logo
└── README.md          # This file
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Data Storage

All data is stored locally in the browser's localStorage:
- `bakeryProducts`: Product catalog
- `bakeryCart`: Shopping cart items
- `contactSubmissions`: Form submissions and orders

**Note**: Data persists until the browser cache is cleared.

## Future Enhancements

Consider adding:
- Real backend for order processing
- Email notifications
- Payment gateway integration
- Real product images
- Customer accounts
- Order tracking
- Online reviews

## Support

For questions or customization help, refer to the code comments in each file.

---

**Alina Bakery** - Freshly baked with love since 2025 ❤️
