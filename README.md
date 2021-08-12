# React App: The Unofficial Rupedia
## _Platzi exercise_

¡Hola mundo!

I'm a  huge fan of RuPaul's Drag Race so, when I was asked to develop a  React  App with any Api, I went straight to the [No Key No Shade API](https://drag-race-api.readme.io/docs) and started to work. 💅 

The APP allows you to see and search every single queen that has been part of RuPaul's Drag Race until season 11. User can search for an specific queen, add as much queens as it wants to a favorite list ⭐ and, if a queen is clicked, user's gonna be able to read the most famous quote 💬 the queen said during the show.


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

- 

## Built with 🔨
- Visual Code Studio: as code editor
- SASS
- React
- Node

## Development ⌨️

For me it was  important that this was as real as any project so first thing first I created a GitHub Project to keep track of my tasks and prioritize them as better as I could 📝. It has four columns: "To Do", "Doing" and "Done", the fourth is "Info" where I wrote down some information I wanted to save for myself as something new that I  learned or the funcionality of a package I installed. 

I also created some tags 🏷️ to make it easy to understand what the task was about: "Structure", "Improvements", "Styles", "Data", "Rewatch", "Documentation", "Won't do". 

<img src="https://user-images.githubusercontent.com/81619759/128333358-666018bc-75eb-4a46-bc20-512dedc64207.png" width="400"/>

After doing that, the coding was pretty smooth because I had some idea of how to approach everything. First of all I installed SASS because I find that SASS  along with BEM 
methodology helps me to have a cleaner CSS code because of the nesting. 

With SASS up, it's component time. Each part of the portfolio has it's own component so they could be reusable in other projects if I want to. I also added a  Data folder 🗃️ with two JSON files one with the facts for my "Facts" component and another with my Projects. This guarantees a 🛠️low maintenance code🛠️ as if I want to make further changes such as adding or removing things I only have to manipulate de JSON. 

![image](https://user-images.githubusercontent.com/81619759/128336864-3d11f9d1-6a7d-44f1-b785-d20d1bfb5706.png)


### My favs 💖

There are a couple things I did in the development that I'm really proud of because I learned a lot doing them and I really think make the diference.

🙋**Random Facts**🙋

This component is one of my favorites 💘. I wanted to show something about **me** as the person beyond the developer and had this pretty fun idea.

The component shows a random fact rendered from a JSON. The logic 🧠 behind it is that I map the JSON, run a random number generator function -number generated is and can't be longer than the JSON length- and render the fact calling the random number as the index.

The cherry on top🍒 is the shuffle button that pics a new fact and so it renders a new fact.

<img src="https://user-images.githubusercontent.com/81619759/128335135-65e1bc14-7a6e-43b7-82b1-8e4db8945442.gif" width="400"/><img src="https://user-images.githubusercontent.com/81619759/128339100-d9bb57e7-bc27-4e01-9f1b-a61d753067e3.png" width="600"/>


🔼**Go top button**🔼


As I was scrolling in a WhatsApp conversation I noticed the arrow button that allows you to go down and I thought that the Portfolio really needed a button that scrolls to the top of the page 🔝. 

I think this functionality makes the diference for the user and is a little detail that makes the portfolio looks polished. 

This funcion needs the useRef() hook, and some other extra functions, one to handle the position so the button is only visible at certain scrolling point, the handler for the button and at last a scroll listener. 🖱️

PD: I'm thinking of doing an NPM  for  this component.


🍔**Burger Menu**🍔


I know that technically I didn't do the menu, but it's my first time using a package by my own, with no more help than the documentation and I added a extra pizzaz ✨ to it.

I decided to use 🍔[Burger Menu](https://www.npmjs.com/package/react-burger-menu) package but with this menu, when the user chooses an option from the menu, the menu does not close and that is  not very friendly.  So I added a funcion that closes the menu when any item of the nav is clicked.

![Silvia's Portfolio (1)](https://user-images.githubusercontent.com/81619759/128342280-b8d1c857-60e1-4c96-b9de-47c47637a0f0.gif)


## Want to clone my repository? 🐑🐑

Go for it! And if you make something pretty, please show me

## Do you have any idea? ✏️

I'm an student and as I stated before am learning a whole lot of Front End Developing, so, if  you have any idea that I could develope please tell me so and I will try to.

## License

MIT

## Codefactor

[![CodeFactor](https://www.codefactor.io/repository/github/silviaespanagil/portfolio/badge)](https://www.codefactor.io/repository/github/silviaespanagil/portfolio)
