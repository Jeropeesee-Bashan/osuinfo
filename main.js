function show_page(id)
{
  let to_show = document.getElementById(id);
  let shown_page = document.getElementsByClassName("shown-page")[0];
  if (to_show != shown_page) {
    shown_page.classList.replace("shown-page", "disappearing-page");
    setTimeout(() => {
      shown_page.classList.replace("disappearing-page", "hidden-page");
      to_show.classList.replace("hidden-page", "shown-page");
    }, 500)
  }
}
