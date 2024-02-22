import { useEffect, useState } from 'react';
import './Home.css'



const Home = ()=>
{
    const[themeFlag, setThemeFlag] = useState(false)
    const[userQuery, setUserQuery] = useState('NabarajBasnet');
    const[user, setUser] = useState({});

    const fetchData = async ()=>        // function to fetch data
    {
        const data = await fetch(`https://api.github.com/users/${userQuery}`)
        const userResult = await data.json();
        setUser(userResult);
        setUserQuery('')
    }


    const handleKeypress = evt=>{       // handle keypress function
        if(evt.key==='Enter'){
            fetchData();
            setUserQuery('');

        };
    };

    useEffect(()=>      // fetching default data automatically when render
    {
        fetchData();
        setUserQuery('');
    },[]);


    return(
        <>
        <div className={themeFlag?'Dark':'Light'}>
            <div className="container-1">
                
                <div className="header">
                    
                    <div className="name-logo">
                        <p>Nabaraj</p>
                    </div>
                    <div className="theme-changer" >
                        <>
                        <div className="theme-changer-1" onClick={()=>setThemeFlag(!themeFlag)}>

                        <p>{themeFlag?('Dark'):('Light')}</p>
                        {themeFlag?(
                            <img src='../../public/moon.png' width={25} />
                        ):(
                            <img src='../../public/sun.png' width={25} />
                        )}
                        </div>
                        </>
                        
                    </div>

                </div>

                <div className="input-1">
                    <div className="search-bar">
                        <div className="serach-field">
                            <img src='../../public/searchicon.png' width={20}/>
                            <input type='text'
                            placeholder='Search Github user name...'
                            onKeyPress={(e)=>handleKeypress(e)}
                            value={userQuery}
                            onChange={(e)=>setUserQuery(e.target.value)}
                            />
                        </div>
                        <div className="search-button">
                            <button onClick={()=>fetchData()}>Search</button>
                            </div>
                        </div>
                </div>

                <div className="user-details">

                    <div className="user-details-1">
                        <div className="user-detail-1-1">
                            <div className="user-image">
                                <img src={user.avatar_url} width={100}/>
                            </div>

                            <div className="user-detail-1-1-1">
                                <ul>
                                    <li><h4>{user.name}</h4>                                    </li>
                                    <li><h5>@{user.login}</h5>                                    </li>
                                    <li><p>{user.created_at}</p>                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="user-bio">
                            <p>{user.bio}</p>
                        </div>

                        <div className="user-detail-1-2">
                            <ul>
                                <li><p>Repos</p><h5> {user.public_repos}</h5></li>
                                <li><p>Followers </p><h5>{user.followers} </h5></li>
                                <li><p>Following </p><h5>{user.following} </h5></li>
                            </ul>
                        </div>
                        <div className="user-detail-content">
                            <ul>
                                <li><img src='../../public/location.png' width={25}/><p>{user.location}</p></li>
                                <li><img src='../../public/chain.png' width={25}/><p><a href={user.url}></a>{user.url}</p></li>
                                <li><img src='../../public/twitter.png' width={25}/><p>{user.twitter_username===null?(<>Not Available</>):(<>{user.twitter_username}</>)}</p></li>
                                <li><img src='../../public/company.png' width={25}/><p>{user.company===null?(<>Not available</>):(user.company)}</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
        </>
    )
}



export {Home};

