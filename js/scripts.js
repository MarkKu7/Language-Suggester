$(document).ready(function () {
  $("#survey").submit(function (event) {
    const name = $("#name").val();
    const Input1 = praseInt($("input:radio[name=drink]:checked").val());
    const Input2 = praseInt($("input:radio[name=movie]:checked").val());
    const Input3 = praseInt($("input:radio[name=activity]:checked").val());
    const Input4 = praseInt($("input:radio[name=pet]:checked").val());
    const Input5 = praseInt($("input:radio[name=school]:checked").val());

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
    } else if (total > 7 && total < 10) {
      $("#result").show();
      $("#javascript").hide();
      $("#python").show();
      $("#csharp").hide();
    } else {
      $("#result").show();
      $("#javascript").hide();
      $("#python").hide();
      $("#csharp").show();
    }

    });
});