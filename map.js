const data = [
    {
        num:2
    },
    {
        num:3
    },
    {
        num:4
    }
    
]
// fname 


const map1 = data.map(function(x){
  
    console.log(x);
    //   return {
    //     abc:'',
    //     asddsa:''
    //   };

      return {
        fname :"",
        num : x.num,
        name :" "
    
      };
   // return  { fname:x };
  });

 console.log(map1);