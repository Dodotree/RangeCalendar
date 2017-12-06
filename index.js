window.onload = function(e){
};


/* your script should have RangeCalendar class at this point, as well as moment.js for it */
/* example of UI functions for use with forms */

var RangeCalendarUI = {

    addDateRangeNode: function(col_name){
        var node = $('<div class="query-param range-'+ col_name +'">'
            + '<span class="column">' + col_name + '</span> '
            + '<input form="query-form" class="query-date-start" type="hidden" name="query[range][' + col_name + '][start]" value=""/>'
            + '<input form="query-form" class="query-date-end" type="hidden" name="query[range][' + col_name + '][end]" value=""/>'
            + '<span class="range-calendar-holder"></span>'
            + '<a class="close">&times;</a>'
        + '</div>').appendTo($(".table-queries-list"));
        var pa = node.find(".range-calendar-holder");
        new RangeCalendar({'pa': pa, 'callback': SearchQuery.setDateRangeInput });
        SearchQuery.bind_inputs();
        $(".table-query").show();
    },

    setDateRangeInput: function(range){
        var inp_start = range.pa.siblings(".query-date-start");
        var inp_end = range.pa.siblings(".query-date-end");
        inp_start.val( range.from.format('Y-MM-DD HH:mm:ss'));
        inp_end.val( range.to.format('Y-MM-DD HH:mm:ss'));
console.log(range.from.format('Y-MM-DD HH:mm:ss'), range.to.format('Y-MM-DD HH:mm:ss') );
    }

};

