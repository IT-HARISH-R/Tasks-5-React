const MainData = (dataCard) => {
    const data=dataCard.name[0];
    const list=[];
    
    
    function displayCard(){

        data.map((main) => {
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
                 rounded-lg hover:bg-slate-600 text-white">Add to cart</button>
                    </div>
                </div>
            </div>
    })
    return list;
}
    

    return (
    <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 p-4 md:p-8 mx-auto gap-4 md:gap-8">
        {displayCard()}
    </div>
    );
};


export default MainData;
