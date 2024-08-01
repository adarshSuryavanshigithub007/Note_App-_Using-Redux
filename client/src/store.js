import { configureStore } from '@reduxjs/toolkit'
import { userLoginReducer } from './reducer/userLoginReducer'
import { RegisterReducer } from './reducer/userRegisterReducer'
import { deleteNotesReducer, getAllnotesReducer, newNotesReducer, updateNotesReducer } from './reducer/NoteReducer'


const store = configureStore({
    reducer: {
        userLogin: userLoginReducer,
        userRegister: RegisterReducer,
        createNote: newNotesReducer,
        updateNote: updateNotesReducer,
        deleteNote: deleteNotesReducer,
        getAllnote: getAllnotesReducer
    },
})

export default store