const Introduction = (props) => {
    let profileName;
    if(props.profileName) {
        profileName = <div id="profileName">{props.profileName}</div>
    }else {
        profileName= <div id="profileName" style={{color: "#697c9a", fontSize: "16px"}}>This user has no name</div>
    }
    return(
        <div className="introContainer">
            <div className="userProfilePic">
                <img src={props.imgUrl} alt="profile pic"/>
            </div>
            <div className="about">
                {profileName}
                <div id="profileHandle">{props.profileHandle}</div>
                <div id="dateOfJoin">{props.dateOfJoin}</div>
            </div>
        </div>
    );
}

const Description = (props) => {
    let bio;
    if(props.bio) {
        bio = <div>{props.bio}</div>
    }else {
        bio = <div style={{color: "#697c9a"}}>This user has no bio</div>
    }

    return(
        <div className="bio" >
            {bio}
        </div>
    );
}

const About = (props)  => {
    return(
        <div className="aboutContainer">
            <div className="aboutInner">
                <div className="innerTitle">Repos</div>
                <div className="data">{props.repoData}</div>
            </div>
            <div className="aboutInner">
                <div className="innerTitle">Followers</div>
                <div className="data">{props.followers}</div>
            </div>
            <div className="aboutInner">
                <div className="inneritle">Following</div>
                <div className="data">{props.following}</div>
            </div>
        </div>
    );
}

const Details = (props) => {
    let location, blog, twitterHandle, company;
    if(props.location) {
        location = <div id="location">{props.location}</div>
    }else {
        location = <div id="location" style={{color: "#697c9a"}}>Not Available</div>
    }
    if(props.blog) {
        blog = <div id="blog">{props.blog}</div>
    }else {
        blog = <div id="blog" style={{color: "#697c9a"}}>Not Available</div>
    }
    if(props.twitterHandle) {
        twitterHandle = <div id="twitterHandle">{props.twitterHandle}</div>
    }else {
        twitterHandle = <div id="twitterHandle" style={{color: "#697c9a"}}>Not Available</div>
    }
    if(props.company) {
        company = <div id="company">{props.company}</div>
    }else {
        company = <div id="company" style={{color: "#697c9a"}}>Not Available</div>
    }
    return(
        <div className="detailContainer">
            {location}
            {blog}
            {twitterHandle}
            {company}
        </div>
    );
}

const Card = (props) => {
    return(
        <div className="card">
            <Introduction
                imgUrl={props.imgUrl}
                profileName={props.profileName}
                profileHandle={props.profileHandle}
                dateOfJoin={props.dateOfJoin}
            />
            <Description desc={props.desc} bio={props.bio}/>
            <About
                repoData={props.repoData}
                followers={props.followers}
                following={props.following}
            />
            <Details
                location={props.location}
                blog={props.blog}
                twitter={props.twitterHandle}
                company={props.company}
            />
        </div>
    );
}

export default Card;
