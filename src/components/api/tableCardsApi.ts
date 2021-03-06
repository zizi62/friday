import axios from "axios";
import { cardsType } from "../../Redux/ziziCardsReducer";



const instance = axios.create({
    baseURL: 'https://cards-nya-back.herokuapp.com/1.0/'
});

type getCardsType = {
    cards : cardsType
    pageCount: number
    page: number
    maxGrade: number
    minGrade: number
    token: string
}

type getCardsDataType =  getCardsType & {error: string}&{success: boolean, token:string}

export const tableCardsApi = {   
    
         async getCards(token: string, cardsPack_id: string) {
             return await instance.get<getCardsDataType>( `cards/card?token=${token}&cardsPack_id=${cardsPack_id}`)
          
        },   
        async setNewCard(card: {}, token:string){
            return await instance.post<getCardsDataType>(`cards/card`, {token, card})
        },
        async deleteCard (token:string, id: string){
            return await instance.delete<getCardsDataType>(`/cards/card?token=${token}&id=${id}`)
        }

}