import React, {useState} from 'react'
import Image from "../image/Image";
import Table from "../table/Table";
import Searchtable from "../searchform/Searchtable";


const Main = (props) => {
    const [meal, setMeal] = useState('')
    const [meals, setMeals] = useState([])

    const getMeal = (e) => {
        setMeal(e.target.value)
    }
    const useFetch = () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
            .then(res=>res.json())
            .then(data => setMeals(data.meals))
            .catch(error => console.log('eroras'))
    }




    return (
    <main>
        <Searchtable placeholder = 'Enter meal' getMeal = {getMeal} useFetch={useFetch }/>
        {
            meals.map((m) => (<Image key = {m.idMeal} m={m}/>))
        }{
            meals.map((v) => (<Table key = {v.idMeal} v = {v} />))
        }

    </main>
  )
}

export default Main
