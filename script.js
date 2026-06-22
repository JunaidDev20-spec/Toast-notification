function toastContainer(config){

      const parent = document.querySelector(".parent");
      return function(str){
          let div = document.createElement("div");
            div.textContent = str;
            div.className = 
            "inline-block bg-gray-800 text-white px-6 py-3 rounded shadow-lg pointer-events-none transition-opacity duration-300" ;
           parent.appendChild(div);
            setTimeout(()=>{
                 parent.removeChild(div);

            } , config.duration * 1000);
  
     
      };


}

let toaster = toastContainer({
      positionX : "right",
      positionY: "top",
      theme: "dark",
      duration: 3,

});

document.querySelector("#showToastBtn").addEventListener("click" ,() => {
      toaster("Download done");
});
