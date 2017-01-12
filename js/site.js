/**
 * Created by johnfallara on 1/11/17.
 */

(function() {
    "use strict";

    var $pickButton = $("#pickButton");

    $("#houseDropdown li a").on("click", function() {
        var house = $(this).text();
        $pickButton.html("<input type='radio'>"+house);
        //$pickButton.text(house);
    });

})();