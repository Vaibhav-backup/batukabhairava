import { InteractionType, StorySegment } from './types';

export const storyData: StorySegment[] = [
  {
    id: 'intro',
    title: 'The Guardian of Kashi',
    icon: 'Moon',
    content: [
      "In the timeless city of Kashi, where the Ganges flows with the weight of ancient prayers, there exists a guardian unlike any other. He is not a towering warrior with thunderbolts, nor a sage in deep meditation. He is a child—barely five years old—radiant, innocent, yet holding the mysteries of the universe in his small hands.",
      "This is Batuka Bhairava, the child form of Lord Shiva. To the uninitiated, he appears as a playful boy accompanied by a dog. But to the seeker, he is the 'Aapatuddharak'—the swift remover of misfortunes. In the esoteric traditions of Tantra, he is the first gateway to grace, the one who takes the devotee by the finger and leads them through the terrifying darkness of ego into the light of awareness.",
      "But how did the Lord of Destruction, the fierce Mahakala, come to take such a tender, approachable form? The story takes us back to a time when the universe trembled under a shadow that no adult god could lift."
    ],
    interactionRequired: InteractionType.LIGHT_LAMP,
    glossary: [
      { term: "Kashi", definition: "Varanasi, the City of Light, the spiritual capital of India and the favorite abode of Lord Shiva." },
      { term: "Aapatuddharak", definition: "Sanskrit for 'He who lifts one out of a crisis or calamity'." },
      { term: "Tantra", definition: "A diverse group of Indian esoteric traditions emphasizing ritual and divine presence in the mundane." }
    ]
  },
  {
    id: 'crisis',
    title: 'The Shadow of Aapad',
    icon: 'CloudLightning',
    content: [
      "It began with a disturbance in the ether. A demon named Aapad had risen to power. Aapad was not just a physical being; he was the embodiment of sudden calamities, insurmountable obstacles, and the crushing weight of fear.",
      "Aapad had performed severe penance to please Lord Brahma. When the Creator appeared, Aapad asked for a boon so cunning it baffled the gods: 'May I be invincible against all gods, demons, humans, and beasts. Let no weapon forged by adults harm me. Let my end come only at the hands of a five-year-old child.'",
      "Aapad laughed as the boon was granted. In his arrogance, he believed no child could possess the strength to challenge him. Who would send a toddler to fight a titan? Secure in his immortality, Aapad unleashed a reign of terror. He blocked the paths of righteousness, choked the flow of rivers, and silenced the Vedic chants."
    ],
    interactionRequired: InteractionType.RING_BELL,
    glossary: [
      { term: "Aapad", definition: "Meaning 'calamity' or 'emergency', representing the sudden obstacles we face in life." },
      { term: "Brahma", definition: "The Creator God in the Hindu Trinity (Trimurti)." }
    ]
  },
  {
    id: 'manifestation',
    title: 'The Radiant Child',
    icon: 'Sun',
    content: [
      "Desperate, the Devas rushed to the summit of Mount Kailash. They found Lord Shiva in deep meditation, with the Goddess Parvati by his side. They bowed and wept, explaining the boon of Aapad and the hopelessness of their situation.",
      "Lord Shiva opened his eyes, which held the calmness of an infinite ocean. He exchanged a knowing glance with the Goddess. The solution was not to send a warrior, but to manifest the raw, unconditioned potential of the Divine.",
      "Suddenly, a blinding brilliance erupted from Shiva’s form. From this light, a figure emerged. He was a beautiful boy, appearing no older than five. His skin was the color of blue lotus flowers. His hair was matted yet adorned with peacock feathers. In his hands, he held a trishula (trident), a damaru (drum), and a kapala (skull-cup).",
      "The Devas gasped in awe. They sensed that this child carried the combined potency of the Trinity and the nurturing ferocity of the Mother Goddess. He was small, yet he cast a shadow that covered the universe."
    ],
    interactionRequired: InteractionType.OFFER_FLOWER,
    glossary: [
      { term: "Kailash", definition: "The sacred mountain abode of Lord Shiva in the Himalayas." },
      { term: "Kapala", definition: "A skull-cup used in tantric rituals, representing the ego being offered to the divine." }
    ]
  },
  {
    id: 'battle',
    title: 'The Divine Play',
    icon: 'Sword',
    content: [
      "Batuka Bhairava, followed by a celestial dog who was none other than the Vedas in animal form, descended to the battlefield. The demon laughed. 'Go home, little one, before you get hurt.'",
      "Batuka did not speak. He merely smiled. For him, this was not a war; it was 'Leela'—divine play. Aapad hurled a mountain; Batuka caught it like a ball. Aapad unleashed storms of fire; Batuka blew them out like a candle.",
      "The demon's amusement turned to terror. Batuka Bhairava grew in presence, his aura filling the sky. With a playful yet decisive movement, he raised his trident and pierced the demon's heart. Aapad dissolved not into blood, but into light, liberated by the touch of the Lord."
    ],
    interactionRequired: InteractionType.NONE,
    glossary: [
      { term: "Leela", definition: "Divine play or sport; the concept that creation and destruction are effortless acts of the divine." },
      { term: "Vedas", definition: "The most ancient Hindu scriptures, here represented by the dog following Bhairava." }
    ]
  },
  {
    id: 'protector',
    title: 'Aapatuddharak: The Savior',
    icon: 'ShieldCheck',
    content: [
      "With Aapad defeated, the gods named him 'Aapatuddharak Bhairava'. But Batuka chose to remain accessible. He took his place in Kashi and in the hearts of the simple.",
      "He declared, 'Whoever remembers me in their darkest hour, whoever treats the innocent with kindness, and whoever feeds the hungry, I shall stand by them like a rock.'",
      "He became the deity of the swift path. While other forms of Shiva might demand austere penance, Batuka asks only for a child-like trust. He is the guardian who walks the streets of Kashi at night, his silver anklets tinkling, ensuring his devotees sleep in peace."
    ],
    interactionRequired: InteractionType.NONE,
    glossary: [
      { term: "Kshetrapal", definition: "The guardian or protector of a specific sacred area (Field)." }
    ]
  },
  {
    id: 'modern',
    title: 'Whispers of Grace',
    icon: 'Heart',
    content: [
      "Even today, the presence of Batuka Bhairava is felt. Whether it's a student in Varanasi finding courage before an exam, or a traveler finding their way home in the dark alleys, his presence is a comforting whisper in the chaos of life.",
      "Batuka Bhairava teaches us that the Divine is not just a distant force, but a playful, protective presence waiting for us to simply call out his name.",
      "**Om Vatuka Bhairavaya Namaha**"
    ],
    interactionRequired: InteractionType.APPLY_TILAK
  }
];