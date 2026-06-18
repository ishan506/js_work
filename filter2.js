const user =[{name: "ishan" , class : 12 },
    {name :"l" ,class : 21}
];
  console.log(user.filter (x=> x.class<30 ).map (x => x.name));