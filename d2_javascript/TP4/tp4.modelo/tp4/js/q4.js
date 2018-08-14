q = app.getComponente('q4');
q.carregar = function() {
  let t = `
    <div style="border:1px solid black;display:none;width:50%;height:50%; margin:auto">
      Q4Q4Q4Q4Q4Q4Q4
    </div>
  `;
  $('#questao > div').fadeOut(function(){
    $('#questao').html(t);
    $('#questao > div').fadeIn();
  });
  console.log(app);
};
