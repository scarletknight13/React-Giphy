import { useState } from "react"

function Search(props){
    console.log(props.handleChange)
    return(
        <div>
            <form action="">
                <input onInput={props.handleChange} name="name" type="text" />
                <input type="submit" value="Search"  />
            </form>
        </div>
    )
}
export default Search