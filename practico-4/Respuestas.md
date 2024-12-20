# Practico U4 | JS - Parte 1
## Ejercicio 1
Cree una nueva página web con el sencillo ejemplo en javascript:
``` javascript
  let s = "Hola Mundo!!!";
  alert(s)
```
Incluir dichas sentencias en un script de todas las siguientes maneras:
1. En el \<head\> de la página web
2. En el \<body\> de la página web
3. En un archivo externo conlocando el vínculo en el \<head\>

> *Solución en ``ej1.js``*

## Ejercicio 2
*Cuáles de los siguientes son nombres de identificadores válidos en javascript*:
- [x] let Nombre1
- [x] const _ar_1
- [x] function calcularValor()
- [x] var x
- [ ] let Edad Promedio
- [ ] let 1erValor
- [x] let $edad
- [ ] var Num#3
- [x] function Nombre1()
- [x] let Edad_Promedio

## Ejercicio 3
Pruebe los siguientes ejemplos con “const”. Utilice la solapa “console” en la sección del desarrollador de su navegador. (botón derecho / inspeccionar). Pruebe de comentar las líneas e ir descomentándolas de a una. Luego saque conclusiones.
- **Prueba1**
  ``` javascript
    const x = 234; console.log(x);
    x = 123; console.log(x);
    // luego cambiar esta línea por
    let x = 123; console.log;
  ```
  *Conclusiones*: Se intenta reasignar el valor de una constante (línea 2) y luego redefinir la misma constante (línea 4).
- **Prueba2**
  ``` javascript
    let x = 234; console.log(x);
    x = 123; console.log(x);
    // luego cambiar esta línea por
    let x = 123; console.log;
  ```
  *Conclusiones*: Se declara una variable x y se le asigna otro valor en la línea 2. Para la línea 4 surge un error de sintaxis ya que se está redeclarando la variable x.
- **Prueba3**
  ``` javascript
    var x = 234; console.log(x);
    x = 123; console.log(x); 
    // luego cambiar esta línea por
    var x = 123; console.log;
  ```
  *Conclusiones*: Parece que ``var`` permite reasignar y redeclarar variables.

## Ejercicio 4
Probar el siguiente ejemplo y escribir las conclusiones
``` javascript
  if (true) {
    var x = 10; // y luego con let
  }
  console.log(x);
```
*Conclusiones*: el scope de ``var`` es global mientras que el de ``let`` no. La variable declarada con let vive solamente dentro del bloque de código donde es creada. En el primer intento ``console.log(x);`` sí pudo acceder a la variable porque ya estaba declarada en el ámbito global por ``var``, así que tuve que recargar la pestaña como en el ejercicio 3.

## Ejercicio 5
Pruebe el siguiente código:
``` javascript
  const ar_num1 = [23, 32 ,4, 8 ];
  const ar_num2 = [14, 28 ,3 ,46 ];
  console.log(ar_num1);
  console.log(ar_num2);
```
Realizar las siguientes pruebas:
- ``` javascript
    ar_num1 = ar_num2;
    console.log(ar_num1);
    console.log(ar_num2);
  ```
- ``` javascript
    // cambiar const por let en ambos arreglos volver a probar
  ```
- ``` javascript
    ar_num1[2] = 44
    console.log(ar_num1);
    console.log(ar_num2);
  ```
  ¿Por qué el 44 también se cambió en ``ar_num2``?
*Respuesta*: Se cambió el valor en el índice 2 en ambos arreglos debido a que al asignar ``ar_num2`` a ``ar_num1`` (``ar_num1 = ar_num2;``) ambas variables apuntan al mismo objeto en la memoria (mismo arreglo ``[14, 28, 3, 46]``). Es decir, hacen referencia al mismo espacio en la memoria.

## Ejercicio 6
Investigue como crear números aleatorios (random) entre el 1 y el 100. Genere un arreglo llamado “ar_random” con 1000 de esos números utilizando ar_random.push(x). Luego muéstrelo por consola.
``` javascript
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  const longitud = 1000;
  const ar_random = [];

  for (let i = 0; i < longitud; i++) {
    let x = getRandomNumber(1, 100);
    ar_random.push(x);
  }
  
  console.log(ar_random);

  // Más eficiente
  const eff_ar = Array.from({ length: 1000 }, () => getRandomNumber(1, 100));

  // Mostrar el arreglo por consola
  console.log("Arreglo de 1000 números aleatorios eficiente:");
  console.log(eff_ar);
```

## Ejercicio 7
Recorrer el arreglo anterior y cada uno de los valores los deberá concatenar en la variable string “str_num_aleat” separados por “;”. Al terminar mostrar en consola la variable string. Hacer 4 versiones del algoritmo utilizando ``while``, luego utilizando ``for`` (común), luego ``for of`` y por último ``for in``.
``` javascript
  // 1. Usando while
  let str_num_aleat = '';
  let i = 0;
  while (i < ar_random.length) {
      str_num_aleat += ar_random[i] + ';';
      i++;
  }
  console.log('Resultado usando while:');
  console.log(str_num_aleat);

  // 2. Usando for común
  str_num_aleat = '';
  for (let i = 0; i < ar_random.length; i++) {
      str_num_aleat += ar_random[i] + ';';
  }
  console.log('\nResultado usando for común:');
  console.log(str_num_aleat);

  // 3. Usando for...of
  str_num_aleat = '';
  for (const num of ar_random) {
      str_num_aleat += num + ';';
  }
  console.log('\nResultado usando for...of:');
  console.log(str_num_aleat);

  // 4. Usando for...in
  str_num_aleat = '';
  for (const index in ar_random) {
      str_num_aleat += ar_random[index] + ';';
  }
  console.log('\nResultado usando for...in:');
  console.log(str_num_aleat);

  // Bonus: Solución más moderna y eficiente usando join()
  str_num_aleat = ar_random.join(';');
  console.log('\nBonus - Resultado usando join():');
  console.log(str_num_aleat);
```

## Ejercicio 8
Con el arreglo generado en el ejercicio anterior:
- Encontrar cual es el menor valor, cual es el mayor valor y en que posición se encuentra cada uno
- Mostrar la suma de todos los números y el promedio
- Mostrar cuantos números son mayores al promedio y cuantos son menores

*Solución*:
``` javascript
  // Función para encontrar valor y posición del mínimo y máximo
  function encontrarMinMax(arr) {
    let min = arr[0];
    let max = arr[0];
    let posMin = 0;
    let posMax = 0;
    
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
        posMin = i;
      }
      if (arr[i] > max) {
        max = arr[i];
        posMax = i;
      }
    }
    
    return { min, posMin, max, posMax };
  }
  
  // Función para calcular suma y promedio
  function calcularEstadisticas(arr) {
    const suma = arr.reduce((acc, curr) => acc + curr, 0);
    const promedio = Math.floor(suma / arr.length);
    return { suma, promedio };
  }

  // Función para contar números respecto al promedio
  function contarRespectorPromedio(arr, promedio) {
    let mayores = 0;
    let menores = 0;
    
    arr.forEach(num => {
      if (num > promedio) mayores++;
      else if (num < promedio) menores++;
    });
    
    return { mayores, menores };
  }

  // Realizar todos los análisis
  const { min, posMin, max, posMax } = encontrarMinMax(ar_random);
  const { suma, promedio } = calcularEstadisticas(ar_random);
  const { mayores, menores } = contarRespectorPromedio(ar_random, promedio);

  // Mostrar resultados
  console.log('Análisis del arreglo:');
  console.log('--------------------');
  console.log(`Valor mínimo: ${min} (posición ${posMin})`);
  console.log(`Valor máximo: ${max} (posición ${posMax})`);
  console.log('--------------------');
  console.log(`Suma total: ${suma}`);
  console.log(`Promedio: ${promedio}`);
  console.log('--------------------');
  console.log(`Números mayores al promedio: ${mayores}`);
  console.log(`Números menores al promedio: ${menores}`);
  console.log(`Números iguales al promedio: ${ar_random.length - mayores - menores}`);
```

## Ejercicio 9
Investigar como es la sintaxis y la forma de uso de las funciones ``alert``, ``prompt`` y
``confirm`` en javascript. Hacer una ejemplo con cada una.

### Características principales de cada función:
- **alert(mensaje)**
  - Muestra una ventana modal con un mensaje
  - Solo tiene botón "Aceptar"
  - Detiene la ejecución del código hasta que el usuario presione "Aceptar"
  - No retorna ningún valor
  - Ejemplo:
    ``` javascript
      const nombre = 'Tobías';
      const edad = 22;
      alert(`Hola ${nombre}, tienes ${edad} años.`);
    ```
- **prompt(mensaje, \[valorPorDefecto\])**
  - Muestra una ventana modal con un campo de texto
  - Tiene botones "Aceptar" y "Cancelar"
  - El segundo parámetro es opcional y define un valor por defecto
  - Retorna:
    - El texto ingresado si el usuario presiona "Aceptar"
    - ``null`` si el usuario presiona "Cancelar"
    - String vacío ("") si el usuario no ingresa nada y presiona "Aceptar"
  - Ejemplo:
    ``` javascript
      const nombre = prompt('Ingrese su nombre:');
      const edad = prompt('Ingrese su edad:');
    ```
- **confirm(mensaje)**
  - Muestra una ventana modal con un mensaje y botones de confirmación
  - Tiene botones "Aceptar" y "Cancelar"
  - Retorna:
    - ``true`` si el usuario presiona "Aceptar"
    - ``false`` si el usuario presiona "Cancelar"
  - Ejemplo:
    ``` javascript
      const respuesta = confirm('¿Desea continuar?');
    ```

> 
> Estas funciones son bloqueantes (detienen la ejecución del código)
> 
> Son métodos antiguos pero aún útiles para prototipos rápidos
> 
> Para aplicaciones profesionales se suelen usar alternativas más modernas y personalizables
> 
> El estilo visual depende del navegador
> 

## Ejercicio 10
Hacer una función que reciba como parámetro un número entero y retorne true si el número es primo y false en otro caso. (Recuerde que un número es primo si solo es divisible por si mismo y por la unidad)

``` javascript
  function esPrimo(numero) {
    // Casos especiales
    if (numero <= 1) return false;  // Los números menores o iguales a 1 no son primos
    if (numero === 2) return true;  // 2 es el único número primo par
    if (numero % 2 === 0) return false;  // Los pares mayores a 2 no son primos

    // Solo necesitamos revisar números impares hasta la raíz cuadrada
    for (let i = 3; i <= Math.sqrt(numero); i += 2) {
      if (numero % i === 0) {
        return false;
      }
    }
    
    return true;
  }
```

## Ejercicio 11
Utilizando la función “prompt”. Pedir un número entero al usuario ``n`` entre 1 y 10 (controlar que “n” sea un número y en ese rango, de lo contrario lo deberá pedir nuevamente mostrando el error con la función ``alert``). Luego, utilizando la función del ejercicio anterior, encontrar y guardar en un arreglo los ``n`` primeros números primos.

> *Solución en ``ej11.js``*

## Ejercicio 12
Hacer una función que reciba una cadena y retorne la misma pero con los caracteres en orden invertido. (ej "Hola" => "aloH"). Pedir al usuario la cadena, y luego utilizando la función, invertirla y mostrarla con ``alert``.

> *Solución en ``ej12.js``*

## Ejercicio 13
Hacer una función que reciba una cadena y devuelva la cantidad de vocales que tiene.
Las letras pueden estar en mayúsculas o minúsculas.
``` javascript
  function cantidadVocales(cadena) {
    const vocales = cadena.match(/[aeiouáéíóúAEIOUÁÉÍÓÚäëïöüÄËÏÖÜ]/gi);
    return vocales ? vocales.length : 0;
  }
```

## Ejercicio 14
Modificar el ejercicio anterior para que la función retorne un arreglo de 5 posiciones con la cantidad de letras "a, e, i, o y u".
``` javascript
  function cantidadCadaVocal(cadena) {
    const a = cadena.match(/[aáAÁäÄ]/gi);
    const e = cadena.match(/[eéEÉëË]/gi);
    const i = cadena.match(/[iíIÍïÏ]/gi);
    const o = cadena.match(/[oóOÓöÖ]/gi);
    const u = cadena.match(/[uúUÚüÜ]/gi);
    return [
      a ? a.length : 0,
      e ? e.length : 0,
      i ? i.length : 0,
      o ? o.length : 0,
      u ? u.length : 0
    ];
  }
```

## Ejercicio 15
Hacer una función que reciba una cadena y devuelva ``true`` si es palindrome (es decir se le igual de izquierda a derecha que de derecha a izquierda), ``false`` en otro caso. Ej. "neuquen". 
Agregue un parámetro más (puede ser booleano) para que sea sensible a mayúsculas y minúsculas o no.
``` javascript
  function isPalindrome(cadena, case_sensitive) {

    if (!case_sensitive) {
      cadena = cadena.toLowerCase();
    }
    
    let cadena_reves = cadena.split('').reverse().join('');
    
    return cadena === cadena_reves;
  }

```

## Ejercicio 16
Hacer una función que reciba un arreglo de números enteros y devuelva el segundo mayor. (Es decir el que le sigue al mayor, que puede ser el mismo en caso que se repita el número mayor). Para probarlo puedo utilizar el arreglo generado en el ej. N° 6.
``` javascript
  function segundoMayor(arr_int) {
    let arr_ordenado = arr_int.sort((a, b) => b - a);
    return arr_ordenado[1];
  }
```

## Ejercicio 17
Cree un arreglo con unos 20 nombres de pila inventados, otro con 20 apellidos y otro con 20 calles.
Haga una función generarPersona() que devuelva un objeto con los siguientes campos: dni, apellido, nombre, dirección, edad y email.
- El dni será un número aleatorio entre 10000000 y 99999999
- Escoger el apellido generando un número al azar para el arreglo de nombres
- Idem para el nombre
- Para el domicilio generar al azar el nombre de la calle y concatenarle un número entero generado al azar entre 1 y 2000
- La edad será un número al azar generado entre 0 y 100
- El email será la concatenación del apellido, un “.” (punto) ,el nombre, luego “@” y por último podrá ser gmail.com, yahoo.com o hotmail.com (generarlo al azar con un número del 1 al 3)

> *Solución en `ej17.js`*

## Ejercicio 18
Usar el código del ejercicio anterior para generar un arreglo con los datos de n personas.
El número n será solicitado al usuario.

> *Solución en `ej18.js`*

## Ejercicio 19
Usando los datos del ejercicio anterior pedir al usuario un número de dni y buscar en el arreglo si existe la persona. Si existe mostrar los datos con un alert. Si no existe mostrar con alert un cartel que diga que no existe una persona con el dni nnnn ingresado.

> *Solución en `ej19.js`*

## Ejercicio 20
Similar al ejercicio anterior, pero en lugar de mostrar los datos, se deberá eliminar.
Investigar el uso del método ``array.splice()``.
El algoritmo deberá:
- Pedir el dni
- Buscar la persona
- Si no existe, mostrar un alert diciendo que no existe
- Si existe, mostrar el apellido y nombre de la persona en un confirm y pedir la confirmación para eliminar.
  - En caso afirmativo proceder a eliminar al elemento.
