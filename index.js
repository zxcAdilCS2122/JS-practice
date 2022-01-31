<p>Today is :<script type="text/javascript">
  var day=new Date();
  var weekday=new Array(7);
  weekday[0]="Sunday";
  weekday[1]="Monday";
  weekday[2]="Tuesday";
  weekday[3]="Wednesday";
  weekday[4]="Thursday";
  weekday[5]="Friday";
  weekday[6]="Saturday";
  document.write( weekday[day.getDay()]);
  </script></p>

  <p>Date:<script type="text/javascript">
  var day = new Date();
  document.write(day.getDate());
  </script></p>


<p>Current time is : <script type="text/javascript">
function checkTime(i)
{
if (i<10)
{
i="0" + i;
}
return i;
}
var t = new Date();
document.write(checkTime(t.getHours()));
document.write(".");
document.write(checkTime(t.getMinutes()));
document.write(".");
document.write(checkTime(t.getSeconds()));
</script></p>

  <p id="1"></p>
     <p id="2"></p>
     <p id="3"></p>
     <p id="4"></p>
     <p id="5"></p>
     <script>
      var date1 = new Date("06/30/2021");
    var date2 = new Date("07/20/2024");
    var Difference_In_Time = date2.getTime() - date1.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    document.write("Total number of days between dates <br>"
          + date1 + "<br> and <br>"
          + date2 + " is: <br> "
          + Difference_In_Days+" days left untill the freedom ");
    </script><br><br>
