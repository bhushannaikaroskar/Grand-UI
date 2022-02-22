
let theme = localStorage.getItem("data-theme");
const toggleThemeButton = document.querySelector("#toggle-mode");

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