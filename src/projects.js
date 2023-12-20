const bootstrap = require('bootstrap');

function loadFullstack() {
    var fsProjects;
    fetch('./fullstack.json')
    .then(response => response.json())
    .then(data => fsProjects = data)
    .then(() => {
        let fullStackHeader = document.getElementById("fullstack-header");
        if (fsProjects.length == 1)
            fullStackHeader.innerHTML = "Full Stack Project";
        else fullStackHeader.innerHTML = "Full Stack Projects";
        let fullStackGrid = document.getElementById("fullstack-projects");
        if (fsProjects != null){
            const fsProjectsReversed = [];
            
            //reverse array so newer projects appear earlier
            for (var item in fsProjects)
                fsProjectsReversed.unshift(fsProjects[item]);

            
            for (var project in fsProjectsReversed) {
                fullStackGrid.innerHTML += `<div class="col">
                <div class="card h-100">
                    <img src="${fsProjectsReversed[project]["image"]}" class="card-img-top" alt="..." style="height:250px">
                    <div class="card-body">
                    <h5 class="card-title">${fsProjectsReversed[project]["title"]}</h5>
                    <p class="card-text">${fsProjectsReversed[project]["description"]}</p>
                    </div>
                    <div class="row align-items-end" style="padding-bottom: 1rem">
                        <div class="col">
                            <button type="button" class="btn btn-secondary">Use the App</button>
                        </div>
                        <div class="col">
                            <button type="button" class="btn btn-secondary">GitHub Page</button>
                        </div>
                    </div>
                </div>
            </div>`;
            }
        }
    })
}

function loadFrontend() {
    var feProjects;
    fetch('./frontend.json')
    .then(response => response.json())
    .then(data => feProjects = data)
    .then(() => {
        let frontendHeader = document.getElementById("frontend-header");
        if (feProjects.length == 1)
        frontendHeader.innerHTML = "Frontend Project";
        else frontendHeader.innerHTML = "Frontend Projects";
        let frontendGrid = document.getElementById("frontend-projects");

        if (feProjects != null){

            const feProjectsReversed = [];
            
            //reverse array so newer projects appear earlier
            for (var item in feProjects)
                feProjectsReversed.unshift(feProjects[item]);

            //HTML to create each card in the flexbox
            for (var project in feProjectsReversed) {
                frontendGrid.innerHTML += `<div class="col">
                <div class="card h-100">
                    <img src="${feProjectsReversed[project]["image"]}" class="card-img-top" alt="..." style="height:250px">
                    <div class="card-body">
                    <h5 class="card-title">${feProjectsReversed[project]["title"]}</h5>
                    <p class="card-text">${feProjectsReversed[project]["description"]}</p>
                    <p class="card-text">${feProjectsReversed[project]["technologies"]}</p>
                    </div>
                    <div class="row align-items-end" style="padding-bottom: 1rem">
                        <div class="col">
                            <button 
                                type="button" 
                                class="btn btn-secondary"
                                onclick="window.location='${feProjectsReversed[project]["app-link"]}';"
                            >Use the App</button>
                        </div>
                        <div class="col">
                            <button 
                                type="button" 
                                class="btn btn-secondary"
                                onclick="window.location='${feProjectsReversed[project]["github-link"]}';"
                                >GitHub Page</button>
                        </div>
                    </div>
                </div>
            </div>`;
            }
        }
    })
}