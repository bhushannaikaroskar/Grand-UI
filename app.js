

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

arrayOfListItems.forEach((element)=>{
    element.addEventListener("click",(e)=>activeTab(componentList,element))
})

const arr = window.location.href.split("#");
const value = arr[1];

switch(value) {
    case "avatar":
        activeTab(componentList,arrayOfListItems[1])
        break;
    case "installation":
        activeTab(componentList,arrayOfListItems[0])
        break;
    case "alert":
        activeTab(componentList,arrayOfListItems[2])
        break;
    case "badge":
        activeTab(componentList,arrayOfListItems[3])
        break;
    case "button":
        activeTab(componentList,arrayOfListItems[4])
        break;
    case "cards":
        activeTab(componentList,arrayOfListItems[5])
        break;
    case "image":
        activeTab(componentList,arrayOfListItems[6])
        break;
    case "input":
        activeTab(componentList,arrayOfListItems[7])
        break;
    case "text-utilities":
        activeTab(componentList,arrayOfListItems[8])
        break;
    case "lists":
        activeTab(componentList,arrayOfListItems[9])
        break;
    case "navbar":
        activeTab(componentList,arrayOfListItems[10])
        break;
    case "modal":
        activeTab(componentList,arrayOfListItems[11])
        break;
    case "ratings":
        activeTab(componentList,arrayOfListItems[12])
        break;
    case "toast":
        activeTab(componentList,arrayOfListItems[13])
        break;
    case "grid":
        activeTab(componentList,arrayOfListItems[14])
        break;
    case "slider":
        activeTab(componentList,arrayOfListItems[15])
        break;
    default:
        activeTab(componentList,arrayOfListItems[1]);
        break;
  }

//   DARK MODE LOGIC

let theme = localStorage.getItem("data-theme");
const toggleThemeButton = document.querySelector("#toggle-theme");

const toggleTheme = ()=>{
    theme = localStorage.getItem("data-theme")
    if(theme === "dark"){
        document.documentElement.setAttribute("data-theme","light")
        localStorage.setItem("data-theme","light")
        toggleThemeButton.querySelector("span").innerHTML = "dark_mode"
    }else{
        document.documentElement.setAttribute("data-theme","dark")
        localStorage.setItem("data-theme","dark")
        toggleThemeButton.querySelector("span").innerHTML = "light_mode"

    }
}

if(theme === "dark"){
    document.documentElement.setAttribute("data-theme","dark")
    toggleThemeButton.querySelector("span").innerHTML = "light_mode"
}else{
    document.documentElement.setAttribute("data-theme","light")
    toggleThemeButton.querySelector("span").innerHTML = "dark_mode"

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

