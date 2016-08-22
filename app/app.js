import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';

import AppComponent from './app.component';

export default angular
    .module('app', ['ngMaterial', 'material.svgAssetsCache'])
    .component(AppComponent.name, AppComponent.config)
    .config(($mdThemingProvider)=>{
        $mdThemingProvider.theme('default')
            .primaryPalette('orange');
    });
