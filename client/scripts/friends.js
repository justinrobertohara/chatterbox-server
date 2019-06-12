var Friends = {

  toggleStatus: function (user) {
    event.preventDefault();
    var friend = $.trim(user);
    if (Friends.list.includes(friend)) {
      var index = Friends.list.indexOf(friend);
      Friends.list.splice(index, 1);
    } else {
      Friends.list.push(friend);
    }
    $('.username').each(function(elem) {
      //go through each element that has a class of username
      // if innerhtml of username = user
      if ($(this).text() === user) {
        $(this).toggleClass('friend');
      }
    });
  },

  list: []

};

/*
iterate over chats with $.each()
for each div in chats
  for Friends.list.length
    check to see if $(.userName) === Friends.list[i]
      if it does
        add the friend class to current chat div
*/