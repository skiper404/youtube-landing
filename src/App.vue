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
import ChannelLogo from './icons/ChanneLogo.vue'
</script>

<template>
  <div class="relative bg-[#111111] text-center tracking-tight text-white">
    <input id="toggle-menu" type="checkbox" class="peer hidden" />
    <header class="fixed top-0 right-0 left-0 z-20 bg-[#121212]">
      <section class="flex flex-row items-center justify-between px-6 py-2">
        <div class="flex items-center justify-center gap-2">
          <label for="toggle-menu" class="cursor-pointer p-1">
            <Bars3Icon class="h-7" />
          </label>
          <a href="#" class="hidden w-32 cursor-pointer py-2 pr-5 sm:inline-block">
            <YouTubeLogo />
          </a>
        </div>

        <div class="flex max-w-[700px] min-w-[300px] flex-1 items-center justify-center gap-4 px-2">
          <form class="relative flex w-full items-center">
            <input
              type="text"
              class="w-full rounded-l-full border border-neutral-800 px-4 py-2 outline-0 focus:border-blue-500"
              placeholder="Search"
            />
            <button class="absolute top-0 right-16">
              <XMarkIcon class="h-10 p-1" />
            </button>
            <button class="rounded-r-full border border-neutral-800 bg-neutral-800 px-4 py-2">
              <MagnifyingGlassIcon class="h-6" />
            </button>
          </form>
          <a class="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-700">
            <MicrophoneIcon class="size-6" />
          </a>
        </div>

        <div class="hidden items-center justify-center gap-2 sm:flex">
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
      </section>
    </header>

    <aside class="fixed top-14 bottom-0 left-0 z-20 hidden w-[80px] bg-[#121212] md:block">
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

    <section class="fixed top-14 right-0 left-0 bg-[#121212] py-1 pl-2 text-[16px] md:pl-20">
      <ul class="flex items-center gap-2 truncate px-2 py-1 whitespace-nowrap">
        <li class="cursor-pointer rounded-lg bg-[#efefef] px-2 py-0.5 text-gray-900">All</li>
        <li class="cursor-pointer rounded-lg bg-[#232323] px-2.5 py-0.5 hover:bg-[#292929]">
          Poscasts
        </li>
        <li class="cursor-pointer rounded-lg bg-[#232323] px-2.5 py-0.5 hover:bg-[#292929]">
          Music
        </li>
        <li class="cursor-pointer rounded-lg bg-[#232323] px-2.5 py-0.5 hover:bg-[#292929]">
          Mixes
        </li>
        <li class="cursor-pointer rounded-lg bg-[#232323] px-2.5 py-0.5 hover:bg-[#292929]">
          Apple
        </li>
        <li class="cursor-pointer rounded-lg bg-[#232323] px-2.5 py-0.5 hover:bg-[#292929]">
          Frontend developing
        </li>
        <li class="cursor-pointer rounded-lg bg-[#232323] px-2.5 py-0.5 hover:bg-[#292929]">
          Tesla
        </li>
        <li class="cursor-pointer rounded-lg bg-[#232323] px-2.5 py-0.5 hover:bg-[#292929]">
          Blogs
        </li>
        <li class="cursor-pointer rounded-lg bg-[#232323] px-2.5 py-0.5 hover:bg-[#292929]">
          Satire
        </li>
        <li class="cursor-pointer rounded-lg bg-[#232323] px-2.5 py-0.5 hover:bg-[#292929]">
          Live
        </li>
        <li class="cursor-pointer rounded-lg bg-[#232323] px-2.5 py-0.5 hover:bg-[#292929]">
          Live television
        </li>
        <li class="cursor-pointer rounded-lg bg-[#232323] px-2.5 py-0.5 hover:bg-[#292929]">
          Comedy club
        </li>
        <li class="cursor-pointer rounded-lg bg-[#232323] px-2.5 py-0.5 hover:bg-[#292929]">
          Gadges
        </li>
        <li class="cursor-pointer rounded-lg bg-[#232323] px-2.5 py-0.5 hover:bg-[#292929]">
          Computers
        </li>
        <li class="cursor-pointer rounded-lg bg-[#232323] px-2.5 py-0.5 hover:bg-[#292929]">
          Rapping
        </li>
        <li class="cursor-pointer rounded-lg bg-[#232323] px-2.5 py-0.5 hover:bg-[#292929]">
          Electronic
        </li>
        <li class="cursor-pointer rounded-lg bg-[#232323] px-2.5 py-0.5 hover:bg-[#292929]">
          Recently uploaded
        </li>
        <li class="rounded-lg bg-[#232323] px-2.5 py-0.5 hover:bg-[#292929]">Watched</li>
        <li class="rounded-lg bg-[#232323] px-2.5 py-0.5 hover:bg-[#292929]">New to you</li>
      </ul>
    </section>

    <aside
      class="fixed top-0.5 left-0 z-20 w-[260px] -translate-x-full bg-[#151515] transition duration-300 peer-checked:block peer-checked:translate-x-0"
    >
      <nav class="">
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
      </nav>
    </aside>

    <main class="mt-25 p-4 md:ml-[80px]">
      <section class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <div>
          <img
            src="https://fakeimg.pl/560x315/123456/"
            alt="video_preview"
            class="w-full rounded-xl"
          />
          <div class="flex p-2">
            <div>
              <ChannelLogo letter="S" color="#18aa6a" class="h-10 w-10" />
            </div>
            <div class="ml-2 flex w-full flex-col text-left">
              <div class="flex w-full items-center justify-between font-semibold">
                <span> 10 Things You Didn't Know About Space </span>
                <EllipsisVerticalIcon class="h-6" />
              </div>
              <div class="flex items-center gap-2 text-sm text-[#aaaaaa]">
                <span>Space</span><CheckCircleIcon class="h-5" />
              </div>
              <div class="flex items-center gap-2 text-sm text-[#aaaaaa]">
                <span>1M views</span><span class="h-1 w-1 rounded-full bg-[#aaaaaa]"></span
                ><span>2 year ago</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://fakeimg.pl/560x315/344536/"
            alt="video_preview"
            class="w-full rounded-xl"
          />
          <div class="flex p-2">
            <div>
              <ChannelLogo letter="M" color="#233432" class="h-10 w-10" />
            </div>
            <div class="ml-2 flex w-full flex-col text-left">
              <div class="flex w-full items-center justify-between font-semibold">
                <span> $1 vs $1000 Coffee – Taste Test </span>
                <EllipsisVerticalIcon class="h-6" />
              </div>
              <div class="flex items-center gap-2 text-sm text-[#aaaaaa]">
                <span>Lorax</span><CheckCircleIcon class="h-5" />
              </div>
              <div class="flex items-center gap-2 text-sm text-[#aaaaaa]">
                <span>234K views</span><span class="h-1 w-1 rounded-full bg-[#aaaaaa]"></span
                ><span>1 year ago</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://fakeimg.pl/560x315/342536/"
            alt="video_preview"
            class="w-full rounded-xl"
          />
          <div class="flex p-2">
            <div>
              <ChannelLogo letter="M" color="#233432" class="h-10 w-10" />
            </div>
            <div class="ml-2 flex w-full flex-col text-left">
              <div class="flex w-full items-center justify-between font-semibold">
                <span> Can You Pass This Impossible Quiz? </span>
                <EllipsisVerticalIcon class="h-6" />
              </div>
              <div class="flex items-center gap-2 text-sm text-[#aaaaaa]">
                <span>John Tompson</span><CheckCircleIcon class="h-5" />
              </div>
              <div class="flex items-center gap-2 text-sm text-[#aaaaaa]">
                <span>1M views</span><span class="h-1 w-1 rounded-full bg-[#aaaaaa]"></span
                ><span>1 weeks ago</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://fakeimg.pl/560x315/467377/"
            alt="video_preview"
            class="w-full rounded-xl"
          />
          <div class="flex p-2">
            <div>
              <ChannelLogo letter="O" color="#443883" class="h-10 w-10" />
            </div>
            <div class="ml-2 flex w-full flex-col text-left">
              <div class="flex w-full items-center justify-between font-semibold">
                <span> AI Took Over My Job for a Week </span>
                <EllipsisVerticalIcon class="h-6" />
              </div>
              <div class="flex items-center gap-2 text-sm text-[#aaaaaa]">
                <span>699eve</span><CheckCircleIcon class="h-5" />
              </div>
              <div class="flex items-center gap-2 text-sm text-[#aaaaaa]">
                <span>45K views</span><span class="h-1 w-1 rounded-full bg-[#aaaaaa]"></span
                ><span>4 hours ago</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://fakeimg.pl/560x315/232342/"
            alt="video_preview"
            class="w-full rounded-xl"
          />
          <div class="flex p-2">
            <div>
              <ChannelLogo letter="BA" color="#234442" class="h-10 w-10" />
            </div>
            <div class="ml-2 flex w-full flex-col text-left">
              <div class="flex w-full items-center justify-between font-semibold">
                <span> Extreme Room Makeover on a Budget </span>
                <EllipsisVerticalIcon class="h-6" />
              </div>
              <div class="flex items-center gap-2 text-sm text-[#aaaaaa]">
                <span>Hounted rooms</span><CheckCircleIcon class="h-5" />
              </div>
              <div class="flex items-center gap-2 text-sm text-[#aaaaaa]">
                <span>6M views</span><span class="h-1 w-1 rounded-full bg-[#aaaaaa]"></span
                ><span>1 year ago</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://fakeimg.pl/560x315/585818/"
            alt="video_preview"
            class="w-full rounded-xl"
          />
          <div class="flex p-2">
            <div>
              <ChannelLogo letter="R" color="#342943" class="h-10 w-10" />
            </div>
            <div class="ml-2 flex w-full flex-col text-left">
              <div class="flex w-full items-center justify-between font-semibold">
                <span> What Happens If You Don’t Sleep for 72 Hours? </span>
                <EllipsisVerticalIcon class="h-6" />
              </div>
              <div class="flex items-center gap-2 text-sm text-[#aaaaaa]">
                <span>Jam</span><CheckCircleIcon class="h-5" />
              </div>
              <div class="flex items-center gap-2 text-sm text-[#aaaaaa]">
                <span>3M views</span><span class="h-1 w-1 rounded-full bg-[#aaaaaa]"></span
                ><span>3 year ago</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://fakeimg.pl/560x315/225523/"
            alt="video_preview"
            class="w-full rounded-xl"
          />
          <div class="flex p-2">
            <div>
              <ChannelLogo letter="Q" color="#119922" class="h-10 w-10" />
            </div>
            <div class="ml-2 flex w-full flex-col text-left">
              <div class="flex w-full items-center justify-between font-semibold">
                <span> Unboxing the World's Smallest Laptop </span>
                <EllipsisVerticalIcon class="h-6" />
              </div>
              <div class="flex items-center gap-2 text-sm text-[#aaaaaa]">
                <span>Puzzle Dog</span><CheckCircleIcon class="h-5" />
              </div>
              <div class="flex items-center gap-2 text-sm text-[#aaaaaa]">
                <span>10M views</span><span class="h-1 w-1 rounded-full bg-[#aaaaaa]"></span
                ><span>2 year ago</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://fakeimg.pl/560x315/981844/"
            alt="video_preview"
            class="w-full rounded-xl"
          />
          <div class="flex p-2">
            <div>
              <ChannelLogo letter="L" color="#883051" class="h-10 w-10" />
            </div>
            <div class="ml-2 flex w-full flex-col text-left">
              <div class="flex w-full items-center justify-between font-semibold">
                <span> I Tried Following a Bob Ross Painting Tutorial </span>
                <EllipsisVerticalIcon class="h-6" />
              </div>
              <div class="flex items-center gap-2 text-sm text-[#aaaaaa]">
                <span>Lifting power</span><CheckCircleIcon class="h-5" />
              </div>
              <div class="flex items-center gap-2 text-sm text-[#aaaaaa]">
                <span>883M views</span><span class="h-1 w-1 rounded-full bg-[#aaaaaa]"></span
                ><span>4 years ago</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://fakeimg.pl/560x315/883323/"
            alt="video_preview"
            class="w-full rounded-xl"
          />
          <div class="flex p-2">
            <div>
              <ChannelLogo letter="X" color="#676767" class="h-10 w-10" />
            </div>
            <div class="ml-2 flex w-full flex-col text-left">
              <div class="flex w-full items-center justify-between font-semibold">
                <span> React vs Vue – Which One Is Better? </span>
                <EllipsisVerticalIcon class="h-6" />
              </div>
              <div class="flex items-center gap-2 text-sm text-[#aaaaaa]">
                <span>Proj Paradise</span><CheckCircleIcon class="h-5" />
              </div>
              <div class="flex items-center gap-2 text-sm text-[#aaaaaa]">
                <span>6M views</span><span class="h-1 w-1 rounded-full bg-[#aaaaaa]"></span
                ><span>1 year ago</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://fakeimg.pl/560x315/119320/"
            alt="video_preview"
            class="w-full rounded-xl"
          />
          <div class="flex p-2">
            <div>
              <ChannelLogo letter="N" color="#322234" class="h-10 w-10" />
            </div>
            <div class="ml-2 flex w-full flex-col text-left">
              <div class="flex w-full items-center justify-between font-semibold">
                <span> Top 5 Hidden Features in iOS 18 </span>
                <EllipsisVerticalIcon class="h-6" />
              </div>
              <div class="flex items-center gap-2 text-sm text-[#aaaaaa]">
                <span>Scary slipper</span><CheckCircleIcon class="h-5" />
              </div>
              <div class="flex items-center gap-2 text-sm text-[#aaaaaa]">
                <span>20k views</span><span class="h-1 w-1 rounded-full bg-[#aaaaaa]"></span
                ><span>6 month ago</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://fakeimg.pl/560x315/375946/"
            alt="video_preview"
            class="w-full rounded-xl"
          />
          <div class="flex p-2">
            <div>
              <ChannelLogo letter="V" color="#453829" class="h-10 w-10" />
            </div>
            <div class="ml-2 flex w-full flex-col text-left">
              <div class="flex w-full items-center justify-between font-semibold">
                <span> Day in the Life of a Software Engineer </span>
                <EllipsisVerticalIcon class="h-6" />
              </div>
              <div class="flex items-center gap-2 text-sm text-[#aaaaaa]">
                <span>Day&Night</span><CheckCircleIcon class="h-5" />
              </div>
              <div class="flex items-center gap-2 text-sm text-[#aaaaaa]">
                <span>1M views</span><span class="h-1 w-1 rounded-full bg-[#aaaaaa]"></span
                ><span>2 year ago</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://fakeimg.pl/560x315/461111/"
            alt="video_preview"
            class="w-full rounded-xl"
          />
          <div class="flex p-2">
            <div>
              <ChannelLogo letter="S" color="#123443" class="h-10 w-10" />
            </div>
            <div class="ml-2 flex w-full flex-col text-left">
              <div class="flex w-full items-center justify-between font-semibold">
                <span> Coding a Game in 24 Hours – Challenge </span>
                <EllipsisVerticalIcon class="h-6" />
              </div>
              <div class="flex items-center gap-2 text-sm text-[#aaaaaa]">
                <span>Lowcosters</span><CheckCircleIcon class="h-5" />
              </div>
              <div class="flex items-center gap-2 text-sm text-[#aaaaaa]">
                <span>642K views</span><span class="h-1 w-1 rounded-full bg-[#aaaaaa]"></span
                ><span>1 year ago</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://fakeimg.pl/560x315/222212/"
            alt="video_preview"
            class="w-full rounded-xl"
          />
          <div class="flex p-2">
            <div>
              <ChannelLogo letter="K" color="#d8aaaa" class="h-10 w-10" />
            </div>
            <div class="ml-2 flex w-full flex-col text-left">
              <div class="flex w-full items-center justify-between font-semibold">
                <span> I Survived 24 Hours in a Haunted House </span>
                <EllipsisVerticalIcon class="h-6" />
              </div>
              <div class="flex items-center gap-2 text-sm text-[#aaaaaa]">
                <span>Pimping</span><CheckCircleIcon class="h-5" />
              </div>
              <div class="flex items-center gap-2 text-sm text-[#aaaaaa]">
                <span>61M views</span><span class="h-1 w-1 rounded-full bg-[#aaaaaa]"></span
                ><span>12 year ago</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://fakeimg.pl/560x315/777777/"
            alt="video_preview"
            class="w-full rounded-xl"
          />
          <div class="flex p-2">
            <div>
              <ChannelLogo letter="P" color="#d12322" class="h-10 w-10" />
            </div>
            <div class="ml-2 flex w-full flex-col text-left">
              <div class="flex w-full items-center justify-between font-semibold">
                <span> The Most Satisfying Video You'll See Today </span>
                <EllipsisVerticalIcon class="h-6" />
              </div>
              <div class="flex items-center gap-2 text-sm text-[#aaaaaa]">
                <span>MFR</span><CheckCircleIcon class="h-5" />
              </div>
              <div class="flex items-center gap-2 text-sm text-[#aaaaaa]">
                <span>3M views</span><span class="h-1 w-1 rounded-full bg-[#aaaaaa]"></span
                ><span>3 year ago</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://fakeimg.pl/560x315/142212/"
            alt="video_preview"
            class="w-full rounded-xl"
          />
          <div class="flex p-2">
            <div>
              <ChannelLogo letter="M" color="#d8826a" class="h-10 w-10" />
            </div>
            <div class="ml-2 flex w-full flex-col text-left">
              <div class="flex w-full items-center justify-between font-semibold">
                <span>Trying Weird Snacks from Around the World</span>
                <EllipsisVerticalIcon class="h-6" />
              </div>
              <div class="flex items-center gap-2 text-sm text-[#aaaaaa]">
                <span>Real life</span><CheckCircleIcon class="h-5" />
              </div>
              <div class="flex items-center gap-2 text-sm text-[#aaaaaa]">
                <span>452K views</span><span class="h-1 w-1 rounded-full bg-[#aaaaaa]"></span
                ><span>2 year ago</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://fakeimg.pl/560x315/342981/"
            alt="video_preview"
            class="w-full rounded-xl"
          />
          <div class="flex p-2">
            <div>
              <ChannelLogo letter="S" color="#d8aa6a" class="h-10 w-10" />
            </div>
            <div class="ml-2 flex w-full flex-col text-left">
              <div class="flex w-full items-center justify-between font-semibold">
                <span>This Trick Will Change Your Life</span>
                <EllipsisVerticalIcon class="h-6" />
              </div>
              <div class="flex items-center gap-2 text-sm text-[#aaaaaa]">
                <span>Lifehucker</span><CheckCircleIcon class="h-5" />
              </div>
              <div class="flex items-center gap-2 text-sm text-[#aaaaaa]">
                <span>1M views</span><span class="h-1 w-1 rounded-full bg-[#aaaaaa]"></span
                ><span>1 year ago</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped></style>
