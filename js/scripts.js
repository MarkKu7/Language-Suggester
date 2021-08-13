$(document).ready(function () {
  $("#survey").submit(function (event) {
    const name = $("#name").val();
    const Input1 = parseInt($("input:radio[name=drink]:checked").val());
    const Input2 = parseInt($("input:radio[name=movie]:checked").val());
    const Input3 = parseInt($("input:radio[name=activity]:checked").val());
    const Input4 = parseInt($("input:radio[name=pet]:checked").val());
    const Input5 = parseInt($("input:radio[name=school]:checked").val());

    const total = Input1 + Input2 + Input3 + Input4 + Input5

    event.preventDefault();
    $("#inputName").text(name);
    if (!name) {
      $("#noname").show();
    } else if (total >= 11) {
      $("#result").show();
      $("#javascript").show();
      $("#python").hide();
      $("#csharp").hide();
      $("#noname").hide();
    } else if (total > 7 && total < 10) {
      $("#result").show();
      $("#javascript").hide();
      $("#python").show();
      $("#csharp").hide();
      $("#noname").hide();
    } else {
      $("#result").show();
      $("#javascript").hide();
      $("#python").hide();
      $("#csharp").show();
      $("#noname").hide();
    }

    });
});