require 'sass'
require 'coffee-script'
require 'bourbon'
require 'neat'

guard 'copy', mkpath: true, from: 'source/templates', to: 'build', run_at_start: true
guard 'copy', mkpath: true, from: 'source/images', to: 'build/images', run_at_start: true
guard 'copy', mkpath: true, from: 'source/fonts', to: 'build/fonts', run_at_start: true

guard 'sprockets', destination: 'build/javascripts', asset_paths: ['source'] do
	watch(%r{source/(.+)\.(js|coffee)$}) { 'source/application.js' }
end

guard 'sprockets', destination: 'build/stylesheets', asset_paths: ['source'] do
	watch(%r{source/(.+)\.(css|scss|sass)$}) { 'source/application.css' }
end
