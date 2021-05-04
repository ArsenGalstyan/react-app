/**crated by Ars
 * 10 00 5/4/2021
 */


export default function zapros(method,url){
    return new Promise(async(rslv,rjct)=>{
     
      const req = await fetch(url,{method})
      rslv(req.json())
        
            
    });
    

    // return new Promise((stacvec,dzxoxvec)=>{
    //     let ajax = new XMLHttpRequest()
    //     ajax.open(method,url)
    //     ajax.send()
    //     ajax.onload = function(){
    //         if(this.readyState === 4){
    //             if(this.status < 400)stacvec(JSON.parse(this.response))
    //             else dzxoxvec(this.statusText)
    //         }
    //     }
    // })
}