const {createApp,ref}  = Vue;

createApp({
    data() {
        return{
            Services:[
                {icon: "fa-shopping-cart", heading:"E-Commerce", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."},
                {icon: "fa-laptop", heading:"Responsive Design", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."},
                {icon: "fa-lock", heading:"Web Security", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit"}
            ]
        }
    }
}).mount("#services");

createApp({
    data() {
        return{
            Portfolio:[
                {link:"#portfolioModal1",photo:"img/portfolio/roundicons.png",heading:"Round Icons", text:"Website Design"},
                {},
                {},
                {},
                {},
                {}
            ]
        }
    }
}).mount("#portfolio")