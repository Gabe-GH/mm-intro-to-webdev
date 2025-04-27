## Step 1: Get the Repo on your system

I realize pretty late having something like Git might be foreign to you all as high schoolers, so for those...

## Make a card for our template (HTML)

First we'll make a template card for what our data will be taking the shape of. It's easier this way because with Pokemon, you have hundreds, if not thousands, of Pokemon and statically typing out each one will take forever.

Open the file `/src/index.html`.

### Making the container to hold the details

First, insided the body tag, start with adding what will act as the "container" of the card. Make a div tag and give it a **class** of `card template`

```html
...
<body>
  <!-- rest of html -->

  <div class="card template"></div>

  <!-- rest of html -->
</body>
</html>
```

### Pokemon details

Inside the card you'll type out the details of an example we'll use for the template card.

```html
<!-- rest of html -->
<div class="card template"></div>
<p class="pokedex_num">01</p>
<section class="images">
  <img
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    alt="pokemon sprite"
    class="sprite front"
  />
  <img
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
    alt="pokemon sprite"
    class="sprite back"
  />
</section>
<h3 class="name">Bulbasaur</h3>
<p class="type">Grass</p>
<!-- rest of html -->
```

You'll notice we're using some tags I might've mentioned earlier. The tags used here are `div`, `p`, `section`, `img`, and `h3`. There's no real reason why these are being used here, it's just to get you all familiar with how different tags are used together to make html.

## Making it look not ugly (CSS)

Next we'll be using the classes and ids we've attached to our html tags to apply **"styling"** to them. This is is what gives webpages its flavor and look.

### Linking the stylesheet to the html

Before all of that we need to tell our html file where to find our stylesheet that it'll be using for its styling.

In the header, copy the already used `<link>` tag in play that's applying the [CSS reset styles](https://www.joshwcomeau.com/css/custom-css-reset/), and replace the **href** to point to your stylesheet. In this case it should be `/src/style.css`.

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link rel="stylesheet" href="style-reset.css" />

  <!-- Add this line -->
  <link rel="stylesheet" href="style.css" />
</head>
```

### Styling the Template

Open the file `/src/style.css`

In this file is where we will write our CSS rules by using **identifiers** such as _classes_ and _ids_ and in some cases _html tags_.

We'll start with styling the "container" of the "card". Add a rule for the "card" class to make it look nice like this.

```CSS
/* Rest of the file */

.card {
    width: 12rem;
    background-color: rgb(196, 26, 26);
    border: 8px solid rgb(190, 147, 147);
    border-radius: 20px;
    padding: 20px;
    height: fit-content;
}
```

CSS styles are pretty much straight forward until it comes to a little more non beginner styles.

### Making the Sprite (Pokemon image) flip when we hover the card

You'll notice that our card is looking funky with both the images of the pokemon being stacked like that. Our goal is to have the image flip from one to the other when hovering the card with our mouse.

Although this can be over developed and done using JavaScript, there's an easier way to do this with just some CSS Rules.

Add the following to your stylesheet

```CSS

/* Rest of the file */

.back {
    display: none
}
```

You'll notice this made the sprite of the back of the pokemon disappear.

"But now when I hover nothing happens??" Chill. We need to add in rules for that as well.

Add the following to remove the front sprite on hover, and at the same time have the back sprite appear by undoing the last rule.

```CSS

/* Rest of the file */

.card:hover .front {
    display: none;
}

.card:hover .back {
    display: block;
}
```

_the `:hover` being applied to the identifier is known as a pseudo-class. It's a **keyword** (reserved in most cases, but I'm unsure about css). There are many kinds of pseudo-classes but hover is personally my most used._

### Using a html tag for styling

Classes and ids aren't the only things you can target for styling. As you may have noticed at the top of the file, there's styling being applied to the `body` tag.

We'll be adding one more html tag targeting rule for our button using `button` as the identifier.

Add the following to make the button that will be toggling our pokemon's shiny status look nicer.

```CSS

/* Rest of the file */

button {
    color: whitesmoke;
    margin-top: 10px;
    border-radius: 15px;
    border-style: solid;
    border-color: white;
    background-color: rgba(224, 224, 224, 0.952);

    min-width: 50%;
}
```

"Wait. This is still ugly." _CHILL!_ 💀 This is still only our template that we'll be using to base the rest of the cards off off.

###

## Loading In Data (JavaScript)

Go back to your html file, `/src/index.html` and just like when we told the html file where to find the style sheet, we'll also be telling it where to find our **"script"**.

Inside the `body` at the very bottom before its closing tag, `</body>` add the following:

```html

<!-- Rest of the file -->

    <!-- This line here -->
        <script type="module" src="script.js"></script>
    </body>
</html>
```

"Why did we add it in the body tag and not the header?" There's no rule telling you you have to, but for functionality and performance sake it's best to have your script load and ran after the html and css have loaded.

#### Uncommenting

JS is an entire beast of it's own and it'll take to long to teach you everything you need to know, to write the code we need here. So I've provided you with a few functions that we'll be using to load in our data from an external [**Web API**](https://www.geeksforgeeks.org/what-is-web-api-and-why-we-use-it/), the [PokeAPI](https://pokeapi.co/docs/v2).

Open the file `/src/script.js`

I'll probably just rant here, tbh.

### Fixing the Layout

In order to fix the card layout a bit (move it's pokedex number over and fix)

we need to add the following adjustments to `.card` as well as some last minute styling for design purposes:

```CSS

/* Rest of the file */

.card {
    background-color: rgb(196, 26, 26);
    width: 12rem;
    border: 8px solid rgb(190, 147, 147);
    border-radius: 20px;
    padding: 20px;

    /* Add this for inner layout of cards after JS */
    height: fit-content;
    display: flex;
    flex-direction: column;
}

/* Rest of the file */

button:hover {
    cursor: pointer;
    scale: 105%
}


.pokedex_num {
    align-self: end;
    margin-bottom: -20px;
}
```
