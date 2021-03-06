import React from "react"
import { Redirect, Link, useLocation } from "react-router-dom"

import "./Results.css"
import RestartButton from "../RestartButton/RestartButton"
import DisplaySolution from "../DisplaySolution/DisplaySolution"
import DisplayUsersInputList from "../DisplayUsersInputList/DisplayUsersInputList"


export default function Results(props) {
  const { points } = useLocation();

  console.log('Results', props);
  console.log('Results - useLocation', useLocation());

  return (
    <div className="resultsPage">
      {props.isActive === false ? <Redirect to="/" /> : ""}
      <Link to="/"><h1>Eye4Words</h1></Link>
      <div className="displayL">
        <DisplayUsersInputList usersInputList={props.usersInputList} points={points} />
        <DisplaySolution solution={props.solution} searchOn={true} />
      </div>
      {props.isActive === true || props.usersInputList.length === 0 ?
        <Link to="/PlayGame">
          <RestartButton className="bbb" handleRestart={props.handleTimer} />
        </Link> : ""}
    </div>
  )
}