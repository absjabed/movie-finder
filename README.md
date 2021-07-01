<div style="text-align:left"><img src="./screenshot/app_init_android.png" /></div>

# Dictionary Word Finder

This is a minimal dictionary application that allows users to search a variety of words. Users can search for words and if the word exist in the dictionary then the user will see the meaning and some grammatical details related to that word with available image. User can also save their favorite words which they can review later in the favorite tab. The words in the favorite tabs divided by the grammatical syntax's (verb, noun etc).

#### Technologies Used

- React Native
- Typescript
- Axios
- Owl Bot API
- Async Storage
- Modular Component
- Composite Component
- Jest
- React Test Renderer
- git


#### Development Environment

- Linux (Ubuntu 20.04)
- NodeJs
- Android SDK
- Android Emulator

### Running the project
If you want to run the project please proceed with the following instructions,
  1. Setup React Native Environment ([Environment Setup Link](https://reactnative.dev/docs/environment-setup#development-os))
  2. Download the project,
     ```
     git clone https://github.com/absjabed/favourite-words.git
     cd favourite-words
     ```
  3. Install the dependencies,
     ```
     yarn install
     ```
  4. Start Android Emulator and check if it's available with `adb devices`
  5. In separate terminal Run following command for (Metro Bundler),
     ```
     npx react-native start
     ```
  6. To run the project in the emulator,
     ```
     npx react-native run-android
     ```
  7. If running fails follow the instruction below,
     ```
     # for linux
     
     cd android
     ./gradlew clean
     
     # for windows 
     gradlew clean

     # again run
     npx react-native run-android
     ```
  8. To run the tests,
     ```
     yarn test
     ```
  9. If `snapshot` test fails for no reason, update snapshots with below command,
     ```
     yarn test -u 
     ```
    
---

### Building the release apk using containerization (Docker)
If you have docker installed and have internet connect please follow the steps to build release,

  1. Clone the project
     ```
     git clone https://github.com/absjabed/favourite-words.git
     cd favourite-words
     ```
  2. Run the following command to build the project,
     ```
     docker run -it --rm -v $PWD:/app -w /app reactnativecommunity/react-native-android /bin/bash -c "yarn install && cd /app/android && ./gradlew assembleRelease"
     ```
  3. Find your apk file in the following location of your current directory (favourite-words)
     ```
     favourite-words/android/app/build/outputs/apk/release/apk-release.apk
     ```

### Building the release apk (Manually)
If you want to build the release apk please proceed with the following instructions,
  
  1. Download the project,
     ```
     git clone https://github.com/absjabed/favourite-words.git
     cd favourite-words
     ```
  2. To install the yarn dependencies,
     ```
     yarn install
     ```
  3. To clean the previous gradle build,
     ```
     cd android

     # for linux
     ./gradlew clean

     # for windows
     gradlew clean
     ```
  4. To build the release apk
     ```
     ./gradlew assembleRelease
     ```
  5. If you want to build release apk with Emulator Connected
     ```
     npx react-native run-android --variant=release
     ```
  6. Finally, find the apk in the following locaiton,
     ```
     favourite-words/android/app/build/outputs/apk/release/apk-release.apk
     ```
  
---


## Application Demo
### Application Video
To see a live demo please visit: [App-Video-Link](https://youtu.be/uTZxB6lVQ9w)

---

### App Screenshots (with usecases)
Left             |  Right
:-------------------------:|:-------------------------:
<img src="./screenshot/Splash.png" />  |  <img src="./screenshot/1.arrow.png" />|
<img src="./screenshot/2.Dutch.png" /> |  <img src="./screenshot/3.mirror.png" />  |
<img src="./screenshot/4.Badger.png"/> | <img src="./screenshot/5.Spaniel.png" />|
<img src="./screenshot/6.japan.png" /> | <img src="./screenshot/7.quick.png"  />|
<img src="./screenshot/8.Flummoxed.png" /> | <img src="./screenshot/9.NotFound.png"  /> |
<img src="./screenshot/adverb.png" /> | <img src="./screenshot/noun.png"  />|

