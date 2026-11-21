import recipeData from '../../data/recipeData'
import Nav from '../nav/Nav'
import styles from './Recipes.module.css'

const Recipes = () => {
  return (
    <>
      <aside>
        <Nav />
        <h1>The cookbook</h1>
        <p>here's some recipes</p>
      </aside>
      <main id="content" className={styles.recipeContainer}>
        {RecipePages()}
      </main>
    </>
  )
}

const RecipePages = () => {
  let [pages, dinnerLinks, lunchLinks, treatLinks] = [[],[],[],[]]
  let recipeLink = ''

  recipeData.forEach(recipe => {
    pages.push(RecipePageSpread(recipe))
    recipeLink = <li key={recipe.id + "-link"}><a href={'#' + recipe.id}>{recipe.name}</a></li>
    switch (recipe.type) {
      case "Lunch":
        lunchLinks.push(recipeLink)
        break
      case "Treat":
        treatLinks.push(recipeLink)
        break
      default:
        dinnerLinks.push(recipeLink)
        break
    }
  })

  return (
    <>
      <div className={styles.book} id={styles.start}>
        <div className={styles.pageL}>
          <h2>Dinner</h2>
          <ul>{dinnerLinks}</ul>

          <h2>Lunch</h2>
          <ul>{lunchLinks}</ul>

          <h2>Treat</h2>
          <ul>{treatLinks}</ul>
        </div>
        <div className={styles.seam} />
        <div className={styles.pageR} />
      </div>
      {pages}
    </>
  )
}

const RecipePageSpread = (recipe) => {
  return (
    <div className={styles.book} id={recipe.id} key={recipe.id}>
      <div className={styles.pageL}>
        <h1>{recipe.name}</h1>
        <p>Serves: {recipe.serves}</p>
        <h2>Ingredients</h2>
        <ul>{recipe.ingredients.map((ing, ind) => <li key={`${recipe.id}-ing-${ind}`}>{ing}</li>)}</ul>
      </div>
      <div className={styles.seam} />
      <div className={styles.pageR}>
        <h2>Instructions</h2>
        <ol>{recipe.instructions.map((ins, ind) => <li key={`${recipe.id}-ins-${ind}`}>{ins}</li>)}</ol>
        <div className={styles.pageTurn}><a href="#start">&lt;- back</a></div>
      </div>
    </div>
  )
}

export default Recipes
