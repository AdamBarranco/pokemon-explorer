## Pokemon Explorer - Adam Brows

## Project Setup & Running Instructions

1. git clone https://github.com/AdamBarranco/pokemon-explorer

2. cd pokemon-explorer 

3. npm install

4. npm run dev

5. Open http://localhost:3000 

## Design and Component Decisions
The structure of the components 

Shadcn was utilsed within this application using components such as card, button, input, progress, seperator and spinner. The card component was utilsed to be able to format the custom cards to correlate to the figma design.

I had made minor changes to the figma design such as implementing the back button on the searched pokemon to return the original pokemon list, as well as disabling the next button if the page <2 this was to prevent the incrementation when pressing the button. Also, an addition to the input validation to show red border if the pokemon isnt found.

## State Management Approach
To handle the state of the of the application such as the pokemon list I have implemented the hook useState, this has enabled me to set the pokemonList using setPokemonList and retrieve that data with pokemonList the usage of the useState allows the UI to render when a change is made to the data.

Pagination was handled via the hook useState with the page acting as the state and setting the page number to change the state of the page for example the page is set to 1 acting as the home page, when the next button is clicked the page is incremented to change the page number therefore updating the pokemonList to the next 12 pokemons. The search page was asigned to page 0 as the page design and layout was the same as the landing page making it more efficent to update the list to the searched pokemon and display 

The handling of the pokemonDetailsPage was implemented the via hook useRouter this allows me to pass the pokemons name and id which is retrived using searchParams, this data is then used to retieve the specific pokemons data.

## API Interaction Strategy
I have used helper functions within the services folder to interact with the pokemon api and retrieve the data provided along with a helper function to handle the responses status codes which were tested with vitest to validate for the components, this data is then formatted for easy use when used in the components.

To handle the calling of the async functions I have implemented the hook useEffect, this hook can create an request to an api once the component is rendered.

## Challenges Encountered & Solutions

Challengs mainly occured when developing the UI, for example formating the cards within the pokemon detail page was hard to implement, however after research I had found a solution such as implememting a grid to place the cards in the correct format.

Another technical challenge was finding the correct data within the api endpoints, for example having to use different endpoints to find the needed data for the pokemon details page. To solve this I had looked through the poke api to find the correct endpoints such as pokemon-species and type. Then I opened the endpoint to see the data that is returned and using the f3 tool to find specific data such as the weaknesses, gender, description ect which I could then format for use.

## Bonus Feature Implementation 
To implement the search feature I had taken the pokemon list that was stored and checked the name of the pokemon against the list to see if it was within the list and then updated the seachPokemonList to the searched pokemon, the decision for another list was if a filter or order feature is later implemented.

To display the images I had called the sprite from the api and formatted so I could retrive it easily.

The loading state indicator was implement using the hook useState to setLoading and then call that state as well as the shadcn spinner component was implemented for the UI. Also a delay was used to demonstrate the spinner, if made production this would be removed.

## Self-Reflection & Potential Improvements (Optional but Valued)

The part of the solution I am most proud of is the structuring of the pokemons data, the data was formatted making it easy to implement into the ui components. Another part I am proud of is the code quality, I believe that is readable and clean due to refactoring the react pages to be less noisey using the components and functions to call within the page also within the components and ts files. Comments were utilse where neccessary.

Improvements I would make would be minor tweeks to the ui such as more space between the pokemons on the landing page
