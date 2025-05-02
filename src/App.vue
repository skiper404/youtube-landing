<script setup>
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  BellIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  UserCircleIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
} from '@heroicons/vue/24/outline'
import { MicrophoneIcon, CheckCircleIcon, EllipsisVerticalIcon } from '@heroicons/vue/24/solid'
import YouTubeLogo from '@/icons/YouTubeLogo.vue'
import HomeLogo from './icons/HomeLogo.vue'
import ShortsLogo from './icons/ShortsLogo.vue'
import SubscriptionsLogo from './icons/SubscriptionsLogo.vue'
import YouTubeMusicLogo from './icons/YouTubeMusicLogo.vue'
import HistoryLogo from './icons/HistoryLogo.vue'
import PlaylistLogo from './icons/PlaylistLogo.vue'
import YourVideosLogo from './icons/YourVideosLogo.vue'
import WatchLaterLogo from './icons/WatchLaterLogo.vue'
import LikedVideosLogo from './icons/LikedVideosLogo.vue'
import DownloadsLogo from './icons/DownloadsLogo.vue'
import TrendingLogo from './icons/TrendingLogo.vue'
import MusicLogo from './icons/MusicLogo.vue'
import MoviesLogo from './icons/MoviesLogo.vue'
import GamingLogo from './icons/GamingLogo.vue'
import NewsLogo from './icons/NewsLogo.vue'
import SportsLogo from './icons/SportsLogo.vue'
import LearningLogo from './icons/LearningLogo.vue'
import YouTubeStudioRed from './icons/YouTubeStudioRed.vue'
import YouTubeMusicLogoRed from './icons/YouTubeMusicLogoRed.vue'
import YouTubeKidsLogoRed from './icons/YouTubeKidsLogoRed.vue'
import YouTubeSettingsLogo from './icons/YouTubeSettingsLogo.vue'
import ReportHistoryLogo from './icons/ReportHistoryLogo.vue'
import HelpLogo from './icons/HelpLogo.vue'
import SendFeedbackLogo from './icons/SendFeedbackLogo.vue'
import SubsLogo from './icons/SubsLogo.vue'
import UserGoogleLogo from './icons/userlogos/UserGoogleLogo.vue'
import UserSwitchLogo from './icons/userlogos/UserSwitchLogo.vue'
import UserSignOutLogo from './icons/userlogos/UserSignOutLogo.vue'
import UserYouTubeStudio from './icons/userlogos/UserYouTubeStudio.vue'
import UserPremium from './icons/userlogos/UserPremium.vue'
import UserPurchase from './icons/userlogos/UserPurchase.vue'
import UserData from './icons/userlogos/UserData.vue'
import UserAppearence from './icons/userlogos/UserAppearence.vue'
import UserLanguage from './icons/userlogos/UserLanguage.vue'
import UserMode from './icons/userlogos/UserMode.vue'
import UserLocation from './icons/userlogos/UserLocation.vue'
import UserKeyboard from './icons/userlogos/UserKeyboard.vue'
import UserSettings from './icons/userlogos/UserSettings.vue'
import UserHelp from './icons/userlogos/UserHelp.vue'
import UserFeedback from './icons/userlogos/UserFeedback.vue'
import UserUpload from './icons/userlogos/UserUpload.vue'
import UserCrearePost from './icons/userlogos/UserCrearePost.vue'
import UserLive from './icons/userlogos/UserLive.vue'

const randomSeed = () => Math.floor(Math.random() * 1000)
</script>

<template>
  <div class="bg-[#111111] text-center tracking-tight text-white">
    <input id="toggle-menu" type="checkbox" class="peer hidden" />
    <header class="fixed top-0 right-0 left-0 z-20 bg-[#111111]/95">
      <div class="pointer-events-none absolute inset-0 -z-1 backdrop-blur-xs"></div>
      <section class="flex flex-row items-center justify-between px-6 py-2">
        <div class="flex items-center justify-center gap-2">
          <label for="toggle-menu" class="cursor-pointer p-1">
            <Bars3Icon class="h-7" />
          </label>
          <a href="#" class="hidden w-32 cursor-pointer py-2 pr-5 sm:inline-block">
            <YouTubeLogo />
          </a>
        </div>

        <input type="checkbox" id="mic" class="peer hidden" />
        <div class="flex max-w-xl flex-1 items-center justify-center gap-4 px-2">
          <form class="relative flex w-full items-center">
            <input
              type="text"
              class="w-full rounded-l-full border border-neutral-800 px-4 py-2 outline-0 focus:border-blue-500"
              placeholder="Search"
            />
            <button type="button" class="absolute top-0 right-16">
              <XMarkIcon class="h-10 p-1" />
            </button>
            <button
              type="submit"
              class="rounded-r-full border border-neutral-800 bg-neutral-800 px-4 py-2 hover:bg-neutral-600"
            >
              <MagnifyingGlassIcon class="h-6" />
            </button>
          </form>

          <label for="mic" class="cursor-pointer">
            <div
              class="flex min-h-10 min-w-10 items-center justify-center rounded-full bg-neutral-800 hover:bg-neutral-600"
            >
              <MicrophoneIcon class="size-6" />
            </div>
          </label>
        </div>
        <label
          for="mic"
          class="fixed inset-0 z-10 hidden cursor-pointer justify-center bg-black/50 peer-checked:flex"
        >
          <div class="relative mt-10 h-[400px] w-[500px] rounded-xl bg-[#242424] p-4">
            <button
              for="mic"
              class="absolute top-4 right-4 cursor-pointer px-3 py-1 hover:bg-neutral-700"
            >
              <XMarkIcon class="h-10" />
            </button>
            <p class="mt-10 px-10 text-left text-3xl text-white">Listening...</p>
            <div class="absolute bottom-10 left-54 animate-ping rounded-full bg-red-500 p-3">
              <MicrophoneIcon class="size-6" />
            </div>
          </div>
        </label>

        <div class="hidden items-center justify-center gap-2 sm:flex">
          <div class="flex">
            <input type="checkbox" id="createBlock" class="peer hidden" />
            <label for="createBlock">
              <div
                class="flex h-10 items-center justify-center gap-2 rounded-full bg-neutral-800 px-3 hover:bg-neutral-600"
              >
                <PlusIcon class="size-6" />
                <span class="text-sm font-semibold">Create</span>
              </div>
            </label>
            <section
              class="fixed top-10 right-4 hidden w-[200px] rounded-xl bg-[#242424] peer-checked:block"
            >
              <ul class="my-2 rounded-xl text-sm">
                <li class="py-2 hover:bg-[#555555]">
                  <a href="#" class="flex items-center gap-4 px-6">
                    <UserUpload class="h-6" /> Upload video
                  </a>
                </li>
                <li class="py-2 hover:bg-[#555555]">
                  <a href="#" class="flex items-center gap-4 px-6"
                    ><UserLive class="h-6" /> Go Live
                  </a>
                </li>
                <li class="py-2 hover:bg-[#555555]">
                  <a href="#" class="flex items-center gap-4 px-6">
                    <UserCrearePost class="h-6" />
                    Create post
                  </a>
                </li>
              </ul>
            </section>
          </div>

          <div class="flex">
            <input type="checkbox" id="notifications" class="peer hidden" />
            <label for="notifications">
              <div class="rounded-full p-1 hover:bg-neutral-600">
                <BellIcon class="size-7" />
              </div>
            </label>
            <section
              class="fixed top-12 right-18 hidden h-[500px] w-[500px] rounded-2xl bg-[#242424] text-sm peer-checked:block"
            >
              <div class="flex items-center justify-between p-4">
                Notifications <UserSettings class="h-8 rounded-full p-1 hover:bg-[#555555]" />
              </div>
              <hr class="my-1 py-1 text-[#555555]" />
              <div>
                <ul class="flex flex-col">
                  <li class="p-4 hover:bg-[#555555]">
                    <a href="#" class="flex items-center justify-between gap-4">
                      <img
                        :src="`https://picsum.photos/seed/${randomSeed()}/560/315`"
                        alt="video_preview"
                        class="h-12 w-12 rounded-full"
                      />
                      <div class="w-70 text-left text-sm">
                        <p class="">Arthas is live: Последний из вас</p>
                        <p class="font-light">1 days ago</p>
                      </div>
                      <img
                        :src="`https://picsum.photos/seed/${randomSeed()}/560/315`"
                        alt="video_preview"
                        class="h-9 w-16"
                      />
                      <button>
                        <EllipsisVerticalIcon class="h-6" />
                      </button>
                    </a>
                  </li>
                  <li class="p-4 hover:bg-[#555555]">
                    <a href="#" class="flex items-center justify-between gap-4">
                      <img
                        :src="`https://picsum.photos/seed/${randomSeed()}/560/315`"
                        alt="video_preview"
                        class="h-12 w-12 rounded-full"
                      />
                      <div class="w-70 text-left text-sm">
                        <p class="">Bouleward Depo uploaded: Bouleward Depo - ДЫРБУЛЩИЩ</p>
                        <p class="font-light">3 days ago</p>
                      </div>
                      <img
                        :src="`https://picsum.photos/seed/${randomSeed()}/560/315`"
                        alt="video_preview"
                        class="h-9 w-16"
                      />
                      <button>
                        <EllipsisVerticalIcon class="h-6" />
                      </button>
                    </a>
                  </li>
                  <li class="p-4 hover:bg-[#555555]">
                    <a href="#" class="flex items-center justify-between gap-4">
                      <img
                        :src="`https://picsum.photos/seed/${randomSeed()}/560/315`"
                        alt="video_preview"
                        class="h-12 w-12 rounded-full"
                      />
                      <div class="w-70 text-left text-sm">
                        <p class="">Янчик uploaded: Пересадка</p>
                        <p class="font-light">6 days ago</p>
                      </div>
                      <img
                        :src="`https://picsum.photos/seed/${randomSeed()}/560/315`"
                        alt="video_preview"
                        class="h-9 w-16"
                      />
                      <button>
                        <EllipsisVerticalIcon class="h-6" />
                      </button>
                    </a>
                  </li>
                  <li class="p-4 hover:bg-[#555555]">
                    <a href="#" class="flex items-center justify-between gap-4">
                      <img
                        :src="`https://picsum.photos/seed/${randomSeed()}/560/315`"
                        alt="video_preview"
                        class="h-12 w-12 rounded-full"
                      />
                      <div class="w-70 text-left text-sm">
                        <p class="">Paul_Matteo uploaded: Тот самый друг</p>
                        <p class="font-light">8 days ago</p>
                      </div>
                      <img
                        :src="`https://picsum.photos/seed/${randomSeed()}/560/315`"
                        alt="video_preview"
                        class="h-9 w-16"
                      />
                      <button>
                        <EllipsisVerticalIcon class="h-6" />
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          <div>
            <input type="checkbox" id="usermenu" class="peer hidden" />
            <label for="usermenu">
              <img
                :src="`https://picsum.photos/560/315`"
                alt="video_preview"
                class="h-10 w-10 rounded-full"
              />
            </label>
            <section
              class="fixed top-12 right-4 z-50 hidden w-[300px] overflow-auto rounded-2xl bg-[#242424] peer-checked:block"
            >
              <div class="flex">
                <img
                  :src="`https://picsum.photos/560/315`"
                  alt="video_preview"
                  class="m-2 h-10 w-10 rounded-full"
                />
                <div class="flex flex-col items-start py-2">
                  <span>John Doe</span>
                  <span>@Joundoe12</span>
                  <a href="#" class="cursor-pointer py-1 text-blue-400">View your channel</a>
                </div>
              </div>
              <hr class="my-1 py-1 text-[#555555]" />
              <ul class="text-sm">
                <li class="p-2 hover:bg-[#555555]">
                  <a href="" class="flex items-center gap-4"
                    ><UserGoogleLogo class="h-6" />Google Account</a
                  >
                </li>
                <li class="p-2 hover:bg-[#555555]">
                  <a href="" class="flex items-center gap-4"
                    ><UserSwitchLogo class="h-6" />Switch Account</a
                  >
                </li>
                <li class="p-2 hover:bg-[#555555]">
                  <a href="" class="flex items-center gap-4"
                    ><UserSignOutLogo class="h-6" />Sign out</a
                  >
                </li>
                <hr class="my-2 text-[#555555]" />
                <li class="p-2 hover:bg-[#555555]">
                  <a href="" class="flex items-center gap-4"
                    ><UserYouTubeStudio class="h-6" />YouTube studio</a
                  >
                </li>
                <li class="p-2 hover:bg-[#555555]">
                  <a href="" class="flex items-center gap-4"
                    ><UserPremium class="h-6" />Your Premium Benefits</a
                  >
                </li>
                <li class="p-2 hover:bg-[#555555]">
                  <a href="" class="flex items-center gap-4"
                    ><UserPurchase class="h-6" />Purchases and memberships</a
                  >
                </li>
                <hr class="my-2 text-[#555555]" />
                <li class="p-2 hover:bg-[#555555]">
                  <a href="" class="flex items-center gap-4"
                    ><UserData class="h-6" />Your data in YouTube</a
                  >
                </li>
                <li class="p-2 hover:bg-[#555555]">
                  <a href="" class="flex items-center gap-4"
                    ><UserAppearence class="h-6" />Appearence: Device theme</a
                  >
                </li>
                <li class="p-2 hover:bg-[#555555]">
                  <a href="" class="flex items-center gap-4"
                    ><UserLanguage class="h-6" />Language: English</a
                  >
                </li>
                <li class="p-2 hover:bg-[#555555]">
                  <a href="" class="flex items-center gap-4"
                    ><UserMode class="h-6" />Restricted Mode: Off</a
                  >
                </li>
                <li class="p-2 hover:bg-[#555555]">
                  <a href="" class="flex items-center gap-4"
                    ><UserLocation class="h-6" />Location: Ukraine</a
                  >
                </li>
                <li class="p-2 hover:bg-[#555555]">
                  <a href="" class="flex items-center gap-4"
                    ><UserKeyboard class="h-6" />Keyboard shortcuts</a
                  >
                </li>
                <hr class="my-2 text-[#555555]" />
                <li class="p-2 hover:bg-[#555555]">
                  <a href="" class="flex items-center gap-4"
                    ><UserSettings class="h-6" />Settings</a
                  >
                </li>
                <hr class="my-2 text-[#555555]" />
                <li class="p-2 hover:bg-[#555555]">
                  <a href="" class="flex items-center gap-4"><UserHelp class="h-6" />Help</a>
                </li>
                <li class="p-2 hover:bg-[#555555]">
                  <a href="" class="flex items-center gap-4"
                    ><UserFeedback class="h-6" />Send feedback</a
                  >
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </header>

    <aside class="fixed top-14 bottom-0 left-0 z-20 hidden w-[80px] bg-[#111111] md:block">
      <nav>
        <ul class="flex flex-col items-center gap-3 text-[10px]">
          <li class="w-full">
            <a href="#" class="flex flex-col gap-1 rounded-lg py-2 hover:bg-[#292929]"
              ><HomeLogo class="h-6" />Home
            </a>
          </li>
          <li class="w-full">
            <a href="#" class="flex flex-col gap-1 rounded-lg py-2 hover:bg-[#292929]"
              ><ShortsLogo class="h-6" />Shorts</a
            >
          </li>
          <li class="w-full">
            <a href="#" class="flex flex-col gap-1 rounded-lg py-2 hover:bg-[#292929]"
              ><SubscriptionsLogo class="h-6" />Subscriptions
            </a>
          </li>
          <li class="w-full">
            <a href="#" class="flex flex-col gap-1 rounded-lg py-2 hover:bg-[#292929]"
              ><YouTubeMusicLogo class="h-6" />YouTube Music</a
            >
          </li>
          <li class="w-full">
            <a href="#" class="flex flex-col gap-1 rounded-lg py-2 hover:bg-[#292929]"
              ><UserCircleIcon class="h-6" />You</a
            >
          </li>
          <li class="w-full">
            <a href="#" class="flex flex-col gap-1 rounded-lg py-2 hover:bg-[#292929]"
              ><DownloadsLogo class="h-6" />Downloads</a
            >
          </li>
        </ul>
      </nav>
    </aside>

    <aside
      class="fixed inset-0 z-20 max-h-screen w-[260px] -translate-x-full overflow-auto bg-[#151515] transition duration-300 peer-checked:block peer-checked:translate-x-0"
    >
      <nav class="fixed">
        <div class="flex items-center gap-2 px-6 py-2">
          <input id="toggle-menu" type="checkbox" class="peer hidden" />
          <label for="toggle-menu" class="cursor-pointer p-1">
            <Bars3Icon class="h-7" />
          </label>
          <a href="#" class="w-32 cursor-pointer py-2 pr-5">
            <YouTubeLogo />
          </a>
        </div>

        <ul>
          <li class="px-4">
            <a href="#" class="flex items-center gap-6 rounded-xl bg-[#232323] px-6 py-2 text-sm"
              ><HomeLogo class="h-6" />Home</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm hover:bg-[#232323]"
              ><ShortsLogo class="h-6" />Shorts</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm hover:bg-[#232323]"
            >
              <SubscriptionsLogo class="h-6" />Subscriptions<span
                class="h-1 w-1 rounded-full bg-blue-400"
              ></span
            ></a>
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm hover:bg-[#232323]"
              ><YouTubeMusicLogo class="h-6" />YouTube Music</a
            >
          </li>
        </ul>
        <hr class="m-2 border-1 border-[#373737]" />
        <ul>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-4 rounded-xl px-6 py-2 text-sm font-semibold hover:bg-[#232323]"
              >You<ChevronRightIcon class="h-6"
            /></a>
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm hover:bg-[#232323]"
              ><HistoryLogo class="h-6" />History</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm hover:bg-[#232323]"
            >
              <PlaylistLogo class="h-6" />Playlists</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm hover:bg-[#232323]"
              ><YourVideosLogo class="h-6" />Your videos</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm hover:bg-[#232323]"
            >
              <WatchLaterLogo class="h-6" />Watch later</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm hover:bg-[#232323]"
            >
              <LikedVideosLogo class="h-6" />Liked videos</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm hover:bg-[#232323]"
            >
              <DownloadsLogo class="h-6" />Downloads</a
            >
          </li>
        </ul>
        <hr class="m-2 border-1 border-[#373737]" />
        <div class="px-10 py-1 text-left font-semibold">Subscriptions</div>
        <ul>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm hover:bg-[#232323]"
              ><ChannelLogo letter="A" color="#0042a9" />Video 1</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm hover:bg-[#232323]"
              ><ChannelLogo letter="B" color="#4382D3" />Video 2</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm hover:bg-[#232323]"
              ><ChannelLogo letter="N" color="#238223" />Video 3</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm hover:bg-[#232323]"
              ><ChannelLogo letter="D" color="#13D2A3" />Video 4</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm hover:bg-[#232323]"
              ><ChannelLogo letter="S" color="#432223" />Video 5</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm hover:bg-[#232323]"
              ><ChannelLogo letter="W" color="#13A273" />Video 6</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm hover:bg-[#232323]"
              ><ChannelLogo letter="B" color="#432273" />Video 7</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm hover:bg-[#232323]"
              ><ChannelLogo letter="Si" color="#228251" />Video 8</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm hover:bg-[#232323]"
              ><ChevronDownIcon class="h-6" />Show more</a
            >
          </li>
        </ul>
        <hr class="m-2 border-1 border-[#373737]" />
        <div class="px-10 py-1 text-left font-semibold">Explore</div>
        <ul>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm hover:bg-[#232323]"
              ><TrendingLogo class="h-6" />Trending</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm hover:bg-[#232323]"
              ><MusicLogo class="h-6" />Music</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm hover:bg-[#232323]"
              ><MoviesLogo class="h-6" />Movies</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm hover:bg-[#232323]"
              ><GamingLogo class="h-6" />Gaming</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm hover:bg-[#232323]"
              ><NewsLogo class="h-6" />News</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm hover:bg-[#232323]"
            >
              <SportsLogo class="h-6" />Sports</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm hover:bg-[#232323]"
            >
              <LearningLogo class="h-6" />Learning</a
            >
          </li>
        </ul>
        <hr class="m-2 border-1 border-[#373737]" />
        <div class="px-10 py-1 text-left font-semibold">More from YouTube</div>
        <ul>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm hover:bg-[#232323]"
            >
              <YouTubeStudioRed class="h-6" />YouTube Studio</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm hover:bg-[#232323]"
            >
              <YouTubeMusicLogoRed class="h-6" />YouTube Music</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm hover:bg-[#232323]"
              ><YouTubeKidsLogoRed class="h-6" />YouTube Kids</a
            >
          </li>
        </ul>
        <hr class="m-2 border-1 border-[#373737]" />
        <ul>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm hover:bg-[#232323]"
            >
              <YouTubeSettingsLogo class="h-6" />Setting</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm hover:bg-[#232323]"
              ><ReportHistoryLogo class="h-6" />Report history</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm hover:bg-[#232323]"
              ><HelpLogo class="h-6" />Help</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm hover:bg-[#232323]"
              ><SendFeedbackLogo class="h-6" />Send feedback</a
            >
          </li>
        </ul>
        <hr class="m-2 border-1 border-[#373737]" />
        <ul class="flex flex-wrap gap-1 px-8 pt-4 text-xs font-semibold text-[#aaaaaa]">
          <li>
            <a href="#" class="p-1">About</a>
          </li>
          <li><a href="#" class="p-1">Press</a></li>
          <li><a href="#" class="p-1">Copyright</a></li>
          <li><a href="#" class="p-1">Contact us</a></li>
          <li><a href="#" class="p-1">Creators</a></li>
          <li><a href="#" class="p-1">Advertise</a></li>
          <li><a href="#" class="p-1">Developers</a></li>
        </ul>
        <ul class="flex flex-wrap gap-1 px-8 pt-4 text-xs font-semibold text-[#aaaaaa]">
          <li><a href="#" class="p-1">Terms</a></li>
          <li><a href="#" class="p-1">Privacy</a></li>
          <li><a href="#" class="p-1">Policy & Safety</a></li>
          <li><a href="#" class="p-1">How YouTube works</a></li>
          <li><a href="#" class="p-1">Test new features</a></li>
        </ul>
        <a href="#" class="m-2 block px-8 text-left text-xs font-semibold text-[#717171]"
          >&copy; 2025 Google LLC</a
        >
      </nav>
    </aside>

    <section
      class="fixed top-14 right-0 left-0 z-10 bg-[#121212]/95 py-1 pl-2 text-[16px] md:pl-20"
    >
      <div class="pointer-events-none absolute inset-0 -z-10 backdrop-blur-xs"></div>
      <ul class="scrollbar-hide flex items-center gap-2 overflow-auto px-2 py-1 whitespace-nowrap">
        <li
          class="cursor-pointer rounded-lg bg-[#efefef] px-2 py-0.5 text-gray-900 transition duration-300 hover:bg-[#292929]"
        >
          All
        </li>
        <li
          class="cursor-pointer rounded-lg bg-[#232323] px-2.5 py-0.5 transition duration-300 hover:bg-[#292929]"
        >
          Poscasts
        </li>
        <li
          class="cursor-pointer rounded-lg bg-[#232323] px-2.5 py-0.5 transition duration-300 hover:bg-[#292929]"
        >
          Music
        </li>
        <li
          class="cursor-pointer rounded-lg bg-[#232323] px-2.5 py-0.5 transition duration-300 hover:bg-[#292929]"
        >
          Mixes
        </li>
        <li
          class="cursor-pointer rounded-lg bg-[#232323] px-2.5 py-0.5 transition duration-300 hover:bg-[#292929]"
        >
          Apple
        </li>
        <li
          class="cursor-pointer rounded-lg bg-[#232323] px-2.5 py-0.5 transition duration-300 hover:bg-[#292929]"
        >
          Frontend developing
        </li>
        <li
          class="cursor-pointer rounded-lg bg-[#232323] px-2.5 py-0.5 transition duration-300 hover:bg-[#292929]"
        >
          Tesla
        </li>
        <li
          class="cursor-pointer rounded-lg bg-[#232323] px-2.5 py-0.5 transition duration-300 hover:bg-[#292929]"
        >
          Blogs
        </li>
        <li
          class="cursor-pointer rounded-lg bg-[#232323] px-2.5 py-0.5 transition duration-300 hover:bg-[#292929]"
        >
          Satire
        </li>
        <li
          class="cursor-pointer rounded-lg bg-[#232323] px-2.5 py-0.5 transition duration-300 hover:bg-[#292929]"
        >
          Live
        </li>
        <li
          class="cursor-pointer rounded-lg bg-[#232323] px-2.5 py-0.5 transition duration-300 hover:bg-[#292929]"
        >
          Live television
        </li>
        <li
          class="cursor-pointer rounded-lg bg-[#232323] px-2.5 py-0.5 transition duration-300 hover:bg-[#292929]"
        >
          Comedy club
        </li>
        <li
          class="cursor-pointer rounded-lg bg-[#232323] px-2.5 py-0.5 transition duration-300 hover:bg-[#292929]"
        >
          Gadges
        </li>
        <li
          class="cursor-pointer rounded-lg bg-[#232323] px-2.5 py-0.5 transition duration-300 hover:bg-[#292929]"
        >
          Computers
        </li>
        <li
          class="cursor-pointer rounded-lg bg-[#232323] px-2.5 py-0.5 transition duration-300 hover:bg-[#292929]"
        >
          Rapping
        </li>
        <li
          class="cursor-pointer rounded-lg bg-[#232323] px-2.5 py-0.5 transition duration-300 hover:bg-[#292929]"
        >
          Electronic
        </li>
        <li
          class="cursor-pointer rounded-lg bg-[#232323] px-2.5 py-0.5 transition duration-300 hover:bg-[#292929]"
        >
          Recently uploaded
        </li>
        <li
          class="cursor-pointer rounded-lg bg-[#232323] px-2.5 py-0.5 transition duration-300 hover:bg-[#292929]"
        >
          Watched
        </li>
        <li
          class="cursor-pointer rounded-lg bg-[#232323] px-2.5 py-0.5 transition duration-300 hover:bg-[#292929]"
        >
          New to you
        </li>
      </ul>
    </section>

    <main class="px-6 pt-25 md:ml-[80px]">
      <section class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <a href="#" class="group mb-5">
          <div class="relative">
            <img
              :src="`https://picsum.photos/seed/${randomSeed()}/560/315`"
              alt="video_preview"
              class="w-full rounded-xl"
            />
            <span
              class="absolute top-1 right-1 z-10 h-10 w-10 rounded-full bg-[#121212] p-2 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SpeakerXMarkIcon
            /></span>
            <span
              class="absolute top-1 right-12 z-10 h-10 w-10 rounded-full bg-[#121212] p-2 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SpeakerWaveIcon
            /></span>
            <span
              class="absolute top-12 right-1 z-10 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SubsLogo
            /></span>
            <span
              class="absolute right-1 bottom-1 rounded bg-[#121212] px-0.5 text-sm font-semibold"
              >42:22</span
            >
          </div>
          <div class="mt-3 flex items-start">
            <img
              :src="`https://picsum.photos/seed/${randomSeed()}/32/32`"
              alt="channelLogo"
              class="mr-3 h-10 w-10 rounded-full"
            />
            <div>
              <div class="mb-1 text-left font-semibold">All About LEGO</div>
              <div class="flex items-center gap-1 text-sm text-[#aaaaaa]">
                <span class="">LEGO</span>
                <CheckCircleIcon class="h-5" />
              </div>
              <div class="flex items-center gap-1 text-sm text-[#aaaaaa]">
                <span>1M views</span>
                &middot;
                <span>6 month ago</span>
              </div>
            </div>
            <button class="ml-auto">
              <EllipsisVerticalIcon class="h-6" />
            </button>
          </div>
        </a>
        <a href="#" class="group mb-5">
          <div class="relative">
            <img
              :src="`https://picsum.photos/seed/${randomSeed()}/560/315`"
              alt="video_preview"
              class="w-full rounded-xl"
            />
            <span
              class="absolute top-1 right-1 z-10 h-10 w-10 rounded-full bg-[#121212] p-2 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SpeakerXMarkIcon
            /></span>
            <span
              class="absolute top-1 right-12 z-10 h-10 w-10 rounded-full bg-[#121212] p-2 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SpeakerWaveIcon
            /></span>
            <span
              class="absolute top-12 right-1 z-10 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SubsLogo
            /></span>
            <span
              class="absolute right-1 bottom-1 rounded bg-[#121212] px-0.5 text-sm font-semibold"
              >20:09</span
            >
          </div>
          <div class="mt-3 flex items-start">
            <img
              :src="`https://picsum.photos/seed/${randomSeed()}/32/32`"
              alt="channelLogo"
              class="mr-3 h-10 w-10 rounded-full"
            />
            <div>
              <div class="mb-1 text-left font-semibold">Space Life</div>
              <div class="flex items-center gap-1 text-sm text-[#aaaaaa]">
                <span class="">COSMO</span>
                <CheckCircleIcon class="h-5" />
              </div>
              <div class="flex items-center gap-1 text-sm text-[#aaaaaa]">
                <span>2M views</span>
                &middot;
                <span>2 year ago</span>
              </div>
            </div>
            <button class="ml-auto">
              <EllipsisVerticalIcon class="h-6" />
            </button>
          </div>
        </a>
        <a href="#" class="group mb-5">
          <div class="relative">
            <img
              :src="`https://picsum.photos/seed/${randomSeed()}/560/315`"
              alt="video_preview"
              class="w-full rounded-xl"
            />
            <span
              class="absolute top-1 right-1 z-10 h-10 w-10 rounded-full bg-[#121212] p-2 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SpeakerXMarkIcon
            /></span>
            <span
              class="absolute top-1 right-12 z-10 h-10 w-10 rounded-full bg-[#121212] p-2 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SpeakerWaveIcon
            /></span>
            <span
              class="absolute top-12 right-1 z-10 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SubsLogo
            /></span>
            <span
              class="absolute right-1 bottom-1 rounded bg-[#121212] px-0.5 text-sm font-semibold"
              >21:22</span
            >
          </div>
          <div class="mt-3 flex items-start">
            <img
              :src="`https://picsum.photos/seed/${randomSeed()}/32/32`"
              alt="channelLogo"
              class="mr-3 h-10 w-10 rounded-full"
            />
            <div>
              <div class="mb-1 text-left font-semibold">Is Zombie is REAL?</div>
              <div class="flex items-center gap-1 text-sm text-[#aaaaaa]">
                <span class="">Scary story</span>
                <CheckCircleIcon class="h-5" />
              </div>
              <div class="flex items-center gap-1 text-sm text-[#aaaaaa]">
                <span>1M views</span>
                &middot;
                <span>2 year ago</span>
              </div>
            </div>
            <button class="ml-auto">
              <EllipsisVerticalIcon class="h-6" />
            </button>
          </div>
        </a>
        <a href="#" class="group mb-5">
          <div class="relative">
            <img
              :src="`https://picsum.photos/seed/${randomSeed()}/560/315`"
              alt="video_preview"
              class="w-full rounded-xl"
            />
            <span
              class="absolute top-1 right-1 z-10 h-10 w-10 rounded-full bg-[#121212] p-2 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SpeakerXMarkIcon
            /></span>
            <span
              class="absolute top-1 right-12 z-10 h-10 w-10 rounded-full bg-[#121212] p-2 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SpeakerWaveIcon
            /></span>
            <span
              class="absolute top-12 right-1 z-10 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SubsLogo
            /></span>
            <span
              class="absolute right-1 bottom-1 rounded bg-[#121212] px-0.5 text-sm font-semibold"
              >17:28</span
            >
          </div>
          <div class="mt-3 flex items-start">
            <img
              :src="`https://picsum.photos/seed/${randomSeed()}/32/32`"
              alt="channelLogo"
              class="mr-3 h-10 w-10 rounded-full"
            />
            <div>
              <div class="mb-1 text-left font-semibold">Can You Pass This Impossible Quiz?</div>
              <div class="flex items-center gap-1 text-sm text-[#aaaaaa]">
                <span class="">Lorax</span>
                <CheckCircleIcon class="h-5" />
              </div>
              <div class="flex items-center gap-1 text-sm text-[#aaaaaa]">
                <span>1M views</span>
                &middot;
                <span>2 year ago</span>
              </div>
            </div>
            <button class="ml-auto">
              <EllipsisVerticalIcon class="h-6" />
            </button>
          </div>
        </a>
        <a href="#" class="group mb-5">
          <div class="relative">
            <img
              :src="`https://picsum.photos/seed/${randomSeed()}/560/315`"
              alt="video_preview"
              class="w-full rounded-xl"
            />
            <span
              class="absolute top-1 right-1 z-10 h-10 w-10 rounded-full bg-[#121212] p-2 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SpeakerXMarkIcon
            /></span>
            <span
              class="absolute top-1 right-12 z-10 h-10 w-10 rounded-full bg-[#121212] p-2 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SpeakerWaveIcon
            /></span>
            <span
              class="absolute top-12 right-1 z-10 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SubsLogo
            /></span>
            <span
              class="absolute right-1 bottom-1 rounded bg-[#121212] px-0.5 text-sm font-semibold"
              >47:11</span
            >
          </div>
          <div class="mt-3 flex items-start">
            <img
              :src="`https://picsum.photos/seed/${randomSeed()}/32/32`"
              alt="channelLogo"
              class="mr-3 h-10 w-10 rounded-full"
            />
            <div>
              <div class="mb-1 text-left font-semibold">LAMBO VS FERRARI</div>
              <div class="flex items-center gap-1 text-sm text-[#aaaaaa]">
                <span class="">CARS</span>
                <CheckCircleIcon class="h-5" />
              </div>
              <div class="flex items-center gap-1 text-sm text-[#aaaaaa]">
                <span>10M views</span>
                &middot;
                <span>2 year ago</span>
              </div>
            </div>
            <button class="ml-auto">
              <EllipsisVerticalIcon class="h-6" />
            </button>
          </div>
        </a>
        <a href="#" class="group mb-5">
          <div class="relative">
            <img
              :src="`https://picsum.photos/seed/${randomSeed()}/560/315`"
              alt="video_preview"
              class="w-full rounded-xl"
            />
            <span
              class="absolute top-1 right-1 z-10 h-10 w-10 rounded-full bg-[#121212] p-2 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SpeakerXMarkIcon
            /></span>
            <span
              class="absolute top-1 right-12 z-10 h-10 w-10 rounded-full bg-[#121212] p-2 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SpeakerWaveIcon
            /></span>
            <span
              class="absolute top-12 right-1 z-10 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SubsLogo
            /></span>
            <span
              class="absolute right-1 bottom-1 rounded bg-[#121212] px-0.5 text-sm font-semibold"
              >52:02</span
            >
          </div>
          <div class="mt-3 flex items-start">
            <img
              :src="`https://picsum.photos/seed/${randomSeed()}/32/32`"
              alt="channelLogo"
              class="mr-3 h-10 w-10 rounded-full"
            />
            <div>
              <div class="mb-1 text-left font-semibold">10 Things You Didn't Know About Planes</div>
              <div class="flex items-center gap-1 text-sm text-[#aaaaaa]">
                <span class="">Planes Industry</span>
                <CheckCircleIcon class="h-5" />
              </div>
              <div class="flex items-center gap-1 text-sm text-[#aaaaaa]">
                <span>1M views</span>
                &middot;
                <span>2 year ago</span>
              </div>
            </div>
            <button class="ml-auto">
              <EllipsisVerticalIcon class="h-6" />
            </button>
          </div>
        </a>
        <a href="#" class="group mb-5">
          <div class="relative">
            <img
              :src="`https://picsum.photos/seed/${randomSeed()}/560/315`"
              alt="video_preview"
              class="w-full rounded-xl"
            />
            <span
              class="absolute top-1 right-1 z-10 h-10 w-10 rounded-full bg-[#121212] p-2 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SpeakerXMarkIcon
            /></span>
            <span
              class="absolute top-1 right-12 z-10 h-10 w-10 rounded-full bg-[#121212] p-2 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SpeakerWaveIcon
            /></span>
            <span
              class="absolute top-12 right-1 z-10 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SubsLogo
            /></span>
            <span
              class="absolute right-1 bottom-1 rounded bg-[#121212] px-0.5 text-sm font-semibold"
              >42:22</span
            >
          </div>
          <div class="mt-3 flex items-start">
            <img
              :src="`https://picsum.photos/seed/${randomSeed()}/32/32`"
              alt="channelLogo"
              class="mr-3 h-10 w-10 rounded-full"
            />
            <div>
              <div class="mb-1 text-left font-semibold">Top 10 Shazam songs 2023</div>
              <div class="flex items-center gap-1 text-sm text-[#aaaaaa]">
                <span class="">Shazam</span>
                <CheckCircleIcon class="h-5" />
              </div>
              <div class="flex items-center gap-1 text-sm text-[#aaaaaa]">
                <span>1M views</span>
                &middot;
                <span>2 year ago</span>
              </div>
            </div>
            <button class="ml-auto">
              <EllipsisVerticalIcon class="h-6" />
            </button>
          </div>
        </a>
        <a href="#" class="group mb-5">
          <div class="relative">
            <img
              :src="`https://picsum.photos/seed/${randomSeed()}/560/315`"
              alt="video_preview"
              class="w-full rounded-xl"
            />
            <span
              class="absolute top-1 right-1 z-10 h-10 w-10 rounded-full bg-[#121212] p-2 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SpeakerXMarkIcon
            /></span>
            <span
              class="absolute top-1 right-12 z-10 h-10 w-10 rounded-full bg-[#121212] p-2 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SpeakerWaveIcon
            /></span>
            <span
              class="absolute top-12 right-1 z-10 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SubsLogo
            /></span>
            <span
              class="absolute right-1 bottom-1 rounded bg-[#121212] px-0.5 text-sm font-semibold"
              >6:11</span
            >
          </div>
          <div class="mt-3 flex items-start">
            <img
              :src="`https://picsum.photos/seed/${randomSeed()}/32/32`"
              alt="channelLogo"
              class="mr-3 h-10 w-10 rounded-full"
            />
            <div>
              <div class="mb-1 text-left font-semibold">
                Kanye West - who is he? Genius or psyco
              </div>
              <div class="flex items-center gap-1 text-sm text-[#aaaaaa]">
                <span class="">MTV</span>
                <CheckCircleIcon class="h-5" />
              </div>
              <div class="flex items-center gap-1 text-sm text-[#aaaaaa]">
                <span>12M views</span>
                &middot;
                <span>3 year ago</span>
              </div>
            </div>
            <button class="ml-auto">
              <EllipsisVerticalIcon class="h-6" />
            </button>
          </div>
        </a>
        <a href="#" class="group mb-5">
          <div class="relative">
            <img
              :src="`https://picsum.photos/seed/${randomSeed()}/560/315`"
              alt="video_preview"
              class="w-full rounded-xl"
            />
            <span
              class="absolute top-1 right-1 z-10 h-10 w-10 rounded-full bg-[#121212] p-2 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SpeakerXMarkIcon
            /></span>
            <span
              class="absolute top-1 right-12 z-10 h-10 w-10 rounded-full bg-[#121212] p-2 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SpeakerWaveIcon
            /></span>
            <span
              class="absolute top-12 right-1 z-10 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SubsLogo
            /></span>
            <span
              class="absolute right-1 bottom-1 rounded bg-[#121212] px-0.5 text-sm font-semibold"
              >7:15</span
            >
          </div>
          <div class="mt-3 flex items-start">
            <img
              :src="`https://picsum.photos/seed/${randomSeed()}/32/32`"
              alt="channelLogo"
              class="mr-3 h-10 w-10 rounded-full"
            />
            <div>
              <div class="mb-1 text-left font-semibold">10 ways to prepare healthy chicken</div>
              <div class="flex items-center gap-1 text-sm text-[#aaaaaa]">
                <span class="">Cocked</span>
                <CheckCircleIcon class="h-5" />
              </div>
              <div class="flex items-center gap-1 text-sm text-[#aaaaaa]">
                <span>233K views</span>
                &middot;
                <span>1 year ago</span>
              </div>
            </div>
            <button class="ml-auto">
              <EllipsisVerticalIcon class="h-6" />
            </button>
          </div>
        </a>
        <a href="#" class="group mb-5">
          <div class="relative">
            <img
              :src="`https://picsum.photos/seed/${randomSeed()}/560/315`"
              alt="video_preview"
              class="w-full rounded-xl"
            />
            <span
              class="absolute top-1 right-1 z-10 h-10 w-10 rounded-full bg-[#121212] p-2 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SpeakerXMarkIcon
            /></span>
            <span
              class="absolute top-1 right-12 z-10 h-10 w-10 rounded-full bg-[#121212] p-2 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SpeakerWaveIcon
            /></span>
            <span
              class="absolute top-12 right-1 z-10 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SubsLogo
            /></span>
            <span
              class="absolute right-1 bottom-1 rounded bg-[#121212] px-0.5 text-sm font-semibold"
              >42:32</span
            >
          </div>
          <div class="mt-3 flex items-start">
            <img
              :src="`https://picsum.photos/seed/${randomSeed()}/32/32`"
              alt="channelLogo"
              class="mr-3 h-10 w-10 rounded-full"
            />
            <div>
              <div class="mb-1 text-left font-semibold">The biggest buildings in the world</div>
              <div class="flex items-center gap-1 text-sm text-[#aaaaaa]">
                <span class="">WSI</span>
                <CheckCircleIcon class="h-5" />
              </div>
              <div class="flex items-center gap-1 text-sm text-[#aaaaaa]">
                <span>3M views</span>
                &middot;
                <span>5 year ago</span>
              </div>
            </div>
            <button class="ml-auto">
              <EllipsisVerticalIcon class="h-6" />
            </button>
          </div>
        </a>
        <a href="#" class="group mb-5">
          <div class="relative">
            <img
              :src="`https://picsum.photos/seed/${randomSeed()}/560/315`"
              alt="video_preview"
              class="w-full rounded-xl"
            />
            <span
              class="absolute top-1 right-1 z-10 h-10 w-10 rounded-full bg-[#121212] p-2 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SpeakerXMarkIcon
            /></span>
            <span
              class="absolute top-1 right-12 z-10 h-10 w-10 rounded-full bg-[#121212] p-2 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SpeakerWaveIcon
            /></span>
            <span
              class="absolute top-12 right-1 z-10 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SubsLogo
            /></span>
            <span
              class="absolute right-1 bottom-1 rounded bg-[#121212] px-0.5 text-sm font-semibold"
              >52:02</span
            >
          </div>
          <div class="mt-3 flex items-start">
            <img
              :src="`https://picsum.photos/seed/${randomSeed()}/32/32`"
              alt="channelLogo"
              class="mr-3 h-10 w-10 rounded-full"
            />
            <div>
              <div class="mb-1 text-left font-semibold">React vs Vue</div>
              <div class="flex items-center gap-1 text-sm text-[#aaaaaa]">
                <span class="">JS Coder</span>
                <CheckCircleIcon class="h-5" />
              </div>
              <div class="flex items-center gap-1 text-sm text-[#aaaaaa]">
                <span>1M views</span>
                &middot;
                <span>2 month ago</span>
              </div>
            </div>
            <button class="ml-auto">
              <EllipsisVerticalIcon class="h-6" />
            </button>
          </div>
        </a>
        <a href="#" class="group mb-5">
          <div class="relative">
            <img
              :src="`https://picsum.photos/seed/${randomSeed()}/560/315`"
              alt="video_preview"
              class="w-full rounded-xl"
            />
            <span
              class="absolute top-1 right-1 z-10 h-10 w-10 rounded-full bg-[#121212] p-2 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SpeakerXMarkIcon
            /></span>
            <span
              class="absolute top-1 right-12 z-10 h-10 w-10 rounded-full bg-[#121212] p-2 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SpeakerWaveIcon
            /></span>
            <span
              class="absolute top-12 right-1 z-10 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SubsLogo
            /></span>
            <span
              class="absolute right-1 bottom-1 rounded bg-[#121212] px-0.5 text-sm font-semibold"
              >11:42</span
            >
          </div>
          <div class="mt-3 flex items-start">
            <img
              :src="`https://picsum.photos/seed/${randomSeed()}/32/32`"
              alt="channelLogo"
              class="mr-3 h-10 w-10 rounded-full"
            />
            <div>
              <div class="mb-1 text-left font-semibold">
                10 Things You Didn't Know About Animals
              </div>
              <div class="flex items-center gap-1 text-sm text-[#aaaaaa]">
                <span class="">Animals</span>
                <CheckCircleIcon class="h-5" />
              </div>
              <div class="flex items-center gap-1 text-sm text-[#aaaaaa]">
                <span>772K views</span>
                &middot;
                <span>2 month ago</span>
              </div>
            </div>
            <button class="ml-auto">
              <EllipsisVerticalIcon class="h-6" />
            </button>
          </div>
        </a>
        <a href="#" class="group mb-5">
          <div class="relative">
            <img
              :src="`https://picsum.photos/seed/${randomSeed()}/560/315`"
              alt="video_preview"
              class="w-full rounded-xl"
            />
            <span
              class="absolute top-1 right-1 z-10 h-10 w-10 rounded-full bg-[#121212] p-2 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SpeakerXMarkIcon
            /></span>
            <span
              class="absolute top-1 right-12 z-10 h-10 w-10 rounded-full bg-[#121212] p-2 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SpeakerWaveIcon
            /></span>
            <span
              class="absolute top-12 right-1 z-10 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SubsLogo
            /></span>
            <span
              class="absolute right-1 bottom-1 rounded bg-[#121212] px-0.5 text-sm font-semibold"
              >15:22</span
            >
          </div>
          <div class="mt-3 flex items-start">
            <img
              :src="`https://picsum.photos/seed/${randomSeed()}/32/32`"
              alt="channelLogo"
              class="mr-3 h-10 w-10 rounded-full"
            />
            <div>
              <div class="mb-1 text-left font-semibold">Coffee or Tea?</div>
              <div class="flex items-center gap-1 text-sm text-[#aaaaaa]">
                <span class="">Health</span>
                <CheckCircleIcon class="h-5" />
              </div>
              <div class="flex items-center gap-1 text-sm text-[#aaaaaa]">
                <span>2M views</span>
                &middot;
                <span>4 year ago</span>
              </div>
            </div>
            <button class="ml-auto">
              <EllipsisVerticalIcon class="h-6" />
            </button>
          </div>
        </a>
        <a href="#" class="group mb-5">
          <div class="relative">
            <img
              :src="`https://picsum.photos/seed/${randomSeed()}/560/315`"
              alt="video_preview"
              class="w-full rounded-xl"
            />
            <span
              class="absolute top-1 right-1 z-10 h-10 w-10 rounded-full bg-[#121212] p-2 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SpeakerXMarkIcon
            /></span>
            <span
              class="absolute top-1 right-12 z-10 h-10 w-10 rounded-full bg-[#121212] p-2 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SpeakerWaveIcon
            /></span>
            <span
              class="absolute top-12 right-1 z-10 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SubsLogo
            /></span>
            <span
              class="absolute right-1 bottom-1 rounded bg-[#121212] px-0.5 text-sm font-semibold"
              >25:28</span
            >
          </div>
          <div class="mt-3 flex items-start">
            <img
              :src="`https://picsum.photos/seed/${randomSeed()}/32/32`"
              alt="channelLogo"
              class="mr-3 h-10 w-10 rounded-full"
            />
            <div>
              <div class="mb-1 text-left font-semibold">How does it works? Computers</div>
              <div class="flex items-center gap-1 text-sm text-[#aaaaaa]">
                <span class="">Discovery</span>
                <CheckCircleIcon class="h-5" />
              </div>
              <div class="flex items-center gap-1 text-sm text-[#aaaaaa]">
                <span>15M views</span>
                &middot;
                <span>1 year ago</span>
              </div>
            </div>
            <button class="ml-auto">
              <EllipsisVerticalIcon class="h-6" />
            </button>
          </div>
        </a>
        <a href="#" class="group mb-5">
          <div class="relative">
            <img
              :src="`https://picsum.photos/seed/${randomSeed()}/560/315`"
              alt="video_preview"
              class="w-full rounded-xl"
            />
            <span
              class="absolute top-1 right-1 z-10 h-10 w-10 rounded-full bg-[#121212] p-2 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SpeakerXMarkIcon
            /></span>
            <span
              class="absolute top-1 right-12 z-10 h-10 w-10 rounded-full bg-[#121212] p-2 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SpeakerWaveIcon
            /></span>
            <span
              class="absolute top-12 right-1 z-10 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SubsLogo
            /></span>
            <span
              class="absolute right-1 bottom-1 rounded bg-[#121212] px-0.5 text-sm font-semibold"
              >18:07</span
            >
          </div>
          <div class="mt-3 flex items-start">
            <img
              :src="`https://picsum.photos/seed/${randomSeed()}/32/32`"
              alt="channelLogo"
              class="mr-3 h-10 w-10 rounded-full"
            />
            <div>
              <div class="mb-1 text-left font-semibold">Escape or Die challenge</div>
              <div class="flex items-center gap-1 text-sm text-[#aaaaaa]">
                <span class="">Mostixsn</span>
                <CheckCircleIcon class="h-5" />
              </div>
              <div class="flex items-center gap-1 text-sm text-[#aaaaaa]">
                <span>231K views</span>
                &middot;
                <span>5 days ago</span>
              </div>
            </div>
            <button class="ml-auto">
              <EllipsisVerticalIcon class="h-6" />
            </button>
          </div>
        </a>
        <a href="#" class="group mb-5">
          <div class="relative">
            <img
              :src="`https://picsum.photos/seed/${randomSeed()}/560/315`"
              alt="video_preview"
              class="w-full rounded-xl"
            />
            <span
              class="absolute top-1 right-1 z-10 h-10 w-10 rounded-full bg-[#121212] p-2 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SpeakerXMarkIcon
            /></span>
            <span
              class="absolute top-1 right-12 z-10 h-10 w-10 rounded-full bg-[#121212] p-2 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SpeakerWaveIcon
            /></span>
            <span
              class="absolute top-12 right-1 z-10 opacity-0 transition duration-300 group-hover:opacity-100"
              ><SubsLogo
            /></span>
            <span
              class="absolute right-1 bottom-1 rounded bg-[#121212] px-0.5 text-sm font-semibold"
              >42:32</span
            >
          </div>
          <div class="mt-3 flex items-start">
            <img
              :src="`https://picsum.photos/seed/${randomSeed()}/32/32`"
              alt="channelLogo"
              class="mr-3 h-10 w-10 rounded-full"
            />
            <div>
              <div class="mb-1 text-left font-semibold">Can you prove this?</div>
              <div class="flex items-center gap-1 text-sm text-[#aaaaaa]">
                <span class="">Truth</span>
                <CheckCircleIcon class="h-5" />
              </div>
              <div class="flex items-center gap-1 text-sm text-[#aaaaaa]">
                <span>2M views</span>
                &middot;
                <span>2 week ago</span>
              </div>
            </div>
            <button class="ml-auto">
              <EllipsisVerticalIcon class="h-6" />
            </button>
          </div>
        </a>
      </section>
    </main>
  </div>
</template>

<style scoped></style>
