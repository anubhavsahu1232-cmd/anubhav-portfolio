# Anubhav Sahu — Java Full Stack Developer Portfolio

A professional portfolio built with **React + Spring Boot + MySQL**.

## Stack

- Frontend: React + Vite + CSS
- Backend: Java + Spring Boot
- Database: MySQL
- API: REST
- Deployment target: Vercel (frontend) + Render (backend)

## Project structure

```text
anubhav-portfolio/
├── frontend/
└── backend/
```

## 1. Start the React frontend

```bash
cd frontend
npm install
npm run dev
```

Open the Vite URL shown in the terminal.

## 2. Start the Spring Boot backend

Create a MySQL database named `anubhav_portfolio`.

Then configure credentials with environment variables:

```text
DB_URL=jdbc:mysql://localhost:3306/anubhav_portfolio
DB_USERNAME=root
DB_PASSWORD=your_password
```

Or edit `backend/src/main/resources/application.properties`.

Then run:

```bash
cd backend
mvn spring-boot:run
```

Backend API:

```text
http://localhost:8080/api/contact
```

## 3. Connect frontend to backend

The React app uses:

```text
VITE_API_URL=http://localhost:8080/api
```

Create `frontend/.env` if needed.

## Important

Replace the profile initials/photo area with your real photo if you want a photo in the hero section.

Update the LeetCode URL after adding your exact LeetCode username.

## Existing project links

### Ticket Booking System
- GitHub: https://github.com/anubhavsahu1232-cmd/ticket-booking-system
- Live Demo: https://ticket-booking-system-vercel-8z51dzxkd-single-159e.vercel.app/

### Task Management System
- GitHub: https://github.com/anubhavsahu1232-cmd/task-management-system
- Live Demo: https://task-management-frontend-fpzp.onrender.com

### AI Research Assistant
- GitHub: https://github.com/anubhavsahu1232-cmd/research-assistant

### Social
- GitHub: https://github.com/anubhavsahu1232-cmd
- LinkedIn: https://www.linkedin.com/in/anubhav-sahu-92599222b/
