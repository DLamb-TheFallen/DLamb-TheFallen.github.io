"use strict";
const FLAPPYBIRDLINKID = "FlappyBirdGithubButton";
const FLAPPYBIRDURL = "https://github.com/DLamb-TheFallen/Flappy-Bird-Python";
linkButton(FLAPPYBIRDLINKID, FLAPPYBIRDURL);
function linkButton(buttonId, link) {
    document.getElementById(buttonId)?.addEventListener("click", function () {
        window.open(link, "_blank");
        console.log("Hitting Button " + buttonId);
    });
}
