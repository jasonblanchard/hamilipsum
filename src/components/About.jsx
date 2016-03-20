import React from 'react';

import './About.scss';

const About = () => {
  return (
    <div className="About">
      <h1>Hamil Ipsum</h1>
      <div role="main">
        <p>
            How does a useless, overdone, randomized, silly little idea droped in the middle of a forgotten spot in Philadelphia as open source (and free, of course) by some dude, get writtin in React pushed up to Github?
        </p>
        <p>
          Well, <a href="https://github.com/jasonblanchard/hamilipsum" target="_blank">check out the source</a>.
        </p>
        <p>Written by <a href="http://about.blanktech.net/#/about" target="_blank">Jason Blanchard</a>, a big fan of <a href="https://www.youtube.com/channel/UCKhSqWRvBtjlivrs_xeT5aQ/videos" target="_blank">Hamilton</a>. Credit where credit's due: idea and interface inspired by <a href="http://littleipsum.com/" target="_blank">LittleIpsum</a> and <a href="http://hipsum.co/" target="_blank">Hipster Ipsum</a>.</p>
      </div>
    </div>
  );
};

export default About;
