# AI Chatbot Website

The project is a simple React application that uses Vite as the build tool and Google Gemini to power an AI chatbot. It's served from a Spring Boot backend.

The project currently has 3 characters that can be spoken to: 

 - Ken from the Barbie movie.

 - Spurgeon, a character I created after my brother humorously mispronounced the NHL player Jared Spurgeon's name to sound more like an Eevee evolution from pokemon (Spurgeon -> Spurgeeon).

 - Jinx from the Arcane series.

The project was created using Spring Boot 3, React 19, Vite 6.3.5, and Google Gemini

![Screenshot 2025-05-13 183714](https://github.com/user-attachments/assets/43ff15af-7d87-4a9c-be84-d6902abb2fad)
![Screenshot 2025-05-13 183801](https://github.com/user-attachments/assets/a582e472-74fa-4d48-98b1-0220f7480625)

## Run the frontend locally (development)

Requires Node.js and npm.

```bash
cd src/webui
npm install
npm run dev
```

Then open the URL Vite prints in the terminal (usually `http://localhost:5173`).

## Run Spring Boot locally (serves the page)

Requires Java 21 and Maven. A Maven build installs Node, builds the React app in `src/webui`, and copies the output into Spring Boot’s static resources.

```bash
./mvnw spring-boot:run
```

Or, if you prefer a full package first:

```bash
./mvnw clean package
java -jar target/ai-chat-bot-0.0.1-SNAPSHOT.jar
```

Then open `http://localhost:8080`.
