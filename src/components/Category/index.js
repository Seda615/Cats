import React from "react";
import {useSelector, useDispatch} from "react-redux"
import { getCats, changeCategoriesId } from "../../features/store/reducer";
import "./style.css"

function Category() {

    const dispatch = useDispatch()
    const categories = useSelector(state => state.cats.categories);

    const changeCategory = (id) => {
        dispatch(changeCategoriesId(id))
        dispatch(getCats({categoriesId: id}))
    }

    return (
        <div className="category">
            {categories.map(category => (
                <button key={category.id} onClick={() => changeCategory(category.id)}>
                    {category.name}
                </button>
            ) )}
        </div>
    )
}

export default Category