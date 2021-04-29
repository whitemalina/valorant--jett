var app = new Vue({
    el: '#app',
    data: {
      message: 'Привет, Vue!',
      agents: [
          {
            "name" : "Jett",
            "country" : "South Korea",
            "storyline" : {
                1 : "In Valorant lore, Jett is an agile agent expert in the art of evasion. She overwhelms enemies and wounds them with a blade without them knowing her position.",
                2 : "Of Korean origin, Jett is an agile fighter who gives priority to movement. Her abilities focus on stealth with jumps that allow her to reach high ledges, teleportation, and smoke bombs. Her ultimate ability gives her kunaïs that inflict moderate to heavy damage, remaining very accurate even when she moves.",
                3 : "There are a total of six groups of weapons that players will be able to purchase at the start of each round with each costing a different amount based on their power and weapon type. None of the weapons are tied exclusively to a specific character, so players will be able to use any of the weapons available in the FPS, no matter the character they are using for a particular match."
            },
            "ability" : "Tailwind",
            "signature_abilities" : "Cloudburst, Updraft",
            "ultimate" : "Blade Storm",
            "abilities" : [
                {
                    "name": "CLOUDBURST",
                    "description" : "Deploys a cloud of smoke that obstructs the enemy's vision. Press the skill button a second time to lift the cloud.",
                    "imgpath" : "img/Ability/Vector (3).svg"
                },
                {
                    "name" : "UPDRAFT",
                    "description" : "Propels you through the air.",
                    "imgpath" : "img/Ability/Vector (4).svg"
                },
                {
                    "name" : "TAILWIND",
                    "description" : "Dashes a short distance in the direction you want to go.",
                    "imgpath" : "img/Ability/Vector (5).svg"
                },
                {
                    "name" : "BLADE STORM",
                    "description" : "Automatically equips the agent with various throwing knives that one shot if you hit the head. Performing a kill restores all the knives.",
                    "imgpath" : "img/Ability/Vector (6).svg"
                }
            ]
          }
      ]
    }
  })