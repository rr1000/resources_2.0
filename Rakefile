desc "Build the static site from source"
task :build do
  status = system("middleman build --clean")
  puts status ? "OK" : "FAILED"
end

desc "Run the built-in middleman server on port 2111"
task :run do
  system("middleman server -p 2111")
end

desc "Watch and compress styles"
task :sass do
  system("cd source/assets/css && sass --watch styles.scss:styles.css --style compressed")
end

desc "Checkout the build directory and run a simple webserver"
task :serve_static do
  system("cd build && python -m SimpleHTTPServer 8888")
end
