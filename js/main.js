$(function() {
	$('#ent').click(function(event) {
		event.preventDefault();
		$('#myModal').modal();
	});

	$('#reg').click(function(event) {
		event.preventDefault();

		var user = {
			login: 	 $('#login').val(),
			password: 	 $('#pass').val(),
			name: 	 $('#name').val(),
			surname: $('#sname').val()
		};

		$.ajax({
			url: '/update',
		    type: 'post',
		    data: JSON.stringify(user),
		    contentType: 'application/json',
		    dataType: 'json'
		});
	});

	$('#entry').click(function(event) {
		event.preventDefault();

		var login = {
			login: 	 $('#log').val(),
			password: 	 $('#pwd').val()
		};

		$.ajax({
			url: '/user',
		    type: 'post',
		    data: JSON.stringify(login),
		    contentType: 'application/json',
		    dataType: 'json',
		    success: function(data) {
		    	console.log(data);
		    }
		});
	});
});	