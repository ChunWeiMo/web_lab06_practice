/* 
The calculator should be able to perform basic operations such as addition, subtraction, multiplication, and division.
The calculator should be able to perform operations on negative numbers.
The calculator should keep a log of previous operations.
Each item in the histroy log should be colored by the operation type.
Each item in the history log can be deleted. The whole log can be cleared.
The calculator should be able to perform operations on decimal numbers.
*/

function history(x, y, symbol, operator) {
    if (operator == "addbtn") {
        symbol = "+";
        color = "red";
    } else if (operator == "subbtn") {
        symbol = "-";
        color = "blue";
    } else if (operator == "mulbtn") {
        symbol = "*";
        color = "purple";
    } else {
        symbol = "/";
        color = "green";
    }
    console.log(color)

    // $("#history").append("<li>" + x + symbol + y + " = " + result + "<span>" + "<button class=\"hide\">Hide this</button>" + "</span>" + "</li>").children().css("background-color",color);
    $("#history").append("<li style='background-color:" + color + "';>" + x + symbol + y + " = " + result + "<span>" + "<button class=\"hide\">Hide this</button>" + "</span>" + "</li>");
    // $("#history").append("<li>" + x + symbol + y + " = " + result + "<span>" + "<button class=\"hide\">Hide this</button>" + "</span>" + "</li>");
}

function calculate() {
    x = $("#operand1").val();
    x = parseInt(x);
    console.log("x =", x);

    y = $("#operand2").val();
    y = Number(y);
    console.log("y =", y);

    console.log($(this).attr("id"));
    operator = $(this).attr("id");
    symbol = $(this).text();
    // console.log(this);

    switch (operator) {
        case "addbtn":
            result = x + y;
            break
        case "subbtn":
            result = x - y;
            break
        case "mulbtn":
            result = x * y;
            break
        case "divbtn":
            result = x / y;
            break
        default:
            console.log("Have not clicked")
    }

    $("#result").html("<b>" + result + "</b>");
    history(x, y, symbol, operator, result);
}


function hide() {
    console.log("hide is clicked.")
    $(this).parent().parent().remove()
}

function setup() {
    console.log("Lab05_calculator");
    console.log("setup function is called");

    $(".operator").click(calculate);
    $("#history").on("click", ".hide", hide);

}

$(document).ready(setup);



