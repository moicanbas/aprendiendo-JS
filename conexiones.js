
async function crearUsuario(event) {
    event.preventDefault();

    const form = new FormData(document.getElementById("formulario"))

    try {
        form.append("is_active", true)

        let object = {};
        form.forEach((value, key) => object[key] = value);

        const response = await fetch('http://localhost:3000/usuarios', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(object)
        });

        const nuevoUsuario = await response.json();
        alert('Usuario creado:', nuevoUsuario);
        // obtenerUsuariosActivos()
    } catch (error) {
        console.error('Error al crear usuario:', error);
    }
}

async function obtenerUsuariosActivos() {
    try {
        const response = await fetch(`http://localhost:3000/usuarios?is_active=true`);
        const usuariosActivos = await response.json();

        usuariosActivos.forEach(element => {
            const li = document.createElement("li");
            li.innerText = `${element.nombre} ${element.edad} ${element.email}`
            document.getElementById("my-list").appendChild(li);
        });

    } catch (error) {
        console.error('Error al obtener usuarios:', error);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    obtenerUsuariosActivos()
});

// Enunciado para desarrollar métodos adicionales
// 🧾 GET /usuarios/:id (getById solo si está activo)
// Desarrolla una función getUsuarioPorId(id) que recupere un usuario específico solo si su campo is_active es true.
// Si el usuario no está activo o no existe, debe devolver null o un mensaje personalizado.

// 🗑️ DELETE lógico
// Implementa una función eliminarUsuarioLogico(id) que en lugar de eliminar el usuario físicamente, haga un PATCH y
// cambie el campo is_active a false. El usuario seguirá existiendo en la base de datos, pero no será visible en las consultas normales.