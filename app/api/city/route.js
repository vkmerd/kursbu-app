import { NextResponse } from "next/server";

export default async function POST(){
    try{
        const cityResponse = await fetch("https://turkiyeapi.dev/api/v1/provinces")
        const cityjson = cityResponse.json();
        const cityData = cityjson.data
        console.log(cityData);

        return NextResponse.json({data:cityData,message:"başarılı api çekimi"}, {status:200})
    }catch(err){
        return NextResponse.json({message:err}, {status:405})

    }
}