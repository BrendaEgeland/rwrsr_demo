# Rails/Webpacker/React/SemanticUI/Redux Example

## Useful websites:

* https://github.com/rails/webpacker
* https://facebook.github.io/react/
* http://redux.js.org/
* https://react.semantic-ui.com/usage
* https://github.com/doabit/semantic-ui-sass
* https://medium.com/@hpux/rails-5-1-loves-javascript-a1d84d5318b

## Purpose

This project demonstrates how to set up Rails 5.1 with Webpacker so that we can use React/Redux for front end development where we want to, but not necessarily for everything. The asset pipeline is still available, but Webpacker takes care of compiling/transpiling all of our React code.

In addition, SemanticUI is available both in the React and Rails front ends. jQuery is required if using Rails front end pages, but the React/SemanticUI pages do not require jQuery.

The development history below does not completely spell out each step, but rather is a commentary to following along the commit history of the project.

## Run Instructions

Need to have a webpacker server as well as the rails servers, so in separate terminal windows run:

* `rails s`
* `./bin/webpack-dev-server` 

This will be changed to `heroku local` once Heroku and the Procfile are set up.

## Development history

### Initial install: 
Note: Our app name is **rwrsr_demo**. Use something else if you like and replace accordingly in these instructions.

`rails new rwrsr_demo --webpack=react -T`

The -T flag prevents TestUnit from being installed, because we'll switch to Rspec in just a bit.

*Hint: Add the '--database=postgresql' flag to the command above to save the conversion step later on. Run `rails db:setup` and `rails db:migrate` after the 'rails new' command completes.*

Gets as far as 'Yay! You're on Rails'

### Convert to Haml:
* add `gem 'haml-rails'` to Gemfile
* convert existing templates with `rake haml:erb2haml`

### Use rspec for testing
* add `gem 'rspec-rails'` to Gemfile for both test and development (needs to be in development so generators work)
* `rails g rspec:install`
* Recall that we initialized the app with the -T option, so we don't need to remove any existing test settings or files.
* `rspec` runs, but there is nothing to test yet.

### Build first controller and demo page
* `rails g controller Site index`
* remove unneeded Site files, like .coffee, .scss, helpers, view tests (for now, at least)
* `rspec` runs and passes with a single test
* make site#index the root path (in routes.rb)
* add `=javascript_pack_tag 'hello_react'` to site#index
* webpacker is correctly adding 'Hello React!' to the page, which can be found at `/site/index` or root `/`.

### Set up for Heroku
* For Heroku, we need to use Postgres, so change sqlite3 to pg by replacing the sqlite3 gem with pg, and then updating the database.yml file. 
* Set up the database with `rails db:setup` and then `rails db:migrate`
* Create a Procfile and a local .env file. The .env file is *not* committed to the repo. At this point, it only contains the port number for use in development, `PORT=3000`.
* We can now start the development servers (rails server and webpack dev server) with a single command, `heroku local`.
* Create the Heroku app with `heroku apps:create rwrsr_demo`. (Note that I already have an Heroku account and Heroku Command Line tools installed.)
* Add the nodejs and ruby buildpacks to the remote Heroku app. I find this easiest to do in the app dashboard on Heroku, which can be found under 'Settings'.
* Push code to Heroku with `git push heroku`. (See note https://devcenter.heroku.com/articles/git#deploying-code if deploying from a branch other than master.)
* The app should now be accessible at https://rwrsr-demo.herokuapp.com/.
* The local server can now be started with `heroku local` rather than having to start both the rails and webpacker servers in separate windows.

### Add Semantic UI
* Add the Semantic UI React package with `yarn add semantic-ui-react`. (Note: using **yarn**, not **npm install**.)
* Get the Semantic UI stylesheets with `gem 'semantic-ui-sass', git: 'https://github.com/doabit/semantic-ui-sass.git'`.
* Rename the default `app/assets/stylesheets/application.css` to `app/assets/stylesheets/application.scss` and add a line to import the Semantic styles: `@import "semantic-ui";`.
* Add some sample components to `hello_react.jsx` and it works!

### Add Redux
First, move Hello to its own component, `app/javascripts/components/hello.jsx` so we can keep things nice and neat.
Then, we need to some more advanced ES6 features to make writing the reducers easier (specifically the spread operator for objects), so
* `yarn add babel-preset-stage-0`
* `yarn add babel-preset-es2015`

And then add the presents to the `.babelrc` file.

Next, start adding Redux: 
* `yarn add redux`
* `yarn add react-redux`
* `yarn add redux-thunk` (middleware we'll need for async requests later on)
* Create a 'settings' reducer and action.
* Add the `app/javascripts/store` folder to set up the store. Note we are including thunk and the Chrome Redux extension.
* Wire up the Provider for Redux to our root component, `app/javascripts/packs/hello_react.jsx`. The page should now load as it did before.

Now put the parts together:
* Create a container `app/javascripts/containers/HelloApp.js` for the Hello component that can connect our store and actions to the component. 
* In the `hello_react.js` pack, call `HelloApp` instead of `Hello` and no longer pass a prop, since we'll get that from the store.
* Add an input field to the Hello component and update the store every time it changes.

Add testing for our React and Redux code:
* `yarn add expect --dev`
* `yarn add mocha --dev`
* `yarn add react-addons-test-utils --dev`
* Create tests for our React code in `app/javascript/tests`
* Run with `npm test`.

### Create Rails Standard Asset Pipeline Front End Pages as Well
* Semantic UI requires jQuery, so add jQuery to the Gemfile with `gem 'jquery-rails'`.
* Add jQuery to application.js with `//= require jquery` and `//= require semantic-ui`.
* Add a new page at `site/rails_only` using the code from https://semantic-ui.com/examples/sticky.html. Also add in the scss, javascript and images required.
* In a real app, perhaps two different layouts could be used, one for React pages and one for Rails pages, so that jQuery
 and other javascript doesn't need to load where not needed.


