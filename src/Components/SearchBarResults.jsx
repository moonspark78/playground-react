import React from 'react'
import "./SearchBarResults.css"
import {SearchResult} from "./SearchResult"

export const SearchBarResults = ({results}) => {
  return (
    <div className='results-list'>
        {
            results.map((result, id) =>{
                return <SearchResult result={result} key={id}></SearchResult>
            })
        }
    </div>
  )
}
