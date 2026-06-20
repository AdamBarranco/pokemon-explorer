## Pokemon Explorer - Adam Brows

## Project Setup & Running Instructions

1. git clone https://github.com/AdamBarranco/pokemon-explorer

2. cd pokemon-explorer 

3. npm install

4. npm run dev

5. Open http://localhost:3000 

## Design and Component Decisions
The components in the components folder implement the logic for the page components. The useState hooks are lifted to the pages, allowing the components to set parameters and interact with the UI indirectly.

Shadcn was utilised within this application using components such as Card, Button, Input, Progress, Separator, and Spinner. The Card component was utilised to format the custom cards so that they correlated with the Figma design.

I made minor changes to the Figma design, such as implementing a back button on the searched pokemon page to return to the original pokemon list, as well as disabling the Previous button when the page number is less than 2. This was done to prevent invalid page navigation. I also added input validation to display a red border when a pokemon is not found.

## State Management Approach
To handle the state of the application, such as the pokemon list, I implemented the useState hook. This enabled me to set the pokemonList using setPokemonList and retrieve the data through pokemonList. Using useState allows the UI to automatically re-render whenever the data changes.

Pagination was handled using the useState hook, with page acting as the state value. The page is initially set to 1, representing the home page. When the Next button is clicked, the page number is incremented, updating the pokemonList to display the next 12 pokemon.

The search page was assigned to page 0, as its design and layout are the same as the landing page. This made it more efficient to update the list with the searched pokemon and display the results.

The handling of the pokemonDetailsPage was implemented using the useRouter hook. This allows me to pass the pokemon's name and ID, which are retrieved using searchParams. This data is then used to retrieve the specific pokemon's details.

## API Interaction Strategy
I used helper functions within the services folder to interact with the pokeapi and retrieve data. I also created a helper function to handle response status codes, which were tested with Vitest to validate the functionality of the components. The retrieved data is then formatted for easier use throughout the application.

To handle asynchronous API calls, I implemented the useEffect hook. This hook allows requests to be made when a component is rendered.

## Challenges Encountered & Solutions

Challenges mainly occurred when developing the UI. For example, formatting the cards within the pokemon details page was difficult to implement. However, after some research, I found a solution by implementing a grid layout to position the cards correctly.

Another technical challenge was finding the correct data within the API endpoints. For example, I needed to use multiple endpoints to retrieve the required information for the pokemon details page. To solve this, I explored the poke api documentation and identified the appropriate endpoints, such as pokemon-species and type. I then examined the returned data and used the search functionality within my editor to locate specific fields such as weaknesses, gender, descriptions, and other information, which I then formatted for use within the application.

## Bonus Feature Implementation 
To implement the search feature, I used the stored pokemon list and checked whether the entered pokemon name existed within the list. If found, I updated the searchPokemonList with the matching pokemon. The decision to use a separate list was made to support future features such as filtering or sorting.

To display pokemon images, I retrieved the sprite URLs from the API and formatted the data so it could be accessed easily throughout the application.

The loading state indicator was implemented using the useState hook through setLoading. This state was used alongside the Shadcn Spinner component to provide visual feedback while data was loading. A delay was also added to demonstrate the spinner during development; however, this would be removed in a production environment.

## Self-Reflection & Potential Improvements (Optional but Valued)

The part of the solution I am most proud of is the structuring and formatting of the pokemon data. Organising the data in this way made it much easier to implement within the UI components.

Another aspect I am proud of is the overall code quality. I believe the code is readable and maintainable due to refactoring the React pages to reduce complexity by separating functionality into reusable components and helper functions. Comments were also utilised where necessary to improve clarity.

Potential improvements would include minor UI refinements, such as increasing the spacing between pokemon cards on the landing page. I would also implement filtering options to allow users to search by types, weaknesses, and other attributes. This could be particularly useful for users who play the pokemon card game and want to quickly identify pokemon strengths and weaknesses.
