$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();
    const name = $("#name").val();
    const Input1 = praseInt($("input:radio[name=drink]:checked").val());
    const Input2 = praseInt($("input:radio[name=movie]:checked").val());
    const Input3 = praseInt($("input:radio[name=activity]:checked").val());
    const Input4 = praseInt($("input:radio[name=pet]:checked").val());
    const Input5 = praseInt($("input:radio[name=school]:checked").val());

  });
});