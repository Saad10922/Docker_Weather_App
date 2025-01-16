# Docker Weather App

## Table of Contents
1. [Installation](#installation)
2. [How to Run](#how-to-run)
3. [Summary of Flow of Microservices](#summary-of-flow-of-microservices)
4. [File Structure](#file-structure)
5. [Features](#features)
6. [Contact](#contact)

---

## Installation

### Prerequisites
- Docker and Docker Compose installed on your system
- Internet connection for fetching dependencies

### Steps
1. Clone this repository:
   ```bash
   git clone <repository_url>
   cd Docker-Weather-App
   ```
2. Build and pull all necessary images using Docker Compose:
   ```bash
   docker-compose build
   ```
3. Ensure all dependencies are installed and files are in the correct structure.

---

## How to Run

1. Start all services using Docker Compose:
   ```bash
   docker-compose up
   ```
2. Access the services:
   - **Frontend:** Navigate to `http://localhost:3000` in your browser.
   - **Weather API:** Accessible at `http://localhost:5000` (for API requests).
   - **Location Service:** Accessible at `http://localhost:5001` (for API requests).

3. To stop the services, press `Ctrl+C` and run:
   ```bash
   docker-compose down
   ```

---

## Summary of Flow of Microservices

### Overview
The project consists of three interconnected microservices:

1. **Frontend Service**
   - A user-facing web application built using HTML, JavaScript, and Tailwind CSS.
   - Allows users to search for weather information by city name.
   - Communicates with the Weather API and Location Service.

2. **Weather API**
   - A backend service built using Node.js and Express.
   - Fetches weather data from the OpenWeather API based on user input.

3. **Location Service**
   - A Flask-based backend service.
   - Provides reverse geocoding to retrieve location information using latitude and longitude.

### Flow
- The user inputs a city name in the frontend.
- The frontend communicates with the Weather API to fetch weather data.
- If geolocation is needed, the Location Service is queried for details using latitude and longitude.
- The responses are displayed on the frontend.

---

## File Structure

```plaintext
/Docker-Weather-App
  ├── frontend/
  │   ├── node_modules
  │   ├── Background2.jpg
  │   ├── Dockerfile
  │   ├── index.html
  │   ├── output.css
  │   ├── package.json
  │   ├── package-lock.json
  │   ├── script.js
  │   ├── style.css
  │   └── tailwind.config.js
  ├── location-service/
  │   ├── app.py
  │   ├── Dockerfile
  │   └── requirement.txt
  ├── weather-api/
  │   ├── server.js
  │   ├── Dockerfile
  │   └── package.json
  └── docker-compose.yaml
```

---

## Features

- **Frontend:**
  - Responsive web application built with Tailwind CSS.
  - Dynamic weather data fetching using JavaScript.

- **Weather API:**
  - Node.js backend for fetching weather data from OpenWeather API.
  - Simple, RESTful endpoints for weather retrieval.

- **Location Service:**
  - Flask-based microservice for reverse geocoding.
  - Provides location information based on latitude and longitude.

- **Dockerized Environment:**
  - Each service runs in an isolated container.
  - Simplified setup and deployment using Docker Compose.

---

## Contact

For any questions or support, please reach out to:

**Your Name**
- Email: [your.email@example.com](mailto:saadq10922@gmail.com)
- LinkedIn: [Your LinkedIn Profile](https://www.linkedin.com/in/m-saadmasood)

---

