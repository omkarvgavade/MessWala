import React from 'react'
import styled from 'styled-components'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { useState } from 'react'
import { deleteMeals } from '../../Redux/auth/action'
function MealsSection() {
    const dispatch = useDispatch();
    const { auth: { Meal } } = useSelector(state => state, shallowEqual)
    const { auth: { MessProfile } } = useSelector(state => state, shallowEqual)
    const [meals, setMeals] = useState(Meal.meals)
    const handleDelete = (e) => {
        console.log(e.target.value, MessProfile.mess[0]._id)
        dispatch(deleteMeals(e.target.value, MessProfile.mess[0]._id))
        setMeals(Meal.meals)
    }
    const handleEdit = () => {

    }
    return (
        <MealsSectionStyled>
            {meals.map((el) => {
                return <div>
                    <h3>{el.title}</h3>
                    <button value={el._id} onClick={handleDelete}>Delete</button>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            })}

        </MealsSectionStyled>
    )
}

const MealsSectionStyled = styled.div`




`

export default MealsSection
