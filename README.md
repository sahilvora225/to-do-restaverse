# To Do App
- This project has 2 parts primarily backend and frontend
- Both these parts of code are written in different folders
- Backend system of this project is written using Python, Django, Djago rest framework, PostgreSQL and Docker
- Whereas frontend system is built using React, Redux and axios javascript libraries

# Backend
- To run the backend server open the terminal in the same directory as that of Dockerfile
- Build the docker container using:

    ```sudo docker-compose build```

- To start the django app in order to accept the requests from frontend client use following command:

    ```sudo docker-compose up app```

# Frontend
- To start the frontend project go to package.json's directory
- First install the dependencies using:

    ```npm install```

- Then start the project to use the app:

    ```npm start```