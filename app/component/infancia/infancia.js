export class Infancia extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML = /* html */`
        <style rel="stylesheet">
          @import "./app/component/infancia/infancia.css";
        </style>
        <div class="formCard">
        <div class="formCard-body">
            <h1>Infancia</h1>
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
                <fieldset>
                    <legend style="text-align: center">Ingrese años</legend>
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
                    <legend style="text-align: center">Fecha Vacunas Recien Nacido</legend>
                    <div class="form-group">
                        <input type="date" id="VacunaNacido" name="VacunaNacido" class="recionNacido" placeholder="Añadir fecha de la vacunacion de recien nacido" required>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Fecha Vacunas Vacuna 2 meses</legend>
                    <div class="form-group">
                        <input type="date" id="Vacuna2meses" name="Vacuna2meses" class="Vacuna2meses" placeholder="Añadir fecha de la vacunacion de 2 meses" required>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Fecha Vacunas Vacuna 4 meses</legend>
                    <div class="form-group">
                        <input type="date" id="Vacuna4meses" name="Vacuna4meses" class="Vacuna4meses" placeholder="Añadir fecha de la vacunacion de 4 meses" required>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Fecha Vacunas Vacuna 6 meses</legend>
                    <div class="form-group">
                        <input type="date" id="Vacuna6meses" name="Vacuna6meses" class="Vacuna6meses" placeholder="Añadir fecha de la vacunacion de 6 meses" required>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Fecha Vacunas Vacuna 7 meses</legend>
                    <div class="form-group">
                        <input type="date" id="Vacuna7meses" name="Vacuna7meses" class="Vacuna7meses" placeholder="Añadir fecha de la vacunacion de 7 meses" required>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Fecha Vacunas Vacuna 12 meses</legend>
                    <div class="form-group">
                        <input type="date" id="Vacuna12meses" name="Vacuna12meses" class="Vacuna12meses" placeholder="Añadir fecha de la vacunacion de 12 meses" required>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Fecha Vacunas Vacuna 18 meses</legend>
                    <div class="form-group">
                        <input type="date" id="Vacuna18meses" name="Vacuna18meses" class="Vacuna18meses" placeholder="Añadir fecha de la vacunacion de 18 meses" required>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Fecha Vacunas Vacuna 5 años</legend>
                    <div class="form-group">
                        <input type="date" id="Vacuna5años" name="Vacuna5años" class="Vacuna5años" placeholder="Añadir fecha de la vacunacion de 5 años" required>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Fecha Vacuna VPH</legend>
                    <div class="form-group">
                        <input type="date" id="VacunaVPH" name="VacunaVPH" class="VacunaVPH" placeholder="Añadir fecha de la vacunacion de VPH" required>
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
                            <option value="Pediatria">Pediatria</option>
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
        "Motivo de consulta: Paciente de género ${data.genero} escolar de ${data.años}años, traído a consulta por ${data.Acudiente} para control de infancia. Familiar refiere paciente en este momento asintomático, niega fiebre, sudoración persistente, perdida de peso, vomito, diarrea, tos, perdida de la conciencia, episodios convulsivos en los últimos 15 días, adecuada tolerancia a la via oral (consume verduras, frutas, cereales, lácteos, huevos, carnes), no alteración comportamental. Diuresis y deposicion sin alteraciones, adecuado control de esfinteres, patrón de sueño sin alteraciones. Familiar manifiesta adecuado rendimiento escolar, niega signos de maltrato o violencia familiar, escolar o comunitario. Convive con buena red de apoyo familiar. Esquema de vacunación : -Recien Nacido: Vacunas completas (Hepatitis B, BCG) Fecha: ${data.VacunaNacido}
        -2 meses: Vacunas completas (Primera dosis pentavalente, primera primera dosis vacuna inactivada de polio, primera dosis rotavirus, primera dosis neumococo conjugada) Fecha: ${data.Vacuna2meses}- 4 meses: Vacunas completas (Segunda dosis pentavalente, segunda primera dosis vacuna antipolio oral, segunda dosis rotavirus, segunda dosis neumococo conjugada) Fecha: ${data.Vacuna4meses}-6 meses: Vacunas completas ( Tercera dosis pentavalente, Tercera dosis vacuna antipolio oral, primera dosis influenza estacional) Fecha: ${data.Vacuna6meses}SE LE INFORMA LA IMPORTANCIA DE VACUNAR AL MENOR CON EL BIOLOGICO PARA COVID -19 tenemos disponibilidad en el momento: SINOVAC ( de 3 años en adelante) se direcciona a vacunacion. -7 meses: Vacunas completas (Segunda dosis influenza estacional) Fecha: ${data.Vacuna7meses}
        -12 meses: Vacunas completas (Unica dosis triple viral, única dosis varicela, refuerzo neumococo conjugado, Unica dosis hepatitis A, refuerzo influenza estacional) Fecha: ${data.Vacuna12meses}-18 meses: Vacunas completas (Primer refuerzo DPT, primer refuerzo antipolio oral, única dosis fiebre amarilla) Fecha: ${data.Vacuna18meses}-5 años: Vacunas completas (Segundo refuerzo DPT, refuerzo SRP) Fecha: ${data.Vacuna5años}Niñas VPH Fecha: ${data.VacunaVPH}Paciente traído a consulta para control de infancia. Actualmente asintomático respiratoria, gastrointestinal, neurologico, urinario. Encuentro paciente hemodinamicamente estable, alerta, afebril, hidratado, con signos vitales en metas, sin dificultad respiratoria, sin signos de maltrado o violencia, cuenta con adecuada red de apoyo familiar y social no disfuncionalidad familiar de acuerdo a APGAR familiar, no signos de peligro, esquema de vacunación completo para la edad (presenta carné), adecuada higiene y presentación personal, interaccion adecuada con entrevistador, adecuado neurodesarrollo para la edad, no trastorno en lenguaje o habilidad comunicativa de acuerdo a cuestionario VALE, no alteraciones al examen físico, 
        con curvas de crecimiento: T/E: (talla adecuada para la edad) , IMC/E (Indice de masa corporal adecuado para la edad) . Se considera escolar sano para la edad. Se realiza desparasitación y suplementación de acuerdo a edad. Se envia valoración por odontologia se envia valoraciín por optometria Se explica ampliamente recomendaciones generales: Se brinda educaciòn sobre practicas de crianza protectoras y basadas en derechos, prevenciòn de violencia, red de apoyo familiar, promociòn de la salud, bienestar, adecuada alimentaciòn y manipulaciòn de alimentos, promociòn de hàbitos y estilos de vida saludable (nutriciòn, sueño, crianza, juego, aprendizaje), estimulaciòn: estimule constamente a su hijo, asista al programa de infancia de acuerdo a las indicaciones recibidas, cumpla siempre citas de vacunaciòn programadas y mantenga completo el esquema de vacunas. Se promueve hàbitos de higiene personal y de cuidado bucal, promociòn de la salud mental, se brinda educaciòn sobre prevenciòn de accidentes incluyendo accidentes de transito. Se brinda educación sobre signos de alarma y manejo básico de las condiciones prevalentes de la infancia (gripa, diarrea y fiebre), prevención de accidentes y pautas para la estimulación del desarrollo. Se incentiva a estimular continuamente a su hijo. Permitirle ejercitarse a diario según su edad. Cuidar la salud bucal, cepillar los dientes después de cada comida y visitar al odontólogo de acuerdo a indicaciones. 
        Prevenir accidentes: Envenenamientos, Intoxicaciones, Ahogamientos, Quemaduras, Fracturas y Heridas pueden darse si hay elementos peligrosos al alcance de los niños. Estimular el lavado de manos. Cumplir con las citas de vacunación programadas y mantener completo el esquema. Recomendaciones de alimentación: Brindarle una alimentación con horarios organizados, con alimentos de origen animal y vegetal, evitando alimentos procesados, sirva variedad de alimentos y refrigerios saludables. Recomendaciones de derechos sexuales y reproductivos: Respeto a su integridad física y la ausencia de violencia, coacción o abuso, conocer la diferencia entre sexualidad y reproducción, contar con información oportuna, veraz y completa para que exploren y, más adelante, puedan disfrutar una vida sexual placentera sin riesgos, vergüenza, prejuicios, culpa o cualquier otro temor infundado, expresar libre y autónomamente su orientación sexual e identidad de género, contar con información oportuna, veraz, completa, y apropiada para cada momento de su desarrollo, para que, llegado el momento, decida libre e informadamente si quiere, cuándo y con quién tener relaciones sexuales consentidas, contar con información oportuna, veraz, completa, y apropiada para cada momento de su desarrollo, para que, llegado el momento, decida libre e informadamente si quiere un embarazo y sepa qué hacer en cualquier caso, Contar con información oportuna, veraz, completa, y apropiada para cada momento de su desarrollo, para que en el futuro, cuando inicie su actividad sexual, se proteja de las infecciones de transmisión sexual, Contar con información oportuna, veraz, completa, y apropiada para cada momento de su desarrollo, para que en el futuro, cuando inicie su actividad sexual, acceda a métodos anticonceptivos seguros y eficaces (incluida la anticoncepción de emergencia).
        Recomendaciones para Salud visual: Practicar actividad física al aire libre manteniendo las medidas de cuidado por la pandemia, iluminar adecuadamente las áreas de lectura, evitar exposición prolongada a pantallas.
        Recomendaciones para Salud auditiva: Proteger su cabeza y oídos del viento y el frío para evitar otitis, no usar bastoncillos para limpiar sus oídos, evitar los espacios con mucho ruido, así como el exceso de ruido en nuestro hogar, durante el baño, vigilar que no le entre agua en el conducto auditivo; y después del baño, secárselos bien, es recomendable que escuchen la música a un volumen tolerable o que, en vez, usen auriculares con control de volumen o, en su defecto, que usen unos protectores auditivos para evitar que se dañe su oído innecesariamente. Se explica ampliamente signos de alarma para consultar por urgencias : Llevar a urgencias si tiene alguno de estos síntomas: No es capaz de comer ni beber, vomita todo lo que come, tiene fiebre que no disminuye, respira muy rápido o con dificultad, se pone pálido o morado, presenta diarrea con sangre, si presenta convulsiones. Vigile siempre comportamiento de su hijo, sintomas de ánimo triste, desinteres por actividades que previamente producian placer, irritabilidad incontrolable, signos de abuso o maltrato, dificultad a nivel escolar, cambio de comportamietno no propio de su edad. FECHA DE PROXIMA CONSULTA: ${data.RealizadoPor}
          
        `
                e.stopImmediatePropagation();
                e.preventDefault();
            })
    }
}
customElements.define("infancia-niños", Infancia);