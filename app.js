

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
    default:
        activeTab(componentList,arrayOfListItems[1]);
        break;
  }