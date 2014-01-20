//
//                           -----  CLASS TEXTO  -----
//
// Asociamos con prototype las variables y métodos a la clase Texto
//defino variables

Texto.prototype.texto;
Texto.prototype.posicionX;
Texto.prototype.posicionY;
Texto.prototype.rotacion;
Texto.prototype.Color;
Texto.prototype.fuente;
Texto.prototype.tamanho;
Texto.prototype.decoracion;
Texto.prototype.opacidad;

//defino métodos
Texto.prototype.cambiarTexto=Texto_cambiarTexto;
Texto.prototype.cambiarPosicion=Texto_cambiarPosicion;
Texto.prototype.cambiarRotacion=Texto_cambiarRotacion;
Texto.prototype.cambiarColor=Texto_cambiarColor;
Texto.prototype.cambiarFuente=Texto_cambiarFuente;
Texto.prototype.cambiarTamanho=Texto_cambiarTamanho;
Texto.prototype.cambiarDecoracion=Texto_cambiarDecoracion;
Texto.prototype.cambiarOpacidad=Texto_cambiarOpacidad;



// CONSTRUCTOR DE LA CLASE

function Texto(texto){
	this.texto=texto;
	this.posicionX=100;
	this.posicionY=100;
	this.rotacion=0;
	this.Color='#000000';
	this.fuente='Arial';
	this.tamanho='30px';
	this.decoracion='bold';
	this.opacidad=1;
}

function Texto_cambiarTexto(text){
	this.texto=text;
}

function Texto_cambiarPosicion(x,y){
	this.posicionX=x;
	this.posicionY=y;
}

function Texto_cambiarRotacion(angulo){
	this.rotacion=angulo;
}

function Texto_cambiarColor(Kolor){
	this.Color=Kolor;
}

function Texto_cambiarFuente(tipo){
	this.fuente=tipo;
}

function Texto_cambiarTamanho(tam){
	this.tamanho=tam;
}

function Texto_cambiarDecoracion(estilo){
	this.decoracion=estilo;
}

function Texto_cambiarOpacidad(opacity){
	this.opacidad=opacity;
}

