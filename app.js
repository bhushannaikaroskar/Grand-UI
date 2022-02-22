

const componentList = document.querySelector(".doc-sidebar");
const arrayOfListItems = componentList.querySelectorAll(".list-item");
const docMain = document.querySelector(".doc-main");


const activeTab = (list,listItem) =>{
    const arrayOfTabs = list.querySelectorAll(".list-item");
    arrayOfTabs.forEach(element => {
        element.querySelector("a").classList.remove("btn-active")
    });

    listItem.querySelector("a").classList.add("btn-active");
    docMain.querySelectorAll(".doc-main>div").forEach((e)=>e.style.display = "none");
    document.querySelector(listItem.querySelector("a").getAttribute("href")).style.display = "block";
}

const objectOfListItems = Object.values(arrayOfListItems).reduce((obj,element)=>{
    const key = element.querySelector("a").getAttribute("href").split("#")[1]
    return {...obj,[key]:element}
},{})

arrayOfListItems.forEach((element)=>{
    element.addEventListener("click",(e)=>activeTab(componentList,element))
})

const arr = window.location.href.split("#");
const value = arr[1];

  switch(value) {
    case "avatar":
        activeTab(componentList,objectOfListItems["avatar"])
        break;
    case "installation":
        activeTab(componentList,objectOfListItems["installation"])
        break;
    case "alert":
        activeTab(componentList,objectOfListItems["alert"])
        break;
    case "badge":
        activeTab(componentList,objectOfListItems["badge"])
        break;
    case "button":
        activeTab(componentList,objectOfListItems["button"])
        break;
    case "cards":
        activeTab(componentList,objectOfListItems["cards"])
        break;
    case "image":
        activeTab(componentList,objectOfListItems["image"])
        break;
    case "input":
        activeTab(componentList,objectOfListItems["input"])
        break;
    case "text-utilities":
        activeTab(componentList,objectOfListItems["text-utilities"])
        break;
    case "lists":
        activeTab(componentList,objectOfListItems["lists"])
        break;
    case "navbar":
        activeTab(componentList,objectOfListItems["navbar"])
        break;
    case "modal":
        activeTab(componentList,objectOfListItems["modal"])
        break;
    case "ratings":
        activeTab(componentList,objectOfListItems["ratings"])
        break;
    case "toast":
        activeTab(componentList,objectOfListItems["toast"])
        break;
    case "grid":
        activeTab(componentList,objectOfListItems["grid"])
        break;
    case "slider":
        activeTab(componentList,objectOfListItems["slider"])
        break;
    default:
        activeTab(componentList,objectOfListItems["avatar"]);
        break;
  }


// RESPONSIVE WEBSITE 

const hamburgerButton = document.querySelector("#doc-ham");
const sidebar = document.querySelector(".doc-sidebar");

hamburgerButton.addEventListener("click",()=>{
    if(sidebar.classList.contains("sidebar-hidden")){
        sidebar.classList.remove("sidebar-hidden")
    }else{
        sidebar.classList.add("sidebar-hidden")

    }
})

arrayOfListItems.forEach((element)=>{
    element.addEventListener("click",(e)=>sidebar.classList.add("sidebar-hidden"))
})

//   DARK MODE LOGIC

let theme = localStorage.getItem("data-theme");
const toggleThemeButton = document.querySelector("#toggle-theme");
const logo = document.querySelector(".nav-logo img");

const toggleTheme = ()=>{
    theme = localStorage.getItem("data-theme")
    if(theme === "dark"){
        document.documentElement.setAttribute("data-theme","light")
        localStorage.setItem("data-theme","light")
        toggleThemeButton.querySelector("span").innerHTML = "dark_mode"
        logo.src = "/assets/landing/grand-logo.png"
    }else{
        document.documentElement.setAttribute("data-theme","dark")
        localStorage.setItem("data-theme","dark")
        toggleThemeButton.querySelector("span").innerHTML = "light_mode"
        logo.src = "/assets/landing/grand-logo-dark.png"
    }
}

if(theme === "dark"){
    document.documentElement.setAttribute("data-theme","dark")
    toggleThemeButton.querySelector("span").innerHTML = "light_mode"
    logo.src = "/assets/landing/grand-logo-dark.png"
}else{
    document.documentElement.setAttribute("data-theme","light")
    toggleThemeButton.querySelector("span").innerHTML = "dark_mode"
    logo.src = "/assets/landing/grand-logo.png"
}

toggleThemeButton.addEventListener("click",toggleTheme)


// MODAL LOGIC

const modalContainer = document.querySelectorAll(".modal-container");
modalContainer.forEach((element,index)=>{
    const closeButtons = element.querySelectorAll(".modal-close");
    closeButtons.forEach((close)=>{
        close.addEventListener("click",()=>{
            element.classList.remove("modal-active")
        })
    })
})

const modalDisplay = document.querySelector("#modal-display");
const modalCenterDisplay = document.querySelector("#modal-center-display");

modalDisplay.addEventListener("click",()=>{
    modalDisplay.nextElementSibling.classList.add("modal-active")
})

modalCenterDisplay.addEventListener("click",()=>{
    modalCenterDisplay.nextElementSibling.classList.add("modal-active")
})
