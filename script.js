// Application credentials for Adzuna Jobs API
const APP_ID = "9a481591"; 
const API_KEY = "047eb26379df7750048c7efbf88f8f8e"; 
 
// Example of using environment variables instead of hardcoding (currently commented out)
// require('dotenv').config();
// const APP_ID = process.env.APP_ID;
// const API_KEY = process.env.API_KEY;

// DOM element references
const jobList = document.getElementById("jobList"); // Container to display job results
const form = document.getElementById("applicationForm"); // Form for adding manual job applications

// Event listener for manual job application form submission
form.addEventListener("submit", e => {
  e.preventDefault(); // Prevent page refresh on form submission

  // Retrieve values from form fields
  const company = document.getElementById("company").value;
  const position = document.getElementById("position").value;
  const status = document.getElementById("status").value; 
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  
  

  // Append new job application card to job list container
  jobList.innerHTML += `
    <div class="job-card">
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>${position}</strong> at ${company}</p>
      <p>Status: ${status}</p>
    </div>
  `;

  // Reset form fields after submission
  form.reset();
});

console.log("JS IS WORKING"); // Debugging confirmation

// Container for fetched job data
const dataContainer = document.getElementById('data')
    
// Function to fetch jobs from Adzuna API based on keyword
async function fetchJobs(keyword){
  try{
    dataContainer.innerHTML = ""; // Clear previous results

    // API request to Adzuna Jobs endpoint
    const res = await fetch(`https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${APP_ID}&app_key=${API_KEY}&results_per_page=10&what=${keyword}`)
    const data = await res.json() // Parse JSON response
    console.log(data); // Log API response for debugging

    // Display job results in the DOM
    displayContent(data)
  }catch(error){
    console.error("Error fetching jobs:", error); // Handle errors gracefully
  }
};

// Function to render job results in the page
function displayContent(data) {
  data.results.forEach(results => {
    const itemElement = document.createElement('div')
    itemElement.innerHTML = `Company Name: ${results.company.display_name}, Job Title: ${results.title}, Salary Expectation: ${results.salary_min}`;
    dataContainer.appendChild(itemElement); // Append each job result to container
  });
};

// DOM references for search functionality
const button = document.getElementById("loadJobs") // Button to trigger job search
const search = document.getElementById("searchKeyword") // Input field for keyword

// Event listener for search button click
button.addEventListener("click", (event)=> {
  event.preventDefault() // Prevent default button behavior
  fetchJobs(search.value); // Fetch jobs using entered keyword
  search.value = "" // Clear search input after submission
})
