export interface PokemonInterface {
  id: number;
  name: string;
  sprites: {
		front_default: string;
	};
	moves: {
		move: {
			name: string;
		}
	}[];
	types: {
		type: {
			name: string;
		}
	}[];
	abilities: {
		ability: {
			name: string;
		}
	}[];
	base_experience: string;
	forms: {
		name: string;
	}[];
	height: number;
	held_items: {
		item: {
			name: string;
		}
		version_details: {
			rarity: number;
			version: {
				name: string;
			}
		}
	}[];
	stats: {
		base_stat: number;
		effort: number;
		stat: {
			name: string;
		}
	}[];
	weight: number;
	message: string;
}