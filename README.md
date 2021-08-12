# React App: The Unofficial Rupedia
## _Platzi exercise_

¡Hola mundo!

I'm a  huge fan of RuPaul's Drag Race so, when I was asked to develop a  React  App with any Api, I went straight to the [No Key No Shade API](https://drag-race-api.readme.io/docs) and started to work. 💅 

The APP allows you to see and search every single queen that has been part of RuPaul's Drag Race until season 11. User can search for an specific queen, add as much queens as it wants to a favorite list ⭐ and, if a queen is clicked, user's gonna be able to read the most famous quote 💬 the queen said during the show. 

Also for the dark mode lovers 🌛 I added, as requested, a theme toggle that takes you from PinkLand to PurpleZone 🌚

<img src="https://user-images.githubusercontent.com/81619759/129209019-f7ab7bd2-c999-478d-bde3-f1099eb012e8.png" alt="home view" width="400"/><img src="https://user-images.githubusercontent.com/81619759/129210918-22aea7b6-884d-4d95-9058-7fe76cccd1f7.png" alt="favorite darkmode" width="400"/> 



## Some Requirements 📋

- Create a react app
- Server Side Render
- API call must be made with Node
- Add a search bar
- Filter and arrange the list
- Add a favorite list
- Add a theme switch
- Add unitary test
- Must be indexable
- Responsive

## Extra features 🌟

- Add a local storage that keeps API information and favorite list
- Add a scroll up button to navigate to the top of  the screen
- Gives an answer when search input does not exist 
- Gives an answer when page does not exist 
- Add an element for when there are no favorite queens

## Built with 🔨
- Visual Code Studio: as code editor
- SASS
- React
- Node

## Development ⌨️

As I do in all my projects I started doing a simple kanban board to organize all the tasks and also a manual wireframe🖍️ to have a general idea of  how I wanted the app to look like. As I'm no designer I helped myself with some online tools  like [color-hex](https://www.color-hex.com/) to define my palettes so this way I could focus on the code. 

After doing that, the coding was pretty smooth because I had some idea of how to approach everything. First of all I created my react-app and installed SASS because I find that SASS along with BEM methodology helps me to have a cleaner CSS code because of the nesting. 

With SASS up, it was component time. I tried my best to separate all my components in a way that they do one thing, they can be repurposed and also to be easy to understand🗃️.

When developing my components I avoided to repeat code, for so I created some objects to render beyond the API, for example the menu items 

<img src="https://user-images.githubusercontent.com/81619759/129214176-eae6e81f-d705-4a3b-b963-3b1c13683b27.png" alt="code to render menu" width="600"/> 


### My favs 💖

There are a couple things I did in the development that I'm really proud of because I learned a lot doing them and I really think make the diference.

🔼**Go top button**🔼


This component is one of my personal library. As I was doing my portfolio and while scrolling in a WhatsApp conversation I noticed the arrow button that allows you to go down in the conversation and I thought that was brillian so I coded a "Go top" 🔝 component that I now like to use in my apps when necessary. 

I think this functionality makes the diference for the user and is a little detail that makes the app looks polished. 

This funcion needs the useRef() hook, and some other extra functions, one to handle the position so the button is only visible at certain scrolling point, the handler for the button and at last a scroll listener. 🖱️

🌞**Theme toggle**🌚

This is a first time. Until now, I've never done a theme switch so I was pretty excited about this.

My approach to it was to do a random element (I literally did  a `<p>DarkMode</p>`) to work with as functionality is initially more  important. For functionality I created to states, one for the mode and another for the `body` both of them with boolean values.

The handler for the button does 3 things: 
✔️ Changes the mode state
✔️ Changes the body state
✔️ Calls a setBackground function

The setBackground function changes the body of the App according to the body state, this way, all the background of my app goes dark. Other styles aree managed via a simple const called "isDark" `
  const isDark = mode === false;` that is sended via props to other components,  that way if isDark, the classes change, whereas colours also change🌈 `className={props.isDark ? "apiList__card--content-name" : "apiListD__card--content-name" }`
  
 When everything worked smoothly I coded the button.

<img src="https://user-images.githubusercontent.com/81619759/129216639-26545870-f242-4699-b572-3c58acb98723.gif" alt="gif that shows theme toggle" width="600"/> 

### My challenges 🚩

As a junior there are a lot of things I do not know...yet💪! but I really love trying things. I had 3  main challenges one of them out of my reach, another that I kinda sorted and the last one goes to my **must learn** list.

👩🏻‍💻 Unitary test: Until now I've never done an unitary test. Yes, until now, because as I read the 
requirement list I said to myself  that I wanted, at  least to do one test, and after a lot of reasearch I was able to do one!💪 I took me  a lot, but I'm proud and know that I will be able to learn more about it.

🖥️ API fails: The api I chose is great, but the server tends to send errors from time to time, not ideal, but it's  out of my reach to fix.

😢 Server Side Render: Sadly this was little too much to chew. Before the requirement I'd never heard about it, and when I read it I thought "this is just genius ✨" and after using an API like the one I'm using I can understand how important it would  be  for SEO but also for user experience the fact that the App Renders before. However I was not able to do it on my own without prior knowledge but I definetly added this to my list of **must learn** things as I understand the importance of it.


## Run my code 🔧

Install dependencies
`npm install` 

Run it
`npm start`

## Codefactor 

[![CodeFactor](https://www.codefactor.io/repository/github/silviaespanagil/rupedia/badge?s=3ea7a798ad97a8f0d70e440c7bb4b819328ac092)](https://www.codefactor.io/repository/github/silviaespanagil/rupedia)
