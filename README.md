````markdown
# 🔗 URL Shortener with REST API

A URL shortener application built using **Node.js**, **Express**, **MongoDB**, and **Mongoose**.  
It supports both **HTML form submissions** and full **REST API CRUD operations**.

## 📌 Features

- Shorten long URLs with custom shortcodes
- Store and manage links using MongoDB
- REST API for create, read, update, delete (CRUD)
- 404 error page handling
- Frontend form with list display
- Uses Mongoose for MongoDB interactions

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yashesh-akbari/url_short.git
cd url_short
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Start MongoDB

Ensure MongoDB is running locally at `mongodb://localhost:27017`.

### 4. Run the App

```bash
node app.js
```

### 5. Visit in Browser

```
http://localhost:3000
```

---

## 📦 REST API Endpoints

| Method | Endpoint    | Description         |
| ------ | ----------- | ------------------- |
| GET    | /links      | Get all links       |
| GET    | /links/\:id | Get a link by ID    |
| POST   | /links      | Create new link     |
| PUT    | /links/\:id | Update a link by ID |
| DELETE | /links/\:id | Delete a link by ID |

### Sample JSON Body for POST/PUT

```json
{
  "url": "https://github.com/yashesh-akbari",
  "shortcode": "ghub"
}
```

---

## 🧩 Folder Structure

```
url_short/
│
├── public/
│   └── index.html        # Frontend form
│
├── views/
│   └── error404.html     # Custom 404 page
│
├── app.js                # Main server file
├── package.json
└── README.md
```

---

## 🙋‍♂️ Author

**Yashesh Akbari**
🔗 [Portfolio](https://yashesh-akbari-portfolio.netlify.app/)
🐙 [GitHub](https://github.com/yashesh-akbari)

---

## 📃 License

This project is open source and available under the [MIT License](LICENSE).
