
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

    const data = (await (await fetch("https://api.sampleapis.com/futurama/characters")).json()).slice(0, 4);
    const res = [];
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
                        <div class="name">
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
        </div>
        `)
    }

    dcon.innerHTML = res.join("");

});

