// Personal note: this js seems to be too mediocre.

function show_page(id)
{
    let p;
    let visible;

    const pages = document.getElementsByClassName("page-content-box");

    for (let i = 0; i < pages.length; ++i) {
        if (pages[i].id === id) {
            p = pages[i];
        }
        if (pages[i].style.display === "flex") {
            visible = pages[i];
        }
    }

    if (p == visible) return;

    set_visible(visible, false);
    setTimeout(function() {
        set_visible(p, true);

        for (let i = 0; i < pages.length; ++i) {
            pages[i].style.display = pages[i] === p ? "flex" : "none";
        }
    }, 1000);
}

function set_visible(page, reverse)
{

    let start = Date.now();

    let timer = setInterval(function() {
        const timePassed = Date.now() - start;

        if (timePassed >= 1000) {
            clearInterval(timer);
            return;
        }

        const step = timePassed / 1000;
        page.style.opacity = reverse ? step : 1 - step;

    }, 5);
}
