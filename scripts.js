// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {

    // Buttons
    let takeOffButton = document.getElementById("takeoff");
    let landingButton = document.getElementById("landing");
    let missionAbortButton = document.getElementById("missionAbort");
    let upButton = document.getElementById("up");
    let downButton = document.getElementById("down");
    let leftButton = document.getElementById("left");
    let rightButton = document.getElementById("right");

    // Text and Numeric values
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

    // The rocket
    let rocket = document.getElementById("rocket");
    let rocketLeftPosition = 300;
    let rocketTopPosition = 250;
    let bgMaxWidth = shuttleBackground.style.width;

    rocket.style.position = "absolute";
    rocket.style.top = `${rocketTopPosition}px`;
    rocket.style.left = `${rocketLeftPosition}px`;

    // Event Listeners

    missionAbortButton.addEventListener("mouseover", function() {

        missionAbortButton.style.backgroundColor = "red";

    });

    missionAbortButton.addEventListener("mouseleave", function() {

        missionAbortButton.style.backgroundColor = "";

    });

    takeOffButton.addEventListener("click", function() {

        let choice = confirm("Confirm that the shuttle is ready for takeoff.");

        if (choice) {

            flightStatus.innerHTML = "Shuttle in flight";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
            rocketTopPosition = 240;
            rocket.style.top = `${rocketTopPosition}px`;

        }

    });

    landingButton.addEventListener("click", function() {

        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        rocketTopPosition = 250;
        rocket.style.top = `${rocketTopPosition}px`;
        rocketLeftPosition = 300;
        rocket.style.left = `${rocketLeftPosition}px`;

     });

     missionAbortButton.addEventListener("click", function() {

        let choice = confirm("Confirm that you want to abort the mission.");

        if (choice) {

            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = Number(0);
            rocketTopPosition = 250;
            rocket.style.top = `${rocketTopPosition}px`;
            rocketLeftPosition = 300;
            rocket.style.left = `${rocketLeftPosition}px`;


        }

     });

     upButton.addEventListener("click", function() {

        if (rocketTopPosition > 0) {
            rocketTopPosition -= 10;
            rocket.style.top = `${rocketTopPosition}px`;
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
        
        }

     });

     downButton.addEventListener("click", function() {

        if (rocketTopPosition < 250) {
            rocketTopPosition += 10;
            rocket.style.top = `${rocketTopPosition}px`;
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000;

         } 
        
     });

     leftButton.addEventListener("click", function() {

        if (rocketLeftPosition > -15) {
            rocketLeftPosition -= 10;
            rocket.style.left = `${rocketLeftPosition}px`;
        }
        
    });

     rightButton.addEventListener("click", function() {

        if (rocketLeftPosition < 625) {
            rocketLeftPosition += 10;
            rocket.style.left = `${rocketLeftPosition}px`;
        }

     });

});