import {transcriptionExample} from "./utils/transcription.js"
import { pipeline } from "@xenova/transformers"
export async function transcribe(audio){
    //return transcriptionExample;
    try {
        console.log("Realizando a Transcrição");
        const transcribe1 = await pipeline('automatic-speech-recognition','Xenova/whisper-small');
        const transcription = await transcribe1(audio,
            {chunk_length_s:30,
            stride_length_s:5,
            language:"portuguese",
            task:"transcribe",
            });
            console.log('Transcrição finalizada com sucesso');
            return transcription?.text.replace("[Música]","");
    } catch (error) {
        throw new Error(error);
    }
}