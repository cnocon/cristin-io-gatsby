import React, { useEffect } from 'react'
import { RotateWords, RotateWordsWrapper } from './Intro.styles'
import $ from 'jquery'

const Intro = () => {
  const rotateWords = () => {
    const rotate_words = $('.rotate-words');

		if (rotate_words.length) {
      rotate_words.each(function(index, element) {
        $(element).find('span').eq(0).addClass('active');

        setInterval(function(){
          const next_word_index = $(element).find('.active').next().length ? $(element).find('.active').next().index() : 0;

          $(element).find('.active').addClass('rotate-out').removeClass('rotate-in active');

          $(element).find('span').eq(next_word_index).addClass('rotate-in active').removeClass('rotate-out');
        }, 3000);
      });
		}
  }

  useEffect(() => {
    rotateWords()
  }, [])

  return (
    <RotateWordsWrapper>
      <RotateWords className="rotate-header">
        Hi. I'm&nbsp;
        <span className="rotate-words">
          <span className="rotate-out">a&nbsp;web developer.</span>
          <span className="rotate-out">a&nbsp;programming tutor.</span>
          <span className="rotate-out">an&nbsp;animal lover.</span>
          <span className="rotate-out">a&nbsp;freelancer.</span>
          <span className="rotate-in active">an&nbsp;avid learner.</span>
          
        </span><br/>
        I live and work in beautiful Utah.<br/>
        I love <strong>coding</strong> new things.<br/>
      </RotateWords>
    </RotateWordsWrapper>
  )
}

export default Intro
