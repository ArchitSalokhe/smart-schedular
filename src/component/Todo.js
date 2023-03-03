import React, { useState } from "react";
import './Todostyle.css'

function Todo(){
    const [inputData, setInputData] = useState('');
    const [items,setItem] =useState([]);
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [iseditItem, setIsEditItem] = useState(null);

    const addItem = ()=>{
        if(!inputData){
        }
        else if(inputData && !toggleSubmit){
            setItem(
                items.map((elem)=>{
                    if(elem.id === iseditItem){
                        return{ ...elem, name:inputData}
                    }
                    return elem;
                })
            )
        }
        else{
            const allInputData = { id: new Date().getTime().toString(), name:inputData}
            setItem([... items, allInputData]);
            setInputData('')
        }
        
    }
    const deleteItem =(index)=>{
        const updateditems = items.filter((elem)=>{
            return index != elem.id;
        });
        setItem(updateditems);
    }
        const editItem = (id) => {
            let newEditItem = items.find((elem)=>{
                return elem.id === id;
            });
            console.log(newEditItem);
            setToggleSubmit(false);

            setInputData(newEditItem.name);
            setIsEditItem(id);

            }
        
    return(
        <div className="container">
            <div className="app-wrapper">
                <div className="header">
                
                <h1>Todo List</h1>
                </div>
                
                <div className="additem">
                    <input type="text" placeholder="Add Items" id="" className="task-input"
                    value={inputData} onChange={(e) => setInputData(e.target.value)}/>
                    {
                        toggleSubmit ? <button className="button-add" onClick={addItem}>Add</button> :
                        <button className="button-edit1" onClick={addItem}>edit</button> 
                    }
                    {/* <button className="button-add" onClick={addItem}>Add</button>  */}
                </div>
                <div className="">
                    {
                        items.map((elem)=>{
                            return (
                                <div className="list-item" key={elem.id}>
                                <h3 className="list">{elem.name}</h3>
                                <button className='button-delete task-button'>
                                <i className="fa-solid fa-trash" onClick={()=>deleteItem(elem.id)}></i>
                                </button>
                                <button className='button-edit task-button'>
                                <i className='fa fa-edit' onClick={()=>editItem(elem.id)}></i>
                                </button>
                                
                                </div>    
                            )
                        })
                    }
                      
                </div>

               
            </div>
        </div>
    )
}

export default Todo