import React from "react";
import { addCats } from "../../features/store/reducer";
import {useDispatch, useSelector} from 'react-redux';
import "./style.css"

function Cats() {

    const dispatch = useDispatch();
    const cats = useSelector(state => state.cats.cats);
    const categoriesId = useSelector(state => state.cats.categoriesId);

    const showMore = () => {
        dispatch(addCats({categoriesId}))
    }


    return (
        <div className="cats">
            <p>Cats</p>
            {cats.map((cat, i) => (
                <img src={cat.url} key={cat.id + i} />
            ))}
            <p><button onClick={showMore}>Load More</button></p>
        </div>
    )
}

export default Cats