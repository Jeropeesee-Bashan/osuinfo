function show_page(id)
{
    const pages = document.getElementsByClassName("page-content-box");

    for (let i = 0; i < pages.length; i++) {
	if (pages[i].id == id) {
	    pages[i].classList.replace("hidden-page", "shown-page");
	}

	else {
	    pages[i].classList.replace("shown-page", "hidden-page");
	}
    }
}
