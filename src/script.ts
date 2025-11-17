
// Constants for the flappy bird github button
const FLAPPYBIRDLINKID: string = "FlappyBirdGithubButton";
const FLAPPYBIRDURL: string = "https://github.com/DLamb-TheFallen/Flappy-Bird-Python"

// Constants for the game of life github button
const GAMEOFLIFELINKID: string = "GameOfLifeGitHubButton";
const GAMEOFLIFEURL: string = "https://github.com/DLamb-TheFallen/Conway-s-Game-of-Life-Java-";


// Add click functions to buttons
linkButton(FLAPPYBIRDLINKID, FLAPPYBIRDURL);
linkButton(GAMEOFLIFELINKID, GAMEOFLIFEURL);







function linkButton(buttonId: string, link: string) : void {
    document.getElementById(buttonId)?.addEventListener("click", function(){
        window.open(link, "_blank")
        console.log("Hitting Button " + buttonId);
     })
}

