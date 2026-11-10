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
  <figcaption>Oferta y embudo según audiencia (corte 50.000) y skill. La celda grande y skill alta no trae el reparto de posts ni la definición de «rule of 10».</figcaption>
  <div class="matrix-board shan-board">
    <div class="axis corner">Audiencia ↓<br>Skill →</div>
    <div class="axis">Skill baja</div>
    <div class="axis">Skill alta</div>
    <div class="axis">Grande<br>+50.000</div>
    <div class="cell">
      <strong>Creator</strong>
      <span>Low-ticket y contenido. Jun hacia 2023, unos 700.000.</span>
    </div>
    <div class="cell gap">
      <strong>Business owner</strong>
      <span>Shan está aquí. High-ticket. Lead magnet y book a call.</span>
      <em>Hueco: reparto de 7 posts y «rule of 10».</em>
    </div>
    <div class="axis">Pequeña<br>0–50.000</div>
    <div class="cell">
      <strong>Nada que vender</strong>
      <span>Lead magnet con journey POV. Marcas y afiliados.</span>
    </div>
    <div class="cell">
      <strong>Coach</strong>
      <span>High-ticket, 1–10.000 $. DM, llamadas, luego grupo. @makenzieco, 12.000.</span>
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
      <span>@creatorcollege_: daily, weekly, monthly. @itserinconfortini: Financial Mistakes I Made.</span>
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
