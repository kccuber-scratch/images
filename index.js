function generateMD() {
    let link = document.getElementById("link");
    let alt = document.getElementById("alt");
    let markdown = "![" + alt.value + "](" + link.value + ")";
    document.getElementById("markdown").innerText = markdown;
}