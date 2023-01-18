import React, { useState, useEffect } from 'react';
import './Header.styles.css';

function Header() {
  const [suggestions, setSuggestions] = useState([
    'Channel',
    'YouTube',
    'YouTuber',
    'YouTube Channel',
    'Blogger',
    'Bollywood',
    'Vlogger',
    'Vechiles',
    'Facebook',
    'Freelancer',
    'Facebook Page',
    'Designer',
    'Developer',
    'Web Designer',
    'Web Developer',
  ]);
  const [inputValue, setInputValue] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [webLink, setWebLink] = useState('');

  useEffect(() => {
    const searchWrapper = document.querySelector('.search-input');
    const inputBox = searchWrapper.querySelector('input');
    const suggBox = searchWrapper.querySelector('.autocom-box');
    const icon = searchWrapper.querySelector('.icon');
    let linkTag = searchWrapper.querySelector('a');
    inputBox.onkeyup = (e) => {
      let userData = e.target.value;
      setInputValue(userData);
      let emptyArray = [];
      if (userData) {
        icon.onclick = () => {
          setWebLink(`https://www.google.com/search?q=${userData}`);
          linkTag.setAttribute('href', webLink);
          linkTag.click();
        };
        emptyArray = suggestions.filter((data) => {
          return data
            .toLocaleLowerCase()
            .startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
          return (data = `<li>${data}</li>`);
        });
        searchWrapper.classList.add('active');
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll('li');
        for (let i = 0; i < allList.length; i++) {
          allList[i].setAttribute('onclick', 'select(this)');
        }
      } else {
        searchWrapper.classList.remove('active');
      }
    };

    function select(element) {
      let selectData = element.textContent;
      setInputValue(selectData);
      icon.onclick = () => {
        setWebLink(`https://www.google.com/search?q=${selectData}`);
        linkTag.setAttribute('href', webLink);
        linkTag.click();
      };
      searchWrapper.classList.remove('active');
    }
    function showSuggestions(list) {
      let listData;
      if (!list.length) {
        listData = <li>${inputValue}</li>;
      } else {
        listData = list.join('');
      }
      suggBox.innerHTML = listData;
    }
  }, [inputValue, webLink, suggestions]);

  return (
    <>
      <section class="section-hero home-section">
        <div class="hero">
          <div className="wrapper">
            <div className="search-input">
              <a href="" target="_blank" hidden></a>
              <input type="text" placeholder="Type to search.." />
              <div className="autocom-box">
                {/* here list are inserted from javascript */}
              </div>
              <div className="icon">
                <i class="bx bx-search" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
