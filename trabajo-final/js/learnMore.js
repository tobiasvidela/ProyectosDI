const playlist_aprender = {
  'principiante':"https://www.youtube.com/watch?v=GyY0OxDk5lI&list=PL1PfvzSCMX0cpBi5-qcKT45f4aZu7sGQO",
  'cfop':"https://www.youtube.com/watch?v=979lycubm9E&list=PLFbghVhL6Hm6Nax2itiPeVgFmmx3A7UWP",
  'roux':"https://www.youtube.com/watch?v=ilkF7cxQV2o&list=PLL7KvA5mhPX0qCIiG_kBdVl0yiTSpGENa"
}

function ir_a_aprender_mas(btn_name) {
  window.open(playlist_aprender[btn_name],'_blank');
}

document.querySelectorAll('#seccion-metodos .btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    ir_a_aprender_mas(btn.getAttribute('name'))
  });
});