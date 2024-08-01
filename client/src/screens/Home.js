import React, {  useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {  getAllnotes } from '../action/addnewNoteAction'

const Home = () => {

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getAllnotes());
  }, [dispatch]);

  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}

export default Home
