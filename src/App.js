import Header from './components/header.js';
import Search from './components/search.js';
import Card from './components/card.js';
import { useState, useEffect } from 'react';
import { DateTime } from 'luxon'

function App() {
    const [ userData, setUserData ] = useState({
        name: "The Octocat",
        login: "octocat",
        created_at: "2011-01-25T18:44:36Z",
        avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
        public_repos: 8,
        followers: 4094,
        following: 9,
        bio: null,
        location: "San Francisco",
        blog: "https://github/blog",
        twitter_username: null,
        company: "@github"
    });
    const [ results, setResults ] = useState(true);

    async function getData(username) {
        let response = await fetch(`https://api.github.com/users/${username}`);
        if((response.status === 404) || (response.status === 400)) {
            setResults(false);
        }else {
            setResults(true);
            let data = await response.json();
            setUserData(data);
        }
    }

    const onQuery = (e) => {
        e.preventDefault();

        const form = e.target;
        const newUsername = form.querySelector("input").value;

        getData(newUsername);

        form.reset();
    }



    return(
        <div className="container">
            <Header/>
            <Search
                results={results}
                getData={onQuery}
            />
            <Card
                profileName={userData.name}
                profileHandle={'@' + userData.login}
                imgUrl={userData.avatar_url}
                // dateOfJoin={userData.created_at}
                dateOfJoin={`Joined ${DateTime.fromISO(userData.created_at).toLocaleString(DateTime.DATE_MED)}`}
                bio={userData.bio}
                repoData={userData.public_repos}
                followers={userData.followers}
                following={userData.following}
                location={userData.location}
                blog={userData.blog}
                twitterHandle={userData.twitter_username}
                company={userData.company}
            />
        </div>
    );
}

export default App;
