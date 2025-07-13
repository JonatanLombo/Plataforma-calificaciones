const URL = 'https://localhost:7008/api/';

export function login(usuario, pass){
    let datos = {usuario:usuario, pass:pass}; 

    return fetch(URL + 'autenticacion',{
        method:'POST',
        body:JSON.stringify(datos),
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(data => data.text());
}

export function getEstudiantes(usuario){
    return fetch(URL + 'alumnosProfesor?usuario='+ usuario,{
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(data => data.json());
}

export function crearEstuadiante(estudiante){
    let data = {identificacion:estudiante.identificacion, nombre:estudiante.nombre, direccion:estudiante.direccion, edad:estudiante.edad, email:estudiante.email};
    return fetch(URL + 'alumno?id_asig='+ estudiante.asignatura,{
        method:'POST',
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(data => data.text());
}

export function eliminarEstuadiante(id){
    return fetch(URL + 'alumno?id='+ id,{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(data => data.text());
}

export function estudiantePorId(id){
    return fetch(URL + 'alumno?id='+ id,{
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(data => data.json());
}

export function editarEstudiante(estudiante){
    return fetch(URL + 'alumno',{
        method:'PUT',
        body: JSON.stringify(estudiante),
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(data => data.text());
}

export function ponerCalificacion(id){
    return fetch(URL + 'calificaciones?idMatricula='+id,{
        headers:{
            'Content-Type':'application/json',
        }       
    })
    .then(data => data.json())
}

export function nuevaCalificacion(calificacion,id){
    let data = {descripcion:calificacion.descripcion, nota:calificacion.nota, porcentaje:calificacion.porcentaje, matriculaId:id};
    return fetch(URL + 'calificacion',{
        method:'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type':'application/json',
        }       
    })
    .then(data => data.text())
}

export function eliminarCalificacion(id){
    return fetch(URL + 'calificacion?id='+id,{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json',
        }       
    })
    .then(data => data.text())
}