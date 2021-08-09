import React, { useState } from "react";
import s from "./PagesRenderArray.module.css"



const PagesRenderArray = ({ pagesCount, onPageChanged, currentPage }) => {
	let pages = [];
	let [lastPage, setLastPage] = useState(25)
	let nextPage = false;
	const increaseLastPage = (e) => {
		e.preventDefault();
		setLastPage(++lastPage);
		console.log(lastPage);
	}
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
		if (i >= lastPage) {
			nextPage = true;
			break;
		}
	}
	let Pages = pages.map(p => {
		return <div className={s.pageOuter}><span onClick={(e) => {
			e.preventDefault();
			onPageChanged(p)
		}} key={p}
			className={currentPage === p ? s.selectedPage : s.page}>{p} </span></div>
	});
	
	let Next = () => {
		if (nextPage) {
			return (
				<button className={s.button} onClick={increaseLastPage}>Next</button>
			)
		}
	}
	return (
		<div className={s.pages}>
			{Pages}
			{Next()}
		</div>
	)
}

export default PagesRenderArray;

