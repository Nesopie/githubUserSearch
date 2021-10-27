const Search = (props) => {

    return (
        <form onSubmit={props.getData} type="search">
            <input type="text" name="userSearch" placeholder="Search GitHub username..."/>
            <div className="buttonContainer">
                {!props.results ? <span id="results">No results</span> : null}
                <button type="submit">Search</button>
            </div>
        </form>
    );
}

export default Search;
