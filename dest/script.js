"use strict";
// Constants for the flappy bird github button
const FLAPPYBIRDLINKID = "FlappyBirdGithubButton";
const FLAPPYBIRDURL = "https://github.com/DLamb-TheFallen/Flappy-Bird-Python";
// Constants for the game of life github button
const GAMEOFLIFELINKID = "GameOfLifeGithubButton";
const GAMEOFLIFEURL = "https://github.com/DLamb-TheFallen/Conway-s-Game-of-Life-Java-";
// Constants for website github button
const WEBSITELINKID = "WebsiteGithubButton";
const WEBSITEURL = "https://github.com/DLamb-TheFallen/DLamb-TheFallen.github.io";
// Add click functions to buttons
linkButton(FLAPPYBIRDLINKID, FLAPPYBIRDURL);
linkButton(GAMEOFLIFELINKID, GAMEOFLIFEURL);
linkButton(WEBSITELINKID, WEBSITEURL);
function linkButton(buttonId, link) {
    document.getElementById(buttonId)?.addEventListener("click", function () {
        window.open(link, "_blank");
        console.log("Hitting Button " + buttonId);
    });
}
