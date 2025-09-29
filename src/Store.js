import { configureStore, createSlice } from "@reduxjs/toolkit";
import Drinks from "./Drinks";
import Orders from "./Orders";

const productsSlice = createSlice({
    name:'products',
    initialState:{
        Veg:[  
             {id:101,  name:"Tomato",                 price:45.0,    imageUrl:"public/images.jsx/tomato.jpg",               description:"Juicy ready to use in your dishes..."},
             {id:102,  name:"Potato",                 price:35.0,    imageUrl:"public/images.jsx/potato.jpg",               description:"Starchy perfect for any meal..."},
             {id:103,  name:"Brinjal",                price:50.0,    imageUrl:"public/images.jsx/brinjal.jpg",              description:"Full of flavor packed with nutrients..."},
             {id:104,  name:"Beetroot",               price:75.0,    imageUrl:"public/images.jsx/beetroot.jpg",             description:"Beetroot is a nutrient-rich root ..."},
             {id:105,  name:"Spinach",                price:65.0,    imageUrl:"public/images.jsx/spinach.jpg",              description:"Brain-boosting, rich in vitamins ..."},
             {id:106,  name:"Greenbeans",             price:55.0,    imageUrl:"public/images.jsx/greenbeans.jpg",           description:"Fiber-rich  nutrient-dense for  heart..."},
             {id:107,  name:"Bitterguard",            price:45.0,    imageUrl:"public/images.jsx/bittergourd.jpg",          description:"Regulates blood sugar boosts immunity..."},
             {id:108,  name:"Cabbage",                price:60.0,    imageUrl:"public/images.jsx/cabbage.jpg",              description:"Anti-inflammatory, gut health..."},
             {id:109,  name:"Cauliflower",            price:70.0,    imageUrl:"public/images.jsx/cauliflower.jpg",          description:"Low-carb, antioxidant-rich for weight ..."},
             {id:110,  name:"Carrot",                 price:90.0,    imageUrl:"public/images.jsx/carrots.jpg",              description:"A good source of fiber, vitamin K1..."},
             {id:111,  name:"Radish",                 price:70.0,    imageUrl:"public/images.jsx/radish.jpg",               description:"Rich in vitamin C, potassium..."},
             {id:112,  name:"Mushroom",               price:120.0,   imageUrl:"public/images.jsx/mushroom.jpg",             description:"low-calorie fungi of nutrients..."},
             {id:113,  name:"Broccoli",               price:110.0,   imageUrl:"public/images.jsx/broccoli.jpg",             description:"Helps strengthen immunity stress..."},
             {id:114,  name:"Okra ",                  price:59.0,    imageUrl:"public/images.jsx/okra.jpg",                 description:"Low calorie, rich in fiber, minerals..."},
             {id:115,  name:"Celery",                 price:95.0,    imageUrl:"public/images.jsx/celery.jpg",               description:"Rich in fiber and micronutrients..."},
             {id:116,  name:"Capsicum",               price:55.0,    imageUrl:"public/images.jsx/capsicum.jpg",             description:"Rich in vitamins A, C, fiber..."},
             {id:117,  name:"Coriander",              price:25.0,    imageUrl:"public/images.jsx/coriander.jpg",            description:"Rich in antioxidants, vitamins..."},
             {id:118,  name:"Onion",                  price:30.0,    imageUrl:"public/images.jsx/onions.jpg",               description:"Rich in vitamins (C, B6), and minerals..."},
             {id:119,  name:"Garlic",                 price:150.0,   imageUrl:"public/images.jsx/garlic.jpg",               description:"Boosts immunity, heart health..."},
             {id:120,  name:"Ginger",                 price:200.0,   imageUrl:"public/images.jsx/ginger.jpg",               description:"Reduces nausea,anti-inflammatory effects..."},  
        
        
            ],

        NonVeg:[
             {id:101,  name:"Chicken",                price:200.0,   imageUrl:"public/images.jsx/chicken.jpg",                 description:"Hearty and aromatic chicken curry"},
             {id:102,  name:"Mutton",                 price:1500.0,  imageUrl:"public/images.jsx/mutton.jpg",                  description:"Rich in protein, iron, and vitamin B12"},
             {id:103,  name:"Fish",                   price:500.0,   imageUrl:"public/images.jsx/fish.jpg",                    description:"High in protein, omega-3 fatty acids"},
             {id:104,  name:"Prawns",                 price:700.0,   imageUrl:"public/images.jsx/prawns.jpg",                  description:"Low in calories, high in protein"},
             {id:105,  name:"Egg",                    price:150.0,   imageUrl:"public/images.jsx/egg.jpg",                     description:"Nutrient-dense, high-quality proteins"},
             {id:106,  name:"Chicken Biryani",        price:600.0,   imageUrl:"public/images.jsx/Chicken Biryani.jpg",         description:"Flavorful  rice dish with tender chicken"},
             {id:107,  name:"Egg Bhurji",             price:170.0,   imageUrl:"public/images.jsx/egg bhurji.jpg",              description:"Spiced scrambled eggs with onions,tomatoes"},
             {id:108,  name:"Fish Fry",               price:850.0,   imageUrl:"public/images.jsx/fishFried.jpg",               description:"Lightly battered  fried to golden perfection"},
             {id:109,  name:"Chicken Fry",            price:900.0,   imageUrl:"public/images.jsx/chickenFried.jpg",            description:"Crispy, flavorful, and juicy fried chicken"},
             {id:110,  name:"Egg Biryani",            price:550.0,   imageUrl:"public/images.jsx/eggBiryani.jpg",              description:"Fragrant rice dish with spiced boiled eggs"},
             {id:111,  name:"Chicken Tikka",          price:450.0,   imageUrl:"public/images.jsx/chickentikka.jpg",            description:"Marinated chicken pieces grilled to perfection"},
             {id:112,  name:"Mutton kabeb ",          price:800.0,   imageUrl:"public/images.jsx/mutton seekh kebab.jpg ",     description:"Spiced minced mutton grilled on skewers"},
             {id:113,  name:"Butter Chicken",         price:1300.0,  imageUrl:"public/images.jsx/butterchicken.jpg",           description:"Creamy tomato curry with tender chicken"},
             {id:114,  name:"Grilled Fish",           price:1200.0,  imageUrl:"public/images.jsx/grilled.jpg",                 description:"Perfectly seasoned and grilled to perfection"},
             {id:115,  name:"Mutton Rogan ",          price:1600.0,  imageUrl:"public/images.jsx/rogan josh.jpg",              description:"Aromatic and flavorful mutton curry"},

          ],

          Chocolates:[   
              {id:101,  name:"Munch",                price:80.0,    imageUrl:"public/images.jsx/munch.jpg",                      description:"Crunchy bar coated in milk chocolate..."},
              {id:102,  name:"5 Star",               price:60.0,    imageUrl:"public/images.jsx/5 star.jpg",                     description:"Caramel-nougat bar with chocolate coating..."},
              {id:103,  name:"Perk",                 price:40.0,    imageUrl:"public/images.jsx/perk.jpg",                       description:"Crisp wafer in Cadbury milk chocolate..."},
              {id:104,  name:"Whittakers",           price:200.0,   imageUrl:"public/images.jsx/whittakers.jpg",                 description:"Creamy milk chocolate made quality Ghana ..."},
              {id:105,  name:"Snickers",             price:30.0,    imageUrl:"public/images.jsx/snickers.jpg",                   description:"Candy bar with nougat, caramel,milk chocolate..."},
              {id:106,  name:"Cadbury",              price:150.0,   imageUrl:"public/images.jsx/cadbury silk.jpg",               description:"Silky, creamy milk chocolate bar..."},
              {id:107,  name:"White Chocolate ",     price:120.0,   imageUrl:"public/images.jsx/white chocolate bar.jpg",        description:"Smooth, intense cocoa chocolate bar..."},
              {id:108,  name:"DairyMilk",            price:180.0,   imageUrl:"public/images.jsx/dairymilk.jpg",                  description:"Creamy, velvety milk chocolate..."},
              {id:109,  name:"Milky Way",            price:100.0,   imageUrl:"public/images.jsx/milky way.jpg",                  description:"Nougat + caramel combination..."},
              {id:110,  name:"Bournville",           price:170.0,   imageUrl:"public/images.jsx/cadbury bournville.jpg",         description:"Rich, smooth dark chocolate..."},
              {id:111,  name:"Kunafa",               price:120.0,   imageUrl:"public/images.jsx/kunafachocolate.jpeg",           description:"Fusion of crispy Middle Eastern pastry..."},
              {id:112,  name:"Fabelle",              price:200.0,   imageUrl:"public/images.jsx/fabelle hazelnut.jpg",           description:"Artisan luxury chocolate with single-origin cacao..."},
              {id:113,  name:"Creamy Milk",          price:130.0,   imageUrl:"public/images.jsx/creamy milk.jpg",                description:"Classic rich milk chocolate with high milk"},
              {id:114,  name:"KitKat",               price:90.0,    imageUrl:"public/images.jsx/kitakat.jpg",                    description:"iconic and globally loved...."},
              {id:115,  name:"Bournville Dark",      price:170.0,   imageUrl:"public/images.jsx/cadbury bournville dark.jpg",    description:"Rich, balanced dark chocolate..."},
              {id:116,  name:"Wedel Chocolate"    ,  price:250.0,   imageUrl:"public/images.jsx/wedel chocolate bar.jpg",        description:"Polish chocolate brand with distinct fillings..."},
              {id:117,  name:"Lindt",                price:300.0,   imageUrl:"public/images.jsx/lindt.jpg",                      description:"Swiss chocolate known for its smooth texture..."},
              {id:118,  name:"Toblerone",            price:50.0,    imageUrl:"public/images.jsx/toblerone.jpg",                  description:"Swiss chocolate with honey,almond nougat..."},
              {id:119,  name:"Galaxy",               price:120.0,   imageUrl:"public/images.jsx/galaxy.jpg",                     description:"Smooth and creamy milk chocolate..."},
              {id:120,  name:"Ferrero Rocher",       price:350.0,   imageUrl:"public/images.jsx/ferrero Rocher.jpg",             description:"Hazelnut encased in milk chocolate a crisp wafer..."},
            ],

         Milk:[
              {id:101,  name:"IceCream",             price:80.0,    imageUrl:"public/images.jsx/icecream.jpg",                   description:"Frozen dessert from milk/cream..."},
              {id:102,  name:"Rose Milk",            price:90.0,    imageUrl:"public/images.jsx/rose milk.jpg",                  description:"Chilled milk flavored with rose syrup..."},
              {id:103,  name:"Yogurt",               price:40.0,    imageUrl:"public/images.jsx/yogurt.jpg",                     description:"tangy, probiotic, and nourishing..."},
              {id:104,  name:"Thandai",              price:120.0,   imageUrl:"public/images.jsx/thandai.jpg",                    description:"Spiced nutty, chilled milk drink..."},
              {id:105,  name:"Strawberry",           price:70.0,    imageUrl:"public/images.jsx/strawberry milkshake.jpg",       description:"A creamy, fruity drink strawberries..."},
              {id:106,  name:"Cadbury",              price:150.0,   imageUrl:"public/images.jsx/cadbury silk.jpg",               description:"Silky, creamy milk chocolate bar..."},
              {id:107,  name:"MilkShake",            price:100.0,   imageUrl:"public/images.jsx/milkshake.jpg",                  description:"Classic sweet beverage of milk..."},
              {id:108,  name:"Lassi ",               price:180.0,   imageUrl:"public/images.jsx/lassi.jpg",                      description:"Yogurt-based smoothie drink..."},
              {id:109,  name:"Milky Way",            price:100.0,   imageUrl:"public/images.jsx/milky way.jpg",                  description:"Nougat + caramel combination..."},
              {id:110,  name:"Kheer",                price:170.0,   imageUrl:"public/images.jsx/kheer.jpg",                      description:"Creamy rice pudding made with milk..."},
              {id:111,  name:"Kesar Baefi",          price:120.0,   imageUrl:"public/images.jsx/kesar barfi.jpeg",               description:"Dense milk-based fudge with saffron..."},
              {id:112,  name:"Dundi Halwa",          price:200.0,   imageUrl:"public/images.jsx/dundi halwa.jpg",                description:"Bottle gourd halwa milk with cardamom..."},
              {id:113,  name:"Badam Milk",           price:130.0,   imageUrl:"public/images.jsx/badam milk.jpg",                 description:"Luxurious almond-infused milk drink...."},
              {id:114,  name:"Basundi",              price:90.0,    imageUrl:"public/images.jsx/basundi.jpg",                    description:"sweetened milk dessert with cardamom ,nuts..."},
              {id:115,  name:"ButterMilk",           price:170.0,   imageUrl:"public/images.jsx/buttermilk.jpg",                 description:"Light, tangy yogurt-based drink spiced..."},
              {id:116,  name:"Jigarthanda",          price:120.0,   imageUrl:"public/images.jsx/jigarthanda.jpg",                description:"Rich, creamy, iced South Indian drink..."},

         ],
         Drinks:[
              {id:101,  name:"Coke",                price:80.0,     imageUrl:"public/images.jsx/coke.jpg",                       description:"Classic carbonated soft drink..."},
              {id:102,  name:"Pepsi",               price:90.0,     imageUrl:"public/images.jsx/pepsi.jpg",                      description:"Popular cola-flavored soda..."},
              {id:103,  name:"Sprite",              price:40.0,     imageUrl:"public/images.jsx/sprite.jpg",                     description:"Lemon-lime flavored clear soda..."},
              {id:104,  name:"Fanta",               price:120.0,    imageUrl:"public/images.jsx/fanta.jpg",                      description:"Fruit-flavored carbonated drink..."},
              {id:105,  name:"Mountain Dew",        price:70.0,     imageUrl:"public/images.jsx/mountain dew.jpg",               description:"Citrus-flavored, caffeinated soda..."},
              {id:106,  name:"Red Bull",            price:150.0,    imageUrl:"public/images.jsx/redbull.jpg",                    description:"Energy drink with caffeine and B-vitamins..."},
              {id:107,  name:"Limca",               price:60.0,     imageUrl:"public/images.jsx/limca.jpg",                      description:"Lemon-lime soda with a hint of citrus..."},
              {id:108,  name:"Thums Up",            price:80.0,     imageUrl:"public/images.jsx/thumbs up.jpg",                  description:"Strong cola flavor with a spicy kick..."}, 
              {id:109,  name:"Appy Fizz",           price:90.0,     imageUrl:"public/images.jsx/appy fizz.jpg",                  description:"Sparkling apple juice drink..."},
              {id:110,  name:"Maaza",               price:70.0,     imageUrl:"public/images.jsx/maaza.jpg",                      description:"Mango-flavored fruit drink..."},
              {id:111,  name:"Coconut Water",       price:50.0,     imageUrl:"public/images.jsx/coconut.jpg",                    description:"Natural electrolyte-rich hydration..."},
              {id:112,  name:"Monster",             price:100.0,    imageUrl:"public/images.jsx/monster.jpg",                    description:"Energy drink with caffeine and taurine..."},
              {id:113,  name:"Mirinda",             price:40.0,     imageUrl:"public/images.jsx/mirinda.jpg",                    description:"Fruit-flavored carbonated drink..."},
              {id:114,  name:"Dr.Pepper",           price:30.0,     imageUrl:"public/images.jsx/pepper.jpg",                     description:"Unique blend of 23 flavors..."},
              {id:115,  name:"7 Up",                price:60.0,     imageUrl:"public/images.jsx/7 up.jpg",                       description:"Lemon-lime flavored clear soda..."},   
                  
         ],

         Fruits:[
              {id:101,  name:"Apple",                price:150.0,   imageUrl:"public/images.jsx/apples.jpg",                     description:"Crisp, sweet packed with fiber..."},
              {id:102,  name:"Banana",               price:50.0,    imageUrl:"public/images.jsx/bananas.jpg",                    description:"Rich in potassium great for energy..."},
              {id:103,  name:"Orange",               price:80.0,    imageUrl:"public/images.jsx/oranges.jpg",                    description:"Juicy citrus fruit loaded with vitamin C..."},
              {id:104,  name:"Mango",                price:200.0,   imageUrl:"public/images.jsx/mangos.jpg",                     description:"Sweet, tropical fruit high in vitamins A & C..."},
              {id:105,  name:"Grapes",               price:120.0,   imageUrl:"public/images.jsx/grapes.jpg",                     description:"Antioxidant-rich fruit perfect for snacking..."},
              {id:106,  name:"Pineapple",            price:180.0,   imageUrl:"public/images.jsx/pineapple.jpg",                  description:"sweet tropical fruit loaded with vitamins..."},
              {id:107,  name:"Watermelon",           price:90.0,    imageUrl:"public/images.jsx/watermelon.jpg",                 description:"Hydrating fruit high in vitamins A & C..."},
              {id:108,  name:"Papaya",               price:110.0,   imageUrl:"public/images.jsx/papaya.jpg",                     description:"Tropical fruit rich in antioxidants ..."},
              {id:109,  name:"Strawberries",         price:250.0,   imageUrl:"public/images.jsx/strawberries.jpg",               description:"Sweet berries packed with vitamin C ..."},
              {id:110,  name:"Blueberries",          price:300.0,   imageUrl:"public/images.jsx/blueberries.jpg",                description:"Tiny berries loaded with a nutrients..."},
              {id:111,  name:"Kiwi",                 price:220.0,   imageUrl:"public/images.jsx/kiwi.jpg",                       description:"Tangy fruit high in vitamin C and fiber..."},
              {id:112,  name:"Cherries",             price:350.0,   imageUrl:"public/images.jsx/cherries.jpg",                   description:"Sweet or tart fruit rich in antioxidants..."},
              {id:113,  name:"Plum",                 price:160.0,   imageUrl:"public/images.jsx/plum.jpg",                       description:"Sweet fruit rich in antioxidants and fiber..."},
              {id:114,  name:"Pomegranate",          price:200.0,   imageUrl:"public/images.jsx/pomegranate.jpg",                description:"Nutrient-dense fruit  with antioxidants..."},
              {id:115,  name:"Guava",                price:140.0,   imageUrl:"public/images.jsx/guava.jpg",                      description:"Tropical fruit high in fiber and vitamin C..."},
              {id:116,  name:"Lychee",               price:300.0,   imageUrl:"public/images.jsx/lychee.jpg",                     description:"Sweet, floral fruit rich in vitamin C..."},
              {id:117,  name:"Cantaloupe",           price:150.0,   imageUrl:"public/images.jsx/cantaloupe.jpg",                 description:"Sweet melon high in vitamins A and C..."},
              {id:118,  name:"Fig",                  price:250.0,   imageUrl:"public/images.jsx/fig.jpg",                        description:"Sweet fruit rich in fiber and antioxidants..."},
              {id:119,  name:"Coconut",              price:100.0,   imageUrl:"public/images.jsx/Coconutf.jpg",                   description:"Tropical fruit rich in fiber and healthy fats..."},
              {id:120,  name:"Jackfruit",            price:350.0,   imageUrl:"public/images.jsx/jackfruit.jpg",                  description:"Large tropical fruit high in vitamins and fiber..."},
              {id:121,  name:"Passionfruit",         price:280.0,   imageUrl:"public/images.jsx/passionfruit.jpg",               description:"Tart and sweet fruit high in vitamins A & C..."},
              {id:122,  name:"Clementine",           price:140.0,   imageUrl:"public/images.jsx/clementine.jpg",                 description:"Small citrus fruit high in vitamin C..."},
              {id:123,  name:"Nectarine",            price:200.0,   imageUrl:"public/images.jsx/nectarine.jpg",                  description:"Juicy stone fruit high in vitamins A & C..."},
              {id:124,  name:"Raspberry",            price:300.0,   imageUrl:"public/images.jsx/raspberry.jpg",                  description:"Tart berries rich in antioxidants ..."},
              {id:125,  name:"Blackberry",           price:350.0,   imageUrl:"public/images.jsx/blackberry.jpg",                 description:"Juicy berries high in vitamins, antioxidants..."},
              {id:126,  name:"Cranberry",            price:400.0,   imageUrl:"public/images.jsx/cranberry.jpg",                  description:"Tart berries rich in antioxidants ,vitamin C..."},
              {id:127,  name:"Strawberry",            price:250.0,   imageUrl:"public/images.jsx/strawberries.jpg",               description:"Tart fruit high in vitamin C & antioxidants..."},
              {id:128,  name:"Durian",               price:500.0,   imageUrl:"public/images.jsx/durian.jpg",                     description:"Large tropical fruit known for its strong odor..."},

            ],

    },

    reducers:{},
});

let initialState = JSON.parse(localStorage.getItem("cart")) || [];

//create a slice for cart
let cartSlice = createSlice({
  name:'cart',
  initialState,  
  reducers:{
    addToCart:(state,action)=>{
      let item = state.find(item => item.name === action.payload.name);
      if(item){
        item.quantity += 1;
      }
      else{
        state.push({...action.payload, quantity:1});
      }
    },
     removeFromCart:(state,action)=>{
       let itemIndex = state.findIndex(item => item.name === action.payload.name);
       if(itemIndex !== -1){
          state.splice(itemIndex,1);
        }
      },
      increaseQuantity:(state,action)=>{
        let item = state.find(item => item.name === action.payload.name);
        if(item){
          item.quantity += 1;
        }
      },  
      decreaseQuantity:(state,action)=>{
        let item = state.find(item => item.name === action.payload.name);
        if(item && item.quantity > 1){
          item.quantity -= 1;
        }
      },
      clearCart:()=>{
       return [];
      },
  },
});
export let {addToCart,removeFromCart,increaseQuantity,decreaseQuantity,clearCart} = cartSlice.actions;

//create the slice for oders
let ordersSlice = createSlice({
  name:'orders',
  initialState:[],
  reducers:{
    addOrder:(state,action)=>{
      state.push(action.payload);
    },
  },
});
export let {addOrder} = ordersSlice.actions;

const userSlice = createSlice({
  name: "userAuth",
  initialState: {
    users: [],          // registered users
    currentUser: null,  // logged-in user
    isAuthenticated: false,
    loginError: null,
  },
  reducers: {
    registerUser: (state, action) => {
      const newUser = action.payload;

      // check if user already exists by email
      const exists = state.users.some(
        (u) => u.email === newUser.email || u.name === newUser.name
      );

      if (!exists) {
        state.users.push(newUser);
      }

      state.currentUser = newUser;
      state.isAuthenticated = true;
      state.loginError = null;
    },

    loginUser: (state, action) => {
      const { username, password } = action.payload;

      const foundUser = state.users.find(
        (u) =>
          (u.email === username || u.name === username) &&
          u.password === password
      );

      if (foundUser) {
        state.currentUser = foundUser;
        state.isAuthenticated = true;
        state.loginError = null;
      } else {
        state.currentUser = null;
        state.isAuthenticated = false;
        state.loginError = "Invalid username or password";
      }
    },

    logoutUser: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
      state.loginError = null;
    },
  },
});




   


export const { registerUser, loginUser, logoutUser } = userSlice.actions;





    
//configure the store 
  const store = configureStore({
    reducer:{
        ps:productsSlice.reducer,
        cart:cartSlice.reducer,
        orders:ordersSlice.reducer,
        userAuth:userSlice.reducer,

    }
    
  });
  store.subscribe  (() =>
  {
    localStorage.setItem("cart" , JSON.stringify(store.getState().cart));
  });
  export default store;