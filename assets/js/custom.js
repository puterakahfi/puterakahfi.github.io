'use strict';

function Custom() {
    self = this;
    self.init = function () {
        self.ajaxPreloader();
        self.tooltips();
    };

    self.ajaxPreloader = function () {
        $(window).load(function () {
            // will first fade out the loading animation
            $("#preloader").fadeOut();
            // will fade out the whole DIV that covers the website.
            $("#preloader").delay(1000).fadeOut("slow");
        })
    };

    self.tooltips = function () {
        $('.btn').tooltip();
    };




}
