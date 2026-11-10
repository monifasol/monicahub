export const markup = `
<div class="wrap">
    <header class="page">
      <h1>Creator College · los 5 días</h1>
      <p class="lede">Scrolling to Selling. Del miércoles 21 al domingo 26 de octubre de 2026. Jun Yuh y, en la oferta, Shan Hanif.</p>
      <p class="src sources">Fuentes: informes de capturas, sin rehacerlas. Día 1 y arranque del 22 hasta las 22:17, chat «Creator College content strategy». Día 2 formatos, capturas 095–160, chat «Creator College workshop analysis». Del 23 oct 21:40 al 26 oct 01:11, chat «Creator College masterclass notes». Zoom de Jun Yuh, Creator College. 3pm Eastern, 12pm Pacific, 7pm GMT, 9pm CEST.</p>
    </header>

    <nav class="days" aria-label="Días">
      <button type="button" data-view="mapa" aria-current="true">Mapa</button>
      <button type="button" data-view="d1">Mié 21 · qué publicar</button>
      <button type="button" data-view="d2">Jue 22 · formatos</button>
      <button type="button" data-view="d3">Vie 23 · misiones</button>
      <button type="button" data-view="d4">Sáb 24 · Shan y venta</button>
      <button type="button" data-view="dom">Dom 25 · cámara y edición</button>
    </nav>

    <section id="mapa">
      <h2>El hilo de los cinco días</h2>
      <p>La atención no paga las facturas. La conversión sí. El recorrido de la slide del miércoles es el mismo que cierra el domingo.</p>
      <div class="grid g5">
        <article class="card"><span class="kicker">Mié 21</span><strong>Qué publicar</strong><p class="small">Tú eres el nicho. Pilares Skill, Passion y Story. Calendario de 7 días en tres formatos.</p></article>
        <article class="card"><span class="kicker">Jue 22</span><strong>Atención a seguidores</strong><p class="small">El formato es la receta. Outliers y trends. Talking, non-talking y carrusel.</p></article>
        <article class="card"><span class="kicker">Vie 23</span><strong>Seguidores a clientas</strong><p class="small">Attract, Nurture, Position, Convert. Matriz de Jun: 7 posts según audiencia y skill.</p></article>
        <article class="card"><span class="kicker">Sáb 24</span><strong>Sistema para escalar</strong><p class="small">Shan: 1 lead magnet, 1 funnel, 1 offer. WOW, STORY y MAP. Lead gen frente a venta directa.</p></article>
        <article class="card"><span class="kicker">Dom 25–26</span><strong>Cámara y edición</strong><p class="small">Hooks de 6 tipos, DMs en 3 notas, carrusel «1 bad hour», edición y el VIP de 4 semanas.</p></article>
      </div>

      <h3>De la persona al post</h3>
      <p class="small">Árbol que Jun y Shan repiten. Cada pieza cuelga de un pilar y cumple una misión.</p>
      <div class="flow">
        <span class="chip">Atención</span><span class="arrow">→</span>
        <span class="chip">Marca / mensaje</span><span class="arrow">→</span>
        <span class="chip on">Pilares</span><span class="arrow">→</span>
        <span class="chip">Topics</span><span class="arrow">→</span>
        <span class="chip">Contenido</span><span class="arrow">→</span>
        <span class="chip on">Misión</span>
      </div>

      <div class="grid g3" style="margin-top:14px">
        <article class="card"><span class="kicker">Día 1</span><strong>Tres pilares</strong><p class="small">Skills: lo que alguien puede aprender de ti. Passions: en qué te gastas el dinero y quién le da sentido. Story: cómo llegaste y qué creías antes. Ir unos pasos por delante basta.</p></article>
        <article class="card"><span class="kicker">Día 3</span><strong>Cuatro misiones</strong><p class="small">Attract trae gente nueva. Nurture profundiza la conexión. Position construye autoridad. Convert vuelve la atención ingreso. Trust y depth of value bajan por el embudo.</p></article>
        <article class="card"><span class="kicker">Día 2</span><strong>Tres formatos</strong><p class="small">Talking: confianza. Non-talking: parar el scroll y views. Carrusel: enseñar y saves. Anatomía: Format, Hook, Value, Re-hooks. Roba el formato, no el mensaje.</p></article>
      </div>
      <div data-diagram="funnel"></div>

      <h3>Embudo de Shan, flecha hacia 100.000 $</h3>
      <div class="flow">
        <span class="chip">Gente y contenido</span><span class="arrow">→</span>
        <span class="chip on">1 lead magnet</span><span class="arrow">→</span>
        <span class="chip on">1 funnel</span><span class="arrow">→</span>
        <span class="chip on">1 offer</span>
      </div>
      <p class="small">Book a call o DMs. Showcase your skill. Aparta físico, dropshipping, SaaS y network. 1-many: ellos hacen el trabajo, margen alto. 1-1 vende tiempo.</p>

      <h3>Motor del domingo</h3>
      <p class="small">Un sistema. Cuatro semanas. Los mismos pasos cada semana. El feedback de esta semana moldea la lección de la siguiente.</p>
      <div class="stats">
        <div class="stat"><b>1</b><span>Strategy lesson</span></div>
        <div class="stat"><b>2</b><span>Create con el coach</span></div>
        <div class="stat"><b>3</b><span>Post it</span></div>
        <div class="stat"><b>4</b><span>Get feedback</span></div>
      </div>
      <div class="scroll">
        <table>
          <thead><tr><th>Semana</th><th>Lo que construye</th><th>En el calendario del día 1</th></tr></thead>
          <tbody>
            <tr><td>Setup, 26 oct</td><td>Entrar y mapear skills</td><td>Viernes: primera llamada con Jun</td></tr>
            <tr><td>1 · 2 nov</td><td>Qué publicar</td><td>Strategy, feedback, workshop, feedback, strategy</td></tr>
            <tr><td>2 · 9 nov</td><td>Crearlo más rápido</td><td>Formatos y edición para views</td></tr>
            <tr><td>3 · 16 nov</td><td>De views a clientas</td><td>Workshop, feedback, strategy</td></tr>
            <tr><td>4 · 23 nov</td><td>Escalarlo</td><td>Última llamada con Jun el viernes</td></tr>
          </tbody>
        </table>
      </div>
      <p class="faint">Al salir: plan de contenido, workflow más rápido, oferta publicada y plan de lanzamiento repetible. Compromiso que citó: 3–5 horas por semana. Coach y grupo por nivel y zona horaria.</p>
      <div class="callout">
        <strong>Cinco huecos de captura. No rellenados.</strong>
        Paso 3 del talking head del domingo (salta del 2 al 4). Reparto de 7 posts para audiencia grande y skill alta. Por qué falla publicar solo Attract. Qué significa «rule of 10». Ejemplos de los otros tres cuadrantes de edición por expertise. El detalle está en el día correspondiente.
      </div>
      <p class="faint">Otras slides incompletas, también sin inventar: el resto de la palanca Connection (21:55–21:59); qué son los 3Ps de la pizarra; el texto de Passion de @coachmichael; el nurture de @thearabellasolution; el despiece de Mia; la respuesta de la comparación Rare Beauty; las dos objeciones de DM; parte del hook contrarian y del relatable; una regla de idioma que la slide no escribe.</p>
    </section>

    <section id="d1" hidden>
      <h2>Miércoles 21 · qué publicar</h2>
      <p>The best person almost never wins. Gana quien consigue la atención correcta. El gráfico sube con contenido y se aplana sin contenido.</p>
      <p class="small">Scroller: cierra y en seis meses está en el mismo sitio. Builder: actúa ese día. You don't need a niche. You are the niche.</p>

      <div class="grid g2">
        <div>
          <h3>El algoritmo rankea el post, no la cuenta</h3>
          <div class="scroll">
            <table>
              <thead><tr><th>Antes</th><th>Ahora</th></tr></thead>
              <tbody>
                <tr>
                  <td>La cuenta llevaba una etiqueta. Todos los posts iban a la misma audiencia. En el dibujo, una pirámide FITNESS.</td>
                  <td>Cada post encuentra su audiencia. Tres pirámides, cada una con su play. El siguiente post empieza de cero.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="small">Kayla Itsines. Antes solo fitness. Ahora la slide nombra a quien la ve: fitness, amistades, girlhood, maternidad, vida de emprendedora y vida corporativa.</p>
        </div>
        <div>
          <h3>Nichar pone un CAP</h3>
          <div class="scroll">
            <table>
              <thead><tr><th>Palanca</th><th>Lo que queda en las capturas</th></tr></thead>
              <tbody>
                <tr class="warn"><td>Connection</td><td>Solo esta frase: Information alone isn't an advantage any more. Entre las 21:55 y las 21:59 no hay otra slide.</td></tr>
                <tr><td>Audience</td><td>Techo de compradores. Cadena: lanzamiento que funciona, relanzas, menos compradores, rebrand, lanzamiento fallido, odias el contenido, el dinero se para. Comparten (3.512), defienden, recomiendan (342).</td></tr>
                <tr><td>Potential</td><td>Un solo tema lleva a aburrimiento y burnout. Known for 1 thing trap: un año de un tema, cambias, a nadie le importa, caen las views.</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <h3>Pilares y los ejemplos que dio</h3>
      <div class="scroll">
        <table>
          <thead><tr><th>Pilar</th><th>Preguntas</th><th>Los de Jun</th><th>Beginner @dianaempower</th><th>Fitness @coachmichael</th></tr></thead>
          <tbody>
            <tr>
              <td>Skills</td>
              <td>Qué estoy aprendiendo. Qué me pregunta la gente.</td>
              <td>Storytelling that sells. Building discipline. Planning a launch.</td>
              <td>The ONE hidden sign that you're finally HEALING from toxic relationship.</td>
              <td>DON'T DO THIS TYPE OF STRETCHING BEFORE YOU GET ON THE COURT.</td>
            </tr>
            <tr>
              <td>Passions</td>
              <td>En qué me gasto el dinero. Quién le da sentido a lo que hago.</td>
              <td>My kittens. My faith. My community.</td>
              <td>Dos amigas neurodivergentes, negocios y fe.</td>
              <td>Clip junto a una piscina. El texto no se lee en la captura.</td>
            </tr>
            <tr>
              <td>Story</td>
              <td>Cómo he llegado. Qué creías antes. No hace falta drama.</td>
              <td>Our first vacation. The years I struggled. Left biomed engineering.</td>
              <td>Darle a su hijo el universo y el amor que su entorno no le enseñó.</td>
              <td>How I lost 25lbs in 3 months.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="small">60 segundos para apuntar temas. Topic es lo que dices. Format es cómo lo dices. You've spent the last hour looking for permission from someone who looks exactly like you. There isn't one.</p>

      <h3>Plan de 7 días</h3>
      <div class="scroll">
        <table>
          <thead><tr><th>Día</th><th>Pilar</th><th>Formato</th><th>Ejemplo relleno</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>Skill</td><td>Talking head</td><td>10/10 habits of a disgustingly good storyteller.</td></tr>
            <tr><td>2</td><td>Story</td><td>Non-talking, B-roll con texto</td><td>dad, I'm worried about you.</td></tr>
            <tr><td>3</td><td>Skill</td><td>Carousel</td><td>this probably dumb / let me give this a go.</td></tr>
            <tr><td>4</td><td>Skill</td><td>Talking head</td><td></td></tr>
            <tr><td>5</td><td>Passion</td><td>Carousel</td><td></td></tr>
            <tr><td>6</td><td>Skill</td><td>Non-talking, B-roll con texto</td><td></td></tr>
            <tr><td>7</td><td>Story</td><td>Non-talking, B-roll con texto</td><td></td></tr>
          </tbody>
        </table>
      </div>

      <div class="grid g2">
        <div>
          <h3>Formato que retiene</h3>
          <p class="small">Hook que deja curiosidad. Valor con educación o reconocimiento. Re-hook durante el vídeo. El mal formato tarda, casi no da valor y no tiene estructura.</p>
          <p class="small">Non-talking de @stephxtech, 78,1 K. «36 things Claude told me to do to get my dream life by Dec. Steal my prompt.» Hook de objetivo más ancla de tiempo. Valor en el caption. Re-hook hacia el caption.</p>
        </div>
        <div>
          <h3>A tres meses</h3>
          <p class="small">Objeciones en pantalla: no sé qué publicar, no sé cómo ayuda al negocio, me da miedo el juicio.</p>
          <p class="small">Scroller: el mismo domingo, mirando a otras, «el mes que viene». Builder: una audiencia que sabe tu nombre, ingreso propio, skills que se acumulan, la historia contada.</p>
        </div>
      </div>
    </section>

    <section id="d2" hidden>
      <h2>Jueves 22 · atención que se vuelve seguidores</h2>
      <p>The format is the recipe. Your topic are the ingredients. Después de 2.634 vídeos, en pantalla solo se leen Education y Content. La misma idea se queda en 500 views o llega a 50.000 por el empaque.</p>

      <h3>Arranque, hasta las 22:17</h3>
      <p class="small">Este bloque está en el informe de estrategia. El de formatos empieza después y no lo repite.</p>
      <div class="grid g3">
        <article class="card"><strong>Content Strategy</strong><p class="small">Saber qué publicar para que traiga seguidores. Nicho, pilares, formatos, guion y hooks, views, analíticas de Instagram.</p></article>
        <article class="card"><strong>Content Creation</strong><p class="small">Editar contenido que consigue views. Edits, CapCut, Canva, B-roll, cámara, carruseles, captions, stories que convierten.</p></article>
        <article class="card"><strong>Making Money</strong><p class="small">Lanzar el producto digital. Diseñarlo, lead magnets, venta, mensajes, landing, escalar el funnel.</p></article>
      </div>
      <div class="note"><strong>Pizarra «This is what I noticed»</strong>Seis notas sin desarrollar: cadence, CTA en el caption, pacing al beat, psicografía, curiosity hook, y 3Ps. La slide no dice qué son los 3Ps.</div>

      <div class="grid g2">
        <div>
          <h3>Mito y realidad</h3>
          <div class="scroll">
            <table>
              <thead><tr><th>El mito</th><th>La realidad</th></tr></thead>
              <tbody>
                <tr><td>Saben qué publicar</td><td>Estudian contenido</td></tr>
                <tr><td>Saben qué se va a hacer viral</td><td>Ven patrones</td></tr>
                <tr><td>Siempre tienen ideas</td><td>Prueban formatos</td></tr>
                <tr><td>Lo entienden por naturaleza</td><td>Aprenden qué hace que la gente mire y comparta</td></tr>
              </tbody>
            </table>
          </div>
          <p class="faint">En pantalla: 7.860.684 views, 2,2 M, 11,2 K seguidores nuevos, +35.207 net, un vídeo de 0:25.</p>
        </div>
        <div>
          <h3>Cómo se reconoce un formato que gana</h3>
          <p class="small">Outlier: 5–10 veces sus views de siempre. @makenzieco, piezas de 25 K y 32 K, y otra a 772 K. En Insights, últimos 30 días: 195 K, 191 K, 159 K, 146 K, 115 K.</p>
          <p class="small">Trend: diez vídeos del mismo formato, de creadoras distintas, a la vez. Ejemplo: «1 bad hour? You still have 23», versión girl y bro.</p>
          <p class="small">Sola, la serie baja termina en 4 K. Con el programa, el salto que dibuja es de 1,2 K a 6 K. @createwithalena: 910 K, 3,5 M y 5 M (fruit market, tomato, bon appetit).</p>
        </div>
      </div>

      <h3>El mismo formato, tres skills</h3>
      <div class="scroll">
        <table>
          <thead><tr><th>Formato</th><th>Cuenta</th><th>Qué se ve</th></tr></thead>
          <tbody>
            <tr><td>Rankings</td><td>@jun_yuh</td><td>Bad, Good, Excellent. Relying only on one platform.</td></tr>
            <tr><td>Rankings</td><td>@houseofyooni</td><td>Bad, Good, Great. The Ordinary. Dark armpits.</td></tr>
            <tr><td>Rankings</td><td>@djluckyjones</td><td>Bad, decent, incredible. SoundCloud, YouTube y otra plataforma.</td></tr>
            <tr><td>Split screen</td><td>@jun_yuh</td><td>What you see en el escenario. What you don't, ensayando solo.</td></tr>
            <tr><td>Split screen</td><td>@rebeccacherry</td><td>Being an entrepreneur is hard / is empowering.</td></tr>
            <tr><td>Split screen</td><td>@elliotmurphyy</td><td>It's just 45 minutes. Sofá y corriendo.</td></tr>
          </tbody>
        </table>
      </div>
      <p class="small">El post sale a un grupo pequeño de seguidores y de no seguidores. Si se quedan, pasa a más gente. El algoritmo mira si pararon el scroll, cuánto tiempo se quedaron, y si hubo like, comentario o share.</p>

      <hr>
      <h3>Formatos, capturas 095–160</h3>
      <p>Tres pasos: identificar un formato que ya gana, entender por qué funciona, adaptarlo con tu mensaje. Roba el formato, no el mensaje.</p>
      <div class="grid g3">
        <article class="card"><strong>Talking reels</strong><p class="small">Confianza y conexión. Ejemplo en la slide: 3,8 M.</p></article>
        <article class="card"><strong>Non-talking reels</strong><p class="small">Parar el scroll y views. Ejemplos: 467 K y 402 K. B-roll y texto.</p></article>
        <article class="card"><strong>Carousels</strong><p class="small">Enseñar, explicar, saves. Ejemplo: 405 K. Desde 2025, un 50 % más de engagement que los reels. Fanpage Karma, casi 700.000 posts, enero a mayo de 2025.</p></article>
      </div>
      <p class="small">Anatomía: Format (empaque), Hook (por qué paraste), Value (qué aprendiste o sentiste), Re-hooks (por qué seguiste). Si un seguidor se salta el carrusel, el algoritmo se lo vuelve a enseñar por la segunda slide. Esa slide también engancha.</p>

      <h3>Non-talking, malo y bueno</h3>
      <div class="scroll">
        <table>
          <thead><tr><th></th><th>@elliotmurphyy malo</th><th>El mismo, bueno</th></tr></thead>
          <tbody>
            <tr><td>Hook</td><td>Genérico: No matter how slow you run…</td><td>Dolor concreto: Inchworm with Pushup x10</td></tr>
            <tr><td>Valor</td><td>Una sola nota</td><td>Educativo, alto</td></tr>
            <tr><td>Re-hook</td><td>Nada cambia</td><td>Te retiene hasta la solución</td></tr>
          </tbody>
        </table>
      </div>
      <p class="small">El formato de Jun, fotos antiguas y texto: 25 M, 653 K, 1,7 M, 4,1 M, 7,2 M, 1,7 M. Ganchos: «2013: and my mom left for Korea without a goodbye» y «2013: Parents divorced abruptly». Cadence: música de anticipación y cada línea legible. Arco en líneas: problema 7, pursuit 7, payoff 5.</p>
      <div data-diagram="arc"></div>
      <div class="scroll">
        <table>
          <thead><tr><th>Acto</th><th>Lo que se lee</th></tr></thead>
          <tbody>
            <tr><td>Problem</td><td>Padres divorciados de golpe. La madre se va a Corea sin despedirse. I don't fit in. No puede mirarse al espejo. Noche, lluvia, lloró 3 horas.</td></tr>
            <tr><td>Pursuit</td><td>Cortó distracciones. Estudió 14 horas al día. Mental win. Spiritual win. Consiguió un trabajo. Until I was ready.</td></tr>
            <tr><td>Payoff</td><td>Bachelor y master's en biomedical engineering. Pagó 40.000 $ de deuda familiar. Foto con la abuela. Billete para ver a su madre, 10 años después.</td></tr>
          </tbody>
        </table>
      </div>

      <h3>Hoja «Jun Yuh»</h3>
      <p class="small">Columnas: seguidores, link, views, shares, hook, format, duración, intensidad, audio, CTA, visuals y editing.</p>
      <div class="scroll">
        <table>
          <thead><tr><th>Pieza</th><th>Views</th><th>Shares</th><th>Duración</th><th>Qué hace el edit</th></tr></thead>
          <tbody>
            <tr><td>Silent film</td><td>32,9 M</td><td>444</td><td>30 s, intensidad alta</td><td>Ritmo de curiosidad, cortes al beat, texto, ángulos que contrastan antes y ahora. Sin CTA.</td></tr>
            <tr><td>Talking head, Healing our broken family</td><td>1,2 M</td><td>19,5 K</td><td>41 s, intensidad baja</td><td>Hook hablado, voz con autoridad, música trending, cortes de silencios, rejilla de ranking. Sin CTA.</td></tr>
            <tr><td>Broke vs wealthy couples</td><td>1,7 M</td><td>61,3 K</td><td>31 s, intensidad baja</td><td>Hook: Broke couples use the weekend to forget about their life. Voz relajada, música baja, el ángulo alarga la decisión.</td></tr>
            <tr><td>Work-life balance</td><td>626 K</td><td>9.194</td><td>52 s, intensidad baja</td><td>Hook hablado, texto acentuado, caras reconocibles, música que sube. Sin CTA.</td></tr>
          </tbody>
        </table>
      </div>
      <p class="small">Canción Messy, Lola Young: 14 cortes en 22 s, controlados. La letra prepara el juicio y el payoff lo rebate. Arco Opinion Shift, problema, pursuit, payoff. Premisa: las madres no aportan nada medible. Pursuit: el trabajo invisible. Payoff: las mujeres son la mesa. Repetir la apertura empuja el share. La misma frase, «what do you bring to the table», filmada como transformación física. No hay hook hablado haciendo ese trabajo.</p>

      <h3>The Formats Tool</h3>
      <div class="scroll">
        <table>
          <thead><tr><th>Estilo</th><th>Ejemplos</th><th>Bajos</th><th>Para qué</th></tr></thead>
          <tbody>
            <tr><td>Silent film / B-roll</td><td>143</td><td>99</td><td>Sin habla. Texto y canción. Day 40 of throwing pottery until my people find me.</td></tr>
            <tr><td>Talking head</td><td>85</td><td>53</td><td>Una toma, recortada en los huecos. El hook hace casi todo. Tráiler de Netflix pidiendo 10 días.</td></tr>
            <tr><td>Tutorial</td><td>31</td><td>9</td><td>Paso a paso, de peor a mejor. La gente lo guarda.</td></tr>
            <tr><td>Vlog</td><td>15</td><td>4</td><td>El día real, timestamps, sensación cándida.</td></tr>
            <tr><td>Skit / Comedy</td><td>12</td><td>8</td><td>Un momento reconocible, corto, hecho para shares.</td></tr>
            <tr><td>Voiceover</td><td>10</td><td>1</td><td>Tu voz sobre B-roll. La imagen ilustra.</td></tr>
          </tbody>
        </table>
      </div>

      <h3>Carruseles</h3>
      <div class="scroll">
        <table>
          <thead><tr><th>Tipo</th><th>Cuenta</th><th>Texto</th></tr></thead>
          <tbody>
            <tr><td>My Story</td><td>@jaeheekoh</td><td>I'm committed to doing it differently this time, with more love, more patience, and less shame.</td></tr>
            <tr><td>Numbered List</td><td>@iamalexandriamaria</td><td>You can remember one random embarrassing thing from 2009 but not why you walked into the kitchen.</td></tr>
            <tr><td>Split Screen</td><td>@theerikacruz</td><td>A reminder that we all started as beginners. Keep going. / Welcome to my page.</td></tr>
          </tbody>
        </table>
      </div>
      <p class="small">Rejilla de 6 fotos, 3 por 2, texto corrido. Ejemplo real: 14,2 K likes, 65 comentarios, 151 shares. «dear younger me / you have no idea / how much your life / is going to change / i think you'd be / pretty proud.» Izquierda, vida personal. Derecha, el oficio.</p>
      <div class="scroll">
        <table>
          <thead><tr><th>Fila</th><th>Izquierda</th><th>Derecha</th><th>En Jun</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>Foto de pequeño</td><td>Aprendizaje</td><td>dear younger me / you have no idea</td></tr>
            <tr><td>2</td><td>Practicando el oficio</td><td>Lucha</td><td>Microscopio / The Guide to Academic Success</td></tr>
            <tr><td>3</td><td>Pasión</td><td>Éxito y alegría</td><td>Calle de noche / en el escenario</td></tr>
          </tbody>
        </table>
      </div>
      <p class="small">Plantillas de estructura, no de mensaje. Fitness: niña, gym, corriendo con fuerza, tirada y cansada, con amigas, dando clase. Artista: niño pintando, el trabajo de 9 a 5, con la familia, obra expuesta. Dueña de salón: joven, escuela, tratamiento, obra, equipo, inauguración. Médica: joven, facultad, pijama quirúrgico, estudiando, concierto, familia.</p>

      <h3>Talking head, los 5 pasos que sí están</h3>
      <p class="small">Estos cinco son del jueves, para escribir. El paso 3 que falta es otro listado, el del domingo, para grabar.</p>
      <div class="scroll">
        <table>
          <thead><tr><th>Paso</th><th>Qué pide</th><th>Ejemplo en pantalla</th></tr></thead>
          <tbody>
            <tr><td>1. Tres actos</td><td>Problem, Pursuit, Payoff.</td><td></td></tr>
            <tr><td>2. Tres hooks</td><td>Título en pantalla, verbal, visual.</td><td>how to be the niche / business</td></tr>
            <tr><td>3. Credibilidad en 10 s</td><td>Una escena, no un cargo.</td><td>I burned out three times before I figured this out. I'm a coach es un cargo.</td></tr>
            <tr><td>4. Lo específico</td><td>Cuanto más concreto el callout, más pega.</td><td></td></tr>
            <tr><td>5. Retener el payoff</td><td>Una sola pieza escondida: respuesta, lección o punchline.</td><td></td></tr>
          </tbody>
        </table>
      </div>
      <p class="small">Sirve para confianza, personalidad y autoridad. Malo, @houseofoyooni: hook débil, el formato se malinterpreta, casi sin edición. Bueno, la misma: dolor más hook visual, productos como atrezo. En el ejemplo de Jun, un cuaderno con la rueda Love, Identity, Fitness, Earnings, alrededor de self / ideal / now.</p>
      <p class="faint">Arranque del 23 a las 21:33, tres slides aún sin marco: la cuenta en la cena se paga sin hacer números; ser quien decide; controlar cómo y con quién gastas; I know what that feels like, because I remember when it changed for me. Huecos de captura entre las 22:38 y las 22:44, y entre las 22:44 y las 22:49.</p>
    </section>

    <section id="d3" hidden>
      <h2>Viernes 23, desde las 21:40 · cuatro misiones</h2>
      <p>What do you want to do for yourself and people around you? Cada post es una misión. La mayoría salta a «Buy my thing!» antes de tener atención, confianza y autoridad.</p>
      <div data-diagram="funnel"></div>
      <div class="grid g4">
        <article class="card"><span class="kicker">1</span><strong>Attract</strong><p class="small">Atención y gente nueva. I've discovered a new creator. Follow.</p></article>
        <article class="card"><span class="kicker">2</span><strong>Nurture</strong><p class="small">Confianza y conexión. I feel deeply connected with this person.</p></article>
        <article class="card"><span class="kicker">3</span><strong>Position</strong><p class="small">Autoridad. I trust this person and what they say.</p></article>
        <article class="card"><span class="kicker">4</span><strong>Convert</strong><p class="small">Ingreso. I'm going to buy what they're selling.</p></article>
      </div>
      <p class="small">The Content Funnel baja de Attract a Convert. Por la izquierda, trust. Por la derecha, depth of value. Si saltas de Attract a Convert: veo el producto, no confío, no compro. Creces y no monetizas.</p>

      <h3>Qué publicar en cada misión</h3>
      <div class="scroll">
        <table>
          <thead><tr><th>Misión</th><th>Pieza</th><th>Cómo</th><th>Ejemplo</th></tr></thead>
          <tbody>
            <tr><td>Attract</td><td>Share your story</td><td>Empieza por la lucha. Muestra la transformación. Protege la imagen.</td><td>Jun en el coche, 9 sep 2020: I've been posting content every day for 5 years.</td></tr>
            <tr><td>Attract</td><td>Trending formats</td><td>Si le funciona a otros, puede funcionarte. Se mete la experiencia propia.</td><td>you're 25 why don't you own a new car yet?</td></tr>
            <tr><td>Nurture</td><td>Show the reality</td><td>El detrás de cámaras, sobre todo en los días llenos.</td><td>Ser humana y conectar.</td></tr>
            <tr><td>Position</td><td>Brand building</td><td>El éxito como resultado de las creencias. La victoria aterriza si ya saben por lo que pasaste.</td><td>one day I'll sell out my own show.</td></tr>
            <tr><td>Position</td><td>Prueba de expertise</td><td>Insights vividos. Unos pasos por delante bastan.</td><td>6 years of editing advice in 60 sec. CapCut: Split, Volume, Animations, Effects.</td></tr>
            <tr><td>Convert</td><td>Dolor concreto</td><td>Nombrar el atasco. Primero el valor.</td><td>how to turn Claude into a storytelling coach.</td></tr>
          </tbody>
        </table>
      </div>

      <h3>Tres perfiles, las cuatro misiones</h3>
      <div class="scroll">
        <table>
          <thead><tr><th></th><th>@houseofyooni</th><th>@coachmichael</th><th>@thearabellasolution</th></tr></thead>
          <tbody>
            <tr><td>Attract</td><td>The real gold diggers aren't women. En casa, con los niños.</td><td>Every setback is proof that you're participating instead of watching from the sidelines.</td><td>POV: you just realised you're living out an answered prayer.</td></tr>
            <tr><td>Nurture</td><td>Raising boys with big hearts in a world trying to harden them.</td><td>I just spoke in front of 10,000 people today. Camiseta NEW HUMAN.</td><td>En la cocina, con comida. Sin texto de misión en la captura.</td></tr>
            <tr><td>Position</td><td>What actually cleared my hormonal acne.</td><td>Don't do this type of stretching before you get on the court.</td><td>Crying in a cafe because my client with endometriosis just sent me this.</td></tr>
            <tr><td>Convert</td><td>Keratosis Pilaris Journey. 8 meses de constancia.</td><td>Fitness communities are mandatory in 2026. You will not build a fit lifestyle by yourself.</td><td>Things I STOPPED doing to never bloat anymore. Antes y después.</td></tr>
          </tbody>
        </table>
      </div>
      <p class="faint">En medio, Mia | Conscious Living (@bymiayan): de 9-5 a negocio, mind, body, business, life. No hay despiece de misiones.</p>

      <div class="grid g2">
        <div>
          <h3>Dos formas de fallar</h3>
          <p class="small">Solo Position y Convert: satura a su audiencia pequeña. La respuesta está capturada.</p>
          <div class="callout"><strong>Hueco · solo Attract</strong>La pregunta «¿por qué fallan?» está en pantalla para la persona creative-first que solo publica Attract. La slide de respuesta no está en las capturas.</div>
        </div>
        <div>
          <h3>Objeciones</h3>
          <p class="small">Sin nada que vender: newsletter o comunidad gratis. En fase de crecimiento se puede saltar Convert. Los planes recomendados vienen después.</p>
          <p class="small">Sin resultados para Position: Expert POV, una skill que ya tienes. Journey POV, una skill que estás aprendiendo.</p>
          <p class="small">Low-ticket: menos de 1.000 $. High-ticket: 1.000 $ o más.</p>
        </div>
      </div>

      <h3>Los próximos 7 posts. Corte: 50.000 seguidores</h3>
      <div class="scroll">
        <table>
          <thead><tr><th>Perfil</th><th>Oferta</th><th>Attract</th><th>Nurture</th><th>Position</th><th>Convert</th></tr></thead>
          <tbody>
            <tr><td>Audiencia pequeña, skill baja</td><td>No offer. Primero atraer.</td><td>4</td><td>1</td><td>2</td><td>0</td></tr>
            <tr><td>Audiencia pequeña, skill alta</td><td>La slide de oferta no está. El reparto sí.</td><td>3</td><td>1</td><td>2</td><td>1</td></tr>
            <tr><td>Audiencia grande, skill baja</td><td>Low-ticket. Creative first.</td><td>2</td><td>1</td><td>3</td><td>1</td></tr>
            <tr class="warn"><td>Audiencia grande, skill alta</td><td>El reparto de Jun no está. Shan describe la oferta, no estos números.</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <section id="d4" hidden>
      <h2>Sábado 24 · sistema para escalar</h2>
      <p>Pestaña: Day 4, Scrolling to Selling. Fans y clientes no son la misma gente. Arii, 2,6 M, línea de camisetas en 2019, no vendió 36 unidades. Attention doesn't pay your bills. Conversion does.</p>
      <p class="small">Agenda: recap del día 3, conversion content, formats that sell, Shan, bonus de DMs, Q&amp;A y sorteos. You don't WANT to become an influencer.</p>

      <h3>Shan Hanif, madrugada del 24 y de nuevo en el día 4</h3>
      <div class="grid g2">
        <article class="card"><strong>1-1 vende tiempo</strong><p class="small">Freelance, consultor, trainer, terapeuta. Tú haces el trabajo. Equipo y ops bajan el margen. Genflow: 6 años para 10 M$. Nota «150+».</p></article>
        <article class="card"><strong>1-many, ellos hacen el trabajo</strong><p class="small">El mismo oficio, ahora como coach. Escalable, margen alto. Creator College: 1 año para 10 M$. Camino: offline con 10 personas, online 1-1 por referidos y DMs, luego grupo.</p></article>
      </div>

      <h3>Matriz de Shan. Audiencia por 50.000, por skill</h3>
      <p class="small">What offer and funnel you should be using. En grande y skill baja se reconoce a Jun hacia 2023, unos 700.000. En pequeña y skill alta, @makenzieco con 12.000.</p>
      <div data-diagram="shan"></div>
      <div class="scroll">
        <table>
          <thead><tr><th></th><th>Skill baja</th><th>Skill alta</th></tr></thead>
          <tbody>
            <tr>
              <td>Audiencia grande, +50.000</td>
              <td>Creator. Low-ticket y contenido. 5 ways to get your baby to sleep in 10 mins, 99 $. Build in public, launch plan, upsells, ads, lead magnet, emails. Alex Hormozi, Gary V.</td>
              <td>Business owner y creator. Shan se coloca aquí. High-ticket. Lead magnet y book a call.</td>
            </tr>
            <tr>
              <td>Audiencia pequeña, 0–50.000</td>
              <td>Estudiantes, part-time. Nothing to sell. Lead magnet con journey POV, construir el producto, marcas y afiliados.</td>
              <td>Business owners / coach. Sold 100.000 $+ de tu skill, o contenido educativo que engancha. Lead magnet, DM, llamadas, high-ticket 1–10.000 $, 1-1 y luego grupo.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="callout"><strong>Hueco · rule of 10</strong>Hay dos stickies que dicen «rule of 10». La pizarra no define qué es. Esta celda de oferta (grande y skill alta) sí está. Los cuatro números de posts de Jun para esa celda no.</div>
      <p class="small">Notas sueltas del cuadrante pequeña y skill alta: un curso de sleep training a 3.000 $; 30.000 $ a 600.000 $; 20.000 emails; 8.000–15.000 $ a coaching de negocio; 4 ventas; más de 1.000 puntos de contacto, mejor.</p>

      <div class="grid g3">
        <article class="card"><span class="kicker">W</span><strong>Who is it for?</strong><p class="small">Un tipo concreto, no una categoría. Quien no es esa persona se sentiría fuera. Una situación, no un cargo.</p></article>
        <article class="card"><span class="kicker">O</span><strong>Outcome they want</strong><p class="small">El resultado concreto. No «aprende a X». El dolor que arreglarías si te pagaran 10.000 $.</p></article>
        <article class="card"><span class="kicker">W</span><strong>Without the barrier</strong><p class="small">Un without o un even if que responde la objeción número uno. Concreta. No «without the hard work».</p></article>
      </div>

      <h3>Lead magnet</h3>
      <p class="small">Format doesn't matter. The problem does. El único formato prohibido es el swipe file. Sirven PDF, Notion, Loom, Custom GPT, spreadsheet y webinar, the best.</p>
      <div class="stats">
        <div class="stat"><b>~40 %</b><span>De la visita deja el email</span></div>
        <div class="stat"><b>1</b><span>Problema por lead magnet</span></div>
        <div class="stat"><b>7</b><span>Emails al día siguiente</span></div>
        <div class="stat"><b>4–5</b><span>Lead magnets, un dolor cada uno</span></div>
      </div>
      <p class="small">Secuencia que se lee en los stickies: story con CTA, problems you understand, historias tuyas y de clientas, market what's happening, value, value, value, y un email más. Si hay llamadas y no hay ventas, se toca la oferta o la conversación. Si no llegan a la llamada, se toca el contenido, el CTA o el lead magnet.</p>
      <p class="small">Lo que marca como no hacer: audiencia que no está a la altura, hacerlo gratis, website más Linktree, paquetes bronze / silver / gold, quedarse por debajo de 10.000 $ al mes. Nota rosa: not business page. Landing de una sola cosa, el mismo mensaje en el contenido, en la bio y en el titular.</p>

      <h3>STORY, al lado de WOW</h3>
      <div class="scroll">
        <table>
          <thead><tr><th>Letra</th><th>Qué es</th><th>Dónde cae</th></tr></thead>
          <tbody>
            <tr><td>S</td><td>Stop them</td><td>El hook</td></tr>
            <tr><td>T</td><td>Trouble</td><td>El problema</td></tr>
            <tr><td>O</td><td>Outcome</td><td>El sueño, antes del producto</td></tr>
            <tr><td>R</td><td>Reveal</td><td>Inside Out Marketing. El producto</td></tr>
            <tr><td>Y</td><td>Yes, but</td><td>Objeciones y prueba</td></tr>
          </tbody>
        </table>
      </div>
      <p class="small">Landing de ejemplo, Practical Parenting Course: Reduce power struggles and create a calmer home. Hi, I'm Jenna. Over 3,000+ people inside. 1 M+ followers.</p>

      <h3>MAP, antes de construir nada</h3>
      <div class="grid g3">
        <article class="card"><span class="kicker">M</span><strong>Me. Qué puedo vender</strong><p class="small">Hard skills: editar, diseñar, coachear, construir, escribir, entrenar. Soft skills: comunicación, liderazgo, organización, vender. Life experience: de qué has salido. What you know as a consumer.</p></article>
        <article class="card"><span class="kicker">A</span><strong>Audience. A quién</strong><p class="small">Edad, situación, carrera, momento. El dolor número 1 en sus palabras, la frase de las 23:00. El resultado de ahora, no la transformación que tú crees. Dónde están: plataforma y formato.</p></article>
        <article class="card"><span class="kicker">P</span><strong>Players. Quién ya vende</strong><p class="small">Su lead magnet y el problema. Producto, precio, qué incluye. El ángulo. El hueco: de qué se quejan sus clientes.</p></article>
      </div>
      <p class="small">MAP comes before everything. Before your lead magnet. Before your product. Before your content. Shan montó Creator College porque vio competidores enseñando productos digitales, el mercado existía y él llevaba 10 años. Tick, tick, tick. Los seguidores no pagan facturas. Las skills sí.</p>

      <hr>
      <h3>Conversion content</h3>
      <div class="scroll">
        <table>
          <thead><tr><th></th><th>Lead generation</th><th>Direct sales</th></tr></thead>
          <tbody>
            <tr><td>Qué es</td><td>Empuja un gratis y recoge emails</td><td>Lleva a la compra</td></tr>
            <tr><td>Mejor para</td><td>High-ticket, 1.000 $+. Un reel no vende 5.000 $.</td><td>Low-ticket. Guía de 27 $ o mini curso de 97 $.</td></tr>
            <tr><td>Goal</td><td>Empezar la relación</td><td>Hacer la venta</td></tr>
            <tr><td>CTA</td><td>Comentar o mandar por DM una palabra</td><td>Buy now, con urgencia</td></tr>
            <tr><td>Cuándo entra el dinero</td><td>Después, en el DM o el email</td><td>En el momento</td></tr>
            <tr><td>Bueno</td><td>Dolor que ya tiene. Valor de verdad. CTA para aplicar ese valor.</td><td>Transformación que quien mira también quiere. Valor obvio. Un solo enlace.</td></tr>
            <tr><td>Malo</td><td>Features. Sin valor. CTA vago.</td><td>Estilo de vida sin nada detrás. Describe el producto, no la transformación. Esconde la compra.</td></tr>
          </tbody>
        </table>
      </div>

      <h3>Lead gen, cuatro ejemplos</h3>
      <div class="scroll">
        <table>
          <thead><tr><th>Quién</th><th>Dolor</th><th>Valor</th><th>CTA</th></tr></thead>
          <tbody>
            <tr><td>Coach, @jun_yuh</td><td>Pocos seguidores y la sensación de ir tarde.</td><td>Crecer con Trial Reels. Meta había apretado contra duplicados.</td><td>Comenta trial.</td></tr>
            <tr><td>healthwana</td><td>Querer no enfermar y no saber cómo.</td><td>10 foods I cut back on after 6 years in cancer research. Caption con base.</td><td>Comenta Guide.</td></tr>
            <tr><td>@valeriva.crespi</td><td>Confianza por rasgos más grandes. +5 kg / −5 kg.</td><td>Lo que cambia la joyería. Only women notice this difference.</td><td>Comment SCALE. Scale Guide.</td></tr>
            <tr><td>Creativa</td><td>Atascos de quien escribe.</td><td>1 idea, 2 planning, 3 research, 4 drafting, 5 rewriting, 6 finishing.</td><td>Guía gratis de 4 pasos. Comenta GUIDE.</td></tr>
          </tbody>
        </table>
      </div>

      <h3>Venta directa</h3>
      <div class="scroll">
        <table>
          <thead><tr><th>Quién</th><th>Transformación</th><th>Ask</th></tr></thead>
          <tbody>
            <tr><td>@ed.essey</td><td>De decir que sí a todo a hacer solo lo de más palanca. Me now: valuing myself doing only the biggest leverage thing.</td><td>47 $ al mes. Comment BOOM. High Performers Academy. Un solo ask.</td></tr>
            <tr><td>@browsby_jenn, Vancouver</td><td>Cejas de sin arreglar a laminadas. Send this to a friend who would love this service.</td><td>All done. Tap the link to book with Jenn. Precio del servicio, un enlace.</td></tr>
          </tbody>
        </table>
      </div>
      <p class="faint">Sin enseñar la cara: izquierda, producto de Rare Beauty solo. Derecha, una mujer con bolsas de Ulta aplicándoselo en la cocina. La slide no escribe la respuesta.</p>

      <h3>Casos y quién gana más</h3>
      <div class="scroll">
        <table>
          <thead><tr><th>Cuenta</th><th>Qué pasó</th></tr></thead>
          <tbody>
            <tr><td>@beautywithbackbone, Ambarina</td><td>+4.000 seguidores en 6 semanas en el VIP y las primeras clientas high-ticket. En sus mensajes: +2.000 en Instagram y unos +1.000 en TikTok en tres semanas. Reels a 100.000 y 132.000. Carrusel por encima de 4.000. Repost a TV en 442.700. Audiencia 98 % mujeres.</td></tr>
            <tr><td>@reginarothcurls, Regina Roth</td><td>Estilista de rizos. Siguió un formato, millones de views, salón lleno, +280.000 seguidores. El perfil pasa de unos 57.500 a unos 341.000. Guías en stan.store.</td></tr>
            <tr><td>Yris Palmer, Steph Pacca, Shan</td><td>1,3 M, 774.000 y 55.100. La slide no corona a quien tiene más seguidores. 100.000 $ al año en marcas. 50.000 $ como máximo en apariciones. Pablo.ai: 536.390 $ gross y 500.380 $ net, Sep–Aug, empaquetando lo que sabe.</td></tr>
          </tbody>
        </table>
      </div>
      <p class="small">Genflow en pantalla: lead magnet del playbook, book a call, comprar. 100 M$+ y 250+. Broken Agency Model frente a The Genflow Model. Programas de agencia, auditoría, captación, entrega, 4 herramientas de IA, Slack, Genflow Coach, prueba de Pablo 14 días, 8 Figure Agency. Jun: 1.518 posts, 5,3 M, Discipline Learning System, The Guide to Academic Success, Pablo.ai con 733.298,50 $ de gross en otra captura. Idiomas en la slide: español, coreano, alemán, francés, árabe y japonés. No hay una regla escrita encima.</p>
    </section>

    <section id="dom" hidden>
      <h2>Domingo 25, 21:18, hasta el 26 a la 01:11</h2>
      <p>En el informe no se titula día 5. Es la sesión siguiente: hablar a cámara, hooks parte 2, DMs, el carrusel «1 bad hour», edición y el VIP. La ventana no se queda abierta. A 25 de octubre de 2026, un teléfono hace lo que antes hacía un equipo de 50.</p>

      <h3>Talking head si odias la cámara</h3>
      <div class="scroll">
        <table>
          <thead><tr><th>Paso</th><th>Qué dice la captura</th></tr></thead>
          <tbody>
            <tr><td>1. Idea</td><td>De Skills, Passions o Story. Y la misión: Attract, Nurture, Position o Convert.</td></tr>
            <tr><td>2. Dictado</td><td>Si el guion se atasca, dictar en Claude y pedirle un guion digerible, con duración.</td></tr>
            <tr class="warn"><td>3. Hueco</td><td>Este paso no está. Se salta del 2 al 4.</td></tr>
            <tr><td>4. Una frase por toma</td><td>El plano secuencia es difícil. Los jump cuts enganchan más.</td></tr>
            <tr><td>5. Recortar</td><td>Fuera los uh, los ah y lo que no pertenece. Edits y CapCut.</td></tr>
          </tbody>
        </table>
      </div>
      <p class="small">Guion de ejemplo, ser multipasión: el nicho de un solo tema no le sirve a quien tiene varias cosas. Varios pilares bajo una marca. La pieza que lo hace coherente es un mensaje o una filosofía común. La captura se corta en the trick is to have one unifying message, philosophy.</p>

      <h3>Hooks que paran el scroll</h3>
      <p class="small">La gente no salta porque aburra. Salta porque todavía no sabe por qué le importa. El hook es lo que dices, haces o escribes para parar. Curiosity gap: lo que ya sabe frente a lo que quiere saber. Débil: I want to share my journey as a creator. Fuerte: I almost quit creating content before my first viral video.</p>
      <div class="scroll">
        <table>
          <thead><tr><th>Tipo</th><th>Qué hace</th><th>En pantalla</th></tr></thead>
          <tbody>
            <tr><td>Positive statement</td><td>Curiosidad por un éxito. Loop abierto.</td><td>@jun_yuh: $9 million in 14 mos. (25 y.o breakdown)</td></tr>
            <tr><td>Negative / contrarian</td><td>Choca con lo que se da por hecho.</td><td>@terence.p.lam, en un avión. Solo se lee It's something.</td></tr>
            <tr><td>Authority / expertise</td><td>Credibilidad antes de la historia.</td><td>@shayvelasquez_: Dear First-Time Mom, con un bebé.</td></tr>
            <tr><td>Numbered list</td><td>Puedo con 5. Sobre todo la 1 y la 5.</td><td>@jun_yuh: anti-fans, success tax, the confession, the echo, you missed it.</td></tr>
            <tr><td>Transformation</td><td>Antes y después. Se quedan para ver si ellas pueden.</td><td>@houseofyooni</td></tr>
            <tr><td>Relatable question</td><td>El cerebro no deja una pregunta sin contestar.</td><td>@meraki.michelletran. En el frame solo se lee ask.</td></tr>
          </tbody>
        </table>
      </div>
      <p><strong>El mismo tema por los seis. Consistencia en el gimnasio.</strong></p>
      <div class="scroll">
        <table>
          <thead><tr><th>Tipo</th><th>Frase</th></tr></thead>
          <tbody>
            <tr><td>Positive</td><td>This is the only workout split you need if you want to stay consistent in the gym.</td></tr>
            <tr><td>Contrarian</td><td>You will never get the results you want if you keep going to the gym without a plan.</td></tr>
            <tr><td>Authority</td><td>As a personal trainer, this is one trick that helps my clients stay consistent.</td></tr>
            <tr><td>Numbered</td><td>3 reasons you're still not seeing results after months of trying.</td></tr>
            <tr><td>Transformation</td><td>I lost 10 pounds in 4 months using this method…</td></tr>
            <tr><td>Question</td><td>What if motivation isn't the reason you can't stick to your gym routine?</td></tr>
          </tbody>
        </table>
      </div>
      <p><strong>Montar un negocio desde cero.</strong></p>
      <div class="scroll">
        <table>
          <thead><tr><th>Tipo</th><th>Frase</th></tr></thead>
          <tbody>
            <tr><td>Positive</td><td>I completely changed my life by deciding to start my own business.</td></tr>
            <tr><td>Contrarian</td><td>Starting your own business isn't as fun as you think it will be.</td></tr>
            <tr><td>Authority</td><td>I made $100,000 in the first year of building my business, this is how…</td></tr>
            <tr><td>Numbered</td><td>5 mistakes I made when I started my business from scratch.</td></tr>
            <tr><td>Transformation</td><td>1 year ago I was stuck in a 9-5 that I hated. Today I just made $100K from my own business.</td></tr>
            <tr><td>Question</td><td>Have you ever thought about quitting your 9-5 and starting your own business?</td></tr>
          </tbody>
        </table>
      </div>

      <h3>Vender por DM</h3>
      <p class="small">It wasn't a viral video. It wasn't an ad. It was my DMs. Sirve para saber qué necesitan, confianza de uno a uno, dudas y objeciones. Jun llegó a mandar miles al día.</p>
      <div class="scroll">
        <table>
          <thead><tr><th>Story</th><th>2020</th><th>2026</th></tr></thead>
          <tbody>
            <tr><td>Hook, proof, CTA, more proof</td><td>No sabía qué publicar, poco engagement, sin monetizar, horas de edición, trends vacíos.</td><td>6 años publicando solo, 5 M en Instagram, 7 M$ con contenido. CTA: 15 plazas de coaching 1:1. A las 24 horas, 60 de 75 llenas. Entrevista antes de aceptar.</td></tr>
          </tbody>
        </table>
      </div>
      <p class="small">Caso de alumna: capturar su genio en contenido y contar su historia en 10 formatos. Ella dijo say less.</p>
      <div class="scroll">
        <table>
          <thead><tr><th>Nota</th><th>Para qué</th><th>Lo que dice el guion</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>El atasco</td><td>Hey Daisy… cumplido real. What are you struggling with the most?</td></tr>
            <tr><td>2</td><td>Confirmar que encaja</td><td>Repetir lo que dijeron. Selling high ticket is harder than it seems. Framework, llamada semanal para el funnel. Pocas plazas. Si no, no worries.</td></tr>
            <tr><td>3</td><td>La oferta</td><td>6 semanas, x y z. Early access, 25 % off. De 4.000 $ a 3.000 $. Un solo seguimiento a las 48 horas.</td></tr>
          </tbody>
        </table>
      </div>
      <p class="faint">Dos objeciones sin respuesta escrita: nobody buys from a DM, y van a pensar que soy demasiado salesy. En la pizarra, un seguimiento real: si ha cambiado de idea no pasa nada. Ella responde que tuvo un examen y está dentro.</p>

      <h3>Carrusel «1 bad hour»</h3>
      <p class="small">Cuentas de referencia: @boba.udovicic y @its_sam_journey. Lucha a un lado, éxito al otro. You do not need to reinvent the wheel.</p>
      <div class="scroll">
        <table>
          <thead><tr><th>Slide</th><th>Lucha</th><th>Lo que queda</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>1 bad hour</td><td>you still have 23</td></tr>
            <tr><td>2</td><td>1 bad day</td><td>you still have 6</td></tr>
            <tr><td>3</td><td>1 bad week</td><td>you still have 3</td></tr>
            <tr><td>4</td><td>1 bad month</td><td>you still have 11</td></tr>
            <tr><td>5</td><td>1 bad year</td><td>you still have your whole life ahead of you</td></tr>
          </tbody>
        </table>
      </div>
      <div class="grid g2">
        <p class="small">Madre a tiempo completo. Lucha: cansada, casa desordenada, quemada. Éxito: casa en orden, un rato con la familia.</p>
        <p class="small">Artista. Lucha: estudio hecho un desastre, doomscrolling. Éxito: hacer su obra, estar con amigas.</p>
      </div>
      <p class="small">Carrusel en Edits: Foto de perfil, Projects, Labs, activar Carousel editor, el botón + ofrece carrusel junto a Camera, Gallery y Video. Abajo, Layout. Al lado: Background, Ratio, Layers, Cutout.</p>

      <h3>Edición</h3>
      <p class="small">Editar no es complicar. Un buen edit se ve más fácil, se entiende más rápido y engancha más.</p>
      <div class="scroll">
        <table>
          <thead><tr><th>Bueno</th><th>Malo</th></tr></thead>
          <tbody>
            <tr><td>Ritmo rápido, sin aire muerto</td><td>Pausas largas entre frases</td></tr>
            <tr><td>El plano cambia, o hay overlays</td><td>El mismo plano más de 5 segundos</td></tr>
            <tr><td>Texto claro y subtítulos en talking</td><td>Texto ilegible</td></tr>
            <tr><td>B-roll que viene a cuento</td><td>Relleno</td></tr>
          </tbody>
        </table>
      </div>
      <p class="small">Beginner: cortes limpios, subtítulos, texto simple, buen ritmo. Intermediate: pattern interrupts, varios ángulos, storytelling visual. Advanced: diseño de sonido, visuales en capas, transiciones. CapCut: más herramientas, mucho en Pro, nivel medio. Edits: menos herramientas, gratis, para quien empieza.</p>
      <p class="small">Workflow: recortar, B-roll, texto, subtítulos, efectos de sonido, música, verlo entero. Checklist: tiempo muerto, subtítulos legibles, ritmo, cada corte aporta, audio equilibrado.</p>

      <h3>Edición por expertise</h3>
      <p class="small">Eje vertical, más expertise. Eje horizontal, mejor edición. No matter where you find yourself, you can still win. Dijo que daría 2 formatos por cuadrante.</p>
      <div data-diagram="edit"></div>
      <div class="scroll">
        <table>
          <thead><tr><th></th><th>Edición baja</th><th>Edición alta</th></tr></thead>
          <tbody>
            <tr class="warn"><td>Expertise alta</td><td>Nombrado. Sin ejemplo en las capturas.</td><td>@creatorcollege_: calendario daily / weekly / monthly. Thumbnails de 48 viral storytelling hooks, batch y experimentación. @itserinconfortini: Financial Mistakes I Made, rótulo a millionaire, cortes a otros planos.</td></tr>
            <tr class="warn"><td>Expertise baja</td><td>Nombrado. Sin ejemplo.</td><td>Nombrado. Sin ejemplo.</td></tr>
          </tbody>
        </table>
      </div>

      <h3>VIP, el cierre</h3>
      <p class="small">One system. Four weeks. Same steps, every single week. Al entrar, mapear skills y asignar coach y grupo. Strategy lesson, Create, Post it, Get feedback. Semana 1, qué publicar. Semana 2, crearlo más rápido. Semana 3, de views a clientas. Semana 4, escalarlo.</p>
      <p class="small">Lo que prometía la slide del jueves, VIP 12 del 2 al 27 de noviembre: estrategia propia si publicas y estás atascada; Trial Reels; de views a seguidores y de seguidores a clientas; el primer producto digital (coaching 1-1, un webinar o un PDF); salir de la meseta, no es shadowban; stories y Manychat para vender desde el DM.</p>
    </section>
  </div>
`;
