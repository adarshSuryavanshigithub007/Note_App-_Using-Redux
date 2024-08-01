import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {deletenotes, getAllnotes } from '../action/addnewNoteAction';


const AllBooks = () => {
  const dispatch = useDispatch();
const [allnotes,setAllNotes] = useState([])
  // Fetching state using useSelector
  const { data: notes, loading, error } = useSelector((state) => state.getAllnote);
console.log(allnotes)
  // Using useEffect to dispatch the action to fetch notes when the component mounts
  useEffect(()=>{
  if(notes && Array.isArray(notes.data)){
    setAllNotes(notes.data)
  }
  
   },[notes])
  useEffect(() => {
    dispatch(getAllnotes());
  }, []);

  // Logging to check the state
  console.log('Notes state:', notes);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Ensure that notes is an array
  // const notesArray = notes && Array.isArray(notes.data) ? notes.data : [];
  // console.log(notesArray[0]?._id);

  const handleDelete = (id)=>{
    dispatch(deletenotes(id)).then(() => {

    });
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Content</th>
        </tr>
      </thead>
      <tbody>
        {allnotes.map((note) => (
          <tr key={note._id}>
            <td>{note._id}</td>
            <td>{note.title}</td>
            <td>{note.content}</td>
            <td onClick={()=>handleDelete(note._id)}><button>delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AllBooks;
