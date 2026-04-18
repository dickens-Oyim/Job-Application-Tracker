
const APP_ID = "9a481591"; 
const API_KEY = "047eb26379df7750048c7efbf88f8f8e"; 
 
// require('dotenv').config();

// const APP_ID = process.env.APP_ID;
// const API_KEY = process.env.API_KEY;


const jobList = document.getElementById("jobList"); // Container to display job results

const form = document.getElementById("applicationForm"); // Form for adding manual job applications

// Add event listener for form submission to handle manual job entry
form.addEventListener("submit", e => {
  e.preventDefault(); // Prevent default form submission behavior (page refresh)

  // Get values entered in the form fields
  const company = document.getElementById("company").value;
  const position = document.getElementById("position").value;
  const status = document.getElementById("status").value;

  // Append a new job application card to the job list container
  jobList.innerHTML += `
    <div class="job-card">
      <p><strong>${position}</strong> at ${company}</p>
      <p>Status: ${status}</p>
    </div>
  `;

  // Reset form fields after adding the application
  form.reset();
});




console.log("JS IS WORKING");
//const keyword="developer";
 const dataContainer = document.getElementById('data')
    
async function fetchJobs(keyword){
try{
  dataContainer.innerHTML = "";
    const res=await fetch(`https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${APP_ID}&app_key=${API_KEY}&results_per_page=10&what=${keyword}`)
    const data=await res.json()
    console.log(data);
    displayContent(data)
    }catch(error){
        console.error("Error fetching jobs:", error);
    }
};
function displayContent(data) {
    
    data.results.forEach( results => {
        const itemElement = document.createElement('div')
        itemElement.innerHTML = `Company Name: ${results.company.display_name}, Job Title: ${results.title}, Salary Expectation: ${results.salary_min}`;
        dataContainer.appendChild(itemElement);
    });
};
const button=document.getElementById("loadJobs")
const search=document.getElementById("searchKeyword")
button.addEventListener("click", (event)=> {
  event.preventDefault()
  fetchJobs(search.value);
  search.value=""
  
} )
