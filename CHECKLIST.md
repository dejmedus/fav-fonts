**Requirements**

*Structure*

- [X] Header with minor navigation *(Logo and Catalog/Featured/Articles/About link list)*
- [X] Nav with Major navigation / page-manipulation *(search, custom text, font-size, dark/light mode, ~~grid/list mode~~, and reset)*
- [X] Main section for the font cards
- [X] Font cards which display the Font Name, the sample text, ~~add button (the font creator is not available via the api, so it is **not** required in tiers 2 or 3)~~ - click on font name to navigate to Google fonts.
- [X] Button that allows user to click and scroll back up to the top *(there could be up to 959 fonts displayed, so you need this!)*
- [X] Footer section with your developer information

*Style*

- [X] Sample text in each card should be displayed in the corresponding font
- [X] Buttons/links should be evident (make sure the cursor changes, etc.)
- [X] Implement a way to handle overflow from sample text in font cards, as the font size is adjustable

*Functionality*

- [X] Text typed into the custom text (type something) box should immediately change the sample text in each font card
- [X] The sample text should return to the default sample if the input box (type something) no longer has any input
- [X] Font size chooser should have at least four sizes and should immediately change the sample text font size in each font card
- [X] Implement the 'reset' icon on the far right of the major navigation; it should reset the page as if it were reloaded *(do not actually reload the page)*
- [X] On load, the page should display fonts sorted by current popularity, as returned by the Google Fonts Developer API *(see below)*; this call should be server-side
- [X] The search feature should be fully functional and display matching fonts (it's up to you if you want to do this via a 'submit' or through onchange)
- [X] When the search input is cleared (via reset button or manually), the fonts should automatically display sorted by polarity again
- [X] Fonts from the Developer API should be retrieved on the back-end and sent to the client *(see below)*
- [X] StyleSheet requests from the Google Fonts API can be compiled on either the front or the back

*Other*

- [X] Your repo needs to have a robust README.md
- [X] Make sure that there are no errors in the developer console before submitting (Except: `Warning: Extra attributes from the server: style` - which I assume is caused by one of my browser extensions)

**Extras (Not Required)**

- [ ] ~~Make your design fully responsive (small/large/portrait/landscape, etc.)~~
- [X] Implement the light/dark mode toggle buttons
- [ ] ~~Implement the change display icon so you can flip between a grid layout and a list layout for the font cards~~
- [ ] ~~User creation and authentication: Add a login button to the page that allows registered users to login, or prompts new users to register. Once a user is authenticated, display somewhere on the page that they are logged in.~~
- [ ] ~~Add a favorites feature with back-end persistence: one example of this would be to use cookies to point to the user's favorite list in your database. You'll need to add a "see favorites" button somewhere to toggle between the view of the user's favorite fonts and the searches / popularity sort.~~
