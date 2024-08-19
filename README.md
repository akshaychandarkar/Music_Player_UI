# Music Player UI

## Overview

Music Player UI is a modern and interactive music player built with React.js. Designed to provide a seamless music experience, the application includes functionalities like music playback, song search, and responsive design, all while maintaining a visually appealing interface. 

## Technologies Used

- **Languages:** JavaScript, HTML, CSS
- **Frameworks/Libraries:** React.js, React Router, Styled-components, Axios
- **Development Tools:** Visual Studio Code, Git, Node.js
- **Operating System:** Windows 10

## Features

- React-based frontend with responsive design
- Music playback functionality (play, pause, next, previous)
- Song list display with cover images
- Search functionality for songs and artists
- Tab-based navigation ("For You" and "Top Tracks")
- Background gradient color changes based on the current song's cover image
- Continuous playback when switching tabs
- Interactive UI with animations and transitions
- 
## Setup and Installation

1. Clone the repository:

2. Navigate to the project directory:

3. Install dependencies:

4. Start the development server:

5. Open your browser and visit `http://localhost:3000`


## API Integration

The application uses the Samespace API to fetch song data:

- **API Endpoint:** [https://cms.samespace.com/items/songs](https://cms.samespace.com/items/songs)
- **Cover images:** [https://cms.samespace.com/assets/{COVER_IMAGE_ID}](https://cms.samespace.com/assets/{COVER_IMAGE_ID})

*Note: The API returns different titles, artists, cover images, and durations, but the URL for every song will be the same.*

## Screenshots

### Home Page
![Home Page Screenshot](https://github.com/akshaychandarkar/Music_Player_UI/blob/main/Github%20Images/Homepage.png)

