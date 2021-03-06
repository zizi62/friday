import { useSelector, useDispatch } from "react-redux";
import { AppStateType } from "../../Redux/store";
import { useEffect, useCallback } from "react";
import { setTableData, setNewCardData, deleteCard, cardType } from "../../Redux/ziziCardsReducer";
import TableZ from "../common/ziziTable/ziziTable";
import React from "react";
import { TABLE_ZIZICARDS } from "../Routes/Routes";
import { useParams, NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

type ZiziCacksTablePropsType = {

}

const CardsTable: React.FC<ZiziCacksTablePropsType> = (props: ZiziCacksTablePropsType) => {

    const tableData = useSelector((store: AppStateType) => store.tableCardsReducer.cards);

    const dispatch = useDispatch();
    const {id} = useParams();
 
    useEffect(() => {
        dispatch(setTableData(id))
    }, [])


    const columns = [
        { title: 'Type', field: 'type' },
        {title: 'Question', field: 'question'},
        { title: 'Created', field: 'created' },
        { title: 'Rating', field: 'rating' },
        { title: 'Shots', field: 'shots' },
  
    ]

    const editItem = (obj: any) => {
        alert(obj.user_name)
    }


    const deletItem = useCallback((card: cardType) => {
        dispatch(deleteCard(card._id, id))

    }, [dispatch, setNewCardData]);

    const searchItem = (text: string) => {
        alert(text)
    }

    const addNewCard = useCallback(() => {
        dispatch(setNewCardData(id))

    }, [dispatch, setNewCardData]);

    return <>
        <TableZ tableData={tableData} colums={columns} tableTitle='Cards' editItem={editItem} deletItem={deletItem} searchItem={searchItem} addNewItem={addNewCard}/>
    </>
}


export default CardsTable



