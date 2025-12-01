const ListDemo = () =>{
    const cities = ["Mumbai","Pune","Delhi"];
    return(
        <>
        
            <ul>
                {
                cities.map((c)=> (<li>{c}</li>))
};
            </ul>    

        </>
    );
};
export default ListDemo;