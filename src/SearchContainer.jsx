import { useState } from "react"
import Search from "./Search";
import Results from "./Results";
const axios = require('axios');


function SearchContainer(props){

    function handleChange(event){
        // console.log(event.target.value);
        let searchWords = event.target.value.split(' ');
        console.log(searchWords);
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=6uTMhTUfwlqR6vn2Sqqc1ekzbJ8dAgeW&q=${searchWords.join('+')}&limit=25&offset=0&rating=g&lang=en`)
            .then(function (response) {
                setQuery({
                    queryText: event.target.value,
                    results : response.data.data
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    const [query, setQuery] = useState({queryText: '', results : []})
    return(
        <div>
            <Search handleChange={handleChange}/>
            <Results data={query.results} />
        </div>
    )
}
export default SearchContainer