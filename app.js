

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

if(value === "avatar"){
    activeTab(componentList,arrayOfListItems[1]);
}else if(value === "installation"){
    activeTab(componentList,arrayOfListItems[0]);
}else if(value === "alert"){
    activeTab(componentList,arrayOfListItems[2]);
}else if(value === "badge"){
    activeTab(componentList,arrayOfListItems[3]);
}else if(value === "button"){
    activeTab(componentList,arrayOfListItems[4]);
}else if(value === "cards"){
    activeTab(componentList,arrayOfListItems[5]);
}else if(value === "image"){
    activeTab(componentList,arrayOfListItems[6]);
}else if(value === "input"){
    activeTab(componentList,arrayOfListItems[7]);
}else if(value === "text-utilities"){
    activeTab(componentList,arrayOfListItems[8]);
}else if(value === "lists"){
    activeTab(componentList,arrayOfListItems[9]);
}else if(value === "navbar"){
    activeTab(componentList,arrayOfListItems[10]);
}else{
    activeTab(componentList,arrayOfListItems[1]);
}
