<script setup>
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  BellIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
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
import { useRoute } from 'vue-router'

const randomSeed = () => Math.floor(Math.random() * Date.now())

const route = useRoute()
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
          <a href="#" class="w-26 cursor-pointer py-2 pr-5 outline-none sm:w-32">
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

          <label for="mic" class="hidden cursor-pointer">
            <div
              class="min-h-10 min-w-10 items-center justify-center rounded-full bg-neutral-800 hover:bg-neutral-600 sm:flex"
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
                  <a href="#" class="flex items-center gap-4 px-6 outline-none">
                    <UserUpload class="h-6" /> Upload video
                  </a>
                </li>
                <li class="py-2 hover:bg-[#555555]">
                  <a href="#" class="flex items-center gap-4 px-6 outline-none"
                    ><UserLive class="h-6" /> Go Live
                  </a>
                </li>
                <li class="py-2 hover:bg-[#555555]">
                  <a href="#" class="flex items-center gap-4 px-6 outline-none">
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
                    <a href="#" class="flex items-center justify-between gap-4 outline-none">
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
                    <a href="#" class="flex items-center justify-between gap-4 outline-none">
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
                    <a href="#" class="flex items-center justify-between gap-4 outline-none">
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
                    <a href="#" class="flex items-center justify-between gap-4 outline-none">
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
                  <a href="#" class="cursor-pointer py-1 text-blue-400 outline-none"
                    >View your channel</a
                  >
                </div>
              </div>
              <hr class="my-1 py-1 text-[#555555]" />
              <ul class="text-sm">
                <li class="p-2 hover:bg-[#555555]">
                  <a href="" class="flex items-center gap-4 outline-none"
                    ><UserGoogleLogo class="h-6" />Google Account</a
                  >
                </li>
                <li class="p-2 hover:bg-[#555555]">
                  <a href="" class="flex items-center gap-4 outline-none"
                    ><UserSwitchLogo class="h-6" />Switch Account</a
                  >
                </li>
                <li class="p-2 hover:bg-[#555555]">
                  <a href="" class="flex items-center gap-4 outline-none"
                    ><UserSignOutLogo class="h-6" />Sign out</a
                  >
                </li>
                <hr class="my-2 text-[#555555]" />
                <li class="p-2 hover:bg-[#555555]">
                  <a href="" class="flex items-center gap-4 outline-none"
                    ><UserYouTubeStudio class="h-6" />YouTube studio</a
                  >
                </li>
                <li class="p-2 hover:bg-[#555555]">
                  <a href="" class="flex items-center gap-4 outline-none"
                    ><UserPremium class="h-6" />Your Premium Benefits</a
                  >
                </li>
                <li class="p-2 hover:bg-[#555555]">
                  <a href="" class="flex items-center gap-4 outline-none"
                    ><UserPurchase class="h-6" />Purchases and memberships</a
                  >
                </li>
                <hr class="my-2 text-[#555555]" />
                <li class="p-2 hover:bg-[#555555]">
                  <a href="" class="flex items-center gap-4 outline-none"
                    ><UserData class="h-6" />Your data in YouTube</a
                  >
                </li>
                <li class="p-2 hover:bg-[#555555]">
                  <a href="" class="flex items-center gap-4 outline-none"
                    ><UserAppearence class="h-6" />Appearence: Device theme</a
                  >
                </li>
                <li class="p-2 hover:bg-[#555555]">
                  <a href="" class="flex items-center gap-4 outline-none"
                    ><UserLanguage class="h-6" />Language: English</a
                  >
                </li>
                <li class="p-2 hover:bg-[#555555]">
                  <a href="" class="flex items-center gap-4 outline-none"
                    ><UserMode class="h-6" />Restricted Mode: Off</a
                  >
                </li>
                <li class="p-2 hover:bg-[#555555]">
                  <a href="" class="flex items-center gap-4 outline-none"
                    ><UserLocation class="h-6" />Location: Ukraine</a
                  >
                </li>
                <li class="p-2 hover:bg-[#555555]">
                  <a href="" class="flex items-center gap-4 outline-none"
                    ><UserKeyboard class="h-6" />Keyboard shortcuts</a
                  >
                </li>
                <hr class="my-2 text-[#555555]" />
                <li class="p-2 hover:bg-[#555555]">
                  <a href="" class="flex items-center gap-4 outline-none"
                    ><UserSettings class="h-6" />Settings</a
                  >
                </li>
                <hr class="my-2 text-[#555555]" />
                <li class="p-2 hover:bg-[#555555]">
                  <a href="" class="flex items-center gap-4 outline-none"
                    ><UserHelp class="h-6" />Help</a
                  >
                </li>
                <li class="p-2 hover:bg-[#555555]">
                  <a href="" class="flex items-center gap-4 outline-none"
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
            <a
              href="#"
              class="flex flex-col gap-1 rounded-lg py-2 outline-none hover:bg-[#292929] focus:bg-[#292929]"
              ><HomeLogo class="h-6" />Home
            </a>
          </li>
          <li class="w-full">
            <a
              href="#"
              class="flex flex-col gap-1 rounded-lg py-2 outline-none hover:bg-[#292929] focus:bg-[#292929]"
              ><ShortsLogo class="h-6" />Shorts</a
            >
          </li>
          <li class="w-full">
            <a
              href="#"
              class="flex flex-col gap-1 rounded-lg py-2 outline-none hover:bg-[#292929] focus:bg-[#292929]"
              ><SubscriptionsLogo class="h-6" />Subscriptions
            </a>
          </li>
          <li class="w-full">
            <a
              href="#"
              class="flex flex-col gap-1 rounded-lg py-2 outline-none hover:bg-[#292929] focus:bg-[#292929]"
              ><YouTubeMusicLogo class="h-6" />YouTube Music</a
            >
          </li>
          <li class="w-full">
            <a
              href="#"
              class="flex flex-col gap-1 rounded-lg py-2 outline-none hover:bg-[#292929] focus:bg-[#292929]"
              ><UserCircleIcon class="h-6" />You</a
            >
          </li>
          <li class="w-full">
            <a
              href="#"
              class="flex flex-col gap-1 rounded-lg py-2 outline-none hover:bg-[#292929] focus:bg-[#292929]"
              ><DownloadsLogo class="h-6" />Downloads</a
            >
          </li>
        </ul>
      </nav>
    </aside>

    <aside
      class="fixed z-20 max-h-screen w-[260px] -translate-x-full overflow-auto bg-[#151515] transition duration-300 peer-checked:block peer-checked:translate-x-0"
    >
      <nav>
        <div class="sticky top-0 z-20 flex items-center gap-2 bg-[#111111] px-6 py-2">
          <input id="toggle-menu" type="checkbox" class="peer hidden" />
          <label for="toggle-menu" class="cursor-pointer p-1">
            <Bars3Icon class="h-7" />
          </label>
          <a href="#" class="w-32 cursor-pointer py-2 pr-5 outline-none">
            <YouTubeLogo />
          </a>
        </div>

        <ul>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl bg-[#232323] px-6 py-2 text-sm outline-none"
              ><HomeLogo class="h-6" />Home</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm outline-none hover:bg-[#232323] focus:bg-[#232323]"
              ><ShortsLogo class="h-6" />Shorts</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm outline-none hover:bg-[#232323] focus:bg-[#232323]"
            >
              <SubscriptionsLogo class="h-6" />Subscriptions<span
                class="h-1 w-1 rounded-full bg-blue-400"
              ></span
            ></a>
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm outline-none hover:bg-[#232323] focus:bg-[#232323]"
              ><YouTubeMusicLogo class="h-6" />YouTube Music</a
            >
          </li>
        </ul>
        <hr class="m-2 border-1 border-[#373737]" />
        <ul>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-4 rounded-xl px-6 py-2 text-sm font-semibold outline-none hover:bg-[#232323] focus:bg-[#232323]"
              >You<ChevronRightIcon class="h-6"
            /></a>
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm outline-none hover:bg-[#232323] focus:bg-[#232323]"
              ><HistoryLogo class="h-6" />History</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm outline-none hover:bg-[#232323] focus:bg-[#232323]"
            >
              <PlaylistLogo class="h-6" />Playlists</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm outline-none hover:bg-[#232323] focus:bg-[#232323]"
              ><YourVideosLogo class="h-6" />Your videos</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm outline-none hover:bg-[#232323] focus:bg-[#232323]"
            >
              <WatchLaterLogo class="h-6" />Watch later</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm outline-none hover:bg-[#232323] focus:bg-[#232323]"
            >
              <LikedVideosLogo class="h-6" />Liked videos</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm outline-none hover:bg-[#232323] focus:bg-[#232323]"
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
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm outline-none hover:bg-[#232323] focus:bg-[#232323]"
              ><ChannelLogo letter="A" color="#0042a9" />Video 1</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm outline-none hover:bg-[#232323] focus:bg-[#232323]"
              ><ChannelLogo letter="B" color="#4382D3" />Video 2</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm outline-none hover:bg-[#232323] focus:bg-[#232323]"
              ><ChannelLogo letter="N" color="#238223" />Video 3</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm outline-none hover:bg-[#232323] focus:bg-[#232323]"
              ><ChannelLogo letter="D" color="#13D2A3" />Video 4</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm outline-none hover:bg-[#232323] focus:bg-[#232323]"
              ><ChannelLogo letter="S" color="#432223" />Video 5</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm outline-none hover:bg-[#232323] focus:bg-[#232323]"
              ><ChannelLogo letter="W" color="#13A273" />Video 6</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm outline-none hover:bg-[#232323] focus:bg-[#232323]"
              ><ChannelLogo letter="B" color="#432273" />Video 7</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm outline-none hover:bg-[#232323] focus:bg-[#232323]"
              ><ChannelLogo letter="Si" color="#228251" />Video 8</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm outline-none hover:bg-[#232323] focus:bg-[#232323]"
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
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm outline-none hover:bg-[#232323] focus:bg-[#232323]"
              ><TrendingLogo class="h-6" />Trending</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm outline-none hover:bg-[#232323] focus:bg-[#232323]"
              ><MusicLogo class="h-6" />Music</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm outline-none hover:bg-[#232323] focus:bg-[#232323]"
              ><MoviesLogo class="h-6" />Movies</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm outline-none hover:bg-[#232323] focus:bg-[#232323]"
              ><GamingLogo class="h-6" />Gaming</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm outline-none hover:bg-[#232323] focus:bg-[#232323]"
              ><NewsLogo class="h-6" />News</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm outline-none hover:bg-[#232323] focus:bg-[#232323]"
            >
              <SportsLogo class="h-6" />Sports</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm outline-none hover:bg-[#232323] focus:bg-[#232323]"
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
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm outline-none hover:bg-[#232323] focus:bg-[#232323]"
            >
              <YouTubeStudioRed class="h-6" />YouTube Studio</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm outline-none hover:bg-[#232323] focus:bg-[#232323]"
            >
              <YouTubeMusicLogoRed class="h-6" />YouTube Music</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm outline-none hover:bg-[#232323] focus:bg-[#232323]"
              ><YouTubeKidsLogoRed class="h-6" />YouTube Kids</a
            >
          </li>
        </ul>
        <hr class="m-2 border-1 border-[#373737]" />
        <ul>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm outline-none hover:bg-[#232323] focus:bg-[#232323]"
            >
              <YouTubeSettingsLogo class="h-6" />Setting</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm outline-none hover:bg-[#232323] focus:bg-[#232323]"
              ><ReportHistoryLogo class="h-6" />Report history</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm outline-none hover:bg-[#232323] focus:bg-[#232323]"
              ><HelpLogo class="h-6" />Help</a
            >
          </li>
          <li class="px-4">
            <a
              href="#"
              class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm outline-none hover:bg-[#232323] focus:bg-[#232323]"
              ><SendFeedbackLogo class="h-6" />Send feedback</a
            >
          </li>
        </ul>
        <hr class="m-2 border-1 border-[#373737]" />
        <ul class="flex flex-wrap gap-1 px-8 pt-4 text-xs font-semibold text-[#aaaaaa]">
          <li>
            <a href="#" class="p-1 outline-none focus:bg-[#232323]">About</a>
          </li>
          <li><a href="#" class="p-1 outline-none focus:bg-[#232323]">Press</a></li>
          <li><a href="#" class="p-1 outline-none focus:bg-[#232323]">Copyright</a></li>
          <li><a href="#" class="p-1 outline-none focus:bg-[#232323]">Contact us</a></li>
          <li><a href="#" class="p-1 outline-none focus:bg-[#232323]">Creators</a></li>
          <li><a href="#" class="p-1 outline-none focus:bg-[#232323]">Advertise</a></li>
          <li><a href="#" class="p-1 outline-none focus:bg-[#232323]">Developers</a></li>
        </ul>
        <ul class="flex flex-wrap gap-1 px-8 pt-4 text-xs font-semibold text-[#aaaaaa]">
          <li><a href="#" class="p-1 outline-none focus:bg-[#232323]">Terms</a></li>
          <li><a href="#" class="p-1 outline-none focus:bg-[#232323]">Privacy</a></li>
          <li><a href="#" class="p-1 outline-none focus:bg-[#232323]">Policy & Safety</a></li>
          <li><a href="#" class="p-1 outline-none focus:bg-[#232323]">How YouTube works</a></li>
          <li><a href="#" class="p-1 outline-none focus:bg-[#232323]">Test new features</a></li>
        </ul>
        <a
          href="#"
          class="m-2 block px-8 text-left text-xs font-semibold text-[#717171] outline-none"
          >&copy; 2025 Google LLC</a
        >
      </nav>
    </aside>

    <main class="px-4 pt-16 sm:px-10 md:ml-[80px] md:px-20 xl:px-40">
      <section class="relative pb-4">
        <span
          class="absolute top-16 right-3 z-10 rounded-xl bg-black/70 p-2 text-lg font-light text-white xl:top-3/5 xl:text-3xl"
          >@{{ route.query.name }}</span
        >
        <div class="mx-auto h-30 w-full xl:h-50">
          <img
            :src="`https://picsum.photos/seed/${randomSeed()}/1280/720`"
            alt="video_preview"
            class="aspect-video h-full w-full rounded-xl object-cover"
          />
        </div>
      </section>
      <section class="flex">
        <img
          :src="`https://picsum.photos/seed/${randomSeed()}/200/200`"
          alt="video_preview"
          class="h-32 w-32 rounded-full"
        />
        <div class="flex flex-col justify-center gap-2 p-2">
          <div class="flex items-center">
            <span class="text-xl font-bold md:text-3xl">{{ route.query.name }}</span>
            <CheckCircleIcon class="h-6" />
          </div>
          <div class="flex gap-1 text-xs">
            <span>@channel</span>&middot;<span>4.41M subscribes</span>&middot;<span
              >25K videos</span
            >
          </div>
          <div class="text-xs md:text-sm">
            {{ route.query.description }}
          </div>
        </div>
      </section>
      <div class="p-1 text-left text-sm">
        <span class="text-blue-400"> supergordonnft.com </span> and <span>8</span> more links
      </div>
      <div class="jus flex items-center gap-2 py-4">
        <button class="w-[400px] rounded-full bg-[#232323] py-1 hover:bg-[#555555]">
          Subscribed</button
        ><button class="w-[400px] rounded-full border border-[#232323] py-1 hover:bg-[#555555]">
          Join
        </button>
      </div>
      <section class="">
        <ul class="flex items-center gap-6">
          <li class="border-b-2 border-white/0 pb-2 hover:border-white/100">Home</li>
          <li class="border-b-2 border-white/0 pb-2 hover:border-white/100">Videos</li>
          <li class="border-b-2 border-white/0 pb-2 hover:border-white/100">Shorts</li>
          <li class="border-b-2 border-white/0 pb-2 hover:border-white/100">Live</li>
          <li class="border-b-2 border-white/0 pb-2 hover:border-white/100">Playlists</li>
          <li class="border-b-2 border-white/0 pb-2 hover:border-white/100">Posts</li>
          <li>
            <MagnifyingGlassIcon class="h-6" />
          </li>
          <li class="ml-auto pr-6"><ChevronRightIcon class="h-8" /></li>
        </ul>
      </section>
      <hr class="my-2 text-[#555555]" />
      <section class="py-2 text-left">
        <div>Our members</div>
        <div class="text-sm text-[#aaaaaa]">Thank you, channel members!</div>
        <ul class="flex items-center gap-4 py-4">
          <li class="h-10 w-10">
            <img
              :src="`https://picsum.photos/seed/${randomSeed()}/200/200`"
              alt="video_preview"
              class="rounded-full"
            />
          </li>
          <li class="h-10 w-10">
            <img
              :src="`https://picsum.photos/seed/${randomSeed()}/200/200`"
              alt="video_preview"
              class="rounded-full"
            />
          </li>

          <li class="h-10 w-10">
            <img
              :src="`https://picsum.photos/seed/${randomSeed()}/200/200`"
              alt="video_preview"
              class="rounded-full"
            />
          </li>
          <li class="h-10 w-10">
            <img
              :src="`https://picsum.photos/seed/${randomSeed()}/200/200`"
              alt="video_preview"
              class="rounded-full"
            />
          </li>
          <li class="h-10 w-10">
            <img
              :src="`https://picsum.photos/seed/${randomSeed()}/200/200`"
              alt="video_preview"
              class="rounded-full"
            />
          </li>
          <li class="">
            <a
              href=""
              class="border- rounded-full border border-[#555555] px-4 py-2 text-blue-400 hover:border-[#555555]/0 hover:bg-blue-900/50"
              >Join</a
            >
          </li>
        </ul>
        <hr class="my-2 text-[#555555]" />
      </section>
      <section class="relative">
        <div
          class="absolute top-2/5 -left-6 z-20 w-fit items-center justify-center rounded-full bg-[#333333] p-2 hover:bg-[#555555]"
        >
          <ChevronLeftIcon class="h-8" />
        </div>
        <div
          class="absolute top-2/5 -right-6 z-20 w-fit items-center justify-center rounded-full bg-[#333333] p-2 hover:bg-[#555555]"
        >
          <ChevronRightIcon class="h-8" />
        </div>
        <div class="py-4 text-left text-2xl font-semibold">For You</div>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          <a href="#" class="group mb-5 outline-none">
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
              <div>
                <div class="mb-1 text-left font-semibold">I Tried Waking Up at 4AM for a Week</div>
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
          <a href="#" class="group mb-5 hidden outline-none sm:inline-block">
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
              <div>
                <div class="mb-1 text-left font-semibold">
                  You Won’t Believe What’s Inside This Box!
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
          <a href="#" class="group mb-5 hidden outline-none lg:inline-block">
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
              <div>
                <div class="mb-1 text-left font-semibold">
                  This App Changed My Life (Not Clickbait)
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
          <a href="#" class="group mb-5 hidden outline-none 2xl:inline-block">
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
              <div>
                <div class="mb-1 text-left font-semibold">
                  Can I Survive 24 Hours Without Speaking?
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
        </div>
        <hr class="my-2 text-[#555555]" />
      </section>
      <section class="relative">
        <div
          class="absolute top-1/3 -left-6 z-20 w-fit items-center justify-center rounded-full bg-[#333333] p-2 hover:bg-[#555555]"
        >
          <ChevronLeftIcon class="h-8" />
        </div>
        <div
          class="absolute top-1/3 -right-6 z-20 w-fit items-center justify-center rounded-full bg-[#333333] p-2 hover:bg-[#555555]"
        >
          <ChevronRightIcon class="h-8" />
        </div>
        <div class="flex items-center gap-4 py-4 text-left font-semibold">
          <span class="text-xl">Paylist 1</span> <span> <PlayIcon class="h-4" /></span>
          <span class="text-sm">Play all</span>
        </div>
        <div
          class="grid grid-cols-1 gap-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6"
        >
          <a href="#" class="group mb-5 outline-none">
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
              <div>
                <div class="mb-1 text-left font-semibold">
                  Top 5 Things You’re Doing Wrong Every Morning
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
          <a href="#" class="group mb-5 hidden outline-none md:inline-block">
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
              <div>
                <div class="mb-1 text-left font-semibold">
                  Reacting to My First Ever Video (Cringe Alert)
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
          <a href="#" class="group mb-5 hidden outline-none lg:inline-block">
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
              <div>
                <div class="mb-1 text-left font-semibold">
                  They Said It Was Impossible… Until I Did It
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
          <a href="#" class="group mb-5 hidden outline-none xl:inline-block">
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
              <div>
                <div class="mb-1 text-left font-semibold">100 Days of Drawing: Before vs After</div>

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
          <a href="#" class="group mb-5 hidden outline-none 2xl:inline-block">
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
              <div>
                <div class="mb-1 text-left font-semibold">
                  Ranking Fast Food from Worst to Best 🍔
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
          <a href="#" class="group mb-5 hidden outline-none 2xl:inline-block">
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
              <div>
                <div class="mb-1 text-left font-semibold">
                  Trying the Weirdest Gadgets on Amazon!
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
        </div>
        <hr class="my-2 text-[#555555]" />
      </section>
      <section class="relative">
        <div
          class="absolute top-1/3 -left-6 z-20 w-fit items-center justify-center rounded-full bg-[#333333] p-2 hover:bg-[#555555]"
        >
          <ChevronLeftIcon class="h-8" />
        </div>
        <div
          class="absolute top-1/3 -right-6 z-20 w-fit items-center justify-center rounded-full bg-[#333333] p-2 hover:bg-[#555555]"
        >
          <ChevronRightIcon class="h-8" />
        </div>
        <div class="flex items-center gap-4 py-4 text-left font-semibold">
          <span class="text-xl">Playlist 2</span> <span> <PlayIcon class="h-4" /></span>
          <span class="text-sm">Play all</span>
        </div>
        <div
          class="grid grid-cols-1 gap-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6"
        >
          <a href="#" class="group mb-5 outline-none">
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
              <div>
                <div class="mb-1 text-left font-semibold">
                  This Website Knows Everything About You…
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
          <a href="#" class="group mb-5 hidden outline-none md:inline-block">
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
              <div>
                <div class="mb-1 text-left font-semibold">
                  I Built a Website with My Eyes Closed (Almost)
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
          <a href="#" class="group mb-5 hidden outline-none lg:inline-block">
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
              <div>
                <div class="mb-1 text-left font-semibold">Writing in the authem</div>

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
          <a href="#" class="group mb-5 hidden outline-none xl:inline-block">
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
              <div>
                <div class="mb-1 text-left font-semibold">Top 10 LEGO Towers</div>

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
          <a href="#" class="group mb-5 hidden outline-none 2xl:inline-block">
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
              <div>
                <div class="mb-1 text-left font-semibold">All About Lego Harry Potter</div>

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
          <a href="#" class="group mb-5 hidden outline-none 2xl:inline-block">
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
              <div>
                <div class="mb-1 text-left font-semibold">All About LEGO Ferrari</div>

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
        </div>
        <hr class="my-2 text-[#555555]" />
      </section>
      <section class="relative">
        <div
          class="absolute top-1/3 -left-6 z-20 w-fit items-center justify-center rounded-full bg-[#333333] p-2 hover:bg-[#555555]"
        >
          <ChevronLeftIcon class="h-8" />
        </div>
        <div
          class="absolute top-1/3 -right-6 z-20 w-fit items-center justify-center rounded-full bg-[#333333] p-2 hover:bg-[#555555]"
        >
          <ChevronRightIcon class="h-8" />
        </div>
        <div class="flex items-center gap-4 py-4 text-left font-semibold">
          <span class="text-xl">Playlist 3</span> <span> <PlayIcon class="h-4" /></span>
          <span class="text-sm">Play all</span>
        </div>
        <div
          class="grid grid-cols-1 gap-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6"
        >
          <a href="#" class="group mb-5 outline-none">
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
              <div>
                <div class="mb-1 text-left font-semibold">
                  This Website Knows Everything About You…
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
          <a href="#" class="group mb-5 hidden outline-none md:inline-block">
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
              <div>
                <div class="mb-1 text-left font-semibold">
                  I Built a Website with My Eyes Closed (Almost)
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
          <a href="#" class="group mb-5 hidden outline-none lg:inline-block">
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
              <div>
                <div class="mb-1 text-left font-semibold">Writing in the authem</div>

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
          <a href="#" class="group mb-5 hidden outline-none xl:inline-block">
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
              <div>
                <div class="mb-1 text-left font-semibold">Why LEGO is so expensive?</div>

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
          <a href="#" class="group mb-5 hidden outline-none 2xl:inline-block">
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
              <div>
                <div class="mb-1 text-left font-semibold">All About Lego Harry Potter</div>

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
          <a href="#" class="group mb-5 hidden outline-none 2xl:inline-block">
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
              <div>
                <div class="mb-1 text-left font-semibold">All About LEGO Ferrari</div>

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
        </div>
        <hr class="my-2 text-[#555555]" />
      </section>
      <section class="relative">
        <div
          class="absolute top-1/3 -left-6 z-20 w-fit items-center justify-center rounded-full bg-[#333333] p-2 hover:bg-[#555555]"
        >
          <ChevronLeftIcon class="h-8" />
        </div>
        <div
          class="absolute top-1/3 -right-6 z-20 w-fit items-center justify-center rounded-full bg-[#333333] p-2 hover:bg-[#555555]"
        >
          <ChevronRightIcon class="h-8" />
        </div>
        <div class="flex items-center gap-4 py-4 text-left font-semibold">
          <span class="text-xl">Popular videos</span>
        </div>
        <div
          class="grid grid-cols-1 gap-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6"
        >
          <a href="#" class="group mb-5 outline-none">
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
              <div>
                <div class="mb-1 text-left font-semibold">LEGO vs BRICKS</div>
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
          <a href="#" class="group mb-5 hidden outline-none md:inline-block">
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
              <div>
                <div class="mb-1 text-left font-semibold">All About LEGO</div>
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
          <a href="#" class="group mb-5 hidden outline-none lg:inline-block">
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
              <div>
                <div class="mb-1 text-left font-semibold">What are You Never Do?</div>
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
          <a href="#" class="group mb-5 hidden outline-none xl:inline-block">
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
              <div>
                <div class="mb-1 text-left font-semibold">What Happens If You Never Eat?</div>

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
          <a href="#" class="group mb-5 hidden outline-none 2xl:inline-block">
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
              <div>
                <div class="mb-1 text-left font-semibold">What Happens If You Never Drink?</div>
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
          <a href="#" class="group mb-5 hidden outline-none 2xl:inline-block">
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
              <div>
                <div class="mb-1 text-left font-semibold">What Happens If You Never Blink?</div>
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
        </div>
        <hr class="my-2 text-[#555555]" />
      </section>
      <router-link :to="{ name: 'Main' }" class="text-blue-500">Back to Main</router-link>
    </main>
  </div>
</template>

<style lang="scss" scoped></style>
