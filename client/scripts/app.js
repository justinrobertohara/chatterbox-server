var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    //App.stopSpinner();
    //App.fetch(App.stopSpinner);
    // App.fetch(MessagesView.renderMessage());
    

  },
  lastMessage: null,

  clickOnFriends: function() {
    $('.username').click(function() {
      // var friend = $.trim($(this).text());
      Friends.toggleStatus($(this).text());
    });
  }, 

  fetch: function(callBack = ()=> {}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log('data', data);
      App.lastMessage = data.results[0].objectId;
      for (let i = 0; i < data.results.length; i ++) {
        if (!Rooms[data.results[i].roomname]) {
          Rooms[data.results[i].roomname] = 1;
          RoomsView.renderRoom(data.results[i].roomname);
        } //need to deal with scenario where username is defined but roomname is not defined
        if (data.results[i].username && data.results[i].roomname) {
          MessagesView.renderMessage(data.results[i]);
        }
      }      
      App.clickOnFriends();
      callBack();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
