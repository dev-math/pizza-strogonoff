function navbar(){
    return `    <div class="header">
    <div>
        <img class="logo" src="https://css.banggood.in/web/src/img/header-new-logo@2x.png?v=ef2889d">
        
    </div>
    
    <div class="container">
        <div class="search_wrap search_wrap_1">
            <div class="search_box">
                <input type="text" class="input" placeholder="">
                <div class="btn btn_common">
                    <i class="fas fa-search"></i>
                </div>
            </div>
        </div>
        
        
    </div>
    <div class="shipping">
    <div class="ship">
        <i class="shipto">Ship to</i>
        <div class="flag">
            <span>English (India)</span>
            <span>/</span>
            <span>USD</span>
        </div>
    </div>
</div>
<a href = "login.html"><div>
    <img  class="image" src= "profile.png" />
    <a class="sign">Hello
        <a class="sign1">Sign in</a>
    </a>
</div></a>
<div>
    <img  class= "cart" src="cart.png"/>
</div>

`
}

export{navbar};