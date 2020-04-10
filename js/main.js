$(document).ready(function () {
  // console.log("It works!!");

  $("#searchUser").on('keyup', function (e) {
    // console.log('key pressed');
    // console.log(e.target.value);
    let username = e.target.value;

    // Make request to Github.
    $.ajax({
      url: "https://api.github.com/users/" + username,
      data: {
        client_id: "",
        client_secret: ""
      }
    }).done(function (user) {
      $('#profile').html(`
      <div class="card" style="width: 18rem;">
        <img class="card-img-top avatar" src="${user.avatar_url}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${user.name}</h5>
          <div class="row">

            <div class="col-md-3">
            
            </div>
          </div>
        </div>
    </div>
      `);
    });

  });
});