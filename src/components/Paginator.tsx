import React, { useState } from 'react';
import './index.css';


interface Props {
   active: number,
   handleClick: Function,
}

const Paginator = (props: Props) => {
   // center active button
   const getButtons = (active: number): JSX.Element[] => {
      // if active > 3
      let start = 1;
      let end = 7;
      if (active > 4) {
         start = active - 3;
         end = active + 3;
      }
      const buttons: JSX.Element[] = [];
      for (let i = start; i <= end; i += 1) {
         const button = <input
            className={`paginator__btn ${(active === i) && 'paginator__btn--active'}`}
            key={'page:' + i}
            type='button'
            onClick={(e) => props.handleClick(i)}
            value={i}
         />;

         buttons.push(button)
      }
      return buttons;
   }

   return (
      <div className='paginator'>
         {getButtons(props.active)}
      </div>
   )
}

export default Paginator;
