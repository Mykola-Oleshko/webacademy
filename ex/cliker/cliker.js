let x = 0;
let q = 1;
let z = 100;

function clickBtn() {
    x += q;
    console.log(x);
    document.getElementsByTagName("p")[0].firstChild.data = "Clicks: " + x;

};

function clickBtn1() {
    x += z;
    console.log(x);
    document.getElementsByTagName("p")[0].firstChild.data = "Clicks: " + x;

};


function upgrade() {

    switch (q) {
        case 1:
            if (x >= 10) {
                q++;
                x -= 10; 
                document.getElementById("u").innerHTML = "Upgrade for 2";
                document.getElementById("score").innerHTML = "Clicks: " + x;
            }
            break;
        case 2:
            if (x >= 40) {
                q = 8;
                x -= 40; 
                document.getElementById("u").innerHTML = "Upgrade for 4";
                document.getElementById("score").innerHTML = "Clicks: " + x;

            }
            break;
        case 8:
            if (x >= 80) {
                q = 16;
                x -= 80; 
                document.getElementById("u").innerHTML = "Upgrade for 8";
                document.getElementById("score").innerHTML = "Clicks: " + x;

            }
            break;
        case 16:
            if (x >= 90) {
                q = 32;
                x -= 160; 
                document.getElementById("u").innerHTML = "Upgrade for 16";
                document.getElementById("score").innerHTML = "Clicks: " + x;
            }
            break;

        case 32:
            if (x >= 500) {
                q = 64;
                x -= 500; 
                document.getElementById("u").innerHTML = "FULL!";
                document.getElementById("score").innerHTML = "Clicks: " + x;

            }
            break;
        default: alert("FULL!");
            break;
    };


};


