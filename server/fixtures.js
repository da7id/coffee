if( Pours.find().count() === 0) {
  Pours.insert({
    brew: 'Hario v60',
    brewTime: '3:20',
    brewDate: '11/4/2015',
    temperature: '60',
    beans: 'Starbucks Sumatra',
    grind: '5',
    date: Date()
  });
  Pours.insert({
    brew: 'Hario v60',
    brewTime: '3:20',
    brewDate: '11/4/2015',
    temperature: '60',
    beans: 'Starbucks Sumatra',
    grind: '5',
    date: Date()
  });
  Pours.insert({
    brew: 'Hario v60',
    brewTime: '3:20',
    brewDate: '11/4/2015',
    temperature: '60',
    beans: 'Starbucks Sumatra',
    grind: '5',
    date: Date()
  });
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
