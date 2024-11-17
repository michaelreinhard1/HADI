# HADI - Edu Platform

An online platform for Islamic teachers where they can find and add resources for their teaching and learning. The platform provides an easy way to find and share relevant resources and materials with other teachers. Users can easily browse through different resources, search for specific materials, view images and videos and create their own files.

## Demo

[hadi.michaelreinhard.be](http://hadi.michaelreinhard.be/)

## Screenshot

[![Website Screenshot](web/assets/images/screenshot.png)](http://hadi.michaelreinhard.be/)

## User Test Accounts

| Type          | E-mailadres         | Wachtwoord |
| ------------- | ------------------- | ---------- |
| Administrator | admin@admin.com     | testtest   |
| Student       | student@student.com | testtest   |
| Reader        | reader@reader.com   | testtest   |

## Run Locally

Clone the project

```bash
  git clone https://github.com/cms-development/werkstuk---edu-platform-michaelreinhard1
```

Go to the project directory

```bash
  cd werkstuk---edu-platform-michaelreinhard1
```

Install dependencies

```bash
  npm install
```

```bash
  composer install
```

Create a MySQL database

Create a .env file in the root directory and copy the contents of the .env.example.dev file

Change the values in the .env file

Start the server

```bash
  cd web
```

```bash
  php -S localhost:3000
```

## Author

- [@michaelreinhard1](https://www.github.com/michaelreinhard1)
"# HADI" 
