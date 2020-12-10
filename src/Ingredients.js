import React from 'react';


class Recipe extends React.Component{
    render() {
    return React.createElement(
    'li',
{ key: this.props.index},
    this.props.name
    )}
}


class RecipeList extends React.Component {
    renderRecipeList(){
    return this.props.recipes.map((recipe, i) =>
    React.createElement(Recipe, { index: i, name: recipe }, null)
    )}

    render() {
    return React.createElement(
    "ul",
{'class-name': 'ingredient'},
    null,
    this.renderRecipeList()
    );}

}


export {RecipeList as default}