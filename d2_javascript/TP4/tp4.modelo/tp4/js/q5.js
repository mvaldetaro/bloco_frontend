q = app.getComponente('q5');
q.carregar = function() {
  let t = `
    <div style="border:1px solid black;display:none;width:50%;height:50%; margin:auto">
      Q5Q5Q5Q5Q5Q5
    </div>
  `;
  $('#questao > div').fadeOut(function(){
    $('#questao').html(t);
    $('#questao > div').fadeIn();
  });
  console.log(app);
};
