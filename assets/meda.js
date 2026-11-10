/* Shared functioning search dialog; display-only theme/accessibility icons are intentionally inert. */
(() => {
  const search = document.getElementById("searchDialog");
  const searchButton = document.getElementById("searchBtn");
  if (!search || !searchButton) return;
  searchButton.addEventListener("click", () => search.showModal());
  search.addEventListener("close", () => searchButton.focus());
  search.addEventListener("click", event => {
    if (event.target !== search) return;
    const box = search.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) search.close();
  });
})();
