class NavbarController {
  constructor() {
    this.boo = false;
  }

  init(){
    this.isNavBarCollapsed = false;

    this.toggleNavBar = () => this.isNavBarCollapsed = !this.isNavBarCollapsed;
  }

  toggleNavBar() {
    this.isNavBarCollapsed = !this.isNavBarCollapsed;
    this.boo = !this.boo;
  }
}

export default NavbarController;
