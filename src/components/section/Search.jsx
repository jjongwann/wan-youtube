import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if(searchKeyword){
      navigate(`/search/${searchKeyword}`);
      setSearchKeyword('');
    }
  }

  return (
    <div id='search'>
        <div className='search__inner'>
            <label htmlFor='searchInput'>
                <span className='ir'>검색</span>
            </label>
            <input 
                type='search' 
                name='searchInput' 
                id='searchInput'
                placeholder='검색어를 입력해주세요' 
                autoComplete='off' //자동 완성 기능을 비활성화
                className='search__input'
                onChange={e => setSearchKeyword(e.target.value)} // 입력값이 변경될 때마다 setSearchKeyword 함수를 호출하여 searchKeyword 상태를 업데이트
                onKeyDown={e => { //키보드 입력을 감지하고, 'Enter' 키를 누르면 handleSearch 함수를 호출
                  if(e.key === 'Enter'){
                    handleSearch();
                  }
                }}
            />
        </div>
    </div>
  )
}

export default Search