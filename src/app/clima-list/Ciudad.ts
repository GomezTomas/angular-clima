export interface Ciudad {
    "nombre": string,
    "tiempo": string,
    "temperatura": number,
    "esDeDia": boolean,
    "favorita": boolean,
    "img": string,
}

export interface DiaPronosticoExtendido{
    "fecha" : string,
    "temperaturaMaxima" : number,
    "temperaturaMinima" : number,
    "precipitaciones" : number,
    "humedad" : number,
    "probabilidadDeLLuvia": number,
    "amanecer": string,
    "atardecer": string,
    "condicion": string,
    "icono": string,
}

export interface CiudadPronosticoExtendido extends Ciudad{
    "diasPronosticoExtendido" : DiaPronosticoExtendido[]
}