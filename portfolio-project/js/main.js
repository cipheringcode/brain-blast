let projects;

// Data
fetch('../data/projects.json').then(response => {
    // Got the response
    return response.json();

    // Create project cards
}).then(createProjectsCard);

function createProjectsCard(json) {
    projects = json;

    const projectsListElements = document.getElementById("projects-list");

    const projectsSize = projects.length;

    // Add cards to the html using for loop
    for (let i=0; i < projectsSize ; i++){
        projectsListElements.innerHTML += `
        <div class="projects-card">
        <a href=${projects[i].repository} target="_blank">
            <img src=${projects[i].img}>

            <p>${projects[i].name}</p>
            <p>${projects[i].description}</p>
            <p>${projects[i].year}</p>
            
            <div class="technologies center">
                <label>Tech 1</label>
                <label>Tech 2</label>
                <label>Tech 3</label>
            </div>
        </a>
    </div>
        `;
    }

    console.log(projects);
}