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
            for (var project in fsProjects) {
                fullStackGrid.innerHTML += `<div class="col">
                <div class="card h-100">
                    <img src="${fsProjects[project]["image"]}" class="card-img-top" alt="..." style="height:250px">
                    <div class="card-body">
                    <h5 class="card-title">${fsProjects[project]["title"]}</h5>
                    <p class="card-text">${fsProjects[project]["description"]}</p>
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
            for (var project in feProjects) {
                frontendGrid.innerHTML += `<div class="col">
                <div class="card h-100">
                    <img src="${feProjects[project]["image"]}" class="card-img-top" alt="..." style="height:250px">
                    <div class="card-body">
                    <h5 class="card-title">${feProjects[project]["title"]}</h5>
                    <p class="card-text">${feProjects[project]["description"]}</p>
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

