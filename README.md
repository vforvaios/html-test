## HTML Test

HTML test template using sass and coffee-script as preprocessing languages. Bourbon for cross-browser css and Neat for sass grids.

### Requirements

- [Ruby](http://www.ruby-lang.org/)
- [RubyGems](http://rubygems.org/)
- [Bundler](http://bundler.io/)
- [Sass](http://sass-lang.com/)
- [Guard](https://github.com/guard/guard/)
- [Bourbon](http://bourbon.io/)
- [Neat](http://neat.bourbon.io/)
- [Node.js](http://nodejs.org/)
- [Bower](http://bower.io/)
- [Bower Installer](http://github.com/blittle/bower-installer/)
- [Coffee Script](http://coffeescript.org/)

### Clone HTML Test repository

Open a terminal and run:

  $ git clone git@github.com:jonian/html-test.git

### Install Ruby GEMS with Bundler

Install bundler:

  $ gem install bundler

Install project gems. Navigate to your project directory and run:

  $ cd html-test
  $ bundle install

### Install Bower Components

Navigate to your project directory and run:

  $ cd html-test
  $ bower-installer

### Start Guard and watch for changes

Navigate to your project directory and run:

  $ cd html-test
  $ bundle exec guard start

All project assets will be compiled into the `build` directory.
