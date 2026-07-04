/* ============================================================
   MeiMei Academy — content data
   Edit the arrays below to swap in your own images, prompts,
   and workflows. Each gallery item and workflow step pulls its
   image from Picsum as a placeholder — replace `image` with a
   path to your own file (e.g. "images/my-shot.jpg") any time.
   ============================================================ */

const GALLERY_ITEMS = [
  {
    id: "g01",
    title: "Golden Hour Study",
    category: "Portrait",
    tool: "Midjourney v6",
    likes: 482,
    image: "Casual_Fashion_Portrait.webp",
    prompt: "Editorial portrait of a woman leaning against a sun-warmed plaster wall, golden hour side light raking across her cheekbone, soft film grain, 35mm lens, shallow depth of field, warm amber and terracotta palette, quiet confident expression, shot on Kodak Portra 400 --ar 4:5 --v 6"
  },
  {
    id: "g02",
    title: "Rain-Streaked Window",
    category: "Portrait",
    tool: "Flux 1.1 Pro",
    likes: 356,
    image: "Casual_Fashion_Showcase.webp",
    prompt: "Close-up portrait of a man seen through a rain-streaked window, cool blue-grey light, droplets softly blurring half the face, contemplative mood, cinematic color grade, shallow focus on the eye, ambient neon bleed in the background, hyper-detailed skin texture, 85mm lens"
  },
  {
    id: "g03",
    title: "Ceramic Pour",
    category: "Product",
    tool: "Nano Banana",
    likes: 298,
    image: "Casual_Menswear_Mannequin.webp",
    prompt: "Macro product shot of raw honey pouring over a matte ceramic bottle on dark wet stone, single softbox from camera left, glossy highlight along the pour, deep shadow falloff, studio background, tiny suspended droplets frozen mid-air, commercial beauty-product lighting"
  },
  {
    id: "g04",
    title: "Floating Sneaker Ad",
    category: "Product",
    tool: "Ideogram 2.0",
    likes: 410,
    image: "Casual_Fashion_Outfit.webp",
    prompt: "Levitating running sneaker mid-air against a seamless gradient studio backdrop, dramatic rim lighting, dust and fabric fibers frozen in motion around it, ultra-clean commercial render, subtle reflection on the floor, high-key advertising lighting, sharp focus"
  },
  {
    id: "g05",
    title: "Neon Alley, Two Frames Later",
    category: "Cinematic",
    tool: "Midjourney v6",
    likes: 601,
    image: "Casual_Fashion_Portrait.webp",
    prompt: "Cinematic wide shot of a rain-slicked alley at night, pink and cyan neon signage reflected in puddles, a lone figure walking away from camera, atmospheric fog, anamorphic lens flare, film noir color grade, 2.39:1 aspect, Roger Deakins lighting sensibility --ar 21:9"
  },
  {
    id: "g06",
    title: "Harbor Fog at Dawn",
    category: "Cinematic",
    tool: "Flux 1.1 Pro",
    likes: 275,
    image: "Casual_Fashion_Showcase.webp",
    prompt: "Wide establishing shot of a small fishing harbor at dawn, dense fog rolling over the water, silhouettes of moored boats, cool desaturated palette with a thin warm horizon line, muted painterly realism, quiet and still atmosphere, wide lens, low contrast"
  },
  {
    id: "g07",
    title: "Paper Lantern Village",
    category: "Concept",
    tool: "Stable Diffusion XL",
    likes: 333,
    image: "Casual_Menswear_Mannequin.webp",
    prompt: "Painterly concept art of a hillside village at dusk, hundreds of paper lanterns strung between rooftops, warm glowing light against a deep indigo sky, matte painting texture, soft brushwork, atmospheric depth, environment concept for a story world, wide composition"
  },
  {
    id: "g08",
    title: "Sunken Library",
    category: "Concept",
    tool: "Midjourney v6",
    likes: 512,
    image: "Casual_Fashion_Outfit.webp",
    prompt: "Concept illustration of an ancient library slowly flooding with clear water, shafts of light through a cracked ceiling, floating pages and dust motes, towering bookshelves fading into darkness, moody teal and gold palette, painterly detail, cinematic environment art"
  },
  {
    id: "g09",
    title: "Studio Turntable Loop",
    category: "Video",
    tool: "Runway Gen-4",
    likes: 244,
    image: "Casual_Fashion_Portrait.webp",
    prompt: "6-second seamless loop: a ceramic perfume bottle rotating slowly on a matte black turntable, soft studio key light sweeping across the glass, subtle dust particles catching the light, smooth constant rotation speed, clean commercial product-video pacing"
  },
  {
    id: "g10",
    title: "Slow Push Through Fog",
    category: "Video",
    tool: "Runway Gen-4",
    likes: 289,
    image: "Casual_Fashion_Showcase.webp",
    prompt: "Slow cinematic dolly push through a foggy pine forest at first light, camera drifting forward at a steady pace, shafts of light breaking through the canopy, gentle atmospheric haze, no cuts, 8-second continuous take, calm and meditative pacing"
  },
  {
    id: "v01",
    title: "Kling V2.6 — Fashion Film",
    category: "Video",
    tool: "Kling AI v2.6",
    likes: 518,
    image: "Casual_Fashion_Portrait.webp",
    video: "Kling V2.6 (7).mov",
    prompt: "Cinematic fashion film shot — model in editorial styling, slow motion movement, soft diffused studio light, shallow depth of field, 9:16 vertical format. Generated with Kling AI v2.6 at 720p/24fps."
  },
  {
    id: "v02",
    title: "Sample Output 1 — AI Video",
    category: "Video",
    tool: "Kling AI",
    likes: 374,
    image: "Casual_Fashion_Outfit.webp",
    video: "Output_Video1.mov",
    prompt: "AI-generated video output demonstrating prompt-driven motion control, consistent subject identity, and cinematic framing. Study the camera movement and lighting for replication in your own workflow."
  },
  {
    id: "v03",
    title: "Sample Output 2 — AI Video",
    category: "Video",
    tool: "Kling AI",
    likes: 291,
    image: "Casual_Fashion_Showcase.webp",
    video: "Output_Video2.mov",
    prompt: "AI-generated video output. Notice how the motion prompt controls speed, light direction, and subject flow — all reproducible with the included step-by-step prompt breakdown."
  },
  {
    id: "v04",
    title: "Sample Output 3 — AI Video",
    category: "Video",
    tool: "Kling AI",
    likes: 445,
    image: "Casual_Menswear_Mannequin.webp",
    video: "Output_Video3.mov",
    prompt: "AI-generated cinematic video loop. This output demonstrates background separation, atmospheric depth, and smooth subject motion — key elements of a pro-level AI video workflow."
  },
  {
    id: "v05",
    title: "Sample Output 4 — AI Video",
    category: "Video",
    tool: "Kling AI",
    likes: 362,
    image: "Casual_Fashion_Outfit.webp",
    video: "Output_Video4.mov",
    prompt: "AI-generated video output showcasing editorial-style motion. The prompt specifies lighting angle, subject posture, pacing, and background treatment — all unlockable with the full workflow guide."
  },
  {
    id: "v06",
    title: "Magnific Closeup — Kling Camera",
    category: "Video",
    tool: "Kling AI + Magnific",
    likes: 603,
    image: "Casual_Fashion_Portrait.webp",
    video: "magnific_closeup-camera-fixed-begin-with-a-slight-forward-l_kling_720p_9-16_24fps_51347.mov",
    prompt: "Camera: fixed. Begin with a slight forward lean — Magnific upscaled closeup at 720p, 9:16, 24fps. Kling motion prompt: camera fixed, subtle organic sway, macro closeup depth, Magnific enhancement pass for skin detail and texture recovery."
  },
  {
    id: "g11",
    title: "Terracotta Still Life",
    category: "Product",
    tool: "Nano Banana",
    likes: 198,
    image: "Casual_Menswear_Mannequin.webp",
    prompt: "Still life of terracotta pots and dried wheat stalks arranged on a linen cloth, soft window light from the left, warm earthy palette, gentle shadows, editorial food-and-home styling, shallow depth of field, quiet and textural composition"
  },
  {
    id: "g12",
    title: "Monsoon Portrait",
    category: "Portrait",
    tool: "Flux 1.1 Pro",
    likes: 372,
    image: "Casual_Fashion_Outfit.webp",
    prompt: "Portrait of a woman standing in monsoon rain, soaked hair clinging to her face, holding a translucent umbrella, muted green and grey street background, dramatic overcast light, raindrops sharply frozen, emotional and cinematic, medium telephoto compression"
  }
];

const WORKFLOWS = [
  {
    id: "w01",
    title: "Consistent-Face Relight Workflow",
    summary: "Lock a subject's identity once, then move them through pose, outfit, and lighting changes without losing likeness.",
    steps: [
      {
        label: "Base identity pass",
        tool: "Midjourney v6",
        image: "Workflow_Sample.webp",
        note: "Generate a clean, neutral, front-lit reference. Flat lighting is easier to relight later.",
        prompt: "Neutral studio headshot, plain grey seamless background, soft even front lighting, relaxed natural expression, no dramatic shadows, sharp focus on the eyes, 50mm lens --ar 1:1 --v 6"
      },
      {
        label: "Face lock, new pose",
        tool: "Flux 1.1 Kontext",
        image: "Workflow_Sample2.webp",
        note: "Feed the base image back in and change only pose and wardrobe, keeping the face reference untouched.",
        prompt: "Using the attached reference photo, keep the exact same face and identity. Change the pose to sitting at a café table, wearing a charcoal wool coat, same lighting as reference, photorealistic, no change to facial features"
      },
      {
        label: "Cinematic relight",
        tool: "Nano Banana",
        image: "Workflow_Sample3.webp",
        note: "Now push the mood: change the light and background while preserving the locked face.",
        prompt: "Keep the same person and face exactly as shown. Relight the scene with warm golden-hour side light through a café window, add gentle background bokeh, cinematic color grade, film-like contrast, preserve identity precisely"
      },
      {
        label: "Upscale & grain",
        tool: "Topaz / Magnific",
        image: "Workflow_Sample4.webp",
        note: "Finish with a 4x upscale and a light grain pass so it reads like a real photograph, not a render.",
        prompt: "Upscale 4x, creativity 3, resemblance 8, add fine 35mm film grain, subtle chromatic aberration at the edges, preserve skin texture detail, no plastic smoothing"
      }
    ]
  },
  {
    id: "w02",
    title: "Product Hero-Shot Workflow",
    summary: "Take a plain product render from a flat studio shot to a full advertising hero image in four passes.",
    steps: [
      {
        label: "Clean studio base",
        tool: "Nano Banana",
        image: "Workflow_Sample.webp",
        note: "Start flat and correct. Fix the geometry and materials before adding any drama.",
        prompt: "Product photo of a matte black skincare bottle, centered on a seamless white studio background, soft even lighting, no shadows, straight-on angle, accurate label and material rendering, catalog-style clarity"
      },
      {
        label: "Add environment",
        tool: "Ideogram 2.0",
        image: "Workflow_Sample2.webp",
        note: "Drop the product into a believable scene and let a reflection sell the surface.",
        prompt: "Place the same bottle on a wet dark stone surface with a soft reflection beneath it, add a blurred spa-like background with green foliage, moody directional light from top left, keep the product perfectly sharp"
      },
      {
        label: "Add motion element",
        tool: "Nano Banana",
        image: "Workflow_Sample3.webp",
        note: "A single splash or falling ingredient makes the shot feel alive.",
        prompt: "Add a splash of water frozen mid-motion around the base of the bottle, droplets catching the key light, keep the product and reflection unchanged, high-speed photography feel, crisp droplet edges"
      },
      {
        label: "Final color grade",
        tool: "Nano Banana",
        image: "Workflow_Sample4.webp",
        note: "Grade last, once composition is locked, so the mood reads as one deliberate choice.",
        prompt: "Apply a cool-toned commercial color grade, deepen the shadows slightly, add subtle vignette, boost contrast on the highlight along the bottle edge, keep label colors accurate for print"
      }
    ]
  },
  {
    id: "w03",
    title: "Still-Frame-to-Motion Workflow",
    summary: "Design the frame as a photo first, then bring it to life — it's easier to art-direct a still than a moving image.",
    steps: [
      {
        label: "Generate the still frame",
        tool: "Midjourney v6",
        image: "Workflow_Sample.webp",
        note: "Compose the exact first frame of the shot, including where the camera will end up moving.",
        prompt: "Wide establishing shot of a foggy pine forest at first light, camera positioned low near the forest floor, shafts of light breaking through the canopy in the distance, calm atmospheric haze, cinematic 2.39:1 framing --ar 21:9"
      },
      {
        label: "Upscale for video",
        tool: "Topaz Video AI",
        image: "Workflow_Sample2.webp",
        note: "Video models want clean, high-resolution input — upscale before animating, not after.",
        prompt: "Upscale to 4K, sharpen fine detail in the tree bark and haze, remove any compression artifacts, preserve the soft atmospheric falloff in the background"
      },
      {
        label: "Animate the frame",
        tool: "Runway Gen-4",
        image: "Workflow_Sample3.webp",
        note: "Keep the motion instruction simple — one camera move, one pace, no competing actions.",
        prompt: "Slow continuous dolly push forward through the forest, steady constant speed, gentle drift of fog and light rays, no cuts, 8 seconds, calm meditative pacing, no character movement"
      },
      {
        label: "Sound & grade note",
        tool: "Manual pass",
        image: "Workflow_Sample4.webp",
        note: "Not a prompt — a reminder. Layer in ambient forest sound and a final LUT once picture is locked.",
        prompt: "Add distant birdsong and soft wind ambience, low-pass filtered for depth, apply a cool teal-leaning LUT to match the reference frame, keep the grade consistent across the whole clip"
      }
    ]
  },
  {
    id: "w04",
    title: "Painterly Concept Environment Workflow",
    summary: "The route from a rough thumbnail to a finished concept painting, the way a matte painter would block it in.",
    steps: [
      {
        label: "Thumbnail composition",
        tool: "Stable Diffusion XL",
        image: "Workflow_Sample.webp",
        note: "Work small and loose first. Solve the composition before any detail exists to distract you.",
        prompt: "Rough thumbnail composition, ancient library slowly flooding with water, strong value contrast, simple shapes, dramatic light shaft from a cracked ceiling, no detail, focus purely on silhouette and composition"
      },
      {
        label: "Detail pass",
        tool: "Midjourney v6",
        image: "Workflow_Sample2.webp",
        note: "Using the thumbnail as a layout reference, push in real texture and material detail.",
        prompt: "Using the composition as reference, render in full painterly detail: towering wooden bookshelves, floating loose pages, rippling water surface, dust motes in the light shaft, rich texture throughout, matte painting style"
      },
      {
        label: "Lighting & mood pass",
        tool: "Nano Banana",
        image: "Workflow_Sample3.webp",
        note: "Adjust color temperature and contrast until the mood matches the story beat it needs to serve.",
        prompt: "Keep the composition and detail unchanged. Shift the palette toward deep teal shadows and warm gold highlights, increase contrast around the light shaft, add subtle volumetric haze in the water-logged air"
      },
      {
        label: "Final polish & upscale",
        tool: "Topaz / Magnific",
        image: "Workflow_Sample4.webp",
        note: "Finish with an upscale pass tuned for painterly work, which needs less sharpening than photography.",
        prompt: "Upscale 2x, creativity 2, resemblance 9, preserve visible brushwork texture, avoid photographic sharpening, keep edges soft where the original painting intended softness"
      }
    ]
  }
];
