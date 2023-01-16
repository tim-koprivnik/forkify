class SearchView {
  _parentElement = document.querySelector('.search');
  _errorMessage = 'No recipes found for your query! Please try again :)';
  _message = '';

  getQuery() {
    const query = this._parentElement.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentElement.querySelector('.search__field').value = '';
  }

  _clearResults() {
    this._parentElement.querySelector('.results__list').innerHTML = '';
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
