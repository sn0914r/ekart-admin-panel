# eKart Admin Panel

Admin dashboard for managing products, orders, inventory, and analytics in the eKart ecommerce platform.

## Live Demo

https://ekart-admin-dashboard.pages.dev/

---

## Related Repositories

| Repository     | URL                                       |
| :------------- | :---------------------------------------- |
| eKart Frontend | https://github.com/sn0914r/ekart-frontend |
| eKart Backend  | https://github.com/sn0914r/ekart-backend  |
| eKart System   | https://github.com/sn0914r/eKart-system   |

---

## Features

### Authentication & Access Control

- JWT-based authentication
- Role-Based Access Control (RBAC)
- Protected admin routes
- Persistent admin session state

### Dashboard

- Revenue, orders, and stock metrics
- Sales and revenue charts
- Low stock alerts

### Product Management

- Create, update, and delete products
- Multi-image uploads
- Product category and stock management

### Order Management

- View and update orders
- Order status tracking
- Customer and shipping details

### User Interface

- Responsive admin dashboard
- Dark/Light mode support
- Toast notifications

---

## Tech Stack

### Frontend

- React
- Vite
- React Router

### State Management & Data Fetching

- Zustand
- TanStack Query

### Forms & Validation

- React Hook Form
- Zod

### UI & Styling

- Bootstrap
- Emotion
- Lucide React

### Charts

- Recharts

---

## Folder Structure

```txt
src/
├── app/
│   ├── pages/
│   ├── store/
│   ├── AppRouter.jsx
│   └── Providers.jsx
│
├── modules/
│   ├── analytics/
│   ├── auth/
│   ├── dashboard/
│   ├── orders/
│   └── products/
│
├── shared/
│   ├── components/
│   └── layout/
│
├── lib/
│   ├── apiClient.js
│   └── queryClient.js
│
└── utils/
```

---

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=
VITE_NODE_ENV=development
```

---

## Installation

```bash
git clone https://github.com/sn0914r/ekart-admin-panel.git

cd ekart-admin-panel

npm install

npm run dev
```

---

## Screenshots

### Login

![Login](./screenshots/login.webp)

### Dashboard

![Dashboard](./screenshots/dashboard.webp)

### Products

![Products](./screenshots/products.webp)

### Add Product

![Add Product](./screenshots/add-product.webp)

### Orders

![Orders](./screenshots/orders.webp)

### Order Details

![Order Details](./screenshots/order-details.webp)

### Analytics

![Analytics](./screenshots/analytics-dark.webp)

---

## Security

- JWT authentication
- Role-Based Access Control (RBAC)
- Protected admin routes
- Automatic token refresh handling
- Authenticated API requests using Bearer tokens
- Form validation using Zod
