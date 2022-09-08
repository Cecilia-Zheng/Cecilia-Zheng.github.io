let isDarkMode= false;

function switchModes(){
    //if whatever inside the bracket is true, the code will apply. Make sure to have triple equal signs.//
    if(isDarkMode=== false){
    document.documentElement.style.setProperty("--col-01","#ffffff");
    document.documentElement.style.setProperty("--col-02","#000");
    document.getElementById("modeButton").innerHTML = "Dark Mode";
    isDarkMode= true;
    //documentent.getElementByID("bio").stylebackgroundColor="red"- not correct still//
    } else{
    document.documentElement.style.setProperty("--col-01","#000");
    document.documentElement.style.setProperty("--col-02","#ffffff");
    document.getElementById("modeButton").innerHTML = "Light Mode";
    isDarkMode= false;
    }

}