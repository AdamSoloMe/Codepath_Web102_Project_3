# Web Development Project 2 - Trivia Quiz Flashcards

Submitted by: **Adam Solomon**

This web app: **A trivia flashcard app that fetches 10 random questions from the Open Trivia Database. Users can browse all cards in a grid, flip each card to reveal the answer, or use Study Mode to go through one card at a time with Previous and Next navigation.**

Time spent: **4** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed
  - [x] A short description of the card set is displayed
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed
  - [x] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information
  - [x] Clicking on a flipped card again flips it back, showing the front
- [x] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [ ] Cards contain images in addition to or in place of text
  - [ ] Some or all cards have images in place of or in addition to text
- [ ] Cards have different visual styles such as color based on their category
  - Example categories you can use:
    - Difficulty: Easy/medium/hard
    - Subject: Biology/Chemistry/Physics/Earth science

The following **additional** features are implemented:

* [x] Previous button in Study Mode — navigates back through your card history
* [x] All Cards view — displays the full set of 10 cards in a responsive grid
* [x] Answer options displayed on the front of each card (pulled from the API's incorrect answers)
* [x] 3D flip animation when clicking a card
* [x] Cards dynamically resize to fit their content
* [x] Dark gradient UI with glassmorphism navbar

## Video Walkthrough

Here's a walkthrough of implemented required features:


https://github.com/user-attachments/assets/e1d86f8a-53bb-412a-904d-e993e6d58cb7
## Notes

- The Open Trivia Database API returns HTML entities in question/answer text, so a `decodeString` helper using a hidden `<textarea>` was needed to render them correctly.
- Cards use `position: absolute` for the 3D flip effect, so their height is calculated dynamically via `getBoundingClientRect` to prevent the border from clipping content.
- The App uses  Open Trivia Database API to generate random flash cards each time the api is reloaded

## License

    Copyright 2026 Adam Solomon

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
