/**
 * Curated Unsplash image library used until Dt. Priyatama provides clinic-specific photography.
 * Every photo carries a credit (per Unsplash license — attribution is voluntary but ethical).
 *
 * Search URLs preserved in PLAN.md for replacement when client photos arrive.
 */

export type CuratedImage = {
  id: string;                      // CDN photo id (the part after `photo-` in the URL)
  url: string;                     // full CDN URL with formatting params
  alt: string;
  caption?: string;                // editorial caption for "press print" treatment
  credit: { photographer: string; username: string; sourceUrl: string };
};

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=78&auto=format&fit=crop`;

export const PHOTOS = {
  // Indian spices, ingredients, cooking
  indianSpicesWhite: {
    id: "1596040033229-a9821ebd058d",
    url: u("1596040033229-a9821ebd058d"),
    alt: "Indian spices arranged on a white surface — turmeric, chilli, cumin, coriander",
    caption: "Spice mise en place · Mumbai",
    credit: {
      photographer: "Ratul Ghosh",
      username: "ratulghoshr",
      sourceUrl: "https://unsplash.com/photos/NPrWYa69Mz0",
    },
  },
  spicesOnSpoons: {
    id: "1509358271058-acd22cc93898",
    url: u("1509358271058-acd22cc93898"),
    alt: "Essential Indian spices on metal spoons — turmeric, coriander, cumin",
    caption: "Daily medicine · Indian kitchen",
    credit: {
      photographer: "Pratiksha Mohanty",
      username: "pratiksha_mohanty",
      sourceUrl: "https://unsplash.com/photos/V0xp-dTS3z0",
    },
  },
  spiceBowls: {
    id: "1486548730767-5c679e8eda6b",
    url: u("1486548730767-5c679e8eda6b"),
    alt: "Colourful spice powders in bowls at an Indian market in Goa",
    caption: "Photographed in Goa",
    credit: {
      photographer: "Akhil Chandran",
      username: "akhiltchandran",
      sourceUrl: "https://unsplash.com/photos/lzfk5IMVpgo",
    },
  },

  // Botanical
  moringaLeaves: {
    id: "1771643033515-0028fd03b708",
    url: u("1771643033515-0028fd03b708"),
    alt: "Close-up of moringa oleifera leaves on the drumstick tree",
    caption: "Moringa oleifera · drumstick tree leaves",
    credit: {
      photographer: "David Clode",
      username: "davidclode",
      sourceUrl: "https://unsplash.com/photos/fz7nSSfQDZo",
    },
  },
  greenLeafBranch: {
    id: "1777721230394-9227e7a3a8a5",
    url: u("1777721230394-9227e7a3a8a5"),
    alt: "Vibrant green foliage on a branch — botanical close-up",
    credit: {
      photographer: "Israt Yasmin Piya",
      username: "israt5",
      sourceUrl: "https://unsplash.com/photos/aS1_fM17a7o",
    },
  },

  // Food / meals
  indianThali: {
    id: "1680993032090-1ef7ea9b51e5",
    url: u("1680993032090-1ef7ea9b51e5"),
    alt: "Traditional Indian thali meal with curries, lentils, rice, breads and chutneys",
    caption: "A working thali · Indian household",
    credit: {
      photographer: "Zoshua Colah",
      username: "zoshuacolah",
      sourceUrl: "https://unsplash.com/photos/dncjnYtmWHo",
    },
  },

  // Greens
  washedSpinach: {
    id: "1547058606-7eb25508e7e0",
    url: u("1547058606-7eb25508e7e0"),
    alt: "Fresh washed spinach leaves",
    caption: "Spinach · iron + folate",
    credit: {
      photographer: "Pille R. Priske",
      username: "pillepriske",
      sourceUrl: "https://unsplash.com/photos/Yk5KAB_l6ho",
    },
  },
  freshGreens: {
    id: "1741515042603-70545daeb0c4",
    url: u("1741515042603-70545daeb0c4"),
    alt: "Fresh leafy greens and lettuce at a market",
    caption: "Market morning",
    credit: {
      photographer: "Zoshua Colah",
      username: "zoshuacolah",
      sourceUrl: "https://unsplash.com/photos/sdDA-pMzW10",
    },
  },
} as const satisfies Record<string, CuratedImage>;

export type PhotoKey = keyof typeof PHOTOS;
