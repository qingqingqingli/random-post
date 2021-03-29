# random-post

***This project is a one-week assignment to create a demo application, which renders posts and author information.***

## Requirements overview

| Requirement | Description | Result |
| ------------| ----------- | ------ | 
| Language | React-Native | :rainbow: Implemented |
| Framework | React-Redux | :sweat_drops: Not implemented (run out of time) |
| Initial screen | Contains a list of posts from [PostAPI](http://jsonplaceholder.typicode.com/posts) | :rainbow: Implemented |
| Detail screen | Show details for post author from [UserAPI](http://jsonplaceholder.typicode.com/users) | :rainbow: Implemented |
| Develop tests | Testing the application | :sweat_drops: Implemented (Only two tests)|
| Build process | Code to compile, run and produce output | :rainbow: Implemented |
| 3rd party libraries | Be able to justify the reason | :rainbow: Explained below |
| Coding style | Be consistent with the code | :rainbow: Implemented (with [Prettier](https://www.npmjs.com/package/prettier)) |
| Data persistence (Optional) | Be able to support offline mode | :sweat_drops: Not implemented |

## App demo

[![random-post](https://github.com/qingqingqingli/random-post/blob/master/images/random-post.gif)](https://github.com/qingqingqingli/random-post)

## Installation

> **Disclaimer**: This application is developed and tested on `Linux` with `Android emulator` from `Android Studio`.

1. Follow up the official [React Native guide](https://reactnative.dev/docs/environment-setup) to set up the environment.

2. Clone the project
```shell
git clone https://github.com/qingqingqingli/random-post-2.git
```
3. Install dependencies
```shell
cd random-post

yarn install
```

4. Run the app
```shell
# step 1: start Metro in one terminal
yarn start

# step 2: start the application
react-native run-android
```
If everything is set up correctly, you should see the app running in your Android emulator shortly. If you can't get it to work, see the [Troubleshooting](https://reactnative.dev/docs/next/troubleshooting#content) page.

## Testing result

- Run the command below to run the tests
```shell
jest test
```

- **Caveat**: Only two tests are included at the moment. Check my wiki for reflections.
  
[![jest-test](https://github.com/qingqingqingli/random-post/blob/master/images/jest-test.png)](https://github.com/qingqingqingli/random-post)

## Structure diagram

- One main takeaway from the diagram below is all the component are interacting with `useState` hook. The dependencies can be simplified with the implementation with `React-Redux`. I run out of time to implement it. 

[![project-structure](https://github.com/qingqingqingli/random-post/blob/master/images/project-structure.png)](https://github.com/qingqingqingli/random-post)

## Used 3rd party libraries

| Library | Description | Justification |
| --------| ----------- | ------------- | 
| [**React Navigation**](https://reactnavigation.org/) | Build routing and navigation for React Native apps | It is scalable and easy to add more screens to the app |
| [**eslint**](https://eslint.org/) | Find and fix problems in JavaScript code | Helps to find coding errors |
| [**jest**](https://jestjs.io/) | The recommended JavaScript Testing Framework | Develop tests for the application |
| [**prettier**](https://prettier.io/) | Code formatter for JavaScript | Make it easy to maintain a consistent coding style |
| [**jest-fetch-mock**](https://github.com/jefflau/jest-fetch-mock#readme) | Allows you to easily mock your fetch calls and return the response you need to fake the HTTP requests | Mock fetch calls to test other components |
| [**react-test-renderer**](https://reactjs.org/docs/test-renderer.html) | Provides a React renderer that can be used to render React components to pure JavaScript objects | Check content from returned component |

## My wishlist

> If I had more than 24 hours a day :relaxed:
