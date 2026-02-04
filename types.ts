export enum InteractionType {
  NONE = 'NONE',
  LIGHT_LAMP = 'LIGHT_LAMP',
  OFFER_FLOWER = 'OFFER_FLOWER',
  RING_BELL = 'RING_BELL',
  READ_MORE = 'READ_MORE'
}

export interface StorySegment {
  id: string;
  title: string;
  content: string[]; // Array of paragraphs
  interactionRequired: InteractionType;
  bgImage?: string;
  icon?: string;
}

export interface AppState {
  currentSegmentIndex: number;
  segmentsUnlocked: number;
  lampLit: boolean;
  bellRung: boolean;
  flowersOffered: boolean;
}