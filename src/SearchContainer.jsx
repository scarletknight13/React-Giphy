import { useState } from "react"
import Search from "./Search";
import Results from "./Results";
const axios = require('axios');


function SearchContainer(props){
    function handleSubmit(event){
        event.preventDefault();
        console.log(event.target.name.value);
        let searchWords = event.target.name.value.split(' ');
        console.log(searchWords);
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=6uTMhTUfwlqR6vn2Sqqc1ekzbJ8dAgeW&q=${searchWords.join('+')}&limit=25&offset=0&rating=g&lang=en`)
            .then(function (response) {
                setQuery({
                    queryText: event.target.value,
                    results : response.data.data
                })
                console.log(query);
            })
            .catch(function (error) {
                console.log(error);
            })
        setQuery({
            queryText: event.target.value,
            results : []});
        // console.log(event.target.name.value);
    }
    function handleChange(event){
        console.log(event.target.value);
    }
    const [query, setQuery] = useState({queryText: '', results : []})
    return(
        <div>
            <Search handleChange={handleChange} handleSubmit={handleSubmit}/>
            <Results data={query.results} />
        </div>
    )
}
export default SearchContainer