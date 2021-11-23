window.onload = () => {
    firstPageDataLoad();
}

function firstPageDataLoad() {

    fetch('https://poetrydb.org//author')
    .then(res => res.json())
    .then(res => {
        let banner = document.querySelector("div.banner");
        let arr = res.authors;
        arr.forEach(name => {
                banner.innerHTML +=
                    `
                <div class="row" >
                    <div class="col-md" >
                            <h2 class="names" >${name}</h2>
                    </div>
                </div>

            `
            });
        })
}

