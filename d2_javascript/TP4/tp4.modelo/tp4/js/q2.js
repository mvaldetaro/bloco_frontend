q = app.getComponente('q2');
q.carregar = function() {
   let t = `
    <div style="border:1px solid black;display:none;width:50%;height:50%; margin:auto">
      Q2Q2Q2Q2Q2Q2Q2
    </div>
  `;
  $('#questao > div').slideUp(function(){
    $('#questao').html(t);
    $('#questao > div').slideDown();
  });
  console.log(app);
};
