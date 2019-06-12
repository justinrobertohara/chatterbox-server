var MessageView = {

  // messageRoom: 'a a',

  // fixedName: MessageView.messageRoom.split(' ').join('_'),

  render: _.template(`
      <div class="chat <%- roomname%>">
        <div class=username>
        <%- username%>
        </div>
        <div>
          <%- text%>          
        </div>
      </div>
    `),

  renderFriend: _.template(`
    <div class="chat <%- roomname%>">
      <div class="username friend">
      <%- username%>
      </div>
      <div>
        <%- text%>          
      </div>
    </div>
  `)

  /*render: function(message) {
    var fixedName = message.roomname.split(' ').join('_');
    _.template(`
      <div class=chat ${fixedName}>
        <div class=username>
        <%- username%>
        </div>
        <div>
          <%- text%>          
        </div>
      </div>
    `);
  }  */

};



/*
Example escape function

var escapeHTML = function (str) {
  var text = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

*/