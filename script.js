
function myFunction() {
    const btn = document.getElementById("cbtn");
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
        btn.classList.add("fa-bars");
        btn.classList.remove("fa-times");
    } else {
        x.style.display = "block";
        btn.classList.add("fa-times");
        btn.classList.remove("fa-bars");
    }
}

function myFunction2() {
    const btn = document.getElementById("btndrop");
    var x = document.getElementById("dropcnt");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    const dcon = document.getElementById("dcon");

    const Data = (await (await fetch("https://api.sampleapis.com/futurama/characters")).json());
    const data = Data.slice(0, 4);
    const res = [];
    let i = 0;
    for (const d of data) {
        res.push(`
        <div class="display">
                    <div class="img">
                        <img src="${d.images.main}">
                        <div class="info">
                        <div class="iname">
                        ${d.name.first}
                        </div>
                        <div class="btns">
                                <div class="fsave">
                                    <i class="fa fa-solid fa-folder"></i>
                                </div>
                                <div class="flike">
                                    <i class="fa fa-solid fa-heart"></i>
                                </div>
                            </div>
                    </div>
                    </div>
                    <div class="profile">
                        <div class="name" id="${i}" onmouseenter="showPop(this)" onmouseleave="hidePop(this)">
                            <span class="fa fa-solid fa-user"></span> ${d.name.first}
                        </div>
                        <div class="views">
                            <div class="likes">
                                <i class="fa fa-solid fa-heart"></i> 67
                            </div>
                            <div class="view">
                                <i class="fa fa-solid fa-eye"></i> 6.5k
                            </div>
                        </div>
                    </div>
                    <div class="popup" id="${i}" onmouseenter="showPop(this)" onmouseleave="hidePop(this)">
                    <div class="topup">
                        <div class="left">
                            <div class="icon"><img src="${d.images.main}"></div>
                            <div class="aniname">
                                <div class="firstname">
                                ${d.name.first} ${d.name.last}
                                </div>
                                <div class="location">
                                ${d.species}, ${d.homePlanet}
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            + Follow
                        </div>
                    </div>
                    <div class="imgs">
                        <img src="${Data[i+1].images.main}" alt="" class="immm">
                        <img src="${Data[i+2].images.main}" alt="" class="immm">
                        <img src="${Data[i+3].images.main}" alt="" class="immm">
                    </div>
                </div>
        </div>
        `)
        i++;
    }

    dcon.innerHTML = res.join("");

});
var checker  = [false];

function showPop(e) {
    //console.log(e)
    if (e.classList?.contains("name")) {
        //console.log({ target: e })
        e.parentNode.parentNode.childNodes[5].style.display = "flex";
        checker[e.id] = true;
    }
    if (e.classList?.contains("popup")) {
        //console.log({ target: e })
        e.style.display = "flex";
        checker[e.id] = true;
    }
}
function hidePop(e) {
    if (e.classList?.contains("name") || e.classList?.contains("popup")) {
        checker[e.id] = false;
    }
    setTimeout(() => {
        //console.log(checker)
        if(e.classList?.contains("name") && !checker[e.id] ) {
            //console.log({ target: e.target })
            e.parentNode.parentNode.childNodes[5].style.display = "none";
        }
        if (e.classList?.contains("popup") && !checker[e.id]) {
            //console.log({ target: e.target })
            e.style.display = "none";
        }
    }, 250);
}  
