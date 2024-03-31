export class Home extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML = /* html */`
        <style rel="stylesheet">
          @import "./app/component/home/home.css";
        </style>
        <section class="main-content">
        <div class="container">
            <div class="category" id="gestante">
                <img src="storage/img/gestante.jpg" alt="">
                <h2>Gestantes</h2>
                <p>Información sobre cuidados prenatales, control del embarazo y más.</p>
            </div>
            <div class="category" id="planificacion">
                <img src="storage/img/Planificacion-familiar.png" alt="">
                <h2>Planificación Familiar</h2>
                <p>Consejos sobre métodos anticonceptivos y planificación del embarazo.</p>
            </div>
            <div class="category" id="bebe">
                <img src="storage/img/bebe.jpg" alt="">
                <h2>Bebés</h2>
                <p>Cuidados del recién nacido, alimentación, vacunación y desarrollo.</p>
            </div>
            <div class="category" id="infancia">
                <img src="storage/img/Infancia.jpg" alt="">
                <h2>Infancia</h2>
                <p>Atención pediátrica, enfermedades comunes, crecimiento y desarrollo.</p>
            </div>
            <div class="category" id="adolescencia">
                <img src="storage/img/adolescenciaa.avif" alt="">
                <h2>Adolescentes</h2>
                <p>Salud y bienestar en la adolescencia, prevención de riesgos y más.</p>
            </div>
        </div>
    </section>

    <footer>
        <p>@Sebastian Rueda</p>
    </footer>
        `;
        let cards = this.querySelectorAll(".category")
        let mainContent = document.querySelector(".mainContent")
        cards.forEach(card => {
            card.addEventListener("click", ()=>{
                let id = card.id;
                switch (id){
                    case 'bebe':
                        mainContent.innerHTML= "<primera-infancia></primera-infancia>";
                        break;
                    case 'infancia':
                        mainContent.innerHTML= "<infancia-niños></infancia-niños>";
                        break;
                    case 'adolescencia':
                        mainContent.innerHTML= "<adolescencia-task></adolescencia-task>";
                        break;
                    case 'gestante':
                        mainContent.innerHTML= "<gestantes-mujeres></gestantes-mujeres>";
                        break;
                    case 'planificacion':
                        mainContent.innerHTML= "<planificacion-mujeres></planificacion-mujeres>";
                        break;
                }
            })
        });
    }
}
customElements.define("home-content", Home);