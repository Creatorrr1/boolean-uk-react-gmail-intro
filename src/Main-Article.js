import MainArticleHD from './Main-Article-HD.js'
import MainArticleButtons from './Main-Article-Buttons.js'
import MainArticleImg from "./Main-Article-Img.js"

function MainArticle () {
    return (
        <article className="email-content">
        <div className="title">
          <h1>Welcome to Flaticon</h1>
        </div>
        <MainArticleHD/>
        <MainArticleImg/>
        <MainArticleButtons/>
      </article>
    )
}
export default MainArticle