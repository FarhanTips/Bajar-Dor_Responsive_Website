# 🛒 বাজার দর (BazarDor)

### নিত্যপ্রয়োজনীয় পণ্যের বাজারদর এক নজরে

**বাজার দর (BazarDor)** is a responsive web application that helps users explore the prices of essential daily commodities across different markets in Bangladesh. Users can compare market prices, track price changes, browse products by category, and view detailed price summaries. The application also provides secure authentication and a user-friendly experience across mobile, tablet, and desktop devices.

## ✨ Key Features

1. **📊 Daily Market Price Overview** — Browse essential commodities with today's price, unit, and price-change indicators, including the top six products with rising and falling prices.

2. **🛍️ Product Browsing & Categories** — Explore all products through a responsive card grid, navigate category-specific pages, and sort products by default order or price from low to high and high to low.

3. **📈 Detailed Product Price Analysis** — View minimum, maximum, and average prices, compare today's price with historical prices, and explore market-wise price ranges across different markets and divisions.

4. **🔐 Secure User Authentication** — Register and sign in using email and password, with Google login support through Better Auth. Protected product detail pages require authentication.

5. **📱 Responsive & User-Friendly Interface** — Enjoy a mobile-friendly layout, responsive navigation, an animated price ticker, an interactive hero banner, loading skeletons, and helpful empty and 404 states.

## 🚀 Additional Features

- **Price Change Indicators:** Color-coded indicators for rising, falling, and unchanged prices.
- **Bangla Localization:** Bengali product names, market information, price labels, and localized number formatting.
- **Toast Notifications:** Feedback for authentication actions, validation errors, and other relevant events using React Hot Toast.
- **Protected Routes:** Redirect unauthenticated users when accessing restricted product details.
- **User Profile Management:** View and update user information, and sign out securely.
- **Dynamic Product Pages:** Access individual product details through slug-based routes.
- **Custom Error Handling:** Friendly not-found pages with a button to return to the homepage.
- **Loading States:** Skeleton loaders while product data is being fetched.
- **Authentication-Based Navbar:** Shows Sign In and Sign Up buttons when the user is logged out, and Profile and Sign Out options when the user is logged in.
- **Informative Footer:** Displays the application's purpose and a disclaimer about market price variations.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| [Next.js](https://nextjs.org/) | React framework, routing, and page rendering |
| [React](https://react.dev/) | Building reusable UI components |
| [TypeScript](https://www.typescriptlang.org/) | Type safety and maintainable code |
| [Better Auth](https://www.better-auth.com/) | Authentication and social login |
| [HeroUI](https://www.heroui.com/) | UI components and interface development |
| [React Hot Toast](https://react-hot-toast.com/) | Toast notifications |
| [Tailwind CSS](https://tailwindcss.com/) | Responsive styling and layout |
| [Vercel](https://vercel.com/) | Deployment and hosting |

## 📂 Main Application Routes

| Route | Description |
|---|---|
| `/` | Homepage with price highlights and all products |
| `/[slug]` | Category-specific product listing and sorting |
| `/product/[slug]` | Protected product details and market-wise price comparison |
| `/signin` | User login and social authentication |
| `/signup` | User registration and social authentication |
| `/profile` | User profile and account information |

## 📱 Responsive Design

BazarDor is designed to work across:

- **Mobile:** Compact navigation, stacked layouts, and responsive product cards.
- **Tablet:** Flexible grids and optimized spacing.
- **Desktop:** Multi-column product grids and detailed market price tables.

## ⚠️ Price Disclaimer

All displayed prices are indicative and may vary depending on the market, location, availability, and current market conditions.

## 👨‍💻 Author

Developed as a web application project focused on making daily commodity prices easier to explore and compare.

---

**বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।**
