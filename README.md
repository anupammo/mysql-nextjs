Sure, I'll format the content of the README to make it GitHub-friendly, with proper markdown styling. Here's the updated version:

---

# **Next.js Project with MySQL Integration**

## **Description**
This project is a modern web application built using **Next.js** with **MySQL database integration**. It demonstrates how to connect a Next.js application to a MySQL database, fetch data dynamically, and display it on the frontend. The application is styled using Bootstrap for responsiveness and an enhanced user interface.

---

## **Features**
- MySQL database integration.
- API routes for secure data fetching.
- Dynamic rendering of database tables on the frontend.
- Integration of Bootstrap for styling and responsive design.
- Clear folder structure for scalability and extensibility.

---

## **Technologies Used**
- **Next.js**: React-based framework for building modern web apps.
- **MySQL**: Relational database management system for data storage.
- **Bootstrap**: Framework for responsive design and UI components.
- **JavaScript**: Programming language for both backend and frontend logic.

---

## **Getting Started**

### **Prerequisites**
Ensure the following tools are installed on your machine:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [MySQL](https://www.mysql.com/) server
- [Git](https://git-scm.com/)
- A code editor like [VS Code](https://code.visualstudio.com/)

---

### **Steps to Set Up the Project**

#### **1. Clone the Repository**
```bash
git clone [<repository-url>](https://github.com/anupammo/mysql-nextjs.git)
cd mysql-nextjs
```

#### **2. Install Dependencies**
Run the following command to install project dependencies:
```bash
npm install
```

#### **3. Set Up the Database**
- Import the database schema from the `database/nextjs_db.sql` file:
  ```bash
  mysql -u root -p < database/nextjs_db.sql
  ```
- Verify the database is set up by running:
  ```bash
  mysql -u root -p
  SHOW DATABASES;
  ```

#### **4. Configure Environment Variables**
Create a `.env` file in the root directory and add the following:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=nextjs_db
DB_PORT=3307
```
Replace `yourpassword` with your MySQL root password (leave blank if no password).

#### **5. Run the Development Server**
Start the development server with:
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## **Folder Structure**
```plaintext
my-nextjs-project/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Application layout
│   │   └── page.tsx             # Main page
│   └── api/
│       └── employees
│           └── route.js         # API route for fetching employee data
├── database/
│   └── nextjs_db.sql            # Database schema and sample data
└── db.js                        # MySQL database connection
├── .env                         # Environment variables
├── package.json                 # Project dependencies
└── README.md                    # Project documentation
```

---

## **Usage**
- The application dynamically renders data from the `employees` table in MySQL.
- You can add, modify, or delete rows directly in the database, and the changes will reflect in the app.

---

## **Contributing**
Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Contact**
For questions or support, feel free to reach out to [Anupam Mondal](https://anupammondal.in/).