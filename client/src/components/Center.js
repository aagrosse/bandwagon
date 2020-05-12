import React from "react"
import { useStoreContext } from "../utils/globalContext";
import "../App.css"
// import ArtistContainer from "./ArtistContainer"
import Search from "./Searchbar"
import ReactDOM from "react-dom";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import AlbumList from "./AlbumList"
import 'bootstrap/dist/css/bootstrap.min.css';
// import Row from 'react-bootstrap/Row';
import "react-jinke-music-player/lib/styles/index.less";
// import { CardDeck } from "react-bootstrap";

import currentSongList from "../components/AlbumList"

console.log('CURRENT TEST: ', currentSongList)



function Center() {
  const [state, dispatch] = useStoreContext();
  console.log("STATE TEST", state)

  // const audioListTest = [
  //   {
  //     name: currentSongList.title,
  //     singer: currentSongList.title,
  //     cover:
  //       currentSongList.art,
  //     musicSrc: () => {
  //       return Promise.resolve(
  //         `${currentSongList}`
  //       )
  //     },
  //   },
  // ]

  // const options = {

<<<<<<< HEAD
  audioLists: audioListTest,
  //default play index of the audio player  [type `number` default `0`]
  defaultPlayIndex: 0,

  //if you want dynamic change current play audio you can change it [type `number` default `0`]
  // playIndex: 0,

  //color of the music player theme    [ type `string: 'light' or 'dark'  ` default 'dark' ]
  theme: 'dark',

  // Specifies movement boundaries. Accepted values:
  // - `parent` restricts movement within the node's offsetParent
  //    (nearest node with position relative or absolute), or
  // - a selector, restricts movement within the targeted node
  // - An object with `left, top, right, and bottom` properties.
  //   These indicate how far in each direction the draggable
  //   can be moved.
  // Ref: https://github.com/STRML/react-draggable#draggable-api
  bounds: 'body',
=======
  //   audioLists: audioListTest,
  //   //default play index of the audio player  [type `number` default `0`]
  //   defaultPlayIndex: 0,

  //   //if you want dynamic change current play audio you can change it [type `number` default `0`]
  //   // playIndex: 0,

  //   //color of the music player theme    [ type `string: 'light' or 'dark'  ` default 'dark' ]
  //   theme: 'dark',

  //   // Specifies movement boundaries. Accepted values:
  //   // - `parent` restricts movement within the node's offsetParent
  //   //    (nearest node with position relative or absolute), or
  //   // - a selector, restricts movement within the targeted node
  //   // - An object with `left, top, right, and bottom` properties.
  //   //   These indicate how far in each direction the draggable
  //   //   can be moved.
  //   // Ref: https://github.com/STRML/react-draggable#draggable-api
  //   bounds: 'body',
>>>>>>> b95807149fa5f2b751ecd0f8b32357208da23ab4

  //   // Replace a new playlist with the first loaded playlist
  //   // instead of adding it at the end of it.
  //   // [type `boolean`, default `false`]
  //   clearPriorAudioLists: true,

<<<<<<< HEAD
  // Play your new play list right after your new play list is loaded turn false.
  // [type `boolean`, default `false`]
  autoPlayInitLoadPlayList: false,

  //Whether to load audio immediately after the page loads.  [type `Boolean | String`, default `false`]
  //"auto|metadata|none" "true| false"
  preload: false,

  //Whether the player's background displays frosted glass effect  [type `Boolean`, default `false`]
  glassBg: true,

  //The next time you access the player, do you keep the last state  [type `Boolean` default `false`]
  remember: false,

  //The Audio Can be deleted  [type `Boolean`, default `true`]
  remove: false,
=======
  //   // Play your new play list right after your new play list is loaded turn false.
  //   // [type `boolean`, default `false`]
  //   autoPlayInitLoadPlayList: false,

  //   //Whether to load audio immediately after the page loads.  [type `Boolean | String`, default `false`]
  //   //"auto|metadata|none" "true| false"
  //   preload: false,

  //   //Whether the player's background displays frosted glass effect  [type `Boolean`, default `false`]
  //   glassBg: true,

  //   //The next time you access the player, do you keep the last state  [type `Boolean` default `false`]
  //   remember: false,

  //   //The Audio Can be deleted  [type `Boolean`, default `true`]
  //   remove: false,
>>>>>>> b95807149fa5f2b751ecd0f8b32357208da23ab4

  //   //audio controller initial position    [ type `Object` default '{top:0,left:0}' ]
  //   defaultPosition: {
  //     top: 300,
  //     left: 120,
  //   },

<<<<<<< HEAD
  defaultPlayMode: 'order',

  //audio mode        mini | full          [type `String`  default `mini`]
  mode: 'full',

  /**
   * [ type `Boolean` default 'false' ]
   * The default audioPlay handle function will be played again after each pause, If you only want to trigger it once, you can set 'true'
   */
  once: false,

  //Whether the audio is played after loading is completed. [type `Boolean` default 'true']
  autoPlay: false,

  //Whether you can switch between two modes, full => mini  or mini => full   [type 'Boolean' default 'true']
  toggleMode: true,

  //audio cover is show of the "mini" mode [type `Boolean` default 'true']
  showMiniModeCover: false,

  //audio playing progress is show of the "mini"  mode
  showMiniProcessBar: true,

  //audio controller is can be drag of the "mini" mode     [type `Boolean` default `true`]
  drag: true,

  //drag the audio progress bar [type `Boolean` default `true`]
  seeked: true,

    //Display chrome media session.  [type `Boolean` default `false`]
    showMediaSession: false,

  //Displays the audio load progress bar.  [type `Boolean` default `true`]
  showProgressLoadBar: true,

  //play button display of the audio player panel   [type `Boolean` default `true`]
  showPlay: true,

  //reload button display of the audio player panel   [type `Boolean` default `true`]
  showReload: true,

  //download button display of the audio player panel   [type `Boolean` default `true`]
  showDownload: false,

  //loop button display of the audio player panel   [type `Boolean` default `true`]
  showPlayMode: true,

  //theme toggle switch  display of the audio player panel   [type `Boolean` default `true`]
  showThemeSwitch: false,

  //lyric display of the audio player panel   [type `Boolean` default `false`]
  showLyric: false,

  //destroy player button display  [type `Boolean` default `false`]
  showDestroy: false,

  //Extensible custom content       [type 'Array' default '-' ]
  extendsContent: null,

  //default volume of the audio player [type `Number` default `1` range `0-1`]
  defaultVolume: 1,

  //playModeText show time [type `Number(ms)` default `700`]
  playModeShowTime: 600,

  //Whether to try playing the next audio when the current audio playback fails [type `Boolean` default `true`]
  loadAudioErrorPlayNext: true,

  // Auto hide the cover photo if no cover photo is available [type `Boolean` default `false`]
  autoHiddenCover: true,

    // Play and pause audio through blank space [type `Boolean` default `false`]
    spaceBar: true,
  }

  const [listenerInfo, updateListenerInfo] = React.useState({
    subscriptionToken: 0,
    currentListenerData: {},
    paused: false
  });

  React.useEffect(() => {
    //get current user and set subscription token and user info
    API.getUsers()
      .then((result) => {
        const email = isAuth().email;
        const currentUser = result.data.filter(user => user.email === email);
        listenerInfo.subscriptionToken = currentUser[0].subscriptionToken;
        updateListenerInfo({
          ...listenerInfo,
          subscriptionToken: currentUser[0].subscriptionToken,
          currentListenerData: currentUser[0]
        })
      }).catch((err) => {

        toast.error("Failed to Get User info");
      });
  }, ['subscriptionToken'])

  const chargeListenerToken = () => {
    if (listenerInfo.paused === false) {
      const token = Number(listenerInfo.subscriptionToken) - 1;
      API.getUsers()
        .then((result) => {
            const email = isAuth().email;
            const currentUser = result.data.filter(user => user.email === email);
            //calculate subscriptionToken 
            const userSubscriptionToken = token;

            //update user payment required to false after intial signup
            const data = { ...currentUser[0], paymentRequired: false, subscriptionToken: userSubscriptionToken };
            API.updateUser(data._id, data).then(() => {
              updateListenerInfo({
                ...listenerInfo,
                subscriptionToken: data.subscriptionToken,
                currentListenerData:data
                })
            })
          })
      }
}

  const skipChargeOnResume = () => {
    updateListenerInfo({
      ...listenerInfo,
      paused: true
    })
  }
=======
  //   defaultPlayMode: 'order',

  //   //audio mode        mini | full          [type `String`  default `mini`]
  //   mode: 'full',

  //   /**
  //    * [ type `Boolean` default 'false' ]
  //    * The default audioPlay handle function will be played again after each pause, If you only want to trigger it once, you can set 'true'
  //    */
  //   once: false,

  //   //Whether the audio is played after loading is completed. [type `Boolean` default 'true']
  //   autoPlay: false,

  //   //Whether you can switch between two modes, full => mini  or mini => full   [type 'Boolean' default 'true']
  //   toggleMode: true,

  //   //audio cover is show of the "mini" mode [type `Boolean` default 'true']
  //   showMiniModeCover: false,

  //   //audio playing progress is show of the "mini"  mode
  //   showMiniProcessBar: true,

  //   //audio controller is can be drag of the "mini" mode     [type `Boolean` default `true`]
  //   drag: true,

  //   //drag the audio progress bar [type `Boolean` default `true`]
  //   seeked: true,

  //   //Display chrome media session.  [type `Boolean` default `false`]
  //   showMediaSession: false,

  //   //Displays the audio load progress bar.  [type `Boolean` default `true`]
  //   showProgressLoadBar: true,

  //   //play button display of the audio player panel   [type `Boolean` default `true`]
  //   showPlay: true,
>>>>>>> b95807149fa5f2b751ecd0f8b32357208da23ab4

  //   //reload button display of the audio player panel   [type `Boolean` default `true`]
  //   showReload: true,

  //   //download button display of the audio player panel   [type `Boolean` default `true`]
  //   showDownload: false,

  //   //loop button display of the audio player panel   [type `Boolean` default `true`]
  //   showPlayMode: true,

  //   //theme toggle switch  display of the audio player panel   [type `Boolean` default `true`]
  //   showThemeSwitch: false,

  //   //lyric display of the audio player panel   [type `Boolean` default `false`]
  //   showLyric: false,

  //   //destroy player button display  [type `Boolean` default `false`]
  //   showDestroy: false,

  //   //Extensible custom content       [type 'Array' default '-' ]
  //   extendsContent: null,

  //   //default volume of the audio player [type `Number` default `1` range `0-1`]
  //   defaultVolume: 1,

  //   //playModeText show time [type `Number(ms)` default `700`]
  //   playModeShowTime: 600,

  //   //Whether to try playing the next audio when the current audio playback fails [type `Boolean` default `true`]
  //   loadAudioErrorPlayNext: true,

  //   // Auto hide the cover photo if no cover photo is available [type `Boolean` default `false`]
  //   autoHiddenCover: true,

  //   // Play and pause audio through blank space [type `Boolean` default `false`]
  //   spaceBar: true,
  // }

  
  
  return (
    <div style={{ backgroundColor: "#313131", height: "100vh" }}>
      <Search />
      <div id="centerDiv">
        <AlbumList />
      </div>

    </div>
  )
}

export default Center;