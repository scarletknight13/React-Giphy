import { getByTitle } from "@testing-library/react"

function Results(props){
    console.log('props', props);
    const gifs = props.data.map((gif) =>
        <div>
            <div key={gif.id}>
                <img src={gif.images.fixed_height.url} />
                <a href={gif.source}>Link</a>
            </div>
        </div>
    )
    return(
        <div>
            {gifs}
        </div>
    )
}
export default Results