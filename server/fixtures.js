if( Pours.find().count() === 0) {
  Pours.insert({
    brew: 'Hario v60',
    date: Date()
  });
}
if( Beans.find().count() === 0) {
  Beans.insert({
    brewer: 'Starbucks',
    roast: 'Sumatra' 
  });
}
