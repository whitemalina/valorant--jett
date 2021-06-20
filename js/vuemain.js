var app = new Vue({
  el: "#app",
  data: {
    animation: null,
    animation: {
      story: null,
      info: null,
      ability: null,
      name: null,
    },
    mas: [],
    agents_now: [],
    video : "img/Valorant.mp4",
    video_status: true,
    weapons: [
      {
        name: "GUARDIAN",
        type: "RIFLES",
        price: "2,700",
        img_path: "img/weapons/weapon_1.png",
      },
      {
        name: "SPECTRE",
        type: "SMGS",
        price: "1,600",
        img_path: "img/weapons/weapon_2.png",
      },
      {
        name: "SHERIFF",
        type: "SIDEARM",
        price: "900",
        img_path: "img/weapons/weapon_3.png",
      },
    ],
    
    agents: [
      {
        name: "Jett",
        country: "Korea",
        storyline: {
          1: "In Valorant lore, Jett is an agile agent expert in the art of evasion. She overwhelms enemies and wounds them with a blade without them knowing her position.",
          2: "Of Korean origin, Jett is an agile fighter who gives priority to movement. Her abilities focus on stealth with jumps that allow her to reach high ledges, teleportation, and smoke bombs. Her ultimate ability gives her kunaïs that inflict moderate to heavy damage, remaining very accurate even when she moves.",
          3: "There are a total of six groups of weapons that players will be able to purchase at the start of each round with each costing a different amount based on their power and weapon type. None of the weapons are tied exclusively to a specific character, so players will be able to use any of the weapons available in the FPS, no matter the character they are using for a particular match.",
        },
        ability: "Tailwind",
        
        signature_abilities: "Cloudburst",
        ultimate: "Blade Storm",
        img_path: "img/Jett.png",
        video_path: "img/Jett.mp4",
        abilities: [
          {
            name: "CLOUDBURST",
            description:
              "Deploys a cloud of smoke that obstructs the enemy's vision. Press the skill button a second time to lift the cloud.",
            imgpath: "img/Ability/Cloudburst.png",
          },
          {
            name: "UPDRAFT",
            description: "Propels you through the air.",
            imgpath: "img/Ability/Updraft.png",
          },
          {
            name: "TAILWIND",
            description:
              "Dashes a short distance in the direction you want to go.",
            imgpath: "img/Ability/Tailwind.png",
          },
          {
            name: "BLADE STORM",
            description:
              "Automatically equips the agent with various throwing knives that one shot if you hit the head. Performing a kill restores all the knives.",
            imgpath: "img/Ability/Blade_Storm.png",
          },
        ],
      },
      {
        name: "Sage",
        country: "China",
        storyline: {
          1: "Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off forceful assaults, she provides a calm center to a hellish battlefield",
          2: "The most prominent support character to date hails from China and brings orbs that heal allies, slow enemies, and create barriers out of the ground to impede the flow of a match. The most prominent support character to date hails from China and brings orbs that heal allies, slow enemies",
          3: "There are a total of six groups of weapons that players will be able to purchase at the start of each round with each costing a different amount based on their power and weapon type. None of the weapons are tied exclusively to a specific character, so players will be able to use any of the weapons available in the FPS, no matter the character they are using for a particular match.",
        },
        ability: "Barrier Orb, Slow Orb",
        signature_abilities: "Healing Orb",
        ultimate: "Resurrection",
        img_path: "img/sage.png",
        video_path: "img/sage.mp4",
        abilities: [
          {
            name: "BARRIER ORB",
            description:
              "Fire places a solid wall. Alternate fire rotates the targeter. The wall fortifies after a 3-second delay, increasing its health",
            imgpath: "img/Ability/Barrier_Orb.png",
          },
          {
            name: "SLOW ORB",
            description: "Fire to launch the Orb, which expands upon hitting the ground, creating a zone that slows players who walk on it.",
            imgpath: "img/Ability/Slow_Orb.png",
          },
          {
            name: "HEALING ORB",
            description: "Fire with your crosshairs over a damaged ally to activate a heal-over-time on them.",
            imgpath: "img/Ability/Healing_Orb.png",
          },
          {
            name: "RESURRECTION",
            description: "Fire with your crosshairs placed over an ally's corpse to begin resurrecting them",
            imgpath: "img/Ability/Resurrection.png",
          },
        ],
      },
      {
        name: "Sova",
        country: "Russia",
        storyline: {
          1: "Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision",
          2: "His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.Originally, Sova was supposed to be a female and was supposed to have a visor.An archery expert, he can equip his bow with different bolts that reveal enemy locations or shock nearby adversaries",
          3: "Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.An archery expert, he can equip his bow with different bolts that reveal enemy locations or shock nearby adversaries. He can also deploy a recon drone to survey the battlefield, while his ultimate lets him fire three deadly arrow shots through walls",
        },
        ability: "Owl Drone, Shock Bolt",
        signature_abilities: "Recon Bolt",
        ultimate: "Hunter's Fury",
        img_path: "img/Sova.png",
        video_path: "img/Sova.mp4",
        abilities: [
          {
            name: "OWL DRONE",
            description: "Fire to deploy and take control of movement of the drone. While in control of the drone, Fire to shoot a marking dart. This dart will periodically reveal the location of its target.",
            imgpath: "img/Ability/Owl_Drone.png",
          },
          {
            name: "SHOCK BOLT",
            description: "Fire to send the explosive bolt forward detonating upon collision and damaging players nearby",
            imgpath: "img/Ability/Shock_Bolt.png",
          },
          {
            name: "RECON BOLT",
            description: "Fire to send the bolt forward activating upon collision and revealing the location of nearby enemies caught in the line of sight of the bolt",
            imgpath: "img/Ability/Recon_Bolt.png",
          },
          {
            name: "HUNTER'S FURY",
            description: "Equip a bow with three long-range, wall-piercing energy blasts. Fire to release a blast in a line in front of Sova dealing damage",
            imgpath: "img/Ability/Hunters_Fury.png",
          },
        ],
      },
      
    ],
  },
  mounted(){
      this.agentswitch(0)
      this.animation.story = null
      this.animation.info = null
      this.animation.abilityin = null
  },
  methods: {
    agentswitch(agent_id) {
      this.mas[0] = null
      this.mas[1] = null
      this.mas[2] = null
        switch(agent_id) {
          case 0: this.mas[0] = "agent_switch-btn-active" 
          break
          case 1: this.mas[1] = "agent_switch-btn-active"
          break
          case 2: this.mas[2] = "agent_switch-btn-active"
          
        }
        this.animation.story = "animation: val 0.5s cubic-bezier(0.98,-0.01, 0, 1.01) forwards "
        this.animation.info = "animation: opacity-set 0.5s cubic-bezier(0.98,-0.01, 0, 1.01) forwards "
        this.animation.name = "animation: valsecond 0.5s cubic-bezier(0.98,-0.01, 0, 1.01) forwards "
        this.animation.ability = "animation: opacity-set 0.5s cubic-bezier(0.98,-0.01, 0, 1.01) forwards "
        setTimeout(() => {
          this.agents_now = this.agents[agent_id] 
          console.log(this.agents_now)
        }, 100);
        
        setTimeout(() => {
          this.animation.story = null
          this.animation.info = null
          this.animation.ability = null
          this.animation.name = null
        }, 500);
    }
  }
});
