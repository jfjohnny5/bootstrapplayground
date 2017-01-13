/**
 * Created by johnfallara on 1/11/17.
 */

(function() {
    "use strict";

    // Dropdown Button

    var $pickButton = $("#pickButton");

    $("#houseDropdown li a").on("click", function() {

        $(".houseRadios").removeClass("active");

        var house = $(this).text();
        $pickButton.html("<input type='radio' id='radioSet'>"+house);
        $pickButton.addClass("active");

    });

    // Modal Events

    var $sentDialog = $("#sentDialog");

    $("#contactForm").on("submit", function() {
        $sentDialog.modal("show");
        return false;
    });

    var $sentAlert = $("#sentAlert");

    $sentDialog.on("hidden.bs.modal", function() {
        //alert("modal closed");
        $sentAlert.show();
    });

        // Overrides a peculiarity of alerts that normally makes them only appear once
    $sentAlert.on("close.bs.alert", function() {
        $sentAlert.hide();
        return false;
    });

    // Enable Tooltip

    $("#contactForm input[type=submit]").tooltip();

})();