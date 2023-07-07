const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};
const signupLoginLink = document.getElementById('signup-login-link');
const signupLoginContent = document.getElementById('signup-login-content');

signupLoginLink.addEventListener('click', function(event) {
  event.preventDefault();
  signupLoginContent.style.display = 'block';
});
const searchInput = document.getElementById('search-input');
const searchSuggestions = document.getElementById('search-suggestions');
const searchButton = document.getElementById('search-button');

// Function to perform search based on user input
function performSearch(query) {
  // Replace with your own search logic
  // Use the query to search for books based on various fields
  // Display the search results
  const books = [
    { title: "Jane Eyre", author: "Smith, Elder & Co. of London", genre: "Fiction", year: 1847 },
    { title: "Between the World and Me", author: "Spiegel & Grau", genre: "Non-Fiction", year: 2015 },
    // Add more books to the array
  ];
  const searchResults = books.filter(book => {
    const lowerQuery = query.toLowerCase();
    const lowerTitle = book.title.toLowerCase();
    const lowerAuthor = book.author.toLowerCase();
    const lowerGenre = book.genre.toLowerCase();
    const year = book.year.toString();
	return (
		lowerTitle.includes(lowerQuery) ||
		lowerAuthor.includes(lowerQuery) ||
		lowerGenre.includes(lowerQuery) ||
		year.includes(lowerQuery)
	  );
	});

  console.log('Search query:', query);
}

// Function to update search suggestions
function updateSuggestions() {
  const query = searchInput.value.trim();
  if (query.length === 0) {
    searchSuggestions.innerHTML = '';
    searchSuggestions.style.display = 'none';
    return;
  }

  // Replace with your own logic to fetch search suggestions based on the query
  const preDefinedSuggestions = [
    "Book 1",
    "Book 2",
    "Author 1",
    "Author 2",
    "Genre 1",
    "Genre 2",
    "Year 1",
    "Year 2"
  ];
  const filteredSuggestions = preDefinedSuggestions.filter(suggestion =>
    suggestion.toLowerCase().includes(query.toLowerCase())
  );

  return filteredSuggestions;
}
  const suggestions = getSearchSuggestions(query);

  // Display the suggestions in the dropdown
  searchSuggestions.innerHTML = suggestions
    .map(suggestion => `<li>${suggestion}</li>`)
    .join('');
  searchSuggestions.style.display = 'block';


// Event listeners
searchInput.addEventListener('input', updateSuggestions);

searchSuggestions.addEventListener('click', function(event) {
  const selectedSuggestion = event.target.textContent;
  searchInput.value = selectedSuggestion;
  searchSuggestions.innerHTML = '';
  searchSuggestions.style.display = 'none';
});

searchButton.addEventListener('click', function() {
  const query = searchInput.value.trim();
  performSearch(query);
});

// Function to get search suggestions based on the query
function getSearchSuggestions(query) {
  // Replace with your own logic to fetch search suggestions based on the query
  const suggestions = [
    'Jane Eyre',
    'Between the World and Me',
    'Smith, Elder & Co. of London',
    'Spiegel & Grau',
    'Fiction',
    'Non-Fiction',
    '1847',
    '2015'
  ];

  return suggestions.filter(suggestion =>
    suggestion.toLowerCase().includes(query.toLowerCase())
  );
}
// Function to update the count of books
function updateBooksCount(count) {
	const booksCountElement = document.getElementById('books-count');
	booksCountElement.textContent = `Found ${count} books`;
  }
  
  // Function to perform search based on user input
  function performSearch(query) {
	// Replace with your own search logic
	// Use the query to search for books based on various fields
	// Update the count of books
	const searchResults = searchBooks(query);
	updateBooksCount(searchResults.length);
	// Display the search results
	displaySearchResults(searchResults);
  }
  
  // Function to filter books based on selected options
  function applyFilters() {
	// Replace with your own filter logic
	// Get the selected filter options
	const selectedFilters = getSelectedFilters();
	// Filter the books based on the selected options
	const filteredBooks = filterBooks(selectedFilters);
	// Update the count of books
	updateBooksCount(filteredBooks.length);
	// Display the filtered results
	displayFilteredResults(filteredBooks);
  }
  
  // Function to search books based on the query
  function searchBooks(query) {
	// Replace with your own logic to search for books based on the query
	// Return an array of search results
	// ...
  }
  
  // Function to filter books based on selected options
  function filterBooks(selectedFilters) {
	// Replace with your own logic to filter the books based on the selected options
	// Return an array of filtered results
	// ...
  }
  
  // Function to display the search results
  function displaySearchResults(results) {
	// Replace with your own logic to display the search results
	// ...
  }
  
  // Function to display the filtered results
  function displayFilteredResults(results) {
	// Replace with your own logic to display the filtered results
	// ...
  }
  