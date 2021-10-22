const linksSocialMedia = {
    github : "elton-souza",
    linkedin : "in/elton-souza19",
    facebook : "elton.souza1515",
    instagram : "notle.py",
    twitter : "notlesz"
}

function changeSocialMediaLinks(){
    for(let li of socialLinks.children){
        const social = li.getAttribute('class')
        li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
    }
}
function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${linksSocialMedia.github}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        userPhoto.src = data.avatar_url
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userLogin.textContent = data.login
    })
}


changeSocialMediaLinks()
getGitHubProfileInfos()