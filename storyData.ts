import { InteractionType, StorySegment } from './types';

export const storyData: StorySegment[] = [
  {
    id: 'intro',
    title: 'The Eternal Sentinel of Light',
    icon: 'Moon',
    content: [
      "In the heart of Kashi—the luminous city that even the Great Deluge cannot touch—the air is thick with the scent of wet earth and burning camphor. Here, where the Ganges whispers secrets of a thousand lifetimes, the cosmic order finds its most unexpected guardian.",
      "He does not appear as a terrifying titan of destruction. Instead, look closer into the shadows of the ancient alleyways. You will see a child, barely five years old, his skin the radiant hue of a blue lotus at dusk, his eyes shimmering with an ancient, playful wisdom that predates the stars.",
      "This is Batuka Bhairava. To the scholar, He is the esoteric nucleus of Tantra; to the commoner, He is the beloved boy who walks with a loyal dog. But to the one in crisis, He is the Aapatuddharak—the miraculous hands that reach through the darkness to pull a drowning soul into the light of Grace."
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
    title: 'The Shadow That Choked the Heavens',
    icon: 'CloudLightning',
    content: [
      "Eons ago, a shadow descended that even the Sun could not pierce. A demon named Aapad had woven a tapestry of chaos across the three worlds. Through terrifying penance, he had secured a boon from Brahma: 'May I be invincible to any man, god, or beast who has tasted the bitterness of age.'",
      "Aapad laughed, his voice like grinding stones. 'Who can stop a calamity that has no weapon to strike it?' He believed himself immortal because he had forgotten the power of the Unconditioned. He silenced the temple bells and turned the rivers into rivers of sand.",
      "The universe began to wilt. Fear became the only currency. The Devas, stripped of their radiance, realized they were facing an obstacle that power alone could not overcome. They needed a force that was simultaneously fierce and innocent."
    ],
    interactionRequired: InteractionType.RING_BELL,
    glossary: [
      { term: "Aapad", definition: "Meaning 'calamity' or 'emergency', representing the sudden obstacles we face in life." },
      { term: "Brahma", definition: "The Creator God in the Hindu Trinity (Trimurti)." }
    ]
  },
  {
    id: 'manifestation',
    title: 'The Outburst of Divine Radiance',
    icon: 'Sun',
    content: [
      "On the frozen peaks of Mount Kailash, Lord Shiva sat in a stillness so profound it held the weight of the universe. Beside him, Goddess Parvati watched as the Devas arrived, their faces etched with despair.",
      "Shiva did not draw his sword. He simply opened his eyes. In that moment, a pillar of fire erupted, tearing through the celestial fabric. From this blinding brilliance, a laughter rang out—sweet as a flute, yet deep as thunder.",
      "Stepping from the flames was a boy of unmatched beauty. His hair was adorned with peacock feathers, and around his neck hung a garland of wild forest flowers. In his small hands, he balanced the Trishula and the Kapala. He was the raw, unconditioned potency of Shiva, manifested in the form of a child."
    ],
    interactionRequired: InteractionType.OFFER_FLOWER,
    glossary: [
      { term: "Kailash", definition: "The sacred mountain abode of Lord Shiva in the Himalayas." },
      { term: "Kapala", definition: "A skull-cup used in tantric rituals, representing the ego being offered to the divine." }
    ]
  },
  {
    id: 'battle',
    title: 'The Play of Liberation',
    icon: 'Sword',
    content: [
      "The demon Aapad met the child on the cosmic battlefield. 'Go back to your mother, little one,' the demon sneered, reaching out with a claw of shadows. Batuka Bhairava merely tilted his head and smiled.",
      "What followed was not a war, but a Leela—a divine sport. As Aapad hurled mountains, the Child-God caught them like balls of cotton. As the demon unleashed storms of fear, Batuka laughed, and the sound shattered the shadows into dust.",
      "Realizing his end was near, the demon trembled. Batuka Bhairava took a single step, and the ground beneath Aapad turned into a sea of peace. With a touch lighter than a feather, the Lord's trident pierced the demon's heart, turning his malice into pure, white light."
    ],
    interactionRequired: InteractionType.NONE,
    glossary: [
      { term: "Leela", definition: "Divine play or sport; the concept that creation and destruction are effortless acts of the divine." },
      { term: "Vedas", definition: "The most ancient Hindu scriptures, here represented by the dog following Bhairava." }
    ]
  },
  {
    id: 'protector',
    title: 'The Promise of the Bell',
    icon: 'ShieldCheck',
    content: [
      "With the calamity lifted, the gods bowed in reverence. But Batuka Bhairava did not return to the high peaks. He looked towards the burning ghats and the crowded streets of Kashi and said: 'I shall stay here. For my children will always face demons of their own making—fear, doubt, and time.'",
      "He became the Kshetrapal, the guardian of the field. He promised that whoever calls upon him with the simplicity of a child would find their calamities dissolved before they even reached the door.",
      "Even now, it is said that in the dead of night, you can hear the tinkling of silver anklets in the narrow lanes of Varanasi. It is the Child-God, patrolling his city, making sure the shadows stay exactly where they belong—at his feet."
    ],
    interactionRequired: InteractionType.NONE,
    glossary: [
      { term: "Kshetrapal", definition: "The guardian or protector of a specific sacred area (Field)." }
    ]
  },
  {
    id: 'modern',
    title: 'Seal Your Devotion',
    icon: 'Heart',
    content: [
      "The story of Batuka Bhairava is not a tale of the past. It is a living pulse. Every obstacle in your path is but an invitation for the Radiant Child to step forward and play.",
      "As you reach the end of this journey, remember: The Divine is never further than a single, sincere call. Feed a hungry soul, protect the innocent, and the Guardian of Kashi will walk beside you forever.",
      "**Om Vatuka Bhairavaya Namaha**"
    ],
    interactionRequired: InteractionType.APPLY_TILAK
  }
];