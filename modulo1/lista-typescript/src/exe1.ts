
type Entrada = {
    data: string,
    entrada: string,
    formatData: (data: string) => string
}

function formatData( data: string ) :string[]{

    return data.split('/')
}

function recebeString( data: string, entrada: string ) :string {

    if(!data){
        return "Data não foi informada"
    }

    if(!entrada){
        return "entrada não foi informada"
    }

    if(data && entrada){
        const info: Entrada = {
            data: data,
            entrada.formatData(data); 
        }
    }
}

console.log(recebeString('27/05/2022','Robson'))