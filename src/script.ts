
const FLAPPYBIRDLINKID: string = "FlappyBirdGithubButton";
const FLAPPYBIRDURL: string = "https://github.com/DLamb-TheFallen/Flappy-Bird-Python"

linkButton(FLAPPYBIRDLINKID, FLAPPYBIRDURL)








function linkButton(buttonId: string, link: string) : void {
    document.getElementById(buttonId)?.addEventListener("click", function(){
        window.open(link, "_blank")
        console.log("Hitting Button " + buttonId);
     })
}

