# fullstack-js-app-frontend

## This is a demo that follows the Digital Ocean Tech Talk Demo for a simple JS App 

* related Links: 
  * [Making a Node + MongoDB App on DigitalOcean](https://www.youtube.com/watch?v=1171ScSfIrs&t=1862s)
  * [Making Fullstack JavaScript Apps](https://www.youtube.com/watch?v=C2AyOoZa5Yc)
  * [Vue Js Crash course video](https://www.youtube.com/watch?v=qZXt1Aom3Cs&t=2701s)
  * [Vue Js Crash course github](https://github.com/bradtraversy/vue-crash-2021)

### Create a Managed MongoDB Database on Digital Ocean

* Copy the connetion string
* Download the CA certificate

### Created the Backend 

 * [Github Link](https://github.com/jeanwang2dev/fullstack-js-app-backend)

### Setup the Frontend

## Deply this Github repo to GCP with Cloud Build, setup CI/CD pipeline 

 1. Create a project (this one, the vue project)
 2. Add YAML files for the setup (the app.yaml and cloud.yaml in this project)
 3. Push the project to GitHub
 4. [Mirror the GitHub repository to Cloud Source Repositories](https://cloud.google.com/source-repositories/docs/mirroring-a-github-repository)
 5. Enable **Cloud Build API** and **App Engine Admin API** and **service accounts user role**
 6. Create an App Engine application
 7. Build trigger in Cloud Build

 * This project lives on [link](https://ci-cd-learning-342316.appspot.com/) 

## Project setup (Default Vue project)
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



