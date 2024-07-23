import React from 'react';
import classes from 'foodpage.module.css';

export default function FoodPage() {
    const [food,setFood] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getById(id).then(setFood);
    }, [id]);

    return <>
    { food && (
        <div className={classes.container}>
        <img 
        className={classes.image}
        src={`/foods/${food.imageUrl}`}
        alt ={food.name}
        />
        </div>
        )}
    
    </>


  return <div>FoodPage</div>
}
