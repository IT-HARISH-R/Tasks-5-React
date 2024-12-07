import { useState } from "react";
import Card from "./card";
import { list } from "postcss";


const MainData = (({ data }) => {
    const list = [];

    function display() {
        data.map((main, index) => {
            list[list.length] = 
                <div key={main.id} className="mx-auto shadow-lg rounded-lg relative">
                    <div className="h-[200px] md:h-[400px] object-cover overflow-hidden">
                        <img className="mb-4 mx-auto h-full " src={main.image} alt="" />
                    </div>
                    <div className="p-4 ">
                        <div className="flex justify-between items-center">
                            <h3 className="font-bold text-xl md:text-xl">{main.title}</h3>
                            {/* <h1>Count: 120</h1> */}
                        </div>
                        <div className="flex justify-between pt-4 sm:text-2xl text-xl font-semibold">
                            <p >$ {main.price}</p>
                            <p className="flex items-center gap-1">{main.rating.rate}
                                <span className="material-symbols-outlined">star </span></p>
                        </div>
                        <p className="py-2 text-xs sm:text-x-[16]">{main.description}</p>

                        <div className=" flex p-8 ">

                            <button className="absolute bottom-[5%] left-[50%] translate-x-[-50%] py-2 px-3 bg-slate-400
                     rounded-lg hover:bg-slate-600 text-white"
                     onClick={()=>haltelAddCard(index)}>Add to cart</button>
                        </div>
                    </div>
                </div>
        })
        return list;

    }
    function haldelButbtn() {
        const card = document.getElementById('card');
        const mainclass = document.getElementById('mainclass');
        const home = document.getElementById('home');
        mainclass.classList.toggle('hidden');
        home.classList.toggle('hidden');
        card.classList.toggle('hidden');
    }
    const [card , setcard] = useState([]);

    function haltelAddCard(e){
        const newValue = data[e]; 
        setcard([...card,newValue]);
    }
    
    return <>
        <div className="bg-slate-400 shadow-lg fixed w-full z-50">
            <div className="container flex mx-auto justify-between p-4 md:p-8 items-center">
                <div >
                    <img className="h-auto w-[60px]" src="https://fakestoreapi.com/icons/logo.png" alt="Logo" />
                </div>
                <div >
                    <button
                        onClick={haldelButbtn}
                        className="text-2xl">cord 0</button>
                </div>
            </div>
        </div>
        <div className="bg-black" id="home">
            <div className="container mx-auto h-[500px] text-white
        flex items-center justify-center">

                <h1 className="text-5xl">Fake Store</h1>
            </div>
        </div>
        <div className="container mx-auto " id="mainclass">
            <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 p-4 md:p-8 mx-auto gap-4 md:gap-8 ">
                {display()}
            </div>
        </div>

        {/* ---------------------------------card----------------- */}

        <div id="card" className="container mx-auto pt-[100px] sm:pt-[150px] hidden" >

            <Card  name={[card]} />
            </div>

    </>

})

export default MainData;




