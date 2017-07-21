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