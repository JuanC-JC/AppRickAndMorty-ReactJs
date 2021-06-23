# Rick and morty Api - ReactJs

[Deploy-netlify](https://rick-and-morty-reactjs.netlify.app/)
[Deploy-GithubPages](https://juanc-jc.github.io/AppRickAndMorty-ReactJs/)


run project
~~~
    npm run start
~~~

run project with live-server or serve (Example: deploy in netlify "https://someurl.somehost" )

~~~
    Package.json

        {
            homepage:"." or delete this line
        }

    App.js

        Remove basename of BrowserRouter
        
        <BrowserRouter basename>
~~~

run project in other path (Example: Deploy in github "https://someurl.github.io/folderproject" )

~~~
    Package.json

        {
            homepage: "https://someurl.github.io/folderproject"
        }


    App.js

        use basename in BrowserRouter
        
        <BrowserRouter basename={process.env.PUBLIC_URL}>



~~~
