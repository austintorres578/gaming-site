import React from "react";
import NavBar from "./components/NavBar";
import MainSection from "./components/MainSection";

//     fetch("https://id.twitch.tv/oauth2/token?client_id=hpv9t2wprfyjcp27e9ky8jx2xkdy7t&client_secret=23ioyedivaagszh47eqrgnuea5bsq3&grant_type=client_credentials", {
//        method:'POST'
      
//       })
//       .then(response=>{
//         return response.json()
//       })
//   .then(data=> console.log(data))
//   .catch(error=>console.log("Error"))

 fetch("https://api.igdb.com/v4/games",{
     method:'POST',
     headers:{
         "Client-ID":"hpv9t2wprfyjcp27e9ky8jx2xkdy7t",
         "Authorization":"Bearer zdng3jnh7zdzjvduzr9xp3cod4kdfv"
     }
 })
     .then(response=>{
         return response.json()
     })
     .then(data=> console.log(data))
     .catch(error=>console.log("error"))



export default function App(){
    return(
        <div>
            <NavBar />
            <MainSection />
        </div>
    )
};