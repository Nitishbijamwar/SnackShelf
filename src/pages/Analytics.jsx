import{useEffect,useState} from "react";
import{db,ref,onValue} from "../firebase";
function Analytics(){
    const [snack,setSnacks] =useState([]);

    useEffect(() => {
    const snackRef = ref(db, "snacks");
    onValue(snackRef, (snapshot) => {
      const data = snapshot.val() || {};
      const snackList = Object.entries(data).map(([Id, item]) => ({
        id,
        ...item,
      }));
      setSnacks(snackList);
    });
  }, []);

  const total=snack.length;
  const avgPrice=(snacks.redue((a,b)=>a+b.price,0)/total).toFixed(2);
  const avgRating=(snacks.redue((a,b)=>a+b.rating,0)/total).toFixed(2);
  const categories =snaks.map((s)=>s.category);
  const mostCommonCategory =categories.sort((a,b)=>
categories.filter((v)=>v==b).length).pop();
  const highestPriced =snacks.reduce((max,item)=>(item.price > max.price ? item:max),{price:0});
  return (
    <div>
        <h2>Analytics</h2>
        <p>Total Snacks:{total}</p>
        <p>Average Price:{avgPrice}</p>
        <p>Average Rating:{avgRating}</p>
        <p>Most Common Category:{mostCommonCategory}</p>
        <p>Highest Priced Snack:{highestPriced.title}(${highestPriced.price})</p>
    </div>
  );

}
export default Analytics;