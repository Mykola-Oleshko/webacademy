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
                x -= 10; document.getElementById("u").innerHTML = "Upgrade for 2";
            }
            break;
        case 2:
            if (x >= 40) {
                q = 8;
                x -= 40; document.getElementById("u").innerHTML = "Upgrade for 4";

            }
            break;
        case 3:
            if (x >= 80) {
                q = 8;
                x -= 80; document.getElementById("u").innerHTML = "Upgrade for 8";

            }
            break;
        case 4:
            if (x >= 90) {
                q = 16;
                x -= 160; document.getElementById("u").innerHTML = "Upgrade for 16";
            }
            break;

        case 5:
            if (x >= 500) {
                q = 25;
                x -= 500; document.getElementById("u").innerHTML = "FULL!";

            }
            break;
        default: alert("konec!");
            break;
    };


};


