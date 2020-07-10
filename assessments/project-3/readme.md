<img src="https://i.imgur.com/sX12DTc.png">

# Project 3 Assessment

### GOAL

The goal of this project assessment is to gauge your ability to develop a minimal full-stack web application using the Django framework, including your ability to:

- Create and configure a Django project
- Create a "main" app and install it within the project
- Create a `urls.py` for the "main" app and include it within the project's `urls.py`
- Define a Model
- Make and run migrations
- Define views that perform basic CRUD and redirect or render templates
- Code a template that displays a list of data and shows a form
- Define a ModelForm used to create new data with


### OVERALL APPLICATION REQUIREMENTS

As you saw, the application consist of:

- A **SINGLE** page (template) with a title of "Wacky Widgets", that displays all widgets in the database and provides a form to add a new widget.
- When browsing to the root route of the application (`http://localhost:8000`), the "Wacky Widgets" page is displayed - not the Django welcome page.
- The widgets were displayed in a `<table>`.
- Each widget's `<tr>` had three `<td>`s to display:
	- The `description` field
	- The `quantity` field
	- A "X" link used to delete a widget
- After a widget is added or deleted, the app redirects back to the "Wacky Widgets" page.
- When a widget is deleted, it is not a requirement to confirm the delete - this is optional. It will probably come down to whether you use a simple View Function or a DeleteView to implement the deletion.
- If there are no widgets in the database, show a message "No Widgets Exist" instead of the table of widgets.

Use the screenshots below as your "wireframes".

There are a few "hints" offered along the way.

The layout and styling of this assessment is secondary to its functionality. As long as the app behaves as required and displays all elements specified, you will pass.

There is a link to a minimalistic CSS framework (Pure.css) which defines several classes. Each step includes custom CSS and what classes to use from the framework - feel free to use them.

### PROCESS

This assessment is an **individual** assignment - no collaboration please.

It's "open book" - you may reference anything on your computer, Google, use notes, etc. 

It is anticipated that it will take approximately **90 minutes** to complete this assessment, however, if necessary, you have up to 3 hours to finish.

When finished you will demo your app to an instructor and slack them the link to your personal GitHub repo.

## Instructions & Estimated Time Guidelines (You've Got This!)

Please follow the following steps in order:

- **STEP 1 - Prepare** (&asymp; 5 minutes)
- **STEP 2 - Set Up the App** (&asymp; 10 minutes)
- **STEP 3 - Implement the App's Requirements** (&asymp; 75 minutes)
- **STEP 4 - Demo and Add Link**

> The above times are just guidelines

## Assessment Steps to Complete

### STEP 1 - Prepare (&asymp; 5 minutes)

Briefly read through the rest of this assignment to better understand what is required before starting to code.

### STEP 2 - Set Up the App (&asymp; 10 minutes)

Follow the standard workflow for creating a new Django app.

You will have to slack your instructors a link to your personal GitHub repo so be sure to `git init` in the root of your project folder, create your repo on GitHub (without a README), and follow the instructions to add the remote.

You will not have to deploy this app, so do not waste time switching to use PostgreSQL, the default SQLite database is fine.

The app does not use the built-in User model or authentication.

This app will require only one Model - `Widget`.

The app only requires a single template, therefore there is no need to spend time creating and extending a _base.html_ unless you want to.

The demo application was built using the [Pure.css](https://purecss.io/) CSS library. You can add the following to your template's `<head>` to play along:

```html
<link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css" integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w" crossorigin="anonymous">
```

The inclusion of _Pure.css_ will make HTML tables, buttons and Django's forms, look better simply by adding some classes - which are provided in each step below.

However, you are encouraged to add a stylesheet to perform custom styling such as adding margin, centering, etc. Some basic CSS is also provided to you.

### STEP 3 - Implement the App's Requirements (&asymp; 75 minutes)

#### Planning

Before you start coding, think about what Django technique you are going to use to implement the app's functionality. Are you going to use **View Functions**? A generic **CreateView or ListView**, etc.? The choice is yours, so you should use whatever you are most comfortable with.

#### STEP 3.1 - Root Route

Browsing to the root route of the application should **not** display the Django welcome page:

<img src="https://i.imgur.com/sTE406T.png"> 

Instead, the root route should display your app's single template, i.e., _index.html_, with a title of "Wacky Widgets":

<img src="https://i.imgur.com/qOnvKTj.png">

The "Wacky Widget" page title is an `<h1>` element.

The following custom CSS has been added:

```css
body {
    text-align: center;
    margin: 2rem;
}
```

#### STEP 3.2 - No Widgets in the Database

After this step is completed, your app should look something like this:

<img src="https://i.imgur.com/aLuM1GQ.png">

When there are no widgets in the database, a "No Widgets Exist" message should be displayed.

The `Widget` Model only has two fields:

- `description` -  a `CharField` with a `max_length` of your choosing
- `quantity` - an `IntegerField`

The "No Widgets Exist" is an `<h3>` followed by an `<hr>`.

##### Hint

You can use the `if` template tag and the `length` filter to render different things in the template like this:

```html
{% if widget_list|length == 0 %}

{% else %}

{% endif %}
```

Note that the name of `widget_list` will be the name of the variable holding the list of widgets IF using an `IndexView`.

#### STEP 3.3 - Form for Adding Widgets

After the form for adding a new widget has been added to the template, the display should look something like this:

<img src="https://i.imgur.com/FBTKWPA.png">

The "Add Widget" heading is an `<h4>` below the `<hr>`.

Then comes the `form` for the `Widget` Model.

##### Hints

- Using a custom [ModelForm](https://docs.djangoproject.com/en/2.1/topics/forms/modelforms/) for the `Widget` Model to generate the inputs within a `form` is the way to go if using a View Function or a ListView. Check out the **Create the ModelForm for the Feeding Model** section of the _One-to-Many Models in Django_ lesson for an example.

- It will be necessary to pass an **instance** of the custom ModelForm to the template to be outputted between the `form` tags.
	- If you are using a View Function, check out the **Passing an Instance of FeedingForm** section of the _One-to-Many Models in Django_ lesson for an example.
	- If you are using a class-based ListView, again, check out the lesson referenced above and the [Adding extra context](https://docs.djangoproject.com/en/2.1/topics/class-based-views/generic-display/#adding-extra-context) section of the Django docs.

##### Styling

The `form` has a class of `pure-form` added to it.

The `button` in the `form` has a class of `pure-button` added to it.

The following custom CSS has been added to get the inputs to line up (forms with "jagged" inputs  suck):

```css
label {
    display: inline-block;
    width: 100px;
    text-align: right;
}
```

#### STEP 3.4

When there are widgets in the database, the display should look something like this:

<img src="https://i.imgur.com/czM7TlB.png">

The `table` has a `<thead>` with a header row (`<tr>`) that has three header cells (`<th>`): **Description**, **Quantity** & **Delete**.

Each widget is being displayed as a `<tr>` with three `<td>` elements.

The red "X" is an `<a>` element that, when clicked, delete's that widget from the database. For example, no more Jazzy JavaScript Jackets:

<img src="https://i.imgur.com/2kw0roJ.png">

##### Styling

The `table` has classes of `pure-table` and `pure-table-striped` added to it.

The following custom CSS centers the table and styles the "X" link:

```css
table {
    margin: 2rem auto;
}

table a {
    color: red;
    text-decoration: none;
}
```

**Congrats, you're done!** (unless you want to do the bonus below... which you should try)

### STEP 4 - Send link to instructor

Do a final commit and push to your GitHub.

**Send your app's GitHub link to your instructor**

### Bonus (optional - but do it for 4/4)

Show the total quantity for all widgets in a final row at the bottom of the table like this:

<img src="https://i.imgur.com/gAwYNYY.png">

##### Hint

Check out [Django's Aggregation Docs](https://docs.djangoproject.com/en/3.0/topics/db/aggregation/) for help.


