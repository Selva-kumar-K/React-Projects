import { useState, useEffect } from "react"
import axios from "axios"
const Main = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get("https://themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then((res) => {
            setItems(res.data.meals)
        })
    },[])

    const list_items = items.map(({strMeal, strMealThumb, idMeal}) => (
        <section className="card">
            <img src={strMealThumb} alt="meal-img"/>
            <section className="content">
                <p>{strMeal}</p>
                <p>#{idMeal}</p>
            </section>
        </section>
    ))
    return (
    <div className="card-container">
        {list_items}
    </div>
  )
}

export default Main