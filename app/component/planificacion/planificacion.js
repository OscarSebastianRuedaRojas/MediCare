export class Planificacion extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML = /* html */`
        <style rel="stylesheet">
          @import "./app/component/planificacion/planificacion.css";
        </style>
        <div class="formCard">
        <div class="formCard-body">
            <form id="taskForm">
                <fieldset>
                    <legend style="text-align: center">Ingrese Años</legend>
                    <div class="form-group">
                        <input type="text" id="años" name="años" class="años" placeholder="Añadir los años del paciente" required>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Fecha Ultima Menstruacion</legend>
                    <div class="form-group">
                        <input type="date" id="fechaMenstruacion" name="fechaMenstruacion" class="Menstruacion" placeholder="Añadir fecha de la última menstruación" required>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Fecha última citología</legend>
                    <div class="form-group">
                        <input type="date" id="citologia" name="citologia" class="citologia" placeholder="Añadir fecha de la última citología" required>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Metodo Actual</legend>
                    <div class="form-group">
                        <select name="metodo" id="metodoSelect">
                            <option value="Ninguno">Ninguno</option>
                            <option value="Diu">Diu</option>
                            <option value="Acos">Acos</option>
                            <option value="Implante Subdermico 3 años">Implante Subdermico 3 años</option>
                            <option value="Implante Subdermico 4 años">Implante Subdermico 4 años</option>
                            <option value="Implante Subdermico 5 años">Implante Subdermico 5 años</option>
                            <option value="Preservativos">Preservativos</option>
                            <option value="Inyeccion Mensual">Inyeccion Mensual</option>
                            <option value="Inyeccion Trimestral">Inyeccion Trimestral</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Gestación</legend>
                    <div class="form-group">
                        <input type="text" id="gestacion" name="gestacion" class="gestacion" placeholder="Añadir gestación" required>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Metodo que desea</legend>
                    <div class="form-group">
                        <select name="metodoDeseado" id="metodoDeseadoSelect">
                            <option value="Diu">Diu</option>
                            <option value="Acos">Acos</option>
                            <option value="Implante Subdermico 3 años">Implante Subdermico 3 años</option>
                            <option value="Implante Subdermico 4 años">Implante Subdermico 4 años</option>
                            <option value="Implante Subdermico 5 años">Implante Subdermico 5 años</option>
                            <option value="Preservativos">Preservativos</option>
                            <option value="Inyeccion Mensual">Inyeccion Mensual</option>
                            <option value="Inyeccion Trimestral">Inyeccion Trimestral</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Menarquia</legend>
                    <div class="form-group">
                        <input type="text" id="menarquia" name="menarquia" class="menarquia" placeholder="Añadir Menarquia" required>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Inicio Vida Sexual</legend>
                    <div class="form-group">
                        <input type="text" id="inicioVidaSexual" name="inicioVidaSexual" class="inicioVidaSexual" placeholder="Añadir Inicio Vida Sexual" required>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Compañeros Sexuales</legend>
                    <div class="form-group">
                        <input type="text" id="companerosSexuales" name="companerosSexuales" class="companerosSexuales" placeholder="Añadir Compañeros Sexuales" required>
                    </div>
                </fieldset>
                <button type="submit">Enviar</button>
            </form>
        </div>
    </div>
    <p class="text">

    </p>
        `;
        const form = this.querySelector('#taskForm')

        const p = this.querySelector(".text")
        form.addEventListener('submit', (e) => {
        let data = Object.fromEntries(new FormData(form).entries());
        if(data.metodo==="Ninguno"){
        p.innerHTML = `MUJER ADULTA DE ${data.años} AÑOS, ${data.gestacion}, MENARQUIA A LOS ${data.menarquia} AÑOS, FECHA ULTIMA REGLA ${data.fechaMenstruacion}, MANIFIESTA INICIO DE VIDA SEXUAL A LOS ${data.inicioVidaSexual} AÑOS , COMPAÑEROS SEXUALES (${data.companerosSexuales}) MANIFIESTA SENTIRSE BIEN , NO SANGRADO , NO DOLOR , COMO METODO DE PLANIFICACIÓN FAMILIAR ${data.metodo}  REFIERE BUENA ADHERENCIA AL METODO, ( SE LE EXPLICA TODOS LOS MÉTODOS DE PLANIFICACIÓN DISPONIBLES, SE LE EXPLICA CUALES SON LOS MÉTODOS DE PLANIFICACIÓN FAMILIAR QUE LE OFRECE LA NUEVA EPS CON VENTAJAS Y DESVENTAJAS (PRESERVATIVO: CONDÓN, ANTICONCEPTIVOS ORALES, POMEROY:LIGADURA DE TROMPAS EN LA MUJER, DIU: DISPOSITIVO, IMPLANTE SUBDERMICO, ANTICONCEPTIVOS INYECTABLES Y LA VASECTOMIA EN EL HOMBRE, PILDORA DE EMERGENCIA OCASIONAL) SE LE ENFATIZA Y SENSIBILIZA SOBRE LA IMPORTANCIA DE LA DOBLE PLANIFICACIÓN CON SISTEMAS DE BARRERA PARA EVITAR ENFERMEDADES DE TRASMISION SEXUAL Y SISTEMA HORMONAL O DEFINITIVO PARA EVITAR EL EMBARAZO INDESEADO, REFIERE ENTENDER, POR EL MOMENTO SIN CONTRAINDICACION PARA EL USO DEL MISMO, EXPLICO QUE NINGUN METODO ES 100% CONFIABLE. SE LE DAN INDICACIONES ESPECIFICAS PARA PROMOVER LA SEXUALIDAD RESPONSABLE)  SE INDAGA SI DESEA QUEDAR EN EMBARAZO A LARGO O CORTO PLAZO PARA POSIBLE INGRESO PROGRAMA PRECONCEPCIONAL REFIERE ${data.metodoDeseado} (SE LE INFORMA QUE EN EL MOMENTO QUE DESEE QUEDAR EN EMBARAZO PUEDE ASISTIR 1 AÑO ANTES A CONSULTA PRECONCEPCIONAL PARA GENERARLE LABORATORIOS DE SANGRE Y VALORACION MEDICA CON EL FIN DE PLANIFICAR EL EMBARAZO , PREPARARCE PARA LA CONCEPCION Y REALIZAR TRATAMIENTOS OPORTUNOS SI REQUIERE)  , SE LE EDUCA Y EXPLICA QUE LAS RELACIONES SEXUALES SEGURAS SON CON UTILIZACIÓN DE PRESERVATIVO PARA EVITAR ETS, FECHA TOMA DE ULTIMA CITOLOGIA ${data.citologia}.. ,( SE ENVIA ORDEN, SE DIRECCIONA PARA TOMA DE LA MISMA Y SE LE EXPLICA LA IMPORTANCIA) , MANIFIESTA BUENA RELACIÓN DE PAREJA , NO SIGNOS DE VIOLENCIA, DEBE HACER EJERCICIO , DIETA SALUDABLE ,AUTO EXAMEN DE MAMA , SE EXPLICA COMO REALIZAR ,Buscar los siguientes signos de alarma en examen de mama:
        -Masas en la mama o axila, Engrosamiento de la piel o retracción, Cambio en el color de la piel, Retracción del pezón de reciente aparición, Asimetría de las mamas de reciente aparición, Ulceraciones en la mama o pezón, Secreciones espontáneas o sangrado por el pezón
        Se educa sobre finalidad e importancia de las actividades de tamización , SE LE EXPLICA AMPLIAMENTE: Recomendaciones generales: Se promueve hábitos de higiene personal y de cuidado bucal, de la salud mental, se brinda educación sobre prevención de accidentes incluyendo accidentes de tránsito. Se brinda educación sobre signos de alarma y manejo básico de las condiciones prevalente promoción. Se incita a ejercitarse a diario según su edad. Cuidar la salud bucal, cepillar los dientes después de cada comida y visitar al odontólogo de acuerdo con indicaciones. Estimular el lavado de manos. Cumplir con las citas de vacunación programadas y mantener completo el esquema. Recomendaciones de actividad física: 50 minutos semanales de actividad física moderada que aumente levemente la frecuencia cardiaca o respiratoria. 75 minutos semanales de actividad física vigorosa. Una combinación equivalente de actividad física moderada y vigorosa. Actividades de fortalecimiento muscular por lo menos 2 días a la semana.
        Recomendaciones de alimentación: Consuma alimentos variados y nutritivos diariamente. La alimentación diaria debe incluir: frutas, verduras y hortalizas de diferentes colores, leguminosas (frijol, lenteja, garbanzo), cereales integrales, nueces, lácteos bajos en grasa, carne magra, pescado y huevo. Aumente el consumo de frutas y de verduras. Son ""5 al día"". Vigile su peso corporal. Evite el consumo de bebidas azucaradas. Limite el consumo de sal en su alimentación. Seleccione y prefiera alimentos integrales Recomendaciones de derechos sexuales y reproductivos: Respeto a su integridad física y la ausencia de violencia, coacción o abuso, conocer la diferencia entre sexualidad y reproducción, contar con información oportuna, veraz y completa para que exploren y, más adelante, puedan disfrutar una vida sexual placentera sin riesgos, vergüenza, prejuicios, culpa o cualquier otro temor infundado, expresar libre y autónomamente su orientación sexual e identidad de género, contar con información oportuna, veraz, completa, y apropiada para cada momento de su desarrollo, para que, llegado el momento, decida libre e informadamente si quiere, cuándo y con quién tener relaciones sexuales consentidas, contar con información oportuna, veraz, completa, y apropiada para cada momento de su desarrollo, para que, llegado el momento, decida libre e informadamente si quiere un embarazo y sepa qué hacer en cualquier caso, Contar con información oportuna, veraz, completa, 
        Recomendaciones para Salud visual: Practicar actividad física al aire libre manteniendo las medidas de cuidado por la pandemia, iluminar adecuadamente las áreas de lectura, evitar exposición prolongada a pantallas.
        Recomendaciones para Salud auditiva: Proteger su cabeza y oídos del viento y el frío para evitar otitis, no usar bastoncillos para limpiar sus oídos, evitar los espacios con mucho ruido, así como el exceso de ruido en nuestro hogar, durante el baño, vigilar que no le entre agua en el conducto auditivo; y después del baño, secárselos bien, es recomendable que escuchen la música a un volumen tolerable o que, en vez, usen auriculares con control de volumen o, en su defecto, que usen unos protectores auditivos para evitar que se dañe su oído innecesariamente.
        Signos de alarma: Si presenta dificultar respiratoria, palpitaciones y sudoración, cefalea asociado a visión borrosa que no resuelve, tensión arterial >140/80 mmHg, glucosa en sangre >270 mg/dl, no orina y se inflaman (edema) piernas, manos o rostro, no tolera alimento o vomita todo, cambio en coloración de piel de dedos (se pone morado o negro), pérdida de conciencia, fiebre >38° que no resuelve con acetaminofén, perdida de la conciencia, alteración neurológica, dolor en el pecho intenso, edemas (hinchazón repentina de los pies o las manos), alteración de la visión, consultar a urgencias, el paciente refiere comprender.
        FECHA DE PROXIMA CONSULTA: cita control en 2 meses por enfermería o medicina general
        					`
        }else{
                p.innerHTML = `MUJER ADULTA DE ${data.años} AÑOS, ${data.gestacion}, MENARQUIA A LOS ${data.menarquia} AÑOS,  FECHA ULTIMA REGLA ${data.fechaMenstruacion} , MANIFIESTA INICIO DE VIDA SEXUAL A LOS ${data.inicioVidaSexual} AÑOS , COMPAÑEROS SEXUALES (${data.companerosSexuales}) MANIFIESTA  SENTIRSE BIEN , NO SANGRADO , NO DOLOR , COMO METODO DE PLANIFICACIÓN FAMILIAR ${data.metodo} REFIERE BUENA ADHERENCIA AL METODO,SE INDAGA SI DESEA QUEDAR EN EMBARAZO A LARGO O CORTO PLAZO PARA POSIBLE INGRESO PROGRAMA PRECONCEPCIONAL REFIERE A LARGO PLAZO. (SE LE INFORMA QUE EN EL MOMENTO QUE DESEE QUEDAR EN EMBARAZO PUEDE ASISTIR 1 AÑO ANTES A CONSULTA PRECONCEPCIONAL PARA GENERARLE LABORATORIOS DE SANGRE Y VALORACION MEDICA CON EL FIN DE PLANIFICAR EL EMBARAZO , PREPARARCE PARA LA CONCEPCION Y REALIZAR TRATAMIENTOS OPORTUNOS SI REQUIERE) , SE LE EDUCA Y EXPLICA QUE  LAS RELACIONES SEXUALES SEGURAS  SON CON UTILIZACIÓN DE PRESERVATIVO PARA EVITAR ETS USUARIA ELIGE COMO METODO ${data.metodoDeseado}, FECHA TOMA DE ULTIMA CITOLOGIA ${data.citologia}, SE ENVIA ORDEN, SE DIRECCIONA PARA TOMA DE LA MISMA Y SE LE EXPLICA LA IMPORTANCIA, MANIFIESTA BUENA RELACIÓN DE PAREJA , NO SIGNOS DE VIOLENCIA, DEBE  HACER EJERCICIO , DIETA SALUDABLE ,AUTO EXAMEN DE MAMA , SE EXPLICA COMO REALIZAR ,Buscar los siguientes signos de alarma en examen de mama:
                -Masas en la mama o axila, Engrosamiento de la piel o retracción, Cambio en el color de la piel, Retracción del pezón de reciente aparición, Asimetría de las mamas de reciente aparición, Ulceraciones en la mama o pezón, Secreciones espontáneas o sangrado por el pezón
                Se educa sobre finalidad e importancia de las actividades de tamización    , SE LE EXPLICA AMPLIAMENTE:                                                                                                                                                                                                                                                                                            Recomendaciones generales: Se promueve hàbitos de higiene personal y de cuidado bucal, de la salud mental, se brinda educaciòn sobre prevenciòn de accidentes incluyendo accidentes de transito.  Se brinda educación sobre signos de alarma y manejo básico de las condiciones prevalentepromociòn s. Se incita a ejercitarse a diario según su edad. Cuidar la salud bucal, cepillar los dientes después de cada comida y visitar al odontólogo de acuerdo a indicaciones. Estimular el lavado de manos. Cumplir con las citas de vacunación programadas y mantener completo el esquema.                                                                                                                                                                                                                                                                                                                                                                                               Recomendaciones de actividad fisica: 50 minutos semanales de actividad física moderada que aumente levemente la frecuencia cardiaca o respiratoria. 75 minutos semanales de actividad física vigorosa. Una combinación equivalente de actividad física moderada y vigorosa. Actividades de fortalecimiento muscular por lo menos 2 días a la semana.
                Signos de alarma: Si presenta dificultar respiratoria, palpitaciones y sudoración, cefalea asociado a visión borrosa que no resuelve, tensión arterial >140/80 mmHg, glucosa en sangre >270 mg/dl, no orina y se inflaman (edema) piernas, manos o rostro, no tolera alimento o vomita todo, cambio en coloración de piel de dedos (se pone morado o negro), pérdida de conciencia, fiebre >38° que no resuelve con acetaminofén, perdida de la conciencia, alteración neurológica, dolor en el pecho intenso, edemas (hinchazón repentina de los pies o las manos), alteración de la visión,consultar a urgencias, el paciente refiere comprender.
                Se envia valoración por odontologia                                                                                                                                                                                                                                                                                                                                                                                                                                  Se envia valoración por optometria                                                                                                                                                                                                                                                                                                                                                                                                                                    SE DIRECCIONA A VACUNACIÓN
                FECHA DE PROXIMA CONSULTA: cita control en 2 meses por enfermeria o medicina general					`
            } 
                e.stopImmediatePropagation();
                e.preventDefault();
            })
    }
}
customElements.define("planificacion-mujeres", Planificacion);