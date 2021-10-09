import React from 'react'
import styled from 'styled-components'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { deleteMeals, getOneMeal } from '../../Redux/auth/action'
import { MealForm } from '../../Components/messform/MealForm'
import { CreateMealForm } from '../messform/CreateMealForm'
import { getData } from '../../utils/localStorage'

function MealsSection() {
    const dispatch = useDispatch();
    const { auth: { Meal } } = useSelector(state => state, shallowEqual)
    const { auth: { MessProfile } } = useSelector(state => state, shallowEqual)
    const [meals, setMeals] = useState(Meal.meals)
    const [editModalOpen, setEditModalOpen] = useState(false)
    const [createMealModalOpen, setCreateMealModalOpen] = useState(false)
    const [action, setAction] = useState("Delete")
    const handleDelete = (e) => {
        console.log(e.target.value, MessProfile.mess[0]._id)
        dispatch(deleteMeals(e.target.value, MessProfile.mess[0]._id))
        setMeals(Meal.meals)
    }
    const handleEdit = (e) => {


        dispatch(getOneMeal(e.target.value))
        setTimeout(() => {
            setEditModalOpen(true)

        }, 1000)


    }
    const handleCreateNew = () => {
        setCreateMealModalOpen(true)
    }
    useEffect(() => {
        setMeals(Meal.meals)
    }, [Meal.meals])
    return (
        <>
            <MealsSectionStyled>
                <div><button value="Create New" onClick={handleCreateNew}>Create New</button></div>
                <div className="mealsGrid">
                    {meals.map((el) => {
                        return <div>
                            <img src={el.image} alt="" />
                            <h3>{el.title}</h3>
                            <div>
                                <h3>Items</h3>
                                <p>{el.menu}</p>
                            </div>
                            <div>
                                <h3>Price</h3>
                                <p>{el.price}</p>
                            </div>
                            <div>
                                <button value={el._id} onClick={handleDelete}>Delete</button>
                                <button value={el._id} onClick={handleEdit}>Edit</button>
                            </div>
                        </div>

                    })}
                </div>
                {editModalOpen ? <MealForm action={action} onemeal={getData("onemeal").meals} setEditModalOpen={setEditModalOpen} editModalOpen={editModalOpen} mess_id={MessProfile.mess[0]._id} /> : ""}
                <CreateMealForm setCreateMealModalOpen={setCreateMealModalOpen} createMealModalOpen={createMealModalOpen} mess_id={MessProfile.mess[0]._id} />
            </MealsSectionStyled>

        </>
    )
}

const MealsSectionStyled = styled.div`




`

export default MealsSection
