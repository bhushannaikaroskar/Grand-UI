

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
    console.log(window.location.pathname)
}else if(value === "installation"){
    activeTab(componentList,arrayOfListItems[0]);
    console.log(window.location.pathname)

}else{
    activeTab(componentList,arrayOfListItems[1]);
    console.log(window.location.pathname)

}
