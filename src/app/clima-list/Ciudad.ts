export interface Ciudad {
    "nombre": string,
    "tiempo": string,
    "temperatura": number,
    "llueve": boolean,
    "favorita": boolean,
    "img": string,
}

export interface CiudadPronosticoExtendido extends Ciudad{
    "temperaturaMaxima" : number,
    "temperaturaMinima" : number,
    "precipitaciones" : number,
    "humedad" : number,
    "probabilidadDeLLuvia": number,
    "amanecer": string,
    "atardecer": string,
}