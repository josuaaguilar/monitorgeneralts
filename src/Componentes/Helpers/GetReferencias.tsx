export const GetReferencias = async (accessToken:string) => {
    const baseUrl = "http://localhost:3010/api/Referencias"
    try{
        const ReferenciaRequest: Response = await fetch(baseUrl,{
            headers:{
                Authorization:"Bearer "+accessToken
            }
        })
        const Referencias = ReferenciaRequest.json();
        return Referencias;
    }catch(Error){
        console.log(Error.message)
    }
}