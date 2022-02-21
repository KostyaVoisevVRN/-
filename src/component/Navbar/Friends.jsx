import React from 'react';
import b from './Friends.module.css';

const Friends=()=>{
    return(
        
        <div className={b.grid}>

<div>
<img src='https://mywebicons.ru/i/jpg/77f304b29ed3cda21f51fc10b5195946.jpg' className={b.img}/>
</div>
<div>
    <img src='https://mywebicons.ru/i/jpg/77f304b29ed3cda21f51fc10b5195946.jpg' className={b.imn}/>
</div>
<div>
    <img src='https://mywebicons.ru/i/jpg/77f304b29ed3cda21f51fc10b5195946.jpg' className={b.ims}/>
</div>

        </div>
    )
}


export default Friends;