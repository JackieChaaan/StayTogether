document.getElementById('submit').addEventListener('click', function () {
    let uname = document.getElementById('uname').value;
    let chief = "abel";

    if (!uname) {
        alert("Hey! 😀, You did'nt enter your name...! 😅")
        return;
    }
    else if (uname.length <= 3) {
        alert("Oops! 😬 Enter your Name please.🙂");
        return;
    }
    else {
        let lowerCaseUname = uname.toLowerCase();
        let lowerCaseChief = chief.toLowerCase();

        if (lowerCaseUname === lowerCaseChief) {
            alert("Hey..😃! That's My name😂");
            return;
        }
        else {
            window.location.href = 'show.html?username=' + encodeURIComponent(uname);
        }
    }
});

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    let uname = document.getElementById('uname').value;
    let chief = "abel";

    if (!uname) {
        alert("Hey! 😀, You didn't enter your name...! 😅");
        return;
    } else if (uname.length <= 3) {
        alert("Oops! 😬 Enter your Name please.🙂");
        return;
    } else {
        let lowerCaseUname = uname.toLowerCase();
        let lowerCaseChief = chief.toLowerCase();

        if (lowerCaseUname === lowerCaseChief) {
            alert("Hey..😃! That's My name😂");
            return;
        } else {
            window.location.href = 'show.html?username=' + encodeURIComponent(uname);
        }
    }
});
