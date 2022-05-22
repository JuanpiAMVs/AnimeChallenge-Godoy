let coso = true;

const customPromise = (time, task) =>{
   return new Promise((resolve,reject) =>{
       setTimeout(()=>{
           if (coso){
               resolve(task)
           }
           else{reject("Error")}
       }, time);
   });
}

export default customPromise;