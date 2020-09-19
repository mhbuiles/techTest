import React from 'react';

function BreadCrumb( { filters } ) {

  let filtersB = [];
  if ( filters[0] ){
    filtersB = filters[0].values[0].path_from_root;
  }
  else{
    filtersB = [ { id : 1 , name : 'Categorías' } ];
  }

  return(
      <div className = 'breadCrumb'>
        { filtersB.map( filter =>
          <p key = { filter.id } > { filter.name } > &nbsp; </p>
        )}
      </div>
  );
}

export default BreadCrumb;
