$(document).ready(function () {
  $("button").click(function () {
    $("#text").text($("form").serialize());
  });
});
