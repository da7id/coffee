sample_brews=['Hario v60','Chemex','French Press'];
sample_times=['11:30','9:14','3:34','12:20'];
sample_dates=['10/04/2015','09/30/2015','04/28/2015','03/12/2015','10/01/2015'];
sample_temperatures=['200','194','180'];
sample_beans=['Starbucks Sumatra','Starbucks French Roast','Big Bend Blonde'];
sample_grind=['1','6','9'];
sample_rating=['3','4','5'];
sample_notes=['This coffee ruled','This coffee was lame','This coffee was totally mediocre'];

if( Pours.find().count() === 0) {
  for (i = 0; i < 20; i++) {
    Pours.insert({
      brew: sample_brews[Math.floor((Math.random() * 3))],
      brewTime: sample_times[Math.floor((Math.random() * 3))],
      brewDate: sample_dates[Math.floor((Math.random() * 5))],
      temperature: sample_temperatures[Math.floor((Math.random() * 3))],
      beans: sample_beans[Math.floor((Math.random() * 3))],
      grind: sample_grind[Math.floor((Math.random() * 3))],
      date: sample_dates[Math.floor((Math.random() * 3))],
      rating: sample_rating[Math.floor((Math.random() * 3))],
      notes: sample_notes[Math.floor((Math.random() * 3))]
    });
  }
}
if( Beans.find().count() === 0) {
  Beans.insert({
    brewer: 'Starbucks',
    roast: 'Sumatra' 
  });
  Beans.insert({
    brewer: 'Other Brewer',
    roast: 'Sumatra' 
  });
  Beans.insert({
    brewer: 'Starbucks',
    roast: 'French Roast' 
  });
}
