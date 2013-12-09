	var myDataRef = new Firebase('https://cba156.firebaseio.com/user');
	$('#messageInput').keypress(function (e) {
        //alert("hello");
        if (e.keyCode == 13) {
          var name = $('#nameInput').val();
          var text = $('#messageInput').val();
          myDataRef.push({name: name, text: text});
          $('#messageInput').val('');
        }
      });
  function clickButton(){
    var name = $('#nameInput').val();
          var text = $('#messageInput').val();
          myDataRef.push({name: name, text: text});
          $('#messageInput').val('');
  }
	myDataRef.on('child_added', function(snapshot){
        var message = snapshot.val();
        displayChatMessage(message.name, message.text);
      });
      function displayChatMessage(name, text){
        var divtest = $('<div class="panel-body">').text(name+': '+text);
        divtest.appendTo($('#messagesDiv'));
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
      }