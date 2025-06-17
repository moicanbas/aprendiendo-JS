const usuarios = [
    {
        id: 1,
        nombre: "Ana Torres",
        edad: 28,
        ciudad: "Bogotá",
        correo: "ana.torres@example.com",
        compras: [
            { producto: "Laptop", precio: 3500 },
            { producto: "Mouse", precio: 50 }
        ]
    },
    {
        id: 2,
        nombre: "Carlos Ruiz",
        edad: 35,
        ciudad: "Medellín",
        correo: "carlos.ruiz@example.com",
        compras: [
            { producto: "Celular", precio: 1200 },
            { producto: "Audífonos", precio: 200 }
        ]
    },
    {
        id: 3,
        nombre: "Laura Gómez",
        edad: 22,
        ciudad: "Cali",
        correo: "laura.gomez@example.com",
        compras: [
            { producto: "Tablet", precio: 800 },
            { producto: "Funda", precio: 30 }
        ]
    },
    {
        id: 4,
        nombre: "Mateo Fernández",
        edad: 42,
        ciudad: "Bogotá",
        correo: "mateo.fernandez@example.com",
        compras: [
            { producto: "Monitor", precio: 1000 }
        ]
    },
    {
        id: 5,
        nombre: "Sofía Martínez",
        edad: 30,
        ciudad: "Barranquilla",
        correo: "sofia.martinez@example.com",
        compras: [
            { producto: "Teclado", precio: 80 },
            { producto: "Mousepad", precio: 20 }
        ]
    }
];


// Listar los nombres de todos los usuarios.
usuarios.forEach((item)=> console.log(`${item.nombre}`))

// Filtrar usuarios que vivan en Bogotá.

// Obtener un arreglo con los correos electrónicos.

// Sumar las edades de todos los usuarios.

// Encontrar el usuario con mayor edad.

// Verificar si algún usuario tiene menos de 25 años.

// Agregar una nueva compra al usuario con ID 3.

// Calcular el total gastado por cada usuario.

// Crear un nuevo arreglo con el nombre y ciudad de cada usuario.

// Ordenar los usuarios por edad de menor a mayor.

// Contar cuántos usuarios hay por ciudad.

// Eliminar al usuario con ID 2.

// Modificar el correo del usuario llamado "Mateo Fernández".

// Buscar el primer usuario que compró un “Mouse”.

// Crear una función que reciba un nombre y devuelva las compras de ese usuario.