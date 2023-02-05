;(function($){

    $(".nav-toggle").on("click",function(){
        $("i", this).toggleClass("fa-solid fa-bars fa-solid fa-xmark");
        $(".nf-main-nav").slideToggle("500")
    })

    $("select").on("click",function(){
        $(this).toggleClass("active")
    })

 

})(jQuery)


(function(){

    // Sticky Nav

    const headerContainer = document.querySelector(".mof-header");
    window.onscroll = ()=>{
        this.scrollY > 30 ? headerContainer.classList.add("sticky") : headerContainer.classList.remove("sticky");
    }

   

})()
