(function(){
  // menu mudah alih
  var menu=document.getElementById("menu"),nav=document.getElementById("nav");
  menu.addEventListener("click",function(){
    var o=nav.classList.toggle("open");menu.setAttribute("aria-expanded",o);
  });
  nav.addEventListener("click",function(){nav.classList.remove("open")});

  // senyapkan notifikasi (hero)
  var hero=document.querySelector(".hero"),btn=document.getElementById("senyap");
  btn.addEventListener("click",function(){
    hero.classList.add("quiet");
    document.getElementById("tajuk").textContent="Senyap. Sekarang, siapa anda?";
    document.getElementById("lead").textContent="Tanpa like, tanpa pengikut, tanpa penonton. Ruang ini ialah tempat bermula untuk mengenali diri dan mengawal penggunaan anda.";
    btn.style.display="none";
  });

  // modul 4 sesi
  var sesi=[
    {t:"Sesi 1: Kenali penggunaan saya",o:"Menyedari berapa lama dan mengapa kita menggunakan media sosial.",a:["Semak masa skrin selama seminggu.","Tulis jurnal: apa perasaan sebelum dan selepas melayari?","Kenal pasti aplikasi yang paling menarik perhatian."]},
    {t:"Sesi 2: Etika dalam talian",o:"Menilai tingkah laku dalam talian dengan nilai dan akhlak.",a:["Bincang kes buli siber dan berita palsu.","Lakonan peranan: bagaimana bertindak sebelum menekan “kongsi”?","Senarai tiga peraturan peribadi sebelum mengomen."]},
    {t:"Sesi 3: Siapa saya sebenarnya",o:"Membezakan diri dalam talian dengan diri yang sebenar.",a:["Tulis tiga perkara tentang diri yang tiada siapa nampak di media sosial.","Bincang: mengapa kita mahu disukai?","Buat ikrar nilai diri yang tidak bergantung kepada like."]},
    {t:"Sesi 4: Detoks dan strategi",o:"Membina tabiat digital yang seimbang.",a:["Cabaran 24 jam tanpa media sosial.","Matikan notifikasi dan tetapkan had masa.","Pilih aktiviti pengganti: sukan, membaca, bersama keluarga.","Buat ikrar peribadi dan kongsi dengan rakan."]}
  ],panel=document.getElementById("panel"),tabs=document.getElementById("tabs");
  function show(i){
    var s=sesi[i];
    panel.innerHTML="<h3>"+s.t+"</h3><p><strong>Objektif:</strong> "+s.o+"</p><ul>"+s.a.map(function(x){return "<li>"+x+"</li>"}).join("")+"</ul>";
    [].forEach.call(tabs.children,function(b,j){b.setAttribute("aria-selected",j==i)});
  }
  tabs.addEventListener("click",function(e){if(e.target.dataset.t)show(+e.target.dataset.t)});
  show(0);

  // semakan diri
  var soalan=["Saya menyemak telefon tanpa sebab tertentu.","Saya tidur lewat kerana melayari media sosial.","Saya rasa cemas apabila tiada internet atau bateri habis.","Saya membandingkan hidup saya dengan orang lain dalam talian.","Saya sukar menumpukan perhatian pada kerja atau pelajaran.","Saya rasa kosong atau sedih selepas melayari media sosial."];
  var quiz=document.getElementById("quiz"),pilihan=["Tidak pernah","Kadangkala","Selalu"];
  quiz.innerHTML=soalan.map(function(q,i){
    return "<fieldset><legend>"+q+"</legend>"+pilihan.map(function(p,v){return '<label><input type="radio" name="q'+i+'" value="'+v+'"> '+p+"</label>"}).join("")+"</fieldset>";
  }).join("");
  document.getElementById("hasil").addEventListener("click",function(){
    var jum=0,jawab=0;
    soalan.forEach(function(_,i){var c=quiz.querySelector('input[name="q'+i+'"]:checked');if(c){jum+=+c.value;jawab++}});
    var r=document.getElementById("result");
    if(jawab<soalan.length){r.textContent="Sila jawab semua "+soalan.length+" soalan dahulu.";return}
    r.textContent=jum<=3?"Skor "+jum+"/12: Penggunaan anda nampak seimbang. Teruskan dan kekalkan kawalan."
      :jum<=7?"Skor "+jum+"/12: Ada tanda-tanda awal. Cuba Sesi 1 dan 4 dalam modul di atas."
      :"Skor "+jum+"/12: Penggunaan anda mungkin sudah mengganggu hidup. Cuba modul ini, dan berbincang dengan keluarga, guru atau kaunselor.";
  });
})();