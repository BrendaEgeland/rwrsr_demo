# Rails/Webpacker/React/SemanticUI/Redux Example

## Useful websites:

* https://github.com/rails/webpacker

## Run Instructions

Need to have a webpacker server as well as the rails servers, so in separate terminal windows run:

* `rails s`
* `./bin/webpack-dev-server` 

Could eventually make this one command using foreman (see https://github.com/rails/webpacker#webpack-dev-server).

## Development history

### Initial install: 
`rails new demo --webpack=react -T`

-T flag prevents TestUnit from being installed, because we'll switch to Rspec in just a bit.

Gets as far as 'Yay! You're on Rails'

### Convert to Haml:
* add `gem 'haml-rails'` to Gemfile
* convert existing templates with `rake haml:erb2haml`

### Use rspec for testing
* add `gem 'rspec-rails'` to Gemfile for both test and development (needs to be in development so generators work)
* `rails g rspec:install`
* Recall that we initialized the app with the -T option, so we don't need to remove any existing test settings or files.
* `rspec` runs, but there is nothing to test yet.