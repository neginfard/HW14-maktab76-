const API_URL1 = "https://reqres.in/api/users?page=1";

const list = $("ol");

$(document).ready(function () {
  $("button").click(function () {
    $.ajax({ url: API_URL1 }).done(function (users) {
      $.each(users.data, function (index, user) {
        list.append(`
            <li>${user.first_name} ${user.last_name}</li>
            `);
      });
    });
  });
});
