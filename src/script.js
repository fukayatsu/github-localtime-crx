$("time.js-relative-date").each(function(){
  var originalText = $(this).text();
  var date         = moment($(this).attr("datetime"));
  var dateStr      = date.format("YYYY-MM-DD ddd HH:mm:ss");

  $(this).text(originalText + " ( " + dateStr + " )");
});