import React from 'react'
import '../Style/App.scss'
import Cards from './Cards/Cards.jsx';

function App(){
 const arr1=[
    {
        name:"Безлимитный 300",
        info_1:'руб',
        info_month:'300/мес',
        speed:'до 10 Мбит/cек',
        text:'Обьем включенного трафика не ограничен',
        color:"blue",

    },
    {
        name_1:'Безлимитный 450',
        info_1:'руб',
        info_month_1:'450/мес',
        speed_1:'до 50 Мбит/cек',
        text:'Обьем включенного трафика не ограничен',
        color:'green',

    },
    {
        name_2:'Безлимитный 550',
        info_1:'руб',
        info_month_2:'550/мес',
        speed_2:'до 100 Мбит/cек',
        text:'Обьем включенного трафика не ограничен',
        color:'red',

    },
    {
        name_3:'Безлимитный 1000',
        info_1:'руб',
        info_month_3:'1000/мес',
        speed_3:'до 200 Мбит/cек',
        text:'Обьем включенного трафика не ограничен',
        color:'black',

    },
 ];



return (
 <div>
   <Cards case={arr1[0] }/>
   <Cards case={arr1[1] }/>
   <Cards case={arr1[2] }/>
   <Cards case={arr1[3] }/>
   <Cards case={arr1[4] }/>
</div>
);

}
export default App;