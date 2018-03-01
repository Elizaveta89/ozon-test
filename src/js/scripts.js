$(function() {

	for (var i = 1; i <= 4; i++) {

        $('#piece'+ i).draggable({
	        scope: 'cell' + i,
	        containment: game,
	        snap: ".droppable",
	        snapMode: "inner",
	        snapTolerance: 10
        });

        $('#drop'+i).droppable({
	        scope: 'cell' + i,
	        drop: function (event, ui) {
                var draggableId = ui.draggable.attr("id");
                $("#" + draggableId).draggable( "disable" );
            },
	        tolerance: "fit"
        });
    }
});