import type { Work } from "@/components/Work/types";
import { Fragment } from "react";

export const workDatas: Work[] = [
  {
    title: "Mask Map",
    description: () => (
      <Fragment>
        <p className="mb-2 lg:mb-4">
          When people build mask maps in Taiwan. They usually use OSM and
          Leaflet. But I want to try the original
          <strong className="font-bold px-1">Google Maps API</strong>because its
          UI and API are beautiful and interesting.
        </p>
        <p>
          During this time, I've learned a lot about how to use
          <strong className="font-bold pl-1">Google Maps API</strong>.
        </p>
      </Fragment>
    ),
    imageUrl: "/images/works/maskMap_1.jpg",
    imagePosition: "bg-left",
    elementType: "sushi",
    source: "https://github.com/juker1141/maskMap",
  },
  {
    title: "Music",
    description: () => (
      <Fragment>
        <p className="mb-2 lg:mb-4">
          Build with
          <strong className="font-bold px-1">
            Vue CLI 4 & Vuex & Tailwind CSS
          </strong>
          , and use
          <strong className="font-bold px-1">Firebase Database</strong>
          to store users & songs data.
        </p>
        <p>
          On this side, project practice, I was more familiar with how to
          develop with Vue 3. Also, it was an excellent time to try to establish
          with Firebase.
        </p>
      </Fragment>
    ),
    imageUrl: "/images/works/music_1.jpg",
    imagePosition: "bg-center",
    elementType: "drink",
    source: "https://github.com/juker1141/music-vue",
  },
  {
    title: "Stores",
    description: () => (
      <Fragment>
        <p className="mb-2 lg:mb-4">
          I developed this website at my previous work, working in a hardware
          store then. And learn
          <strong className="font-bold px-1">Vue & Vuex</strong>in my free time.
        </p>
        <p>
          That's why I can develop this website from the point of view of the
          users. It has a complete CMS to check all products and orders on PC
          and mobile devices.
        </p>
      </Fragment>
    ),
    imageUrl: "/images/works/stores_1.jpg",
    imagePosition: "bg-center",
    elementType: "cactus",
    source: "https://github.com/juker1141/Stores",
  },
];
