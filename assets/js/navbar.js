const NavbarLinks = document.querySelectorAll('.navbar__link')

NavbarLinks.forEach((link) => {
  if (location.href.endsWith(link.href)) {
    link.classList.add('navbar__link--current')
  }
})
