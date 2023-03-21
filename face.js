var tela = document.querySelector('#face');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'darkgreen';
pincel.fillRect(0, 0, 350, 300); 

pincel.fillStyle = 'black';
pincel.fillRect(100, 190, 40, 110) //left side of mouth
pincel.fillRect(210, 190, 40, 110) //right side of mouth
pincel.fillRect(140, 150, 70, 100) //nose
pincel.fillRect(50, 60, 90, 90) //left eye
pincel.fillRect(210, 60, 90, 90) //right eye
