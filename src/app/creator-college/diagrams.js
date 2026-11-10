export const diagrams = {
  funnel: `
<figure class="diagram funnel">
  <figcaption>The Content Funnel. Cada post es un escalón. La confianza y la profundidad del valor bajan con el embudo.</figcaption>
  <div class="funnel-layout">
    <p class="rail"><span>Confianza</span><span class="rail-dir">baja</span></p>
    <ol>
      <li style="--w:100%">
        <strong>1 · Attract</strong>
        <span>Atención y gente nueva. I’ve discovered a new creator.</span>
      </li>
      <li style="--w:88%">
        <strong>2 · Nurture</strong>
        <span>Conexión. I feel deeply connected with this person.</span>
      </li>
      <li style="--w:74%">
        <strong>3 · Position</strong>
        <span>Autoridad. I trust this person and what they say.</span>
      </li>
      <li class="funnel-last" style="--w:60%">
        <strong>4 · Convert</strong>
        <span>Ingreso. I’m going to buy what they’re selling.</span>
      </li>
    </ol>
    <p class="rail"><span>Profundidad del valor</span><span class="rail-dir">baja</span></p>
  </div>
</figure>`,

  arc: `
<figure class="diagram arc">
  <figcaption>Arco del silent film de Jun, en líneas del texto. 7 + 7 + 5.</figcaption>
  <div class="arc-bar" role="img" aria-label="Problema 7 líneas, pursuit 7 líneas, payoff 5 líneas">
    <span class="arc-problem" style="flex:7">Problema<br>7</span>
    <span class="arc-pursuit" style="flex:7">Pursuit<br>7</span>
    <span class="arc-payoff" style="flex:5">Payoff<br>5</span>
  </div>
</figure>`,

  shan: `
<figure class="diagram matrix">
  <figcaption>Oferta y embudo según audiencia (corte 50.000) y skill. En la celda grande y skill alta hay dos stickies que dicen «rule of 10»; la pizarra no lo define, y tampoco está el reparto de 7 posts.</figcaption>
  <div class="matrix-board shan-board">
    <div class="axis corner">Audiencia ↓<br>Skill →</div>
    <div class="axis">Skill baja</div>
    <div class="axis">Skill alta</div>
    <div class="axis">Grande<br>+50.000</div>
    <div class="cell">
      <strong>Creator</strong>
      <span>Low-ticket y contenido. Jun hacia 2023, unos 700.000. Ejemplo: 5 ways to get your baby to sleep in 10 mins, 99 $. Build in public, upsells, ads, emails. Alex Hormozi, Gary V.</span>
    </div>
    <div class="cell gap">
      <strong>Business owner</strong>
      <span>Shan está aquí. High-ticket. Lead magnet y book a call.</span>
      <em>Hueco: reparto de 7 posts y «rule of 10».</em>
    </div>
    <div class="axis">Pequeña<br>0–50.000</div>
    <div class="cell">
      <strong>Nada que vender</strong>
      <span>Estudiantes, part-time. Nothing to sell. Lead magnet con journey POV, construir el producto, marcas y afiliados.</span>
    </div>
    <div class="cell">
      <strong>Coach</strong>
      <span>Sold 100.000 $+ de tu skill, o contenido que engancha. High-ticket, 1–10.000 $. DM, llamadas, 1-1 y luego grupo. @makenzieco, 12.000.</span>
    </div>
  </div>
</figure>`,

  mix: `
<figure class="diagram mix">
  <figcaption>Reparto de Jun para los próximos 7 posts. Corte de audiencia: 50.000. La fila de audiencia grande y skill alta no trae números.</figcaption>
  <ul class="mix-legend">
    <li><i class="mix-a"></i>Attract</li>
    <li><i class="mix-n"></i>Nurture</li>
    <li><i class="mix-p"></i>Position</li>
    <li><i class="mix-c"></i>Convert</li>
  </ul>
  <div class="mix-row">
    <p><strong>Pequeña, skill baja</strong><span>No offer. Primero atraer.</span></p>
    <div class="mix-bar" role="img" aria-label="4 Attract, 1 Nurture, 2 Position, 0 Convert">
      <i class="mix-a"></i><i class="mix-a"></i><i class="mix-a"></i><i class="mix-a"></i>
      <i class="mix-n"></i>
      <i class="mix-p"></i><i class="mix-p"></i>
    </div>
  </div>
  <div class="mix-row">
    <p><strong>Pequeña, skill alta</strong><span>La slide de oferta no está. El reparto sí.</span></p>
    <div class="mix-bar" role="img" aria-label="3 Attract, 1 Nurture, 2 Position, 1 Convert">
      <i class="mix-a"></i><i class="mix-a"></i><i class="mix-a"></i>
      <i class="mix-n"></i>
      <i class="mix-p"></i><i class="mix-p"></i>
      <i class="mix-c"></i>
    </div>
  </div>
  <div class="mix-row">
    <p><strong>Grande, skill baja</strong><span>Low-ticket. Creative first.</span></p>
    <div class="mix-bar" role="img" aria-label="2 Attract, 1 Nurture, 3 Position, 1 Convert">
      <i class="mix-a"></i><i class="mix-a"></i>
      <i class="mix-n"></i>
      <i class="mix-p"></i><i class="mix-p"></i><i class="mix-p"></i>
      <i class="mix-c"></i>
    </div>
  </div>
  <div class="mix-row mix-gap">
    <p><strong>Grande, skill alta</strong><span>Hueco. Shan describe la oferta, no estos números.</span></p>
    <div class="mix-bar" role="img" aria-label="Reparto no capturado">
      <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
    </div>
  </div>
</figure>`,

  edit: `
<figure class="diagram matrix">
  <figcaption>Edición por expertise. Dijo que daría dos formatos por cuadrante. Solo la celda alta-alta trae ejemplos.</figcaption>
  <div class="matrix-board">
    <div class="axis corner">Expertise ↓<br>Edición →</div>
    <div class="axis">Edición baja</div>
    <div class="axis">Edición alta</div>
    <div class="axis">Expertise<br>alta</div>
    <div class="cell gap">
      <strong>Sin ejemplo</strong>
      <span>El cuadrante está nombrado. La captura no enseña formatos.</span>
    </div>
    <div class="cell">
      <strong>Alta + alta</strong>
      <span>@creatorcollege_: daily, weekly, monthly. Thumbnails de 48 viral storytelling hooks, batch y experimentación. @itserinconfortini: Financial Mistakes I Made, rótulo a millionaire, cortes a otros planos.</span>
    </div>
    <div class="axis">Expertise<br>baja</div>
    <div class="cell gap">
      <strong>Sin ejemplo</strong>
      <span>Nombrado. Sin formato en las capturas.</span>
    </div>
    <div class="cell gap">
      <strong>Sin ejemplo</strong>
      <span>Nombrado. Sin formato en las capturas.</span>
    </div>
  </div>
</figure>`,
};
