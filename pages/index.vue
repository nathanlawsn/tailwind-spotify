<template>
  <div class="flex flex-col h-screen text-sm text-gray-400">
    <div class="bg-blue-500 flex-1 flex overflow-y-hidden">
      <div class="sidebar bg-gray-900-spotify w-48 flex-none flex flex-col justify-between font-semibold">
        <ul class="py-6">
          <li class="border-l-4 border-green-600">
            <a href="#" class="flex items-center mx-4 mt-4 group">
              <svg class="fill-current text-white group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M20 7.093V2h-3v2.093l3 3zM24 13L12 1 0 13h3v10h7v-5h4v5h7V13h3zm-5 8h-3v-5H8v5H5V10.74l7-6.912 7 6.99V21z"/></svg>
              <span class="ml-2 text-white group-hover:text-white">Home</span>
            </a>
          </li>
          <li class="border-l-4 border-transparent">
            <a href="#" class="flex items-center hover:text-white mx-4 mt-4 group">
              <svg class="fill-current text-gray-400 h-6 w-6 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M13 2c3.469 0 2 5 2 5s5-1.594 5 2v9H8V2h5zm.827-2H6v20h16V8.158C22 5.766 16.989 0 13.827 0zM4 22V2H2v22h18v-2H4z"/></svg>
              <span class="ml-2 group-hover:text-white">Browse</span>
            </a>
          </li>
          <li class="border-l-4 border-transparent">
            <a href="#" class="flex items-center hover:text-white mx-4 mt-4 group">
              <svg class="fill-current text-gray-400 h-6 w-6 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M6.043 17.496L4.56 19.001C1.77 16.8 0 13.588 0 10s1.77-6.8 4.561-9l1.483 1.504C3.717 4.339 2.239 7.016 2.239 10s1.478 5.661 3.804 7.496zM15 10a3 3 0 00-6 0c0 1.304.838 2.403 2 2.816V23h2V12.816A2.992 2.992 0 0015 10zm-8.282 0c0-1.791.887-3.398 2.282-4.498L7.519 4c-1.86 1.467-3.04 3.608-3.04 6s1.18 4.533 3.04 6L9 14.498c-1.396-1.1-2.282-2.707-2.282-4.498zM19.44 1l-1.483 1.504c2.326 1.835 3.804 4.512 3.804 7.496s-1.478 5.661-3.804 7.496l1.483 1.505C22.23 16.8 24 13.588 24 10s-1.77-6.8-4.56-9zm-2.959 3L15 5.502c1.396 1.101 2.282 2.707 2.282 4.498s-.886 3.398-2.282 4.498L16.481 16c1.86-1.467 3.04-3.608 3.04-6s-1.179-4.533-3.04-6z"/></svg>
              <span class="ml-2 group-hover:text-white">Radio</span>
            </a>
          </li>
        </ul>
        <div class="overflow-y-auto px-5 mt-2 pb-4">
          <h3 class="uppercase tracking-widest text-gray-500 font-normal text-xs">Your Library</h3>
          <ul class="leading-loose">
            <li class="truncate"><a href="#" class="hover:text-white">Made For You</a></li>
            <li class="truncate"><a href="#" class="hover:text-white">Recently Played</a></li>
            <li class="truncate"><a href="#" class="hover:text-white">Liked Songs</a></li>
            <li class="truncate"><a href="#" class="hover:text-white">Albums</a></li>
            <li class="truncate"><a href="#" class="hover:text-white">Artists</a></li>
            <li class="truncate"><a href="#" class="hover:text-white">Podcasts</a></li>
          </ul>
          <h3 class="uppercase tracking-widest text-gray-500 font-normal text-xs mt-6">Playlists</h3>
          <ul class="leading-loose">
            <li class="truncate"><a href="#" class="hover:text-white">Nathan's Tunes</a></li>
            <li class="truncate"><a href="#" class="hover:text-white">Land Digital Jukebox</a></li>
            <li class="truncate"><a href="#" class="hover:text-white">Gym #BEASTMode</a></li>
            <li class="truncate"><a href="#" class="hover:text-white">90's Hip-Hop Classics</a></li>
            <li class="truncate"><a href="#" class="hover:text-white">TGIF</a></li>
            <li class="truncate"><a href="#" class="hover:text-white">Dance Throwback</a></li>
            <li class="truncate"><a href="#" class="hover:text-white">Discover Weekly</a></li>
            <li class="truncate"><a href="#" class="hover:text-white">Nathan's Tunes</a></li>
            <li class="truncate"><a href="#" class="hover:text-white">Land Digital Jukebox</a></li>
            <li class="truncate"><a href="#" class="hover:text-white">Gym #BEASTMode</a></li>
            <li class="truncate"><a href="#" class="hover:text-white">90's Hip-Hop Classics</a></li>
            <li class="truncate"><a href="#" class="hover:text-white">TGIF</a></li>
            <li class="truncate"><a href="#" class="hover:text-white">Dance Throwback</a></li>
            <li class="truncate"><a href="#" class="hover:text-white">Discover Weekly</a></li>
            <li class="truncate"><a href="#" class="hover:text-white">Nathan's Tunes</a></li>
            <li class="truncate"><a href="#" class="hover:text-white">Land Digital Jukebox</a></li>
            <li class="truncate"><a href="#" class="hover:text-white">Gym #BEASTMode</a></li>
            <li class="truncate"><a href="#" class="hover:text-white">90's Hip-Hop Classics</a></li>
            <li class="truncate"><a href="#" class="hover:text-white">TGIF</a></li>
            <li class="truncate"><a href="#" class="hover:text-white">Dance Throwback</a></li>
            <li class="truncate"><a href="#" class="hover:text-white">Discover Weekly</a></li>
          </ul>
        </div>
        <div class="border-t border-gray-800 h-16 px-4 py-2 flex items-center group">
          <svg class="fill-current text-gray-600 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6 13h-5v5h-2v-5H6v-2h5V6h2v5h5v2z"/></svg>
          <a class="font-normal text-gray-500 ml-2 group-hover:text-white" href="#">New Playlist</a>
        </div>
      </div>
      <div class="content-area bg-gray-800-spotify flex-1 flex flex-col">
        <div class="top-bar flex items-center justify-between px-4 py-2">
          <div class="flex items-center">
            <div>Previous</div>
            <div>Next</div>
            <div class="ml-4 relative">
              <input type="text" placeholder="Search" class="bg-white text-gray-800 placeholder-gray-800 rounded-full px-3 pl-8 py-1">
              <div class="absolute top-0"><svg class="fill-current text-gray-800 h-6 w-6 pt-1 pl-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M23.809 21.646l-6.205-6.205a9.68 9.68 0 001.857-5.711C19.461 4.365 15.096 0 9.73 0 4.365 0 0 4.365 0 9.73c0 5.366 4.365 9.73 9.73 9.73a9.678 9.678 0 005.487-1.698L21.455 24l2.354-2.354zM2.854 9.73c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877A6.884 6.884 0 012.854 9.73z"/></svg></div>
            </div>
          </div>
          <div class="flex items-center">
            User
          </div>
        </div>
        <div class="overflow-y-auto">
          <div class="container mx-auto px-4">
            <h2 class="mt-24 text-5xl font-semibold text-white">Home</h2>
            <div class="mt-12">
              <h3 class="font-semibold text-xl border-b border-gray-900 pb-2">Recently played</h3>
              <div class="flex items-center mt-4 -mx-4">
                <div class="w-1/5 px-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, itaque laborum nam cumque explicabo aliquam sequi architecto quam tempora quidem.
                </div>
                <div class="w-1/5 px-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, itaque laborum nam cumque explicabo aliquam sequi architecto quam tempora quidem.
                </div>
                <div class="w-1/5 px-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, itaque laborum nam cumque explicabo aliquam sequi architecto quam tempora quidem.
                </div>
                <div class="w-1/5 px-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, itaque laborum nam cumque explicabo aliquam sequi architecto quam tempora quidem.
                </div>
                <div class="w-1/5 px-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, itaque laborum nam cumque explicabo aliquam sequi architecto quam tempora quidem.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-700-spotify flex-none h-22 px-5 flex items-center justify-between">
      <div class="flex items-center">
        <a href="#"><img src="/albumcover01.png" alt="Album Cover" class="w-14 h-14"></a>
        <div class="ml-3">
          <div><a href="#" class="hover:underline">Mr. Brightside</a></div>
          <div><a href="#" class="text-xs text-gray-500 hover:underline hover:text-white">The Killers</a></div>
        </div>
      </div>
      <div class="player-controls flex flex-col justify-center flex-grow mx-8">
        <div class="flex justify-center">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </div>
        <div class="max-w-full mt-3 flex items-center justify-center flex-grow">
          <div class="text-xs text-gray-500">1:20</div>
          <div class="bg-gray-500 rounded-lg w-full xl:w-200 h-1 mx-3"></div>
          <div class="text-xs text-gray-500">3:43</div>
        </div>
      </div>
      <div class="volume-controls">
        volume
      </div>
    </div>
  </div>
</template>