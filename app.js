const linksSocialMedia = {
    github : "elton-souza",
    linkedin : "in/elton-souza19",
    facebook : "elton.souza1515",
    instagram : "notle.py",
    twitter : "notlesz"
}
function changeSocialMediaLinks(){
    document.getElementById('github').href = `https://github.com/${linksSocialMedia.github}`
    
    for(let li of socialLinks.children){
        const social = li.getAttribute('class')
        li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
    }
}

changeSocialMediaLinks()