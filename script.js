
// JavaScript to fetch data from GitHub API
async function fetchGitHubData() {
    try {
        const response = await fetch('https://api.github.com/users/uchihaashar');
        const data = await response.json();
        
        // Display data on the card
        document.getElementById('profile-pic').src = data.avatar_url;
        document.getElementById('username').innerText = data.login;
        document.getElementById('followers').innerText = data.followers;
    } catch (error) {
        console.error("Error fetching GitHub data:", error);
    }
}

// Call the function to fetch and display data
fetchGitHubData();
