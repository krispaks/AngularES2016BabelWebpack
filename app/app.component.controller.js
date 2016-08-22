class AppController{
    constructor($mdSidenav){
        this.$mdSidenav = $mdSidenav;
        this.menus = ['Home', 'Preferences', 'Help', 'Logout']
    }

    toggleSideNav(){
        this.$mdSidenav('left').toggle();
    }
}

export default AppController;