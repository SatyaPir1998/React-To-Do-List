import React from 'react'

function InputContener({Inputval, handleInput , addTodo}) {
  return (
    <div className="input-container">
      <input type="text" value={Inputval} onChange={handleInput} />
      <button onClick={addTodo}>+</button>
    </div>
  )
}

export default InputContener;
