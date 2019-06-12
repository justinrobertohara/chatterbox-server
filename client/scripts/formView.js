var FormView = {

  $form: $('form'),

  $newRoom: $('.newForm'),

  initialize: function() {
    
    FormView.$form.on('submit', FormView.handleSubmit);
    FormView.$form.on('click', MessagesView.updateFeed);
    // FormView.$form.on('submit', Parse.create(Messages));
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var text = $('#message').val();
    var currentRoom = $.trim($('#rooms option:selected').text());
    var userName = App.username;
    var message = {
      username: userName,
      text: text,
      roomname: currentRoom
    };   
    Parse.create(message);
  },

  handleNewRoom: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var roomname = $('#message').val();
    var userName = App.username;
    var message = {
      username: userName,
      text: 'Added room',
      roomname: roomname
    };   
    Parse.create(message);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }
};

/*
var message = {
  username: 'Mel Brooks',
  text: 'Never underestimate the power of the Schwartz!',
  roomname: 'lobby'
};
*/