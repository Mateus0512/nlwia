import {summaryExample} from "./utils/summary.js"
import { pipeline } from "@xenova/transformers"

export async function summarize(text){
    //return summaryExample;
    try {
        console.log("Realizando o resumo..");
        const generator = await pipeline('summarization','Xenova/distilbart-cnn-12-6');
        const output = await generator(text);
        console.log('Resumo conluido com sucesso');
        return output[0].summary_text;
    } catch (error) {
        console.log("não foi possivel realizar o resumo");
        throw new Error(error);
    }
}