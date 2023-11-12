import React from 'react';

function Header({year, handleSetYear}) {
  
  return (
    <div className='row header mt-4'>
      <div className='col-md-4'>
        <h1>Nøkkeltall økonomi</h1>
      </div>
      <div className='col-md-4 mt-3 mb-3 header-input-box'>
        <input type='number' value={year} onChange={handleSetYear}></input>
      </div>
      
      <hr></hr>
    </div>
  );
}

export default Header;