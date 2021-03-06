import React, { forwardRef, useEffect, useState } from 'react';
import MaterialTable from 'material-table';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { useDispatch, useSelector } from 'react-redux';
import { tableDrawingTC } from '../../Redux/tableDrawingReducer';
import { AppStateType } from './../../Redux/store';
import { localStorageApi } from '../api/profileApi';





interface TableState {
	columns: Array<object>;
	data: Array<object>;
};


export default function TableCards() {

	// let token: string | null = useSelector((store: AppStateType) => store.tableDrawingPage.token);
	// let token: any = localStorageApi.getToken();

	const dispatch = useDispatch();
	// const [firstRendering, setFirstRendering] = useState(true);

	// useEffect(() => {
	// 	if (firstRendering) {
	// 		dispatch(tableDrawingTC());
	// 		setFirstRendering(false);
	// 	}
	// }, [])

	const tableIcons: any = {
		Add: forwardRef((props: any, ref: any) => <AddBox {...props} ref={ref} />),
		Check: forwardRef((props: any, ref: any) => <Check {...props} ref={ref} />),
		Clear: forwardRef((props: any, ref: any) => <Clear {...props} ref={ref} />),
		Delete: forwardRef((props: any, ref: any) => <DeleteOutline {...props} ref={ref} />),
		DetailPanel: forwardRef((props: any, ref: any) => <ChevronRight {...props} ref={ref} />),
		Edit: forwardRef((props: any, ref: any) => <Edit {...props} ref={ref} />),
		Export: forwardRef((props: any, ref: any) => <SaveAlt {...props} ref={ref} />),
		Filter: forwardRef((props: any, ref: any) => <FilterList {...props} ref={ref} />),
		FirstPage: forwardRef((props: any, ref: any) => <FirstPage {...props} ref={ref} />),
		LastPage: forwardRef((props: any, ref: any) => <LastPage {...props} ref={ref} />),
		NextPage: forwardRef((props: any, ref: any) => <ChevronRight {...props} ref={ref} />),
		PreviousPage: forwardRef((props: any, ref: any) => <ChevronLeft {...props} ref={ref} />),
		ResetSearch: forwardRef((props: any, ref: any) => <Clear {...props} ref={ref} />),
		Search: forwardRef((props: any, ref: any) => <Search {...props} ref={ref} />),
		SortArrow: forwardRef((props: any, ref: any) => <ArrowDownward {...props} ref={ref} />),
		ThirdStateCheck: forwardRef((props: any, ref: any) => <Remove {...props} ref={ref} />),
		ViewColumn: forwardRef((props: any, ref: any) => <ViewColumn {...props} ref={ref} />)
	};

	// const tableDrawing = useSelector((store: AppStateType) => store.tableDrawingPage.table);
	// console.log(tableDrawing);

	// 	cardsCount: 0
	// created: "2020-07-07T15:43:43.340Z"
	// grade: 0
	// name: "BaskoPack"
	// path: "/def"
	// private: false
	// rating: 0
	// shots: 0
	// type: "pack"
	// updated: "2020-07-07T15:44:10.599Z"
	// user_id: "5ef8dab83d84f600041f53bc"
	// user_name: "1989bvg@gmail.com"
	// __v: 0
	// _id: "5f04982f83dea700043602a5"

	// config: {url: "cards/pack/?token=1ac3eae0-c1da-11ea-a90b-33886681af28", method: "get", headers: {…}, baseURL: "https://cards-nya-back.herokuapp.com/1.0/", transformRequest: Array(1), …}
	// data:
	// cardPacks: (4) [{…}, {…}, {…}, {…}]
	// cardPacksTotalCount: 49
	// maxGrade: 0
	// minGrade: 0
	// page: 1
	// pageCount: 4
	// token: "1bf93690-c1da-11ea-a90b-33886681af28"
	// tokenDeathTime: 1594306110457
	// __proto__: Object
	// headers: {content-length: "1368", content-type: "application/json; charset=utf-8"}
	// request: XMLHttpRequest {readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, onreadystatechange: ƒ, …}
	// status: 200
	// statusText: "OK"
	// __proto__: Object

	const [state, setState] = useState<TableState>({
		columns: [
			{ title: 'Name', field: 'name' },
			{ title: 'Grade', field: 'grade' },
			{ title: 'Created', field: 'created' },
			{ title: 'Updated', field: 'updated' },
			{ title: 'User name', field: 'user_name' }
		],
		// data: tableDrawing,
		data: []
	});

	// const cardPacks = useSelector((store: AppStateType) => store.tableDrawingPage.cardPacks);
	// const page = useSelector((store: AppStateType) => store.tableDrawingPage.page);
	// const cardPacksTotalCount = useSelector((store: AppStateType) => store.tableDrawingPage.cardPacksTotalCount);
	// const promise = useSelector((store: AppStateType) => store.tableDrawingPage.promise);

	// const getData = (page: any, pageSize: any) => {
	// 	return dispatch(tableDrawingTC(pageSize, page + 1));

	// };

	return (
		<MaterialTable
			icons={tableIcons}
			title="Cards"
			columns={state.columns}
			// data={state.data}
			data={query =>
				// new Promise((resolve, reject) => {
				// 	dispatch(tableDrawingTC(query.pageSize, query.page + 1));
				// 	console.log(promise);
				// 			promise.then((data: any) => {
				// 			console.log(data)
				// 		resolve({
				// 			data: data.cardPacks,
				// 			page: data.page - 1,
				// 			totalCount: data.cardPacksTotalCount
				// 		});
				// 	});
				// })


				new Promise((resolve, reject) => {
					let token: any = localStorageApi.getToken();
					let url = `https://cards-nya-back.herokuapp.com/1.0/cards/pack/?token=${token}`;
					url += '&pageCount=' + query.pageSize;
					url += '&page=' + (query.page + 1);
					fetch(url)
						.then(response => response.json())
						.then(result => {
							localStorageApi.setToken(result.token);
							token = result.token;
					
						resolve({
							data: result.cardPacks,
							page: result.page - 1,
							totalCount: result.cardPacksTotalCount
						});
					})
				})
			}
			editable={{
				onRowAdd: (newData) =>
					new Promise((resolve) => {
						setTimeout(() => {
							resolve();
							setState((prevState) => {
								const data = [...prevState.data];
								data.push(newData);
								return { ...prevState, data };
							});
						}, 600);
					}),
				onRowUpdate: (newData, oldData) =>
					new Promise((resolve) => {
						setTimeout(() => {
							resolve();
							if (oldData) {
								setState((prevState) => {
									const data = [...prevState.data];
									data[data.indexOf(oldData)] = newData;
									return { ...prevState, data };
								});
							}
						}, 600);
					}),
				onRowDelete: (oldData) =>
					new Promise((resolve) => {
						setTimeout(() => {
							resolve();
							setState((prevState) => {
								const data = [...prevState.data];
								data.splice(data.indexOf(oldData), 1);
								return { ...prevState, data };
							});
						}, 600);
					}),
			}}
		/>
	);
};