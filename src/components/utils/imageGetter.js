import animationImg from '../../images/animation.png'
import cleanHistoryImg from '../../images/clean-history.png'
import destructuringImg from '../../images/destructuring.png'
import redesignImg from '../../images/redesign.png'
import sassImg from '../../images/sass.png'
import gitImg from '../../images/git.png'
import searchImg from '../../images/search.png'
import defaultImg from '../../images/default.png'
import netlifyImg from '../../images/netlify.png'
import heartMindImg from '../../images/mental-health.png'
import personLaptop from '../../images/person-on-laptop.png'
import programmerImg from '../../images/programmer.png'

const imageGetter = (slug) => {
  if (slug.match(/comparing-women-in-computing-with-women-in-stem-overall/)) {
    return programmerImg
  } else if (slug.match(/animate-page-transitions-with-fade-effect-in-gatsby/)) {
    return animationImg
  } else if (slug.match(/creating-a-single-production-ready-git-commit-from-multiple-commits/)) {
    return cleanHistoryImg
  } else if (slug.match(/what-is-destructuring-in-javascript/)) {
    return destructuringImg
  } else if (slug.match(/about-the-cristinio-redesign/)) {
    return redesignImg
  } else if (slug.match(/use-sass-to-automatically-convert-pixels-to-rems/)) {
    return sassImg
  } else if (slug.match(/create-a-command-line-alias-to-list-your-git-branches-by-most-recent/)) {
    return gitImg
  } else if (slug.match(/search-git-history-for-certain-words-and-phrases/)) {
    return searchImg
  } else if (slug.match(/automatically-build-and-deploy-your-gatsby-site-on-netlify-after-publishing-a-post-in-buttercms/)) {
    return netlifyImg
  } else if (slug.match(/perilous-confusion-and-the-opportunity-for-growth/)) {
    return heartMindImg
  } else if (slug.match(/a-curated-list-of-cheat-sheets-for-web-developers/)) {
    return personLaptop
  } else {
    return defaultImg
  }
}

export default imageGetter