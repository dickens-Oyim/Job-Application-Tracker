# MyAjira

MyAjira is a simple job application tracker built with **HTML, CSS, and JavaScript**.  
It allows users to record job applications manually and fetch live job listings from the **Adzuna API**.

---

##  Features
- Add job applications manually with:
  - Company name
  - Position
  - Status (Applied, Interview, Offer, Rejected)
- Search jobs by keyword (e.g., "developer").
- Load jobs dynamically from the Adzuna API.
- Display job cards with position, company, and status.
- Clean and responsive UI styled with CSS.

---

##  Project Structure
├── index.html      # Main HTML structure
├── styles.css      # Styling for forms, buttons, and layout
├── script.js       # JavaScript logic for form handling and API integration
├── README.md       # Project documentation


---

## Setup Instructions
1. Clone or download the project files.
2. Open `index.html` in your browser to run locally.
3. To enable API job search:
   - Get your **Adzuna API credentials** (APP_ID and API_KEY).
   - Replace the placeholders in `script.js`:
     ```javascript
     const APP_ID = "your_app_id";
     const API_KEY = "your_api_key";
     ```
4. Save changes and reload the page.

---

## Usage
- Fill in the form and click **Add Job** to track an application.
- Use the search bar to enter a keyword (e.g., "software engineer").
- Click **Load Jobs** to fetch job listings from Adzuna.
- View results in the job list section.

---

## Technologies Used
- **HTML5** for structure
- **CSS3** for styling
- **JavaScript (ES6+)** for interactivity and API integration
- **Adzuna API** for job listings

---

## Future Improvements
- Add localStorage support to persist job applications.
- Implement filters (by status, company, or role).
- Enhance UI with color-coded statuses.
- Add pagination for API results.

---

## Author
Developed by Elly Dickens
