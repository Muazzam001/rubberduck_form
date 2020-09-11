$(document).ready(function () {
    $(".rubber-booking, .form_steps").css("display", "none");
    $("#main-content").css("display", "block");

    $(".bootstrap-select button").attr("title", "Indtast eller vælg et forslag");
    $(".bs-searchbox input").attr("placeholder", "Indtast eller vælg et forslag");

    $("#btn-main-content1, #btn-main-content3").on("click", function (event) {
        $(".rubber-booking").css("display", "none");
        $("#inner-simple-form").css("display", "block");
    });

    $("#btn-main-content2").on("click", function (event) {
        $(".rubber-booking").css("display", "none");
        $("#inner-multi-form").css("display", "block");
        $("#first_step").css("display", "block");
    });

    $("#first-option-one").on("click", function (event) {
        $("#first-option-two").removeClass("selected");
        $(this).addClass("selected");
        $("#second_second_option").css("display", "none");
        $("#second_step").css("display", "block");
        $("#second_first_option").css("display", "block");

    });

    $("#first-option-two").on("click", function (event) {
        $("#first-option-one").removeClass("selected");
        $(this).addClass("selected");
        $("#second_step").css("display", "block");
        $("#second_first_option").css("display", "none");
        $("#second_second_option").css("display", "block");
    });

    $("#second-option-one").on("click", function (event) {
        $("#second-option-two").removeClass("selected");
        $(this).addClass("selected");
        $("#fourth_step, #fifth_step").css("display", "none");
        $("#third_step").css("display", "block");
        $("#second_second_option, #third_second_option").css("display", "none");
        $("#second_first_option, #third_first_option").css("display", "block");
    });

    $("#second-option-two").on("click", function (event) {
        $("#second-option-one").removeClass("selected");
        $(this).addClass("selected");
        $("#second_second_option, #third_first_option").css("display", "none");
        $("#fourth_step .case-1, #fourth_step .case-2").css("display", "none");
        $("#fifth_step, #fifth_seventh_option").css("display", "none");
        $("#third_step, #fourth_step").css("display", "block");
        $("#second_first_option, #third_second_option, #fourth_fifteen_option").css("display", "block");
    });

    $("#third-option-one").on("click", function (event) {
        $("#third-option-two, #third-option-three, #third-option-four, #third-option-five, #third-option-six").removeClass("selected");
        $(this).addClass("selected");
        $("#fourth_step .case-2").css("display", "none");
        $("#fourth_options").css("display", "none");
        $("#fourth_step, #fifth_step").css("display", "block");
        $("#fourth_step .case-1").css("display", "block");
        $("#fourth_first_option").css("display", "block");
    });

    $("#third-option-two").on("click", function (event) {
        $("#third-option-one, #third-option-three, #third-option-four, #third-option-five, #third-option-six").removeClass("selected");
        $(this).addClass("selected");
        $("#fourth_options").css("display", "none");
        $("#fourth_step .case-2").css("display", "none");
        $("#fourth_step, #fifth_step").css("display", "block");
        $("#fourth_step .case-1").css("display", "block");
        $("#fourth_second_option").css("display", "block");
    });

    $("#third-option-three").on("click", function (event) {
        $("#third-option-one, #third-option-two, #third-option-four, #third-option-five, #third-option-six").removeClass("selected");
        $(this).addClass("selected");
        $("#fourth_options").css("display", "none");
        $("#fourth_step, #fifth_step").css("display", "block");
        $("#fourth_step .case-1").css("display", "block");
        $("#fourth_step .case-2").css("display", "none");
        $("#fourth_third_option").css("display", "block");
    });

    $("#third-option-four").on("click", function (event) {
        $("#third-option-one, #third-option-two, #third-option-three, #third-option-five, #third-option-six").removeClass("selected");
        $(this).addClass("selected");
        $(".fourth-options").css("display", "none");
        $("#fourth_step .case-2").css("display", "none");
        $("#fourth_step, #fifth_step").css("display", "block");
        $("#fourth_step .case-1").css("display", "block");
        $("#fourth_fourth_option").css("display", "block");
    });

    $("#third-option-five").on("click", function (event) {
        $("#third-option-one, #third-option-two, #third-option-three, #third-option-four, #third-option-six").removeClass("selected");
        $(this).addClass("selected");
        $(".fourth-options").css("display", "none");
        $("#fourth_step .case-2").css("display", "none");
        $("#fourth_step, #fifth_step").css("display", "block");
        $("#fourth_step .case-1").css("display", "block");
        $("#fourth_fifth_option").css("display", "block");
    });

    $("#third-option-six").on("click", function (event) {
        $("#third-option-one, #third-option-two, #third-option-three, #third-option-four, #third-option-five").removeClass("selected");
        $(this).addClass("selected");
        $(".fourth-options").css("display", "none");
        $("#fourth_step .case-2").css("display", "none");
        $("#fourth_step, #fifth_step").css("display", "block");
        $("#fourth_step .case-1").css("display", "block");
        $("#fourth_sixth_option").css("display", "block");
    });

    $("ul.dropdown-menu li").on("click", function (event) {
        $(".fourth-options, #fourth_step .case-0, #fourth_step .case-1").css("display", "none");
        $("#fourth_step, #fifth_step, #fourth_step .case-2").css("display", "block");

        if ($(this).text() === "13") {
            $("#fourth_seventh_option").css("display", "block");
        } else if ($(this).text() === "14") {
            $("#fourth_eighth_option").css("display", "block");
        } else if ($(this).text() === "15") {
            $("#fourth_ninth_option").css("display", "block");
        } else if ($(this).text() === "16") {
            $("#fourth_tenth_option").css("display", "block");
        } else if ($(this).text() === "17") {
            $("#fourth_eleventh_option").css("display", "block");
        } else if ($(this).text() === "18") {
            $("#fourth_twelveth_option").css("display", "block");
        } else if ($(this).text() === "19") {
            $("#fourth_thirteenth_option").css("display", "block");
        } else if ($(this).text() === "20") {
            $("#fourth_fourteenth_option").css("display", "block");
        } else {
            $("#fourth_step .case-0").css("display", "block");
            $("#fourth_fifteenth_option").css("display", "block");
        }

    });

    $("#fourth-option-seven-two").on("click", function (event) {
        $("#fourth_seventh_option .step2").removeClass("selected");
        $(this).addClass("selected");
        $(".fifth-options, #fifth_step .case-1, #fifth_first_option").css("display", "none");
        $("#fourth_step, #fifth_step, #fifth_step .case-2").css("display", "block");
        $("#fifth_seventh_option").css("display", "block");

    });
    $("#fourth-option-eight-two").on("click", function (event) {
        $("#fourth_eighth_option .step2").removeClass("selected");
        $(this).addClass("selected");
        $(".fifth-options, #fifth_step .case-1, #fifth_first_option").css("display", "none");
        $("#fourth_step, #fifth_step, #fifth_step .case-2").css("display", "block");
        $("#fifth_seventh_option").css("display", "block");

    });

    $('.step2').hover(function () {
        $(this).addClass("preselected");
    }, function () {
        // on mouseout, reset the background colour
        $(this).removeClass("preselected");
    });
    $("#simple-form-close").on("click", function (event) {
        $("#inner-simple-form").css("display", "none");
        $("#main-content").css("display", "block");
    });
    $("#inner-page-close").on("click", function (event) {
        $("#inner-page").css("display", "none");
        $("#main-content").css("display", "block");
    });
});
