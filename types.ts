
export enum InteractionType {
  NONE = 'NONE',
  LIGHT_LAMP = 'LIGHT_LAMP',
  OFFER_FLOWER = 'OFFER_FLOWER',
  RING_BELL = 'RING_BELL',
  READ_MORE = 'READ_MORE',
  APPLY_TILAK = 'APPLY_TILAK'
}

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export interface StorySegment {
  id: string;
  title: string;
  content: string[];
  interactionRequired: InteractionType;
  bgImage?: string;
  icon?: string;
  glossary?: GlossaryTerm[];
}

export interface BhairavaForm {
  id: string;
  name: string;
  translation: string;
  vehicle: string;
  direction?: string;
  description: string;
  mantra?: string;
  color: string;
  icon?: string;
  image?: string;
}

export interface AppState {
  currentSegmentIndex: number;
  segmentsUnlocked: number;
  lampLit: boolean;
  bellRung: boolean;
  flowersOffered: boolean;
  sankalpaSet: boolean;
  sankalpaText: string;
  isFocusMode: boolean;
}

export interface TithiInfo {
  name: string;
  sanskrit: string;
  significance: string;
  isSpecial: boolean;
}
