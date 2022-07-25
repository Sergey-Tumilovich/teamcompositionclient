# Football Team Composition

This is a project made with React/Redux on client side,
with a JSON server database as backend.

## The Database and Data Structure
The JSON database has two sheets:
- Players, where players are stored;
- Teams, where teams are stored;
- - Players in the teams are stored inside Teams [] as a 2nd level list

## API
This project uses Axios to perform requests to a database.

## Client functionality
- Full CRUD operations for Players and Teams;
- Ability to add players to a team and remove them.

## Client features
- Implemented RESTful conventions for database requests;
- Full CRUD support for Players and Teams;
- Separate pages for creating and editing Players and Teams
done with programmatic navigation and routing.

## Styling
This project uses Semantic UI styles and icons as dummy styles.
I made sure it looks decent, but didn't intend to do it responsive.

## Used Libraries
- Redux for using required logic when managing state of the app;
- lodash for working with complex objects;
- BrowserHistory for tracking navigation;
- ReduxForm for handling all forms.

## How to launch
### In case it has been sent to you as an archive:
- Open the project folder from the archive;
- Open terminal for server and client folders
- npm start server and npm run build client

### In case it is deployed to GitHub pages
Since GitHub doesn't support client-side routing and I had no skills and time to set up a full-functional backend, you may have to launch the project from the archive.

check for repos for code review:
- - server: https://github.com/Sergey-Tumilovich/teamcompositionserver
- - client: https://github.com/Sergey-Tumilovich/teamcompositionclient

## Known issues
- There is an issue which prevents TeamFormView to update properly,
and I didn't have time to fix it. Please select a Team Composition
dropdown to manually update TeamFormView after you've added a player to 
the team.