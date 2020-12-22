import React from "react";
import { Link } from "react-router-dom";

class NotLogIn extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        recipes: []
      };
    }

    componentDidMount() {
        const url = "/api/v1/recipes/index";
        fetch(url)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => this.setState({ recipes: response }))
          .catch(() => this.props.history.push("/"));
    }

    render() {
        const { recipes } = this.state;
        const allRecipes = recipes.map((recipe, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="card mb-4">
              <img
                src={recipe.image}
                className="card-img-top"
                alt={`${recipe.name} image`}
              />
              <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>
                <Link to={`/det/${recipe.id}`} className="btn custom-button">
                  View Recipe
                </Link>
              </div>
            </div>
          </div>
        ));
        const noRecipe = (
          <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
            <h4>
              No recipes yet. Why not <Link to="/new_recipe">create one</Link>
            </h4>
          </div>
        );
    
        return (
          <>
            <section className="jumbotron jumbotron-fluid text-center">
              <div className="container py-5">
                <h1 className="display-4">Recipes</h1>
                <p className="lead text-muted">
                  Here are all the recepes providet with our user help. You can freely read about them an make anything you like
                </p>
              </div>
            </section>
            <div className="py-5">
              <main className="container">
                <div className="row">
                  {recipes.length > 0 ? allRecipes : noRecipe}
                </div>
                <Link to="/" className="btn btn-link">
                  Home
                </Link>
              </main>
            </div>
          </>
        );
      }
  
  }
  export default NotLogIn;