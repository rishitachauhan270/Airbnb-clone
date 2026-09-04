Wanderlust

Wanderlust is an Airbnb-inspired full-stack property listing web application built using Node.js, Express.js, MongoDB, Mongoose, EJS, and Bootstrap.

Project Status: This project is currently under development. More features and improvements will be added over time.

The application allows users to create, view, edit, and delete property listings, as well as add reviews and ratings for individual properties.

 Features
 
Create, view, edit, and delete property listings
Add reviews and ratings to individual listings
MongoDB database integration using Mongoose
Server-side validation using Joi
Custom middleware for validating listings and reviews
Centralized error handling using custom ExpressError
Asynchronous error handling using wrapAsync
Session management and flash messages
Responsive UI using Bootstrap
Dynamic page rendering using EJS
Organized routes using Express Router

 Tech Stack
 
Frontend
EJS
Bootstrap
HTML
CSS
JavaScript
Backend
Node.js
Express.js
Express Router
Database
MongoDB
Mongoose
Other Tools & Libraries
Joi – Server-side validation
Express Session – Session management
Connect-Flash – Temporary success/error messages

 Project Structure
 
Wanderlust/
│
├── init/
│   ├── data.js
│   └── index.js
│
├── models/
│   ├── listing.js
│   └── review.js
│
├── public/
│   ├── css/
│   └── js/
│
├── routes/
│   ├── listing.js
│   └── review.js
│
├── utils/
│   ├── ExpressError.js
│   └── wrapAsync.js
│
├── views/
│   ├── includes/
│   ├── layouts/
│   ├── listings/
│   └── error.ejs
│
├── app.js
├── schema.js
├── package.json
└── package-lock.json


## 🔮 Future Improvements

The project is currently under development, with the following features planned:

- **Account Management:** Allow users to update their account details and password.
- **User Data Security:** Implement secure password hashing and encryption.
- **Interactive Maps:** Integrate Mapbox to provide location visualization for properties.
- **Google Authentication:** Enable users to log in seamlessly using their Google account.
- **Facebook Authentication:** Add login functionality using Facebook credentials.
- **Email Authentication:** Provide traditional email-based login for user convenience.

## ⚙️ Installation & Setup

1. Clone the repository:
   git clone https://github.com/rishitachauhan270/Airbnb-clone

2. Install the required dependencies:
   npm install

3. Set up the required environment variables in `.env`.

4. Start the application:
   npm start
