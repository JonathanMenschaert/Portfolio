// Default variables
const defaultName = "default";
const defaultDesc = "description here";
const defaultThumbnail = "./icons/eye-logo.png";
const defaultLink = "javascript:void(0)";

const jsonFunctionType = {
    "thumbnail": createProjectList,
    "overview": createProjectOverview
}

// Build project list HTML from json
function createProjectList(projectArray)
{
    let htmlString = "";
    for (let i = 0; i < projectArray.length; i++)
    {
        let projectObj = projectArray[i];
        
        htmlString += `<a href="${projectObj["link"] ?? defaultLink}"} class="entry-box">`;
        htmlString += "<div class='entry-box-divider'>";
        htmlString += `<image class="entry-box-image" src="${projectObj["thumbnail"] ?? defaultThumbnail}"></image>`;
        htmlString += `<div class="tag-container">`;

        tags = projectObj["tags"] ?? [];
        for (let tagIdx = 0; tagIdx < tags.length; tagIdx++)
        {
            htmlString += `<div class="tag"><h1>${tags[tagIdx]}</h1></div>`;
        }
        htmlString += `</div></div><div><h1>${projectObj["name"] ?? defaultName}</h1>`;
        htmlString += `<h2>${projectObj["description"] ?? defaultDesc}</h2></div></a>`;
    }
    
    return htmlString;
}

// Build project overview HTML from json
function createProjectOverview(projectArray)
{
    console.log("Hello there overview!!!")
}

// Create page based on json file
async function loadProjectJson(sourceElementId, jsonFile)
{
    let element = document.getElementById(sourceElementId);
    element.innerHTML = "";   

    try {
        const response = await fetch(jsonFile);
        if (!response.ok)
        {            
            throw new Error("Cannot locate json file!");
        }
        const jsonData = await response.json();
        if (!jsonData.hasOwnProperty("data") || !jsonData.hasOwnProperty("type"))
        {
             throw new Error("Json file is in wrong format!");
        }
        element.innerHTML = jsonFunctionType[jsonData.type](jsonData.data);
        
            
    }
    catch (error) {
        console.log(error.message);
        element.innerHTML = "<h1 class='fallback-font'>Something went wrong...</h1>";
    }
    finally {
        if (element.innerHTML.length == 0)
        {
            element.innerHTML = "<h1 class='fallback-font'>No Projects found</h1>";
        }
    }
}