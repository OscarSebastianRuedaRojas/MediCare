export class PrimeraInfancia extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML = /* html */`
        <style rel="stylesheet">
          @import "./app/component/primeraInfancia/primeraInfancia.css";
        </style>
        <div class="formCard">
        <div class="formCard-body">
            <h1>Primera Infancia</h1>
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
                <legend style="text-align: center">Lactante</legend>
                    <div class="form-group">
                        <select name="Lactante" id="LactanteSelect">
                            <option value="Menor">Menor</option>
                            <option value="Mayor">Mayor</option>
                            <option value="Preescolar">Preescolar</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Ingrese Meses</legend>
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
        "Paciente de género ${data.genero} lactante ${data.Lactante} de ${data.años} meses, traído a consulta por ${data.Acudiente} para control de primera infancia. Familiar refiere paciente en este momento asintomático, niega fiebre, sudoración persistente, perdida de peso, vomito, diarrea, tos, perdida de la conciencia, episodios convulsivos en los últimos 15 días, adecuada tolerancia a la via oral ( lactancia materna exclusiva), no alteración comportamental. Diuresis y deposicion positivo, adecuado control de esfinteres, patrón de sueño sin alteraciones. Convive con ${data.ConviveCon}, pronuncia palabras y frases adecuadamente. Esquema de vacunación -Recien Nacido: Vacunas completas (Hepatitis B, BCG) Fecha: ${data.VacunaNacido}
        -2 meses: Vacunas completas (Primera dosis pentavalente, primera primera dosis vacuna inactivada de polio, primera dosis rotavirus, primera dosis neumococo conjugada) Fecha: ${data.Vacuna2meses}- 4 meses: Vacunas completas (Segunda dosis pentavalente, segunda primera dosis vacuna antipolio oral, segunda dosis rotavirus, segunda dosis neumococo conjugada) Fecha: ${data.Vacuna4meses}, SE LE INFORMA LA IMPORTANCIA DE VACUNAR AL MENOR CON EL BIOLOGICO PARA COVID -19 tenemos disponibilidad en el momento: MODERNA ( 6 meses a 2 años ) SINOVAC ( de 3 años en adelante) se direcciona a vacunacion. -6 meses: Vacunas completas ( Tercera dosis pentavalente, Tercera dosis vacuna antipolio oral, primera dosis influenza estacional) Fecha: ${data.Vacuna6meses}-7 meses: Vacunas completas (Segunda dosis influenza estacional) Fecha: -12 meses: Vacunas completas (Unica dosis triple viral, única dosis varicela, refuerzo neumococo conjugado, Unica dosis hepatitis A, refuerzo influenza estacional) Fecha: ${data.Vacuna7meses}-18 meses: Vacunas completas (Primer refuerzo DPT, primer refuerzo antipolio oral, única dosis fiebre amarilla) Fecha: ${data.Vacuna18meses}-5 años: Vacunas completas (Segundo refuerzo DPT, refuerzo SRP) Fecha: ${data.Vacuna5años}-Refuerzo Sarampión/Rúbeola: Niños de 1 a 11 años Menor traído a consulta para control de primera infancia. Actualmente asintomático respiratorio, gastrointestinal, neurologico, urinario. Encuentro paciente hemodinamicamente estable, alerta, afebril, hidratado, con signos vitales en metas, sin dificultad respiratoria, sin signos de maltrado, no signos de peligro, esquema de vacunación completo para la edad (presenta carné), adecuada higiene y presentación personal, interaccion adecuada con entrevistador, no disfuncionalidad familiar de acuerdo a APGAR familiar, adecuado neurodesarrollo para la edad, no trastorno en lenguaje o habilidad comunicativa de acuerdo a cuestionario VALE, no alteración TEST M- CHAT (PARA TAMIZAJE DE AUTISMO), 
        no alteraciones al examen físico, con curvas de crecimiento: P/T: (peso adecuado para la talla), T/E: (talla adecuada para la edad) , P/E: (peso adecuado para la edad) , PC/E: (perimetro cefalico adecuado para la edad) . Se considera menor sano para la edad. Se realiza desparasitación y suplementación de acuerdo a edad. ALIMENTO EN POLVO A BASE DE MALTODEXTRINA CON VITAMINAS, HIERRO Y ZINC PARA MENORES DE 6 A 24 MESES (POLVO EN SOBRE *1GR) SOBRE, 1 SOBRE CADA DIA X 60 DIAS , ALBENDAZOL 100 mg/5 mL (SUSPENSION ORAL) SUSPENSION ORAL 200 MG EN UNA SOLA TOMA se envia orden para valoración por odontologia , valoración por optometria Se explica ampliamente Recomendaciones generales: Se brinda educaciòn sobre practicas de crianza protectoras y basadas en derechos, prevenciòn de violencia, promociòn de la salud, bienestar, adecuada alimentaciòn y manipulaciòn de alimentos, promociòn de hàbitos y estilos de vida saludable (nutriciòn, sueño, crianza, juego, aprendizaje), estimulaciòn temprana: estimule constamente a su hijo, asista al programa de primera infancia de acuerdo a las indicaciones recibidas, cumpla siempre citas de vacunaciòn programadas y mantenga completo el esquema de vacunas. Se promueve hàbitos de higiene personal y de cuidado bucal, promociòn de la salud mental, se brinda educaciòn sobre prevenciòn de accidentes incluyendo accidentes de transito. De forma especial para los niños menores de seis (6) meses: se brinda informacion sobre las medidas y estrategias para el mantenimiento de la lactancia materna exclusiva, aprender a reconocer el llanto en el bebé y sus necesidades, el establecimiento de prácticas de cuidado especiales como el baño y el cambio de pañales, las medidas para la prevención de la muerte súbita del lactante, signos de alarma y manejo básico de las condiciones prevalentes de la infancia (gripa, diarrea y fiebre), prevención de accidentes, inicio de la alimentación complementaria y pautas para la estimulación del desarrollo. 
        Recomendaciones de alimentaciòn: Darle leche materna de forma EXCLUSIVA desde el nacimiento hasta los seis meses. Iniciar alimentación a los seis meses, acompañada por Leche materna mínimo hasta los dos años. Se brinda la recomendacion de desparasitacion cada 6 meses. Recomendaciones para Salud visual: Favorecer actividades al aire libre, estando bien protegido y respetando limitaciones por la pandemia, iluminar adecuadamente los espacios de convivencia diurna y favoreciendo un entorno oscuro, silencioso y cálido al dormir, evitar exposición prolongada a pantallas.
        Recomendaciones para Salud auditiva: Proteger su cabeza y oídos del viento y el frío para evitar otitis, no usar bastoncillos para limpiar sus oídos, evitar los espacios con mucho ruido, así como el exceso de ruido en nuestro hogar, durante el baño, vigilar que no le entre agua en el conducto auditivo; y después del baño, secárselos bien, es recomendable que escuchen la música a un volumen tolerable o que, en vez, usen auriculares con control de volumen o, en su defecto, que usen unos protectores auditivos para evitar que se dañe su oído innecesariamente. Se explica ampliamente signos de alarma para consultar por urgencias :Llevar a urgencias si tiene alguno de estos síntomas: No es capaz de comer ni beber, vomita todo lo que come, tiene fiebre que no disminuye, respira muy rápido o con dificultad, se pone pálido o morado, presenta diarrea con sangre, observa a su hijo irritable o muy somnoliento, si presenta convulsiones. FECHA DE PROXIMA CONSULTA: control en ${data.ProximaConsulta} meses por ${data.RealizadoPor}
        `
                e.stopImmediatePropagation();
                e.preventDefault();
            })
    }
}
customElements.define("primera-infancia", PrimeraInfancia);