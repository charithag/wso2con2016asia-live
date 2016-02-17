$('#track_1').click(function() {
        $.getJSON("conf/conf.json",
            function (json) {
            $.each( json, function( key,value ) {
                console.log(key);
                if(key=="track 1"){
                    if($('html').hasClass('mobile')){
                    	//console.log(value);
			if($('html').hasClass('apple')){
				window.location = 'http://52.0.20.127:1935/live/track1/playlist.m3u8';
			}
			else{
				window.location = 'rtsp://52.0.20.127:1935/live/track1';
			}
		    }
		    else {
			$('#stream_url').val(value['url']);
                    	$('#btn_start').click();
		    }
                };

            });
         });
         $("#myModal").modal({backdrop: 'static', keyboard: false});
});

$('#track_2').click(function() {
         $.getJSON("conf/conf.json",
             function (json) {
             $.each( json, function( key,value ) {
                 console.log(key);
                 if(key=="track 2"){
                    if($('html').hasClass('mobile')){
                    	//console.log(value);
			if($('html').hasClass('apple')){
				window.location = 'http://52.0.20.127:1935/live/track2/playlist.m3u8';
			}
			else{
				window.location = 'rtsp://52.0.20.127:1935/live/track2';
			}
		    }
		    else {
			$('#stream_url').val(value['url']);
                    	$('#btn_start').click();
		    }
                 };

             });
         });
         $("#myModal").modal({backdrop: 'static', keyboard: false});
});

$('#track_3').click(function() {
        $.getJSON("conf/conf.json",
            function (json) {
            $.each( json, function( key,value ) {
                console.log(key);
                if(key=="track 3"){
                    if($('html').hasClass('mobile')){
                    	//console.log(value);
			if($('html').hasClass('apple')){
				window.location = 'http://52.0.20.127:1935/live/track3/playlist.m3u8';
			}
			else{
				window.location = 'rtsp://52.0.20.127:1935/live/track3';
			}
		    }
		    else {
			$('#stream_url').val(value['url']);
                    	$('#btn_start').click();
		    }
                };

            });
        });
        $("#myModal").modal({backdrop: 'static', keyboard: false});
});


$('close_mrk').click(function(){
    $('btn_stop').click();
});


$('close_btn').click(function(){
    $('btn_stop').click();
});
