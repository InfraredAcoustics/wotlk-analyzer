import { Spec } from '/wotlk/core/proto/common.js';
// import { DeathKnightTalents, DeathKnightMajorGlyph, DeathKnightMinorGlyph } from '/wotlk/core/proto/deathknight.js';
import { Player } from '/wotlk/core/player.js';

import { GlyphsConfig, GlyphsPicker } from './glyphs_picker.js';
import { TalentsConfig, TalentsPicker, newTalentsConfig } from './talents_picker.js';

export class DeathKnightTalentsPicker extends TalentsPicker<Spec.SpecDeathKnight> {
	constructor(parent: HTMLElement, player: Player<Spec.SpecDeathKnight>) {
		super(parent, player, deathKnightTalentsConfig);
	}
}

export class DeathKnightGlyphsPicker extends GlyphsPicker {
	constructor(parent: HTMLElement, player: Player<any>) {
		super(parent, player, DeathKnightGlyphsConfig);
	}
}

export const deathKnightTalentsConfig: TalentsConfig<Spec.SpecDeathKnight> = newTalentsConfig([
    {
        name: 'Blood',
		backgroundUrl: 'https://wow.zamimg.com/images/wow/talents/backgrounds/wrath/398.jpg',
		talents: []
    }, 
    {
        name: 'Frost',
		backgroundUrl: 'https://wow.zamimg.com/images/wow/talents/backgrounds/wrath/399.jpg',
		talents: []
    }, 
    {
        name: 'Unholy',
		backgroundUrl: 'https://wow.zamimg.com/images/wow/talents/backgrounds/wrath/400.jpg',
		talents: []
    }
]);

export const DeathKnightGlyphsConfig: GlyphsConfig = {
	majorGlyphs: {},
    minorGlyphs: {},
};