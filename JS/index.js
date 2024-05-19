/* Dropdown Menu toggle */
const dropdownMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    toggle.addEventListener('click', () =>{
        nav.classList.toggle('show_dropdown')
        toggle.classList.toggle('show_dropdown')
    })
}
dropdownMenu('nav_dropdown', 'nav_menu')
