import {useState, useEffect} from "react";

function ApiFetch() {
    const [data, setData] = useState([])
    useEffect(()=>{
        try{
            fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setData(data))
        }catch(e){
            console.log(e.message);
        }
    }, [])
    console.log(data);
  return <div>
    {
        data.map((items)=>{
            return <div key={items.id}>
                <img src={items.image} alt=""  className="w-[50vw] h-[50vh] object-fit"/>
                <h1>{items.title}</h1>
                <p>{items.price}</p>
                </div>
        })
    }
  </div>;
}

export default ApiFetch;
