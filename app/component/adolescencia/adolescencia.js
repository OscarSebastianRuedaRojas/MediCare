export class Adolescencia extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML = /* html */`
        <style rel="stylesheet">
          @import "./app/component/adolescencia/adolescencia.css";
        </style>
        <div class="formCard">
        <div class="formCard-body">
            <h1>Adolescentes</h1>
            <form id="taskForm">
                <fieldset>
                <legend style="text-align: center">Genero</legend>
                    <div class="form-group">
                        <select name="genero" id="generoSelect">
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Ingrese Años</legend>
                    <div class="form-group">
                        <input type="text" id="años" name="años" class="años" placeholder="Añadir los años del paciente" required>
                    </div>
                </fieldset>
                <fieldset>
                <legend style="text-align: center">Traido por</legend>
                    <div class="form-group">
                        <select name="Acudiente" id="AcudienteSelect">
                            <option value="Madre">Madre</option>
                            <option value="Padre">Padre</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Ingrese Año Escolar del paciente</legend>
                    <div class="form-group">
                        <input type="text" id="añoEscolar" name="añoEscolar" class="añoEscolar" placeholder="Ingresa el año escolar del paciente" required>
                    </div>
                </fieldset>
                <fieldset>
                <legend style="text-align: center">Convive con</legend>
                    <div class="form-group">
                        <select name="ConviveCon" id="ConviveConSelect">
                            <option value="Padres y hermanos">Padres y hermanos</option>
                            <option value="Padres">Padres</option>
                            <option value="Padre">Padre</option>
                            <option value="Madre">Madre</option>
                            <option value="Abuelos">Abuelos</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Fecha Vacuna VPH</legend>
                    <div class="form-group">
                        <input type="date" id="VacunaVPH" name="VacunaVPH" class="VacunaVPH" placeholder="Añadir fecha de la vacunacion de VPH" required>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Fecha Vacuna Td1</legend>
                    <div class="form-group">
                        <input type="date" id="VacunaTd1" name="VacunaTd1" class="VacunaTd1" placeholder="Añadir fecha de la vacunacion de Td1" required>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Fecha Vacuna Td2</legend>
                    <div class="form-group">
                        <input type="date" id="VacunaTd2" name="VacunaTd2" class="VacunaTd2" placeholder="Añadir fecha de la vacunacion de Td2" required>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Fecha Vacuna Td3</legend>
                    <div class="form-group">
                        <input type="date" id="VacunaTd3" name="VacunaTd3" class="VacunaTd3" placeholder="Añadir fecha de la vacunacion de Td3" required>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Fecha Vacuna Td4</legend>
                    <div class="form-group">
                        <input type="date" id="VacunaTd4" name="VacunaTd4" class="VacunaTd4" placeholder="Añadir fecha de la vacunacion de Td4" required>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Fecha Vacuna Td5</legend>
                    <div class="form-group">
                        <input type="date" id="VacunaTd5" name="VacunaTd5" class="VacunaTd5" placeholder="Añadir fecha de la vacunacion de Td5" required>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Ingresa la proxima consulta</legend>
                    <div class="form-group">
                        <input type="text" id="ProximaConsulta" name="ProximaConsulta" class="ProximaConsulta" placeholder="Ingresa la proxima consulta" required>
                    </div>
                </fieldset>
                <fieldset>
                <legend style="text-align: center">Quien realiazo la consulta?</legend>
                    <div class="form-group">
                        <select name="RealizadoPor" id="RealizadoPorSelect">
                            <option value="Medicina General">Medicina General</option>
                            <option value="Enfermeria">Enfermeria</option>
                            <option value="Medicina Familiar">Medicina Familiar</option>
                        </select>
                    </div>
                </fieldset>
                <button type="submit" class="boton-degradado">Enviar</button>
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
        p.innerHTML = `
        Motivo de consulta: Paciente de género ${data.genero} adolescente de ${data.años} años, traído a consulta por ${data.Acudiente} para control de ciclo vital (adolescencia). Familiar refiere paciente en este momento asintomático, niega fiebre, sudoración persistente, perdida de peso, vomito, diarrea, tos, perdida de la conciencia, episodios convulsivos en los últimos 15 días, adecuada tolerancia a la via oral (consume verduras, frutas, cereales, lácteos, huevos, carnes), niega trastornos de la conducta alimentaria, no alteración comportamental. Diuresis y deposicion sin alteraciones. Familiar manifiesta adecuado rendimiento escolar (año escolar ), niega signos de maltrato o violencia familiar, escolar o comunitario. Niega consumo de alcohol, tabaco o sustancias psicoactivas. No practica deportes, niega vida sexual activa. Convive con buena red de apoyo familiar. Esquema de vacunación -Niñas VPH Fecha: ${data.VacunaVPH}-Niñas 10 años: Toxoide Tetanico y diftérico Td1 (Fecha: ${data.VacunaTd1}), Td2 (Fecha: ${data.VacunaTd2}), Td3 (Fecha: ${data.VacunaTd3}), Td4: (Fecha: ${data.VacunaTd4}), Td5 (Fecha: ${data.VacunaTd5}) SE LE INFORMA LA IMPORTANCIA DE VACUNAR AL MENOR CON EL BIOLOGICO PARA COVID -19 tenemos disponibilidad en el momento: SINOVAC ( de 3 años en adelante) se direcciona a vacunacion. Adolescente que asiste a consulta para control de adolescencia. Actualmetne asintomático respiratoria, gastrointestinal, neurologico, urinario. Encuentro paciente hemodinamicamente estable, alerta, afebril, hidratado, con signos vitales en metas, sin dificultad respiratoria, sin signos de maltrado o violencia, cuenta con adecuada red de apoyo familiar y social no disfuncionalidad familiar de acuerdo a APGAR familiar, no signso de peligro, esquema de vacunación completo para la edad (presenta carné), adecuada higiene y presentación personal, interaccion adecuada con entrevistador, no trastorno en lenguaje o habilidad comunicativa de acuerdo a cuestionario VALE, no alteraciones al examen físico, con curvas de crecimiento: T/E: (talla adecuada para la edad) , IMC/E (Indice de masa corporal adecuado para la edad). Se considera adolescente sano para la edad. No se identifica relaciones sexuales de riesgo, por lo cual no se solicita tamizaje, no consumo de alcohol, tabaco o SPA (no se realiza cuestionario AUDIT, ASSIST) Se solicita tamizaje para anemia con hemoglobina hematocrito de acuerdo a la edad (SOLO PARA NIÑAS). 
        Se envia valoración por odontologia se envia valoración por optometria Se explica ampliamente recomendaciones generales: Se promueve hàbitos de higiene personal y de cuidado bucal, promociòn de la salud mental, se brinda educaciòn sobre prevenciòn de accidentes incluyendo accidentes de transito. Se brinda educación sobre signos de alarma y manejo básico de las condiciones prevalentes. Se incita a ejercitarse a diario según su edad. Cuidar la salud bucal, cepillar los dientes después de cada comida y visitar al odontólogo de acuerdo a indicaciones. Estimular el lavado de manos. Cumplir con las citas de vacunación programadas y mantener completo el esquema. Recomendaciones de actividad fisica: 50 minutos semanales de actividad física moderada que aumente levemente la frecuencia cardiaca o respiratoria. 75 minutos semanales de actividad física vigorosa. Una combinación equivalente de actividad física moderada y vigorosa. Actividades de fortalecimiento muscular por lo menos 2 días a la semana.
        Recomendaciones de alimentación: Consuma alimentos variados y nutritivos diariamente. La alimentación diaria debe incluir: frutas, verduras y hortalizas de diferentes colores, leguminosas (frijol, lenteja, garbanzo), cereales integrales, nueces, lácteos bajos en grasa, carne magra, pescado y huevo. Aumente el consumo de frutas y de verduras. Son "5 al día". Vigile su peso corporal. Evite el consumo de bebidas azucaradas. Limite el consumo de sal en su alimentación. Seleccione y prefiera alimentos integrales Recomendaciones de derechos sexuales y reproductivos: Se brinda educación acerca del respeto a su integridad física y la ausencia de violencia, coacción o abuso, conocer la diferencia entre sexualidad y reproducción, contar con información oportuna, veraz y completa para que exploren y, más adelante, puedan disfrutar una vida sexual placentera sin riesgos, vergüenza, prejuicios, culpa o cualquier otro temor infundado, expresar libre y autónomamente su orientación sexual e identidad de género, contar con información oportuna, veraz, completa, y apropiada para cada momento de su desarrollo, para que, llegado el momento, decida libre e informadamente si quiere, cuándo y con quién tener relaciones sexuales consentidas, contar con información oportuna, veraz, completa, y apropiada para cada momento de su desarrollo, para que, llegado el momento, decida libre e informadamente si quiere un embarazo y sepa qué hacer en cualquier caso, Contar con información oportuna, veraz, completa, y apropiada para cada momento de su desarrollo, para que en el futuro, cuando inicie su actividad sexual, se proteja de las infecciones de transmisión sexual, Contar con información oportuna, veraz, completa, y apropiada para cada momento de su desarrollo, para que en el futuro, cuando inicie su actividad sexual, acceda a métodos anticonceptivos seguros y eficaces (incluida la anticoncepción de emergencia).
        Recomendaciones para Salud visual: Practicar actividad física al aire libre manteniendo las medidas de cuidado por la pandemia, iluminar adecuadamente las áreas de lectura, evitar exposición prolongada a pantallas.
        Recomendaciones para Salud auditiva: Proteger su cabeza y oídos del viento y el frío para evitar otitis, no usar bastoncillos para limpiar sus oídos, evitar los espacios con mucho ruido, así como el exceso de ruido en nuestro hogar, durante el baño, vigilar que no le entre agua en el conducto auditivo; y después del baño, secárselos bien, es recomendable que escuchen la música a un volumen tolerable o que, en vez, usen auriculares con control de volumen o, en su defecto, que usen unos protectores auditivos para evitar que se dañe su oído innecesariamente.
        Se explica ampliamente signos de alarma para consultar por urgencias : Llevar a urgencias si tiene alguno de estos síntomas: Dolor de cabeza intenso, dolor en torax, fiebre alta que no disminuye, perdida de la conciencia, convulsiones. Vigile siempre comportamiento de su hijo, sintomas de ánimo triste, desinteres por actividades que previamente producian placer, irritabilidad incontrolable, signos de abuso o maltrato, dificultad a nivel escolar, cambio de comportamietno no propio de su edad FECHA DE PROXIMA CONSULTA: Consulta en 1 año por ${data.RealizadoPor} 
`
                e.stopImmediatePropagation();
                e.preventDefault();
            })
    }
}
customElements.define("adolescencia-task", Adolescencia);