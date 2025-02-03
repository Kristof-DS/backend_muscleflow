# Backend Folder
This folder contains the backend code and related files for the muscleflow project.


## Description

MuscleFlow is a fitness app that helps users select muscle groups and suggests exercises to create, edit, and track their workouts. The exercises are being fetched from a free fitness API. All workouts are stored in a database for easy access and progress tracking. This is the back-end part, a simple REST API in express using JWT for authentication.

## Installation

1. **Clone the repository**
    
    ```
    git clone your-repo-url
    
    ```
    
2. **Navigate to the project directory**
    
    ```
    cd backend_muscleflow
    
    ```
    
3. **Install dependencies**
    
    ```
    npm install
    
    ```
    
4. **Set up environment variables**
    - Create a `.env` file in the root directory and add necessary environment variables based on the provided `.env.example` template.
5. **Set up local postgresql database**
    - [Click here](https://documentation.ubuntu.com/server/how-to/databases/install-postgresql/?_ga=2.214231954.488115109.1738144604-1225918913.1738144603) if you haven’t set up Postgresql on your Linux Ubuntu machine before. If you are on another Linux distribution or Mac, Google search is the way to go.
    - Once Postgres is installed and you are ready to setup the database, you can run the sql script that you will find in the assets folder of the repo. This will create the database structure locally.
        
        Here is a screenshot of the structure of the database.
        
    
    ![Muscleflow DB - V2.png](attachment:f747bb5e-2fe5-4ad3-87ec-e55bc503495e:Muscleflow_DB_-_V2.png)
    
6. **Start and connect to the server locally**
    
    ```
    npm run dev
    
    ```
    

## Usage

### Authentication

- **Register**: `POST /api/register` - Create a new user with email, username, and password.
- **Login**: `POST api/login` - Authenticate user and return a JWT token.

### Workouts

- **Get user dashboard and workouts**: `GET api/user/:id_user/dashboard` - Retrieve all workouts created by the user.
- **Update user details**:  `PUT api/user/:id_user/details`
- **Create workout**: `POST api/user/:id_user/workout` - Add a new workout.
- **Edit workout**: `PUT api/user/:id_user/workout/:id_workout`- Update an existing workout.
- **Delete workout**: `DELETE api/user/:id_user/workout/:idworkout` - Remove a workout.

### **Some suggestions to make it better:**

- At the moment, when a user navigates to the dashboard, all the workouts, including the exercises are being sent to the front-end. Maybe better would be that only the data from the workouts-table should be sent(without the exercises). When a user clicks on a specific workout, only then the data from the exercises-table should be fetched to render the specific workout-page / component. To be done in accordance with the front-end team.
- No routes have been created yet to log workouts and their respective exercises that have been done / executed.

### Dependencies

- express
- bcrypt
- cors
- dotenv
- JSON Web Token (JWT)
- Postgres

### **Developer dependencies**

- nodemon

### Engines

- node js

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

---

If you have any question, please do not hesitate to contact me.

