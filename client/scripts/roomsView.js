var RoomsView = {

  $button: $('#rooms .addRoom'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', Rooms.add);
  },

  //render: _.template(),

  renderRoom: function(room) {
    // var $newRoom = '<option>' + room + '</option>';
    var roomClass = `${room}`;
    roomClass = roomClass.split(' ').join('_');
    RoomsView.$select.append(`<option class=${roomClass}> ${room} </option>`);
  },



};

/*
  render: _.template(`
      <option class=${room}>
        <%- roomname%>
      </option>
    `)
    
    example:
    <%- roomname%>

    */

