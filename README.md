# ML-Frontend-test
Practical front-end test for ML
# Live Demo
* Frontend: https://mariano-z-lopez.github.io/ML-Frontend-test/ (github pages)
* Backend: https://dudley-bunnyhug-62622.herokuapp.com/api/items (heroku)
# Artifacts    
* **Frontend**: This is a react app built with webpack & babel that aims to expose a product searcher
    * **Folder**: frontend
    * **Highlight dependencies**: react-dom, react-redux, react-router & axios
    * **Entry point**: index.js
    * **Package structure**: 
        * **Component**: Hold all the react components (including their sass files) used by the layout layer.
        * **Layout**: All the pages that the app has
        * **Router**: The react router configuration (knows how to map each url to a Layout/Page component)
        * **Service**: The business layer: all the business logic for the services/downstream calls is here
        * **Store**: The react store configuration (with Actions & Reducers)
        * **Style**: General app styles in sass files
        * **Utils**: For Utility functions or classes
* **Backend**: This is a node.js app that aims to expose an rest api built with express framework
    * **Folder**: frontend
    * **Highlight dependencies**: express & axios
    * **Available endpoints**: 
        * **/api/items?search=query** : Should query (using the query param "**search**") the ML API and return the top 4 products
        * **/api/items/:itemId** : Should search the product by ID (using the path param "**itemId**") over the ML API and return the product information including their description
    * **Entry point**: app.js 
    * **Package structure**: 
        * **Configuration**: Holds the application configurations and constants values
        * **Dao**: The data access object layer: Here rely the methods to call the ML API
        * **Service**: The business layer: all the business logic is here
        * **Resource**: Rest resources with their endpoints
        * **Transformer**: The transformer layer that knows how to transform/map json objects
        * **Utils** : For Utility functions or classes
# Requirements
* Node >= 12
* Docker: 19.03.1 (optional) 
* Docker compose: 1.24.1 (optional)
# How to run locally
* **Using docker-compose & docker**
    * run in the root folder:
        ```
            docker-compose up
        ```
* **Using docker**
   
        ```
            cd ./backend
            docker build -t ml-backend .
            docker run -p 3000:3000 --rm ml-backend
            
            cd ./frontend
            docker build -t ml-frontend .
            docker run -p 80:80 --rm ml-frontend
        ```
* **Using node**
    * backend:
        ```
            cd ./backend
            npm install
            npm run start    
        ```
    * frontend:
        ```
            cd ./frontend
            npm install
            npm run start    
        ```
