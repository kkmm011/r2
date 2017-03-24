(function(){
var titles=[],codes=[],d,s;
if (typeof myTitles !== "undefined") titles=myTitles;
if (typeof myCodes !== "undefined") codes=myCodes;
$('.rank_table').each(function(){
  var $lnk=$(this).prev().find('a'),
  title=$lnk.text(),
  code=$lnk.attr('href').split('/')[3],
  s=$(this).text(),
  tanpen = s.indexOf('短編')>=0,
  m=/.*全(.*)部分.*/.exec(s),
  num = m ? parseInt(m[1]) : 0;
  if (tanpen || num <= 20 || ~titles.indexOf(title) || ~codes.indexOf(code)) {
    $(this).parent().remove();
  }
});
})();
