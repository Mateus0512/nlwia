import ytdl from "ytdl-core";
import fs from 'fs'

export const download = (videoID) => new Promise((resolve,reject)=> {
    const videoURL = 'https://www.youtube.com/shorts/'+videoID;
    console.log('realizando o download: '+videoID);
    ytdl(videoURL, {
        quality:"lowestaudio",
        filter:"audioonly"
    }).on("info", (info) =>{
        const seconds = info.formats[0].approxDurationMs/1000;
        if(seconds>60){
            throw new Error("A duração desse video é maior do que 60 segundos")
        }
        console.log(seconds);
    }).on("end", ()=>{
        console.log('download concluido')
        resolve();
    }).on("error", (error)=>{
        console.log('não foi possivel fazer o download')
        console.log(error);
        reject(error);
    }).pipe(fs.createWriteStream('./tmp/audio.mp4'));
}
)