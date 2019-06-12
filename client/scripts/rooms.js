var Rooms = {

  add: function() {

    var $roomForm = $(`
    <form action="#" id="send" method="post" class="newForm">
      <input type="text" name="message" id="message"/>
      <input type="submit" name="submit" class="submit"/>
    </form>`);
    $('.newForm').remove();
    $('#rooms').append($roomForm);
    $roomForm.on('submit', FormView.handleNewRoom);

  },




};

