function mostrar(){
    document.getElementById('cuadradoForm').style.display='none';
    document.getElementById('circuloForm').style.display='none';
    document.getElementById('rectanguloForm').style.display='none';
    document.getElementById('trianguloForm').style.display='none';
    
    let seleccion= document.getElementById('figura').value;

    if (seleccion === 'salir') {
            //mensaje de despedida animado
            despedidaAnimada();
            return;
    }
    

    let figuraForm = document.getElementById(seleccion + "Form");
    figuraForm.style.display = 'block';

}

function calcular(){
    let seleccion= document.getElementById('figura').value;
    let resultadoArea = document.getElementById('resultado');
    let area;
    switch(seleccion) {
        case 'circulo':
            let radio = document.getElementById('radio').value;
            area = Math.PI*radio*radio;
            break;
        case 'cuadrado':
            let lado = document.getElementById('Lado').value;
            area = lado*lado;
            break;
        case 'rectangulo':
            let base = document.getElementById('base').value;
            let altura = document.getElementById('altura').value;
            area = base*altura;
            break;
        case 'triangulo':
            let B = document.getElementById('B').value;
            let A = document.getElementById('A').value;
            area = (B*A)/2;
            break;
        default:
            document.write("ADIOS CUIDATE");
            return;
    }
    //MUESTRA EL RESULTADO
    resultadoArea.textContent = "El area del "+ seleccion + " es " + area.toFixed(2);
}

function despedidaAnimada () {
    // OCULTAR TODOS LOS ELEMENTOS
    document.getElementById('formularioContenedor').style.display='none';
    document.getElementById('resultado').style.display='none';

    // MOSTRAR PANTALLA DE DESPEDIDA CON IMAGEN Y MENSAJE
    let despedidaContainer =  document.getElementById('despedidaContainer');
    let despedidaImagen =  document.getElementById('despedidaImagen');

    //MODIFICAR LA IMAGEN Y MENSAJE DE DESPEDIDA
    //CAMBIA LA RUTA DE LA IMAGEN
    despedidaImagen.src = 'imagenes/baisbais.jpg';
    despedidaImagen.alt = 'Despedida';
    despedidaImagen.title = 'Despedida';

    //MOSTRAR PANTALLA DE DESPEDIDA CON ANIMACION
    despedidaContainer.style.display = 'block';
}