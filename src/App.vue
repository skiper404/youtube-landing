<script setup>
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  BellIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from '@heroicons/vue/24/outline'
import { MicrophoneIcon } from '@heroicons/vue/24/solid'
import YouTubeLogo from '@/YouTubeLogo.vue'
import HomeLogo from './HomeLogo.vue'
import ShortsLogo from './ShortsLogo.vue'
import SubscriptionsLogo from './SubscriptionsLogo.vue'
import YouTubeMusicLogo from './YouTubeMusicLogo.vue'
import HistoryLogo from './HistoryLogo.vue'
import PlaylistLogo from './PlaylistLogo.vue'
import YourVideosLogo from './YourVideosLogo.vue'
import WatchLaterLogo from './WatchLaterLogo.vue'
import LikedVideosLogo from './LikedVideosLogo.vue'
import DownloadsLogo from './DownloadsLogo.vue'
import TrendingLogo from './TrendingLogo.vue'
import MusicLogo from './MusicLogo.vue'
import MoviesLogo from './MoviesLogo.vue'
import GamingLogo from './GamingLogo.vue'
import NewsLogo from './NewsLogo.vue'
import SportsLogo from './SportsLogo.vue'
import LearningLogo from './LearningLogo.vue'
import YouTubeStudioRed from './YouTubeStudioRed.vue'
import YouTubeMusicLogoRed from './YouTubeMusicLogoRed.vue'
import YouTubeKidsLogoRed from './YouTubeKidsLogoRed.vue'
import YouTubeSettingsLogo from './YouTubeSettingsLogo.vue'
import ReportHistoryLogo from './ReportHistoryLogo.vue'
import HelpLogo from './HelpLogo.vue'
import SendFeedbackLogo from './SendFeedbackLogo.vue'
import ChannelLogo from './ChanneLogo.vue'
</script>

<template>
  <div class="h-screen bg-[#111111] text-center tracking-tight text-white">
    <header class="flex items-center justify-between px-8 py-2">
      <div class="flex items-center justify-center gap-2">
        <input id="toggle-menu" type="checkbox" class="peer hidden" />
        <label for="toggle-menu" class="cursor-pointer p-1">
          <Bars3Icon class="h-7" />
        </label>
        <a href="#" class="w-32 cursor-pointer py-2 pr-5">
          <YouTubeLogo />
        </a>
        <aside class="absolute top-0.5 left-0 hidden w-[260px] bg-[#151515] peer-checked:block">
          <div class="flex items-center gap-2 px-8 py-2">
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
              <a
                href="#"
                class="flex items-center gap-6 rounded-xl px-6 py-2 text-sm hover:bg-[#232323]"
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
        </aside>
      </div>

      <div class="flex items-center justify-center gap-4 px-2">
        <form class="relative flex items-center gap-4">
          <div class="flex max-w-[500px] min-w-[200px] flex-grow items-center justify-center">
            <input
              type="text"
              class="w-full rounded-l-full border border-neutral-800 px-4 py-2 outline-0 focus:border-blue-500"
              placeholder="Search"
            />
            <button>
              <XMarkIcon class="absolute top-0 right-14 h-10 p-1" />
            </button>
            <button class="rounded-r-full border border-neutral-800 bg-neutral-800 px-4 py-2">
              <MagnifyingGlassIcon class="h-6" />
            </button>
          </div>
        </form>
        <a class="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-700">
          <MicrophoneIcon class="size-6" />
        </a>
      </div>

      <div class="flex items-center justify-center gap-2">
        <a class="flex h-10 items-center justify-center gap-2 rounded-full bg-neutral-700 px-3">
          <PlusIcon class="size-6" />
          <span class="text-sm font-semibold">Create</span>
        </a>

        <a href="#">
          <BellIcon class="size-7" />
        </a>

        <a href="#">
          <div
            class="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 text-2xl text-orange-600"
          >
            S
          </div>
        </a>
      </div>
    </header>
    <main></main>
  </div>
</template>

<style scoped></style>
