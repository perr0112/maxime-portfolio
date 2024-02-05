import React, { useState } from 'react';
import { tagsAvalaible, miniatures, affiches, branding } from '../data/portfolio';
import './Portfolio.scss';

import transition from '../data/transition';

const dataByTag = {
  miniature: miniatures,
  affiche: affiches,
  branding: branding,
};

function Tag({ infos, setActiveTag, active }) {
  return (
    <div className='tag' onClick={() => setActiveTag(infos.tag)}>
      <p className={active === infos.tag ? 'active' : ''}>{infos.name}</p>
    </div>
  );
}

function Portfolio() {
  const [activeTag, setActiveTag] = useState(tagsAvalaible[0].tag);
  const [data, setData] = useState(dataByTag[tagsAvalaible[0].tag]);
  const [isLoading, setIsLoading] = useState(false);

  const handleTagClick = (tag) => {
    setIsLoading(true);
    setActiveTag(tag);

    setTimeout(() => {
      setData(dataByTag[tag]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className='portfolio'>
        <div className='header-portfolio'>
            <div className="elipse"></div>
            <h1>Portfolio</h1>
            <div className='buttons'>
            {tagsAvalaible.map((tag, index) => (
                <Tag
                infos={tag}
                key={index}
                setActiveTag={handleTagClick}
                active={activeTag}
                />
            ))}
            </div>
        </div>
        <div className='data'>
        {isLoading ? (
          <p>Chargement...</p>
        ) : (
            <div className='images'>
                {data.map((item, index) => (
                    <div className='img'>
                        <img className={item.name} src={`${process.env.PUBLIC_URL}/assets/portfolio/${item.path}`} alt={item.name} key={index} />
                    </div>
                ))}
            </div>
        )}
        </div>
    </div>
  );
}

export default Portfolio;
