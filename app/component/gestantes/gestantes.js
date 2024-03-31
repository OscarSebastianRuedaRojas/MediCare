export class Gestantes extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML = /* html */`
        <style rel="stylesheet">
          @import "./app/component/gestantes/gestantes.css";
        </style>
        <div class="formCard">
        <div class="formCard-body">
            <form id="taskForm">
                <fieldset class="full-width">
                    <legend style="text-align: center">edad</legend>
                    <div class="form-group">
                        <input type="text" id="edad" name="edad" class="edad" placeholder="Añadir los años del paciente" required>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Fecha Prueba de embarazo</legend>
                    <div class="form-group">
                        <input type="date" id="fechaPruebaEmbarazo" name="fechaPruebaEmbarazo" class="PruebaEmbarazo" placeholder="Añadir fecha de la prueba de embarazo" required>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Modalidad</legend>
                    <div class="form-group">
                        <select name="modalidad" id="modalidadSelect">
                            <option value="Presencial">Presencial</option>
                            <option value="TeleConsulta">TeleConsulta</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset class="full-width">
                    <legend style="text-align: center">Menarquia</legend>
                    <div class="form-group">
                        <input type="text" id="menarquia" name="menarquia" class="menarquia" placeholder="Añadir Menarquia" required>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Gestación</legend>
                    <div class="form-group">
                        <input type="text" id="gestacion" name="gestacion" class="gestacion" placeholder="Añadir gestación" required>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Fecha Ultima Menstruacion</legend>
                    <div class="form-group">
                        <input type="date" id="fechaMenstruacion" name="fechaMenstruacion" class="FechaMenstruacion" placeholder="Añadir fecha de la última menstruación" required>
                    </div>
                </fieldset>
                <fieldset class="full-width">
                    <legend style="text-align: center">Menstruacion</legend>
                    <div class="form-group">
                        <select name="Menstruacion" id="MenstruacionSelect">
                            <option value="Regular">Regular</option>
                            <option value="Irregular">Irregular</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Edad Gestacional</legend>
                    <div class="form-group">
                        <input type="text" id="EdadGestacional" name="EdadGestacional" class="EdadGestacional" placeholder="Añadir Inicio Vida Sexual" required>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Semanas por</legend>
                    <div class="form-group">
                        <select name="Semanas" id="SemanasSelect">
                            <option value="FUR">FUR</option>
                            <option value="ECO">ECO</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset class="full-width">
                    <legend style="text-align: center">Fecha probable de parto</legend>
                    <div class="form-group">
                        <input type="date" id="FechaParto" name="FechaParto" class="FechaParto" placeholder="Añadir fecha de la última citología" required>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">RH</legend>
                    <div class="form-group">
                        <select name="RH" id="RHSelect">
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Peso</legend>
                    <div class="form-group">
                        <input type="text" id="Peso" name="Peso" class="Peso" placeholder="Añadir Peso del paciente" required>
                    </div>
                </fieldset>
                <fieldset class="full-width">
                    <legend style="text-align: center">Talla</legend>
                    <div class="form-group">
                        <input type="text" id="Talla" name="Talla" class="Talla" placeholder="Añadir Talla del paciente" required>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Ciudad</legend>
                    <div class="form-group">
                        <input type="text" id="Ciudad" name="Ciudad" class="Ciudad" placeholder="Añadir Ciudad del paciente" required>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Telefono</legend>
                    <div class="form-group">
                        <input type="text" id="Telefono" name="Telefono" class="Telefono" placeholder="Añadir Telefono del paciente" required>
                    </div>
                </fieldset>
                <fieldset class="full-width">
                    <legend style="text-align: center">Ocupacion</legend>
                    <div class="form-group">
                        <input type="text" id="Ocupacion" name="Ocupacion" class="Ocupacion" placeholder="Añadir Ocupacion del paciente" required>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Estado Civil</legend>
                    <div class="form-group">
                        <select name="EstadoCivil" id="EstadoCivilSelect">
                            <option value="Soltera">Soltera</option>
                            <option value="Casada">Casada</option>
                            <option value="Union Libre">Union Libre</option>
                            <option value="Divorciada">Divorciada</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Escolaridad</legend>
                    <div class="form-group">
                        <select name="Escolaridad" id="EscolaridadSelect">
                            <option value="Primaria">Primaria</option>
                            <option value="Bachiller">Bachiller</option>
                            <option value="Profesional">Profesional</option>
                            <option value="Especializacion">Especializacion</option>
                            <option value="Magister">Magister</option>
                            <option value="Doctorado">Doctorado</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset class="full-width">
                    <legend style="text-align: center">Embarazo deseado</legend>
                    <div class="form-group">
                        <select name="EmbarazoDeseado" id="EmbarazoDeseadoSelect">
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Se ah realizado citologia?</legend>
                    <div class="form-group">
                        <select name="citologiaRealizada" id="citologiaRealizadaSelect">
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Fecha última citología</legend>
                    <div class="form-group">
                        <input type="date" id="citologia" name="citologia" class="citologia" placeholder="Añadir fecha de la última citología" required>
                    </div>
                </fieldset>
                <fieldset class="full-width">
                    <legend style="text-align: center">Cantidad de Vacunacion</legend>
                    <div class="form-group">
                        <input type="text" id="Vacunacion" name="Vacunacion" class="Vacunacion" placeholder="Añadir cantidad de vacunas covid" required>
                    </div>
                </fieldset>
                <fieldset class="full-width">
                    <legend style="text-align: center">Hijos del padre</legend>
                    <div class="form-group">
                        <input type="text" id="HijosPadre" name="HijosPadre" class="HijosPadre" placeholder="Añadir hijos con el padre" required>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Apoyo Familiar</legend>
                    <div class="form-group">
                        <select name="ApoyoFamiliar" id="ApoyoFamiliarSelect">
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Edad de la pareja</legend>
                    <div class="form-group">
                        <input type="text" id="EdadPadre" name="EdadPadre" class="EdadPadre" placeholder="Añadir edad de la pareja" required>
                    </div>
                </fieldset>
                <fieldset class="full-width">
                    <legend style="text-align: center">RHPareja</legend>
                    <div class="form-group">
                        <select name="RHPareja" id="RHParejaSelect">
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Mascotas</legend>
                    <div class="form-group">
                        <select name="Mascotas" id="MascotasSelect">
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">ETS</legend>
                    <div class="form-group">
                        <select name="ETS" id="ETSSelect">
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset class="full-width">
                    <legend style="text-align: center">Gestantes al quedar en embarazo</legend>
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
                    <legend style="text-align: center">Aro</legend>
                    <div class="form-group">
                        <select name="Aro" id="AroSelect">
                            <option value="Nuliparidad">Nuliparidad</option>
                            <option value="Cicatriz Uterina">Cicatriz Uterina</option>
                            <option value="Obesidad">Obesidad</option>
                            <option value="Antecedente de Aborto">Antecedente de Aborto</option>
                            <option value="Periodo interginesico">Periodo interginesico</option>
                            <option value="Ingreso tardio a cpm">Ingreso tardio a spm</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style="text-align: center">Nutricion</legend>
                    <div class="form-group">
                        <select name="Nutricion" id="NutricionSelect">
                            <option value="Bajo Peso">Bajo Peso</option>
                            <option value="Adecuado">Adecuado</option>
                            <option value="Sobre Peso">Sobre Peso</option>
                            <option value="Obesidad">Obesidad</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset class="full-width">
                    <legend style="text-align: center">Riesgo Tromboembolico</legend>
                    <div class="form-group">
                        <select name="RiesgoTromboembolico" id="RiesgoTromboembolicoSelect">
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                </fieldset>
                <button type="submit" class="full-width boton-degradado">Enviar</button>
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
            let altura = data.Talla / 100;
            var imc = data.Peso / (altura * altura);
            let imcRedondeado = imc.toFixed(2);
            if (data.citologiaRealizada==="No"){
                p.innerHTML = `Gestante quien tiene PRUEBA DE EMBARAZO INSTITUCIONAL DEL ${data.fechaPruebaEmbarazo}
                Usuaria de ${data.edad} años, control prenatal modalidad ${data.modalidad} por enfermería, Menarquia ${data.menarquia} años,
                ${data.gestacion}, FUR: ${data.fechaMenstruacion}, MESTRUACION ${data.Menstruacion}, edad gestacional ${data.EdadGestacional} SEMANAS X ${data.Semanas}, FPP
                ${data.FechaParto}, RH ${data.RH} ,peso: ${data.Peso} KG , talla: ${data.Talla} CM , IMC ${imcRedondeado}, vive en ciudad de ${data.Ciudad}
                , Teléfono : ${data.Telefono} Ocupación: ${data.Ocupacion} , Estado Civil ${data.EstadoCivil} , escolaridad ${data.Escolaridad},
                embarazo ${data.EmbarazoDeseado} planeado, aceptado por pareja y familia
                ULTIMA CITOLOGÍA NUNCA SE AH REALIZADO SE LE EXPLICA LA IMOORTANCIA DE REALIZARLA EN LA SEMANA 16 A LA 28, REFIERE ENTENDER SE ENVIA ORDEN CON RESULTADO NEGATIVO PARA NEOPLASIA , NO TRAE EL
                CARNET
                VACUNACION COVID: ${data.Vacunacion}
                PRIMER HIJO DE PADRE DEL FETO: ${data.HijosPadre} HIJO, APOYO FAMILIAR? ${data.ApoyoFamiliar}, EDAD DE LA PAREJA? ${data.EdadPadre} AÑOS
                ,HEMOCLASIFICACION DE LA PAREJA? ${data.RHPareja} , CUENTA CON MASCOTA EN CASA? ${data.Mascotas},
                ETS: ${data.ETS}
                PLANIFICACIÓN AL QUEDAR EN EMBARAZO: ${data.metodo}
                se da información sobre IVE segun sentencia Es un derecho fundamental de las niñas y mujeres, el
                cual fue reconocido como tal por la Corte Constitucional Colombiana mediante la Sentencia C-051
                de 2023, en tres circunstancias las cuales se le explican a la usuaria. Quien refiere no deseo de IVE
                Paciente en buenas condiciones generales, disuria negativa, flujo blanco no oloroso ni pruriginoso,
                niega sangrado vaginal y salida de líquido por vagina.
                ¿DURANTE EL ULTIMO AÑO, ha sido humillada, menospreciada, insultada o amenazada por su
                pareja? NIEGA
                ¿DURANTE EL ÚLTIMO AÑO, fue golpeada, bofeteada, pateada, o lastimada físicamente de otra
                manera? NIEGA
                ¿DESDE QUE ESTÁ EN GESTACIÓN, ha sido golpeada, bofeteada, pateada, o lastimada físicamente
                de alguna manera? NIEGA
                ¿DURANTE EL ÚLTIMO AÑO, fue forzada a tener relaciones sexuales? NIEGA
                DURANTE EL MES PASADO, ¿se ha sentido triste, deprimida o sin esperanza con frecuencia? NIEGA
                DURANTE EL MES PASADO ¿ha permanecido preocupada por tener poco interés o placer para
                hacer las cosas cotidianas? NIEGA ¿siente que necesita ayuda? NIEGA
                GESTANTE DE ${data.edad} AÑOS CON EMBARAZO DE ${data.EdadGestacional} SEMANAS POR ${data.Semanas}, SE
                CLASIFICA COMO ARO ${data.Aro}, SE ENVIAN
                EXAMENES DE LABORATORIO DE PRIMER TRIMESTRE HEMOGRAMA,
                
                GLICEMIA, TOXOPLASMA GONDII ANTICUERPOS IG G MANUAL O
                SEMIAUTOMATIZADO, TOXOPLASMA GONDII ANTICUERPOS IG M MANUAL
                O SEMIAUTOMATIZADO, VIH, HEPATITIS B ANTIGENO DE SUPERFICIE [Ag
                HBs] , HEMOCLASIFICACION, UROCULTIVO, SEROLOGIA PRUEBA
                TREPONEMICA PRUEBA RAPIDA, TRYPANOSOMA CRUZI ANTICUERPOS
                MANUAL (ELISA), FROTIS DE FLUJO VAGINAL, RUBEOLA ANTICUERPOS IGG
                AUTOMATIZADO, RUBEOLA ANTICUERPOS IGM AUTOMATIZADO,
                CITOMEGALOVIRUS IGG ,CITOMEGALOVIRUS IGM (MANUAL), CONSULTA
                DE PRIMERA VEZ POR NUTRICION Y DIETETICA ,CONSULTA DE PRIMERA
                VEZ POR PSICOLOGIA, CONSULTA DE PRIMERA VEZ POR ODONTOLOGIA,
                SE DIRECCIONA A CLINICA FOSCAL SE PRESCIBRE
                MICRONUTRIENTES ACIDO FOLICO TAB X 1MG ,TOMAR 1 TABLETA
                CADA DIA, CARBONATO DE CALCIO , TOMAR 1 TAB CADA DIA , SULFATO
                FERROSO X 300 MG , TOMAR UNA TABLETA CADA DIA, SE BRINDA
                EDUCACION. SE CITA A CONSULTA CON MEDICINA GENERAL PARA
                INICIO CONTROL PRENATAL CON MEDICO GENERAL
                Se brinda educación : sobre cuidados en la gestación: se educa, informa y recomienda sobre los
                signos de alarma en la gestación: ardor o dolor al orinar, cefalea intensa, tinitus, fosfenos, visión
                borrosa, mareo, dolor en boca del estómago, edema en cara, manos y pies, palidez marcada en el
                rostro, fiebre, dolor bajito tipo cólico, hemorragia vaginal, amniorrea, disminución o ausencia de
                movimientos fetales por periodo prolongado, frente a esta sintomatología acudir al servicio de
                urgencias, su sitio de atención en la CLINICA FOSCAL SANTA CRUZ DE LA LOMA
                Se educa sobre importancia de Lactancia materna exclusiva a libre demanda hasta los 6 meses y
                complementaria hasta los dos años, alimentar cada 2-3h a recién nacido o a libre demanda, se
                explica técnicas de lactancia materna, así como masajes antes de lactar, estar adecuadamente
                hidratadas, SE ENTREGA FOLLETO CON CUIDADOS , TECNICAS DE LACTANCIA, Cuidados en la
                gestación como adecuada alimentación rica en fibra, hierro, acido fólico y proteínas, frutas y
                verduras. Descanso, actividad ocio, lectura de temas sobre cuidados del recién nacido y de la
                gestación, ejercicios de estimulación prenatal, ejercicios de relajación, manejo de estrés ,
                permanecer tranquila, realizar caminata diarias 30 minutos 4 ó 5 veces por semana si no hay
                contraindicaciones de salud, tomar micronutrientes (se explica las indicaciones del hierro, acido
                fólico y calcio) , inicio de planificación familiar después del parto, aplicación de vacunas PAI,
                (Vacuna COVID a partir de semana 12, influenza a las 14 sem, TT TD alas 20semanas, DPTacelular a
                la 26semanas), asistir a curso preparación maternidad que se realiza en Foscal, se entrega
                programación; importancia de asistir a control prenatal mensual, asistir a nutrición, psicología,
                odontología; asistir a realización de citología cervicouterina en el según trimestre o según orden
                medica. Signos de trabajo de parto, elementos que debe llevar a sala de parto y habitación, asistir
                a control posparto y del recién nacido ( MAXIMO EN 5 DIAS) , se educa sobre signos de alarma de
                la madre y del recién nacido para acudir a urgencias (fiebre, hemorragia fétida, mamas
                congestionadas, con calor y dolor, salida después y/o dolor en cicatriz de herida si el parto fue por
        
                cesárea, color amarillo del bebé en piel y ojos, somnolencia, diarrea, vomito, no hace deposición el
                bebe). Se indica ingresar a su hijo a control de crecimiento y desarrollo y llevarlo a vacunar según
                esquema PAI.se entrega material educativo sobre temática tratada, Madre refiere entender y
                seguir las instrucciones.
                Plan: *Se enfatiza en el cumplimiento de las citas, tiene pendiente citas de Psicología, Nutrición,
                odontología, vacunas, curso de Preparacion para la Maternidad y Paternidad, *Continuar con
                micronutrientes, * fomento lactancia materna exclusiva hasta los 6 meses y complementaria hasta
                los 2años o mas y buen trato en los menores, * Se brinda educación en cuidados maternos
                referente a: vestido, higiene en general, ejercicio, mecánica corporal, descanso, relaciones
                sexuales, nutrición, control de estrés; factores protectores del embarazo como no consumo de
                drogas, no fumar y no bebidas alcohólicas; signos de alarma como: salida de líquido o sangre por
                vagina, fiebre sin causa aparente, edema generalizado, cefalea intensa, percepción muy débil o
                ausencia de movimientos fetales, tensión arterial alta, fosfenos, tinitus, dolor epigástrico fuerte,
                prurito y disuria, inicio de contracciones.
                GESTANTE TIENE FACTOR DE RIESGO PARA EVENTO TROMBOEMBOLICO VENOSO SE SACA CITA
                CON MEDICO GENERAL DE CONTROL PRENATAL DRA LAURA SARMIENTO PARA INGRESO A
                CONTROL Y MANEJO DE GESTANTE
                PLAN
                ASISTIR A CONTROL PRENATAL CON MEDICO CADA MES.
                SS// VALORACIÓN POR ODONTOLOGIA, PSICOLOGIA, NUTRICION, CURSO MATERNIDAD Y
                PATERNIDAD SE ENVIA EL LINK , ACUDIR A SERVICIO DE VACUNACIÓN SEGÚN ESQUEMA . LOS
                SIGNOS VITALES NO CORRESPONDEN A LA USUARIA, CONSULTA POR CONTINGENCIA ANTE
                PANDEMIA COVID 19 SE ENVIAN 10 PRESERVATIVOS INGRESO CONTROL PRENATAL
                • APLICAR VACUNA COVID EN SEMANA 12 DE GESTACION CON FIZZER EN EL HOSPÍTAL
                REGIONAL DE SAN GIL
                • 15 DIAS POSTERIOR A LA SEGUNDA DOSIS DE VACUNA COVID, APLICAR INFLUENZA Y
                TETANO EN TORRE EMPRESARIAL CENTRO COMERCIAL PUENTE SEGUNDO PISO CONSULTORIO 202
                • EN SEMANA 26 DE GESTACION APLICAR DPT ACELULAR EN TORRE EMPRESARIAL CENTRO
                COMERCIAL PUENTE SEGUNDO OISO CONSULTORIO 202
        
                RECOMENDACIONES SIGNOS DE ALARMA
                PRIMER TRIMESTRE HASTA LA SEMANA 19 DE GESTACIÓN
                · Sangrado vaginal, en cualquier cantidad, acompañado o no de
                cólicos o dolor pélvico.
                · Fiebre que registre una temperatura de 38 ° o más, tomada con un
        
                termómetro bucal o axilar.
                · Si se presenta dolor o ardor al orinar, puede ser una infección
                urinaria.
                · Las náuseas y los episodios de vómito ocasionales son normales
                hasta las 12 semanas. Sin embargo, si son incontrolables y causan
                deshidratación o imposibilidad para ingerir agua oalimentos debes consultar
                al médico.
                · Dolor en la parte baja del abdomen severo, que no mejore con
                analgésicos suaves prescritos por un médico.
                SEGUNDO TRIMESTRE O MAS DESDE LA SEMANA 20 HASTA EL FINAL DEL
                EMBARAZO
                LOS SIGUENTES SON SIGNOS DE ALARMA Y DEBE CONSULTAR POR EL
                SERVICIO DE URGENCIAS
                · Sangrado vaginal, en cualquier cantidad, asociado o no a dolor
                pélvico o contracciones. Requiere consulta inmediata.
                · Salida de líquido por vagina, puede ser transparente, amarillo, verde
                o rosado. En ese caso, si es posible, el traslado debe hacerse acostada al
                centro médico más cercano.
                · Dolor pélvico severo o contracciones. Sensación de que la barriga se
                pone dura de forma intermitente asociado o no a dolor en laespalda.
                · Si se presenta dolor o ardor al orinar puede ser una infección
                urinaria, debes consultar a tu médico.
                · Fiebre que registre una temperatura de 38 ° o más, tomada con un
                termómetro bucal o axilar.
                · Dolor de cabeza global, en casco, que no mejore con un analgésico
                suave o que se acompañe de anomalías visuales o auditivas.
                · Anomalías visuales: pérdida de la visión parcial o total, visión borrosa
                o doble, visión de puntos o ‘moscas voladoras’.
                · Anomalías auditivas: pitidos o ‘zumbidos’.
                · Convulsiones o pérdida del conocimiento.
                · Dolor en la boca del estómago asociado a náuseas y vómito.
                · Hinchazón matutina de la cara, manos y piernas.
                Disminución o ausencia de movimientos fetales. Debes conocer el patrón ‘normal’ de
                movimientos de tu bebé.`
            }else{
                var fechaIngresada = data.citologia;
                var fechaActual = new Date();
                var diferenciaMilisegundos = fechaActual - fechaIngresada;
                var diferenciaAnios = diferenciaMilisegundos / (1000 * 60 * 60 * 24 * 365);
                if (diferenciaAnios > 1) {
                    p.innerHTML = `Gestante quien tiene PRUEBA DE EMBARAZO INSTITUCIONAL DEL ${data.fechaPruebaEmbarazo}
                    Usuaria de ${data.edad} años, control prenatal modalidad ${data.modalidad} por enfermería, Menarquia ${data.menarquia} años,
                    ${data.gestacion}, FUR: ${data.fechaMenstruacion}, MESTRUACION ${data.Menstruacion}, edad gestacional ${data.EdadGestacional} SEMANAS X ${data.Semanas}, FPP
                    ${data.FechaParto}, RH ${data.RH} ,peso: ${data.Peso} KG , talla: ${data.Talla} CM , IMC ${imcRedondeado}, vive en ciudad de ${data.Ciudad}
                    , Teléfono : ${data.Telefono} Ocupación: ${data.Ocupacion} , Estado Civil ${data.EstadoCivil} , escolaridad ${data.Escolaridad},
                    embarazo ${data.EmbarazoDeseado} planeado, aceptado por pareja y familia
                    ULTIMA CITOLOGÍA NUNCA SE AH REALIZADO SE LE EXPLICA LA IMOORTANCIA DE REALIZARLA EN LA SEMANA 16 A LA 28, REFIERE ENTENDER SE ENVIA ORDEN CON RESULTADO NEGATIVO PARA NEOPLASIA , NO TRAE EL
                    CARNET
                    VACUNACION COVID: ${data.Vacunacion}
                    PRIMER HIJO DE PADRE DEL FETO: ${data.HijosPadre} HIJO, APOYO FAMILIAR? ${data.ApoyoFamiliar}, EDAD DE LA PAREJA? ${data.EdadPadre} AÑOS
                    ,HEMOCLASIFICACION DE LA PAREJA? ${data.RHPareja} , CUENTA CON MASCOTA EN CASA? ${data.Mascotas},
                    ETS: ${data.ETS}
                    PLANIFICACIÓN AL QUEDAR EN EMBARAZO: ${data.metodo}
                    se da información sobre IVE segun sentencia Es un derecho fundamental de las niñas y mujeres, el
                    cual fue reconocido como tal por la Corte Constitucional Colombiana mediante la Sentencia C-051
                    de 2023, en tres circunstancias las cuales se le explican a la usuaria. Quien refiere no deseo de IVE
                    Paciente en buenas condiciones generales, disuria negativa, flujo blanco no oloroso ni pruriginoso,
                    niega sangrado vaginal y salida de líquido por vagina.
                    ¿DURANTE EL ULTIMO AÑO, ha sido humillada, menospreciada, insultada o amenazada por su
                    pareja? NIEGA
                    ¿DURANTE EL ÚLTIMO AÑO, fue golpeada, bofeteada, pateada, o lastimada físicamente de otra
                    manera? NIEGA
                    ¿DESDE QUE ESTÁ EN GESTACIÓN, ha sido golpeada, bofeteada, pateada, o lastimada físicamente
                    de alguna manera? NIEGA
                    ¿DURANTE EL ÚLTIMO AÑO, fue forzada a tener relaciones sexuales? NIEGA
                    DURANTE EL MES PASADO, ¿se ha sentido triste, deprimida o sin esperanza con frecuencia? NIEGA
                    DURANTE EL MES PASADO ¿ha permanecido preocupada por tener poco interés o placer para
                    hacer las cosas cotidianas? NIEGA ¿siente que necesita ayuda? NIEGA
                    GESTANTE DE ${data.edad} AÑOS CON EMBARAZO DE ${data.EdadGestacional} SEMANAS POR ${data.Semanas}, SE
                    CLASIFICA COMO ARO ${data.Aro}, SE ENVIAN
                    EXAMENES DE LABORATORIO DE PRIMER TRIMESTRE HEMOGRAMA,
                    
                    GLICEMIA, TOXOPLASMA GONDII ANTICUERPOS IG G MANUAL O
                    SEMIAUTOMATIZADO, TOXOPLASMA GONDII ANTICUERPOS IG M MANUAL
                    O SEMIAUTOMATIZADO, VIH, HEPATITIS B ANTIGENO DE SUPERFICIE [Ag
                    HBs] , HEMOCLASIFICACION, UROCULTIVO, SEROLOGIA PRUEBA
                    TREPONEMICA PRUEBA RAPIDA, TRYPANOSOMA CRUZI ANTICUERPOS
                    MANUAL (ELISA), FROTIS DE FLUJO VAGINAL, RUBEOLA ANTICUERPOS IGG
                    AUTOMATIZADO, RUBEOLA ANTICUERPOS IGM AUTOMATIZADO,
                    CITOMEGALOVIRUS IGG ,CITOMEGALOVIRUS IGM (MANUAL), CONSULTA
                    DE PRIMERA VEZ POR NUTRICION Y DIETETICA ,CONSULTA DE PRIMERA
                    VEZ POR PSICOLOGIA, CONSULTA DE PRIMERA VEZ POR ODONTOLOGIA,
                    SE DIRECCIONA A CLINICA FOSCAL SE PRESCIBRE
                    MICRONUTRIENTES ACIDO FOLICO TAB X 1MG ,TOMAR 1 TABLETA
                    CADA DIA, CARBONATO DE CALCIO , TOMAR 1 TAB CADA DIA , SULFATO
                    FERROSO X 300 MG , TOMAR UNA TABLETA CADA DIA, SE BRINDA
                    EDUCACION. SE CITA A CONSULTA CON MEDICINA GENERAL PARA
                    INICIO CONTROL PRENATAL CON MEDICO GENERAL
                    Se brinda educación : sobre cuidados en la gestación: se educa, informa y recomienda sobre los
                    signos de alarma en la gestación: ardor o dolor al orinar, cefalea intensa, tinitus, fosfenos, visión
                    borrosa, mareo, dolor en boca del estómago, edema en cara, manos y pies, palidez marcada en el
                    rostro, fiebre, dolor bajito tipo cólico, hemorragia vaginal, amniorrea, disminución o ausencia de
                    movimientos fetales por periodo prolongado, frente a esta sintomatología acudir al servicio de
                    urgencias, su sitio de atención en la CLINICA FOSCAL SANTA CRUZ DE LA LOMA
                    Se educa sobre importancia de Lactancia materna exclusiva a libre demanda hasta los 6 meses y
                    complementaria hasta los dos años, alimentar cada 2-3h a recién nacido o a libre demanda, se
                    explica técnicas de lactancia materna, así como masajes antes de lactar, estar adecuadamente
                    hidratadas, SE ENTREGA FOLLETO CON CUIDADOS , TECNICAS DE LACTANCIA, Cuidados en la
                    gestación como adecuada alimentación rica en fibra, hierro, acido fólico y proteínas, frutas y
                    verduras. Descanso, actividad ocio, lectura de temas sobre cuidados del recién nacido y de la
                    gestación, ejercicios de estimulación prenatal, ejercicios de relajación, manejo de estrés ,
                    permanecer tranquila, realizar caminata diarias 30 minutos 4 ó 5 veces por semana si no hay
                    contraindicaciones de salud, tomar micronutrientes (se explica las indicaciones del hierro, acido
                    fólico y calcio) , inicio de planificación familiar después del parto, aplicación de vacunas PAI,
                    (Vacuna COVID a partir de semana 12, influenza a las 14 sem, TT TD alas 20semanas, DPTacelular a
                    la 26semanas), asistir a curso preparación maternidad que se realiza en Foscal, se entrega
                    programación; importancia de asistir a control prenatal mensual, asistir a nutrición, psicología,
                    odontología; asistir a realización de citología cervicouterina en el según trimestre o según orden
                    medica. Signos de trabajo de parto, elementos que debe llevar a sala de parto y habitación, asistir
                    a control posparto y del recién nacido ( MAXIMO EN 5 DIAS) , se educa sobre signos de alarma de
                    la madre y del recién nacido para acudir a urgencias (fiebre, hemorragia fétida, mamas
                    congestionadas, con calor y dolor, salida después y/o dolor en cicatriz de herida si el parto fue por
        
                    cesárea, color amarillo del bebé en piel y ojos, somnolencia, diarrea, vomito, no hace deposición el
                    bebe). Se indica ingresar a su hijo a control de crecimiento y desarrollo y llevarlo a vacunar según
                    esquema PAI.se entrega material educativo sobre temática tratada, Madre refiere entender y
                    seguir las instrucciones.
                    Plan: *Se enfatiza en el cumplimiento de las citas, tiene pendiente citas de Psicología, Nutrición,
                    odontología, vacunas, curso de Preparacion para la Maternidad y Paternidad, *Continuar con
                    micronutrientes, * fomento lactancia materna exclusiva hasta los 6 meses y complementaria hasta
                    los 2años o mas y buen trato en los menores, * Se brinda educación en cuidados maternos
                    referente a: vestido, higiene en general, ejercicio, mecánica corporal, descanso, relaciones
                    sexuales, nutrición, control de estrés; factores protectores del embarazo como no consumo de
                    drogas, no fumar y no bebidas alcohólicas; signos de alarma como: salida de líquido o sangre por
                    vagina, fiebre sin causa aparente, edema generalizado, cefalea intensa, percepción muy débil o
                    ausencia de movimientos fetales, tensión arterial alta, fosfenos, tinitus, dolor epigástrico fuerte,
                    prurito y disuria, inicio de contracciones.
                    GESTANTE TIENE FACTOR DE RIESGO PARA EVENTO TROMBOEMBOLICO VENOSO SE SACA CITA
                    CON MEDICO GENERAL DE CONTROL PRENATAL DRA LAURA SARMIENTO PARA INGRESO A
                    CONTROL Y MANEJO DE GESTANTE
                    PLAN
                    ASISTIR A CONTROL PRENATAL CON MEDICO CADA MES.
                    SS// VALORACIÓN POR ODONTOLOGIA, PSICOLOGIA, NUTRICION, CURSO MATERNIDAD Y
                    PATERNIDAD SE ENVIA EL LINK , ACUDIR A SERVICIO DE VACUNACIÓN SEGÚN ESQUEMA . LOS
                    SIGNOS VITALES NO CORRESPONDEN A LA USUARIA, CONSULTA POR CONTINGENCIA ANTE
                    PANDEMIA COVID 19 SE ENVIAN 10 PRESERVATIVOS INGRESO CONTROL PRENATAL
                    • APLICAR VACUNA COVID EN SEMANA 12 DE GESTACION CON FIZZER EN EL HOSPÍTAL
                    REGIONAL DE SAN GIL
                    • 15 DIAS POSTERIOR A LA SEGUNDA DOSIS DE VACUNA COVID, APLICAR INFLUENZA Y
                    TETANO EN TORRE EMPRESARIAL CENTRO COMERCIAL PUENTE SEGUNDO PISO CONSULTORIO 202
                    • EN SEMANA 26 DE GESTACION APLICAR DPT ACELULAR EN TORRE EMPRESARIAL CENTRO
                    COMERCIAL PUENTE SEGUNDO OISO CONSULTORIO 202
        
                    RECOMENDACIONES SIGNOS DE ALARMA
                    PRIMER TRIMESTRE HASTA LA SEMANA 19 DE GESTACIÓN
                    · Sangrado vaginal, en cualquier cantidad, acompañado o no de
                    cólicos o dolor pélvico.
                    · Fiebre que registre una temperatura de 38 ° o más, tomada con un
        
                    termómetro bucal o axilar.
                    · Si se presenta dolor o ardor al orinar, puede ser una infección
                    urinaria.
                    · Las náuseas y los episodios de vómito ocasionales son normales
                    hasta las 12 semanas. Sin embargo, si son incontrolables y causan
                    deshidratación o imposibilidad para ingerir agua oalimentos debes consultar
                    al médico.
                    · Dolor en la parte baja del abdomen severo, que no mejore con
                    analgésicos suaves prescritos por un médico.
                    SEGUNDO TRIMESTRE O MAS DESDE LA SEMANA 20 HASTA EL FINAL DEL
                    EMBARAZO
                    LOS SIGUENTES SON SIGNOS DE ALARMA Y DEBE CONSULTAR POR EL
                    SERVICIO DE URGENCIAS
                    · Sangrado vaginal, en cualquier cantidad, asociado o no a dolor
                    pélvico o contracciones. Requiere consulta inmediata.
                    · Salida de líquido por vagina, puede ser transparente, amarillo, verde
                    o rosado. En ese caso, si es posible, el traslado debe hacerse acostada al
                    centro médico más cercano.
                    · Dolor pélvico severo o contracciones. Sensación de que la barriga se
                    pone dura de forma intermitente asociado o no a dolor en laespalda.
                    · Si se presenta dolor o ardor al orinar puede ser una infección
                    urinaria, debes consultar a tu médico.
                    · Fiebre que registre una temperatura de 38 ° o más, tomada con un
                    termómetro bucal o axilar.
                    · Dolor de cabeza global, en casco, que no mejore con un analgésico
                    suave o que se acompañe de anomalías visuales o auditivas.
                    · Anomalías visuales: pérdida de la visión parcial o total, visión borrosa
                    o doble, visión de puntos o ‘moscas voladoras’.
                    · Anomalías auditivas: pitidos o ‘zumbidos’.
                    · Convulsiones o pérdida del conocimiento.
                    · Dolor en la boca del estómago asociado a náuseas y vómito.
                    · Hinchazón matutina de la cara, manos y piernas.
                    Disminución o ausencia de movimientos fetales. Debes conocer el patrón ‘normal’ de
                    movimientos de tu bebé.`
                } else {
                    p.innerHTML = `Gestante quien tiene PRUEBA DE EMBARAZO INSTITUCIONAL DEL ${data.fechaPruebaEmbarazo}
                    Usuaria de ${data.edad} años, control prenatal modalidad ${data.modalidad} por enfermería, Menarquia ${data.menarquia} años,
                    ${data.gestacion}, FUR: ${data.fechaMenstruacion}, MESTRUACION ${data.Menstruacion}, edad gestacional ${data.EdadGestacional} SEMANAS X ${data.Semanas}, FPP
                    ${data.FechaParto}, RH ${data.RH} ,peso: ${data.Peso} KG , talla: ${data.Talla} CM , IMC ${imcRedondeado}, vive en ciudad de ${data.Ciudad}
                    , Teléfono : ${data.Telefono} Ocupación: ${data.Ocupacion} , Estado Civil ${data.EstadoCivil} , escolaridad ${data.Escolaridad},
                    embarazo ${data.EmbarazoDeseado} planeado, aceptado por pareja y familia
                    ULTIMA CITOLOGÍA ${data.citologia} CON RESULTADO NEGATIVO PARA NEOPLASIA , NO TRAE EL
                    CARNET
                    VACUNACION COVID: ${data.Vacunacion}
                    PRIMER HIJO DE PADRE DEL FETO: ${data.HijosPadre} HIJO, APOYO FAMILIAR? ${data.ApoyoFamiliar}, EDAD DE LA PAREJA? ${data.EdadPadre} AÑOS
                    ,HEMOCLASIFICACION DE LA PAREJA? ${data.RHPareja} , CUENTA CON MASCOTA EN CASA? ${data.Mascotas},
                    ETS: ${data.ETS}
                    PLANIFICACIÓN AL QUEDAR EN EMBARAZO: ${data.metodo}
                    se da información sobre IVE segun sentencia Es un derecho fundamental de las niñas y mujeres, el
                    cual fue reconocido como tal por la Corte Constitucional Colombiana mediante la Sentencia C-051
                    de 2023, en tres circunstancias las cuales se le explican a la usuaria. Quien refiere no deseo de IVE
                    Paciente en buenas condiciones generales, disuria negativa, flujo blanco no oloroso ni pruriginoso,
                    niega sangrado vaginal y salida de líquido por vagina.
                    ¿DURANTE EL ULTIMO AÑO, ha sido humillada, menospreciada, insultada o amenazada por su
                    pareja? NIEGA
                    ¿DURANTE EL ÚLTIMO AÑO, fue golpeada, bofeteada, pateada, o lastimada físicamente de otra
                    manera? NIEGA
                    ¿DESDE QUE ESTÁ EN GESTACIÓN, ha sido golpeada, bofeteada, pateada, o lastimada físicamente
                    de alguna manera? NIEGA
                    ¿DURANTE EL ÚLTIMO AÑO, fue forzada a tener relaciones sexuales? NIEGA
                    DURANTE EL MES PASADO, ¿se ha sentido triste, deprimida o sin esperanza con frecuencia? NIEGA
                    DURANTE EL MES PASADO ¿ha permanecido preocupada por tener poco interés o placer para
                    hacer las cosas cotidianas? NIEGA ¿siente que necesita ayuda? NIEGA
                    GESTANTE DE ${data.edad} AÑOS CON EMBARAZO DE ${data.EdadGestacional} SEMANAS POR ${data.Semanas}, SE
                    CLASIFICA COMO ARO ${data.Aro}, SE ENVIAN
                    EXAMENES DE LABORATORIO DE PRIMER TRIMESTRE HEMOGRAMA,
                    
                    GLICEMIA, TOXOPLASMA GONDII ANTICUERPOS IG G MANUAL O
                    SEMIAUTOMATIZADO, TOXOPLASMA GONDII ANTICUERPOS IG M MANUAL
                    O SEMIAUTOMATIZADO, VIH, HEPATITIS B ANTIGENO DE SUPERFICIE [Ag
                    HBs] , HEMOCLASIFICACION, UROCULTIVO, SEROLOGIA PRUEBA
                    TREPONEMICA PRUEBA RAPIDA, TRYPANOSOMA CRUZI ANTICUERPOS
                    MANUAL (ELISA), FROTIS DE FLUJO VAGINAL, RUBEOLA ANTICUERPOS IGG
                    AUTOMATIZADO, RUBEOLA ANTICUERPOS IGM AUTOMATIZADO,
                    CITOMEGALOVIRUS IGG ,CITOMEGALOVIRUS IGM (MANUAL), CONSULTA
                    DE PRIMERA VEZ POR NUTRICION Y DIETETICA ,CONSULTA DE PRIMERA
                    VEZ POR PSICOLOGIA, CONSULTA DE PRIMERA VEZ POR ODONTOLOGIA,
                    SE DIRECCIONA A CLINICA FOSCAL SE PRESCIBRE
                    MICRONUTRIENTES ACIDO FOLICO TAB X 1MG ,TOMAR 1 TABLETA
                    CADA DIA, CARBONATO DE CALCIO , TOMAR 1 TAB CADA DIA , SULFATO
                    FERROSO X 300 MG , TOMAR UNA TABLETA CADA DIA, SE BRINDA
                    EDUCACION. SE CITA A CONSULTA CON MEDICINA GENERAL PARA
                    INICIO CONTROL PRENATAL CON MEDICO GENERAL
                    Se brinda educación : sobre cuidados en la gestación: se educa, informa y recomienda sobre los
                    signos de alarma en la gestación: ardor o dolor al orinar, cefalea intensa, tinitus, fosfenos, visión
                    borrosa, mareo, dolor en boca del estómago, edema en cara, manos y pies, palidez marcada en el
                    rostro, fiebre, dolor bajito tipo cólico, hemorragia vaginal, amniorrea, disminución o ausencia de
                    movimientos fetales por periodo prolongado, frente a esta sintomatología acudir al servicio de
                    urgencias, su sitio de atención en la CLINICA FOSCAL SANTA CRUZ DE LA LOMA
                    Se educa sobre importancia de Lactancia materna exclusiva a libre demanda hasta los 6 meses y
                    complementaria hasta los dos años, alimentar cada 2-3h a recién nacido o a libre demanda, se
                    explica técnicas de lactancia materna, así como masajes antes de lactar, estar adecuadamente
                    hidratadas, SE ENTREGA FOLLETO CON CUIDADOS , TECNICAS DE LACTANCIA, Cuidados en la
                    gestación como adecuada alimentación rica en fibra, hierro, acido fólico y proteínas, frutas y
                    verduras. Descanso, actividad ocio, lectura de temas sobre cuidados del recién nacido y de la
                    gestación, ejercicios de estimulación prenatal, ejercicios de relajación, manejo de estrés ,
                    permanecer tranquila, realizar caminata diarias 30 minutos 4 ó 5 veces por semana si no hay
                    contraindicaciones de salud, tomar micronutrientes (se explica las indicaciones del hierro, acido
                    fólico y calcio) , inicio de planificación familiar después del parto, aplicación de vacunas PAI,
                    (Vacuna COVID a partir de semana 12, influenza a las 14 sem, TT TD alas 20semanas, DPTacelular a
                    la 26semanas), asistir a curso preparación maternidad que se realiza en Foscal, se entrega
                    programación; importancia de asistir a control prenatal mensual, asistir a nutrición, psicología,
                    odontología; asistir a realización de citología cervicouterina en el según trimestre o según orden
                    medica. Signos de trabajo de parto, elementos que debe llevar a sala de parto y habitación, asistir
                    a control posparto y del recién nacido ( MAXIMO EN 5 DIAS) , se educa sobre signos de alarma de
                    la madre y del recién nacido para acudir a urgencias (fiebre, hemorragia fétida, mamas
                    congestionadas, con calor y dolor, salida después y/o dolor en cicatriz de herida si el parto fue por
        
                    cesárea, color amarillo del bebé en piel y ojos, somnolencia, diarrea, vomito, no hace deposición el
                    bebe). Se indica ingresar a su hijo a control de crecimiento y desarrollo y llevarlo a vacunar según
                    esquema PAI.se entrega material educativo sobre temática tratada, Madre refiere entender y
                    seguir las instrucciones.
                    Plan: *Se enfatiza en el cumplimiento de las citas, tiene pendiente citas de Psicología, Nutrición,
                    odontología, vacunas, curso de Preparacion para la Maternidad y Paternidad, *Continuar con
                    micronutrientes, * fomento lactancia materna exclusiva hasta los 6 meses y complementaria hasta
                    los 2años o mas y buen trato en los menores, * Se brinda educación en cuidados maternos
                    referente a: vestido, higiene en general, ejercicio, mecánica corporal, descanso, relaciones
                    sexuales, nutrición, control de estrés; factores protectores del embarazo como no consumo de
                    drogas, no fumar y no bebidas alcohólicas; signos de alarma como: salida de líquido o sangre por
                    vagina, fiebre sin causa aparente, edema generalizado, cefalea intensa, percepción muy débil o
                    ausencia de movimientos fetales, tensión arterial alta, fosfenos, tinitus, dolor epigástrico fuerte,
                    prurito y disuria, inicio de contracciones.
                    GESTANTE TIENE FACTOR DE RIESGO PARA EVENTO TROMBOEMBOLICO VENOSO SE SACA CITA
                    CON MEDICO GENERAL DE CONTROL PRENATAL DRA LAURA SARMIENTO PARA INGRESO A
                    CONTROL Y MANEJO DE GESTANTE
                    PLAN
                    ASISTIR A CONTROL PRENATAL CON MEDICO CADA MES.
                    SS// VALORACIÓN POR ODONTOLOGIA, PSICOLOGIA, NUTRICION, CURSO MATERNIDAD Y
                    PATERNIDAD SE ENVIA EL LINK , ACUDIR A SERVICIO DE VACUNACIÓN SEGÚN ESQUEMA . LOS
                    SIGNOS VITALES NO CORRESPONDEN A LA USUARIA, CONSULTA POR CONTINGENCIA ANTE
                    PANDEMIA COVID 19 SE ENVIAN 10 PRESERVATIVOS INGRESO CONTROL PRENATAL
                    • APLICAR VACUNA COVID EN SEMANA 12 DE GESTACION CON FIZZER EN EL HOSPÍTAL
                    REGIONAL DE SAN GIL
                    • 15 DIAS POSTERIOR A LA SEGUNDA DOSIS DE VACUNA COVID, APLICAR INFLUENZA Y
                    TETANO EN TORRE EMPRESARIAL CENTRO COMERCIAL PUENTE SEGUNDO PISO CONSULTORIO 202
                    • EN SEMANA 26 DE GESTACION APLICAR DPT ACELULAR EN TORRE EMPRESARIAL CENTRO
                    COMERCIAL PUENTE SEGUNDO OISO CONSULTORIO 202
        
                    RECOMENDACIONES SIGNOS DE ALARMA
                    PRIMER TRIMESTRE HASTA LA SEMANA 19 DE GESTACIÓN
                    · Sangrado vaginal, en cualquier cantidad, acompañado o no de
                    cólicos o dolor pélvico.
                    · Fiebre que registre una temperatura de 38 ° o más, tomada con un
        
                    termómetro bucal o axilar.
                    · Si se presenta dolor o ardor al orinar, puede ser una infección
                    urinaria.
                    · Las náuseas y los episodios de vómito ocasionales son normales
                    hasta las 12 semanas. Sin embargo, si son incontrolables y causan
                    deshidratación o imposibilidad para ingerir agua oalimentos debes consultar
                    al médico.
                    · Dolor en la parte baja del abdomen severo, que no mejore con
                    analgésicos suaves prescritos por un médico.
                    SEGUNDO TRIMESTRE O MAS DESDE LA SEMANA 20 HASTA EL FINAL DEL
                    EMBARAZO
                    LOS SIGUENTES SON SIGNOS DE ALARMA Y DEBE CONSULTAR POR EL
                    SERVICIO DE URGENCIAS
                    · Sangrado vaginal, en cualquier cantidad, asociado o no a dolor
                    pélvico o contracciones. Requiere consulta inmediata.
                    · Salida de líquido por vagina, puede ser transparente, amarillo, verde
                    o rosado. En ese caso, si es posible, el traslado debe hacerse acostada al
                    centro médico más cercano.
                    · Dolor pélvico severo o contracciones. Sensación de que la barriga se
                    pone dura de forma intermitente asociado o no a dolor en laespalda.
                    · Si se presenta dolor o ardor al orinar puede ser una infección
                    urinaria, debes consultar a tu médico.
                    · Fiebre que registre una temperatura de 38 ° o más, tomada con un
                    termómetro bucal o axilar.
                    · Dolor de cabeza global, en casco, que no mejore con un analgésico
                    suave o que se acompañe de anomalías visuales o auditivas.
                    · Anomalías visuales: pérdida de la visión parcial o total, visión borrosa
                    o doble, visión de puntos o ‘moscas voladoras’.
                    · Anomalías auditivas: pitidos o ‘zumbidos’.
                    · Convulsiones o pérdida del conocimiento.
                    · Dolor en la boca del estómago asociado a náuseas y vómito.
                    · Hinchazón matutina de la cara, manos y piernas.
                    Disminución o ausencia de movimientos fetales. Debes conocer el patrón ‘normal’ de
                    movimientos de tu bebé.`
                }
            }
                
            e.preventDefault();
            e.stopPropagation();
        })
    }
}
customElements.define("gestantes-mujeres", Gestantes);