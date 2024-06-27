import React from 'react';
import '../css/add.css';

export default function Add({onClose, onChange, onAdd}) {
    const handleSubmit = (e) => {
        e.preventDefault(); // prevent the page from refreshing
        onAdd();
    };
    return (
        <div className='container-fluid' id='pop'>
            <div className="row" id="block" >

            <div className="add-title" >
                <h2>Add Student</h2>
                <i className="fa-solid fa-xmark" onClick={onClose}></i> {/*clicking the xmark icon will close the form*/}
            </div>
            <form onSubmit={handleSubmit}> {/*add this line*/}
                <div className="name">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id='name' placeholder='' onChange={onChange}/> 
                </div>
                <div className="birth">
                    <label htmlFor="birth">Date of birth</label>
                    <input type="text" name="birth" id='birth' placeholder='' onChange={onChange}/>
                </div>
                <div className="position">
                    <label htmlFor="position">position</label>
                    <input type="text" name="position" id='position' placeholder='' onChange={onChange}/>
                </div>            
                <div className="submit">
                    <button id="cancel">Cancel</button>
                    <button type='submit'>Add</button>
                </div>
            </form>
            </div>
        </div>
    )
}