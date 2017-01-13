/**
 * Created by johnfallara on 1/11/17.
 */

(function() {
    "use strict";

    var $pickButton = $("#pickButton");

    $("#houseDropdown li a").on("click", function() {
        var house = $(this).text();
        $pickButton.html("<input type='radio' id='radioSet'>"+house);
        console.log($("#radioSet").parents().get(1));
        console.log($("label[class^='active']"));
        $("#radioSet").parent().addClass("active");
        //$pickButton.addClass('active');
        //$pickButton.text(house);

    });

})();