var MessagesView = {

  $chats: $('#chats'),

  $userName: $('.username'),

  $update: $('.update'),

  initialize: function() {
    MessagesView.$userName.on('click', function() {
      Friends.toggleStatus();
    });
    
    MessagesView.$update.on('click', MessagesView.updateFeed);

    // trigger if click on roomname
    $('select').on('change', function() {
      // copy name of selected room to a variable
      var selectedRoom = $.trim($('#rooms option:selected').text());
      MessagesView.updateRoom(selectedRoom);
    });

    // MessagesView.$room.on('click', MessagesView.updateRoom('Valhalla'));
  },

  render: function(message) {
    //var html = MessageView.render(message);
    //$chats.append(html);
    return 'hello';
  },

  renderMessage: function(message) {
    if (MessagesView.$userName) {
      //MessageView.messageRoom = message.roomName;
      for (let i = 0; i < Friends.list.length; i ++) {
        if (message.username === Friends.list[i]) {
          var htmlFriend = MessageView.renderFriend(message);
          MessagesView.$chats.append(htmlFriend);
          return;
        }
      }
      var html = MessageView.render(message);
      MessagesView.$chats.append(html);
    }
  },

  updateRender: function(message) {
    if (MessagesView.$userName) {
      //MessageView.fixRoom(message);
      var html = MessageView.render(message);
      MessagesView.$chats.prepend(html);
    }
  },

  updateFeed: function() {
    var i = 0;
    Parse.readAll((data) => {
      while (data.results[i].objectId !== App.lastMessage) {
        MessagesView.updateRender(data.results[i]);
        i ++;
      }
      App.lastMessage = data.results[0].objectId;
    });
    // Parse.readAll((data) => {
    //   for (let i = 0; i < data.results.length; i ++) {
    //     MessagesView.updateRender(data.results[i]);
    //   }
    // });
  },

  updateRoom: function(selectedRoom) {
    //console.log('function is called');
    //console.log(selectedRoom);
    $('.chat').remove();
    Parse.readAll((data) => {
      for (let i = 0; i < data.results.length; i++) {
        //console.log('got into for loop');
        // debugger;
        
        //console.log('selectedRoom:', selectedRoom, 'length', selectedRoom.length);
        // debugger;
        // var str = ' ' + data.results[i].roomname + ' ';
        //console.log('message roomname:', str, 'length', str.length);
        //console.log('are they equal?', str === selectedRoom);
        if (data.results[i].roomname === selectedRoom) {
          MessagesView.renderMessage(data.results[i]);
          //console.log('met conditional');
        }
      }
      App.clickOnFriends();
    });
  }
};

/*
var message = {
  username: 'Mel Brooks',
  text: 'Never underestimate the power of the Schwartz!',
  roomname: 'lobby'
};
*/
