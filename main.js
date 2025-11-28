
/* global UPGRADE_DATA */
(function(){
  const EQUIPS = [
    {key:'hat', name:'帽子(茅)'},
    {key:'needle', name:'指針(茅)'},
    {key:'armor', name:'衣服(盾)'},
    {key:'pants', name:'褲子(盾)'},
    {key:'ring', name:'戒指(弓)'},
    {key:'staff', name:'手杖(弓)'},
  ];

  const levels = UPGRADE_DATA.levels;
  const materials = UPGRADE_DATA.materials;
  const transitions = UPGRADE_DATA.transitions;

  // Build adjacency map for quick lookup costs between contiguous levels
  const idx = Object.fromEntries(levels.map((lv,i)=>[lv,i]));
  const stepCost = {}; // key "A=>B" -> {mat:amount}
  transitions.forEach(t => {
    const key = (t.from + '=>' + t.to);
    stepCost[key] = t.costs;
  });

  // UTIL: sum costs
  function addCosts(a, b){
    const r = {...a};
    for(const m of materials){
      r[m] = (r[m]||0) + (b[m]||0);
    }
    return r;
  }
  function zeroCosts(){
    const r = {};
    for(const m of materials){ r[m]=0; }
    return r;
  }

  // Compute cumulative cost from level i -> j (exclusive of i, inclusive up to j)
  function costBetween(fromLv, toLv){
    const i = idx[fromLv];
    const j = idx[toLv];
    if(i==null || j==null || j<=i) return zeroCosts();
    let total = zeroCosts();
    for(let k=i; k<j; k++){
      const a = levels[k], b = levels[k+1];
      const key = a + '=>' + b;
      total = addCosts(total, stepCost[key] || zeroCosts());
    }
    return total;
  }

  // DOM helpers
  function el(tag, attrs={}, ...children){
    const e = document.createElement(tag);
    for(const [k,v] of Object.entries(attrs)){
      if(k==='class') e.className = v;
      else if(k==='for') e.htmlFor = v;
      else e.setAttribute(k, v);
    }
    for(const c of children){
      if(c==null) continue;
      if(typeof c === 'string') e.appendChild(document.createTextNode(c));
      else e.appendChild(c);
    }
    return e;
  }

  // Build equipment cards
  const equipWrap = document.getElementById('equip-wrap');
  const ownedWrap = document.getElementById('owned-wrap');
  const totalsWrap = document.getElementById('totals-wrap');

  const equipControls = {}; // key -> {fromSel, toSel}
  EQUIPS.forEach(eq => {
    const card = el('div', {class:'card'});
    card.appendChild(el('h2', {}, eq.name));

    const row1 = el('div', {class:'row'});
    row1.appendChild(el('label', {}, '目前等級'));
    const fromSel = el('select', { 'data-eq': eq.key });
    levels.forEach((lv, i) => {
      const opt = el('option', { value: lv }, lv);
      if(i===0) opt.selected = true; // default "無"
      fromSel.appendChild(opt);
    });
    row1.appendChild(fromSel);
    card.appendChild(row1);

    const row2 = el('div', {class:'row'});
    row2.appendChild(el('label', {}, '升到等級'));
    const toSel = el('select', { 'data-eq': eq.key });
    levels.forEach((lv, i) => {
      const opt = el('option', { value: lv }, lv);
      toSel.appendChild(opt);
    });
    // default to last level
    toSel.value = levels[0];
    row2.appendChild(toSel);
    card.appendChild(row2);

    const note = el('div', {class:'note'}, '提示：升到等級必須高於目前等級（相同則不計算）。');
    card.appendChild(note);

    equipWrap.appendChild(card);
    equipControls[eq.key] = { fromSel, toSel };
  });

  // Build owned inputs
  const ownedInputs = {};
  materials.forEach(m => {
    const row = el('div', {class:'row'});
    row.appendChild(el('label', {}, m));
    const inp = el('input', { type:'number', min:'0', step:'1', value:'0', 'data-mat': m });
    row.appendChild(inp);
    ownedWrap.appendChild(row);
    ownedInputs[m] = inp;
  });

  function recalc(){
    // Sum total cost across all equips
    let grand = zeroCosts();
    for(const {fromSel, toSel} of Object.values(equipControls)){
      const fromLv = fromSel.value;
      const toLv = toSel.value;
      // ensure order
      if(idx[toLv] != null && idx[fromLv] != null && idx[toLv] > idx[fromLv]){
        const c = costBetween(fromLv, toLv);
        grand = addCosts(grand, c);
      }
    }

    // Read owned
    const owned = {};
    for(const m of materials){
      const val = parseInt(ownedInputs[m].value || '0', 10) || 0;
      owned[m] = val;
    }

    // Render totals
    totalsWrap.innerHTML = '';
    materials.forEach(m => {
      const need = grand[m] || 0;
      const have = owned[m] || 0;
      const miss = Math.max(0, need - have);
      const card = el('div', {class:'material-card'});
      card.appendChild(el('h3', {}, m));
      const box = el('div', {class:'amounts'});
      box.appendChild(el('div', {}, '總需求：' + need.toLocaleString()));
      box.appendChild(el('div', {}, '我擁有：' + have.toLocaleString()));
      if(miss > 0){
        box.appendChild(el('div', {class:'badge-miss'}, '還缺：' + miss.toLocaleString()));
      } else {
        box.appendChild(el('div', {class:'badge-ok'}, '足夠 ✓'));
      }
      card.appendChild(box);
      totalsWrap.appendChild(card);
    });
  }

  // Bind events
  function bindAll(){
    for(const {fromSel, toSel} of Object.values(equipControls)){
      // when from changes, adjust toSel minimum (must be > from)
      fromSel.addEventListener('change', () => {
        const fromIdx = idx[fromSel.value] ?? 0;
        // If current to <= from, bump to next available
        if((idx[toSel.value] ?? 0) <= fromIdx && fromIdx < levels.length - 1){
          toSel.value = levels[fromIdx + 1];
        }
        recalc();
      });
      toSel.addEventListener('change', recalc);
    }
    for(const m of materials){
      ownedInputs[m].addEventListener('input', recalc);
    }
  }

  bindAll();
  recalc();
})();
