/*using Array inside Object*/
var rahim={
      names:['mahedi','hassan','sharif'],
     age:[21,23,34,56],
     address:'Dhaka',
     job:'Job Holder',
    
 }
  console.log(rahim.names[1]);

  var objarr=['Mahedi',
      'Hassan',{
        age:21,
        address:'Dhaka',
        job:'Job Holder',
      },
      'Bangladesh'
  ]
  console.log(objarr[2].age);
 