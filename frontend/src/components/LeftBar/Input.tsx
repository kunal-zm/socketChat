import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './Left.scss'
interface ISearchProps {
}

const Search: React.FunctionComponent<ISearchProps> = (props) => {
    return (
        <div className='search'>
            <form>
                <input type='text' placeholder='search for someone'></input>
                {/* onclick the api will be fired and it will lookup in the db */}
                <SearchIcon className='icon' />
            </form>
            <div className='searchData'>
                {/* the person will be display here if the person found in the database */}
            <img src="https://w7.pngwing.com/pngs/782/115/png-transparent-avatar-boy-man-avatar-vol-1-icon-thumbnail.png" alt=""/>
            <div className='messageSearch'>
                    <p>Kunal</p> 
                    <span>Last message</span>
                </div>
            </div>
        </div>
    );
};

export default Search;
