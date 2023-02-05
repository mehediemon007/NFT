;(function($){

    var mobileMenuIcon = $('.mobile-menu-icon');

    
    if (mobileMenuIcon.length) {
        mobileMenuIcon.on('click', function (e) {
            e.preventDefault();
            $("i",this).toggleClass('fa-bars fa-times');
            $('.vea-main-nav').slideToggle();
        });

    }

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
