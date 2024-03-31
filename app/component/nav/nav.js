export class SideBar extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML = /* html */`
        <style rel="stylesheet">
          @import "./app/component/nav/nav.css";
        </style>
        <header>
        <div class="logo">
            <img src="storage/img/LOGO-FOSCAL-2020-removebg-preview.png" alt="">
        </div>
        <nav>
            <a href="#" data-verocultar='["H"]'>Home</a>
            <a href="#" data-verocultar='["PI"]'>Primera Infancia</a>
            <a href="#" data-verocultar='["I"]'>Infancia</a>
            <a href="#" data-verocultar='["A"]'>Adolescencia</a>
            <a href="#" data-verocultar='["G"]'>Gestantes</a>
            <a href="#" data-verocultar='["PL"]'>Planificacion</a>
        </nav>
        <div class="menu-icons">
            <i id="menu" class='bx bx-menu'></i>
        </div>
    </header>
        `;
        this.querySelectorAll("a").forEach((val)=>{
            val.addEventListener("click", (e)=>{
                let data = JSON.parse(e.target.dataset.verocultar)[0];
                let mainContent = document.querySelector('.mainContent');
                if (e.target.dataset.verocultar == '["Dn"]') {
                    console.log("yes");
                    mainContent.innerHTML= "<home-content></home-content>";
                }
                switch (data){
                    case 'H':
                        mainContent.innerHTML= "<form-register></form-register>";
                        break;
                    case 'PI':
                        mainContent.innerHTML= "<form-marca></form-marca>";
                        break;
                    case 'I':
                        mainContent.innerHTML= "<form-persona></form-persona>";
                        break;
                    case 'A':
                        mainContent.innerHTML= "<form-estado></form-estado>";
                        break;
                    case 'G':
                        mainContent.innerHTML= "<form-estado></form-estado>";
                        break;
                    case 'PL':
                        mainContent.innerHTML= "<planificacion-mujeres></planificacion-mujeres>";
                        break;
                }
                e.stopImmediatePropagation();
                e.preventDefault();
            })
        })
    }
}
customElements.define("sidebar-nav", SideBar);