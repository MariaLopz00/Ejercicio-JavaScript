// 1)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME 2 NUMEROS COMO ARGUMENTOS (x y z) EN EL CUAL
// SI x ES MENOR QUE z, x DIVIDE A z, CASO CONTRARIO SE MULTIPLICAN. RETORNAR
// EL RESULTADO

function numeros(x,z){

	if (x<z){

		return (x/z)

	}else{
		return (x*z)
	}

}

console.log(numeros(6,5))


// 2)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME UN VALOR COMO ARGUMENTO Y RETORNE DE QUE TIPO
// ES (SI ES STRING, NUMBER, BOOLEAN, ETC)

function TipoDeArgumento(a){

	return (typeof(a))
}

console.log(TipoDeArgumento(23))

// 3)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME 6 VALORES (a,b,c,d,e,f) COMO ARGUMENTOS
// - a y b SE SUMAN
// - EL RESULTADO DE LA SUMA SE RESTA CON c
// - LUEGO SE MULTIPLICA POR d Y SE DIVIDE POR e
// - FINALMENTE SE HACE LA POTENCIA CON EL EXPONENTE f.
// - SE RETORNA EL RESULTADO
// - TIP: RECORDAR EL ORDEN

function operaciones(a,b,c,d,e,f){

	let suma= (a+b)
	let total= (((suma-c)*d)/e)
	let potencia= Math.pow(total,f)
	
	return potencia
}

console.log(operaciones(7,6,3,4,8,2))

// 4)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO Y SE EXTRAIGA LOS
// ULTIMOS 3 ELEMENTOS. RETORNAR EL RESULTADO COMO UN NUEVO ARRAY.

function myArray([num1,num2,num3,num4]){

	let arr=[num1,num2,num3,num4]
	
	let nuevoArray= arr.filter(arr => arr.length>3)

	return (nuevoArray)

	
}
console.log(myArray(['ey','hola','como','estas']))




// 5)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO, ORDENAR ALFABÉTICAMENTE
// Y/O DE MAYOR A MENOR Y RETORNAR EL RESULTADO

function OrdenAlfabetico([a,b,c,d,r]){

	let arr=[a,b,c,d,r]
	arr.sort()

	return arr
}

console.log(OrdenAlfabetico(['leandro','juan','fernando','lucia','ana']))
// 6)---------
// IMPLEMENTAR UNA FUNCIÓN QUE RECIBA COMO ARGUMENTO UN ARRAY (a) Y UN VALOR(b).
// LA FUNCION DEBE REMOVER TODOS LOS ELEMENTOS DEL ARRAY IGUALES AL VALOR(b).
// RETORNAR EL ARRAY FILTRADO



function remover(arr,b){

	 let arraynombre=arr;

	 const nuevoArray = arraynombre.filter((item) => item !== b)

	 return nuevoArray;
	
}

console.log(remover(['maria','lopez'],'lopez'))



// 7)---------
// IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN ARRAY DE NUMEROS COMO ARGUMENTO Y QUE
// RETORNE LA SUMA DE LOS ELEMENTOS DEL ARRAY. IDEM A ESTE APARTADO CREAR OTRA
// FUNCIÓN QUE RETORNE EL PROMEDIO DE LOS ELEMENTOS DEL ARRAY.

let numero=[2,3,45,5]
function suma(numeros){

	
	let sum= 0;
	
	for(let i=0; i< numeros.length;i++){

		sum+=numeros[i];
	}

	return (sum)

    

}

let total= suma(numero)
let cantidad= numero.length

function promedio(){

	let prom= (total/cantidad)

	return prom;
}
console.log(total)
console.log(promedio())






// 8)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME: OBJETO CON 2 O 3 PROPIEDADES Y UN STRING
// COMO ARGUMENTOS. DEBE RETORNAR EL VALOR DE LA PROPIEDAD CUYA KEY SEA IGUAL
// AL VALOR DEL STRING DEL ARGUMENTO

// Ej: objeto({nombre: 'Rosa', apellido: 'Gomez', Tel: '12434'}, 'nombre')
// 	Retorna 'Rosa'

function myObject (obj, str){

	for(key in obj){

		if(key == str){

			return (obj[key])


		}

	}

}

console.log(myObject({name:'maria',apellido:'lopez',edad: '19'},"name"))






// 9)---------
// IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN OBJETO COMO ARGUMENTO Y RETORNAR
// LA SUMA DE TODOS SUS VALORES.

function SumaValores(valor){

	let suma= 0;

	for(key in valor){

		suma+=valor[key]

	}


	return (suma) 
}

console.log(SumaValores({num1: 3, num2: 6}))


