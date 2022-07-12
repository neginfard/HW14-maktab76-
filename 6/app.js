$(document).ready(function () {
  $("button").click(function () {
    let inputValue = $("input").val();
    $("input").val("");

    let listItem = $("<div class='bg-white px-32 py-2'>");
    listItem.html(inputValue);
    $("#list").append(listItem);
    listItem.on("click", function () {
      $(this).remove();
    });
  });
});
