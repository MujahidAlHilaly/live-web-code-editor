document.addEventListener('DOMContentLoaded', (event) => {
    // Load saved code from localStorage if available, otherwise initialize default values for the textareas
    if(localStorage.getItem("htmlCode")) {
       document.getElementById("htmlCode").value = localStorage.getItem("htmlCode");
    }else{
        document.getElementById("htmlCode").value = "<div>\n\n</div>";
    }
    if(localStorage.getItem("cssCode")) {
        document.getElementById("cssCode").value = localStorage.getItem("cssCode");
    }else{
        document.getElementById("cssCode").value = "<style>\n\n</style>";
    }
    if(localStorage.getItem("jsCode")) {
        document.getElementById("jsCode").value = localStorage.getItem("jsCode");
    }else{
        document.getElementById("jsCode").value = "<script>\n\n</script>";
    }
    // Show the preview based on the loaded code
    showPreview();
});

// Function to save code to localStorage
function saveCode() {
    localStorage.setItem("htmlCode", document.getElementById("htmlCode").value);
    localStorage.setItem("cssCode", document.getElementById("cssCode").value);
    localStorage.setItem("jsCode", document.getElementById("jsCode").value);
}

function showPreview(){
    var htmlCode = document.getElementById("htmlCode").value;
    var cssCode = ""+document.getElementById("cssCode").value+"";
    var jsCode = ""+document.getElementById("jsCode").value+"";
    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode+cssCode+jsCode);
    frame.close();

    // since this function is called whenever the code is updated, we save code to localStorage
    saveCode();
}

function show(x){
    document.getElementById("html").style.display="none";
    document.getElementById("css").style.display="none";
    document.getElementById("js").style.display="none";
    document.getElementById("result").style.display="none";
    document.getElementById(x).style.display="block";
}

function show_all(){
    if(window.innerWidth>=992)
    {
        document.getElementById("html").style.display="block";
        document.getElementById("css").style.display="block";
        document.getElementById("js").style.display="block";
        document.getElementById("result").style.display="block";
    }
    if(window.innerWidth<992 && document.getElementById("html").style.display=="block")
    {
        document.getElementById("css").style.display="none";
        document.getElementById("js").style.display="none";
        document.getElementById("result").style.display="none";
    }
}
