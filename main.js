function show_page(id)
{
    const this_page = document.getElementById(id);
    const that_page = document.getElementsByClassName("shown-page")[0];
    
    if (this_page != that_page) {
	that_page.classList.replace("shown-page", "disappearing-page");
	setTimeout(() => {
	    that_page.classList.replace("disappearing-page", "hidden-page");
	    this_page.classList.replace("hidden-page", "shown-page");
	}, 500)
    }
}
